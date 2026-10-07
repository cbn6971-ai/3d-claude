"""Pure-Python, renderer-independent parametric scene. All physical inputs in parameters.json."""
import math,json
from pathlib import Path

def build(document):
 p={k:d['value'] for k,d in document['parameters'].items()}
 g=lambda k:p[k]
 W=g('body_width');B=g('body_depth');S=g('service_depth');L=B+S;D=B*g('bedroom_fraction');H=g('wall_height');T=g('outer_wall_thickness');t=g('inner_wall_thickness')
 nodes=[];name_counts={}
 def node(name,shape,loc,size,mat='wall',layer='structure',rot=(0,0,0),**kw):
  count=name_counts.get(name,0);name_counts[name]=count+1
  if count:name=name+f'_{count:02d}'
  n={'name':name,'shape':shape,'position':list(loc),'size':list(size),'material':mat,'layer':layer,'rotation':list(rot)};n.update(kw);nodes.append(n);return n
 def box(name,x,y,z,dx,dy,dz,mat='wall',layer='structure',**kw):return node(name,'box',(x,y,z),(dx,dy,dz),mat,layer,**kw)
 def cyl(name,x,y,z,r,h,mat='dark',layer='furniture',**kw):return node(name,'cylinder',(x,y,z),(r,r,h),mat,layer,**kw)
 def ball(name,x,y,z,rx,ry,rz,mat='white',layer='soft',**kw):return node(name,'sphere',(x,y,z),(rx,ry,rz),mat,layer,**kw)
 def wall(name,axis,fixed,start,end,thick,holes=(),layer='structure',side=None):
  # Hole intervals along the wall, with sill/head heights; lintels remain real geometry.
  cut=sorted(holes,key=lambda q:q[0]); pos=start
  def segment(a,b,lo,hi,suffix):
   if b-a<1e-4 or hi-lo<1e-4:return
   args=( (a+b)/2,fixed,(lo+hi)/2,b-a,thick,hi-lo) if axis=='x' else (fixed,(a+b)/2,(lo+hi)/2,thick,b-a,hi-lo)
   box(name+'_'+suffix,*args,layer=layer,side=side,wall=True)
  for i,(a,b,lo,hi) in enumerate(cut):
   segment(pos,a,0,H,str(i)+'solid');segment(a,b,0,lo,str(i)+'sill');segment(a,b,hi,H,str(i)+'lintel');pos=b
  segment(pos,end,0,H,'last')
 def window(name,axis,fixed,start,width,sill,height,transom=.30,bars=False):
  # Frame/glass remain toggleable with exterior walls.
  fw=.055;z=sill+height/2
  def wb(suffix,u,h,du,dh,mat='dark',depth=.07):
   args=(u,fixed,h,du,depth,dh) if axis=='x' else (fixed,u,h,depth,du,dh)
   box(name+'_'+suffix,*args,mat,'exterior',side='glazing')
  for i,u in enumerate([start,start+width]):wb('jamb'+str(i),u,z,fw,height)
  for i,h in enumerate([sill,sill+height,sill+height-transom]):wb('rail'+str(i),start+width/2,h,width,fw)
  wb('middle',start+width/2,sill+(height-transom)/2,fw,height-transom)
  wb('glass',start+width/2,z,width-.07,height-.07,'glass',.014)
  if bars:
   for i in range(1,10):wb('guard'+str(i),start+width*i/10,sill+.90,.014,1.7,'metal',.014)
   wb('guard_cross',start+width/2,sill+1.02,width,.018,'metal',.018)
  return
 # Floors and clearly separated ceiling.
 box('Floor_body',W/2,L/2,-g('floor_thickness')/2,W+T*2,L+T*2,g('floor_thickness'),'tile')
 box('Ceiling',W/2,L/2,H+.055,W+T*2,L+T*2,.11,'wall','ceiling')
 for x in range(1,int(W/.65)+1):box('Tile_joint_x'+str(x),x*.65,L/2,.001,.008,L,.003,'grout')
 for y in range(1,int(L/.65)+1):box('Tile_joint_y'+str(y),W/2,y*.65,.001,W,.008,.003,'grout')
 bx=g('balcony_door_x');bw=g('balcony_door_width');bh=g('balcony_door_height')
 eo=L-g('entry_offset_from_end')-g('entry_width');ew=g('entry_width')
 lw=D+g('living_window_offset');lww=g('living_window_width');bs=g('bath_window_sill');wh=g('bath_window_height')
 rightHoles=[(lw,lw+lww,g('living_window_sill'),g('living_window_sill')+g('living_window_height'))]
 if g('bath_window_wall')=='right':rightHoles.append((B+.45,B+.45+g('bath_window_width'),bs,bs+wh))
 wall('Wall_balcony','x',-T/2,0,W,T,[(bx,bx+bw,0,bh)],'exterior','balcony')
 wall('Wall_left','y',-T/2,0,L,T,[(eo,eo+ew,0,g('entry_height'))],'exterior','left')
 wall('Wall_right','y',W+T/2,0,L,T,rightHoles,'exterior','right')
 endHoles=[] if g('bath_window_wall')=='right' else [(g('bath_window_x'),g('bath_window_x')+g('bath_window_width'),bs,bs+wh)]
 wall('Wall_end','x',L+T/2,0,W,T,endHoles,'exterior','end')
 ox=g('bedroom_opening_x');ow=g('bedroom_opening_width')
 wall('Partition_bedroom','x',D,0,W,t,[(ox,ox+ow,0,g('bedroom_opening_height'))])
 kx=g('kitchen_left_x');bathx=g('bathroom_left_x');do=B+g('bathroom_door_offset');dw=g('bathroom_door_width')
 wall('Partition_kitchen_left','y',kx,B,L,t)
 wall('Partition_bath_left','y',bathx,B,L,t,[(do,do+dw,0,g('bathroom_door_height'))])
 wall('Partition_bath_front','x',B,bathx,W,t)
 # Doorframes and open leaves.
 def doorway(name,x,y,axis,width,height):
  if axis=='y':
   for i,a in enumerate([y-width/2,y+width/2]):box(name+'_frame'+str(i),x,a,height/2,.07,.055,height,'dark')
   box(name+'_head',x,y,height,.07,width,.055,'dark')
  else:
   for i,a in enumerate([x-width/2,x+width/2]):box(name+'_frame'+str(i),a,y,height/2,.055,.07,height,'dark')
   box(name+'_head',x,y,height,width,.07,.055,'dark')
 doorway('Entry',0,eo+ew/2,'y',ew,g('entry_height'))
 angle=math.radians(-72);hinge=(.01,eo+ew)
 center=(hinge[0]+math.sin(-angle)*ew/2,hinge[1]-math.cos(angle)*ew/2)
 box('Entry_leaf_open',*center,g('entry_height')/2,.045,ew,g('entry_height')-.05,'white',rot=(0,0,-angle))
 cyl('Entry_handle',center[0]+.02,center[1],1.02,.022,.13,'dark',rot=(0,math.pi/2,0))
 doorway('Bath_slider',bathx,do+dw/2,'y',dw,g('bathroom_door_height'))
 box('Bath_slider_glass',bathx,do+dw*.95,g('bathroom_door_height')/2,.045,dw*.65,g('bathroom_door_height')-.08,'frosted')
 box('Bath_slider_pull',bathx-.043,do+dw*.80,1.05,.025,.025,.26,'dark')
 doorway('Bedroom_opening',ox+ow/2,D,'x',ow,g('bedroom_opening_height'))
 if g('bedroom_has_door'):box('Bedroom_leaf',ox+ow/2,D+.05,1.05,ow,.04,2.1,'white')
 window('Balcony_sliding','x',0,bx,bw,0,bh,g('balcony_door_transom'),True)
 window('Living_window','y',W,lw,lww,g('living_window_sill'),g('living_window_height'),.35)
 if g('bath_window_wall')=='end':window('Bath_window','x',L,g('bath_window_x'),g('bath_window_width'),bs,wh,.20)
 else:window('Bath_window','y',W,B+.45,g('bath_window_width'),bs,wh,.20)
 # Visible balcony platform; no invented enclosed balcony.
 px=g('balcony_x');pw=g('balcony_width');pd=g('balcony_depth')
 box('Balcony_platform',px+pw/2,-pd/2,-.07,pw,pd,.14,'tile')
 for i in range(11):cyl('Balcony_railing'+str(i),px+pw*i/10,-pd, .48,.012,.96,'metal','exterior',side='balcony')
 box('Balcony_toprail',px+pw/2,-pd,.98,pw,.026,.03,'metal','exterior',side='balcony')
 # Bed, right-wall head. Geometry deliberately simple for structural validation.
 bl=g('bed_length');bd=g('bed_width');bedx=W-g('bed_right_gap')-bl/2;bedy=D*g('bed_y_fraction');fh=g('bed_frame_height');mh=g('bed_mattress_height')
 box('Bed_frame',bedx,bedy,fh/2,bl,bd,fh,'white','furniture',bevel=.025)
 box('Bed_mattress',bedx,bedy,fh+mh/2,bl-.06,bd-.04,mh,'gray','furniture',bevel=.05)
 box('Bed_headboard',W-g('bed_right_gap'),bedy,g('bed_head_height')/2,.06,bd+.09,g('bed_head_height'),'white','furniture',bevel=.025)
 for yy in [bedy-bd*.25,bedy+bd*.25]:box('Pillow',bedx+bl*.27,yy,fh+mh+.07,.52,.63,.14,'gray','soft',bevel=.065)
 box('Bedding',bedx-.16,bedy,fh+mh+.025,bl*.72,bd,.04,'gray','soft',bevel=.025)
 for i in range(13):box('Bedding_stripe'+str(i),bedx-.16,bedy-bd/2+.06+i*(bd-.12)/12,fh+mh+.047,bl*.72,.015,.003,'stripe','soft')
 box('Cream_throw',bedx-bl*.26,bedy,fh+mh+.07,.48,bd+.06,.06,'oat','soft',bevel=.025)
 box('Bed_rug',bedx-.23,bedy,.012,g('rug_bed_width'),g('rug_bed_depth'),.02,'oat','soft')
 # Wardrobe along right wall near balcony.
 vd=g('wardrobe_depth');vw=g('wardrobe_width');vh=g('wardrobe_height');vy=g('wardrobe_front_offset')+vw/2
 box('Wardrobe_body',W-vd/2-.03,vy,vh/2,vd,vw,vh,'white','furniture',bevel=.014)
 for i in [-1,1]:
  box('Wardrobe_door'+str(i),W-vd-.045,vy+i*vw/4,vh/2,.035,vw/2-.018,vh-.08,'white','furniture',bevel=.007)
  box('Wardrobe_handle'+str(i),W-vd-.07,vy+i*.065,1.03,.022,.016,.17,'dark','furniture')
 # Desk against left wall, chair faces left.
 dl=g('desk_length');dd=g('desk_depth');dh=g('desk_height');dy=g('desk_front_offset')+dl/2;dx=g('desk_left_gap')+dd/2
 box('Desk_top',dx,dy,dh,dd,dl,.05,'wood','furniture',bevel=.01)
 for yy in [dy-dl/2+.23,dy+dl/2-.23]:box('Desk_drawers',dx,yy,dh/2,dd-.03,.43,dh-.06,'white','furniture',bevel=.008)
 for yy in [dy-dl/2+.23,dy+dl/2-.23]:
  for h in [.21,.43,.64]:box('Desk_drawer_front',dx+dd/2,yy,h,.01,.40,.19,'white','furniture')
 box('Desk_laptop_base',dx,dy,dh+.041,.30,.42,.018,'metal','soft')
 box('Desk_laptop_screen',dx-.12,dy,dh+.20,.025,.42,.30,'dark','soft',rot=(0,.12,0))
 cx=dd+.40;cy=dy
 box('Chair_seat',cx,cy,.47,g('desk_chair_depth'),g('desk_chair_width'),.10,'gray','furniture',bevel=.04)
 box('Chair_back',cx+.22,cy,.80,.08,g('desk_chair_width'),.58,'gray','furniture',bevel=.045)
 cyl('Chair_column',cx,cy,.26,.036,.39,'white')
 for a in range(5):
  ang=a*2*math.pi/5
  box('Chair_spoke'+str(a),cx+.14*math.cos(ang),cy+.14*math.sin(ang),.12,.30,.025,.025,'white','furniture',rot=(0,0,ang))
  cyl('Chair_wheel'+str(a),cx+.28*math.cos(ang),cy+.28*math.sin(ang),.07,.036,.028,'dark',rot=(math.pi/2,0,0))
 box('Air_conditioner',.14,.43,2.35,.28,.93,.30,'white','furniture',bevel=.045)
 box('Air_conditioner_slot',.293,.43,2.28,.007,.81,.06,'dark','furniture')
 # Bedside storage on the living-side end of headboard.
 ny=bedy+bd/2+g('nightstand_width')/2+.04;nx=W-g('nightstand_depth')/2-.04;nh=g('nightstand_height')
 box('Nightstand',nx,ny,nh/2,g('nightstand_depth'),g('nightstand_width'),nh,'white','furniture',bevel=.016)
 # Sofa, rear edge at bedroom partition; faces increasing y.
 sw=g('sofa_width');sd=g('sofa_depth');sh=g('sofa_height');sx=W-g('sofa_right_gap')-sw/2;sy=D+t/2+g('sofa_back_gap')+sd/2
 box('Sofa_base',sx,sy,.21,sw,sd,.31,'oat','furniture',bevel=.055)
 box('Sofa_back',sx,sy-sd/2+.11,sh/2,sw,.20,sh,'oat','furniture',bevel=.06)
 for xx in [sx-sw/2+.08,sx+sw/2-.08]:box('Sofa_arm',xx,sy,.35,.16,sd,.57,'oat','furniture',bevel=.04)
 for i in [-1,1]:box('Sofa_cushion',sx+i*sw*.22,sy+.08,.42,sw*.42,sd*.65,.15,'oat','furniture',bevel=.07)
 # Coffee table and rug.
 cw=g('coffee_width');cd=g('coffee_depth');ch=g('coffee_height');ty=sy+sd/2+g('coffee_gap')+cd/2
 box('Coffee_top',sx,ty,ch,cw,cd,.055,'white','furniture',bevel=.01)
 for xx in [sx-cw/2+.045,sx+cw/2-.045]:
  for yy in [ty-cd/2+.045,ty+cd/2-.045]:box('Coffee_leg',xx,yy,ch/2,.055,.055,ch,'white','furniture')
 box('Living_rug',sx,sy+.56,.012,g('rug_living_width'),g('rug_living_depth'),.023,'oat','soft')
 # Service band.
 kd=g('counter_depth');kh=g('counter_height');kw=(bathx-kx-t)*g('cabinet_width_fraction');kc=(kx+bathx)/2
 box('Kitchen_cabinet',kc,L-kd/2,kh/2,kw,kd,kh,'white','furniture',bevel=.007)
 box('Kitchen_counter',kc,L-kd/2,kh,kw+.02,kd+.025,.045,'white','furniture')
 box('Kitchen_sink',kc-kw*.23,L-kd*.50,kh+.027,kw*.34,kd*.68,.021,'metal','furniture',bevel=.06)
 box('Kitchen_hob',kc+kw*.24,L-kd*.50,kh+.034,kw*.34,kd*.65,.016,'dark','furniture')
 for i in [-1,1]:cyl('Burner',kc+kw*.24,L-kd*.5+i*.10,kh+.05,.075,.01,'metal')
 box('Range_hood',kc+kw*.23,L-.23,1.76,.57,.37,.20,'dark','furniture')
 cyl('Extractor_pipe',kc+kw*.23,L-.16,2.16,.07,.60,'metal')
 for i in range(6):box('Kitchen_wall_tile_h'+str(i),kc,L-.006,kh+.10+i*.20,kw,.012,.008,'grout')
 for i in range(8):box('Kitchen_wall_tile_v'+str(i),kx+.07+i*.18,L-.006,1.62,.008,.012,1.30,'grout')
 vx=W-g('vanity_width')/2-.10;vy=B+.42
 box('Vanity',vx,vy,g('vanity_height')/2,g('vanity_width'),g('vanity_depth'),g('vanity_height'),'white','furniture',bevel=.016)
 ball('Vanity_basin',vx,vy,g('vanity_height')+.04,.22,.16,.055,'white','furniture')
 box('Vanity_mirror',W-.007,vy,1.42,.02,.49,.68,'metal','furniture')
 tx=W-.37;tty=B+1.20
 ball('Toilet_bowl',tx,tty,.32,g('toilet_width')/2,g('toilet_depth')*.45,.22,'white','furniture')
 box('Toilet_tank',tx,tty+.24,.52,g('toilet_width'),.16,.47,'white','furniture',bevel=.07)
 showerx=bathx+t/2+g('shower_width')/2+.08;showery=L-g('shower_depth')/2-.08
 box('Shower_tray',showerx,showery,.04,g('shower_width'),g('shower_depth'),.08,'white','furniture',bevel=.04)
 cyl('Shower_riser',bathx+.12,showery,1.25,.012,1.90,'metal')
 cyl('Shower_head',bathx+.24,showery,2.1,.075,.025,'metal')
 # Soft layer: curtain/white sheer, small lights and plants.
 for i,u in enumerate([bx-.03,bx+bw+.03]):
  stack=g('curtain_stack_width')
  for j in range(7):cyl('Curtain_fold'+str(i)+'_'+str(j),u-stack/2+j*stack/6,.11,g('curtain_height')/2,.035,g('curtain_height'),'oat','soft')
 box('White_sheer_left',bx+bw*.23,.06,1.30,bw*.42,.014,2.50,'sheer','soft')
 def lamp(name,x,y,z):
  cyl(name+'_base',x,y,z+.015,.10,.025,'white','soft');cyl(name+'_stem',x,y,z+.17,.012,.30,'white','soft')
  ball(name+'_shade',x,y,z+.32,.15,.15,.065,'white','soft')
 lamp('Desk_lamp',dx,dy-dl*.30,dh+.03);lamp('Bed_lamp',nx,ny,nh);lamp('Floor_lamp',W-.30,D+2.0,0)
 def plant(name,x,y,z):
  cyl(name+'_pot',x,y,z+.09,.075,.18,'white','soft')
  for i in range(5):
   a=i*1.4;ball(name+'_leaf'+str(i),x+math.cos(a)*.07,y+math.sin(a)*.07,z+.22+i*.018,.055,.10,.018,'green','soft',rot=(.2,.4,a))
 plant('Wardrobe_plant',W-vd/2, g('wardrobe_front_offset')+.24,vh)
 plant('Desk_plant',dx,dy+dl*.38,dh+.03);plant('Coffee_plant',sx+.12,ty,ch+.03)
 cyl('Coffee_cup',sx-.20,ty,ch+.065,.04,.085,'white','soft')
 # Small cart outside primary walking path.
 cartx=3.76;carty=B-.31
 for z in [.16,.44,.72]:box('Cart_tray',cartx,carty,z,g('cart_width'),g('cart_depth'),.05,'white','soft',bevel=.022)
 for x in [cartx-.14,cartx+.14]:cyl('Cart_column',x,carty,.40,.015,g('cart_height'),'white','soft')
 # Measurable walk route; not exported as mesh, used by topology validation.
 labels=[{'name':'卧室','position':[1.65,D*.25,.08]},{'name':'客厅','position':[.60,D+1.25,.08]},{'name':'厨房','position':[kc,B+.65,.08]},{'name':'卫生间','position':[(bathx+W)/2,B+.90,.08]},{'name':'阳台','position':[px+pw/2,-pd/2,.10]}]
 return {'version':'1.0','units':'m','nodes':nodes,'labels':labels,'derived':{'width':W,'body_depth':B,'bedroom_depth':D,'living_depth':B-D,'service_depth':S,'total_depth':L,'height':H,'bathroom_clear_width':W-bathx-t/2,'kitchen_clear_width':bathx-kx-t,'entry_door_start':eo},'walk_route':[[.43,eo+.30,.0],[.43,B-.35,0],[1.15,D+.25,0],[ox+ow/2,D,0],[1.2,D-.7,0]]}

if __name__=='__main__':
 root=Path(__file__).resolve().parents[1]
 data=build(json.loads((root/'model/parameters.json').read_text()))
 (root/'dist/scene.json').write_text(json.dumps(data,ensure_ascii=False))
 print('Generated',len(data['nodes']),'nodes',data['derived'])
