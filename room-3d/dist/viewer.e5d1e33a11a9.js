(()=>{var fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,Xl=1,Ch=2;var Yl=1,Ph=2,Un=3,vn=0,ke=1,fn=2,Zn=0,Ei=1,Er=2,ql=3,Zl=4,Ih=5,li=100,Dh=101,Lh=102,Uh=103,Nh=104,Fh=200,Oh=201,Bh=202,zh=203,ho=204,uo=205,kh=206,Hh=207,Vh=208,Gh=209,Wh=210,Xh=211,Yh=212,qh=213,Zh=214,zo=0,ko=1,Ho=2,wi=3,Vo=4,Go=5,Wo=6,Xo=7,Yo=0,$h=1,Jh=2,$n=0,Kh=1,jh=2,Qh=3,tu=4,eu=5,nu=6,qo=7,Dl="attached",iu="detached",$l=300,Ni=301,Fi=302,Ss=303,Zo=304,wr=306,hs=1e3,ai=1001,fo=1002,Xe=1003,su=1004;var Tr=1005;var Ye=1006,$o=1007;var Nn=1008;var wn=1009,Jl=1010,Kl=1011,Es=1012,Jo=1013,pi=1014,pn=1015,ws=1016,Ko=1017,jo=1018,Ts=1020,jl=35902,Ql=35899,tc=1021,ec=1022,on=1023,us=1026,As=1027,Qo=1028,ta=1029,nc=1030,ea=1031;var na=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,ya=37817,va=37818,Ma=37819,ba=37820,Sa=37821,Ea=36492,wa=36494,Ta=36495,Aa=36283,Ra=36284,Ca=36285,Pa=36286;var qs=2300,po=2301,co=2302,Ll=2400,Ul=2401,Nl=2402;var ru=3200,ou=3201;var Ia=0,au=1,Tn="",be="srgb",Ti="srgb-linear",Zs="linear",oe="srgb";var Si=7680;var Fl=519,lu=512,cu=513,hu=514,ic=515,uu=516,du=517,fu=518,pu=519,Ol=35044;var sc="300 es",yn=2e3,$s=2001;var Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=1234567,Gs=Math.PI/180,ds=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function rc(i,t){return(i%t+t)%t}function Fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function Bd(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function zd(i,t=1){return t-Math.abs(rc(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gd(i,t){return i+Math.random()*(t-i)}function Wd(i){return i*(.5-Math.random())}function Xd(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yd(i){return i*Gs}function qd(i){return i*ds}function Zd(i){return(i&i-1)===0&&i!==0}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pe={DEG2RAD:Gs,RAD2DEG:ds,generateUUID:mi,clamp:Kt,euclideanModulo:rc,mapLinear:Fd,inverseLerp:Od,lerp:Ws,damp:Bd,pingpong:zd,smoothstep:kd,smootherstep:Hd,randInt:Vd,randFloat:Gd,randFloatSpread:Wd,seededRandom:Xd,degToRad:Yd,radToDeg:qd,isPowerOfTwo:Zd,ceilPowerOfTwo:$d,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Kd,normalize:ze,denormalize:ls},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let w=Math.sqrt(x),A=Math.atan2(w,p*S);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let y=a*S;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new N,Jc=new ye,$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],y=s[7],w=s[2],A=s[5],I=s[8];return r[0]=o*_+a*S+l*w,r[3]=o*m+a*x+l*A,r[6]=o*p+a*y+l*I,r[1]=c*_+h*S+u*w,r[4]=c*m+h*x+u*A,r[7]=c*p+h*y+u*I,r[2]=f*_+d*S+g*w,r[5]=f*m+d*x+g*A,r[8]=f*p+d*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new $t;function oc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=Js("canvas");return i.style.display="block",i}var Kc={};function fs(i){i in Kc||(Kc[i]=!0,console.warn(i))}function gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){let i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:t,whitePoint:n,transfer:Zs,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}var ne=jd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=Js("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,ps=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tf=0,al=new N,qe=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ai,s=ai,r=Ye,o=Nn,a=on,l=wn,c=i.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=mi(),this.name="",this.source=new ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=$l;qe.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(d+1)/2,w=(p+1)/2,A=(h+f)/4,I=(u+_)/4,D=(g+m)/4;return x>y&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=I/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new qe(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ps(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ks=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Hr.subVectors(this.max,Ns),Ji.subVectors(t.a,Ns),Ki.subVectors(t.b,Ns),ji.subVectors(t.c,Ns),ti.subVectors(Ki,Ji),ei.subVectors(ji,Ki),yi.subVectors(Ji,ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-yi.y,yi.x,0];return!ll(e,Ji,Ki,ji,Hr)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Ji,Ki,ji,Hr))?!1:(Vr.crossVectors(ti,ei),e=[Vr.x,Vr.y,Vr.z],ll(e,Ji,Ki,ji,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,kr=new Ze,Ji=new N,Ki=new N,ji=new N,ti=new N,ei=new N,yi=new N,Ns=new N,Hr=new N,Vr=new N,vi=new N;function ll(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);let a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ef=new Ze,Fs=new N,cl=new N,Dn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(cl)),this.expandByPoint(Fs.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kn=new N,hl=new N,Gr=new N,ni=new N,ul=new N,Wr=new N,dl=new N,Ai=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hl.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=ni.dot(this.direction),l=-ni.dot(Gr),c=ni.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hl).addScaledVector(Gr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){ul.subVectors(e,t),Wr.subVectors(n,t),dl.crossVectors(ul,Wr);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);let l=a*this.direction.dot(Wr.crossVectors(ni,Wr));if(l<0)return null;let c=a*this.direction.dot(ul.cross(ni));if(c<0||l+c>o)return null;let h=-a*ni.dot(dl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,sf)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ii.crossVectors(n,tn),ii.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ii.crossVectors(n,tn)),ii.normalize(),Xr.crossVectors(tn,ii),s[0]=ii.x,s[4]=Xr.x,s[8]=tn.x,s[1]=ii.y,s[5]=Xr.y,s[9]=tn.y,s[2]=ii.z,s[6]=Xr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],y=n[11],w=n[15],A=s[0],I=s[4],D=s[8],b=s[12],M=s[1],T=s[5],P=s[9],O=s[13],z=s[2],G=s[6],H=s[10],W=s[14],Z=s[3],rt=s[7],at=s[11],J=s[15];return r[0]=o*A+a*M+l*z+c*Z,r[4]=o*I+a*T+l*G+c*rt,r[8]=o*D+a*P+l*H+c*at,r[12]=o*b+a*O+l*W+c*J,r[1]=h*A+u*M+f*z+d*Z,r[5]=h*I+u*T+f*G+d*rt,r[9]=h*D+u*P+f*H+d*at,r[13]=h*b+u*O+f*W+d*J,r[2]=g*A+_*M+m*z+p*Z,r[6]=g*I+_*T+m*G+p*rt,r[10]=g*D+_*P+m*H+p*at,r[14]=g*b+_*O+m*W+p*J,r[3]=S*A+x*M+y*z+w*Z,r[7]=S*I+x*T+y*G+w*rt,r[11]=S*D+x*P+y*H+w*at,r[15]=S*b+x*O+y*W+w*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,y=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,w=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*S+n*x+s*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=S*I,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*I,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*I,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*I,t[4]=x*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*I,t[8]=y*I,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*I,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*I,t[12]=w*I,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*I,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,x=l*h,y=l*u,w=n.x,A=n.y,I=n.z;return s[0]=(1-(_+p))*w,s[1]=(d+y)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+x)*I,s[9]=(m-S)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,h=1/o,u=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$s)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===$s)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new N,_n=new Yt,nf=new N(0,0,0),sf=new N(1,1,1),ii=new N,Xr=new N,tn=new N,th=new Yt,eh=new ye,we=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};we.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rf=0,nh=new N,ts=new ye,Hn=new Yt,Yr=new N,Os=new N,of=new N,af=new ye,ih=new N(1,0,0),sh=new N(0,1,0),rh=new N(0,0,1),oh={type:"added"},lf={type:"removed"},es={type:"childadded",child:null},fl={type:"childremoved",child:null},De=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new we,n=new ye,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new $t}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Os,Yr,this.up):Hn.lookAt(Yr,Os,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Hn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lf),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new N(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new N,Vn=new N,pl=new N,Gn=new N,ns=new N,is=new N,ah=new N,ml=new N,gl=new N,_l=new N,xl=new se,yl=new se,vl=new se,oi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Vn.subVectors(n,e),pl.subVectors(t,e);let o=xn.dot(xn),a=xn.dot(Vn),l=xn.dot(pl),c=Vn.dot(Vn),h=Vn.dot(pl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),yl.setScalar(0),vl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Vn.subVectors(t,e),xn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),ml.subVectors(t,n);let l=ns.dot(ml),c=is.dot(ml);if(l<=0&&c<=0)return e.copy(n);gl.subVectors(t,s);let h=ns.dot(gl),u=is.dot(gl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);_l.subVectors(t,r);let d=ns.dot(_l),g=is.dot(_l);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ah.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(ah,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ml(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=rc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ne.workingToColorSpace(Ne.copy(this),t),Math.round(Kt(Ne.r*255,0,255))*65536+Math.round(Kt(Ne.g*255,0,255))*256+Math.round(Kt(Ne.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=be){ne.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(qr);let n=Ws(si.h,qr.h,e),s=Ws(si.s,qr.s,e),r=Ws(si.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new jt;jt.NAMES=_u;var cf=0,Xn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Ei,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yn=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new N,Zr=new dt,hf=0,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}};var Qs=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},uf=0,un=new Yt,bl=new De,ss=new N,en=new Ze,Bs=new Ze,Ce=new N,Se=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oc(t)?tr:Qs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(en.min,Bs.min),en.expandByPoint(Ce),Ce.addVectors(en.max,Bs.max),en.expandByPoint(Ce)):(en.expandByPoint(Bs.min),en.expandByPoint(Bs.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Ce.add(ss)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new N,l[D]=new N;let c=new N,h=new N,u=new N,f=new dt,d=new dt,g=new dt,_=new N,m=new N;function p(D,b,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(T),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(T),a[D].add(_),a[b].add(_),a[M].add(_),l[D].add(m),l[b].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,b=S.length;D<b;++D){let M=S[D],T=M.start,P=M.count;for(let O=T,z=T+P;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let x=new N,y=new N,w=new N,A=new N;function I(D){w.fromBufferAttribute(s,D),A.copy(w);let b=a[D];x.copy(b),x.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(A,b);let T=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,T)}for(let D=0,b=S.length;D<b;++D){let M=S[D],T=M.start,P=M.count;for(let O=T,z=T+P;O<z;O+=3)I(t.getX(O+0)),I(t.getX(O+1)),I(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lh=new Yt,Mi=new Ai,$r=new Dn,ch=new N,Jr=new N,Kr=new N,jr=new N,Sl=new N,Qr=new N,hh=new N,to=new N,ve=class extends De{constructor(t=new Se,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Sl.fromBufferAttribute(u,t),o?Qr.addScaledVector(Sl,h):Qr.addScaledVector(Sl.sub(e),h))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!($r.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere($r,ch)===null||Mi.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(lh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){let A=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=eo(this,p,t,n,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=eo(this,o,t,n,c,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){let A=y,I=y+1,D=y+2;s=eo(this,p,t,n,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,x=m+1,y=m+2;s=eo(this,o,t,n,c,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function df(i,t,e,n,s,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===vn,a),l===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Jr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,jr);let h=df(i,t,e,n,Jr,Kr,jr,hh);if(h){let u=new N;oi.getBarycoord(hh,Jr,Kr,jr,u),s&&(h.uv=oi.getInterpolatedAttribute(s,a,l,c,u,new dt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,a,l,c,u,new dt)),o&&(h.normal=oi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};oi.getNormal(Jr,Kr,jr,f.normal),h.face=f,h.barycoord=u}return h}var Fe=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(_,m,p,S,x,y,w,A,I,D,b){let M=y/I,T=w/D,P=y/2,O=w/2,z=A/2,G=I+1,H=D+1,W=0,Z=0,rt=new N;for(let at=0;at<H;at++){let J=at*T-O;for(let ut=0;ut<G;ut++){let yt=ut*M-P;rt[_]=yt*S,rt[m]=J*x,rt[p]=z,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(ut/I),u.push(1-at/D),W+=1}}for(let at=0;at<D;at++)for(let J=0;J<I;J++){let ut=f+J+G*at,yt=f+J+G*(at+1),Mt=f+(J+1)+G*(at+1),Nt=f+(J+1)+G*at;l.push(ut,yt,Nt),l.push(yt,Mt,Nt),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function ff(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var xu={clone:Oi,merge:Oe},pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},er=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new N,uh=new dt,dh=new dt,Ie=class extends er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,uh,dh),e.subVectors(dh,uh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,os=1,xo=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(rs,os,t,e);s.layers=this.layers,this.add(s);let r=new Ie(rs,os,t,e);r.layers=this.layers,this.add(r);let o=new Ie(rs,os,t,e);o.layers=this.layers,this.add(o);let a=new Ie(rs,os,t,e);a.layers=this.layers,this.add(a);let l=new Ie(rs,os,t,e);l.layers=this.layers,this.add(l);let c=new Ie(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nr=class extends qe{constructor(t=[],e=Ni,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yo=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fe(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Zn});r.uniforms.tEquirect.value=e;let o=new ve(s,r),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ye),new xo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},We=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},gf={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ir=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new we,this.environmentIntensity=1,this.environmentRotation=new we,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fh=new N,ph=new se,mh=new se,_f=new N,gh=new Yt,no=new N,El=new Dn,_h=new Yt,wl=new Ai,sr=class extends ve{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dl,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ze),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(s),t.ray.intersectsSphere(El)!==!1&&(_h.copy(s).invert(),wl.copy(t.ray).applyMatrix4(_h),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;ph.fromBufferAttribute(s.attributes.skinIndex,t),mh.fromBufferAttribute(s.attributes.skinWeight,t),fh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=mh.getComponent(r);if(o!==0){let a=ph.getComponent(r);gh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(_f.copy(fh).applyMatrix4(gh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},gs=class extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ln=class extends qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xh=new Yt,xf=new Yt,rr=class i{constructor(t=[],e=[]){this.uuid=mi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:xf;xh.multiplyMatrices(a,e[r]),xh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ln(e,t,t,on,pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gs),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},_s=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new Yt,yh=new Yt,io=[],vh=new Ze,yf=new Yt,zs=new ve,ks=new Dn,or=class extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),vh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),ks.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),yh.multiplyMatrices(n,as),zs.matrixWorld=yh,zs.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ln(new Float32Array(s*this.count),s,this.count,Qo,pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tl=new N,vf=new N,Mf=new $t,Ge=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tl.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mf.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Dn,bf=new dt(.5,.5),so=new N,xs=class{constructor(t=new Ge,e=new Ge,n=new Ge,s=new Ge,r=new Ge,o=new Ge){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],x=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,p-g,w-S).normalize(),s[1].setComponents(c+o,d+h,p+g,w+S).normalize(),s[2].setComponents(c+a,d+u,p+_,w+x).normalize(),s[3].setComponents(c-a,d-u,p-_,w-x).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,p-m,w-y).normalize();else if(s[4].setComponents(c-l,d-f,p-m,w-y).normalize(),e===yn)s[5].setComponents(c+l,d+f,p+m,w+y).normalize();else if(e===$s)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);let e=bf.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ar=class extends qe{constructor(t,e,n=pi,s,r,o,a=Xe,l=Xe,c,h=us,u=1){if(h!==us&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lr=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ys=class i extends Se{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=s+1,m=new N,p=new N;for(let S=0;S<=g;S++){let x=0,y=0,w=0,A=0;if(S<=n){let b=S/n,M=b*Math.PI/2;y=-h-t*Math.cos(M),w=t*Math.sin(M),A=-t*Math.cos(M),x=b*u}else if(S<=n+r){let b=(S-n)/r;y=-h+b*e,w=t,A=0,x=u+b*f}else{let b=(S-n-r)/n,M=b*Math.PI/2;y=h+t*Math.sin(M),w=t*Math.cos(M),A=t*Math.sin(M),x=u+f+b*u}let I=Math.max(0,Math.min(1,x/d)),D=0;S===0?D=.5/s:S===g&&(D=-.5/s);for(let b=0;b<=s;b++){let M=b/s,T=M*Math.PI*2,P=Math.sin(T),O=Math.cos(T);p.x=-w*O,p.y=y,p.z=w*P,a.push(p.x,p.y,p.z),m.set(-w*O,A,w*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+D,I)}if(S>0){let b=(S-1)*_;for(let M=0;M<s;M++){let T=b+M,P=b+M+1,O=S*_+M,z=S*_+M+1;o.push(T,P,O),o.push(P,z,O)}}}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ri=class i extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function S(){let y=new N,w=new N,A=0,I=(e-t)/n;for(let D=0;D<=r;D++){let b=[],M=D/r,T=M*(e-t)+t;for(let P=0;P<=s;P++){let O=P/s,z=O*l+a,G=Math.sin(z),H=Math.cos(z);w.x=T*G,w.y=-M*n+m,w.z=T*H,u.push(w.x,w.y,w.z),y.set(G,I,H).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-M),b.push(g++)}_.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let M=_[b][D],T=_[b+1][D],P=_[b+1][D+1],O=_[b][D+1];(t>0||b!==0)&&(h.push(M,T,O),A+=3),(e>0||b!==r-1)&&(h.push(T,P,O),A+=3)}c.addGroup(p,A,0),p+=A}function x(y){let w=g,A=new dt,I=new N,D=0,b=y===!0?t:e,M=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let T=g;for(let P=0;P<=s;P++){let z=P/s*l+a,G=Math.cos(z),H=Math.sin(z);I.x=b*H,I.y=m*M,I.z=b*G,u.push(I.x,I.y,I.z),f.push(0,M,0),A.x=G*.5+.5,A.y=H*.5*M+.5,d.push(A.x,A.y),g++}for(let P=0;P<s;P++){let O=w+P,z=T+P;y===!0?h.push(z,z+1,O):h.push(z+1,z,O),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cr=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Yt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vs=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vo=class extends vs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ro=new N,Al=new lc,Rl=new lc,Cl=new lc,Mo=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ro.subVectors(s[0],s[1]).add(s[0]),c=ro);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Al.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Rl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Cl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Rl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Cl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Al.calc(l),Rl.calc(l),Cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Sf(i,t){let e=1-i;return e*e*t}function Ef(i,t){return 2*(1-i)*i*t}function wf(i,t){return i*i*t}function Xs(i,t,e,n){return Sf(i,t)+Ef(i,e)+wf(i,n)}function Tf(i,t){let e=1-i;return e*e*e*t}function Af(i,t){let e=1-i;return 3*e*e*i*t}function Rf(i,t){return 3*(1-i)*i*i*t}function Cf(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return Tf(i,t)+Af(i,e)+Rf(i,n)+Cf(i,s)}var hr=class extends sn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends sn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ur=class extends sn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends sn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends sn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends sn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y),Xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fr=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,l.x,c.x,h.x,u.x),Mh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:vo,CatmullRomCurve3:Mo,CubicBezierCurve:hr,CubicBezierCurve3:bo,EllipseCurve:vs,LineCurve:ur,LineCurve3:So,QuadraticBezierCurve:dr,QuadraticBezierCurve3:Eo,SplineCurve:fr}),wo=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}},Ci=class extends wo{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ur(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new dr(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new hr(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new vs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bn=class extends Ci{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ci().fromJSON(s))}return this}};function Pf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Nf(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return pr(r,o,e,a,l,c,0),o}function yu(i,t,e,n,s){let r;if(s===Yf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=bh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=bh(o/n|0,i[o],i[o+1],r);return r&&Ms(r,r.next)&&(gr(r),r=r.next),r}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||_e(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Df(i,n,s,r):If(i)){t.push(l.i,i.i,c.i),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Lf(Pi(i),t),pr(i,t,e,n,s,r,2)):o===2&&Uf(i,t,e,n,s,r):pr(Pi(i),t,e,n,s,r,1);break}}}function If(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Vs(s,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Df(i,t,e,n){let s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=zl(d,g,t,e,n),S=zl(_,m,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vs(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,l,u,c,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vs(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,l,u,c,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ms(n,s)&&Mu(n,e,e.next,s)&&mr(n,s)&&mr(s,n)&&(t.push(n.i,e.i,s.i),gr(e),gr(e.next),e=i=s),e=e.next}while(e!==i);return Pi(e)}function Uf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gf(o,a)){let l=bu(o,a);o=Pi(o,o.next),l=Pi(l,l.next),pr(o,t,e,n,s,r,0),pr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vf(c))}s.sort(Ff);for(let r=0;r<s.length;r++)e=Of(s[r],e);return e}function Ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Of(i,t){let e=Bf(i,t);if(!e)return t;let n=bu(e,i);return Pi(n,n.next),Pi(e,e.next)}function Bf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);mr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&zf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function zf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function kf(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hf(s)}function Hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&vu(i,t,e,n,s,r,o,a)}function Gf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wf(i,t)&&(mr(i,t)&&mr(t,i)&&Xf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Ms(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function Mu(i,t,e,n){let s=ao(_e(i,t,e)),r=ao(_e(i,t,n)),o=ao(_e(e,n,i)),a=ao(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&oo(i,e,t)||r===0&&oo(i,n,t)||o===0&&oo(e,i,n)||a===0&&oo(e,t,n))}function oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ao(i){return i>0?1:i<0?-1:0}function Wf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Xf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){let e=kl(i.i,i.x,i.y),n=kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bh(i,t,e,n){let s=kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hl=class{static triangulate(t,e,n=2){return Pf(t,e,n)}},Cn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sh(t),Eh(n,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Eh(n,e[l]);let a=Hl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Sh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Eh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ci=class i extends Se{constructor(t=new bn([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:qf,x,y=!1,w,A,I,D;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,w=p.computeFrenetFrames(h,!1),A=new N,I=new N,D=new N),f||(m=0,d=0,g=0,_=0);let b=a.extractPoints(c),M=b.shape,T=b.holes;if(!Cn.isClockWise(M)){M=M.reverse();for(let st=0,nt=T.length;st<nt;st++){let L=T[st];Cn.isClockWise(L)&&(T[st]=L.reverse())}}function O(st){let L=10000000000000001e-36,B=st[0];for(let C=1;C<=st.length;C++){let F=C%st.length,X=st[F],K=X.x-B.x,ot=X.y-B.y,R=K*K+ot*ot,v=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(B.x),Math.abs(B.y)),k=L*v*v;if(R<=k){st.splice(F,1),C--;continue}B=X}}O(M),T.forEach(O);let z=T.length,G=M;for(let st=0;st<z;st++){let nt=T[st];M=M.concat(nt)}function H(st,nt,L){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(nt,L)}let W=M.length;function Z(st,nt,L){let B,C,F,X=st.x-nt.x,K=st.y-nt.y,ot=L.x-st.x,R=L.y-st.y,v=X*X+K*K,k=X*R-K*ot;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(v),ct=Math.sqrt(ot*ot+R*R),j=nt.x-K/$,Pt=nt.y+X/$,_t=L.x-R/ct,vt=L.y+ot/ct,It=((_t-j)*R-(vt-Pt)*ot)/(X*R-K*ot);B=j+X*It-st.x,C=Pt+K*It-st.y;let ft=B*B+C*C;if(ft<=2)return new dt(B,C);F=Math.sqrt(ft/2)}else{let $=!1;X>Number.EPSILON?ot>Number.EPSILON&&($=!0):X<-Number.EPSILON?ot<-Number.EPSILON&&($=!0):Math.sign(K)===Math.sign(R)&&($=!0),$?(B=-K,C=X,F=Math.sqrt(v)):(B=X,C=K,F=Math.sqrt(v/2))}return new dt(B/F,C/F)}let rt=[];for(let st=0,nt=G.length,L=nt-1,B=st+1;st<nt;st++,L++,B++)L===nt&&(L=0),B===nt&&(B=0),rt[st]=Z(G[st],G[L],G[B]);let at=[],J,ut=rt.concat();for(let st=0,nt=z;st<nt;st++){let L=T[st];J=[];for(let B=0,C=L.length,F=C-1,X=B+1;B<C;B++,F++,X++)F===C&&(F=0),X===C&&(X=0),J[B]=Z(L[B],L[F],L[X]);at.push(J),ut=ut.concat(J)}let yt;if(m===0)yt=Cn.triangulateShape(G,T);else{let st=[],nt=[];for(let L=0;L<m;L++){let B=L/m,C=d*Math.cos(B*Math.PI/2),F=g*Math.sin(B*Math.PI/2)+_;for(let X=0,K=G.length;X<K;X++){let ot=H(G[X],rt[X],F);St(ot.x,ot.y,-C),B===0&&st.push(ot)}for(let X=0,K=z;X<K;X++){let ot=T[X];J=at[X];let R=[];for(let v=0,k=ot.length;v<k;v++){let $=H(ot[v],J[v],F);St($.x,$.y,-C),B===0&&R.push($)}B===0&&nt.push(R)}}yt=Cn.triangulateShape(st,nt)}let Mt=yt.length,Nt=g+_;for(let st=0;st<W;st++){let nt=f?H(M[st],ut[st],Nt):M[st];y?(I.copy(w.normals[0]).multiplyScalar(nt.x),A.copy(w.binormals[0]).multiplyScalar(nt.y),D.copy(x[0]).add(I).add(A),St(D.x,D.y,D.z)):St(nt.x,nt.y,0)}for(let st=1;st<=h;st++)for(let nt=0;nt<W;nt++){let L=f?H(M[nt],ut[nt],Nt):M[nt];y?(I.copy(w.normals[st]).multiplyScalar(L.x),A.copy(w.binormals[st]).multiplyScalar(L.y),D.copy(x[st]).add(I).add(A),St(D.x,D.y,D.z)):St(L.x,L.y,u/h*st)}for(let st=m-1;st>=0;st--){let nt=st/m,L=d*Math.cos(nt*Math.PI/2),B=g*Math.sin(nt*Math.PI/2)+_;for(let C=0,F=G.length;C<F;C++){let X=H(G[C],rt[C],B);St(X.x,X.y,u+L)}for(let C=0,F=T.length;C<F;C++){let X=T[C];J=at[C];for(let K=0,ot=X.length;K<ot;K++){let R=H(X[K],J[K],B);y?St(R.x,R.y+x[h-1].y,x[h-1].x+L):St(R.x,R.y,u+L)}}}et(),it();function et(){let st=s.length/3;if(f){let nt=0,L=W*nt;for(let B=0;B<Mt;B++){let C=yt[B];Et(C[2]+L,C[1]+L,C[0]+L)}nt=h+m*2,L=W*nt;for(let B=0;B<Mt;B++){let C=yt[B];Et(C[0]+L,C[1]+L,C[2]+L)}}else{for(let nt=0;nt<Mt;nt++){let L=yt[nt];Et(L[2],L[1],L[0])}for(let nt=0;nt<Mt;nt++){let L=yt[nt];Et(L[0]+W*h,L[1]+W*h,L[2]+W*h)}}n.addGroup(st,s.length/3-st,0)}function it(){let st=s.length/3,nt=0;mt(G,nt),nt+=G.length;for(let L=0,B=T.length;L<B;L++){let C=T[L];mt(C,nt),nt+=C.length}n.addGroup(st,s.length/3-st,1)}function mt(st,nt){let L=st.length;for(;--L>=0;){let B=L,C=L-1;C<0&&(C=st.length-1);for(let F=0,X=h+m*2;F<X;F++){let K=W*F,ot=W*(F+1),R=nt+B+K,v=nt+C+K,k=nt+C+ot,$=nt+B+ot;kt(R,v,k,$)}}}function St(st,nt,L){l.push(st),l.push(nt),l.push(L)}function Et(st,nt,L){qt(st),qt(nt),qt(L);let B=s.length/3,C=S.generateTopUV(n,s,B-3,B-2,B-1);U(C[0]),U(C[1]),U(C[2])}function kt(st,nt,L,B){qt(st),qt(nt),qt(B),qt(nt),qt(L),qt(B);let C=s.length/3,F=S.generateSideWallUV(n,s,C-6,C-3,C-2,C-1);U(F[0]),U(F[1]),U(F[3]),U(F[1]),U(F[2]),U(F[3])}function qt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function U(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Bl[s.type]().fromJSON(s)),new i(n,t.options)}},qf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-u),new dt(f,1-g),new dt(_,1-p)]:[new dt(a,1-l),new dt(h,1-u),new dt(d,1-g),new dt(m,1-p)]}};function Zf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _r=class i extends Se{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new N,f=new dt,d=new N,g=new N,_=new N,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){let x=n+S*h*s,y=Math.sin(x),w=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*w,o.push(u.x,u.y,u.z),f.x=S/e,f.y=A/(t.length-1),a.push(f.x,f.y);let I=l[3*A+0]*y,D=l[3*A+1],b=l[3*A+0]*w;c.push(I,D,b)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){let y=x+S*t.length,w=y,A=y+t.length,I=y+t.length+1,D=y+1;r.push(w,A,D),r.push(I,D,A)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var qn=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let x=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),A=S+1+c*p;d.push(x,y,A),d.push(y,w,A)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xr=class i extends Se{constructor(t=new bn([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Cn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Cn.isClockWise(S)===!0&&(g[m]=S.reverse())}let _=Cn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){let S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){let S=_[m],x=S[0]+u,y=S[1]+u,w=S[2]+u;n.push(x,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $f(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function $f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var dn=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],x=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let A=w/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-x),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let x=h[p][S+1],y=h[p][S],w=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(x,y,A),(p!==n-1||l<Math.PI)&&d.push(y,w,A)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Sn=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ii=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var yr=class extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new we,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ao=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ro=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ul:r=t,a=2*e-n;break;case Nl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ul:o=t,l=2*n-e;break;case Nl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+S*o[c+w]+x*o[l+w]+y*o[u+w];return r}},Co=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Po=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ro(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case po:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===co,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=po;var hi=class extends rn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=qs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="color";var Do=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="number";var Lo=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ye.slerpFlat(r,0,o,c-a,o,c,l);return r}},vr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends rn{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=qs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Uo.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Su=new No,Fo=class{constructor(t){this.manager=t!==void 0?t:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mr=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Pl=new Yt,wh=new N,Th=new N,Oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),Pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ah=new Yt,Hs=new N,Il=new N,Vl=class extends Oo{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),Il.copy(n.position),Il.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Il),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah,n.coordinateSystem,n.reversedDepth)}},br=class extends bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Li=class extends er{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends Oo{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Bo=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var cc="\\[\\]\\.:\\/",Kf=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",jf="[^"+cc.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",hc),tp=/(WCOD+)?/.source.replace("WCOD",jf),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),ip=new RegExp("^"+Qf+tp+ep+np+"$"),sp=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(t){let e=ip.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Wl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sx=new Float32Array(1);var di=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sr=class extends Pn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function uc(i,t,e,n){let s=rp(n);switch(e){case tc:return i*t;case Qo:return i*t/s.components*s.byteLength;case ta:return i*t/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case ea:return i*t*2/s.components*s.byteLength;case ec:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case na:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case wa:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case wn:case Jl:return{byteLength:1,components:1};case Es:case Kl:case ws:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case pi:case Jo:case pn:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:yp,aomap_pars_fragment:vp,batching_pars_vertex:Mp,batching_vertex:bp,begin_vertex:Sp,beginnormal_vertex:Ep,bsdfs:wp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Lp,color_pars_vertex:Up,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:kp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Vp,colorspace_fragment:Gp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:qp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:rm,envmap_vertex:$p,fog_vertex:Jp,fog_pars_vertex:Kp,fog_fragment:jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:ym,map_pars_fragment:vm,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Em,morphinstance_vertex:wm,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Im,normal_pars_fragment:Dm,normal_pars_vertex:Lm,normal_vertex:Um,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:km,packing:Hm,premultiplied_alpha_fragment:Vm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:$m,shadowmap_vertex:Jm,shadowmask_pars_fragment:Km,skinbase_vertex:jm,skinning_pars_vertex:Qm,skinning_vertex:t0,skinnormal_vertex:e0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:o0,transmission_pars_fragment:a0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:_0,depth_vert:x0,depth_frag:y0,distanceRGBA_vert:v0,distanceRGBA_frag:M0,equirect_vert:b0,equirect_frag:S0,linedashed_vert:E0,linedashed_frag:w0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:I0,meshnormal_vert:D0,meshnormal_frag:L0,meshphong_vert:U0,meshphong_frag:N0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:k0,points_frag:H0,shadow_vert:V0,shadow_frag:G0,sprite_vert:W0,sprite_frag:X0},wt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Fn={basic:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Oe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Oe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Oe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Oe([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Oe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Oe([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Oe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Oe([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Oe([wt.common,wt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Oe([wt.lights,wt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Fn.physical={uniforms:Oe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Da={r:0,b:0,g:0},Bi=new we,Y0=new Yt;function q0(i,t,e,n,s,r,o){let a=new jt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1,w=g(x);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===wr)?(h===void 0&&(h=new ve(new Fe(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Oi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Bi)),h.material.toneMapped=ne.getTransfer(w.colorSpace)!==oe,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ve(new qn(2,2),new Mn({name:"BackgroundMaterial",uniforms:Oi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(w.colorSpace)!==oe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Da,ac(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,y,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:S}}function Z0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,T,P,O,z){let G=!1,H=u(O,P,T);r!==H&&(r=H,c(r.object)),G=d(M,O,P,z),G&&g(M,O,P,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(M,T,P,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,T,P){let O=P.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let G=z[T.id];G===void 0&&(G={},z[T.id]=G);let H=G[O];return H===void 0&&(H=f(l()),G[O]=H),H}function f(M){let T=[],P=[],O=[];for(let z=0;z<e;z++)T[z]=0,P[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,T,P,O){let z=r.attributes,G=T.attributes,H=0,W=P.getAttributes();for(let Z in W)if(W[Z].location>=0){let at=z[Z],J=G[Z];if(J===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),at===void 0||at.attribute!==J||J&&at.data!==J.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,T,P,O){let z={},G=T.attributes,H=0,W=P.getAttributes();for(let Z in W)if(W[Z].location>=0){let at=G[Z];at===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));let J={};J.attribute=at,at&&at.data&&(J.data=at.data),z[Z]=J,H++}r.attributes=z,r.attributesNum=H,r.index=O}function _(){let M=r.newAttributes;for(let T=0,P=M.length;T<P;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){let P=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;P[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),z[M]!==T&&(i.vertexAttribDivisor(M,T),z[M]=T)}function S(){let M=r.newAttributes,T=r.enabledAttributes;for(let P=0,O=T.length;P<O;P++)T[P]!==M[P]&&(i.disableVertexAttribArray(P),T[P]=0)}function x(M,T,P,O,z,G,H){H===!0?i.vertexAttribIPointer(M,T,P,z,G):i.vertexAttribPointer(M,T,P,O,z,G)}function y(M,T,P,O){_();let z=O.attributes,G=P.getAttributes(),H=T.defaultAttributeValues;for(let W in G){let Z=G[W];if(Z.location>=0){let rt=z[W];if(rt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let at=rt.normalized,J=rt.itemSize,ut=t.get(rt);if(ut===void 0)continue;let yt=ut.buffer,Mt=ut.type,Nt=ut.bytesPerElement,et=Mt===i.INT||Mt===i.UNSIGNED_INT||rt.gpuType===Jo;if(rt.isInterleavedBufferAttribute){let it=rt.data,mt=it.stride,St=rt.offset;if(it.isInstancedInterleavedBuffer){for(let Et=0;Et<Z.locationSize;Et++)p(Z.location+Et,it.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Et=0;Et<Z.locationSize;Et++)m(Z.location+Et);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Et=0;Et<Z.locationSize;Et++)x(Z.location+Et,J/Z.locationSize,Mt,at,mt*Nt,(St+J/Z.locationSize*Et)*Nt,et)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<Z.locationSize;it++)p(Z.location+it,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<Z.locationSize;it++)m(Z.location+it);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let it=0;it<Z.locationSize;it++)x(Z.location+it,J/Z.locationSize,Mt,at,J*Nt,J/Z.locationSize*it*Nt,et)}}else if(H!==void 0){let at=H[W];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(Z.location,at);break;case 3:i.vertexAttrib3fv(Z.location,at);break;case 4:i.vertexAttrib4fv(Z.location,at);break;default:i.vertexAttrib1fv(Z.location,at)}}}}S()}function w(){D();for(let M in n){let T=n[M];for(let P in T){let O=T[P];for(let z in O)h(O[z].object),delete O[z];delete T[P]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let P in T){let O=T[P];for(let z in O)h(O[z].object),delete O[z];delete T[P]}delete n[M.id]}function I(M){for(let T in n){let P=n[T];if(P[M.id]===void 0)continue;let O=P[M.id];for(let z in O)h(O[z].object),delete O[z];delete P[M.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function $0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==pn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function K0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ge,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,x=S*4,y=p.clippingState||null;l.value=y,y=h(g,f,x,d);for(let w=0;w!==x;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function j0(i){let t=new WeakMap;function e(o,a){return a===Ss?o.mapping=Ni:a===Zo&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ss||a===Zo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cs=4,Eu=[.125,.215,.35,.446,.526,.582],Hi=20,dc=new Li,wu=new jt,fc=null,pc=0,mc=0,gc=!1,ki=(1+Math.sqrt(5))/2,Rs=1/ki,Tu=[new N(-ki,Rs,0),new N(ki,Rs,0),new N(-Rs,0,ki),new N(Rs,0,ki),new N(0,ki,-Rs),new N(0,ki,Rs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Q0=new N,Na=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q0}=r;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ws,format:on,colorSpace:Ti,depthBuffer:!1},s=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=eg(r,t,e)}return s}_compileMaterial(t){let e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(wu),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Yn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new ve(new Fe,_),p=!1,S=t.background;S?S.isColor&&(_.color.copy(S),t.background=null,p=!0):(_.color.copy(wu),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let w=this._cubeSize;La(s,y*w,x>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;La(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tu[(s-r-1)%Tu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let p=[],S=0;for(let I=0;I<Hi;++I){let D=I/_,b=Math.exp(-D*D/2);p.push(b),I===0?S+=b:I<m&&(S+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let y=this._sizeLods[s],w=3*y*(s>x-Cs?s-x+Cs:0),A=4*(this._cubeSize-y);La(e,w,A,3*y,2*y),l.setRenderTarget(e),l.render(u,dc)}};function tg(i){let t=[],e=[],n=[],s=i,r=i-Cs+1+Eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Cs?l=Eu[o-i+Cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){let I=A%3*2/3-1,D=A>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];S.set(b,_*g*A),x.set(f,m*g*A);let M=[A,A,A,A,A,A];y.set(M,p*g*A)}let w=new Se;w.setAttribute("position",new fe(S,_)),w.setAttribute("uv",new fe(x,m)),w.setAttribute("faceIndex",new fe(y,p)),t.push(w),s>Cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Au(i,t,e){let n=new In(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function eg(i,t,e){let n=new Float32Array(Hi),s=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ru(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ng(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ss||l===Zo,h=l===Ni||l===Fi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Na(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Na(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ig(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let x=0,y=S.length;x<y;x+=3){let w=S[x+0],A=S[x+1],I=S[x+2];f.push(w,A,A,I,I,w)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let w=x+0,A=x+1,I=x+2;f.push(w,A,A,I,I,w)}}else return;let m=new(oc(f)?tr:Qs)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,t,e){let n=new WeakMap,s=new se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*w*4*u),I=new Ks(A,y,w,u);I.type=pn,I.needsUpdate=!0;let D=x*4;for(let M=0;M<u;M++){let T=m[M],P=p[M],O=S[M],z=y*w*4*M;for(let G=0;G<T.count;G++){let H=G*D;d===!0&&(s.fromBufferAttribute(T,G),A[z+H+0]=s.x,A[z+H+1]=s.y,A[z+H+2]=s.z,A[z+H+3]=0),g===!0&&(s.fromBufferAttribute(P,G),A[z+H+4]=s.x,A[z+H+5]=s.y,A[z+H+6]=s.z,A[z+H+7]=0),_===!0&&(s.fromBufferAttribute(O,G),A[z+H+8]=s.x,A[z+H+9]=s.y,A[z+H+10]=s.z,A[z+H+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new dt(y,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zu=new qe,Pu=new ar(1,1),$u=new Ks,Ju=new _o,Ku=new nr,Iu=[],Du=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Ae(e,n)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Ae(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Ae(e,n)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=ic,r=Pu):r=Zu,e.setTexture2D(t||r,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ju,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ku,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$u,s)}function Rg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,t){i.uniform1fv(this.addr,t)}function Pg(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ug(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ng(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fg(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function Bg(i,t){i.uniform3iv(this.addr,t)}function zg(i,t){i.uniform4iv(this.addr,t)}function kg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function Vg(i,t){i.uniform3uiv(this.addr,t)}function Gg(i,t){i.uniform4uiv(this.addr,t)}function Wg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zu,r[o])}function Xg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ju,r[o])}function Yg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ku,r[o])}function qg(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$u,r[o])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Dg;case 35674:return Lg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Fu(i,t){i.seq.push(t),i.map[t.id]=t}function $g(i,t,e){let n=i.name,s=n.length;for(_c.lastIndex=0;;){let r=_c.exec(n),o=_c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fu(e,c===void 0?new xc(a,i,t):new yc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new vc(a),Fu(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$g(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jg=37297,Kg=0;function jg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bu=new $t;function Qg(i){ne._getMatrix(Bu,ne.workingColorSpace,i);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Zs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),a)}else return r}function t_(i,t){let e=Qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,t){let e;switch(t){case Kh:e="Linear";break;case jh:e="Reinhard";break;case Qh:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case qo:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ua=new N;function n_(){ne.getLuminanceCoefficients(Ua);let i=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function s_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(o_,l_)}var a_=new Map;function l_(i,t){let e=Qt[t];if(e===void 0){let n=a_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(c_,h_)}function h_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function d_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function p_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case Jh:t="ENVMAP_BLENDING_ADD";break}return t}function m_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=u_(e),c=d_(e),h=f_(e),u=p_(e),f=m_(e),d=i_(e),g=s_(r),_=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Qt.tonemapping_pars_fragment:"",e.toneMapping!==$n?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Mc(o),o=ku(o,e),o=Hu(o,e),a=Mc(a),a=ku(a,e),a=Hu(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=S+m+o,y=S+p+a,w=Ou(s,s.VERTEX_SHADER,x),A=Ou(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(T){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(A)||"",G=P.trim(),H=O.trim(),W=z.trim(),Z=!0,rt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{let at=zu(s,w,"vertex"),J=zu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+at+`
`+J)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||W==="")&&(rt=!1);rt&&(T.diagnostics={runnable:Z,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(A),D=new Ps(s,_),b=r_(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Jg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var __=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=__++,this.code=t,this.usedTimes=0}};function x_(i,t,e,n,s,r,o){let a=new js,l=new bc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,T,P,O){let z=P.fog,G=O.geometry,H=b.isMeshStandardMaterial?P.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),Z=W&&W.mapping===wr?W.image.height:null,rt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,J=at!==void 0?at.length:0,ut=0;G.morphAttributes.position!==void 0&&(ut=1),G.morphAttributes.normal!==void 0&&(ut=2),G.morphAttributes.color!==void 0&&(ut=3);let yt,Mt,Nt,et;if(rt){let re=Fn[rt];yt=re.vertexShader,Mt=re.fragmentShader}else yt=b.vertexShader,Mt=b.fragmentShader,l.update(b),Nt=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);let it=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),St=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,kt=!!b.map,qt=!!b.matcap,U=!!W,st=!!b.aoMap,nt=!!b.lightMap,L=!!b.bumpMap,B=!!b.normalMap,C=!!b.displacementMap,F=!!b.emissiveMap,X=!!b.metalnessMap,K=!!b.roughnessMap,ot=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,k=b.iridescence>0,$=b.sheen>0,ct=b.transmission>0,j=ot&&!!b.anisotropyMap,Pt=R&&!!b.clearcoatMap,_t=R&&!!b.clearcoatNormalMap,vt=R&&!!b.clearcoatRoughnessMap,It=k&&!!b.iridescenceMap,ft=k&&!!b.iridescenceThicknessMap,Ct=$&&!!b.sheenColorMap,Gt=$&&!!b.sheenRoughnessMap,Bt=!!b.specularMap,At=!!b.specularColorMap,Jt=!!b.specularIntensityMap,V=ct&&!!b.transmissionMap,xt=ct&&!!b.thicknessMap,bt=!!b.gradientMap,Ut=!!b.alphaMap,pt=b.alphaTest>0,lt=!!b.alphaHash,Ot=!!b.extensions,Zt=$n;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let he={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:yt,fragmentShader:Mt,defines:b.defines,customVertexShaderID:Nt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:St,instancingColor:St&&O.instanceColor!==null,instancingMorph:St&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:qt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:Z,aoMap:st,lightMap:nt,bumpMap:L,normalMap:B,displacementMap:f&&C,emissiveMap:F,normalMapObjectSpace:B&&b.normalMapType===au,normalMapTangentSpace:B&&b.normalMapType===Ia,metalnessMap:X,roughnessMap:K,anisotropy:ot,anisotropyMap:j,clearcoat:R,clearcoatMap:Pt,clearcoatNormalMap:_t,clearcoatRoughnessMap:vt,dispersion:v,iridescence:k,iridescenceMap:It,iridescenceThicknessMap:ft,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:At,specularIntensityMap:Jt,transmission:ct,transmissionMap:V,thicknessMap:xt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Ei&&b.alphaToCoverage===!1,alphaMap:Ut,alphaTest:pt,alphaHash:lt,combine:b.combine,mapUv:kt&&_(b.map.channel),aoMapUv:st&&_(b.aoMap.channel),lightMapUv:nt&&_(b.lightMap.channel),bumpMapUv:L&&_(b.bumpMap.channel),normalMapUv:B&&_(b.normalMap.channel),displacementMapUv:C&&_(b.displacementMap.channel),emissiveMapUv:F&&_(b.emissiveMap.channel),metalnessMapUv:X&&_(b.metalnessMap.channel),roughnessMapUv:K&&_(b.roughnessMap.channel),anisotropyMapUv:j&&_(b.anisotropyMap.channel),clearcoatMapUv:Pt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(b.sheenRoughnessMap.channel),specularMapUv:Bt&&_(b.specularMap.channel),specularColorMapUv:At&&_(b.specularColorMap.channel),specularIntensityMapUv:Jt&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:xt&&_(b.thicknessMap.channel),alphaMapUv:Ut&&_(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(B||ot),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(kt||Ut),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:F&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)M.push(T),M.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(S(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=g[b.type],T;if(M){let P=Fn[M];T=xu.clone(P.uniforms)}else T=b.uniforms;return T}function w(b,M){let T;for(let P=0,O=h.length;P<O;P++){let z=h[P];if(z.cacheKey===M){T=z,++T.usedTimes;break}}return T===void 0&&(T=new g_(i,M,b,r),h.push(T)),T}function A(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function I(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:D}}function y_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||v_),n.length>1&&n.sort(f||Wu),s.length>1&&s.sort(f||Wu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function M_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xu,i.set(n,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new jt};break;case"SpotLight":e={position:new N,direction:new N,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var E_=0;function w_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){let t=new b_,e=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Yt,o=new Yt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,y=0,w=0,A=0,I=0;c.sort(w_);for(let b=0,M=c.length;b<M;b++){let T=c[b],P=T.color,O=T.intensity,z=T.distance,G=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=P.r*O,u+=P.g*O,f+=P.b*O;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],O);I++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let W=T.shadow,Z=e.get(T);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=T.shadow.matrix,S++}n.directional[d]=H,d++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(P).multiplyScalar(O),H.distance=z,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[_]=H;let W=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,W.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,T.castShadow){let Z=e.get(T);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=G,y++}_++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(P).multiplyScalar(O),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let W=T.shadow,Z=e.get(T);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(O),H.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=I,n.version=E_++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Yu(i){let t=new T_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yu(i),t.set(s,[a])):r>=o.length?(a=new Yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P_(i,t,e){let n=new xs,s=new dt,r=new dt,o=new se,a=new To({depthPacking:ou}),l=new Ao,c={},h=e.maxTextureSize,u={[vn]:ke,[ke]:vn,[fn]:fn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let p=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Zn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=p!==Un&&this.type===Un,z=p===Un&&this.type!==Un;for(let G=0,H=A.length;G<H;G++){let W=A[G],Z=W.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let rt=Z.getFrameExtents();if(s.multiply(rt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||z===!0){let J=this.type!==Un?{minFilter:Xe,magFilter:Xe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new In(s.x,s.y,J),Z.map.texture.name=W.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let at=Z.getViewportCount();for(let J=0;J<at;J++){let ut=Z.getViewport(J);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),P.viewport(o),Z.updateMatrices(W,J),n=Z.getFrustum(),y(I,D,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Un&&S(Z,D),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,T)};function S(A,I){let D=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,D,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,D,d,_,null)}function x(A,I,D,b){let M=null,T=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)M=T;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let P=M.uuid,O=I.uuid,z=c[P];z===void 0&&(z={},c[P]=z);let G=z[O];G===void 0&&(G=M.clone(),z[O]=G,I.addEventListener("dispose",w)),M=G}if(M.visible=I.visible,M.wireframe=I.wireframe,b===Un?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let P=i.properties.get(M);P.light=D}return M}function y(A,I,D,b,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let O=t.update(A),z=A.material;if(Array.isArray(z)){let G=O.groups;for(let H=0,W=G.length;H<W;H++){let Z=G[H],rt=z[Z.materialIndex];if(rt&&rt.visible){let at=x(A,rt,b,M);A.onBeforeShadow(i,A,I,D,O,at,Z),i.renderBufferDirect(D,null,O,at,A,Z),A.onAfterShadow(i,A,I,D,O,at,Z)}}}else if(z.visible){let G=x(A,z,b,M);A.onBeforeShadow(i,A,I,D,O,G,null),i.renderBufferDirect(D,null,O,G,A,null),A.onAfterShadow(i,A,I,D,O,G,null)}}let P=A.children;for(let O=0,z=P.length;O<z;O++)y(P[O],I,D,b,M)}function w(A){A.target.removeEventListener("dispose",w);for(let D in c){let b=c[D],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var I_={[zo]:ko,[Ho]:Wo,[Vo]:Xo,[wi]:Go,[ko]:zo,[Wo]:Ho,[Xo]:Vo,[Go]:wi};function D_(i,t){function e(){let V=!1,xt=new se,bt=null,Ut=new se(0,0,0,0);return{setMask:function(pt){bt!==pt&&!V&&(i.colorMask(pt,pt,pt,pt),bt=pt)},setLocked:function(pt){V=pt},setClear:function(pt,lt,Ot,Zt,he){he===!0&&(pt*=Zt,lt*=Zt,Ot*=Zt),xt.set(pt,lt,Ot,Zt),Ut.equals(xt)===!1&&(i.clearColor(pt,lt,Ot,Zt),Ut.copy(xt))},reset:function(){V=!1,bt=null,Ut.set(-1,0,0,0)}}}function n(){let V=!1,xt=!1,bt=null,Ut=null,pt=null;return{setReversed:function(lt){if(xt!==lt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),xt=lt;let Zt=pt;pt=null,this.setClear(Zt)}},getReversed:function(){return xt},setTest:function(lt){lt?it(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(lt){bt!==lt&&!V&&(i.depthMask(lt),bt=lt)},setFunc:function(lt){if(xt&&(lt=I_[lt]),Ut!==lt){switch(lt){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=lt}},setLocked:function(lt){V=lt},setClear:function(lt){pt!==lt&&(xt&&(lt=1-lt),i.clearDepth(lt),pt=lt)},reset:function(){V=!1,bt=null,Ut=null,pt=null,xt=!1}}}function s(){let V=!1,xt=null,bt=null,Ut=null,pt=null,lt=null,Ot=null,Zt=null,he=null;return{setTest:function(re){V||(re?it(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(re){xt!==re&&!V&&(i.stencilMask(re),xt=re)},setFunc:function(re,Bn,Rn){(bt!==re||Ut!==Bn||pt!==Rn)&&(i.stencilFunc(re,Bn,Rn),bt=re,Ut=Bn,pt=Rn)},setOp:function(re,Bn,Rn){(lt!==re||Ot!==Bn||Zt!==Rn)&&(i.stencilOp(re,Bn,Rn),lt=re,Ot=Bn,Zt=Rn)},setLocked:function(re){V=re},setClear:function(re){he!==re&&(i.clearStencil(re),he=re)},reset:function(){V=!1,xt=null,bt=null,Ut=null,pt=null,lt=null,Ot=null,Zt=null,he=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,y=null,w=null,A=null,I=new jt(0,0,0),D=0,b=!1,M=null,T=null,P=null,O=null,z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=W>=2);let rt=null,at={},J=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),yt=new se().fromArray(J),Mt=new se().fromArray(ut);function Nt(V,xt,bt,Ut){let pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(V,lt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<bt;Ot++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(xt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return lt}let et={};et[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(wi),L(!1),B(Xl),it(i.CULL_FACE),st(Zn);function it(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function mt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function St(V,xt){return u[V]!==xt?(i.bindFramebuffer(V,xt),u[V]=xt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Et(V,xt){let bt=d,Ut=!1;if(V){bt=f.get(xt),bt===void 0&&(bt=[],f.set(xt,bt));let pt=V.textures;if(bt.length!==pt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ot=pt.length;lt<Ot;lt++)bt[lt]=i.COLOR_ATTACHMENT0+lt;bt.length=pt.length,Ut=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(bt)}function kt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let qt={[li]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};qt[Uh]=i.MIN,qt[Nh]=i.MAX;let U={[Fh]:i.ZERO,[Oh]:i.ONE,[Bh]:i.SRC_COLOR,[ho]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[uo]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[Hh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function st(V,xt,bt,Ut,pt,lt,Ot,Zt,he,re){if(V===Zn){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),V!==Ih){if(V!==m||re!==b){if((p!==li||y!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,y=li),re)switch(V){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,x=null,w=null,A=null,I.set(0,0,0),D=0,m=V,b=re}return}pt=pt||xt,lt=lt||bt,Ot=Ot||Ut,(xt!==p||pt!==y)&&(i.blendEquationSeparate(qt[xt],qt[pt]),p=xt,y=pt),(bt!==S||Ut!==x||lt!==w||Ot!==A)&&(i.blendFuncSeparate(U[bt],U[Ut],U[lt],U[Ot]),S=bt,x=Ut,w=lt,A=Ot),(Zt.equals(I)===!1||he!==D)&&(i.blendColor(Zt.r,Zt.g,Zt.b,he),I.copy(Zt),D=he),m=V,b=!1}function nt(V,xt){V.side===fn?mt(i.CULL_FACE):it(i.CULL_FACE);let bt=V.side===ke;xt&&(bt=!bt),L(bt),V.blending===Ei&&V.transparent===!1?st(Zn):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ut=V.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),F(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function L(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function B(V){V!==Rh?(it(i.CULL_FACE),V!==T&&(V===Xl?i.cullFace(i.BACK):V===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),T=V}function C(V){V!==P&&(H&&i.lineWidth(V),P=V)}function F(V,xt,bt){V?(it(i.POLYGON_OFFSET_FILL),(O!==xt||z!==bt)&&(i.polygonOffset(xt,bt),O=xt,z=bt)):mt(i.POLYGON_OFFSET_FILL)}function X(V){V?it(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function K(V){V===void 0&&(V=i.TEXTURE0+G-1),rt!==V&&(i.activeTexture(V),rt=V)}function ot(V,xt,bt){bt===void 0&&(rt===null?bt=i.TEXTURE0+G-1:bt=rt);let Ut=at[bt];Ut===void 0&&(Ut={type:void 0,texture:void 0},at[bt]=Ut),(Ut.type!==V||Ut.texture!==xt)&&(rt!==bt&&(i.activeTexture(bt),rt=bt),i.bindTexture(V,xt||et[V]),Ut.type=V,Ut.texture=xt)}function R(){let V=at[rt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(V){yt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function Gt(V){Mt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function Bt(V,xt){let bt=c.get(xt);bt===void 0&&(bt=new WeakMap,c.set(xt,bt));let Ut=bt.get(V);Ut===void 0&&(Ut=i.getUniformBlockIndex(xt,V.name),bt.set(V,Ut))}function At(V,xt){let Ut=c.get(xt).get(V);l.get(xt)!==Ut&&(i.uniformBlockBinding(xt,Ut,V.__bindingPointIndex),l.set(xt,Ut))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,at={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,y=null,w=null,A=null,I=new jt(0,0,0),D=0,b=!1,M=null,T=null,P=null,O=null,z=null,yt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:St,drawBuffers:Et,useProgram:kt,setBlending:st,setMaterial:nt,setFlipSided:L,setCullFace:B,setLineWidth:C,setPolygonOffset:F,setScissorTest:X,activeTexture:K,bindTexture:ot,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:It,texImage3D:ft,updateUBOMapping:Bt,uniformBlockBinding:At,texStorage2D:_t,texStorage3D:vt,texSubImage2D:$,texSubImage3D:ct,compressedTexSubImage2D:j,compressedTexSubImage3D:Pt,scissor:Ct,viewport:Gt,reset:Jt}}function L_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):Js("canvas")}function _(R,v,k){let $=1,ct=ot(R);if((ct.width>k||ct.height>k)&&($=k/Math.max(ct.width,ct.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor($*ct.width),Pt=Math.floor($*ct.height);u===void 0&&(u=g(j,Pt));let _t=v?g(j,Pt):u;return _t.width=j,_t.height=Pt,_t.getContext("2d").drawImage(R,0,0,j,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+j+"x"+Pt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,v,k,$,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=v;if(v===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),v===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let Pt=ct?Zs:ne.getTransfer($);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Pt===oe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,v){let k;return R?v===null||v===pi||v===Ts?k=i.DEPTH24_STENCIL8:v===pn?k=i.DEPTH32F_STENCIL8:v===Es&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===Ts?k=i.DEPTH_COMPONENT24:v===pn?k=i.DEPTH_COMPONENT32F:v===Es&&(k=i.DEPTH_COMPONENT16),k}function w(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==Ye?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function I(R){let v=R.target;v.removeEventListener("dispose",I),M(v)}function D(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,$=f.get(k);if($){let ct=$[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&b(R),Object.keys($).length===0&&f.delete(k)}n.remove(R)}function b(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,$=f.get(k);delete $[v.__cacheKey],o.memory.textures--}function M(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ct=0;ct<v.__webglFramebuffer[$].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[$][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,ct=k.length;$<ct;$++){let j=n.get(k[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(R)}let T=0;function P(){T=0}function O(){let R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function z(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function G(R,v){let k=n.get(R);if(R.isVideoTexture&&X(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function H(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){et(k,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function W(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){et(k,R,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function Z(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){it(k,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let rt={[hs]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},at={[Xe]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},J={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[ic]:i.LEQUAL,[hu]:i.EQUAL,[fu]:i.GEQUAL,[uu]:i.GREATER,[du]:i.NOTEQUAL};function ut(R,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ye||v.magFilter===$o||v.magFilter===Tr||v.magFilter===Nn||v.minFilter===Ye||v.minFilter===$o||v.minFilter===Tr||v.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,rt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==Tr&&v.minFilter!==Nn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function yt(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let $=v.source,ct=f.get($);ct===void 0&&(ct={},f.set($,ct));let j=z(v);if(j!==R.__cacheKey){ct[j]===void 0&&(ct[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ct[j].usedTimes++;let Pt=ct[R.__cacheKey];Pt!==void 0&&(ct[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(v)),R.__cacheKey=j,R.__webglTexture=ct[j].texture}return k}function Mt(R,v,k){return Math.floor(Math.floor(R/k)/v)}function Nt(R,v,k,$){let j=R.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,$,v.data);else{j.sort((ft,Ct)=>ft.start-Ct.start);let Pt=0;for(let ft=1;ft<j.length;ft++){let Ct=j[Pt],Gt=j[ft],Bt=Ct.start+Ct.count,At=Mt(Gt.start,v.width,4),Jt=Mt(Ct.start,v.width,4);Gt.start<=Bt+1&&At===Jt&&Mt(Gt.start+Gt.count-1,v.width,4)===At?Ct.count=Math.max(Ct.count,Gt.start+Gt.count-Ct.start):(++Pt,j[Pt]=Gt)}j.length=Pt+1;let _t=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ft=0,Ct=j.length;ft<Ct;ft++){let Gt=j[ft],Bt=Math.floor(Gt.start/4),At=Math.ceil(Gt.count/4),Jt=Bt%v.width,V=Math.floor(Bt/v.width),xt=At,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Jt,V,xt,bt,k,$,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function et(R,v,k){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let ct=yt(R,v),j=v.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+k);let Pt=n.get(j);if(j.version!==Pt.__version||ct===!0){e.activeTexture(i.TEXTURE0+k);let _t=ne.getPrimaries(ne.workingColorSpace),vt=v.colorSpace===Tn?null:ne.getPrimaries(v.colorSpace),It=v.colorSpace===Tn||_t===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ft=_(v.image,!1,s.maxTextureSize);ft=K(v,ft);let Ct=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type),Bt=x(v.internalFormat,Ct,Gt,v.colorSpace,v.isVideoTexture);ut($,v);let At,Jt=v.mipmaps,V=v.isVideoTexture!==!0,xt=Pt.__version===void 0||ct===!0,bt=j.dataReady,Ut=w(v,ft);if(v.isDepthTexture)Bt=y(v.format===As,v.type),xt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Bt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Ct,Gt,null));else if(v.isDataTexture)if(Jt.length>0){V&&xt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Jt[0].width,Jt[0].height);for(let pt=0,lt=Jt.length;pt<lt;pt++)At=Jt[pt],V?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Ct,Gt,At.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,Ct,Gt,At.data);v.generateMipmaps=!1}else V?(xt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ft.width,ft.height),bt&&Nt(v,ft,Ct,Gt)):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Ct,Gt,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,Jt[0].width,Jt[0].height,ft.depth);for(let pt=0,lt=Jt.length;pt<lt;pt++)if(At=Jt[pt],v.format!==on)if(Ct!==null)if(V){if(bt)if(v.layerUpdates.size>0){let Ot=uc(At.width,At.height,v.format,v.type);for(let Zt of v.layerUpdates){let he=At.data.subarray(Zt*Ot/At.data.BYTES_PER_ELEMENT,(Zt+1)*Ot/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Zt,At.width,At.height,1,Ct,he)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ft.depth,Ct,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,At.width,At.height,ft.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ft.depth,Ct,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,At.width,At.height,ft.depth,0,Ct,Gt,At.data)}else{V&&xt&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Jt[0].width,Jt[0].height);for(let pt=0,lt=Jt.length;pt<lt;pt++)At=Jt[pt],v.format!==on?Ct!==null?V?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Ct,Gt,At.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,Ct,Gt,At.data)}else if(v.isDataArrayTexture)if(V){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,ft.width,ft.height,ft.depth),bt)if(v.layerUpdates.size>0){let pt=uc(ft.width,ft.height,v.format,v.type);for(let lt of v.layerUpdates){let Ot=ft.data.subarray(lt*pt/ft.data.BYTES_PER_ELEMENT,(lt+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,Ct,Gt,Ot)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Gt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ft.width,ft.height,ft.depth,0,Ct,Gt,ft.data);else if(v.isData3DTexture)V?(xt&&e.texStorage3D(i.TEXTURE_3D,Ut,Bt,ft.width,ft.height,ft.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Gt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ft.width,ft.height,ft.depth,0,Ct,Gt,ft.data);else if(v.isFramebufferTexture){if(xt)if(V)e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ft.width,ft.height);else{let pt=ft.width,lt=ft.height;for(let Ot=0;Ot<Ut;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,Bt,pt,lt,0,Ct,Gt,null),pt>>=1,lt>>=1}}else if(Jt.length>0){if(V&&xt){let pt=ot(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,pt.width,pt.height)}for(let pt=0,lt=Jt.length;pt<lt;pt++)At=Jt[pt],V?bt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ct,Gt,At):e.texImage2D(i.TEXTURE_2D,pt,Bt,Ct,Gt,At);v.generateMipmaps=!1}else if(V){if(xt){let pt=ot(ft);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,pt.width,pt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Gt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Ct,Gt,ft);m(v)&&p($),Pt.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,k){if(v.image.length!==6)return;let $=yt(R,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let j=n.get(ct);if(ct.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+k);let Pt=ne.getPrimaries(ne.workingColorSpace),_t=v.colorSpace===Tn?null:ne.getPrimaries(v.colorSpace),vt=v.colorSpace===Tn||Pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let It=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let lt=0;lt<6;lt++)!It&&!ft?Ct[lt]=_(v.image[lt],!0,s.maxCubemapSize):Ct[lt]=ft?v.image[lt].image:v.image[lt],Ct[lt]=K(v,Ct[lt]);let Gt=Ct[0],Bt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),Jt=x(v.internalFormat,Bt,At,v.colorSpace),V=v.isVideoTexture!==!0,xt=j.__version===void 0||$===!0,bt=ct.dataReady,Ut=w(v,Gt);ut(i.TEXTURE_CUBE_MAP,v);let pt;if(It){V&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Jt,Gt.width,Gt.height);for(let lt=0;lt<6;lt++){pt=Ct[lt].mipmaps;for(let Ot=0;Ot<pt.length;Ot++){let Zt=pt[Ot];v.format!==on?Bt!==null?V?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Zt.width,Zt.height,Bt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Zt.width,Zt.height,Bt,At,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Jt,Zt.width,Zt.height,0,Bt,At,Zt.data)}}}else{if(pt=v.mipmaps,V&&xt){pt.length>0&&Ut++;let lt=ot(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){V?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ct[lt].width,Ct[lt].height,Bt,At,Ct[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Ct[lt].width,Ct[lt].height,0,Bt,At,Ct[lt].data);for(let Ot=0;Ot<pt.length;Ot++){let he=pt[Ot].image[lt].image;V?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,he.width,he.height,Bt,At,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Jt,he.width,he.height,0,Bt,At,he.data)}}else{V?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,At,Ct[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Bt,At,Ct[lt]);for(let Ot=0;Ot<pt.length;Ot++){let Zt=pt[Ot];V?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,Bt,At,Zt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Jt,Bt,At,Zt.image[lt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=ct.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function mt(R,v,k,$,ct,j){let Pt=r.convert(k.format,k.colorSpace),_t=r.convert(k.type),vt=x(k.internalFormat,Pt,_t,k.colorSpace),It=n.get(v),ft=n.get(k);if(ft.__renderTarget=v,!It.__hasExternalTextures){let Ct=Math.max(1,v.width>>j),Gt=Math.max(1,v.height>>j);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,j,vt,Ct,Gt,v.depth,0,Pt,_t,null):e.texImage2D(ct,j,vt,Ct,Gt,0,Pt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),F(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ct,ft.__webglTexture,0,C(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ct,ft.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let $=v.depthTexture,ct=$&&$.isDepthTexture?$.type:null,j=y(v.stencilBuffer,ct),Pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=C(v);F(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,j,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{let $=v.textures;for(let ct=0;ct<$.length;ct++){let j=$[ct],Pt=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),vt=x(j.internalFormat,Pt,_t,j.colorSpace),It=C(v);k&&F(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,vt,v.width,v.height):F(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let ct=$.__webglTexture,j=C(v);if(v.depthTexture.format===us)F(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(v.depthTexture.format===As)F(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function kt(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ct)};$.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let $=R.texture.mipmaps;$&&$.length>0?Et(v.__webglFramebuffer[0],R):Et(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),St(v.__webglDepthbuffer[$],R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,j)}}else{let $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),St(v.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,v,k){let $=n.get(R);v!==void 0&&mt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&kt(R)}function U(R){let v=R.texture,k=n.get(R),$=n.get(v);R.addEventListener("dispose",I);let ct=R.textures,j=R.isWebGLCubeRenderTarget===!0,Pt=ct.length>1;if(Pt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[_t]=[];for(let vt=0;vt<v.mipmaps.length;vt++)k.__webglFramebuffer[_t][vt]=i.createFramebuffer()}else k.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let _t=0;_t<v.mipmaps.length;_t++)k.__webglFramebuffer[_t]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let _t=0,vt=ct.length;_t<vt;_t++){let It=n.get(ct[_t]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&F(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){let vt=ct[_t];k.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_t]);let It=r.convert(vt.format,vt.colorSpace),ft=r.convert(vt.type),Ct=x(vt.internalFormat,It,ft,vt.colorSpace,R.isXRRenderTarget===!0),Gt=C(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,k.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),St(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ut(i.TEXTURE_CUBE_MAP,v);for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)mt(k.__webglFramebuffer[_t][vt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,vt);else mt(k.__webglFramebuffer[_t],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,vt=ct.length;_t<vt;_t++){let It=ct[_t],ft=n.get(It),Ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,ft.__webglTexture),ut(Ct,It),mt(k.__webglFramebuffer,R,It,i.COLOR_ATTACHMENT0+_t,Ct,0),m(It)&&p(Ct)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),ut(_t,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)mt(k.__webglFramebuffer[vt],R,v,i.COLOR_ATTACHMENT0,_t,vt);else mt(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,_t,0);m(v)&&p(_t),e.unbindTexture()}R.depthBuffer&&kt(R)}function st(R){let v=R.textures;for(let k=0,$=v.length;k<$;k++){let ct=v[k];if(m(ct)){let j=S(R),Pt=n.get(ct).__webglTexture;e.bindTexture(j,Pt),p(j),e.unbindTexture()}}}let nt=[],L=[];function B(R){if(R.samples>0){if(F(R)===!1){let v=R.textures,k=R.width,$=R.height,ct=i.COLOR_BUFFER_BIT,j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),_t=v.length>1;if(_t)for(let It=0;It<v.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let vt=R.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let It=0;It<v.length;It++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);let ft=n.get(v[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,ct,i.NEAREST),l===!0&&(nt.length=0,L.length=0,nt.push(i.COLOR_ATTACHMENT0+It),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let It=0;It<v.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);let ft=n.get(v[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function C(R){return Math.min(s.maxSamples,R.samples)}function F(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function X(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function K(R,v){let k=R.colorSpace,$=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ti&&k!==Tn&&(ne.getTransfer(k)===oe?($!==on||ct!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=qt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=F}function U_(i,t){function e(n,s=Tn){let r,o=ne.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===Kl)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===ec)return i.RGB;if(n===on)return i.RGBA;if(n===us)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Qo)return i.RED;if(n===ta)return i.RED_INTEGER;if(n===nc)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===la)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===ba||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===wa||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Ec,p={},S=e.getContextAttributes(),x=null,y=null,w=[],A=[],I=new dt,D=null,b=new Ie;b.viewport=new se;let M=new Ie;M.viewport=new se;let T=[b,M],P=new Bo,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let it=w[et];return it===void 0&&(it=new ms,w[et]=it),it.getTargetRaySpace()},this.getControllerGrip=function(et){let it=w[et];return it===void 0&&(it=new ms,w[et]=it),it.getGripSpace()},this.getHand=function(et){let it=w[et];return it===void 0&&(it=new ms,w[et]=it),it.getHandSpace()};function G(et){let it=A.indexOf(et.inputSource);if(it===-1)return;let mt=w[it];mt!==void 0&&(mt.update(et.inputSource,et.frame,c||o),mt.dispatchEvent({type:et.type,data:et.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",W);for(let et=0;et<w.length;et++){let it=A[et];it!==null&&(A[et]=null,w[et].disconnect(it))}O=null,z=null,m.reset();for(let et in p)delete p[et];t.setRenderTarget(x),d=null,f=null,u=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,St=null,Et=null;S.depth&&(Et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?As:us,St=S.stencil?Ts:pi);let kt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new In(f.textureWidth,f.textureHeight,{format:on,type:wn,depthTexture:new ar(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new In(d.framebufferWidth,d.framebufferHeight,{format:on,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(et){for(let it=0;it<et.removed.length;it++){let mt=et.removed[it],St=A.indexOf(mt);St>=0&&(A[St]=null,w[St].disconnect(mt))}for(let it=0;it<et.added.length;it++){let mt=et.added[it],St=A.indexOf(mt);if(St===-1){for(let kt=0;kt<w.length;kt++)if(kt>=A.length){A.push(mt),St=kt;break}else if(A[kt]===null){A[kt]=mt,St=kt;break}if(St===-1)break}let Et=w[St];Et&&Et.connect(mt)}}let Z=new N,rt=new N;function at(et,it,mt){Z.setFromMatrixPosition(it.matrixWorld),rt.setFromMatrixPosition(mt.matrixWorld);let St=Z.distanceTo(rt),Et=it.projectionMatrix.elements,kt=mt.projectionMatrix.elements,qt=Et[14]/(Et[10]-1),U=Et[14]/(Et[10]+1),st=(Et[9]+1)/Et[5],nt=(Et[9]-1)/Et[5],L=(Et[8]-1)/Et[0],B=(kt[8]+1)/kt[0],C=qt*L,F=qt*B,X=St/(-L+B),K=X*-L;if(it.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(K),et.translateZ(X),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Et[10]===-1)et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let ot=qt+X,R=U+X,v=C-K,k=F+(St-K),$=st*U/R*ot,ct=nt*U/R*ot;et.projectionMatrix.makePerspective(v,k,$,ct,ot,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function J(et,it){it===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(it.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let it=et.near,mt=et.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),P.near=M.near=b.near=it,P.far=M.far=b.far=mt,(O!==P.near||z!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,z=P.far),P.layers.mask=et.layers.mask|6,b.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;let St=et.parent,Et=P.cameras;J(P,St);for(let kt=0;kt<Et.length;kt++)J(Et[kt],St);Et.length===2?at(P,b,M):P.projectionMatrix.copy(b.projectionMatrix),ut(et,P,St)};function ut(et,it,mt){mt===null?et.matrix.copy(it.matrixWorld):(et.matrix.copy(mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(it.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ds*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(et){return p[et]};let yt=null;function Mt(et,it){if(h=it.getViewerPose(c||o),g=it,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let St=!1;mt.length!==P.cameras.length&&(P.cameras.length=0,St=!0);for(let U=0;U<mt.length;U++){let st=mt[U],nt=null;if(d!==null)nt=d.getViewport(st);else{let B=u.getViewSubImage(f,st);nt=B.viewport,U===0&&(t.setRenderTargetTextures(y,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(y))}let L=T[U];L===void 0&&(L=new Ie,L.layers.enable(U),L.viewport=new se,T[U]=L),L.matrix.fromArray(st.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(st.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(nt.x,nt.y,nt.width,nt.height),U===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),St===!0&&P.cameras.push(L)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let U=u.getDepthInformation(mt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<mt.length;U++){let st=mt[U].camera;if(st){let nt=p[st];nt||(nt=new lr,p[st]=nt);let L=u.getCameraImage(st);nt.sourceTexture=L}}}}for(let mt=0;mt<w.length;mt++){let St=A[mt],Et=w[mt];St!==null&&Et!==void 0&&Et.update(St,it,c||o)}yt&&yt(et,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Nt=new qu;Nt.setAnimationLoop(Mt),this.setAnimationLoop=function(et){yt=et},this.dispose=function(){}}},zi=new we,O_=new Yt;function B_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ac(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(zi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let w=x.program;n.updateUBOMapping(S,w);let A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){let x=u();S.__bindingPointIndex=x;let y=i.createBuffer(),w=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let x=s[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,I=y.length;A<I;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,M=D.length;b<M;b++){let T=D[b];if(d(T,A,b,w)===!0){let P=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],z=0;for(let G=0;G<O.length;G++){let H=O[G],W=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,P+z,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,y,w){let A=S.value,I=x+"_"+y;if(w[I]===void 0)return typeof A=="number"||typeof A=="boolean"?w[I]=A:w[I]=A.clone(),!0;{let D=w[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){let x=S.uniforms,y=0,w=16;for(let I=0,D=x.length;I<D;I++){let b=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,T=b.length;M<T;M++){let P=b[M],O=Array.isArray(P.value)?P.value:[P.value];for(let z=0,G=O.length;z<G;z++){let H=O[z],W=_(H),Z=y%w,rt=Z%W.boundary,at=Z+rt;y+=rt,at!==0&&w-at<W.storage&&(y+=w-at),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=W.storage}}}let A=y%w;return A>0&&(y+=w-A),S.__size=y,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Fa=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=be;let A=0,I=0,D=null,b=-1,M=null,T=new se,P=new se,O=null,z=new jt(0),G=0,H=e.width,W=e.height,Z=1,rt=null,at=null,J=new se(0,0,H,W),ut=new se(0,0,H,W),yt=!1,Mt=new xs,Nt=!1,et=!1,it=new Yt,mt=new N,St=new se,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function qt(){return D===null?Z:1}let U=n;function st(E,Y){return e.getContext(E,Y)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let Y="webgl2";if(U=st(Y,E),U===null)throw st(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,L,B,C,F,X,K,ot,R,v,k,$,ct,j,Pt,_t,vt,It,ft,Ct,Gt,Bt,At,Jt;function V(){nt=new ig(U),nt.init(),Bt=new U_(U,nt),L=new J0(U,nt,t,Bt),B=new D_(U,nt),L.reversedDepthBuffer&&f&&B.buffers.depth.setReversed(!0),C=new og(U),F=new y_,X=new L_(U,nt,B,F,L,Bt,C),K=new j0(y),ot=new ng(y),R=new dp(U),At=new Z0(U,R),v=new sg(U,R,C,At),k=new lg(U,v,R,C),ft=new ag(U,L,X),_t=new K0(F),$=new x_(y,K,ot,nt,L,At,_t),ct=new B_(y,F),j=new M_,Pt=new A_(nt),It=new q0(y,K,ot,B,k,d,l),vt=new P_(y,k,L),Jt=new z_(U,C,L,B),Ct=new $0(U,nt,C),Gt=new rg(U,nt,C),C.programs=$.programs,y.capabilities=L,y.extensions=nt,y.properties=F,y.renderLists=j,y.shadowMap=vt,y.state=B,y.info=C}V();let xt=new wc(y,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(H,W,!1))},this.getSize=function(E){return E.set(H,W)},this.setSize=function(E,Y,Q=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,W=Y,e.width=Math.floor(E*Z),e.height=Math.floor(Y*Z),Q===!0&&(e.style.width=E+"px",e.style.height=Y+"px"),this.setViewport(0,0,E,Y)},this.getDrawingBufferSize=function(E){return E.set(H*Z,W*Z).floor()},this.setDrawingBufferSize=function(E,Y,Q){H=E,W=Y,Z=Q,e.width=Math.floor(E*Q),e.height=Math.floor(Y*Q),this.setViewport(0,0,E,Y)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,Y,Q,tt){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,Y,Q,tt),B.viewport(T.copy(J).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,Y,Q,tt){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,Y,Q,tt),B.scissor(P.copy(ut).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){B.setScissorTest(yt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(E=!0,Y=!0,Q=!0){let tt=0;if(E){let q=!1;if(D!==null){let gt=D.texture.format;q=gt===na||gt===ea||gt===ta}if(q){let gt=D.texture.type,Rt=gt===wn||gt===pi||gt===Es||gt===Ts||gt===Ko||gt===jo,Ft=It.getClearColor(),Dt=It.getClearAlpha(),Vt=Ft.r,Wt=Ft.g,zt=Ft.b;Rt?(g[0]=Vt,g[1]=Wt,g[2]=zt,g[3]=Dt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Vt,_[1]=Wt,_[2]=zt,_[3]=Dt,U.clearBufferiv(U.COLOR,0,_))}else tt|=U.COLOR_BUFFER_BIT}Y&&(tt|=U.DEPTH_BUFFER_BIT),Q&&(tt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),It.dispose(),j.dispose(),Pt.dispose(),F.dispose(),K.dispose(),ot.dispose(),k.dispose(),At.dispose(),Jt.dispose(),$.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Rn),xt.removeEventListener("sessionend",Gc),_i.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=C.autoReset,Y=vt.enabled,Q=vt.autoUpdate,tt=vt.needsUpdate,q=vt.type;V(),C.autoReset=E,vt.enabled=Y,vt.autoUpdate=Q,vt.needsUpdate=tt,vt.type=q}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){let Y=E.target;Y.removeEventListener("dispose",lt),Ot(Y)}function Ot(E){Zt(E),F.remove(E)}function Zt(E){let Y=F.get(E).programs;Y!==void 0&&(Y.forEach(function(Q){$.releaseProgram(Q)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,Y,Q,tt,q,gt){Y===null&&(Y=Et);let Rt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=Pd(E,Y,Q,tt,q);B.setMaterial(tt,Rt);let Dt=Q.index,Vt=1;if(tt.wireframe===!0){if(Dt=v.getWireframeAttribute(Q),Dt===void 0)return;Vt=2}let Wt=Q.drawRange,zt=Q.attributes.position,te=Wt.start*Vt,ae=(Wt.start+Wt.count)*Vt;gt!==null&&(te=Math.max(te,gt.start*Vt),ae=Math.min(ae,(gt.start+gt.count)*Vt)),Dt!==null?(te=Math.max(te,0),ae=Math.min(ae,Dt.count)):zt!=null&&(te=Math.max(te,0),ae=Math.min(ae,zt.count));let xe=ae-te;if(xe<0||xe===1/0)return;At.setup(q,tt,Ft,Q,Dt);let ue,ce=Ct;if(Dt!==null&&(ue=R.get(Dt),ce=Gt,ce.setIndex(ue)),q.isMesh)tt.wireframe===!0?(B.setLineWidth(tt.wireframeLinewidth*qt()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(q.isLine){let Ht=tt.linewidth;Ht===void 0&&(Ht=1),B.setLineWidth(Ht*qt()),q.isLineSegments?ce.setMode(U.LINES):q.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else q.isPoints?ce.setMode(U.POINTS):q.isSprite&&ce.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ht=q._multiDrawStarts,me=q._multiDrawCounts,ie=q._multiDrawCount,je=Dt?R.get(Dt).bytesPerElement:1,Zi=F.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<ie;Qe++)Zi.setValue(U,"_gl_DrawID",Qe),ce.render(Ht[Qe]/je,me[Qe])}else if(q.isInstancedMesh)ce.renderInstances(te,xe,q.count);else if(Q.isInstancedBufferGeometry){let Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,me=Math.min(Q.instanceCount,Ht);ce.renderInstances(te,xe,me)}else ce.render(te,xe)};function he(E,Y,Q){E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,zr(E,Y,Q),E.side=vn,E.needsUpdate=!0,zr(E,Y,Q),E.side=fn):zr(E,Y,Q)}this.compile=function(E,Y,Q=null){Q===null&&(Q=E),p=Pt.get(Q),p.init(Y),x.push(p),Q.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),E!==Q&&E.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let tt=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let gt=q.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let Ft=gt[Rt];he(Ft,Q,q),tt.add(Ft)}else he(gt,Q,q),tt.add(gt)}),p=x.pop(),tt},this.compileAsync=function(E,Y,Q=null){let tt=this.compile(E,Y,Q);return new Promise(q=>{function gt(){if(tt.forEach(function(Rt){F.get(Rt).currentProgram.isReady()&&tt.delete(Rt)}),tt.size===0){q(E);return}setTimeout(gt,10)}nt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let re=null;function Bn(E){re&&re(E)}function Rn(){_i.stop()}function Gc(){_i.start()}let _i=new qu;_i.setAnimationLoop(Bn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(E){re=E,xt.setAnimationLoop(E),E===null?_i.stop():_i.start()},xt.addEventListener("sessionstart",Rn),xt.addEventListener("sessionend",Gc),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Y),Y=xt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,Y,D),p=Pt.get(E,x.length),p.init(Y),x.push(p),it.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Mt.setFromProjectionMatrix(it,yn,Y.reversedDepth),et=this.localClippingEnabled,Nt=_t.init(this.clippingPlanes,et),m=j.get(E,S.length),m.init(),S.push(m),xt.enabled===!0&&xt.isPresenting===!0){let gt=y.xr.getDepthSensingMesh();gt!==null&&nl(gt,Y,-1/0,y.sortObjects)}nl(E,Y,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,at),kt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,kt&&It.addToRenderList(m,E),this.info.render.frame++,Nt===!0&&_t.beginShadows();let Q=p.state.shadowsArray;vt.render(Q,E,Y),Nt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=m.opaque,q=m.transmissive;if(p.setupLights(),Y.isArrayCamera){let gt=Y.cameras;if(q.length>0)for(let Rt=0,Ft=gt.length;Rt<Ft;Rt++){let Dt=gt[Rt];Xc(tt,q,E,Dt)}kt&&It.render(E);for(let Rt=0,Ft=gt.length;Rt<Ft;Rt++){let Dt=gt[Rt];Wc(m,E,Dt,Dt.viewport)}}else q.length>0&&Xc(tt,q,E,Y),kt&&It.render(E),Wc(m,E,Y);D!==null&&I===0&&(X.updateMultisampleRenderTarget(D),X.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,Y),At.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Nt===!0&&_t.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function nl(E,Y,Q,tt){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){tt&&St.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);let Rt=k.update(E),Ft=E.material;Ft.visible&&m.push(E,Rt,Ft,Q,St.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){let Rt=k.update(E),Ft=E.material;if(tt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),St.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),St.copy(Rt.boundingSphere.center)),St.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(Ft)){let Dt=Rt.groups;for(let Vt=0,Wt=Dt.length;Vt<Wt;Vt++){let zt=Dt[Vt],te=Ft[zt.materialIndex];te&&te.visible&&m.push(E,Rt,te,Q,St.z,zt)}}else Ft.visible&&m.push(E,Rt,Ft,Q,St.z,null)}}let gt=E.children;for(let Rt=0,Ft=gt.length;Rt<Ft;Rt++)nl(gt[Rt],Y,Q,tt)}function Wc(E,Y,Q,tt){let q=E.opaque,gt=E.transmissive,Rt=E.transparent;p.setupLightsView(Q),Nt===!0&&_t.setGlobalState(y.clippingPlanes,Q),tt&&B.viewport(T.copy(tt)),q.length>0&&Br(q,Y,Q),gt.length>0&&Br(gt,Y,Q),Rt.length>0&&Br(Rt,Y,Q),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Xc(E,Y,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new In(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ws:wn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let gt=p.state.transmissionRenderTarget[tt.id],Rt=tt.viewport||T;gt.setSize(Rt.z*y.transmissionResolutionScale,Rt.w*y.transmissionResolutionScale);let Ft=y.getRenderTarget(),Dt=y.getActiveCubeFace(),Vt=y.getActiveMipmapLevel();y.setRenderTarget(gt),y.getClearColor(z),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),kt&&It.render(Q);let Wt=y.toneMapping;y.toneMapping=$n;let zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),Nt===!0&&_t.setGlobalState(y.clippingPlanes,tt),Br(E,Q,tt),X.updateMultisampleRenderTarget(gt),X.updateRenderTargetMipmap(gt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ae=0,xe=Y.length;ae<xe;ae++){let ue=Y[ae],ce=ue.object,Ht=ue.geometry,me=ue.material,ie=ue.group;if(me.side===fn&&ce.layers.test(tt.layers)){let je=me.side;me.side=ke,me.needsUpdate=!0,Yc(ce,Q,tt,Ht,me,ie),me.side=je,me.needsUpdate=!0,te=!0}}te===!0&&(X.updateMultisampleRenderTarget(gt),X.updateRenderTargetMipmap(gt))}y.setRenderTarget(Ft,Dt,Vt),y.setClearColor(z,G),zt!==void 0&&(tt.viewport=zt),y.toneMapping=Wt}function Br(E,Y,Q){let tt=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,gt=E.length;q<gt;q++){let Rt=E[q],Ft=Rt.object,Dt=Rt.geometry,Vt=Rt.group,Wt=Rt.material;Wt.allowOverride===!0&&tt!==null&&(Wt=tt),Ft.layers.test(Q.layers)&&Yc(Ft,Y,Q,Dt,Wt,Vt)}}function Yc(E,Y,Q,tt,q,gt){E.onBeforeRender(y,Y,Q,tt,q,gt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,Y,Q,tt,E,gt),q.transparent===!0&&q.side===fn&&q.forceSinglePass===!1?(q.side=ke,q.needsUpdate=!0,y.renderBufferDirect(Q,Y,tt,q,E,gt),q.side=vn,q.needsUpdate=!0,y.renderBufferDirect(Q,Y,tt,q,E,gt),q.side=fn):y.renderBufferDirect(Q,Y,tt,q,E,gt),E.onAfterRender(y,Y,Q,tt,q,gt)}function zr(E,Y,Q){Y.isScene!==!0&&(Y=Et);let tt=F.get(E),q=p.state.lights,gt=p.state.shadowsArray,Rt=q.state.version,Ft=$.getParameters(E,q.state,gt,Y,Q),Dt=$.getProgramCacheKey(Ft),Vt=tt.programs;tt.environment=E.isMeshStandardMaterial?Y.environment:null,tt.fog=Y.fog,tt.envMap=(E.isMeshStandardMaterial?ot:K).get(E.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&E.envMap===null?Y.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",lt),Vt=new Map,tt.programs=Vt);let Wt=Vt.get(Dt);if(Wt!==void 0){if(tt.currentProgram===Wt&&tt.lightsStateVersion===Rt)return Zc(E,Ft),Wt}else Ft.uniforms=$.getUniforms(E),E.onBeforeCompile(Ft,y),Wt=$.acquireProgram(Ft,Dt),Vt.set(Dt,Wt),tt.uniforms=Ft.uniforms;let zt=tt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=_t.uniform),Zc(E,Ft),tt.needsLights=Dd(E),tt.lightsStateVersion=Rt,tt.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.directionalShadowMap.value=q.state.directionalShadowMap,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotShadowMap.value=q.state.spotShadowMap,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMap.value=q.state.pointShadowMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix),tt.currentProgram=Wt,tt.uniformsList=null,Wt}function qc(E){if(E.uniformsList===null){let Y=E.currentProgram.getUniforms();E.uniformsList=Ps.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function Zc(E,Y){let Q=F.get(E);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function Pd(E,Y,Q,tt,q){Y.isScene!==!0&&(Y=Et),X.resetTextureUnits();let gt=Y.fog,Rt=tt.isMeshStandardMaterial?Y.environment:null,Ft=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,Dt=(tt.isMeshStandardMaterial?ot:K).get(tt.envMap||Rt),Vt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Wt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),zt=!!Q.morphAttributes.position,te=!!Q.morphAttributes.normal,ae=!!Q.morphAttributes.color,xe=$n;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=y.toneMapping);let ue=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ce=ue!==void 0?ue.length:0,Ht=F.get(tt),me=p.state.lights;if(Nt===!0&&(et===!0||E!==M)){let Be=E===M&&tt.id===b;_t.setState(tt,E,Be)}let ie=!1;tt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==me.state.version||Ht.outputColorSpace!==Ft||q.isBatchedMesh&&Ht.batching===!1||!q.isBatchedMesh&&Ht.batching===!0||q.isBatchedMesh&&Ht.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ht.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ht.instancing===!1||!q.isInstancedMesh&&Ht.instancing===!0||q.isSkinnedMesh&&Ht.skinning===!1||!q.isSkinnedMesh&&Ht.skinning===!0||q.isInstancedMesh&&Ht.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ht.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ht.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ht.instancingMorph===!1&&q.morphTexture!==null||Ht.envMap!==Dt||tt.fog===!0&&Ht.fog!==gt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==_t.numPlanes||Ht.numIntersection!==_t.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==zt||Ht.morphNormals!==te||Ht.morphColors!==ae||Ht.toneMapping!==xe||Ht.morphTargetsCount!==ce)&&(ie=!0):(ie=!0,Ht.__version=tt.version);let je=Ht.currentProgram;ie===!0&&(je=zr(tt,Y,q));let Zi=!1,Qe=!1,Us=!1,ge=je.getUniforms(),cn=Ht.uniforms;if(B.useProgram(je.program)&&(Zi=!0,Qe=!0,Us=!0),tt.id!==b&&(b=tt.id,Qe=!0),Zi||M!==E){B.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",E.projectionMatrix),ge.setValue(U,"viewMatrix",E.matrixWorldInverse);let Ve=ge.map.cameraPosition;Ve!==void 0&&Ve.setValue(U,mt.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ge.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Qe=!0,Us=!0)}if(q.isSkinnedMesh){ge.setOptional(U,q,"bindMatrix"),ge.setOptional(U,q,"bindMatrixInverse");let Be=q.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(U,"boneTexture",Be.boneTexture,X))}q.isBatchedMesh&&(ge.setOptional(U,q,"batchingTexture"),ge.setValue(U,"batchingTexture",q._matricesTexture,X),ge.setOptional(U,q,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",q._indirectTexture,X),ge.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",q._colorsTexture,X));let hn=Q.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ft.update(q,Q,je),(Qe||Ht.receiveShadow!==q.receiveShadow)&&(Ht.receiveShadow=q.receiveShadow,ge.setValue(U,"receiveShadow",q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(cn.envMap.value=Dt,cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Y.environment!==null&&(cn.envMapIntensity.value=Y.environmentIntensity),Qe&&(ge.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&Id(cn,Us),gt&&tt.fog===!0&&ct.refreshFogUniforms(cn,gt),ct.refreshMaterialUniforms(cn,tt,Z,W,p.state.transmissionRenderTarget[E.id]),Ps.upload(U,qc(Ht),cn,X)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ps.upload(U,qc(Ht),cn,X),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ge.setValue(U,"center",q.center),ge.setValue(U,"modelViewMatrix",q.modelViewMatrix),ge.setValue(U,"normalMatrix",q.normalMatrix),ge.setValue(U,"modelMatrix",q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let Be=tt.uniformsGroups;for(let Ve=0,il=Be.length;Ve<il;Ve++){let xi=Be[Ve];Jt.update(xi,je),Jt.bind(xi,je)}}return je}function Id(E,Y){E.ambientLightColor.needsUpdate=Y,E.lightProbe.needsUpdate=Y,E.directionalLights.needsUpdate=Y,E.directionalLightShadows.needsUpdate=Y,E.pointLights.needsUpdate=Y,E.pointLightShadows.needsUpdate=Y,E.spotLights.needsUpdate=Y,E.spotLightShadows.needsUpdate=Y,E.rectAreaLights.needsUpdate=Y,E.hemisphereLights.needsUpdate=Y}function Dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,Y,Q){let tt=F.get(E);tt.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),F.get(E.texture).__webglTexture=Y,F.get(E.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Y){let Q=F.get(E);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};let Ld=U.createFramebuffer();this.setRenderTarget=function(E,Y=0,Q=0){D=E,A=Y,I=Q;let tt=!0,q=null,gt=!1,Rt=!1;if(E){let Dt=F.get(E);if(Dt.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(U.FRAMEBUFFER,null),tt=!1;else if(Dt.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(Dt.__hasExternalTextures)X.rebindTextures(E,F.get(E.texture).__webglTexture,F.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let zt=E.depthTexture;if(Dt.__boundDepthTexture!==zt){if(zt!==null&&F.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}let Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);let Wt=F.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?q=Wt[Y][Q]:q=Wt[Y],gt=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?q=F.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?q=Wt[Q]:q=Wt,T.copy(E.viewport),P.copy(E.scissor),O=E.scissorTest}else T.copy(J).multiplyScalar(Z).floor(),P.copy(ut).multiplyScalar(Z).floor(),O=yt;if(Q!==0&&(q=Ld),B.bindFramebuffer(U.FRAMEBUFFER,q)&&tt&&B.drawBuffers(E,q),B.viewport(T),B.scissor(P),B.setScissorTest(O),gt){let Dt=F.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Dt.__webglTexture,Q)}else if(Rt){let Dt=Y;for(let Vt=0;Vt<E.textures.length;Vt++){let Wt=F.get(E.textures[Vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,Q,Dt)}}else if(E!==null&&Q!==0){let Dt=F.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dt.__webglTexture,Q)}b=-1},this.readRenderTargetPixels=function(E,Y,Q,tt,q,gt,Rt,Ft=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=F.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Dt=Dt[Rt]),Dt){B.bindFramebuffer(U.FRAMEBUFFER,Dt);try{let Vt=E.textures[Ft],Wt=Vt.format,zt=Vt.type;if(!L.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=E.width-tt&&Q>=0&&Q<=E.height-q&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),U.readPixels(Y,Q,tt,q,Bt.convert(Wt),Bt.convert(zt),gt))}finally{let Vt=D!==null?F.get(D).__webglFramebuffer:null;B.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(E,Y,Q,tt,q,gt,Rt,Ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=F.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Dt=Dt[Rt]),Dt)if(Y>=0&&Y<=E.width-tt&&Q>=0&&Q<=E.height-q){B.bindFramebuffer(U.FRAMEBUFFER,Dt);let Vt=E.textures[Ft],Wt=Vt.format,zt=Vt.type;if(!L.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),U.readPixels(Y,Q,tt,q,Bt.convert(Wt),Bt.convert(zt),0);let ae=D!==null?F.get(D).__webglFramebuffer:null;B.bindFramebuffer(U.FRAMEBUFFER,ae);let xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gu(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.deleteBuffer(te),U.deleteSync(xe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Y=null,Q=0){let tt=Math.pow(2,-Q),q=Math.floor(E.image.width*tt),gt=Math.floor(E.image.height*tt),Rt=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;X.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,Rt,Ft,q,gt),B.unbindTexture()};let Ud=U.createFramebuffer(),Nd=U.createFramebuffer();this.copyTextureToTexture=function(E,Y,Q=null,tt=null,q=0,gt=null){gt===null&&(q!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=q,q=0):gt=0);let Rt,Ft,Dt,Vt,Wt,zt,te,ae,xe,ue=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(Q!==null)Rt=Q.max.x-Q.min.x,Ft=Q.max.y-Q.min.y,Dt=Q.isBox3?Q.max.z-Q.min.z:1,Vt=Q.min.x,Wt=Q.min.y,zt=Q.isBox3?Q.min.z:0;else{let hn=Math.pow(2,-q);Rt=Math.floor(ue.width*hn),Ft=Math.floor(ue.height*hn),E.isDataArrayTexture?Dt=ue.depth:E.isData3DTexture?Dt=Math.floor(ue.depth*hn):Dt=1,Vt=0,Wt=0,zt=0}tt!==null?(te=tt.x,ae=tt.y,xe=tt.z):(te=0,ae=0,xe=0);let ce=Bt.convert(Y.format),Ht=Bt.convert(Y.type),me;Y.isData3DTexture?(X.setTexture3D(Y,0),me=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),me=U.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);let ie=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Zi=U.getParameter(U.UNPACK_SKIP_PIXELS),Qe=U.getParameter(U.UNPACK_SKIP_ROWS),Us=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt);let ge=E.isDataArrayTexture||E.isData3DTexture,cn=Y.isDataArrayTexture||Y.isData3DTexture;if(E.isDepthTexture){let hn=F.get(E),Be=F.get(Y),Ve=F.get(hn.__renderTarget),il=F.get(Be.__renderTarget);B.bindFramebuffer(U.READ_FRAMEBUFFER,Ve.__webglFramebuffer),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let xi=0;xi<Dt;xi++)ge&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,F.get(E).__webglTexture,q,zt+xi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,F.get(Y).__webglTexture,gt,xe+xi)),U.blitFramebuffer(Vt,Wt,Rt,Ft,te,ae,Rt,Ft,U.DEPTH_BUFFER_BIT,U.NEAREST);B.bindFramebuffer(U.READ_FRAMEBUFFER,null),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||F.has(E)){let hn=F.get(E),Be=F.get(Y);B.bindFramebuffer(U.READ_FRAMEBUFFER,Ud),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,Nd);for(let Ve=0;Ve<Dt;Ve++)ge?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,q,zt+Ve):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,q),cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,gt,xe+Ve):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Be.__webglTexture,gt),q!==0?U.blitFramebuffer(Vt,Wt,Rt,Ft,te,ae,Rt,Ft,U.COLOR_BUFFER_BIT,U.NEAREST):cn?U.copyTexSubImage3D(me,gt,te,ae,xe+Ve,Vt,Wt,Rt,Ft):U.copyTexSubImage2D(me,gt,te,ae,Vt,Wt,Rt,Ft);B.bindFramebuffer(U.READ_FRAMEBUFFER,null),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(me,gt,te,ae,xe,Rt,Ft,Dt,ce,Ht,ue.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(me,gt,te,ae,xe,Rt,Ft,Dt,ce,ue.data):U.texSubImage3D(me,gt,te,ae,xe,Rt,Ft,Dt,ce,Ht,ue):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,te,ae,Rt,Ft,ce,Ht,ue.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,te,ae,ue.width,ue.height,ce,ue.data):U.texSubImage2D(U.TEXTURE_2D,gt,te,ae,Rt,Ft,ce,Ht,ue);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Zi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Us),gt===0&&Y.generateMipmaps&&U.generateMipmap(me),B.unbindTexture()},this.initRenderTarget=function(E){F.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,B.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var ju={type:"change"},Rc={type:"start"},td={type:"end"},Ba=new Ai,Qu=new Ge,k_=Math.cos(70*pe.DEG2RAD),Re=new N,$e=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,za=class extends Sr{constructor(t,e=null){super(t,e),this.state=le.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ye,this._lastTargetPosition=new N,this._quat=new ye().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new di,this._sphericalDelta=new di,this._scale=1,this._panOffset=new N,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new N,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V_.bind(this),this._onPointerDown=H_.bind(this),this._onPointerUp=G_.bind(this),this._onContextMenu=J_.bind(this),this._onMouseWheel=Y_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=Z_.bind(this),this._onTouchMove=$_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=K_.bind(this),this._interceptControlUp=j_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ju),this.update(),this.state=le.NONE}update(t=null){let e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Re.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<k_?this.object.lookAt(this.target):(Qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(Qu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function H_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function V_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function G_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(td),this.state=le.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function W_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Rc)}function X_(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Y_(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(td))}function q_(i){this.enabled!==!1&&this._handleKeyDown(i)}function Z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Rc)}function $_(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function J_(i){this.enabled!==!1&&i.preventDefault()}function K_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Se,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ed(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=ed(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ed(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new fe(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function nd(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,x=a.length;S<x;S++){let y=a[S],w=i.attributes[y];l[y]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let A=i.morphAttributes[y];A&&(c[y]||(c[y]=[]),A.forEach((I,D)=>{let b=new I.array.constructor(I.count*I.itemSize);c[y][D]=new I.constructor(b,I.itemSize,I.normalized)}))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let S=0;S<r;S++){let x=n?n.getX(S):S,y="";for(let w=0,A=a.length;w<A;w++){let I=a[w],D=i.getAttribute(I),b=D.itemSize;for(let M=0;M<b;M++)y+=`${~~(D[u[M]](x)*_+m)},`}if(y in e)h.push(e[y]);else{for(let w=0,A=a.length;w<A;w++){let I=a[w],D=i.getAttribute(I),b=i.morphAttributes[I],M=D.itemSize,T=l[I],P=c[I];for(let O=0;O<M;O++){let z=u[O],G=f[O];if(T[G](o,D[z](x)),b)for(let H=0,W=b.length;H<W;H++)P[H][G](o,b[H][z](x))}}e[y]=o,h.push(o),o++}}let p=i.clone();for(let S in i.attributes){let x=l[S];if(p.setAttribute(S,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),S in c)for(let y=0;y<c[S].length;y++){let w=c[S][y];p.morphAttributes[S][y]=new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return p.setIndex(h),p}var Dr=new N;function mn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Dr.copy(t),Dr[n]=0,Dr.normalize();let c=.5*o/(o+a),h=1-Dr.angleTo(i)/l;return Math.sign(Dr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ka=class i extends Fe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new N,m=.5/o;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[S+0]=mn(_,c,"z","y",r,n),d[S+1]=1-mn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[S+0]=1-mn(_,c,"z","y",r,n),d[S+1]=1-mn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[S+0]=1-mn(_,c,"x","z",r,t),d[S+1]=mn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[S+0]=1-mn(_,c,"x","z",r,t),d[S+1]=1-mn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[S+0]=1-mn(_,c,"x","y",r,t),d[S+1]=1-mn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[S+0]=mn(_,c,"x","y",r,t),d[S+1]=1-mn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Lt=(i=0,t=0,e=0)=>new N(i,t,e),He=Math.PI*2;function Ha(i,t,e){let n=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Xa(i,t,e=0,n=0,s=0){let r=Math.floor(i),o=Math.floor(t),a=i-r,l=t-o,c=p=>n?(p%n+n)%n:p,h=p=>s?(p%s+s)%s:p,u=a*a*(3-2*a),f=l*l*(3-2*l),d=Ha(c(r),h(o),e),g=Ha(c(r+1),h(o),e),_=Ha(c(r),h(o+1),e),m=Ha(c(r+1),h(o+1),e);return d+(g-d)*u+(_-d)*f+(d-g-_+m)*u*f}function On(i,t,e,n=4,s=4,r=4){let o=0,a=.5,l=0;for(let c=0;c<r;c++){let h=1<<c;o+=a*Xa(i*n*h,t*s*h,e+c,n*h,s*h),l+=a,a*=.5}return o/l}function Ya(i,t,e=0,n=3){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*Xa(i*o,t*o,e+l*7),a+=r,r*=.5,o*=2.03;return s/a*2-1}var Ds=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Gi=i=>i-Math.floor(i),Cc=new Map;function An(i,t,e,{srgb:n=!0}={}){if(Cc.has(i))return Cc.get(i);let s=new Uint8Array(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=e((a+.5)/t,(o+.5)/t),c=(o*t+a)*4;for(let h=0;h<3;h++)s[c+h]=Math.max(0,Math.min(255,Math.round((l[h]??l[0])*255)));s[c+3]=255}let r=new Ln(s,t,t);return r.wrapS=r.wrapT=hs,r.colorSpace=n?be:Tn,r.magFilter=Ye,r.minFilter=Nn,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,Cc.set(i,r),r}var Je=i=>[i,i,i],Q_={plaster:()=>An("plaster",128,(i,t)=>Je(.975+.025*On(i,t,3,8,8,3))),oak:()=>An("oak",256,(i,t)=>{let e=On(i,t,11,2,6,2),n=.5+.5*Math.sin(He*(t*14+e*2.4)),s=Xa(i*64,t*4,21,64,4),r=Math.pow(n,7),o=.93+.07*(1-r)-.05*s*r-.03*Xa(i*3,t*3,5,3,3);return[o,o*.985,o*.962]}),weave:()=>An("weave",128,(i,t)=>{let e=Math.sin(He*i*48)*Math.sin(He*t*48),n=On(i,t,31,16,4,2);return Je(.955+.025*e+.04*(n-.5))}),seersucker:()=>An("seersucker",256,(i,t)=>{let e=Gi(t*14),n=Ds(.1,.16,e)*(1-Ds(.4,.46,e)),r=.985+.05*(On(i,t,41,24,14,2)-.5);return[r-.24*n,r-.18*n,r-.11*n]}),knit:()=>An("knit",256,(i,t)=>{let e=Gi(i*18),n=Gi(t*12+Math.abs(e-.5)*.9),s=Math.pow(Math.sin(Math.PI*n),.55)*(.75+.25*Math.sin(Math.PI*e)),r=Ds(.44,.5,Math.abs(e-.5));return Je(.8+.2*s-.08*r+.04*(On(i,t,51,8,8,2)-.5))}),check:()=>An("check",128,(i,t)=>{let e=Gi(i*8)<.5,n=Gi(t*8)<.5,s=e&&n?.62:e||n?.8:1,r=.97+.03*Math.sin(He*i*64)*Math.sin(He*t*64);return Je(s*r)}),rug:()=>An("rug",128,(i,t)=>Je(.86+.14*On(i,t,61,32,32,3))),marble:()=>An("marble",256,(i,t)=>{let e=On(i,t,71,3,3,3),n=Math.pow(1-Math.abs(Math.sin(He*(i*2+t+e*1.8))),18),s=On(i,t,81,6,6,2),r=.99-.012*n-.05*s;return[r,r*1.002,r*1.008]}),linen:()=>An("linen",128,(i,t)=>{let e=On(i,t,91,4,48,3),n=Math.sin(He*i*56)*Math.sin(He*t*56);return Je(.94+.05*e+.015*n)}),shadow:()=>An("shadow",64,(i,t)=>{let e=Math.abs(i*2-1),n=Math.abs(t*2-1),s=Math.pow(Math.pow(e,4)+Math.pow(n,4),.25);return Je(Math.pow(1-Ds(.35,1,s),1.6))},{srgb:!1}),art:()=>tx()};function tx(){return An("art",512,(i,t)=>{if(i<.5&&t<.5){let r=i*2,o=t*2;if(r<.09||r>.91||o<.09||o>.91)return[.965,.958,.945];let l=(r-.09)/.82,c=(o-.09)/.82,h=.42+.05*Math.sin(l*5.2+1.3)+.03*Math.sin(l*13),u=.3+.04*Math.sin(l*4.1+3.1)+.02*Math.sin(l*17+1),f=.18+.03*Math.sin(l*3.3+.4),d=On(l,c,101,6,6,2)*.03,g=[.93-.06*c,.9-.07*c,.85-.08*c];return c<h&&(g=[.8+d,.74+d,.66+d]),c<u&&(g=[.62+d,.55+d,.47+d]),c<f&&(g=[.47+d,.41+d,.35+d]),g}if(i>=.5&&t<.5){let r=i*4-3,o=t*4-1,a=Math.hypot(r,o);if(a>.97)return[.92,.92,.91];let l=Math.atan2(r,o),c=Math.abs(Gi(l/He*12+.5)-.5)<.012&&a>.8&&a<.92,h=Math.abs(l- -1.9)<.03&&a<.48,u=Math.abs(l-.9)<.022&&a<.72;return Je(c||h||u?.18:.97)}let e=Math.floor(i*4),n=Gi(i*4),s=(t-.5)*2;if(n<.04||n>.96||s<.03||s>.97)return Je(.94);if(e===0){let r=Math.pow((n-.5)/.1,2)+Math.pow((s-.52)/.3,2)<1,o=s<.26&&s>.12&&Math.abs(n-.5)<(.26-s)*.8;return r||o?[.36,.46,.58]:Je(.985)}if(e===1){let r=Math.pow((n-.48)/.32,2)+Math.pow((s-.52)/.12,2)<1;return Math.hypot(n-.68,s-.55)<.02?Je(.15):r?[.55,.68,.8]:Je(.985)}if(e===2){let r=[.72,.62,.52,.42].some(a=>Math.abs(s-a)<.012&&n>.18&&n<.82-a*.3),o=Math.abs(s-.25)<.09&&Math.abs(n-.5)<.16&&(Math.abs(s-.25)>.075||Math.abs(n-.5)>.145);return Je(r||o?.3:.985)}return[.96,.95,.93]})}var ex={wall:{color:"#edece8",roughness:.95,map:["plaster",1.6]},white:{color:"#efeeea",roughness:.52},wood:{color:"#d9c9ae",roughness:.58,map:["oak",.9],bump:.6},gray:{color:"#a7acae",roughness:.95,map:["weave",.16],bump:.5},oat:{color:"#e3ddd2",roughness:.97,map:["weave",.14],bump:.6},tile:{color:"#b8bbbf",roughness:.26,map:["marble",1.3],env:.9},dark:{color:"#25282c",roughness:.42,metalness:.35},glass:{color:"#e3ecef",roughness:.04,opacity:.16,env:1.4},green:{color:"#5c7a53",roughness:.62,side:"double"},metal:{color:"#cfd2d5",roughness:.22,metalness:.92,env:1.2},grout:{color:"#b3b6ba",roughness:.85},stripe:{color:"#e0e2e4",roughness:.95},frosted:{color:"#cdd6d7",roughness:.3,opacity:.82},sheer:{color:"#f6f5f1",roughness:.95,opacity:.42,side:"double",map:["linen",.25]},linen:{color:"#f4f4f2",roughness:.96,map:["seersucker",.22],bump:.7,side:"double"},pillow:{color:"#f3f2ee",roughness:.95,map:["weave",.12],bump:.4},knit:{color:"#d9d2c7",roughness:1,map:["knit",.3],bump:1.2,side:"double"},check:{color:"#d2c8b9",roughness:.95,map:["check",.2]},curtain:{color:"#ebe5d9",roughness:.97,map:["linen",.35],bump:.5,side:"double"},rug:{color:"#e9e1d0",roughness:1,map:["rug",.35],bump:1.4},ceramic:{color:"#f3f2ee",roughness:.22,env:.8},art:{color:"#ffffff",roughness:.85,map:["art",0]},shadow:{shadow:!0}};function nx(i,t){let e=Q_[i]();if(!t)return e;let n=e.clone();return n.repeat.set(1/t,1/t),n.needsUpdate=!0,n}var Pc=new Map;function id(i,t){let e=i+":"+t;return Pc.has(e)||Pc.set(e,nx(i,t)),Pc.get(e)}function rd(i){let t=ex[i]||{color:"#ff00ff",roughness:.5};if(t.shadow){let s=new Yn({color:1908514,transparent:!0,opacity:.62,alphaMap:id("shadow",0),depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return s.forceSinglePass=!0,s}let e=t.opacity!==void 0&&t.opacity<1,n=new Ii({color:t.color,roughness:t.roughness,metalness:t.metalness||0,transparent:e,opacity:t.opacity??1,side:t.side==="double"||e?fn:vn,depthWrite:!e||i==="frosted",envMapIntensity:t.env??.55});return t.map&&(n.map=id(...t.map),t.bump&&(n.bumpMap=n.map,n.bumpScale=t.bump)),n.forceSinglePass=!0,n.userData.styleKey=i,n}function od(i){if(!i.index){let t=i.attributes.position.count,e=new(t>65535?Uint32Array:Uint16Array)(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new fe(e,1))}return i}function qa(i){od(i);for(let t of Object.keys(i.attributes))t!=="position"&&t!=="normal"&&i.deleteAttribute(t);return i.attributes.normal||i.computeVertexNormals(),i.clearGroups(),i.morphAttributes={},i}function Xt(i){let t=i.flat().filter(Boolean).map(qa);if(!t.length)return null;if(t.length===1)return t[0];let e=Jn(t,!1);return t.forEach(n=>n.dispose()),e}function ht(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=1,c=1){return i.applyMatrix4(new Yt().compose(Lt(t,e,n),new ye().setFromEuler(new we(s,r,o)),Lt(a,l,c))),i}function Tt(i,t,e,n=.01,s=2){return n=Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4),n<.0012?new Fe(i,t,e):new ka(i,t,e,s,n)}function ix(i){for(let e of Object.keys(i.attributes))e!=="position"&&i.deleteAttribute(e);let t=nd(i,1e-6);return i.dispose(),t.computeVertexNormals(),t}function an(i,t,e,{r:n=.5,pinch:s=.4,seg:r=14}={}){let o=new Fe(2,2,2,r,Math.max(4,r/2|0),r),a=o.attributes.position,l=Lt(),c=Lt();for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h),c.set(...["x","y","z"].map(g=>Math.max(-(1-n),Math.min(1-n,l[g]))));let u=l.clone().sub(c),f=c.add(u.lengthSq()>1e-12?u.normalize().multiplyScalar(n):u),d=Math.max(Math.abs(f.x),Math.abs(f.z));f.y*=1-s*Math.pow(d,3),a.setXYZ(h,f.x*i/2,f.y*t/2,f.z*e/2)}return ix(o)}function Pe(i,t=24){return new _r(i.map(([e,n])=>new dt(Math.max(e,0),n)),t)}function Le(i,t,e,n=20){return new nn(i,t,e,n)}function Ee(i,t,e,n=10,s=e){let r=t.clone().sub(i),o=Le(s,e,r.length(),n);return o.applyMatrix4(new Yt().compose(i.clone().add(t).multiplyScalar(.5),new ye().setFromUnitVectors(Lt(0,1,0),r.normalize()),Lt(1,1,1))),o}function Wi(i,t,e=12){return ht(new dn(t,e,Math.max(6,e/2|0)),i.x,i.y,i.z)}function Uc(i,t,e){let n=[],s=[];for(let o=0;o<=t;o++)for(let a=0;a<=i;a++){let l=e(a/i,o/t);n.push(l.x,l.y,l.z)}for(let o=0;o<t;o++)for(let a=0;a<i;a++){let l=o*(i+1)+a,c=l+1,h=l+i+1,u=h+1;s.push(l,h,c,c,h,u)}let r=new Se;return r.setAttribute("position",new ee(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function Lc(i,t,e){let n=Math.abs(i);if(n<=t)return[i,0];let s=n-t,r=Math.PI*e/2,o=Math.sign(i);if(s<r){let a=s/e;return[o*(t+e*Math.sin(a)),e*(1-Math.cos(a))]}return[o*(t+e+(s-r)*.06),e+(s-r)]}function Va(i,t,e=.25,n=5){let s=new bn;s.moveTo(0,0),s.quadraticCurveTo(i*.3,t*.62,i,0),s.quadraticCurveTo(i*.3,-t*.62,0,0);let r=new xr(s,n),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a);o.setZ(a,-e*i*Math.pow(l/i,2)+.35*Math.abs(c)*(c/t)*t/i)}return r.computeVertexNormals(),r}function Ga(i,t,e,n=0){let s=e.clone().normalize(),r=Lt(0,1,0);Math.abs(s.dot(r))>.97&&(r=Lt(1,0,0));let o=r.clone().sub(s.clone().multiplyScalar(s.dot(r))).normalize().applyAxisAngle(s,n),a=o.clone().cross(s);return i.applyMatrix4(new Yt().makeBasis(s,a,o).setPosition(t)),i}function Wa(i){let t=i>>>0||1;return()=>(t=Math.imul(t^t>>>15,2246822507)+1013904223>>>0,t^=t>>>13,(t>>>0)/4294967295)}var ad=i=>[...i].reduce((t,e)=>Math.imul(t^e.charCodeAt(0),16777619)>>>0,2166136261);function sx(i,t){let[e,n,s]=i.size;if(i.shape==="box")return i.bevel&&t?Tt(e,s,n,i.bevel,2):new Fe(e,s,n);if(i.shape==="cylinder")return Le(e,e,s,t?20:12);let r=new dn(1,t?24:12,t?14:6);return r.scale(e,s,n),r}function rx(i){let[t,e,n]=i.rotation,s=new Yt().makeRotationFromEuler(new we(-t,e,-n,"XYZ")),r=new Yt().makeRotationX(-Math.PI/2);return s.premultiply(r).multiply(r.clone().invert()),s.setPosition(i.position[0],i.position[2],i.position[1]),s}var ox=i=>({x:i.size[0],y:i.size[2],z:i.size[1]}),ld={mattressTop:.46};function cd(i){let t=ld.mattressTop+.043;return(e,n)=>{let s=(n-i.z)/(i.w/2),r=Math.pow(Math.min(1,Math.abs(s)),4),o=.012*(1-r),a=.016*Ya(e*3.1,n*2.6,7)+.007*Ya(e*9,n*7,9)+.005*Math.sin((e*1.6+n*4.2)*3.1);return t+o+a*(1-.6*r)}}function ax(i){return{x:i.position[0],z:i.position[1],len:i.size[0],w:i.size[1]-.04,foot:i.position[0]-i.size[0]/2+.03,head:i.position[0]+i.size[0]/2}}function lx(i){let t=cd(i),e=i.w/2,n=.04,s=.17,r=.16,o=i.foot,a=i.head-.78,l=e+Math.PI*n/2+s,c=a-o+Math.PI*n/2+r;return Uc(64,48,(h,u)=>{let f=-l+h*2*l,d=-c+u*c,[g,_]=Lc(f,e,n),m=a+d,p=0;if(m<o){let[w,A]=Lc(m-a+(a-o)/2,(a-o)/2,n);m=w+(o+a)/2,p=A}let S=.01*Ds(a-.3,a-.25,m)+.006*Ds(a-.06,a,m),x=t(Math.max(o,m),Math.max(-e,Math.min(e,g))+i.z)-Math.max(_,p)-.3*Math.min(_,p)+S,y=(_+p)*(.05*Ya(m*6,g*3,13));return Lt(m+(p?-y:0),x,i.z+g+(_?Math.sign(g)*Math.abs(y):0))})}function cx(i,t){let e=cd(i),n=i.w/2,s=.06,r=.21,o=t.position[0],a=t.size[0]*.92,l=n+Math.PI*s/2+r;return Uc(18,52,(c,h)=>{let u=-l+h*2*l,f=o-a/2+c*a,[d,g]=Lc(u,n,s),_=.004*Math.sin(c*Math.PI);return Lt(f+g*.08*Ya(f*5,d*2,17),e(f,Math.max(-n,Math.min(n,d))+i.z)+.021+_-g,i.z+d)})}function sd(i,{spacing:t=.055,amp:e=.026,bottomFlare:n=.012,width:s=t,period:r=t,nu:o=8}={}){let a=i.y;return Uc(o,28,(l,c)=>{let h=-s/2+l*s,u=-a/2+.012+c*(a-.012),f=1-c,d=(e+n*f*f)*(c>.96?.65:1);return Lt(h,u,d*Math.sin(He*(h+s/2)/r))})}function hx(i,t){let e=t==="-x"?-1:1,n=ht(Tt(.02,i.y,i.z,.004),-e*.0075,0,0),s=[n],r=i.z-.12,o=e*.0085,a=(l,c)=>{let h=c-l,u=(l+c)/2;s.push(ht(Tt(.016,.034,r,.005),o,c,0),ht(Tt(.016,.034,r,.005),o,l,0),ht(Tt(.016,h,.034,.005),o,u,r/2-.017),ht(Tt(.016,h,.034,.005),o,u,-r/2+.017))};return a(-i.y/2+.08,-i.y/2+.58),a(-i.y/2+.68,i.y/2-.08),Xt(s)}function Ic(i){return(t,e)=>Tt(e.x,e.y,e.z,i,2)}var Vi=i=>(t,e)=>Tt(e.x,e.y,e.z,i,2),ux=i=>(t,e)=>t.carcass?Lr(e,t.carcass):Tt(e.x,e.y,e.z,i,2);function Lr(i,t,e=0,n=.016){let s=i.x-2*e,r=i.y-2*e,o=i.z-2*e,a=t[0]==="-"?-1:1,l=(c,h,u,f,d,g)=>ht(Tt(f,d,g,.0025,1),c,h,u);return t[1]==="x"?Xt([l(-a*(s/2-n/2),0,0,n,r,o),l(a*n/2,r/2-n/2,0,s-n,n,o),l(a*n/2,-r/2+n/2,0,s-n,n,o),l(a*n/2,0,o/2-n/2,s-n,r-2*n,n),l(a*n/2,0,-o/2+n/2,s-n,r-2*n,n)]):Xt([l(0,0,-a*(o/2-n/2),s,r,n),l(0,r/2-n/2,a*n/2,s,n,o-n),l(0,-r/2+n/2,a*n/2,s,n,o-n),l(s/2-n/2,0,a*n/2,n,r-2*n,o-n),l(-s/2+n/2,0,a*n/2,n,r-2*n,o-n)])}function dx(i,t,e=.012){let n=t[0]==="-"?-1:1,s=(r,o,a,l,c,h)=>ht(Tt(l,c,h,.002,1),r,o,a);return Xt([s(0,-i.y/2+e/2,0,i.x,e,i.z),s(0,0,i.z/2-e/2,i.x,i.y,e),s(0,0,-i.z/2+e/2,i.x,i.y,e),s(-n*(i.x/2-e/2),0,0,e,i.y,i.z-2*e),ht(Tt(i.x-.02,.003,i.z-2*e-.004,.001),0,-i.y/2+e+.0015,0)])}var fx=[[/_box$/,(i,t)=>dx(t,i.front||"+x")],[/^Bed_frame$/,(i,t)=>Xt([ht(Tt(t.x,t.y-.07,t.z,.022,3),0,.035,0),ht(new Fe(t.x-.14,.07,t.z-.14),0,-t.y/2+.035,0)])],[/^Bed_mattress$/,(i,t)=>Tt(t.x,t.y,t.z,.05,3),{material:"linen"}],[/^Bed_headboard$/,(i,t)=>{let e=t.z/2-.065,n=new bn,s=-t.y/2+.24,r=t.y/2-.15,o=t.y/2-.07;n.moveTo(-e,s),n.lineTo(e,s),n.lineTo(e,r),n.quadraticCurveTo(0,o+(o-r),-e,r),n.lineTo(-e,s);let a=new ci(n,{depth:.026,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:2,curveSegments:24});a.rotateY(-Math.PI/2),a.translate(.013,0,0);let l=[-1,1].flatMap(h=>[ht(Tt(.056,t.y-.07,.062,.012,2),0,-.035,h*(t.z/2-.031)),ht(new dn(.031,14,8),0,t.y/2-.033,h*(t.z/2-.031)),ht(Tt(.05,.05,.07,.01),0,t.y/2-.1,h*(t.z/2-.031))]),c=ht(Tt(.045,.06,t.z-.12,.01),0,-t.y/2+.27,0);return Xt([a,c,...l])}],[/^Pillow/,(i,t)=>an(t.x*.97,t.y,t.z*.97,{r:.9,pinch:.28}),{material:"linen"}],[/^Bedding$/,(i,t,e)=>({world:lx(e.bed)}),{material:"linen"}],[/^Bedding_stripe/,()=>null],[/^Cream_throw$/,(i,t,e)=>({world:cx(e.bed,i)}),{material:"knit"}],[/^(Bed_rug|Living_rug)$/,(i,t)=>Tt(t.x,t.y,t.z,.008,2),{material:"rug"}],[/^Wardrobe_body$/,(i,t)=>i.carcass?Xt([Lr({x:t.x,y:t.y-.05,z:t.z},i.carcass).translate(0,-.025,0),ht(Tt(t.x+.006,.05,t.z+.012,.006),0,t.y/2-.025,0)]):Xt([ht(Tt(t.x,t.y-.05,t.z,.012,2),0,-.025,0),ht(Tt(t.x+.006,.05,t.z+.012,.006),0,t.y/2-.025,0)])],[/^Wardrobe_door/,(i,t)=>hx(t,"-x")],[/^Wardrobe_handle/,(i,t)=>Xt([ht(Le(.0062,.0062,t.y*.95,14),-t.x/2+.0062,0,0),...[-1,1].map(e=>ht(Le(.0045,.0045,t.x-.004,10),0,e*t.y*.36,0,0,0,Math.PI/2))])],[/^Desk_top$/,(i,t)=>ht(Tt(t.x,.036,t.z,.008,3),0,t.y/2-.018,0),{grain:"z"}],[/^Desk_drawers/,ux(.006)],[/^Desk_drawer_front/,(i,t)=>Xt([Tt(t.x,t.y,t.z,.0035,2),ht(Tt(.012,.012,t.z*.42,.0055,2),t.x/2+.005,t.y/2-.028,0)])],[/^Desk_laptop_base$/,(i,t)=>Xt([ht(Tt(.221,.0125,.313,.0055,2),0,-.009,0),ht(Tt(.07,.0012,.105,6e-4),.055,-.0022,0)]),{material:"metal"}],[/^Desk_laptop_screen$/,(i,t)=>ht(Tt(.008,.214,.313,.0035,2),0,-.04,0),{uv:"fit"}],[/^Chair_seat$/,(i,t)=>ht(an(t.x*.92,t.y*.78,t.z*.96,{r:.38,pinch:.3}),-.01,.004,0)],[/^Chair_back$/,(i,t)=>{let e=an(.034,t.y*.95,t.z*.93,{r:.32,pinch:.05}),n=e.attributes.position;for(let s=0;s<n.count;s++)n.setX(s,n.getX(s)-.034*Math.pow(n.getZ(s)/(t.z*.465),2)+.017);return e.computeVertexNormals(),e}],[/^Chair_column$/,(i,t)=>{let e=t.y/2;return Pe([[0,-e],[.036,-e],[.036,-e+.02],[.029,-e+.05],[.029,.03],[.019,.05],[.019,e],[0,e]],22)}],[/^Chair_spoke/,(i,t)=>{let e=new Fe(t.x,.026,.034,10,1,1),n=e.attributes.position;for(let s=0;s<n.count;s++){let r=(n.getX(s)+t.x/2)/t.x;n.setY(s,n.getY(s)*(1-.25*r)+.016*(1-r)-.006),n.setZ(s,n.getZ(s)*(1-.4*r))}return e.computeVertexNormals(),e}],[/^Chair_wheel/,()=>Xt([...[-1,1].map(i=>ht(Le(.028,.028,.011,18),0,i*.0075,0)),Le(.012,.012,.028,10)])],[/^Air_conditioner$/,(i,t)=>Xt([Tt(t.x,t.y,t.z,.05,3),ht(Tt(.004,.012,t.z-.12,.002),t.x/2,.07,0)])],[/^Nightstand$/,(i,t)=>i.carcass?Lr(t,i.carcass,.008):Xt([Tt(t.x-.016,t.y-.016,t.z-.016,.003),...[0,1].map(e=>ht(Tt(.018,t.y/2-.016,t.z-.025,.003),-t.x/2+.009,(e-.5)*t.y/2,0))])],[/^Nightstand_interactive_front/,Ic(.003)],[/^Sofa_base$/,(i,t)=>Tt(t.x-.03,t.y,t.z-.01,.035,3)],[/^Sofa_back$/,(i,t)=>Tt(t.x,t.y,t.z,.07,3)],[/^Sofa_arm/,(i,t)=>Tt(t.x,t.y,t.z,.07,3)],[/^Sofa_cushion/,(i,t)=>an(t.x*.985,t.y,t.z*.99,{r:.3,pinch:.22})],[/^Coffee_top$/,Vi(.007)],[/^Coffee_leg/,(i,t)=>ht(Tt(t.x,t.y-.03,t.z,.005),0,-.015,0)],[/^Coffee_cup$/,(i,t)=>{let e=t.y/2;return Xt([Pe([[0,-e],[.033,-e],[.036,-e+.004],[.037,e],[.033,e],[.032,-e+.008],[0,-e+.008]],22),ht(new Sn(.018,.0045,8,16,Math.PI),.036,0,0,0,0,-Math.PI/2)])},{material:"ceramic"}],[/^Kitchen_cabinet$/,(i,t)=>i.carcass?Lr({x:t.x,y:t.y,z:t.z-.02},i.carcass).translate(0,0,.01):Xt([ht(Tt(t.x,t.y,t.z-.02,.004),0,0,.01),...[0,1].map(e=>ht(Tt(t.x/2-.014,t.y-.024,.018,.003),(e-.5)*t.x/2,0,-t.z/2+.009))])],[/^Kitchen_cabinet_interactive_front/,Ic(.003)],[/^Kitchen_counter$/,Vi(.004),{material:"ceramic"}],[/^Kitchen_sink$/,(i,t)=>Xt([ht(Tt(t.x,.006,t.z,.03,3),0,t.y/2-.003,0),ht(Tt(t.x-.05,.012,t.z-.05,.025,3),0,-.002,0)])],[/^Kitchen_hob$/,Vi(.006)],[/^Burner/,(i,t)=>Xt([ht(new Sn(.052,.006,6,28),0,0,0,Math.PI/2),Le(.024,.026,.008,16)])],[/^Range_hood$/,(i,t)=>{let e=new bn,n=t.z/2,s=t.y/2;e.moveTo(-n,-s),e.lineTo(n,-s),e.lineTo(n,s),e.lineTo(-n+.16,s),e.lineTo(-n,-s+.05),e.lineTo(-n,-s);let r=new ci(e,{depth:t.x-.01,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:1});return r.rotateY(-Math.PI/2),r.translate((t.x-.01)/2,0,0),r}],[/^Vanity$/,(i,t)=>i.carcass?Lr({x:t.x-.02,y:t.y,z:t.z},i.carcass).translate(.01,0,0):Xt([ht(Tt(t.x-.02,t.y,t.z,.004),.01,0,0),...[0,1].map(e=>ht(Tt(.018,t.y-.024,t.z/2-.014,.003),-t.x/2+.009,0,(e-.5)*t.z/2))])],[/^Vanity_interactive_front/,Ic(.003)],[/^Vanity_basin$/,(i,t)=>ht(an(t.x*1.9,t.y*1.6,t.z*1.9,{r:.85,pinch:0}),0,-.01,0),{material:"ceramic"}],[/^Vanity_mirror$/,Vi(.006)],[/^Toilet_bowl$/,(i,t)=>{let e=Pe([[0,-.32],[.6,-.32],[.585,-.27],[.53,-.15],[.57,-.04],[.76,.07],[.92,.15],[.995,.19],[.99,.203],[.93,.207],[.82,.17],[.6,.09],[.36,.03],[.3,.026],[0,.026]],44);return e.scale(t.x*.95,1,t.z*.92),e},{material:"ceramic"}],[/^Toilet_seat$/,(i,t)=>{let e=new bn;e.absellipse(0,0,t.x/2,t.z/2,0,He);let n=new Ci;n.absellipse(0,.015,t.x/2-.058,t.z/2-.075,0,He,!0),e.holes.push(n);let s=new ci(e,{depth:t.y-.008,bevelEnabled:!0,bevelThickness:.004,bevelSize:.006,bevelSegments:2,curveSegments:36});return s.rotateX(-Math.PI/2),s.translate(0,-t.y/2+.004,0),s}],[/^Toilet_lid$/,(i,t)=>{let e=new bn;e.absellipse(0,0,t.x/2-.006,t.z/2-.006,0,He);let n=new ci(e,{depth:t.y-.012,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:3,curveSegments:40});return n.rotateX(-Math.PI/2),n.translate(0,-t.y/2+.006,0),n}],[/^Kitchen_knob\d$/,(i,t)=>Xt([Pe([[0,-t.y/2],[t.x,-t.y/2],[t.x,-t.y/2+.004],[t.x*.9,t.y/2-.002],[t.x*.8,t.y/2],[0,t.y/2]],28),ht(Tt(t.x*1.5,.009,.008,.003),0,t.y/2+.002,0),ht(Tt(.004,.002,.006,.001),t.x*.62,t.y/2+.007,0)])],[/^Range_hood_(filter)$/,(i,t)=>Xt([Tt(t.x,t.y,t.z,.001),...Array.from({length:9},(e,n)=>ht(new Fe(.004,.002,t.z-.03),-t.x/2+.05+n*(t.x-.1)/8,-.0015,0))])],[/^Range_hood_(light|led|panel)$/,(i,t)=>Tt(t.x,t.y,t.z,Math.min(t.x,t.y,t.z)*.3,1)],[/^Extractor_pipe$/,(i,t)=>ht(Tt(.26,t.y,.22,.006,2),0,0,.03),{material:"metal"}],[/^Toilet_tank$/,Vi(.04),{material:"ceramic"}],[/^Shower_tray$/,Vi(.03),{material:"ceramic"}],[/^Curtain_fold/,(i,t)=>sd(t),{material:"curtain"}],[/^White_sheer_left$/,(i,t)=>sd({y:t.y},{width:t.x,period:.085,amp:.011,bottomFlare:.004,nu:110})],[/^Bed_lamp_base$/,(i,t)=>Pe([[0,-.0125],[.062,-.0125],[.064,-.008],[.05,0],[.022,.008],[.012,.0125],[0,.0125]],28)],[/^Bed_lamp_stem$/,(i,t)=>ht(Le(.0085,.011,.28,14),0,-.01,0)],[/^Bed_lamp_shade$/,(i,t)=>Pe([[0,.042],[.045,.038],[.082,.022],[.106,0],[.117,-.022],[.118,-.031],[.11,-.033],[.06,-.026],[0,-.022]],32)],[/^Floor_lamp_base$/,(i,t)=>Pe([[0,-.0125],[.09,-.0125],[.092,-.006],[.085,.008],[.012,.0125],[0,.0125]],28)],[/^Floor_lamp_stem$/,(i,t)=>ht(Le(.008,.008,.17,10),0,-.065,0)],[/^Floor_lamp_shade$/,(i,t)=>{let e=[];for(let n=0;n<=36;n++){let s=-Math.PI/2+Math.PI*n/36,r=1+.018*Math.cos(s*26);e.push([.133*Math.cos(s)*r,-.02+.133*Math.sin(s)])}return e[0][0]=.012,e[e.length-1][0]=.02,Pe(e,30)}],[/^Desk_lamp_base$/,(i,t,e)=>({world:ht(Pe([[0,-.01],[.072,-.01],[.074,-.005],[.068,.008],[.02,.011],[0,.011]],28),e.deskLamp.base.x,.786,e.deskLamp.base.z)})],[/^Desk_lamp_stem$/,(i,t,e)=>{let n=e.deskLamp;return{world:Xt([Ee(n.base.clone().setY(.8),n.elbow,.0085),Ee(n.elbow,n.joint,.0085),Wi(n.elbow,.015),Wi(n.joint,.014),ht(Le(.012,.012,.03,12),n.base.x,.81,n.base.z)])}}],[/^Desk_lamp_shade$/,(i,t,e)=>{let n=e.deskLamp,s=Pe([[.014,.072],[.022,.066],[.03,.04],[.048,-.012],[.066,-.058],[.067,-.064],[.061,-.062],[.043,-.012],[.024,.04],[0,.05]],26);return s.applyMatrix4(new Yt().compose(n.joint.clone().add(n.dir.clone().multiplyScalar(.06)),new ye().setFromUnitVectors(Lt(0,-1,0),n.dir),Lt(1,1,1))),{world:s}}],[/_plant_pot$/,(i,t)=>{let e=t.y/2,n=i.name.startsWith("Coffee")?.78:i.name.startsWith("Desk")?.8:1;return ht(Pe([[0,-e],[.052,-e],[.058,-e+.006],[.071,e-.02],[.074,e-.006],[.074,e],[.067,e],[.066,e-.02],[0,e-.03]],26),0,(1-n)*-e,0,0,0,0,n,n,n)},{material:"ceramic"}],[/_plant_leaf\d$/,(i,t,e)=>({world:px(i,e)}),{material:"green"}],[/^Cart_tray/,(i,t)=>Xt([Tt(t.x,.012,t.z,.006),...[-1,1].flatMap(e=>[ht(Tt(.008,t.y,t.z,.004),e*(t.x/2-.004),0,0),ht(Tt(t.x,t.y,.008,.004),0,0,e*(t.z/2-.004))])])],[/^Entry_leaf_open$/,Vi(.006)],[/^Shower_head$/,(i,t)=>Le(t.x,t.x*.92,t.y,24)]];function px(i,t){let e=t.nodes.get(i.name.replace(/_leaf\d$/,"_pot")),[n,s,r]=e.position,o=i.name.startsWith("Coffee")?.78:i.name.startsWith("Desk")?.8:1,a=r-e.size[2]/2+e.size[2]*o-.025,l=Wa(ad(i.name)),c=[],h=+i.name.at(-1),u=i.name.startsWith("Wardrobe")?"trail":i.name.startsWith("Coffee")?"euca":"upright",f=Lt(n,a,s),d=h*1.4+l()*.5,g=Lt(Math.cos(d),0,Math.sin(d));if(u==="trail"){let p=Lt(-1,0,(l()-.5)*.8).normalize(),S=.16+l()*.16,x=f.clone();for(let y=1;y<=7;y++){let w=y/7,A=f.clone().addScaledVector(g,.04*w).addScaledVector(p,S*w);A.y=a+.05*Math.sin(w*Math.PI)-(h%2?.05:0)*w*w,c.push(Ee(x,A,.002,5)),x=A;let I=p.clone().multiplyScalar(.3).add(Lt(l()-.5,-.25+l()*.3,l()-.5)).normalize();c.push(Ga(Va(.055+l()*.02,.045,.35),A,I,(l()-.5)*.8))}return Xt(c)}let _=2,m=u==="euca"?.26:.16;for(let p=0;p<_;p++){let S=g.clone().applyAxisAngle(Lt(0,1,0),(p-.5)*.7).multiplyScalar(.25+l()*.25).add(Lt(0,1,0)).normalize(),x=m*(.75+l()*.45),y=f.clone().addScaledVector(S,x);c.push(Ee(f,y,.0022,5));let w=u==="euca"?7:4;for(let A=0;A<w;A++){let I=.25+.75*A/w,D=f.clone().lerp(y,I),b=Lt(-S.z,0,S.x).normalize().multiplyScalar(A%2?1:-1),M=b.clone().multiplyScalar(.9).add(Lt(0,.35+l()*.3,0)).normalize();c.push(u==="euca"?Ga(Va(.034,.032,.1,6),D,M,(l()-.5)*.6):Ga(Va(.075+l()*.02,.05,.3),D,M.add(S).normalize(),(l()-.5)*.6))}}return Xt(c)}function hd(i){for(let[t,e,n]of fx)if(t.test(i))return{build:e,opts:n||{}};return null}function Nc(i){let t=hd(i.name);return(t==null?void 0:t.opts.material)||i.material}function Fc(i){let t=i instanceof Map?i:new Map(i.map(o=>[o.name,o])),e=t.get("Bed_frame"),n=t.get("Desk_lamp_base"),s=t.get("Desk_lamp_shade"),r={nodes:t,bed:e?ax(e):null};if(n&&s){let o=Lt(n.position[0]-.07,0,n.position[1]),a=Lt(o.x-.09,s.position[2]+.04,o.z+.03),l=Lt(s.position[0]+.05,s.position[2]+.06,s.position[1]+.02),c=Lt(.55,-1,.08).normalize();r.deskLamp={base:o,elbow:a,joint:l,dir:c}}return r}var ud=null;function dd(i){ud=i}function mx(i,t="x",e){let n=i.attributes.position,s=i.attributes.normal,r=new Float32Array(n.count*2),o=null;e==="fit"&&(i.computeBoundingBox(),o=i.boundingBox);for(let a=0;a<n.count;a++){let l=Math.abs(s.getX(a)),c=Math.abs(s.getY(a)),h=Math.abs(s.getZ(a)),u=n.getX(a),f=n.getY(a),d=n.getZ(a),g,_;if(c>=l&&c>=h?[g,_]=t==="z"?[d,u]:[u,d]:l>=h?[g,_]=t==="y"?[f,d]:[d,f]:[g,_]=t==="y"?[f,u]:[u,f],o){let m=o.getSize(Lt());l>=c&&l>=h?(g=(d-o.min.z)/Math.max(m.z,1e-6),_=(f-o.min.y)/Math.max(m.y,1e-6)):(g=(u-o.min.x)/Math.max(m.x,1e-6),_=(f-o.min.y)/Math.max(m.y,1e-6))}r[a*2]=g,r[a*2+1]=_}return i.setAttribute("uv",new fe(r,2)),i}function fd(i,{grain:t,uv:e}={}){if(e==="keep"){od(i);for(let n of Object.keys(i.attributes))["position","normal","uv"].includes(n)||i.deleteAttribute(n);return i.attributes.normal||i.computeVertexNormals(),i.clearGroups(),i}return qa(i),mx(i,t,e)}var Dc=new Map;function pd(i,t=ud){let e=i.name+"|"+JSON.stringify([i.position,i.size,i.rotation,i.carcass||""]),n=Dc.get(e);if(n!==void 0)return n&&n.clone();let s=hd(i.name),r=["furniture","soft"].includes(i.layer),o=null,a=null;if(s&&t){let c=s.build(i,ox(i),t);if(c&&c.world?a=c.world:o=c,c===null&&!a)return Dc.set(e,null),null}else o=sx(i,r);let l;return a?l=qa(a):(l=qa(o),l.applyMatrix4(rx(i))),fd(l,{grain:(s==null?void 0:s.opts.grain)||"x",uv:s==null?void 0:s.opts.uv}),Dc.set(e,l),l.clone()}function gx(i){let t=i instanceof Map?i:new Map(i.map(l=>[l.name,l])),e=[],n=(l,c,h,u,f,d={})=>e.push({name:l,shape:c,position:h,size:u,material:f,layer:"furniture",rotation:[0,0,0],virtual:!0,...d});for(let l of t.values())if(/^Desk_drawer_front(_\d+)?$/.test(l.name)){let[c,h,u]=l.position,f=c-l.size[0]/2,d=.47;n(l.name+"_box","box",[f-d/2,h,u-.01],[d,l.size[1]-.04,.13],"white",{front:"+x"})}let s=t.get("Nightstand");if(s){let[l,c,h]=s.position,[u,f,d]=s.size,g=l-u/2+.009,_=.33;for(let m=0;m<2;m++){let p=h+(m-.5)*d/2;n("Nightstand_interactive_front"+m+"_box","box",[g+_/2,c,p-.0195],[_,f-.06,.17],"white",{front:"-x"})}}let r=t.get("Toilet_bowl");if(r){let[l,c,h]=r.position,u=h+.205,f=c+.16;n("Toilet_seat","box",[l,f-.205,u+.011],[.35,.41,.022],"ceramic"),n("Toilet_lid","box",[l,f-.21,u+.035],[.36,.42,.026],"ceramic")}let o=t.get("Kitchen_hob");if(o){let[l,c,h]=o.position,u=h+o.size[2]/2;[-.148,.152].forEach((f,d)=>n("Kitchen_knob"+d,"cylinder",[l+f,c-o.size[1]/2+.025,u+.008],[.021,.021,.016],"metal"))}let a=t.get("Range_hood");if(a){let[l,c,h]=a.position,[u,f,d]=a.size,g=h-d/2,_=c-f/2;n("Range_hood_filter","box",[l,c+.03,g-.002],[u-.07,f-.08,.003],"metal"),n("Range_hood_light","box",[l,_+.05,g-.0035],[.26,.035,.003],"white"),n("Range_hood_panel","box",[l+u/2-.1,_-.003,g+.026],[.12,.005,.028],"metal"),n("Range_hood_led","box",[l+u/2-.052,_-.006,g+.026],[.007,.003,.007],"white")}return e}function Ur(i){if(i.virtual)return i;let t=gx(i.nodes);return{...i,nodes:[...i.nodes,...t],virtual:!0}}function md(i=.052){let t=[],e=(o,a,l,c,h,u)=>{for(let f=0;f<o;f++){let d=u+f/o*He,g=new cr(c,l,5,1,!0);g.translate(0,l/2,0),g.rotateX(h),g.rotateY(-d+Math.PI/2),g.translate(Math.cos(d)*a,0,Math.sin(d)*a),t.push(g)}};e(22,i,.034,.0075,-.42,0),e(12,i*.55,.022,.0055,-.25,.3);let n=Jn(t.map(o=>(o.deleteAttribute("uv"),o)));t.forEach(o=>o.dispose());let s=n.attributes.position,r=new Float32Array(s.count*3);for(let o=0;o<s.count;o++){let a=Math.min(1,Math.max(0,s.getY(o)/.034));r[o*3]=.22*(1-a)+.05*a,r[o*3+1]=.42*(1-a)+.1*a,r[o*3+2]=1*(1-a)+.3*a}return n.setAttribute("color",new fe(r,3)),n}function gd(i){var U,st,nt;let t=new Map(i.nodes.map(L=>[L.name,L])),e=i.derived,n=[],s=L=>t.get(L),r=(L,B,C,F,X={})=>{F&&n.push({name:L,layer:B,material:C,side:X.side||"",geometry:fd(F,X)})},o=L=>{let[B,C,F]=L.position;return{x:B,y:F,z:C}},a=L=>({x:L.size[0],y:L.size[2],z:L.size[1]}),l=Fc(t),c=(L,B,C,F,X=.004,K=.06)=>ht(new qn(C+K*2,F+K*2),L,X,B,-Math.PI/2),h=[],u=L=>L?L.position[2]+L.size[2]/2+.002:.004,f=(L,B,C)=>L&&Math.abs(B-L.position[0])<L.size[0]/2&&Math.abs(C-L.position[1])<L.size[1]/2,d=s("Bed_rug"),g=s("Living_rug");for(let[L,B]of[["Bed_frame",.07],["Wardrobe_body",.06],["Desk_drawers",.05],["Desk_drawers_01",.05],["Nightstand",.05],["Sofa_base",.08],["Kitchen_cabinet",.05],["Vanity",.05],["Toilet_tank",.05],["Cart_tray",.04]]){let C=s(L);if(!C)continue;let F=o(C),X=a(C),K=f(d,F.x,F.z)?d:f(g,F.x,F.z)?g:null;h.push(c(F.x,F.z,X.x,X.z,K?u(K):.004,B))}let _=s("Chair_column");if(_){let L=o(_);h.push(c(L.x,L.z,.48,.48,.004,.05))}let m=s("Coffee_top");if(m){let L=o(m),B=a(m);h.push(c(L.x,L.z,B.x,B.z,u(g),.05))}r("Contact_shadows","furniture","shadow",Xt(h),{uv:"keep"});let p=n.at(-1);if(p){let L=p.geometry.attributes.position,B=new Float32Array(L.count*2);for(let C=0;C<L.count;C++)B[C*2]=C%2,B[C*2+1]=(C>>1)%2?0:1;p.geometry.setAttribute("uv",new fe(B,2))}let S=s("Bed_frame"),x=s("Bed_headboard");if(S&&x){let L=l.bed,B=x.position[0]-x.size[0]/2,C=ld.mattressTop;for(let F of[-1,1])r("Bed_euro_pillow","soft","pillow",ht(an(.16,.56,.62,{r:.5,pinch:.5}),B-.13,C+.27,L.z+F*.33,0,0,-.26));r("Bed_lumbar","soft","check",ht(an(.13,.29,.52,{r:.65,pinch:.55}),B-.25,C+.27,L.z-.06,0,.05,-.42))}let y=s("Nightstand");if(y){let L=o(y),B=a(y),C=L.x-B.x/2,F=L.x+B.x/2,X=L.z-B.z/2,K=L.z+B.z/2,ot=.012,R=B.y,v=B.y/2,k=.0075,$=[],ct=[[C,X],[C,K],[F,X],[F,K]];for(let[vt,It]of ct)$.push(Ee(Lt(vt,ot,It),Lt(vt,R,It),k,8),Wi(Lt(vt,R,It),.012,10),Wi(Lt(vt,v,It),.012,10),Wi(Lt(vt,ot,It),.012,10),Ee(Lt(vt,0,It),Lt(vt,ot,It),.006,8));for(let vt of[ot,v,R])$.push(Ee(Lt(F,vt,X),Lt(F,vt,K),k,8),Ee(Lt(C,vt,X),Lt(F,vt,X),k,8),Ee(Lt(C,vt,K),Lt(F,vt,K),k,8)),vt!==ot&&$.push(Ee(Lt(C,vt,X),Lt(C,vt,K),k,8));r("Nightstand_frame","furniture","metal",Xt($));let j=Lt(C+.07,R+.005,K-.07);r("Nightstand_clock","soft","ceramic",Xt([ht(Le(.034,.034,.026,24),j.x,j.y+.042,j.z,0,0,Math.PI/2),ht(Le(.006,.006,.02,8),j.x+.004,j.y+.004,j.z,0,0,Math.PI/2)])),r("Nightstand_clock_face","soft","art",ht(new Ri(.029,24),j.x-.0135,j.y+.042,j.z,0,-Math.PI/2),{uv:"keep"});let Pt=n.at(-1).geometry,_t=Pt.attributes.uv;for(let vt=0;vt<_t.count;vt++)_t.setXY(vt,.5+_t.getX(vt)*.5,_t.getY(vt)*.5);r("Nightstand_book","soft","oat",ht(Tt(.15,.022,.2,.003),C+.11,R+.011,X+.11,0,.18,0))}if(x){let L=e.width,B=x.position[1],C=1.62,F=.5,X=.5,K=.022,ot=.024,R=[ht(Tt(ot,K,F,.003),L-ot/2,C+X/2-K/2,B),ht(Tt(ot,K,F,.003),L-ot/2,C-X/2+K/2,B),ht(Tt(ot,X-2*K,K,.003),L-ot/2,C,B+F/2-K/2),ht(Tt(ot,X-2*K,K,.003),L-ot/2,C,B-F/2+K/2)];r("Bed_print_frame","soft","wood",Xt(R),{grain:"y"}),r("Bed_print","soft","art",ht(new qn(F-2*K,X-2*K),L-.006,C,B,0,-Math.PI/2),{uv:"keep"});let v=n.at(-1).geometry.attributes.uv;for(let k=0;k<v.count;k++)v.setXY(k,v.getX(k)*.5,v.getY(k)*.5)}let w=s("Desk_top");if(w){let L=o(w),B=a(w),C=L.y+B.y/2,F=L.z-B.z/2,X=F+B.z*.4;r("Desk_wall_clock","soft","ceramic",ht(Le(.15,.15,.04,40),.02,1.98,X,0,0,Math.PI/2)),r("Desk_wall_clock_face","soft","art",ht(new Ri(.137,40),.0405,1.98,X,0,Math.PI/2),{uv:"keep"});let K=n.at(-1).geometry.attributes.uv;for(let v=0;v<K.count;v++)K.setXY(v,.5+K.getX(v)*.5,K.getY(v)*.5);let ot=[[F+B.z*.2,1.5,.1,.135,0],[F+B.z*.3,1.6,.12,.085,1],[F+B.z*.52,1.46,.1,.13,2]];for(let[v,k,$,ct,j]of ot){r("Desk_postcard","soft","art",ht(new qn($,ct),.003,k,v,0,Math.PI/2),{uv:"keep"}),K=n.at(-1).geometry.attributes.uv;for(let Pt=0;Pt<K.count;Pt++)K.setXY(Pt,(j+K.getX(Pt))*.25,.5+K.getY(Pt)*.5)}r("Desk_tray","soft","white",Xt([ht(Tt(.24,.008,.32,.003),.2,C+.004,F+.17),...[-1,1].map(v=>ht(Tt(.24,.03,.006,.002),.2,C+.019,F+.17+v*.157)),ht(Tt(.006,.03,.32,.002),.083,C+.019,F+.17)])),r("Desk_papers","soft","pillow",ht(Tt(.21,.012,.29,.001),.205,C+.014,F+.17,0,.02,0));let R=F+B.z*.73;r("Desk_books_a","soft","gray",Xt([ht(Tt(.17,.026,.24,.003),.25,C+.013,R,0,.06,0),ht(Tt(.15,.02,.21,.003),.25,C+.049,R,0,-.12,0)])),r("Desk_books_b","soft","oat",ht(Tt(.16,.022,.22,.003),.255,C+.037,R,0,.15,0)),r("Desk_mug","soft","ceramic",Xt([ht(Pe([[0,0],[.038,0],[.04,.004],[.04,.09],[.036,.09],[.035,.008],[0,.008]],22),.45,C,F+B.z*.62),ht(new Sn(.022,.005,8,16,Math.PI),.45,C+.048,F+B.z*.62+.04,0,Math.PI/2,-Math.PI/2)])),r("Desk_basket","furniture","knit",Xt([Pe([[0,0],[.15,0],[.16,.01],[.17,.26],[.162,.262],[.152,.012],[0,.012]],24).scale(1,1,.8)]).translate(.29,0,L.z))}let A=s("Wardrobe_body");if(A){let L=o(A),B=a(A),C=L.y+B.y/2;for(let[F,X]of[[.62,.3],[.93,.3]])r("Wardrobe_storage_box","soft","oat",Xt([ht(Tt(.36,.2,X,.012),L.x,C+.1,L.z-B.z/2+F),ht(Tt(.37,.03,X+.01,.008),L.x,C+.205,L.z-B.z/2+F)]))}let I=s("Chair_seat"),D=s("Chair_back"),b=s("Chair_column");if(I&&D&&b){let L=o(I),B=o(D),C=a(D),F=o(b),X=an(.044,C.y*.99,C.z*.98,{r:.32,pinch:.05}),K=X.attributes.position;for(let ot=0;ot<K.count;ot++)K.setX(ot,K.getX(ot)-.034*Math.pow(K.getZ(ot)/(C.z*.49),2));X.computeVertexNormals(),r("Chair_shell","furniture","white",Xt([ht(X,B.x+.026,B.y,B.z),ht(an(.5,.035,.46,{r:.47,pinch:.2}),L.x-.01,L.y-.052,L.z),Ee(Lt(L.x+.17,L.y-.06,L.z),Lt(B.x+.035,B.y-.2,B.z),.016,10,.02),ht(Le(.05,.055,.035,20),F.x,.125,F.z),ht(Le(.045,.04,.03,16),F.x,L.y-.085,F.z)]))}let M=s("Sofa_base"),T=s("Sofa_back");if(M&&T){let L=o(M),B=a(M),C=o(T),F=a(T),X=.495,K=C.z+F.z/2+.07;for(let ot of[-1,1])r("Sofa_back_cushion","furniture","oat",ht(an(B.x*.42,.36,.17,{r:.34,pinch:.35}),L.x+ot*B.x*.22,X+.165,K,-.1,0,0));r("Sofa_pillow_knit","soft","knit",ht(an(.44,.44,.14,{r:.61,pinch:.6}),L.x-B.x/2+.36,X+.19,K+.13,-.32,.1,.04)),r("Sofa_pillow_check","soft","check",ht(an(.4,.4,.13,{r:.61,pinch:.6}),L.x-B.x/2+.66,X+.17,K+.15,-.3,-.12,-.05)),r("Sofa_legs","furniture","wood",Xt([-1,1].flatMap(ot=>[-1,1].map(R=>ht(Le(.02,.015,.058,12),L.x+ot*(B.x/2-.07),.029,L.z+R*(B.z/2-.07))))),{grain:"y"})}if(m){let L=o(m),B=a(m),C=L.y+B.y/2;r("Coffee_shelf","furniture","white",ht(Tt(B.x-.11,.022,B.z-.11,.004),L.x,.15,L.z)),r("Coffee_carafe","soft","glass",Xt([Pe([[0,0],[.042,0],[.044,.006],[.044,.15],[.04,.16],[.028,.175],[.027,.19],[0,.19]],24).translate(L.x+.3,C,L.z-.13),Pe([[0,0],[.033,0],[.034,.004],[.036,.095],[0,.095]],20).translate(L.x+.19,C,L.z-.16)])),r("Coffee_book","soft","gray",ht(Tt(.17,.022,.22,.003),L.x-.25,C+.011,L.z-.15,0,.08,0)),r("Coffee_coaster","soft","oat",ht(Tt(.1,.004,.1,.002),L.x+.19,C+.002,L.z-.16))}for(let L of[d,g]){if(!L)continue;let B=o(L),C=a(L),F=[],X=Wa(ad(L.name)),K=Math.floor(C.z/.022);for(let ot of[-1,1])for(let R=0;R<K;R++){let v=B.z-C.z/2+.011+R*C.z/K,k=.055+X()*.025,$=B.x+ot*(C.x/2+k/2-.004);F.push(ht(new Fe(k,.004,.006),$,.004,v,0,(X()-.5)*.35,0))}r(L.name+"_fringe","soft","rug",Xt(F))}let P=s("Curtain_fold0_0"),O=s("Curtain_fold1_6");if(P&&O){let L=P.position[2]+P.size[2]/2+.022,B=P.position[1],C=P.position[0]-.12,F=O.position[0]+.12;r("Curtain_rod","soft","white",Xt([Ee(Lt(C,L,B),Lt(F,L,B),.012,14),Wi(Lt(C-.02,L,B),.022,14),Wi(Lt(F+.02,L,B),.022,14),...[C+.06,F-.06].map(K=>Ee(Lt(K,L,0),Lt(K,L,B),.007,8)),Ee(Lt(C+.3,L+.005,0),Lt(F-.3,L+.005,0),.001,4)]));let X=s("White_sheer_left");X&&r("Sheer_track","soft","white",ht(Tt(O.position[0]-P.position[0]+.2,.012,.02,.003),(P.position[0]+O.position[0])/2,X.position[2]+X.size[2]/2+.012,X.position[1]))}let z=[],G=.012,H=.07,W=e.bedroom_depth,Z=e.body_depth,rt=e.width,at=(U=t.get("Bedroom_opening_frame0"))==null?void 0:U.position[0],J=at!==void 0?t.get("Bedroom_opening_frame1").position[0]-at:0,ut=(st=s("Balcony_sliding_jamb0"))==null?void 0:st.position[0],yt=ut!==void 0?s("Balcony_sliding_jamb1").position[0]-ut:0,Mt=(L,B,C,F)=>{C-B>.02&&z.push(ht(Tt(C-B,H,G,.002),(B+C)/2,H/2,L+F*G/2))},Nt=(L,B,C,F)=>{C-B>.02&&z.push(ht(Tt(G,H,C-B,.002),L+F*G/2,H/2,(B+C)/2))};Nt(0,0,W-.06,1),Nt(rt,0,W-.06,-1),Mt(0,0,ut??0,1),Mt(0,(ut??0)+yt,rt,1),Mt(W-.06,0,at-.03,-1),Mt(W-.06,at+J+.03,rt,-1),Mt(W+.06,0,at-.03,1),Mt(W+.06,at+J+.03,rt,1),Nt(rt,W+.06,Z-.06,-1),Nt(0,W+.06,Z,1);let et=(nt=s("Bath_slider_head"))==null?void 0:nt.position[0];if(et!==void 0&&Mt(Z-.06,et+.06,rt,-1),r("Skirting","structure","white",Xt(z)),r("Ceiling_lights","ceiling","ceramic",Xt([[rt/2,W*.52],[rt/2,(W+Z)/2]].map(([L,B])=>Pe([[0,-.055],[.19,-.055],[.215,-.045],[.225,-.02],[.225,0],[0,0]],40).translate(L,e.height,B)))),ut!==void 0){let L=ut+yt-.35,B=-.38,C=Wa(77),F=[],X=[];r("Balcony_pot","exterior","ceramic",Pe([[0,0],[.16,0],[.17,.01],[.2,.34],[.205,.36],[.19,.36],[.188,.33],[0,.33]],28).translate(L,0,B),{side:"balcony"});let K=Lt(L+.02,1.05,B-.02);X.push(Ee(Lt(L,.33,B),K,.018,8,.012));for(let ot=0;ot<9;ot++){let R=ot*2.4+C(),v=K.clone().add(Lt(Math.cos(R)*(.22+C()*.16),.1+C()*.4,Math.sin(R)*(.18+C()*.14)));X.push(Ee(K,v,.006,5));for(let k=0;k<16;k++){let $=K.clone().lerp(v,.3+.7*C()).add(Lt((C()-.5)*.12,(C()-.5)*.1,(C()-.5)*.12));F.push(Ga(Va(.07+C()*.03,.022,.15,4),$,Lt(C()-.5,C()-.2,C()-.5),C()*3))}}r("Balcony_tree_trunk","exterior","wood",Xt(X),{side:"balcony",grain:"y"}),r("Balcony_tree_leaves","exterior","green",Xt(F),{side:"balcony"})}let it=s("Kitchen_sink"),mt=s("Kitchen_hob"),St=s("Kitchen_counter");if(it&&St){let L=o(it),B=St.position[2]+St.size[2]/2,C=St.position[1]+St.size[1]/2-.06;if(r("Kitchen_tap","furniture","metal",Xt([Ee(Lt(L.x,B,C),Lt(L.x,B+.26,C),.013,14),ht(new Sn(.07,.011,8,16,Math.PI),L.x,B+.26,C-.07,0,Math.PI/2,0),Ee(Lt(L.x,B+.26,C-.14),Lt(L.x,B+.2,C-.14),.011,12),Ee(Lt(L.x+.04,B+.05,C),Lt(L.x+.09,B+.07,C),.006,8)])),r("Kitchen_board","soft","wood",ht(Tt(.3,.42,.018,.03),L.x-.03,B+.215,C+.025,.1,0,0),{grain:"y"}),mt){let F=o(mt);r("Kitchen_kettle","soft","ceramic",Xt([Pe([[0,0],[.075,0],[.08,.01],[.085,.08],[.072,.17],[.05,.19],[.05,.2],[0,.2]],24).translate(F.x+.12,B+.02,F.z+.06),ht(new Sn(.06,.009,8,16,Math.PI),F.x+.12,B+.22,F.z+.06,0,0,0)]))}}if(A){let L=o(A),B=a(A),C=L.x-B.x/2,F=L.z-B.z/2,X=L.z+B.z/2,K=L.x+.02;r("Wardrobe_shelf","furniture","white",ht(Tt(B.x-.05,.018,B.z-.04,.003),K,1.8,L.z)),r("Wardrobe_rail","furniture","metal",Ee(Lt(K,1.7,F+.03),Lt(K,1.7,X-.03),.011,12));let ot=Wa(9),R=["gray","oat","pillow","linen","gray","oat"];for(let v=0;v<6;v++){let k=F+.16+v*.165+(ot()-.5)*.02,$=.72+ot()*.32;r("Wardrobe_garment_"+v,"soft",R[v],ht(an(.42,$,.035,{r:.35,pinch:.1}),K,1.66-$/2,k)),r("Wardrobe_hanger_"+v,"soft","wood",Xt([ht(new Sn(.2,.006,6,20,Math.PI*.8),K,1.62,k,0,0,Math.PI*.1),ht(new Sn(.016,.003,6,12,Math.PI*1.4),K,1.715,k)]))}for(let[v,k]of[[.25,"oat"],[.62,"gray"]])r("Wardrobe_folded","soft",k,Xt([0,1,2].map($=>ht(Tt(.3,.045,.26,.012),K,1.835+$*.047,F+v+$%2*.01))))}let Et=s("Kitchen_cabinet");if(Et){let L=o(Et),B=a(Et);r("Kitchen_cabinet_shelf","furniture","white",ht(Tt(B.x-.04,.016,B.z-.07,.003),L.x,.44,L.z+.03))}let kt=s("Vanity");if(kt){let L=o(kt),B=a(kt);r("Vanity_shelf","furniture","white",ht(Tt(B.x-.07,.016,B.z-.04,.003),L.x+.02,.4,L.z))}let qt=s("Toilet_bowl");if(qt){let L=o(qt);r("Toilet_water","furniture","glass",ht(new Ri(1,28),L.x,L.y+.03,L.z-.01,-Math.PI/2,0,0,.085,.12,1))}return n}function _d(){let e=new Uint8Array(8192);for(let s=0;s<32;s++)for(let r=0;r<64;r++){let o=s/31,a=r/64*He,l=(s*64+r)*4,c=o>.62?[.95,.94,.92]:o>.4?[.86,.85,.82]:[.52,.53,.55],h=Math.exp(-Math.pow((a-Math.PI*1.5)/.45,2)-Math.pow((o-.55)/.12,2));c=c.map((u,f)=>Math.min(1,u+h*[.1,.12,.14][f]));for(let u=0;u<3;u++)e[l+u]=Math.round(c[u]*255);e[l+3]=255}let n=new Ln(e,64,32);return n.mapping=Ss,n.colorSpace=be,n.magFilter=Ye,n.needsUpdate=!0,n}function Nr(i){return pd(i)}function Oc(i,t,e){let n=rd(t.decor?t.material:Nc(t));return t.wall&&t.layer==="structure"&&(n.clippingPlanes=[e]),n}function Za(i,t,e,n={}){t=Ur(t);let s=Ur(n.decorSpec||t);dd(Fc(s.nodes));let r=new We,o=new Map,a=(l,c,h,u,f)=>{let d=JSON.stringify([l.layer,c,!!l.wall,l.side||""]);o.has(d)||o.set(d,{node:{...l,material:c,decor:!0},geometries:[],names:[],decor:[]});let g=o.get(d);h&&g.geometries.push(h),(f?g.decor:g.names).push(u)};for(let l of t.nodes)a(l,Nc(l),Nr(l),l.name,!!l.virtual);if(n.decor!==!1)for(let l of gd(s))a({layer:l.layer,side:l.side},l.material,l.geometry,l.name,!0);for(let{node:l,geometries:c,names:h,decor:u}of o.values()){if(!c.length)continue;let f=Oc(i,l,e),d=Jn(c);if(!d)throw Error("\u90E8\u4EF6\u5408\u5E76\u5931\u8D25");c.forEach(_=>_.dispose());let g=new ve(d,f);g.name=(h[0]||u[0])+"_batch",g.userData={layer:l.layer,wall:!!l.wall,side:l.side,parts:h,decor:u},r.add(g)}for(let{names:l}of o.values())if(l.length&&!r.children.some(c=>c.userData.parts===l)){let c=r.children.find(h=>h.userData.layer===t.nodes.find(u=>u.name===l[0]).layer);c&&c.userData.parts.push(...l)}return r.userData.partCount=t.nodes.filter(l=>!l.virtual).length,r}function xd(i,t,e,n){let s=null,r=f=>{let d=Array.from(f).slice(0,2);return{count:d.length,x:d.reduce((g,_)=>g+_.clientX,0)/d.length,y:d.reduce((g,_)=>g+_.clientY,0)/d.length,distance:d.length===2?Math.hypot(d[1].clientX-d[0].clientX,d[1].clientY-d[0].clientY):0}},o=f=>{f.cancelable&&f.preventDefault(),f.stopPropagation()};function a(f){o(f),s=r(f.touches),n()}function l(f){o(f);let d=r(f.touches);if(!s||d.count!==s.count||!d.count){s=d;return}let g=e(),_=Math.max(i.clientHeight,1),m=d.x-s.x,p=d.y-s.y,S=g.position.clone().sub(t.target);if(d.count===1){let x=new di().setFromVector3(S);x.theta-=2*Math.PI*m/_,x.phi=pe.clamp(x.phi-2*Math.PI*p/_,Math.max(.01,t.minPolarAngle),Math.min(Math.PI-.01,t.maxPolarAngle)),g.position.copy(t.target).add(new N().setFromSpherical(x))}else{let x=s.distance>1?pe.clamp(d.distance/s.distance,.5,2):1;g.isOrthographicCamera?(g.zoom=pe.clamp(g.zoom*x,.25,12),g.updateProjectionMatrix()):(S.setLength(pe.clamp(S.length()/x,t.minDistance,t.maxDistance)),g.position.copy(t.target).add(S)),g.updateMatrixWorld();let y=g.isOrthographicCamera?(g.top-g.bottom)/g.zoom/_:2*S.length()*Math.tan(pe.degToRad(g.fov/2))/_,w=new N().setFromMatrixColumn(g.matrixWorld,0).multiplyScalar(-m*y).add(new N().setFromMatrixColumn(g.matrixWorld,1).multiplyScalar(p*y));g.position.add(w),t.target.add(w)}g.lookAt(t.target),t.update(),s=d,n()}function c(f){o(f),s=f.touches.length?r(f.touches):null,n()}function h(f){o(f),s=null,n()}let u={touchstart:a,touchmove:l,touchend:c,touchcancel:h,gesturestart:o,gesturechange:o};i.style.touchAction="none";for(let[f,d]of Object.entries(u))i.addEventListener(f,d,{passive:!1});return()=>{for(let[f,d]of Object.entries(u))i.removeEventListener(f,d)}}function yd(i,t){let e=[],n=new Map,s=(t||[]).flatMap(a=>(a.collisionProxy||[]).map((l,c)=>({minX:l.min[0],minY:l.min[1],minZ:l.min[2],maxX:l.max[0],maxY:l.max[1],maxZ:l.max[2],name:a.id+"_proxy"+(l.name?"_"+l.name:c),objects:l.objects||a.object||[]}))),r=a=>["Bed_","Wardrobe_","Sofa_","Desk_","Coffee_","Chair_","Kitchen_cabinet","Kitchen_counter","Nightstand","Vanity","Toilet_"].find(l=>a.startsWith(l));function o(a){let[l,c,h]=a.position,[u,f,d]=a.size,g=a.rotation[2]||0,_=a.shape==="sphere",m=_?u:u/2,p=_?f:f/2;return{minX:l-Math.abs(Math.cos(g))*m-Math.abs(Math.sin(g))*p,maxX:l+Math.abs(Math.cos(g))*m+Math.abs(Math.sin(g))*p,minZ:c-Math.abs(Math.sin(g))*m-Math.abs(Math.cos(g))*p,maxZ:c+Math.abs(Math.sin(g))*m+Math.abs(Math.cos(g))*p,minY:h-(_?d:d/2),maxY:h+(_?d:d/2),name:a.name}}for(let a of i.nodes){let l=o(a);if((a.wall||a.name==="Bath_slider_glass")&&l.minY<1.75&&l.maxY>.12&&e.push(l),s.length)continue;let c=a.layer==="furniture"&&r(a.name);if(!(!c||l.minY>1.75))if(!n.has(c))n.set(c,{...l,name:c});else{let h=n.get(c);for(let u of["X","Y","Z"])h["min"+u]=Math.min(h["min"+u],l["min"+u]),h["max"+u]=Math.max(h["max"+u],l["max"+u])}}return e.push(...n.values(),...s),{width:i.derived.width,depth:i.derived.total_depth,boxes:e}}function ln(i,t,e,n=.16){return t<n||e<n||t>i.width-n||e>i.depth-n?!1:!i.boxes.some(s=>{let r=t-Math.max(s.minX,Math.min(t,s.maxX)),o=e-Math.max(s.minZ,Math.min(e,s.maxZ));return r*r+o*o<n*n-1e-9})}function Fr(i,t,e,n,s=.16){let r=Math.max(1,Math.ceil(Math.hypot(e,n)/.04)),o=t.x,a=t.z;for(let l=0;l<r;l++){let c=e/r,h=n/r,u=o+c,f=a+h;if(ln(i,u,f,s)){o=u,a=f;continue}let d=o,g=a;if(ln(i,u,a,s)&&(o=u),ln(i,o,f,s)&&(a=f),o===d&&a===g){let _=Math.hypot(c,h);if(_<1e-6)continue;let m=-h/_,p=c/_;t:for(let S of[1,-1])for(let x of[.35,.7]){let y=d+c*.5+m*S*_*x,w=g+h*.5+p*S*_*x;if(ln(i,y,w,s)){o=y,a=w;break t}}}}return{x:o,z:a}}var $a=class{constructor(t,e){this.world=t,this.spawn={...e},this.position={...e},this.velocity={x:0,z:0},this.facing=0,this.travel=0}reset(){this.position={...this.spawn},this.velocity={x:0,z:0},this.facing=0,this.travel=0,this.speed=0}update(t,e,n){t=Math.min(.05,Math.max(0,t));let s=Math.hypot(e.x,e.y),r=.08,o=s>r?Math.min(1,(s-r)/(1-r))/s:0,a=-e.y*o,l=Math.cos(n)*e.x*o-Math.sin(n)*a,c=-Math.sin(n)*e.x*o-Math.cos(n)*a,h=Math.hypot(l,c),u=1-Math.exp(-t*(h>.001?8:10));this.velocity.x+=(l*1.1-this.velocity.x)*u,this.velocity.z+=(c*1.1-this.velocity.z)*u,h===0&&Math.hypot(this.velocity.x,this.velocity.z)<.001&&(this.velocity={x:0,z:0});let f=Fr(this.world,this.position,this.velocity.x*t,this.velocity.z*t),d=Math.hypot(f.x-this.position.x,f.z-this.position.z);if(d>5e-5){let g=Math.atan2(f.x-this.position.x,f.z-this.position.z),_=Math.atan2(Math.sin(g-this.facing),Math.cos(g-this.facing));this.facing+=_*(1-Math.exp(-t*14))}return this.position=f,this.travel+=d,this.speed=d/t||0,this.speed}};function vd(i){let t=new Map(i.nodes.map(J=>[J.name,J])),e=[],n=J=>{let ut=t.get(J);if(!ut)throw Error("\u7F3A\u5C11\u73B0\u6709\u90E8\u4EF6 "+J);return ut},s=J=>i.nodes.filter(ut=>ut.name.startsWith(J)).map(ut=>ut.name),r=(J,ut,yt=1.15)=>({position:J,approach:ut,range:yt}),o=(J,ut,yt=-.12,Mt=[])=>({position:J,yaw:ut,pitch:yt,waypoints:Mt,yawLimit:1.3,pitchLimits:[-.78,.95]}),a=(J,ut,yt,Mt=["standing"])=>({id:J,label:ut,kind:"pose",cameraPose:yt,available:Mt}),l=J=>({id:"stand",label:J,kind:"release",available:["occupied"]}),c=(J,ut,yt,Mt,Nt,et={},it=[],mt={})=>{e.push({id:J,label:ut,object:yt,interactionPoints:Mt,actions:Nt,cameraPose:et,animation:it,state:Nt.some(St=>St.kind==="pose")?{posture:"standing",...mt}:mt})},h=(J,ut,yt,Mt,Nt,et="open",it=!1,mt=["\u6253\u5F00","\u5173\u95ED"])=>c(J,ut,yt,Mt,[{id:"toggle",kind:"toggle",channel:et,labels:mt}],{},Nt,{[et]:it}),u=n("Chair_seat"),[f,d,g]=u.position,_=o([f,g+.73,d],Math.PI/2,-.17),m=r([f,1.05,d],[1.52,d],1.35);c("chair","\u6905\u5B50",s("Chair_"),[m],[l("\u8D77\u8EAB"),a("sit","\u5750\u4E0B","sit")],{sit:_});let p=n("Desk_top"),[S,x]=p.position;c("desk","\u4E66\u684C",s("Desk_").filter(J=>!J.startsWith("Desk_drawer")),[r([S+.2,.98,x],[1.52,x],1.55)],[l("\u8D77\u8EAB"),a("use","\u5750\u4E0B\u4F7F\u7528","use")],{use:_});let y=n("Sofa_cushion"),[w,A,I]=y.position;c("sofa","\u6C99\u53D1",s("Sofa_"),[r([w,1.03,A],[w-.93,A+.12])],[l("\u8D77\u8EAB"),a("sit","\u5750\u4E0B","sit",["standing","lie"]),a("lie","\u8EBA\u4E0B","lie",["standing","sit"])],{sit:o([w,I+.075+.675,A],Math.PI,-.12),lie:{...o([n("Sofa_cushion_01").position[0]+.06,I+.3,A+.04],Math.PI/2,.42,[[w,1.25,A+.04]]),pitchLimits:[-.45,1.38]}});let D=n("Bed_mattress"),[b,M,T]=D.position,P=n("Pillow_01"),O=r([b,1,M+.57],[b,M+1.05],1.6),z={...o([P.position[0],P.position[2]+.21,P.position[1]],Math.PI/2,.62,[[b,1.18,M+.57]]),pitchLimits:[-.4,1.38]};c("bed","\u5E8A",s("Bed_").concat(s("Pillow"),s("Bedding"),["Cream_throw"]),[O],[l("\u8D77\u5E8A"),a("sit","\u5750\u5E8A\u8FB9","sit",["standing","lie","sleep"]),a("lie","\u8EBA\u4E0B","lie",["standing","sit","sleep"]),{...a("sleep","\u7761\u89C9","sleep",["standing","sit","lie"]),sleep:!0}],{sit:o([b,T+.1+.75,M+.61],Math.PI,-.12),lie:z,sleep:z});let G=n("Toilet_bowl"),[H,W]=G.position;c("toilet","\u9A6C\u6876",s("Toilet_"),[r([H,.98,W-.12],[H-.48,W-.12],1.3)],[l("\u8D77\u8EAB"),a("use","\u5750\u4E0B\u4F7F\u7528","use")],{use:o([H,1.14,W-.1],0,-.08)});let Z=n("Wardrobe_body"),rt=r([3.34,1.15,Z.position[1]],[2.65,Z.position[1]],1.4),at=[[-1,-1.2],[1,1.2]].map(([J,ut])=>{let yt=n("Wardrobe_door"+J);return{type:"rotate",parts:[yt.name,"Wardrobe_handle"+J],pivot:[yt.position[0],yt.position[2],yt.position[1]+J*yt.size[1]/2],axis:"y",amount:ut,collision:!0}});h("wardrobe","\u8863\u67DC",s("Wardrobe_").filter(J=>!J.includes("plant")),[rt],at),e.at(-1).openBodies=[{body:"Wardrobe_body",front:"-x",count:0}];for(let J of i.nodes.filter(ut=>ut.name.startsWith("Desk_drawer_front")))h(J.name,"\u4E66\u684C\u62BD\u5C49",[J.name,J.position[1]<2?"Desk_drawers":"Desk_drawers_01"],[r([J.position[0],J.position[2],J.position[1]],[1.3,J.position[1]],1.2)],[{type:"translate",parts:[J.name],offset:[.3,0,0],collision:!0}]),e.at(-1).openBodies=[{body:J.position[1]<2?"Desk_drawers":"Desk_drawers_01",front:"+x",count:0}];for(let[J,ut,yt,Mt]of[["Nightstand","-x","drawer",2],["Kitchen_cabinet","-z","door",2],["Vanity","-x","door",2]]){let Nt=n(J),[et,it,mt]=Nt.position,[St,Et,kt]=Nt.size;for(let qt=0;qt<Mt;qt++){let U=J+"_interactive_front"+qt,st,nt,L,B;ut==="-x"?(st=[et-St/2,mt+(yt==="drawer"?(qt-.5)*kt/2:0),it+(yt==="drawer"?0:(qt-.5)*Et/2)],B=[et-St/2-.48,st[2]],nt=[st[0],st[1],st[2]+(qt===0?-1:1)*Et/4],L=yt==="drawer"?{type:"translate",parts:[U],offset:[-.22,0,0],collision:!0}:{type:"rotate",parts:[U],pivot:nt,axis:"y",amount:qt===0?-1.2:1.2,collision:!0}):(st=[et+(qt-.5)*St/2,mt,it-Et/2],B=[st[0],it-Et/2-.82],nt=[st[0]+(qt===0?-1:1)*St/4,mt,st[2]],L={type:"rotate",parts:[U],pivot:nt,axis:"y",amount:qt===0?1.2:-1.2,collision:!0}),h(U,J==="Nightstand"?"\u5E8A\u5934\u67DC\u62BD\u5C49":J==="Vanity"?"\u6D17\u624B\u53F0\u67DC\u95E8":"\u53A8\u623F\u67DC\u95E8",[J,U],[r(st,B,1.3)],[L]),e.at(-1).frontPartition={body:J,front:ut,kind:yt,count:Mt,index:qt,name:U}}}h("bath_door","\u536B\u751F\u95F4\u79FB\u95E8",["Bath_slider_glass","Bath_slider_pull"],[r([2.3,1.1,8],[1.75,7.95],1.4),r([2.3,1.1,8],[2.78,7.95],1.4)],[{type:"translate",parts:["Bath_slider_glass","Bath_slider_pull"],offset:[0,0,.351],initial:1,collision:!0}],"open",!0,["\u5F00\u95E8","\u5173\u95E8"]),h("entry_door","\u5165\u6237\u95E8",["Entry_leaf_open","Entry_handle"],[r([.3,1.05,8.9],[.45,8.12],1.5)],[{type:"rotate",parts:["Entry_leaf_open","Entry_handle"],pivot:[.01,1.06,9.25],axis:"y",amount:-1.2566370614359172,initial:1,collision:!0}],"open",!0,["\u5F00\u95E8","\u5173\u95E8"]),h("curtains","\u7C73\u767D\u7A97\u5E18",s("Curtain_fold"),[r([1,1.35,.11],[1.3,.65],1.7),r([3,1.35,.11],[2.65,.65],1.7)],[{type:"transform",parts:s("Curtain_fold0"),pivot:[.57,1.275,.11],closedOffset:[.71,0,0],closedScale:[3.5,1,1]},{type:"transform",parts:s("Curtain_fold1"),pivot:[3.43,1.275,.11],closedOffset:[-.71,0,0],closedScale:[3.5,1,1]}],"open",!0,["\u6253\u5F00\u7A97\u5E18","\u5173\u95ED\u7A97\u5E18"]),h("sheer","\u767D\u7EB1",["White_sheer_left"],[r([2,1.35,.06],[2,.7],1.6)],[{type:"transform",parts:["White_sheer_left"],pivot:[1.244,1.3,.06],closedOffset:[.756,0,0],closedScale:[2.3,1,1]}],"open",!0,["\u6253\u5F00\u767D\u7EB1","\u5173\u95ED\u767D\u7EB1"]);for(let J of["Desk_lamp","Bed_lamp","Floor_lamp"]){let ut=n(J+"_shade"),[yt,Mt,Nt]=ut.position;h(J,J==="Desk_lamp"?"\u4E66\u684C\u706F":J==="Bed_lamp"?"\u5E8A\u5934\u706F":"\u843D\u5730\u706F",s(J),[r([yt,Nt,Mt],J==="Desk_lamp"?[1,Mt]:[yt-.5,Mt],1.6)],[{type:"light",parts:[ut.name],position:[yt,Nt+.1,Mt],color:16774632,intensity:.85,distance:3.2}],"on",!1,["\u5F00\u706F","\u5173\u706F"])}h("laptop","\u7B14\u8BB0\u672C\u7535\u8111",["Desk_laptop_base","Desk_laptop_screen"],[r([.31,.95,x],[1.5,x],1.55)],[{type:"screen",parts:["Desk_laptop_screen"]}],"on",!1,["\u6253\u5F00\u7535\u8111","\u5173\u95ED\u7535\u8111"]),h("aircon","\u7A7A\u8C03",s("Air_conditioner"),[r([.29,2.3,.43],[1,.75],2)],[{type:"emissive",parts:["Air_conditioner_slot"],color:7445685,intensity:.8}],"on",!1,["\u5F00\u542F\u7A7A\u8C03","\u5173\u95ED\u7A7A\u8C03"]),h("hob","\u7076\u5177",s("Kitchen_hob").concat(s("Burner")),[r([1.908,.95,9.41],[1.91,8.62],1.3)],[{type:"emissive",parts:s("Burner"),color:14975556,intensity:.8}],"on",!1,["\u6253\u5F00\u7076\u5177","\u5173\u95ED\u7076\u5177"]),h("shower","\u6DCB\u6D74",s("Shower_"),[r([2.54,1.75,9.195],[2.92,8.8],1.6)],[{type:"water",parts:["Shower_head"],position:[2.54,2.03,9.195],length:1.8}],"on",!1,["\u6253\u5F00\u6DCB\u6D74","\u5173\u95ED\u6DCB\u6D74"]);for(let[J,ut,yt,Mt]of[["living_window","\u5BA2\u5385\u7A97","Living_window_glass","z"],["bath_window","\u536B\u751F\u95F4\u7A97","Bath_window_glass","x"],["balcony_window","\u9633\u53F0\u73BB\u7483\u95E8","Balcony_sliding_glass","x"]]){let Nt=n(yt),[et,it,mt]=Nt.position,St=Mt==="x"?Nt.size[0]:Nt.size[1],Et=yt+"_interactive_pane",kt=yt+"_interactive_fixed";h(J,ut,[Et,kt],[r([et,mt,it],Mt==="x"?[et,it+(it>i.derived.total_depth/2?-.5:.5)]:[et-.5,it],1.7)],[{type:"translate",parts:[Et],offset:Mt==="x"?[St/2-.04,0,0]:[0,0,St/2-.04]}],"open",!1,["\u6253\u5F00","\u5173\u95ED"]),e.at(-1).glassPartition={body:yt,axis:Mt,names:[Et,kt]}}for(let J of e){for(let ut of J.interactionPoints)ut.range=Math.min(ut.range,J.id==="aircon"?1.35:J.id==="laptop"?1.25:1.15);if(J.animation.length){let ut=J.animation.map(yt=>yt.type);J.duration=ut.includes("transform")?1.15:ut.includes("rotate")?.88:ut.includes("translate")?.66:.38}for(let[ut,yt]of Object.entries(J.cameraPose)){let Mt=["lie","sleep"].includes(ut);yt.duration=Mt?1.55:1.15,yt.releaseDuration=Mt?1.35:1.1,yt.yawLimit=Mt?1.5:1.3,yt.pitchLimits=Mt?[-.55,1.3]:[-.78,.95]}}return e}function Bc(i){let t=[];for(let e of i.actions||[])(e.kind==="toggle"||e.kind==="set")&&!t.includes(e.channel)&&t.push(e.channel);return t}function Ls(i,t){let e=Bc(i);return!t||t===e[0]?i.id:i.id+"#"+t}function Md(i,t,e,n){var M;t=Ur(t);let s=new We,r=new Map,o=new Map,a=new Map(t.nodes.map(T=>[T.name,T])),l=new Set(n.flatMap(T=>T.animation.flatMap(P=>P.parts))),c=new Map,h=new Set;for(let T of n){for(let P of T.openBodies||[])c.set(P.body,P);if(T.frontPartition&&c.set(T.frontPartition.body,T.frontPartition),T.glassPartition){let P=T.glassPartition,O=a.get(P.body);h.add(O.name);for(let z=0;z<2;z++){let G=structuredClone(O);G.name=P.names[z];let H=P.axis==="x"?0:1;G.size[H]/=2,G.position[H]+=(z-.5)*G.size[H],a.set(G.name,G)}}}for(let T of c.values()){let P=a.get(T.body),[O,z,G]=P.position,[H,W,Z]=P.size;for(let rt=0;rt<T.count;rt++){let at=structuredClone(P);at.name=T.body+"_interactive_front"+rt,at.wall=!1,T.front==="-x"?(at.size=[.018,T.kind==="drawer"?W-.025:W/2-.014,T.kind==="drawer"?Z/2-.016:Z-.024],at.position=[O-H/2,z+(T.kind==="drawer"?0:(rt-.5)*W/2),G+(T.kind==="drawer"?(rt-.5)*Z/2:0)]):(at.size=[H/2-.014,.018,Z-.024],at.position=[O+(rt-.5)*H/2,z-W/2,G]),a.set(at.name,at)}}let u=new Set([...l,...c.keys(),...n.filter(T=>T.glassPartition).flatMap(T=>T.glassPartition.names)]),f=t.nodes.filter(T=>!u.has(T.name)&&!h.has(T.name)),d=Za(i,{...t,nodes:f},e,{decorSpec:t});s.add(d);for(let T of u){let P=a.get(T);if(!P)throw Error("\u4EA4\u4E92\u90E8\u4EF6\u672A\u7ED1\u5B9A "+T);let O=Nr(c.has(T)?{...P,carcass:c.get(T).front}:P),z=Oc(i,P,e),G=new ve(O,z);G.name=T,G.userData={layer:P.layer,parts:[T]},r.set(T,G),s.add(G)}let g=t.nodes.filter(T=>!l.has(T.name)),_=yd({...t,nodes:g},n);_.staticBoxes=[..._.boxes],_.dynamicBoxes=[],_.cameraBoxes=g.filter(T=>(T.wall||["furniture","soft"].includes(T.layer))&&!["Bed_rug","Living_rug"].includes(T.name)&&!c.has(T.name)).flatMap(T=>{let P=Nr(T);if(!P)return[];P.computeBoundingBox();let O=P.boundingBox.clone();return P.dispose(),{minX:O.min.x,maxX:O.max.x,minY:O.min.y,maxY:O.max.y,minZ:O.min.z,maxZ:O.max.z,name:T.name}}),_.glazingBoxes=t.nodes.filter(T=>T.side==="glazing").map(T=>{let P=Nr(T);P.computeBoundingBox();let O=P.boundingBox;return P.dispose(),{minX:O.min.x,maxX:O.max.x,minY:O.min.y,maxY:O.max.y,minZ:O.min.z,maxZ:O.max.z,name:T.name}});let m=[],p=new Set(n.flatMap(T=>T.animation.filter(P=>!["rotate","translate","transform"].includes(P.type)).flatMap(P=>P.parts)));for(let T of n)for(let P of T.animation){let O=Ls(T,P.channel);o.has(O)||o.set(O,[]);let z=o.get(O),G=P.parts.map(W=>r.get(W));if(G.some(W=>!W))throw Error("\u4EA4\u4E92\u52A8\u753B\u5F15\u7528\u7F3A\u5C11\u90E8\u4EF6 "+T.id);let H;if(["rotate","translate","transform"].includes(P.type)){let W=new We;W.name=O+"_motion";let Z=P.pivot||[0,0,0];W.position.fromArray(Z),s.add(W),s.updateMatrixWorld(!0),G.forEach(at=>W.attach(at));let rt=new Map;for(let at of G){if(p.has(at.name))continue;let J=at.material.userData.styleKey+"|"+at.material.side;rt.has(J)||rt.set(J,[]),rt.get(J).push(at)}for(let at of rt.values())if(at.length>1){let J=at.map(Mt=>(Mt.updateMatrix(),Mt.geometry.clone().applyMatrix4(Mt.matrix))),ut=Jn(J);J.forEach(Mt=>Mt.dispose());let yt=new ve(ut,at[0].material);yt.name=at[0].name+"_merged";for(let Mt of at)W.remove(Mt),Mt.geometry.dispose(),Mt!==at[0]&&Mt.material.dispose();W.add(yt)}H={descriptor:P,group:W,base:W.position.clone()},P.collision&&m.push(H)}else{if(H={descriptor:P,meshes:G},P.type==="light"){let W=new br(P.color,0,P.distance,2);W.position.fromArray(P.position),s.add(W),H.light=W}if(P.type==="screen"){H.texture=_x();for(let W of G)W.material.map=H.texture,W.material.emissiveMap=H.texture,W.material.needsUpdate=!0}if(P.type==="flame"){let W=new ve(md(P.radius||.052),new Yn({vertexColors:!0,transparent:!0,blending:Er,depthWrite:!1}));W.position.fromArray(P.position),W.visible=!1,W.renderOrder=3,s.add(W),H.flame=W,H.level=0}if(P.type==="water"){let W=new or(new nn(.009,.014,P.length,5),new yr({color:9681357,transparent:!0,opacity:.3,depthWrite:!1}),7);for(let Z=0;Z<7;Z++){let rt=new Yt().makeTranslation((Z%3-1)*.031,-P.length/2,(Math.floor(Z/3)-1)*.025);W.setMatrixAt(Z,rt)}W.position.fromArray(P.position),W.visible=!1,s.add(W),H.water=W}}z.push(H)}s.updateMatrixWorld(!0);let S=new Map;for(let T of n)for(let P of[].concat(T.handTarget||[])){let O=Ls(T,P.channel),z=(M=(o.get(O)||[]).find(H=>H.group))==null?void 0:M.group,G=new N(...P.point);S.set(O,{group:P.follow===!1?null:z||null,local:z&&P.follow!==!1?z.worldToLocal(G.clone()):G,spec:P})}function x(T){let P=S.get(T);if(!P)return null;let O=P.local.clone(),z=new ye;return P.group&&(P.group.updateWorldMatrix(!0,!1),P.group.localToWorld(O),P.group.getWorldQuaternion(z)),{position:O,quaternion:z}}function y(T,P){for(let O of o.get(T)||[]){let z=O.descriptor,G=P;if(z.type==="rotate")O.group.rotation[z.axis]=(G-(z.initial||0))*z.amount;else if(z.type==="translate")O.group.position.copy(O.base).addScaledVector(new N(...z.offset),G-(z.initial||0));else if(z.type==="transform")O.group.position.copy(O.base).addScaledVector(new N(...z.closedOffset),1-G),O.group.scale.set(...z.closedScale).lerp(new N(1,1,1),G);else if(z.type==="light"){O.light.intensity=G*z.intensity;for(let H of O.meshes)H.material.emissive.setHex(z.color),H.material.emissiveIntensity=G*.65}else if(z.type==="emissive")for(let H of O.meshes)H.material.emissive.setHex(z.color),H.material.emissiveIntensity=G*z.intensity;else if(z.type==="screen")for(let H of O.meshes)H.material.color.setRGB(.015+.65*G,.015+.65*G,.015+.65*G),H.material.emissive.setHex(16777215),H.material.emissiveIntensity=G*.38;else z.type==="water"?(O.water.visible=G>.001,O.water.material.opacity=G*.3):z.type==="flame"&&(O.level=G,O.flame.visible=G>.02)}w()}function w(){s.updateMatrixWorld(!0),_.dynamicBoxes=[];for(let T of m){let P=new Ze().setFromObject(T.group);_.dynamicBoxes.push({minX:P.min.x,maxX:P.max.x,minY:P.min.y,maxY:P.max.y,minZ:P.min.z,maxZ:P.max.z,name:T.group.name})}_.boxes=[..._.staticBoxes,..._.dynamicBoxes]}let A=new Map;for(let[T,P]of o){let O=P.filter(G=>G.descriptor.collision&&G.group);if(!O.length)continue;let z=[];for(let G of[0,.25,.5,.75,1]){y(T,G);for(let H of O){let W=new Ze().setFromObject(H.group);z.push({minX:W.min.x,maxX:W.max.x,minY:W.min.y,maxY:W.max.y,minZ:W.min.z,maxZ:W.max.z,name:T+"_sweep"})}}A.set(T,z)}function I(T){return A.get(T)||[]}function D(T){var O,z;let P=!1;for(let G of o.values())for(let H of G)if((O=H.water)!=null&&O.visible&&(P=!0,H.water.scale.y=.98+Math.sin(T*.009)*.02),(z=H.flame)!=null&&z.visible){P=!0;let W=H.level,Z=1+.07*Math.sin(T*.031+H.descriptor.position[2]*40)+.04*Math.sin(T*.057);H.flame.scale.set(.82+.28*W,(.32+.95*W)*Z,.82+.28*W)}return P}function b(){let T=new Set,P=new Set,O=new Set;s.traverse(z=>{z.geometry&&T.add(z.geometry),z.material&&(P.add(z.material),z.material.map&&O.add(z.material.map))}),T.forEach(z=>z.dispose()),P.forEach(z=>z.dispose()),O.forEach(z=>z.dispose()),s.removeFromParent()}return s.visible=!1,{root:s,parts:r,bindings:o,world:_,apply:y,updateCollision:w,animateEffects:D,dispose:b,handTarget:x,sweep:I,nodes:a,configs:n}}function _x(){let e=new Uint8Array(10240);for(let s=0;s<40;s++)for(let r=0;r<64;r++){let o=(s*64+r)*4,a=r>8&&r<52&&s>9&&s<32,l=a&&s%6<2;e[o]=l?156:a?53:22,e[o+1]=l?180:a?69:32,e[o+2]=l?190:a?79:42,e[o+3]=255}let n=new Ln(e,64,40);return n.colorSpace=be,n.needsUpdate=!0,n}var Kn=1.62,Or=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),bd=i=>new N(...i);function Sd(i,t,e){if(!ln(i,t.x,t.z)||!ln(i,e.x,e.z))return null;let n=(x,y)=>{let w=Fr(i,x,y.x-x.x,y.z-x.z);return Math.hypot(w.x-y.x,w.z-y.z)<.002};if(n(t,e))return[{...t},{...e}];let s=.07,r=Math.ceil(i.width/s)+1,o=(x,y)=>x+y*r,a=x=>({x:x%r*s,z:Math.floor(x/r)*s}),l=x=>{let y=[],w=Math.round(x.x/s),A=Math.round(x.z/s);for(let I=-1;I<=1;I++)for(let D=-1;D<=1;D++){let b=a(o(w+I,A+D));ln(i,b.x,b.z)&&n(x,b)&&y.push(b)}return y.sort((I,D)=>Math.hypot(I.x-x.x,I.z-x.z)-Math.hypot(D.x-x.x,D.z-x.z))[0]},c=l(t),h=l(e);if(!c||!h)return null;let u=o(Math.round(c.x/s),Math.round(c.z/s)),f=o(Math.round(h.x/s),Math.round(h.z/s)),d=[u],g=new Map([[u,null]]),_=0;for(;_<d.length&&_<15e3;){let x=d[_++];if(x===f)break;let y=a(x);for(let[w,A]of[[1,0],[-1,0],[0,1],[0,-1]]){let I=Math.round(y.x/s)+w,D=Math.round(y.z/s)+A;if(I<0||I>=r||D<0||D*s>i.depth)continue;let b=o(I,D);!g.has(b)&&ln(i,I*s,D*s)&&(g.set(b,x),d.push(b))}}if(!g.has(f))return null;let m=[e];for(let x=f;x!==null;x=g.get(x))m.push(a(x));m.push(t),m.reverse();let p=[m[0]],S=0;for(;S<m.length-1;){let x=m.length-1;for(;x>S+1&&!n(m[S],m[x]);)x--;p.push(m[x]),S=x}return p}function xx(i,t,e,n=[]){for(let s of i.boxes){if(n.includes(s.name)||n.some(a=>{var l;return s.name===a+"_motion"||a.startsWith(s.name)||((l=s.objects)==null?void 0:l.includes(a))}))continue;let r=0,o=1;for(let a of["X","Y","Z"]){let l=a.toLowerCase(),c=e[l]-t[l],h=s["min"+a],u=s["max"+a];if(Math.abs(c)<1e-8){if(t[l]<h||t[l]>u){o=-1;break}}else{let f=(h-t[l])/c,d=(u-t[l])/c;r=Math.max(r,Math.min(f,d)),o=Math.min(o,Math.max(f,d))}}if(r<=o&&r>.015&&r<.96)return!0}return!1}function Ed(i,t,e=.045){return t.x<e||t.z<e||t.x>i.width-e||t.z>i.depth-e?!1:![...i.cameraBoxes||[],...i.dynamicBoxes||[]].some(n=>{let s=t.x-Math.max(n.minX,Math.min(t.x,n.maxX)),r=t.y-Math.max(n.minY,Math.min(t.y,n.maxY)),o=t.z-Math.max(n.minZ,Math.min(t.z,n.maxZ));return s*s+r*r+o*o<e*e})}var kc=i=>i*i*i*(i*(i*6-15)+10);function wd(i,t,e){let n=Math.max(1,Math.ceil(t.distanceTo(e)/.02));for(let s=0;s<=n;s++)if(!Ed(i,t.clone().lerp(e,s/n)))return!1;return!0}function yx(i,t){let e=[t[0]];for(let n=1;n<t.length-1;n++){let s=t[n-1],r=t[n],o=t[n+1],a=Math.min(.09,s.distanceTo(r)*.2,o.distanceTo(r)*.2),l=r.clone().lerp(s,a/r.distanceTo(s)),c=r.clone().lerp(o,a/r.distanceTo(o)),h=[];for(let f=0;f<=8;f++){let d=f/8;h.push(l.clone().multiplyScalar((1-d)**2).addScaledVector(r,2*d*(1-d)).addScaledVector(c,d*d))}let u=[e[e.length-1],...h,o];u.slice(1).every((f,d)=>wd(i,u[d],f))?e.push(...h):e.push(r)}return e.push(t[t.length-1]),e}var Ja=class{constructor({configs:t,adapter:e,camera:n,walker:s,onWake:r,hands:o=null}){Object.assign(this,{configs:t,adapter:e,camera:n,walker:s,onWake:r,hands:o}),this.crouch=0,this.registry=new Map(t.map(a=>[a.id,a])),this.states=new Map(t.map(a=>[a.id,{...a.state}])),this.progress=new Map,this.animations=new Map,this.occupied=null,this.motion=null,this.focus=null,this.pendingFocus=null,this.focusDwell=0,this.focusLost=0,this.message="",this.messageUntil=0,this.time=0,this.sleepAmount=0,this.bobAmount=0,this.look={yaw:0,pitch:0},this.lookTarget={...this.look},this.enabled=!1;for(let a of t){let l=Bc(a);if(!l.length){this.progress.set(a.id,0);continue}for(let c of l){let h=Ls(a,c),u=+a.state[c]||0;this.progress.set(h,u),e.apply(h,u)}}}start(){var t;this.enabled=!0,this.focus=this.pendingFocus=null,this.focusDwell=this.focusLost=0,this.message="",this.sleepAmount=this.bobAmount=0,this.look={yaw:0,pitch:-.04},this.lookTarget={...this.look},this.crouch=0,(t=this.hands)==null||t.reset(),this.camera.position.set(this.walker.position.x,Kn,this.walker.position.z),this.orient()}stop(){var t;this.enabled=!1,(t=this.hands)==null||t.reset(),this.crouch=0,this.occupied&&(this.states.get(this.occupied.config.id).posture="standing"),this.occupied=null,this.motion=null,this.focus=this.pendingFocus=null,this.sleepAmount=this.bobAmount=0}orient(){this.camera.quaternion.setFromEuler(new we(this.look.pitch,this.look.yaw,0,"YXZ"))}turn(t,e){var o;if(this.motion)return;let n=this.lookTarget.yaw-t*.0044,s=this.lookTarget.pitch-e*.0031,r=(o=this.occupied)==null?void 0:o.pose;r?(n=r.yaw+pe.clamp(Or(r.yaw,n),-r.yawLimit,r.yawLimit),s=pe.clamp(s,...r.pitchLimits)):s=pe.clamp(s,-1.18,1.3),this.lookTarget={yaw:n,pitch:s},this.onWake()}notify(t){this.message=t,this.messageUntil=this.time+2.4,this.onWake()}available(t){var r;if(!t)return[];let e=((r=this.occupied)==null?void 0:r.config.id)===t.id?this.occupied.action.id:"standing",n=this.states.get(t.id),s=o=>!o||Object.entries(o).every(([a,l])=>{let c=n[a];return l&&typeof l=="object"?(l.gt===void 0||(+c||0)>l.gt)&&(l.lt===void 0||(+c||0)<l.lt):typeof l=="boolean"?!!c===l:Math.abs((+c||0)-l)<1e-6});return t.actions.filter(o=>(!o.available||o.available.includes(e)||o.available.includes("occupied")&&e!=="standing")&&s(o.requires)&&!(o.kind==="set"&&Math.abs((+n[o.channel]||0)-o.value)<1e-6)).map(o=>({...o,label:o.kind==="toggle"?o.labels[+!!n[o.channel]]:o.label}))}candidate(t,e,n=!1){let s=this.camera.position,r=bd(e.position),o=r.clone().sub(s),a=Math.hypot(r.x-this.walker.position.x,r.z-this.walker.position.z),l=o.length();if(a>e.range+(n?.1:0)||l>Math.hypot(e.range+(n?.1:0),1.45))return null;let c=new N(0,0,-1).applyQuaternion(this.camera.quaternion),h=c.dot(o.normalize());return h<(n?.84:.9)||xx(this.adapter.world,s,r,[t.id,...t.object])?null:{config:t,point:e,score:(1-h)*40+l*.008}}select(t=0){var s;if(this.occupied)return this.focus={config:this.occupied.config,point:this.occupied.point},this.focus;if(this.motion)return this.focus;let e=null;for(let r of this.configs)for(let o of r.interactionPoints){let a=this.candidate(r,o);a&&(!e||a.score<e.score)&&(e=a)}if(!t)return this.focus=e,this.pendingFocus=null,this.focus;let n=this.focus&&this.candidate(this.focus.config,this.focus.point,!0);return n&&(!e||e.config.id===this.focus.config.id||e.score>n.score-.35)?(this.focusLost=this.focusDwell=0,this.pendingFocus=null,this.focus):(e?(((s=this.pendingFocus)==null?void 0:s.config.id)===e.config.id?this.focusDwell+=t:(this.pendingFocus=e,this.focusDwell=t),this.focusDwell>=(this.focus?.2:.12)&&(this.focus=e,this.focusLost=this.focusDwell=0,this.pendingFocus=null)):(this.pendingFocus=null,this.focusDwell=0),n?this.focusLost=0:(this.focusLost+=t,this.focusLost>.18&&(this.focus=null)),this.focus)}execute(t,e=(n=>(n=this.focus)==null?void 0:n.config.id)()){var o,a;let s=this.registry.get(e);if(!s||!this.enabled||((o=this.focus)==null?void 0:o.config.id)!==e||!this.occupied&&!s.interactionPoints.some(l=>Math.hypot(l.position[0]-this.walker.position.x,l.position[2]-this.walker.position.z)<=l.range&&this.candidate(s,l,!0)))return!1;let r=this.available(s).find(l=>l.id===t);if(!r)return!1;if(r.kind==="release")return this.release();if(this.motion)return!1;if(r.kind==="toggle"||r.kind==="set"){if(this.occupied)return!1;let l=this.states.get(s.id),c=Ls(s,r.channel),h=this.animations.get(c),u=+l[r.channel]||0,f=r.kind==="toggle"?u>=.5?0:1:r.value;l[r.channel]=r.kind==="toggle"?f===1:f;let d=this.hands&&s.handPose?this.hands.begin({config:s,key:c,channel:r.channel,action:r}):null,g=h?Math.min(h.delay||0,d??0):d??0;return this.animations.set(c,{key:c,configId:s.id,kind:r.kind,target:f,velocity:(h==null?void 0:h.velocity)||0,duration:((a=s.durations)==null?void 0:a[r.channel])??s.duration??.75,channel:r.channel,safe:(h==null?void 0:h.safe)??u,recovering:!1,delay:g,byHand:d!==null||!!(h!=null&&h.byHand)}),this.onWake(),!0}if(r.kind==="pose"){if(this.animations.size)return!1;let l=s.cameraPose[r.cameraPose],c=this.focus.point,h=this.occupied,u=[],f;if(h)f={...h,action:r,pose:l},u=[this.camera.position.toArray()],h.action.cameraPose!==r.cameraPose&&u.push(...[...h.pose.waypoints].reverse());else{let d={x:c.approach[0],z:c.approach[1]},g=Sd(this.adapter.world,this.walker.position,d);if(!g)return this.notify("\u8BF7\u8D70\u5230\u5BB6\u5177\u524D\u65B9\u518D\u4F7F\u7528"),!1;f={config:s,point:c,action:r,pose:l,returnPosition:{...this.walker.position},returnLook:{...this.look},anchor:d},u=g.map(_=>[_.x,Kn,_.z])}return u.push(...l.waypoints,l.position),this.makeMotion(u,{yaw:l.yaw,pitch:l.pitch},!1,l.duration)?(this.occupied=f,this.states.get(s.id).posture=r.id,this.walker.velocity={x:0,z:0},this.bobAmount=0,this.onWake(),!0):(this.notify("\u955C\u5934\u8DEF\u5F84\u88AB\u6321\u4F4F\u4E86\uFF0C\u8BF7\u6362\u4E2A\u4F4D\u7F6E"),!1)}return!1}makeMotion(t,e,n,s){let r=[this.camera.position.clone(),...t.map(bd)],o=r.filter((h,u)=>u===0||h.distanceTo(r[u-1])>.001);if(o.slice(1).some((h,u)=>!wd(this.adapter.world,o[u],h)))return!1;let a=o.length>2?yx(this.adapter.world,o):o,l=[],c=0;for(let h=1;h<a.length;h++)c+=a[h].distanceTo(a[h-1]),l.push(c);return this.motion={points:a,distances:l,total:c,elapsed:0,duration:Math.max(n?.95:1.05,s||0,c/.95),fromLook:{...this.look},toLook:e,exiting:n},!0}release(){if(!this.occupied||this.motion)return!1;let t=this.occupied,e=Sd(this.adapter.world,t.anchor,t.returnPosition);if(!e)return this.notify("\u8D77\u8EAB\u4F4D\u7F6E\u88AB\u6321\u4F4F\u4E86"),!1;let n=[...t.pose.waypoints].reverse();return n.length||n.push([this.camera.position.x,Kn,this.camera.position.z]),n.push([t.anchor.x,Kn,t.anchor.z],...e.map(s=>[s.x,Kn,s.z])),this.makeMotion(n,t.returnLook,!0,t.pose.releaseDuration)?(this.onWake(),!0):!1}stepAside(t){let e=this.adapter.world,n=.16+.006,s=this.walker.position,r=e.dynamicBoxes.filter(c=>c.name.startsWith(t+"_")),o={...s};for(let c of r){let h=Math.max(c.minX,Math.min(o.x,c.maxX)),u=Math.max(c.minZ,Math.min(o.z,c.maxZ)),f=o.x-h,d=o.z-u,g=Math.hypot(f,d);if(!(g>=n))if(g>1e-6)o.x=h+f/g*n,o.z=u+d/g*n;else{let _=[[c.minX-n-o.x,0],[c.maxX+n-o.x,0],[c.minZ-n-o.z,1],[c.maxZ+n-o.z,1]].sort((m,p)=>Math.abs(m[0])-Math.abs(p[0]))[0];_[1]?o.z+=_[0]:o.x+=_[0]}}if(Math.hypot(o.x-s.x,o.z-s.z)>.25)return!1;let a={...e,boxes:e.boxes.filter(c=>!r.includes(c))},l=Fr(a,s,o.x-s.x,o.z-s.z);return Math.hypot(l.x-o.x,l.z-o.z)>.004||!ln(e,l.x,l.z)?!1:(this.walker.position=l,!0)}get locked(){return!!this.occupied||!!this.motion}update(t,e,n=!1){var l,c,h,u;if(this.time=e,!this.enabled)return!1;n&&this.occupied&&!this.motion&&this.release();for(let[f,d]of[...this.animations]){if(d.delay>0){d.delay=Math.max(0,d.delay-t);continue}let g=this.progress.get(f),_=6.8/d.duration,m=g-d.target,p=d.velocity+_*m,S=Math.exp(-_*t),x=d.target+(m+p*t)*S,y=(d.velocity-_*p*t)*S;x=pe.clamp(x,0,1),(x===0||x===1)&&(y=0),this.adapter.apply(f,x);let w=this.adapter.world.dynamicBoxes.some(A=>{let I=this.walker.position,D=I.x-Math.max(A.minX,Math.min(I.x,A.maxX)),b=I.z-Math.max(A.minZ,Math.min(I.z,A.maxZ));return A.name.startsWith(f+"_")&&D*D+b*b<.16*.16-1e-5});if(w&&d.byHand&&this.stepAside(f)&&(w=!1),w){let A=this.states.get(d.configId),I=d.kind!=="set";this.adapter.apply(f,g),d.recovering?(this.animations.delete(f),A[d.channel]=I?g>=.5:g):(d.target=d.safe,d.velocity=0,d.recovering=!0,A[d.channel]=I?d.safe>=.5:d.safe,this.notify("\u88AB\u6321\u4F4F\u4E86\uFF0C\u9000\u540E\u4E00\u70B9\u518D\u64CD\u4F5C"));continue}this.progress.set(f,x),d.velocity=y,Math.abs(x-d.target)<3e-4&&Math.abs(y)<.003&&(this.progress.set(f,d.target),this.adapter.apply(f,d.target),this.animations.delete(f))}if(this.motion){let f=this.motion;f.elapsed+=t;let d=Math.min(1,f.elapsed/f.duration),g=kc(d)*f.total,_=0;for(;_<f.distances.length-1&&g>f.distances[_];)_++;if(f.distances.length){let m=_?f.distances[_-1]:0,p=f.distances[_]-m;this.camera.position.lerpVectors(f.points[_],f.points[_+1],p?(g-m)/p:1)}this.look={yaw:f.fromLook.yaw+Or(f.fromLook.yaw,f.toLook.yaw)*kc(d),pitch:f.fromLook.pitch+(f.toLook.pitch-f.fromLook.pitch)*kc(d)},this.lookTarget={...this.look},d===1&&(f.exiting&&(this.walker.position={...this.occupied.returnPosition},this.walker.velocity={x:0,z:0},this.states.get(this.occupied.config.id).posture="standing",this.occupied=null),this.motion=null)}else{let f=1-Math.exp(-t*22);if(this.look.yaw+=Or(this.look.yaw,this.lookTarget.yaw)*f,this.look.pitch+=(this.lookTarget.pitch-this.look.pitch)*f,Math.abs(Or(this.look.yaw,this.lookTarget.yaw))<5e-5&&(this.look.yaw=this.lookTarget.yaw),Math.abs(this.look.pitch-this.lookTarget.pitch)<5e-5&&(this.look.pitch=this.lookTarget.pitch),!this.occupied){if(this.hands){let m=this.hands.assist;if(m&&(m.x||m.z)){let p=(l=this.hands.gesture)==null?void 0:l.key,S=p&&this.adapter.sweep?this.adapter.sweep(p):[],x=S.length?{...this.adapter.world,boxes:[...this.adapter.world.boxes,...S]}:this.adapter.world,y=ln(x,this.walker.position.x,this.walker.position.z)?x:this.adapter.world;this.walker.position=Fr(y,this.walker.position,m.x*t,m.z*t)}}let d=((c=this.hands)==null?void 0:c.crouch)||0;this.crouch+=(d-this.crouch)*(1-Math.exp(-t*7)),Math.abs(this.crouch-d)<5e-4&&(this.crouch=d);let g=this.locked?0:Math.min(1,(this.walker.speed||0)/1.1)*.003;this.bobAmount+=(g-this.bobAmount)*(1-Math.exp(-t*9)),Math.abs(this.bobAmount-g)<2e-5&&(this.bobAmount=g);let _=new N(this.walker.position.x,Kn-this.crouch+Math.sin(this.walker.travel*12)*this.bobAmount,this.walker.position.z);Ed(this.adapter.world,_)&&this.camera.position.copy(_)}}this.orient();let s=(h=this.occupied)!=null&&h.action.sleep&&!this.motion?1:0,r=1-Math.exp(-t*6);this.sleepAmount+=(s-this.sleepAmount)*r,Math.abs(this.sleepAmount-s)<.002&&(this.sleepAmount=s),this.message&&e>this.messageUntil&&(this.message=""),this.select(t);let o=this.adapter.animateEffects(e*1e3);return(this.hands?this.hands.update(t,{occupied:!!this.occupied,motion:!!this.motion,sleeping:this.sleepAmount>.5,bob:this.bobAmount,travel:this.walker.travel,animating:f=>this.animations.has(f)}):!1)||Math.abs(this.crouch-(((u=this.hands)==null?void 0:u.crouch)||0))>5e-4||!!this.motion||this.animations.size>0||o||Math.abs(this.sleepAmount-s)>.002||!!this.message||!!this.pendingFocus||this.focusLost>0&&this.focusLost<.19||Math.abs(Or(this.look.yaw,this.lookTarget.yaw))>5e-5||Math.abs(this.look.pitch-this.lookTarget.pitch)>5e-5||this.bobAmount>2e-5}getState(){var t,e,n,s;return{hands:((t=this.hands)==null?void 0:t.getState())||null,crouch:this.crouch,firstPerson:!0,stance:((e=this.occupied)==null?void 0:e.action.id)||"standing",object:((n=this.occupied)==null?void 0:n.config.id)||null,movementLocked:this.locked,movingCamera:!!this.motion,focus:((s=this.focus)==null?void 0:s.config.id)||null,states:Object.fromEntries(this.states),animations:this.animations.size,camera:this.camera.position.toArray(),eyeHeight:Kn,sleepAmount:this.sleepAmount}}};var Ke=(i=0,t=0,e=0)=>new N(i,t,e),Qn=.29,jn=.265,Ka=.088,Xi=Qn+jn-.004,Td=[{x:.025,len:[.042,.025,.02],r:.0086},{x:.008,len:[.046,.028,.021],r:.0089},{x:-.0095,len:[.043,.026,.02],r:.0084},{x:-.026,len:[.034,.021,.018],r:.0075}],Yi={base:[.03,.02,-.012],len:[.037,.03,.024],r:.0099},ja={relaxed:{f:[[.3,.4,.26],[.34,.44,.28],[.4,.48,.3],[.48,.52,.32]],t:[.25,.15]},open:{f:[[.08,.06,.04],[.08,.06,.04],[.1,.08,.05],[.12,.08,.05]],t:[.05,.45]},grip:{f:[[.92,1.02,.52],[.96,1.06,.55],[1,1.06,.55],[1.04,1.02,.52]],t:[.85,-.05]},pinch:{f:[[.78,.6,.35],[.95,.85,.45],[1.25,1.25,.8],[1.3,1.25,.8]],t:[.75,.2]},point:{f:[[.04,.04,.02],[1.35,1.45,.95],[1.4,1.45,.95],[1.4,1.4,.9]],t:[.8,0]},hook:{f:[[.5,.62,.3],[.5,.62,.3],[.55,.62,.3],[.6,.62,.3]],t:[.3,.25]},flat:{f:[[.06,.05,.02],[.06,.05,.02],[.07,.05,.02],[.09,.06,.03]],t:[.1,.5]}},Ad={grip:[0,.118,-.033],pinch:[.014,.132,-.02],point:[.025,.172,-.006],hook:[0,.128,-.024],flat:[0,.105,-.02],open:[0,.12,-.03],relaxed:[0,.112,-.03]},qi=new jt("#e8c3a6"),Hc=new jt("#d8d0c3"),vx=new jt("#cdc4b6"),Vc=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function Qa(i,t,e=new ye){let n=i.clone().normalize(),s=t.clone().addScaledVector(n,-t.dot(n));s.lengthSq()<1e-8&&(s=Math.abs(n.z)<.9?Ke(0,0,1):Ke(1,0,0),s.addScaledVector(n,-s.dot(n))),s.normalize();let r=n.clone().cross(s);return e.setFromRotationMatrix(new Yt().makeBasis(r,n,s))}function Mx(i,t){return Qa(i,t)}function Rd(i){let t=i==="right"?-1:1,e=i==="right"?1:-1,n=[],s=[],r=(w,A,I)=>{let D=new gs;return D.name=I,D.position.fromArray(A),w&&w.add(D),n.push(D),D},o=r(null,[0,0,0],"shoulder"),a=r(o,[0,Qn,0],"elbow"),l=r(a,[0,jn,0],"wrist"),c=Td.map((w,A)=>{let I=l;return w.len.map((D,b)=>{let M=r(I,b===0?[w.x*t,Ka,0]:[0,w.len[b-1],0],"f"+A+b);return I=M,M})}),h=r(l,[Yi.base[0]*t,Yi.base[1],Yi.base[2]],"t0"),u=r(h,[0,Yi.len[0],0],"t1"),f=r(u,[0,Yi.len[1],0],"t2"),d=Qa(Ke(t*.62,.62,-.4),Ke(t*.75,0,.65));h.quaternion.copy(d),o.updateMatrixWorld(!0);let g=(w,A,I)=>{A=(A.index,A);for(let O of Object.keys(A.attributes))O!=="position"&&O!=="normal"&&A.deleteAttribute(O);A.applyMatrix4(w.matrixWorld);let D=A.attributes.position.count,b=n.indexOf(w),M=new Uint16Array(D*4),T=new Float32Array(D*4),P=new Float32Array(D*3);for(let O=0;O<D;O++)M[O*4]=b,T[O*4]=1,P[O*3]=I.r,P[O*3+1]=I.g,P[O*3+2]=I.b;A.setAttribute("skinIndex",new fe(M,4)),A.setAttribute("skinWeight",new fe(T,4)),A.setAttribute("color",new fe(P,3)),s.push(A)},_=(w,A,I=4,D=10)=>new ys(w,A,I,D).translate(0,A/2,0);g(o,new nn(.05,.054,Qn,14).translate(0,Qn/2,0),Hc),g(a,new dn(.052,14,8),Hc),g(a,new nn(.047,.051,jn*.56,14).translate(0,jn*.28,0).scale(1,1,.9),Hc),g(a,new nn(.049,.049,.024,14).translate(0,jn*.56,0).scale(1,1,.9),vx),g(a,new nn(.027,.038,jn,14).translate(0,jn/2,0).scale(1,1,.8),qi),g(l,new dn(.029,12,8).scale(1,.8,.72),qi);let m=new dn(1,18,12),p=m.attributes.position;for(let w=0;w<p.count;w++){let A=p.getX(w),I=p.getY(w),D=p.getZ(w),b=1-.25*Math.pow(Math.abs(I),4);p.setXYZ(w,A*.041*b,I*Ka*.56,D*(D>0?.014:.017))}m.computeVertexNormals(),g(l,m.translate(t*.001,Ka*.52,-.002),qi),g(l,new ys(.012,.056,4,10).rotateZ(Math.PI/2).scale(1,1,.9).translate(t*0,Ka-.004,.001),qi),g(l,new dn(1,12,8).scale(.019,.032,.015).translate(t*.024,.03,-.01),qi),Td.forEach((w,A)=>w.len.forEach((I,D)=>g(c[A][D],_(w.r*(1-D*.09),I),qi))),[h,u,f].forEach((w,A)=>g(w,_(Yi.r*(1-A*.1),Yi.len[A]),qi));let S=Jn(s);s.forEach(w=>w.dispose());let x=new Ii({vertexColors:!0,roughness:.62,metalness:0}),y=new sr(S,x);return y.add(o),y.updateMatrixWorld(!0),y.bind(new rr(n)),y.frustumCulled=!1,y.name="Hand_"+i,y.renderOrder=2,{mesh:y,side:i,s:t,armSide:e,shoulder:o,elbow:a,wrist:l,fingers:c,thumb:[h,u,f],thumbRest:d}}var tl=class{constructor({adapter:t,camera:e,root:n}){Object.assign(this,{adapter:t,camera:e}),this.group=new We,this.group.name="FirstPersonHands",(n||t.root).add(this.group),this.arms={right:Rd("right"),left:Rd("left")};for(let s of Object.values(this.arms))this.group.add(s.mesh);this.hands={};for(let s of["right","left"])this.hands[s]={T:null,D:null,Z:null,curl:"relaxed",curlFrom:"relaxed",curlT:1,lower:1,visible:!0};this.gesture=null,this.crouch=0,this.assist=null,this.time=0,this.lastSignature=""}reset(){this.gesture=null,this.crouch=0,this.assist=null;for(let t of Object.values(this.hands))t.T=null,t.lower=1}frame(){let t=this.camera;t.updateMatrixWorld(!0);let e=t.getWorldQuaternion(new ye);return{eye:t.getWorldPosition(Ke()),q:e,right:Ke(1,0,0).applyQuaternion(e),up:Ke(0,1,0).applyQuaternion(e),fwd:Ke(0,0,-1).applyQuaternion(e)}}shoulder(t,e){let n=t==="right"?1:-1;return e.eye.clone().addScaledVector(e.right,n*.185).addScaledVector(e.up,-.235).addScaledVector(e.fwd,-.04)}idle(t,e,n){let s=this.camera,r=t==="right"?1:-1,o=Math.tan(pe.degToRad(s.fov||70)/2),a=o*(s.aspect||1),l=.4,c=Math.sin((n.travel||0)*12)*(n.bob||0)*1.8,h=e.eye.clone().addScaledVector(e.right,r*Math.min(.17,l*a*.7)).addScaledVector(e.up,-l*o*.92+c).addScaledVector(e.fwd,l),u=e.fwd.clone().multiplyScalar(1).addScaledVector(e.up,.42).addScaledVector(e.right,-r*.28).normalize(),f=e.up.clone().multiplyScalar(.8).addScaledVector(e.right,r*.5).addScaledVector(e.fwd,.3).normalize();return{T:h,D:u,Z:f}}target(t){return this.adapter.handTarget(t.key)}orientation(t,e){if(t.mode!=="grip"){let o=t.approach.clone().setY(t.approach.y-.25).normalize();return{D:o,Z:Ke(0,1,0).addScaledVector(o,-o.y).normalize()}}let n=t.config.handPose,s=Ke(...n.fingers||[0,-1,0]),r=Ke(...n.palm||[0,0,1]).negate();return n.follow!==!1&&(e!=null&&e.quaternion)&&(s.applyQuaternion(e.quaternion),r.applyQuaternion(e.quaternion)),{D:s,Z:r}}begin({config:t,key:e,action:n}){let s=t.handPose;if(!s)return null;let r=this.adapter.handTarget(e);if(!r)return null;if(this.gesture&&this.gesture.key===e&&["contact","drive"].includes(this.gesture.phase))return this.gesture.renew=!0,0;let o=this.frame(),a=r.position.clone().sub(o.eye).applyQuaternion(o.q.clone().invert()),l=s.hand||(a.x<-.04?"left":"right"),c=this.hands[l],h=c.T?{T:c.T.clone(),D:c.D.clone(),Z:c.Z.clone()}:this.idle(l,o,{}),u=Math.hypot(r.position.x-o.eye.x,r.position.z-o.eye.z),f=Math.max(0,u-.5),d=pe.clamp(.28+h.T.distanceTo(r.position)*.3+f*.9,.32,.95),g=s.gesture==="press"?"press":s.gesture==="remote"?"remote":"grip",_=g==="press"?.07:g==="remote"?.12:.1;return this.gesture={config:t,key:e,action:n,side:l,mode:g,grip:s.grip||(g==="press"||g==="remote"?"point":"grip"),phase:"reach",t:0,reach:d,contact:_,from:h,approach:r.position.clone().sub(o.eye).normalize()},d+_}gesturePose(t,e,n){let s=this.target(t),{D:r,Z:o}=this.orientation(t,s),a=s.position.clone();if(t.mode==="remote"){let l=this.shoulder(t.side,e),c=a.clone().sub(l).normalize();a=l.addScaledVector(c,Xi*.86),r.copy(c),o.copy(e.up).addScaledVector(c,-e.up.dot(c)).normalize()}return{T:a,D:r,Z:o,target:s}}update(t,e={}){var a,l,c;this.time+=t;let n=this.frame(),s=this.gesture,r=!1;this.group.position.copy(n.eye),this.group.quaternion.copy(n.q),this.group.updateMatrixWorld(!0);let o=e.occupied||e.motion||e.sleeping;if(this.crouch=0,this.assist=null,s){s.t+=t,r=!0;let h=this.gesturePose(s,n,e),u=this.hands[s.side];if(o)this.gesture=null;else{let f,d,g,_=s.grip;if(s.phase==="reach"){let m=Vc(s.t/s.reach),p=Math.sin(Math.PI*m)*.05;f=s.from.T.clone().lerp(s.mode==="press"?h.T.clone().addScaledVector(s.approach,-.035):h.T,m).addScaledVector(n.up,p),d=s.from.D.clone().lerp(h.D,m).normalize(),g=s.from.Z.clone().lerp(h.Z,m).normalize(),_=m<.7?"open":s.grip==="point"?"point":"open",s.t>=s.reach&&(s.phase="contact",s.t=0)}else if(s.phase==="contact"){let m=Math.min(1,s.t/s.contact);f=s.mode==="press"?h.T.clone().addScaledVector(s.approach,-.035*(1-m)):h.T,d=h.D,g=h.Z,s.t>=s.contact&&(s.phase=s.mode==="grip"?"drive":"hold",s.t=0)}else if(s.phase==="drive")f=h.T,d=h.D,g=h.Z,s.away=u.reachDist>Xi+.09?(s.away||0)+t:0,(s.away>.25||s.t>.12&&!((a=e.animating)!=null&&a.call(e,s.key)))&&(s.phase="release",s.t=0);else if(s.phase==="hold"){let m=Math.min(1,s.t/.09);f=s.mode==="press"?h.T.clone().addScaledVector(s.approach,-.035*m):h.T,d=h.D,g=h.Z,s.t>=(s.mode==="remote"?.3:.09)&&(s.phase="release",s.t=0)}else if(s.phase==="release")f=u.T.clone(),d=u.D.clone(),g=u.Z.clone(),_=s.mode==="grip"?"open":s.grip,s.t>=.1&&(s.phase="retract",s.t=0,s.retractFrom={T:u.T.clone(),D:u.D.clone(),Z:u.Z.clone()});else if(s.phase==="retract"){let m=this.idle(s.side,n,e),p=Vc(s.t/.32);f=s.retractFrom.T.clone().lerp(m.T,p),d=s.retractFrom.D.clone().lerp(m.D,p).normalize(),g=s.retractFrom.Z.clone().lerp(m.Z,p).normalize(),_=p>.5?"relaxed":"open",s.t>=.32&&(this.gesture=null)}if(this.setHand(u,f,d,g,_),["reach","contact","drive","hold"].includes(s.phase)&&s.mode!=="remote"){let m=h.target.position,p=Math.hypot(m.x-n.eye.x,m.z-n.eye.z),S=(u.reachDist||0)-Xi*(s.phase==="drive"?.97:.9);if(S>0&&p>.22){let x=Math.min(1.1,S*5+.15)/p;this.assist={x:(m.x-n.eye.x)*x,z:(m.z-n.eye.z)*x}}this.crouch=pe.clamp(Kn-.21-m.y-.36,0,.72)}}}for(let h of["right","left"]){let u=this.hands[h],f=((l=this.gesture)==null?void 0:l.side)===h;if(!f){let d=this.idle(h,n,e),g=o?1:0;u.lower+=(g-u.lower)*(1-Math.exp(-t*9)),Math.abs(u.lower-g)<.002?u.lower=g:r=!0;let _=d.T.addScaledVector(n.up,-.28*u.lower).addScaledVector(n.fwd,-.1*u.lower),m=(c=u.T)==null?void 0:c.clone();this.setHand(u,_,d.D,d.Z,"relaxed"),m&&m.distanceTo(u.T)>4e-4&&(r=!0)}u.curlT<1&&(u.curlT=Math.min(1,u.curlT+t/.11),r=!0),this.pose(h,n,f?this.gesture:null)}return r}setHand(t,e,n,s,r){r!==t.curl&&(t.curlFrom=t.curl,t.curl=r,t.curlT=0),t.T=e.clone(),t.D=n.clone(),t.Z=s.clone()}clear(t,e,n){let s=[...this.adapter.world.cameraBoxes||[],...this.adapter.world.glazingBoxes||[],...this.adapter.world.dynamicBoxes||[]],r=Ke();for(let o=0;o<2;o++)for(let a of s)if(!e(a.name))for(let l of t){let c=l.clone().add(r);if(c.x<a.minX-n||c.x>a.maxX+n||c.y<a.minY-n||c.y>a.maxY+n||c.z<a.minZ-n||c.z>a.maxZ+n)continue;let h=[[a.minX-n-c.x,0,1],[a.maxX+n-c.x,0,1],[a.minY-n-c.y,1,1.6],[a.maxY+n-c.y,1,.45],[a.minZ-n-c.z,2,1],[a.maxZ+n-c.z,2,1]].sort((u,f)=>Math.abs(u[0])*u[2]-Math.abs(f[0])*f[2])[0];r.setComponent(h[1],r.getComponent(h[1])+h[0])}return r}reachLimit(t,e,n,s){let r=[...this.adapter.world.cameraBoxes||[],...this.adapter.world.glazingBoxes||[],...this.adapter.world.dynamicBoxes||[]],o=e.clone().sub(t),a=1;for(let l of r){if(n(l.name))continue;let c=0,h=1;for(let[u,f,d]of[["x",l.minX,l.maxX],["y",l.minY,l.maxY],["z",l.minZ,l.maxZ]]){let g=t[u],_=o[u];if(Math.abs(_)<1e-9){if(g<f-s||g>d+s){h=-1;break}continue}let m=(f-s-g)/_,p=(d+s-g)/_;c=Math.max(c,Math.min(m,p)),h=Math.min(h,Math.max(m,p))}h>=c&&c>1e-4&&c<a&&(a=c)}return a}pose(t,e,n){let s=this.arms[t],r=this.hands[t],o=s.s,a=r.T.clone(),l=r.D.clone().normalize(),c=r.Z.clone(),h=Mx(l,c),u=Ad[r.curl]||Ad.relaxed,f=Ke(u[0]*o,u[1],u[2]).applyQuaternion(h),d=n?new Set([n.config.id,n.key+"_motion",...n.config.object||[],...(n.config.animation||[]).flatMap(mt=>mt.parts)]):null,g=mt=>!!d&&(d.has(mt)||mt.startsWith(n.config.id+"#")||mt.startsWith(n.config.id+"_")),_=a.clone().addScaledVector(l,.06),m=a.clone().sub(f),p=m.clone().lerp(this.shoulder(t,e),.25),S=n&&n.phase!=="retract"?.01:.022;a.add(this.clear([a,_,m,p],g,S));let x=a.clone().addScaledVector(l,.06),y=this.reachLimit(e.eye,x,g,n&&n.phase!=="retract"?.002:.02);y<1&&a.copy(e.eye.clone().lerp(x,Math.max(.2,y*.94)).addScaledVector(l,-.06)),r.T.copy(a);let w=this.shoulder(t,e),A=a.clone().sub(f),I=A.clone().sub(w),D=I.length();r.reachDist=D,r.reachable=D<=Xi+.01,D>Xi&&(A=w.clone().addScaledVector(I.normalize(),Xi),D=Xi);let b=A.clone().sub(w).normalize(),M=e.up.clone().multiplyScalar(-1).addScaledVector(e.right,s.armSide*.55).addScaledVector(e.fwd,-.3).normalize(),T=M.addScaledVector(b,-M.dot(b)).normalize(),P=pe.clamp((Qn*Qn+D*D-jn*jn)/(2*Qn*D),-1,1),O=w.clone().addScaledVector(b,Qn*P).addScaledVector(T,Qn*Math.sqrt(1-P*P));r.W=A,r.E=O,r.S=w;let z=e.q.clone().invert(),G=mt=>mt.clone().sub(e.eye).applyQuaternion(z),H=G(w),W=G(O),Z=G(A),rt=z.clone().multiply(h),at=Ke(0,0,1).applyQuaternion(rt),J=Qa(W.clone().sub(H),G(w.clone().add(M)).sub(H)),ut=Qa(Z.clone().sub(W),at);s.shoulder.position.copy(H),s.shoulder.quaternion.copy(J),s.elbow.quaternion.copy(J.clone().invert().multiply(ut)),s.wrist.quaternion.copy(ut.clone().invert().multiply(rt));let yt=ja[r.curlFrom]||ja.relaxed,Mt=ja[r.curl]||ja.relaxed,Nt=Vc(r.curlT);s.fingers.forEach((mt,St)=>mt.forEach((Et,kt)=>{Et.rotation.set(-(yt.f[St][kt]+(Mt.f[St][kt]-yt.f[St][kt])*Nt),0,0)}));let et=yt.t[0]+(Mt.t[0]-yt.t[0])*Nt,it=yt.t[1]+(Mt.t[1]-yt.t[1])*Nt;s.thumb[0].quaternion.copy(s.thumbRest).multiply(new ye().setFromEuler(new we(-et*.45,0,o*it*.5))),s.thumb[1].rotation.set(-et*.6,0,0),s.thumb[2].rotation.set(-et*.5,0,0)}holding(t){return!!this.gesture&&this.gesture.key===t&&["contact","drive"].includes(this.gesture.phase)}gripPoint(t="right"){let e=this.hands[t];return e.T?e.T.clone():null}getState(){let t=this.gesture;return{gesture:t?{key:t.key,phase:t.phase,side:t.side,mode:t.mode}:null,crouch:this.crouch,assist:this.assist?{...this.assist}:null}}dispose(){for(let t of Object.values(this.arms))t.mesh.geometry.dispose(),t.mesh.material.dispose();this.group.removeFromParent()}};var el=class{constructor({scene:t,camera:e,spec:n,interactionConfigs:s,modelDoc:r,wallClip:o,originalModel:a,hud:l,joystick:c,knob:h,lookZone:u,onWake:f,document:d=document}){Object.assign(this,{scene:t,camera:e,spec:n,originalModel:a,hud:l,joystick:c,knob:h,lookZone:u,onWake:f,doc:d}),this.configs=s||vd(n),this.adapter=Md(r,n,o,this.configs),t.add(this.adapter.root),this.world=this.adapter.world;let g=[{x:1.2,z:n.derived.bedroom_depth+1.1},{x:.65,z:n.derived.bedroom_depth+1.4}],_=g.find(m=>ln(this.world,m.x,m.z));if(!_)throw Error("\u5BA2\u5385\u51FA\u751F\u70B9\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4");this.walker=new $a(this.world,_),this.hands=new tl({adapter:this.adapter,camera:e}),this.interactions=new Ja({configs:this.configs,adapter:this.adapter,camera:e,walker:this.walker,onWake:f,hands:this.hands}),this.active=!1,this.input={x:0,y:0},this.keys=new Set,this.listeners=[],this.joystickId=null,this.lookId=null,this.lastTime=null,this.menuOpen=!1,this.uiSignature="",this.prompt=l.querySelector("#interaction-prompt"),this.button=l.querySelector("#interaction-button"),this.more=l.querySelector("#interaction-more"),this.choices=l.querySelector("#interaction-choices"),this.caption=l.querySelector("#interaction-caption"),this.sleepOverlay=l.querySelector("#sleep-overlay"),this.notice=l.querySelector("#interaction-notice"),this.promptAlpha=0,this.displayFocus=null}get yaw(){return this.interactions.look.yaw}get pitch(){return this.interactions.look.pitch}listen(t,e,n,s){t.addEventListener(e,n,s),this.listeners.push(()=>t.removeEventListener(e,n,s))}prevent(t){t.cancelable&&t.preventDefault(),t.stopPropagation()}enter(){if(this.active)return;this.active=!0,this.walker.reset(),this.input={x:0,y:0},this.lastTime=null,this.menuOpen=!1,this.uiSignature="",this.promptAlpha=0,this.displayFocus=null,this.prompt.style.opacity="0",this.hud.hidden=!1,this.originalModel.visible=!1,this.adapter.root.visible=!0,this.interactions.start();let t=c=>{let h=this.joystick.getBoundingClientRect(),u=c.clientX-h.left-h.width/2,f=c.clientY-h.top-h.height/2,d=Math.hypot(u,f),g=Math.max(36,d);this.input={x:u/g,y:f/g},this.knob.style.transform=`translate(${this.input.x*36}px,${this.input.y*36}px)`,this.menuOpen=!1,this.onWake()},e=c=>{var h,u;this.prevent(c),this.joystickId===null&&(this.joystickId=c.pointerId,(u=(h=this.joystick).setPointerCapture)==null||u.call(h,c.pointerId),t(c))},n=c=>{c.pointerId===this.joystickId&&(this.prevent(c),t(c))},s=c=>{c.pointerId===this.joystickId&&(this.prevent(c),this.joystickId=null,this.input={x:0,y:0},this.knob.style.transform="translate(0px,0px)",this.onWake())},r=c=>{var h,u;this.prevent(c),this.lookId===null&&(this.lookId=c.pointerId,(u=(h=this.lookZone).setPointerCapture)==null||u.call(h,c.pointerId),this.lookPrevious={x:c.clientX,y:c.clientY},this.menuOpen=!1,this.onWake())},o=c=>{c.pointerId===this.lookId&&(this.prevent(c),this.interactions.turn(c.clientX-this.lookPrevious.x,c.clientY-this.lookPrevious.y),this.lookPrevious={x:c.clientX,y:c.clientY})},a=c=>{c.pointerId===this.lookId&&(this.prevent(c),this.lookId=null,this.onWake())};for(let[c,h,u,f]of[[this.joystick,e,n,s],[this.lookZone,r,o,a]]){this.listen(c,"pointerdown",h,{passive:!1}),this.listen(c,"pointermove",u,{passive:!1});for(let d of["pointerup","pointercancel","lostpointercapture"])this.listen(c,d,f,{passive:!1});this.listen(c,"touchmove",d=>this.prevent(d),{passive:!1}),this.listen(c,"gesturestart",d=>this.prevent(d),{passive:!1})}this.listen(this.button,"click",c=>{var u,f,d;if(this.prevent(c),this.button.disabled||((u=this.displayFocus)==null?void 0:u.config.id)!==((f=this.interactions.focus)==null?void 0:f.config.id))return;let h=this.interactions.available((d=this.interactions.focus)==null?void 0:d.config)[0];h&&this.perform(h.id)}),this.listen(this.more,"click",c=>{this.prevent(c),this.menuOpen=!this.menuOpen,this.uiSignature="",this.onWake()});let l=["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];this.listen(this.doc,"keydown",c=>{var h;if(l.includes(c.key))c.preventDefault(),this.keys.add(c.key),this.menuOpen=!1,this.onWake();else if(c.key==="e"||c.key==="E"){if(c.repeat)return;let u=this.interactions.available((h=this.interactions.focus)==null?void 0:h.config)[0];u&&this.perform(u.id)}}),this.listen(this.doc,"keyup",c=>{this.keys.delete(c.key),this.onWake()}),this.listen(this.doc,"visibilitychange",()=>this.resetInput()),this.listen(this.doc.defaultView||this.doc,"blur",()=>this.resetInput()),this.update(0),this.onWake()}perform(t,e){let n=this.interactions.execute(t,e);return n&&(this.resetInput(),this.menuOpen=!1,this.uiSignature="",this.onWake()),n}resetInput(){var t;for(let[e,n]of[[this.joystick,this.joystickId],[this.lookZone,this.lookId]])try{n!==null&&((t=e.hasPointerCapture)!=null&&t.call(e,n))&&e.releasePointerCapture(n)}catch{}this.joystickId=this.lookId=null,this.input={x:0,y:0},this.keys.clear(),this.knob.style.transform="translate(0px,0px)",this.lastTime=null}exit(){this.active&&(this.active=!1,this.resetInput(),this.listeners.splice(0).forEach(t=>t()),this.walker.velocity={x:0,z:0},this.interactions.stop(),this.adapter.root.visible=!1,this.originalModel.visible=!0,this.hud.hidden=!0,this.choices.replaceChildren(),this.menuOpen=!1)}renderUI(t){var f,d,g;let e=this.interactions,n=e.focus,s=((f=this.displayFocus)==null?void 0:f.config.id)!==(n==null?void 0:n.config.id),r=n&&!s?1:0,o=t/(r?.18:.12);this.promptAlpha=pe.clamp(this.promptAlpha+(r?o:-o),0,1),s&&this.promptAlpha===0&&(this.displayFocus=n,this.menuOpen=!1);let a=this.displayFocus,l=e.available(a==null?void 0:a.config),c=!!e.motion||e.animations.size>0,h=!!e.motion||s||this.promptAlpha<.6||e.animations.size>0&&!["toggle","set"].includes((d=l[0])==null?void 0:d.kind),u=JSON.stringify([a==null?void 0:a.config.id,l.map(_=>[_.id,_.label]),c,h,this.menuOpen,e.message]);if(this.prompt.style.opacity=String(this.promptAlpha),this.prompt.style.transform=`translateX(-50%) translateY(${(1-this.promptAlpha)*3}px)`,this.prompt.hidden=!a||!l.length,this.button.disabled=h,this.sleepOverlay.style.opacity=String(e.sleepAmount*.97),this.notice.textContent=e.message,this.notice.hidden=!e.message,u!==this.uiSignature&&(this.uiSignature=u,a&&(this.caption.textContent=a.config.label+(e.occupied?" \xB7 "+e.occupied.action.label:""),this.button.textContent=((g=l[0])==null?void 0:g.label)||"\u4EA4\u4E92",this.more.hidden=l.length<2||c,this.choices.hidden=!this.menuOpen||c,this.choices.replaceChildren(),this.menuOpen&&!c)))for(let _ of l){let m=this.doc.createElement("button");m.type="button",m.textContent=_.label,m.onclick=p=>{this.prevent(p),this.perform(_.id)},this.choices.append(m)}return s||Math.abs(this.promptAlpha-r)>.001}update(t){if(!this.active)return!1;let e=this.lastTime===null?1/60:Math.min(.05,Math.max(.001,(t-this.lastTime)/1e3));this.lastTime=t;let n={...this.input};(this.keys.has("w")||this.keys.has("ArrowUp"))&&(n.y-=1),(this.keys.has("s")||this.keys.has("ArrowDown"))&&(n.y+=1),(this.keys.has("a")||this.keys.has("ArrowLeft"))&&(n.x-=1),(this.keys.has("d")||this.keys.has("ArrowRight"))&&(n.x+=1);let s=Math.hypot(n.x,n.y)>.08;this.interactions.locked?(this.walker.velocity={x:0,z:0},this.walker.speed=0):this.walker.update(e,n,this.yaw);let r=this.interactions.update(e,t/1e3,s),o=this.renderUI(e);return r||o||s||Math.hypot(this.walker.velocity.x,this.walker.velocity.z)>.002||this.lookId!==null}getState(){return{active:this.active,position:{...this.walker.position},velocity:{...this.walker.velocity},yaw:this.yaw,pitch:this.pitch,joystickPointer:this.joystickId,lookPointer:this.lookId,listeners:this.listeners.length,colliders:this.world.boxes.length,...this.interactions.getState()}}dispose(){this.exit(),this.adapter.dispose()}};async function bx(){var B;let i=C=>document.querySelector(C),t=matchMedia("(pointer:coarse)").matches||/iPad|iPhone/.test(navigator.userAgent),e=0,n=!0,s=!1;function r(){n=!0,!e&&!s&&!document.hidden&&(e=requestAnimationFrame(Et))}let o=i("#canvas"),a=i("#stage");window.roomBoot.progress("\u6B63\u5728\u542F\u52A83D\u663E\u793A\u2026");let l;try{l=new Fa({canvas:o,antialias:!t,alpha:!0,powerPreference:"default"})}catch{throw Error("\u6B64\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u542F\u52A83D\u663E\u793A\uFF0C\u53EF\u91CD\u8BD5\u6216\u5148\u67E5\u770B\u6821\u9A8C\u56FE\u3002")}o.addEventListener("webglcontextlost",C=>{C.preventDefault(),s=!0,x==null||x.resetInput(),cancelAnimationFrame(e),e=0,window.roomBoot.fail("3D\u663E\u793A\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u70B9\u91CD\u65B0\u52A0\u8F7D\u3002")}),o.addEventListener("webglcontextrestored",()=>{s=!1,rt="",r(),window.roomBoot.ready()}),l.localClippingEnabled=!0;let c=new Ge(new N(0,-1,0),1.15);l.setPixelRatio(Math.min(devicePixelRatio,t?1:2)),l.outputColorSpace=be,l.toneMapping=qo,l.toneMappingExposure=1;let h=new ir;h.environment=_d(),h.environmentIntensity=.6,h.add(new Mr(16645627,13618633,1.05));let u=new Ui(16775409,2.3);u.position.set(3,7,-6),h.add(u);let f=new Ui(15659512,.55);f.position.set(-6,5,9),h.add(f);let d=new Ui(16052457,.9);d.position.set(.3,-1,.2),h.add(d);let g=new Ie(42,1,.03,200),_=new Li(-7,7,7,-7,.02,200),m=g,p=new za(m,o);p.enableDamping=!t,p.dampingFactor=.09,p.minDistance=.2,p.maxDistance=40,p.maxPolarAngle=Math.PI/2-.02,p.touches.ONE=En.ROTATE,p.touches.TWO=En.DOLLY_PAN,p.enablePan=!0,p.screenSpacePanning=!0;let S=null,x=null,y=null;function w(){t?S||(S=xd(o,p,()=>m,()=>{O=null,r()})):p.connect(o)}function A(){t?(S==null||S(),S=null):p.disconnect()}t&&(p.disconnect(),w()),p.addEventListener("change",r),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(e),e=0,x==null||x.resetInput()):r()}),window.addEventListener("pageshow",()=>{r()});let I,D,b,M,T="decoration",P="all",O=null,z="parametric",G=[],H=[],W={ceiling:!1,exterior:!0,furniture:!0,soft:!0,cutaway:!0},Z=[],rt="",at={all:"\u5168\u5C4B \xB7 45\xB0\u9E1F\u77B0",top:"\u5168\u5C4B \xB7 \u4FEF\u89C6",bedroom:"\u5367\u5BA4",bedfoot:"\u5E8A\u5C3E",living:"\u5BA2\u5385",kitchen:"\u53A8\u623F",bathroom:"\u536B\u751F\u95F4"};function J(){let C=Math.max(1,a.clientWidth),F=Math.max(1,a.clientHeight);l.setSize(C,F,!1),g.aspect=C/F,g.updateProjectionMatrix();let X=(((D==null?void 0:D.total_depth)??10)+2)/.76;_.left=-X*C/F/2,_.right=X*C/F/2,_.top=X/2,_.bottom=-X/2,_.updateProjectionMatrix(),r()}window.ResizeObserver?new ResizeObserver(J).observe(a):window.addEventListener("resize",J);function ut(C){return b.parameters[C].value}function yt(C){let F=D.width,X=D.total_depth,K=D.bedroom_depth,ot=D.body_depth,R=F-ut("sofa_right_gap")-ut("sofa_width")/2,v=T==="immersive",k={all:[[-8,14,X+7],[F/2,.55,X/2]],top:[[F/2,19,X/2+1+.001],[F/2,0,X/2+1]],bedroom:[[-3,7,-1.7],[2,.5,K*.53]],bedfoot:[[.9,v?1.5:2.3,K*.66],[F-.42,.88,K*.66]],living:[[v?.65:-2.5,v?1.55:5.4,ot-.1],[R,.58,K+.58]],kitchen:[[1.55,v?1.55:3.3,ot-.85],[(ut("kitchen_left_x")+ut("bathroom_left_x"))/2,.7,X-.42]],bathroom:[[2.7,v?1.5:4.7,ot-.1],[3.1,.5,ot+1.12]]};if(v&&["all","bedroom","top"].includes(C))return[[1.1,1.55,K*.45],[F-.3,1,K*.6]];if(C==="all"){let $=k.all,ct=Math.max(1,.76/(a.clientWidth/a.clientHeight));$[0]=$[0].map((j,Pt)=>$[1][Pt]+(j-$[1][Pt])*ct)}return k[C]}function Mt(C){m=C?_:g,p.object=m,p.minDistance=T==="immersive"?.15:.5,p.maxDistance=T==="immersive"?5:40,p.maxPolarAngle=T==="immersive"?Math.PI-.05:Math.PI/2-.001,J()}function Nt(C,F=!0){if(!D||!at[C])return;x!=null&&x.active&&nt(),P=C,Mt(T==="floorplan"||C==="top"&&T!=="immersive");let[X,K]=yt(C);F?O={start:performance.now(),from:m.position.clone(),to:new N(...X),fromTarget:p.target.clone(),toTarget:new N(...K)}:(m.position.set(...X),p.target.set(...K),p.update()),i("#view-title").textContent=at[C],document.querySelectorAll("[data-view]").forEach(ot=>{ot.classList.toggle("active",ot.dataset.view===C),ot.setAttribute("aria-pressed",ot.dataset.view===C)}),rt="",r()}function et(C){if(x!=null&&x.active&&nt(),!["floorplan","decoration","immersive"].includes(C))throw Error("\u672A\u77E5\u6A21\u5F0F");T=C,W.furniture=C!=="floorplan",W.soft=C!=="floorplan",W.ceiling=C==="immersive";for(let F of["furniture","soft","ceiling"])i("#"+F).checked=W[F];document.querySelectorAll("[data-mode]").forEach(F=>{F.classList.toggle("active",F.dataset.mode===C),F.setAttribute("aria-pressed",F.dataset.mode===C)}),i("#immersive-controls").hidden=C!=="immersive",i("#hint").textContent=C==="immersive"?"\u62D6\u52A8\u67E5\u770B \xB7 \u6309\u94AE\u79FB\u52A8":"\u5355\u6307\u65CB\u8F6C \xB7 \u53CC\u6307\u7F29\u653E\u4E0E\u5E73\u79FB",Nt(C==="floorplan"?"top":C==="immersive"?"bedfoot":"all")}function it(){if(!I)return;let C=[];W.cutaway&&T!=="immersive"&&P!=="top"&&(C.push(m.position.x<D.width/2?"left":"right"),C.push(m.position.z<D.total_depth/2?"balcony":"end"));let F=JSON.stringify([W,C,T,!!(x!=null&&x.active)]);if(F!==rt){rt=F;for(let X of G){let K=!0,ot=X.userData.layer;ot==="ceiling"?K=W.ceiling:ot==="exterior"?K=W.exterior&&!C.includes(X.userData.side):ot==="furniture"?K=W.furniture:ot==="soft"&&(K=W.soft),X.visible=K,X.userData.wall&&ot==="structure"&&(c.constant=W.cutaway&&T!=="immersive"&&P!=="top"?1.15:D.height+1)}i("#labels").hidden=T!=="floorplan"||!!(x!=null&&x.active)}}function mt(){T!=="floorplan"||x!=null&&x.active||Z.forEach((C,F)=>{let[X,K,ot]=C.position,R=new N(X,ot,K).project(m);H[F].style.left=(R.x+1)/2*a.clientWidth+"px",H[F].style.top=(-R.y+1)/2*a.clientHeight+"px",H[F].hidden=Math.abs(R.x)>1||Math.abs(R.y)>1})}function St(C){if(T!=="immersive")return;O=null;let F=p.target.clone().sub(m.position);F.y=0,F.normalize();let X=new N().crossVectors(F,new N(0,1,0)),K=.18,ot=C==="forward"?F:C==="back"?F.negate():C==="right"?X:X.negate();ot.multiplyScalar(K);let R=m.position.clone().add(ot);R.x=pe.clamp(R.x,.15,D.width-.15),R.z=pe.clamp(R.z,.1,D.total_depth-.15),ot.copy(R).sub(m.position),m.position.add(ot),p.target.add(ot),p.update()}function Et(C){if(e=0,!(s||document.hidden))try{let F=!1;if(O){let X=Math.min(1,(C-O.start)/450),K=X*X*(3-2*X);m.position.lerpVectors(O.from,O.to,K),p.target.lerpVectors(O.fromTarget,O.toTarget,K),X===1&&(O=null),F=!0}x!=null&&x.active?(F=!0,x.update(C)&&r()):F=p.update()||F,(n||F)&&(it(),mt(),l.render(h,m),n=!1),(O||!(x!=null&&x.active)&&F)&&r()}catch(F){s=!0,window.roomBoot.fail("3D\u663E\u793A\u4E2D\u65AD\uFF0C\u53EF\u91CD\u65B0\u52A0\u8F7D\u3002"),console.error(F)}}p.addEventListener("start",()=>{O=null});for(let C of Object.keys(W))i("#"+C).addEventListener("change",F=>{let X=F.target.checked;x!=null&&x.active&&nt(),W[C]=X,F.target.checked=X,rt="",r()});document.querySelectorAll("[data-view]").forEach(C=>C.addEventListener("click",()=>Nt(C.dataset.view))),document.querySelectorAll("[data-mode]").forEach(C=>C.addEventListener("click",()=>et(C.dataset.mode))),document.querySelectorAll("[data-move]").forEach(C=>C.addEventListener("click",()=>St(C.dataset.move))),i("#reset").onclick=()=>et("decoration"),i("#fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():i("#hint").textContent="\u6B64\u8BBE\u5907\u8BF7\u6A2A\u5C4F\u67E5\u770B\uFF0C\u53EF\u83B7\u5F97\u66F4\u5927\u753B\u9762\u3002"}catch{i("#hint").textContent="\u8BF7\u6A2A\u5C4F\u67E5\u770B\uFF0C\u53EF\u83B7\u5F97\u66F4\u5927\u753B\u9762\u3002"}};function kt(C){window.roomBoot.setPanel(C)}i("#image-close").onclick=()=>i("#image-dialog").close(),window.addEventListener("keydown",C=>{C.key==="Escape"&&(x!=null&&x.active?nt():kt(!1)),!(x!=null&&x.active)&&T==="immersive"&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","s","a","d"].includes(C.key)&&(C.preventDefault(),St({ArrowUp:"forward",w:"forward",ArrowDown:"back",s:"back",ArrowLeft:"left",a:"left",ArrowRight:"right",d:"right"}[C.key]))});let qt=JSON.parse(i("#room-seed").textContent);b=qt.document,M=qt.scene,D=M.derived,Z=M.labels,window.roomBoot.progress("\u6B63\u5728\u5EFA\u7ACB\u623F\u95F4\u7ED3\u6784\u2026");for(let C of Z){let F=document.createElement("span");F.className="room-label",F.textContent=C.name,i("#labels").append(F),H.push(F)}let U=[["\u4E3B\u4F53",`${D.body_depth.toFixed(2)} \xD7 ${D.width.toFixed(2)} m`],["\u5367\u5BA4\u6DF1\u5EA6",`${D.bedroom_depth.toFixed(2)} m \xB7 \u4F30\u7B97`],["\u5BA2\u5385\u6DF1\u5EA6",`${D.living_depth.toFixed(2)} m \xB7 \u4F30\u7B97`],["\u53A8\u536B\u6DF1\u5EA6",`${D.service_depth.toFixed(2)} m \xB7 \u4F30\u7B97`],["\u5C42\u9AD8",`${D.height.toFixed(2)} m \xB7 \u4F30\u7B97`],["\u9633\u53F0\u671D\u5411",`${ut("balcony_azimuth")}\xB0`]];for(let[C,F]of U){let X=document.createElement("div"),K=document.createElement("dt"),ot=document.createElement("dd");K.textContent=C,ot.textContent=F,X.append(K,ot),i("#dimensions").append(X)}I=Za(b,M,c),h.add(I),I.traverse(C=>{C.isMesh&&G.push(C)}),Nt("all",!1),it(),l.render(h,m),n=!1,window.roomBoot.ready();function st(){x!=null&&x.active||(O=null,p.enableDamping=!1,p.update(),y={camera:m,position:m.position.clone(),quaternion:m.quaternion.clone(),target:p.target.clone(),zoom:m.zoom,fov:g.fov,near:g.near,mode:T,currentView:P,state:{...W}},A(),p.enabled=!1,m=g,g.zoom=1,g.fov=70,g.near=.035,g.updateProjectionMatrix(),Object.assign(W,{ceiling:!0,exterior:!0,furniture:!0,soft:!0,cutaway:!1}),rt="",it(),kt(!1),i("#panel-toggle").disabled=!0,x||(x=new el({scene:h,camera:g,spec:M,interactionConfigs:qt.interactions,modelDoc:b,wallClip:c,originalModel:I,hud:i("#roam-hud"),joystick:i("#roam-joystick"),knob:i("#roam-knob"),lookZone:i("#roam-look"),onWake:r})),a.classList.add("roaming"),i("#roam-toggle").classList.add("active"),i("#roam-toggle").setAttribute("aria-pressed","true"),x.enter(),r())}function nt(){if(x!=null&&x.active){x.exit(),a.classList.remove("roaming"),i("#roam-toggle").classList.remove("active"),i("#roam-toggle").setAttribute("aria-pressed","false"),i("#panel-toggle").disabled=!1,g.fov=y.fov,g.near=y.near,g.updateProjectionMatrix(),m=y.camera,T=y.mode,P=y.currentView,Object.assign(W,y.state),m.position.copy(y.position),m.quaternion.copy(y.quaternion),m.zoom=y.zoom,m.updateProjectionMatrix(),p.object=m,p.target.copy(y.target),p.enabled=!0,p.enableDamping=!t,p.update();for(let C of Object.keys(W))i("#"+C).checked=W[C];w(),rt="",it(),J(),r()}}i("#roam-toggle").onclick=()=>{x!=null&&x.active?nt():st()},i("#roam-exit").onclick=nt;let L={front:"\u524D\u89C6",back:"\u540E\u89C6",left:"\u5DE6\u89C6",right:"\u53F3\u89C6",aerial:"45\xB0\u9E1F\u77B0",top:"\u9876\u89C6"};for(let[C,F]of Object.entries(L)){let X=document.createElement("button"),K=document.createElement("img");K.dataset.src=`checks/${C}.png`,K.alt=F,K.loading="lazy",X.append(K,document.createTextNode(F)),X.onclick=()=>{i("#check-large").src=K.dataset.src,i("#check-large").alt=F,i("#check-caption").textContent=F+" \xB7 \u5929\u82B1\u677F\u9690\u85CF\uFF0C\u8FD1\u4FA7\u5916\u5899\u5256\u5F00\u4EE5\u67E5\u770B\u5185\u90E8\u3002",i("#image-dialog").showModal()},i("#check-gallery").append(X)}if(window.roomViewer={getState:()=>({mode:T,view:P,roam:(x==null?void 0:x.getState())||{active:!1},layers:{...W},meshCount:M.nodes.length,drawBatches:G.length,visibleMeshes:G.filter(C=>C.visible).length,modelSource:z,dimensions:D,camera:m.position.toArray()}),setView:C=>{if(!at[C])throw Error("\u672A\u77E5\u89C6\u89D2");return Nt(C,!1),it(),r(),window.roomViewer.getState()},setMode:C=>(et(C),window.roomViewer.getState()),interact:(C,F)=>x!=null&&x.active?x.perform(C,F):!1,setRoam:C=>(C?st():nt(),window.roomViewer.getState()),setCameraPose:(C,F,X=60)=>(x!=null&&x.active&&nt(),T="immersive",P="qa",Mt(!1),Object.assign(W,{ceiling:!0,exterior:!0,furniture:!0,soft:!0,cutaway:!1}),g.fov=X,g.updateProjectionMatrix(),m.position.set(...C),p.target.set(...F),p.update(),rt="",it(),r(),window.roomViewer.getState()),roamPlace:(C,F,X,K=0)=>{var R;x!=null&&x.active||st(),x.walker.position={x:C,z:F},x.walker.velocity={x:0,z:0};let ot=x.interactions;return(R=ot.hands)==null||R.reset(),ot.crouch=0,ot.look={yaw:X,pitch:K},ot.lookTarget={...ot.look},ot.camera.position.set(C,1.62,F),ot.orient(),ot.select(),r(),x.getState()},setLayers:C=>{x!=null&&x.active&&nt();for(let[F,X]of Object.entries(C))if(!(F in W)||typeof X!="boolean")throw Error("\u65E0\u6548\u56FE\u5C42\u53C2\u6570");Object.assign(W,C);for(let F of Object.keys(C))i("#"+F).checked=W[F];return rt="",it(),r(),window.roomViewer.getState()}},(B=document.modelContext)!=null&&B.registerTool)try{let C=new AbortController;window.addEventListener("pagehide",()=>C.abort(),{once:!0});for(let F of[{name:"read_room_view",description:"\u8BFB\u53D6\u623F\u95F4\u5F53\u524D\u89C6\u89D2\u3001\u6A21\u5F0F\u3001\u56FE\u5C42\u548C\u4F30\u7B97\u5C3A\u5BF8\u3002",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.roomViewer.getState()},{name:"set_room_view",description:"\u9009\u62E9\u623F\u95F4\u7684\u5FEB\u6377\u89C6\u89D2\u3002",inputSchema:{type:"object",properties:{view:{type:"string",enum:Object.keys(at)}},required:["view"],additionalProperties:!1},execute:X=>window.roomViewer.setView(X.view)}])Promise.resolve(document.modelContext.registerTool(F,{signal:C.signal})).catch(()=>{})}catch(C){console.info("\u53EF\u9009\u63A5\u53E3\u4E0D\u53EF\u7528",C.message)}}function Cd(){setTimeout(()=>bx().catch(i=>{window.roomBoot.fail(i.message||"3D\u663E\u793A\u672A\u80FD\u542F\u52A8\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u3002"),console.error(i)}),0)}document.readyState==="complete"?Cd():window.addEventListener("load",Cd,{once:!0});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
