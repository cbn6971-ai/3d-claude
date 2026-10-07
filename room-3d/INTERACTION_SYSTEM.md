# 通用家具交互配置（v1.2.0）

实际数据源是`dist/interaction_config.json`。修改后运行`npm run build`，配置会与引擎一起嵌入首屏HTML；没有新增配置网络请求。坐标为`[x, height, z]`，单位米；来自当前scene.json的`[x,y,z]`需要转换为`[x,z,y]`。不要在修改配置时重新生成房屋。

每项统一包含以下六个字段：

| 字段 | 用途 |
| --- | --- |
| object | 当前模型中的部件名；用于识别和遮挡过滤 |
| interactionPoints | 提示目标position、可站立的approach `[x,z]`、横向触发range |
| actions | 通用动作kind、标签、可执行姿态available |
| cameraPose | 眼部位置、yaw/pitch、转头范围、过渡waypoints |
| animation | 当前部件的旋转/平移/折叠/光照等动画描述 |
| state | 初始开合/通电/姿态；运行状态由统一系统管理 |

下面展示如何配置一个已有椅子。同类家具只要增加配置，不需要在控制器里增加分支。眼部高度按座面高度加约0.70m；approach必须落在可通行地面上。

```json
{
  "id": "extra_chair",
  "label": "椅子",
  "object": ["Existing_chair_seat", "Existing_chair_back"],
  "interactionPoints": [{"position": [1.0, 1.05, 2.0], "approach": [1.52, 2.0], "range": 1.35}],
  "actions": [
    {"id": "stand", "label": "起身", "kind": "release", "available": ["occupied"]},
    {"id": "sit", "label": "坐下", "kind": "pose", "cameraPose": "sit", "available": ["standing"]}
  ],
  "cameraPose": {"sit": {"position": [1.0, 1.19, 2.0], "yaw": 1.5708, "pitch": -0.17, "waypoints": [], "yawLimit": 1.4, "pitchLimits": [-0.85, 1.25]}},
  "animation": [],
  "state": {"posture": "standing"}
}
```

该示例中的部件名只是格式示例，需替换成现有scene.json里的真实名称。它不会凭空新增椅子。yaw=0看向-z，yaw=π/2看向-x，yaw=π看向+z；pitch正值抬头，负值低头，角度单位为弧度。

`pose`使用cameraPose定位眼睛，先在简化碰撞地面中找路到approach，再经过waypoints进入姿势。起身沿安全站立路线返回动作前位置；推摇杆等价于请求起身，不会直接从家具里开始走。位姿动画期间锁住平移，完成后允许受限转头。`sleep:true`表示姿势完成后逐渐闭眼，起身渐亮；不包含睡眠时钟。

`toggle`需要channel（通常open/on）及labels `[关闭状态时的标签, 打开状态时的标签]`。通用动画如下：

| animation.type | 描述 |
| --- | --- |
| rotate | parts绕pivot旋转，axis一般y，amount为打开角度 |
| translate | parts按offset平移 |
| transform | 窗帘等parts在closedOffset/closedScale与原位置之间插值 |
| light | 现有灯罩发光并控制position的PointLight，带color/intensity/distance |
| emissive | 现有设备的可见通电/发热指示 |
| screen | 现有屏幕上的轻量显示纹理及亮灭 |
| water | 现有淋浴喷头下的轻量实例水流 |

rotate/translate的initial表示原模型对应的进度，默认为0（关）。原模型已经打开的入户门/移门设置initial=1；位置不在进入漫游时跳变。collision=true为可动门板同步简化AABB，动作撞到玩家则回退；窗帘和玻璃不改变住宅边界。非交互期间沿用每个大型家具的简化碰撞范围。

一体实心柜体可通过`frontPartition`指定body/front/kind/count/index/name，在生活模式中从原外包络拆出面板。`openBodies`声明已存在门板后的柜体开口。`glassPartition`把原玻璃的外包络分为固定和可滑动两片。它们均不修改保存的scene.json或Blender/GLB/USDZ，也不补造高精度家具内部。

`InteractionSystem`按距离、准星方向和简化遮挡选择目标，统一执行动作、锁定移动、镜头转换和状态管理。`interactive_scene`只处理通用动画类型；家具差异都由配置描述。新增同类家具或动作直接添加配置；如果要引入全新的行为类型，再扩展一个通用处理器。

操作状态仅保存在当前页面内，退出漫游后重新进入保留门窗/设备开关；刷新页面恢复初始配置。姿态每次进入恢复站立。原Viewer始终显示原静态模型，退出时还原相机、视野、图层和输入监听。

`npm run check`执行真实Three.js数学/几何、碰撞与输入代码，以及使用DOM/渲染器替身的Viewer集成检查。此环境没有浏览器QA与实体iPhone，报告中的通过不等于Safari实机验证。

## 手感参数与状态 v1.2.1

`duration`是每对象临界阻尼响应的时间参数（门0.88、移门/抽屉0.66、窗帘1.15、灯0.38秒）；`cameraPose.duration`与`releaseDuration`是姿态进出最短过渡时间。较长路线额外按距离延长，使用端点速度/加速度为零的五次easing，转角只在45mm眼部扫掠检查通过时圆滑化。

站立接近检测严格沿用每个point.range；通常1.15m。准星入选阈值dot0.90，留选dot0.84且只给提示额外0.10m余量；执行前仍检查原始range和遮挡。获取停留120ms、不同目标切换200ms、失去目标保留180ms，再淡出提示。隐藏/淡出/换目标期间按钮禁用，避免视觉提示与真正执行对象错位。

每个动画持有目标、当前位置、速度与上一次安全端点。重复toggle保留当前位置/速度，只反转目标，最后一次点击决定状态；阻挡回退沿用同一调度器，不新增每件家具控制器。退出漫游暂停动画，重进继续；刷新重置。

坐卧进出期间锁定移动；过渡完成后镜头以平滑目标角转头并按pose的yawLimit/pitchLimits限幅。起身请求不会中断半途坐下；摇杆保持输入时，在进入姿态完成后接续起身，返回安全地面后再恢复移动。站立轻微head bob随实际移动距离推进，最大幅度3mm，停下淡出，不应用于坐卧。
