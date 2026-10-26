(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=1021,C=1022,w=1023,T=1024,E=1025,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,te=1033,M=33776,ne=33777,re=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,N=37815,ye=37816,be=37817,xe=37818,P=37819,Se=37820,F=37821,I=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,ke=2300,Ae=2301,je=2302,Me=2400,Ne=2401,Pe=2402,Fe=2500,Ie=3200,Le=3201,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=2e3,Ke=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Je=1234567,Ye=Math.PI/180,Xe=180/Math.PI;function Ze(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+`-`+qe[t&255]+qe[t>>8&255]+`-`+qe[t>>16&15|64]+qe[t>>24&255]+`-`+qe[n&63|128]+qe[n>>8&255]+`-`+qe[n>>16&255]+qe[n>>24&255]+qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]).toLowerCase()}function Qe(e,t,n){return Math.max(t,Math.min(n,e))}function $e(e,t){return(e%t+t)%t}function et(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function tt(e,t,n){return e===t?0:(n-e)/(t-e)}function nt(e,t,n){return(1-n)*e+n*t}function rt(e,t,n,r){return nt(e,t,1-Math.exp(-n*r))}function it(e,t=1){return t-Math.abs($e(e,t*2)-t)}function at(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function st(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ct(e,t){return e+Math.random()*(t-e)}function lt(e){return e*(.5-Math.random())}function ut(e){e!==void 0&&(Je=e);let t=Je+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dt(e){return e*Ye}function ft(e){return e*Xe}function pt(e){return!(e&e-1)&&e!==0}function mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function gt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var yt={DEG2RAD:Ye,RAD2DEG:Xe,generateUUID:Ze,clamp:Qe,euclideanModulo:$e,mapLinear:et,inverseLerp:tt,lerp:nt,damp:rt,pingpong:it,smoothstep:at,smootherstep:ot,randInt:st,randFloat:ct,randFloatSpread:lt,seededRandom:ut,degToRad:dt,radToDeg:ft,isPowerOfTwo:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ht,setQuaternionFromProperEuler:gt,normalize:vt,denormalize:_t},L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},R=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bt.makeScale(e,t)),this}rotate(e){return this.premultiply(bt.makeRotation(-e)),this}translate(e,t){return this.premultiply(bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bt=new R;function xt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function St(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ct(){let e=St(`canvas`);return e.style.display=`block`,e}var wt={};function Tt(e){e in wt||(wt[e]=!0,console.warn(e))}function Et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Dt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ot(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var kt={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=At(e.r),e.g=At(e.g),e.b=At(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function At(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt=[.64,.33,.3,.6,.15,.06],Nt=[.2126,.7152,.0722],Pt=[.3127,.329],Ft=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[ze]:{primaries:Mt,whitePoint:Pt,transfer:Be,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:Nt,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Mt,whitePoint:Pt,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:Nt,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var Lt,Rt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Lt===void 0&&(Lt=St(`canvas`)),Lt.width=e.width,Lt.height=e.height;let n=Lt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Lt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=St(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=At(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(At(t[e]/255)*255):t[e]=At(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=Ze(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=class e extends Ke{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=w,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=Ze(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends Ke{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},z=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yt.copy(this).projectOnVector(e),this.sub(Yt)}reflect(e){return this.sub(Yt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yt=new B,Xt=new z,Zt=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$t):$t.fromBufferAttribute(r,t),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),en.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),en.copy(e.boundingBox)),en.applyMatrix4(e.matrixWorld),this.union(en)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cn),ln.subVectors(this.max,cn),tn.subVectors(e.a,cn),nn.subVectors(e.b,cn),rn.subVectors(e.c,cn),an.subVectors(nn,tn),on.subVectors(rn,nn),sn.subVectors(tn,rn);let t=[0,-an.z,an.y,0,-on.z,on.y,0,-sn.z,sn.y,an.z,0,-an.x,on.z,0,-on.x,sn.z,0,-sn.x,-an.y,an.x,0,-on.y,on.x,0,-sn.y,sn.x,0];return!fn(t,tn,nn,rn,ln)||(t=[1,0,0,0,1,0,0,0,1],!fn(t,tn,nn,rn,ln))?!1:(un.crossVectors(an,on),t=[un.x,un.y,un.z],fn(t,tn,nn,rn,ln))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qt=[new B,new B,new B,new B,new B,new B,new B,new B],$t=new B,en=new Zt,tn=new B,nn=new B,rn=new B,an=new B,on=new B,sn=new B,cn=new B,ln=new B,un=new B,dn=new B;function fn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dn.fromArray(e,a);let o=i.x*Math.abs(dn.x)+i.y*Math.abs(dn.y)+i.z*Math.abs(dn.z),s=t.dot(dn),c=n.dot(dn),l=r.dot(dn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pn=new Zt,mn=new B,hn=new B,gn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?pn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mn.subVectors(e,this.center);let t=mn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(mn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mn.copy(e.center).add(hn)),this.expandByPoint(mn.copy(e.center).sub(hn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new B,vn=new B,yn=new B,bn=new B,xn=new B,Sn=new B,Cn=new B,wn=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vn.copy(e).add(t).multiplyScalar(.5),yn.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(vn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(yn),o=bn.dot(this.direction),s=-bn.dot(yn),c=bn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(vn).addScaledVector(yn,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),r=_n.dot(_n)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,i){xn.subVectors(t,e),Sn.subVectors(n,e),Cn.crossVectors(xn,Sn);let a=this.direction.dot(Cn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);let s=o*this.direction.dot(Sn.crossVectors(bn,Sn));if(s<0)return null;let c=o*this.direction.dot(xn.cross(bn));if(c<0||s+c>a)return null;let l=-o*bn.dot(Cn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},V=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Tn.setFromMatrixColumn(e,0).length(),i=1/Tn.setFromMatrixColumn(e,1).length(),a=1/Tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dn,e,On)}lookAt(e,t,n){let r=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),kn.crossVectors(n,jn),kn.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),kn.crossVectors(n,jn)),kn.normalize(),An.crossVectors(jn,kn),r[0]=kn.x,r[4]=An.x,r[8]=jn.x,r[1]=kn.y,r[5]=An.y,r[9]=jn.y,r[2]=kn.z,r[6]=An.z,r[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],M=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Tn.set(r[0],r[1],r[2]).length(),a=Tn.set(r[4],r[5],r[6]).length(),o=Tn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);let s=1/i,c=1/a,l=1/o;return En.elements[0]*=s,En.elements[1]*=s,En.elements[2]*=s,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=l,En.elements[9]*=l,En.elements[10]*=l,t.setFromRotationMatrix(En),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ge){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tn=new B,En=new V,Dn=new B(0,0,0),On=new B(1,1,1),kn=new B,An=new B,jn=new B,Mn=new V,Nn=new z,Pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nn.setFromEuler(this),this.setFromQuaternion(Nn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER=`XYZ`;var Fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},In=0,Ln=new B,Rn=new z,zn=new V,Bn=new B,Vn=new B,Hn=new B,Un=new z,Wn=new B(1,0,0),Gn=new B(0,1,0),Kn=new B(0,0,1),qn={type:`added`},Jn={type:`removed`},Yn={type:`childadded`,child:null},Xn={type:`childremoved`,child:null},Zn=class e extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:In++}),this.uuid=Ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Pn,r=new z,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new R}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(Wn,e)}rotateY(e){return this.rotateOnAxis(Gn,e)}rotateZ(e){return this.rotateOnAxis(Kn,e)}translateOnAxis(e,t){return Ln.copy(e).applyQuaternion(this.quaternion),this.position.add(Ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wn,e)}translateY(e){return this.translateOnAxis(Gn,e)}translateZ(e){return this.translateOnAxis(Kn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bn.copy(e):Bn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Vn,Bn,this.up):zn.lookAt(Bn,Vn,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Rn.setFromRotationMatrix(zn),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jn),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,e,Hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,Un,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Zn.DEFAULT_UP=new B(0,1,0),Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new Wt,lr=new Wt,ur=new Wt,dr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Qn.subVectors(r,t),$n.subVectors(n,t),er.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot($n),s=Qn.dot(er),c=$n.dot($n),l=$n.dot(er),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tr)!==null&&tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,tr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,tr.x),s.addScaledVector(a,tr.y),s.addScaledVector(o,tr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return cr.setScalar(0),lr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),ur.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cr,i.x),a.addScaledVector(lr,i.y),a.addScaledVector(ur,i.z),a}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),$n.subVectors(e,t),Qn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Qn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;nr.subVectors(r,n),rr.subVectors(i,n),ar.subVectors(e,n);let s=nr.dot(ar),c=rr.dot(ar);if(s<=0&&c<=0)return t.copy(n);or.subVectors(e,r);let l=nr.dot(or),u=rr.dot(or);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(nr,a);sr.subVectors(e,i);let f=nr.dot(sr),p=rr.dot(sr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(rr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ir.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ir,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(nr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},mr={h:0,s:0,l:0};function hr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=kt.workingColorSpace){if(e=$e(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hr(i,r,e+1/3),this.g=hr(i,r,e),this.b=hr(i,r,e-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=fr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return kt.fromWorkingColorSpace(gr.copy(this),e),Math.round(Qe(gr.r*255,0,255))*65536+Math.round(Qe(gr.g*255,0,255))*256+Math.round(Qe(gr.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(gr.copy(this),t);let n=gr.r,r=gr.g,i=gr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(gr.copy(this),t),e.r=gr.r,e.g=gr.g,e.b=gr.b,e}getStyle(e=Re){kt.fromWorkingColorSpace(gr.copy(this),e);let t=gr.r,n=gr.g,r=gr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(mr);let n=nt(pr.h,mr.h,t),r=nt(pr.s,mr.s,t),i=nt(pr.l,mr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gr=new H;H.NAMES=fr;var _r=0,vr=class extends Ke{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=Ze(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},yr=class extends vr{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},br=new B,xr=new L,U=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_t(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_t(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_t(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Sr=class extends U{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Cr=class extends U{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wr=class extends U{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tr=0,Er=new V,Dr=new Zn,Or=new B,kr=new Zt,Ar=new Zt,jr=new B,Mr=class e extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=Ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(xt(e)?Cr:Sr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new wr(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(this.boundingBox.min,kr.min),this.boundingBox.expandByPoint(jr),jr.addVectors(this.boundingBox.max,kr.max),this.boundingBox.expandByPoint(jr)):(this.boundingBox.expandByPoint(kr.min),this.boundingBox.expandByPoint(kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(kr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(kr.min,Ar.min),kr.expandByPoint(jr),jr.addVectors(kr.max,Ar.max),kr.expandByPoint(jr)):(kr.expandByPoint(Ar.min),kr.expandByPoint(Ar.max))}kr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jr.fromBufferAttribute(a,t),o&&(Or.fromBufferAttribute(e,t),jr.add(Or)),r=Math.max(r,n.distanceToSquared(jr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new U(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new L,f=new L,p=new L,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new U(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jr.fromBufferAttribute(e,t),jr.normalize(),e.setXYZ(t,jr.x,jr.y,jr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new U(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=new V,Pr=new wn,Fr=new gn,Ir=new B,Lr=new B,Rr=new B,zr=new B,Br=new B,Vr=new B,Hr=new B,Ur=new B,Wr=class extends Zn{constructor(e=new Mr,t=new yr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Br.fromBufferAttribute(s,e),a?Vr.addScaledVector(Br,r):Vr.addScaledVector(Br.sub(t),r))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Pr.copy(e.ray).recast(e.near),!(Fr.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Fr,Ir)===null||Pr.origin.distanceToSquared(Ir)>(e.far-e.near)**2))&&(Nr.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(Nr),(n.boundingBox===null||Pr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Kr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Kr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Kr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Kr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ur.copy(s),Ur.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ur);return l<n.near||l>n.far?null:{distance:l,point:Ur.clone(),object:e}}function Kr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Lr),e.getVertexPosition(c,Rr),e.getVertexPosition(l,zr);let u=Gr(e,t,n,r,Lr,Rr,zr,Hr);if(u){let e=new B;dr.getBarycoord(Hr,Lr,Rr,zr,e),i&&(u.uv=dr.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=dr.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=dr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};dr.getNormal(Lr,Rr,zr,t.normal),u.face=t,u.barycoord=e}return u}var qr=class e extends Mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wr(c,3)),this.setAttribute(`normal`,new wr(l,3)),this.setAttribute(`uv`,new wr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Jr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Yr(e){let t={};for(let n=0;n<e.length;n++){let r=Jr(e[n]);for(let e in r)t[e]=r[e]}return t}function Xr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var Qr={clone:Jr,merge:Yr},$r=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ei=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends vr{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$r,this.fragmentShader=ei,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=Xr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ni=class extends Zn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new B,ii=new L,ai=new L,oi=class extends ni{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ye*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xe*2*Math.atan(Math.tan(Ye*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,ii,ai),t.subVectors(ai,ii)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ye*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},si=-90,ci=1,li=class extends Zn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new oi(si,ci,e,t);r.layers=this.layers,this.add(r);let i=new oi(si,ci,e,t);i.layers=this.layers,this.add(i);let a=new oi(si,ci,e,t);a.layers=this.layers,this.add(a);let o=new oi(si,ci,e,t);o.layers=this.layers,this.add(o);let s=new oi(si,ci,e,t);s.layers=this.layers,this.add(s);let c=new oi(si,ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ui=class extends Ut{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ui(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?s:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),i=new ti({name:`CubemapFromEquirect`,uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Wr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new li(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},fi=new B,pi=new B,mi=new R,hi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fi.subVectors(n,t).cross(pi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mi.getNormalMatrix(e),r=this.coplanarPoint(fi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new gn,_i=new B,vi=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,i=new hi,a=new hi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function bi(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var xi=class e extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Si={basic:{uniforms:Yr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Yr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Yr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Yr([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Yr([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Yr([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Yr([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Yr([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Yr([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Yr([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Yr([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distanceRGBA:{uniforms:Yr([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distanceRGBA_vert,fragmentShader:W.distanceRGBA_frag},shadow:{uniforms:Yr([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};Si.physical={uniforms:Yr([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var Ci={r:0,b:0,g:0},wi=new Pn,Ti=new V;function Ei(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Wr(new qr(1,1,1),new ti({name:`BackgroundCubeMaterial`,uniforms:Jr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wi.copy(n.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ti.makeRotationFromEuler(wi)),u.material.toneMapped=kt.getTransfer(r.colorSpace)!==Ve,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Wr(new xi(2,2),new ti({name:`BackgroundMaterial`,uniforms:Jr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=kt.getTransfer(r.colorSpace)!==Ve,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Ci,Zr(e)),r.buffers.color.setClear(Ci.r,Ci.g,Ci.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Di(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Oi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ki(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ai(e){let t=this,n=null,r=0,i=!1,a=!1,o=new hi,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function ji(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new di(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Mi=class extends ni{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ni=4,Pi=[.125,.215,.35,.446,.526,.582],Fi=20,Ii=new Mi,Li=new H,Ri=null,zi=0,Bi=0,Vi=!1,Hi=(1+Math.sqrt(5))/2,Ui=1/Hi,Wi=[new B(-Hi,Ui,0),new B(Hi,Ui,0),new B(-Ui,0,Hi),new B(Ui,0,Hi),new B(0,Hi,-Ui),new B(0,Hi,Ui),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Gi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ri=this._renderer.getRenderTarget(),zi=this._renderer.getActiveCubeFace(),Bi=this._renderer.getActiveMipmapLevel(),Vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ri,zi,Bi),this._renderer.xr.enabled=Vi,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ri=this._renderer.getRenderTarget(),zi=this._renderer.getActiveCubeFace(),Bi=this._renderer.getActiveMipmapLevel(),Vi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:w,colorSpace:ze,depthBuffer:!1},r=qi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ki(r)),this._blurMaterial=Yi(r,e,t)}return r}_compileMaterial(e){let t=new Wr(this._lodPlanes[0],e);this._renderer.compile(t,Ii)}_sceneToCubeUV(e,t,n,r){let i=new oi(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Li),s.toneMapping=0,s.autoClear=!1;let u=new yr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Wr(new qr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Li),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Ji(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Wr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ji(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ii)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Wi[(r-t-1)%Wi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Wr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Fi;m>Fi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let h=[],g=0;for(let e=0;e<Fi;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ji(t,3*v*(r>_-Ni?r-_+Ni:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ii)}};function Ki(e){let t=[],n=[],r=[],i=e,a=e-Ni+1+Pi.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ni?s=Pi[o-e+Ni-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Mr;h.setAttribute(`position`,new U(f,3)),h.setAttribute(`uv`,new U(p,2)),h.setAttribute(`faceIndex`,new U(m,1)),t.push(h),i>Ni&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function qi(e,t,n){let r=new Kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ji(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Yi(e,t,n){let r=new Float32Array(Fi),i=new B(0,1,0);return new ti({name:`SphericalGaussianBlur`,defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xi(){return new ti({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zi(){return new ti({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(){return`

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
	`}function $i(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Gi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Gi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ea(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Tt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function ta(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(xt(n)?Cr:Sr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function na(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ra(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ia(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new qt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new L(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function aa(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var oa=class extends Ut{constructor(e,t,n,r,a,o,s,c,l,u=D){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=h),n===void 0&&u===1027&&(n=b),super(null,r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?i:s,this.minFilter=c===void 0?i:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sa=new Ut,ca=new oa(1,1),la=new qt,ua=new Jt,da=new ui,fa=[],pa=[],ma=new Float32Array(16),ha=new Float32Array(9),ga=new Float32Array(4);function _a(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=fa[i];if(a===void 0&&(a=new Float32Array(i),fa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function va(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ya(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ba(e,t){let n=pa[t];n===void 0&&(n=new Int32Array(t),pa[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function xa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Sa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(va(n,t))return;e.uniform2fv(this.addr,t),ya(n,t)}}function Ca(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(va(n,t))return;e.uniform3fv(this.addr,t),ya(n,t)}}function wa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(va(n,t))return;e.uniform4fv(this.addr,t),ya(n,t)}}function Ta(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(va(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ya(n,t)}else{if(va(n,r))return;ga.set(r),e.uniformMatrix2fv(this.addr,!1,ga),ya(n,r)}}function Ea(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(va(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ya(n,t)}else{if(va(n,r))return;ha.set(r),e.uniformMatrix3fv(this.addr,!1,ha),ya(n,r)}}function Da(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(va(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ya(n,t)}else{if(va(n,r))return;ma.set(r),e.uniformMatrix4fv(this.addr,!1,ma),ya(n,r)}}function Oa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(va(n,t))return;e.uniform2iv(this.addr,t),ya(n,t)}}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(va(n,t))return;e.uniform3iv(this.addr,t),ya(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(va(n,t))return;e.uniform4iv(this.addr,t),ya(n,t)}}function Ma(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(va(n,t))return;e.uniform2uiv(this.addr,t),ya(n,t)}}function Pa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(va(n,t))return;e.uniform3uiv(this.addr,t),ya(n,t)}}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(va(n,t))return;e.uniform4uiv(this.addr,t),ya(n,t)}}function Ia(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ca.compareFunction=515,a=ca):a=sa,n.setTexture2D(t||a,i)}function La(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ua,i)}function Ra(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||da,i)}function za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||la,i)}function Ba(e){switch(e){case 5126:return xa;case 35664:return Sa;case 35665:return Ca;case 35666:return wa;case 35674:return Ta;case 35675:return Ea;case 35676:return Da;case 5124:case 35670:return Oa;case 35667:case 35671:return ka;case 35668:case 35672:return Aa;case 35669:case 35673:return ja;case 5125:return Ma;case 36294:return Na;case 36295:return Pa;case 36296:return Fa;case 35678:case 36198:case 36298:case 36306:case 35682:return Ia;case 35679:case 36299:case 36307:return La;case 35680:case 36300:case 36308:case 36293:return Ra;case 36289:case 36303:case 36311:case 36292:return za}}function Va(e,t){e.uniform1fv(this.addr,t)}function Ha(e,t){let n=_a(t,this.size,2);e.uniform2fv(this.addr,n)}function Ua(e,t){let n=_a(t,this.size,3);e.uniform3fv(this.addr,n)}function Wa(e,t){let n=_a(t,this.size,4);e.uniform4fv(this.addr,n)}function Ga(e,t){let n=_a(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ka(e,t){let n=_a(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qa(e,t){let n=_a(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ja(e,t){e.uniform1iv(this.addr,t)}function Ya(e,t){e.uniform2iv(this.addr,t)}function Xa(e,t){e.uniform3iv(this.addr,t)}function Za(e,t){e.uniform4iv(this.addr,t)}function Qa(e,t){e.uniform1uiv(this.addr,t)}function $a(e,t){e.uniform2uiv(this.addr,t)}function eo(e,t){e.uniform3uiv(this.addr,t)}function to(e,t){e.uniform4uiv(this.addr,t)}function no(e,t,n){let r=this.cache,i=t.length,a=ba(n,i);va(r,a)||(e.uniform1iv(this.addr,a),ya(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||sa,a[e])}function ro(e,t,n){let r=this.cache,i=t.length,a=ba(n,i);va(r,a)||(e.uniform1iv(this.addr,a),ya(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ua,a[e])}function io(e,t,n){let r=this.cache,i=t.length,a=ba(n,i);va(r,a)||(e.uniform1iv(this.addr,a),ya(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||da,a[e])}function ao(e,t,n){let r=this.cache,i=t.length,a=ba(n,i);va(r,a)||(e.uniform1iv(this.addr,a),ya(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||la,a[e])}function oo(e){switch(e){case 5126:return Va;case 35664:return Ha;case 35665:return Ua;case 35666:return Wa;case 35674:return Ga;case 35675:return Ka;case 35676:return qa;case 5124:case 35670:return Ja;case 35667:case 35671:return Ya;case 35668:case 35672:return Xa;case 35669:case 35673:return Za;case 5125:return Qa;case 36294:return $a;case 36295:return eo;case 36296:return to;case 35678:case 36198:case 36298:case 36306:case 35682:return no;case 35679:case 36299:case 36307:return ro;case 35680:case 36300:case 36308:case 36293:return io;case 36289:case 36303:case 36311:case 36292:return ao}}var so=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ba(t.type)}},co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oo(t.type)}},lo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},uo=/(\w+)(\])?(\[|\.)?/g;function fo(e,t){e.seq.push(t),e.map[t.id]=t}function po(e,t,n){let r=e.name,i=r.length;for(uo.lastIndex=0;;){let a=uo.exec(r),o=uo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){fo(n,l===void 0?new so(s,e,t):new co(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new lo(s),fo(n,e)),n=e}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);po(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ho(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var go=37297,_o=0;function vo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var yo=new R;function bo(e){kt._getMatrix(yo,kt.workingColorSpace,e);let t=`mat3( ${yo.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function xo(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+vo(e.getShaderSource(t),r)}return i}function So(e,t){let n=bo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Co(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var wo=new B;function To(){return kt.getLuminanceCoefficients(wo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wo.x.toFixed(4)}, ${wo.y.toFixed(4)}, ${wo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Eo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ko).join(`
`)}function Do(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Oo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ko(e){return e!==``}function Ao(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mo=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(e){return e.replace(Mo,Fo)}var Po=new Map;function Fo(e,t){let n=W[t];if(n===void 0){let e=Po.get(t);if(e!==void 0)n=W[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return No(n)}var Io=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(e){return e.replace(Io,Ro)}function Ro(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function zo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Bo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Vo(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ho(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Uo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Wo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Go(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Bo(n),l=Vo(n),u=Ho(n),d=Uo(n),f=Wo(n),p=Eo(n),m=Do(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ko).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(g=[zo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ko).join(`
`),_=[zo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:Co(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,So(`linearToOutputTexel`,n.outputColorSpace),To(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ko).join(`
`)),o=No(o),o=Ao(o,n),o=jo(o,n),s=No(s),s=Ao(s,n),s=jo(s,n),o=Lo(o),s=Lo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ho(i,i.VERTEX_SHADER,y),S=ho(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=xo(i,x,`vertex`),r=xo(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new mo(i,h),T=Oo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,go)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_o++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ko=0,qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jo(e),t.set(e,n)),n}},Jo=class{constructor(e){this.id=Ko++,this.code=e,this.usedTimes=0}};function Yo(e,t,n,r,i,a,o){let s=new Fn,c=new qo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Si[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=_.isInstancedMesh===!0,M=_.isBatchedMesh===!0,ne=!!a.map,re=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,se=!!a.bumpMap,ce=!!a.normalMap,le=!!a.displacementMap,ue=!!a.emissiveMap,de=!!a.metalnessMap,fe=!!a.roughnessMap,pe=a.anisotropy>0,me=a.clearcoat>0,he=a.dispersion>0,ge=a.iridescence>0,_e=a.sheen>0,ve=a.transmission>0,N=pe&&!!a.anisotropyMap,ye=me&&!!a.clearcoatMap,be=me&&!!a.clearcoatNormalMap,xe=me&&!!a.clearcoatRoughnessMap,P=ge&&!!a.iridescenceMap,Se=ge&&!!a.iridescenceThicknessMap,F=_e&&!!a.sheenColorMap,I=_e&&!!a.sheenRoughnessMap,Ce=!!a.specularMap,we=!!a.specularColorMap,Te=!!a.specularIntensityMap,Ee=ve&&!!a.transmissionMap,De=ve&&!!a.thicknessMap,Oe=!!a.gradientMap,ke=!!a.alphaMap,Ae=a.alphaTest>0,je=!!a.alphaHash,Me=!!a.extensions,Ne=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:M,batchingColor:M&&_._colorsTexture!==null,instancing:te,instancingColor:te&&_.instanceColor!==null,instancingMorph:te&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ze,alphaToCoverage:!!a.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:f&&le,emissiveMap:ue,normalMapObjectSpace:ce&&a.normalMapType===1,normalMapTangentSpace:ce&&a.normalMapType===0,metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:N,clearcoat:me,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:he,iridescence:ge,iridescenceMap:P,iridescenceThicknessMap:Se,sheen:_e,sheenColorMap:F,sheenRoughnessMap:I,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:ve,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:a.combine,mapUv:ne&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:se&&h(a.bumpMap.channel),normalMapUv:ce&&h(a.normalMap.channel),displacementMapUv:le&&h(a.displacementMap.channel),emissiveMapUv:ue&&h(a.emissiveMap.channel),metalnessMapUv:de&&h(a.metalnessMap.channel),roughnessMapUv:fe&&h(a.roughnessMap.channel),anisotropyMapUv:N&&h(a.anisotropyMap.channel),clearcoatMapUv:ye&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:be&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:F&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:I&&h(a.sheenRoughnessMap.channel),specularMapUv:Ce&&h(a.specularMap.channel),specularColorMapUv:we&&h(a.specularColorMap.channel),specularIntensityMapUv:Te&&h(a.specularIntensityMap.channel),transmissionMapUv:Ee&&h(a.transmissionMap.channel),thicknessMapUv:De&&h(a.thicknessMap.channel),alphaMapUv:ke&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ce||pe),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ne||ke),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ne&&a.map.isVideoTexture===!0&&kt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&a.emissiveMap.isVideoTexture===!0&&kt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Me&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&a.extensions.multiDraw===!0||M)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Si[t];n=Qr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Go(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Xo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Zo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $o(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Zo),r.length>1&&r.sort(t||Qo),i.length>1&&i.sort(t||Qo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function es(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new $o,e.set(t,[i])):n>=r.length?(i=new $o,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ts(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function ns(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var rs=0;function is(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function as(e){let t=new ts,n=ns(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(is);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=rs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function os(e){let t=new as(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function ss(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new os(e),t.set(n,[a])):r>=i.length?(a=new os(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var cs=class extends vr{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ie,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ls=class extends vr{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},us=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ds=`uniform sampler2D shadow_pass;
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
}`;function fs(e,t,n){let r=new vi,a=new L,o=new L,s=new Wt,c=new cs({depthPacking:Le}),l=new ls,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:us,fragmentShader:ds}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Mr;h.setAttribute(`position`,new U(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Wr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:i,magFilter:i};f.map!==null&&f.map.dispose(),f.map=new Kt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Kt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var ps={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ms(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ps[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(M)[1]),ee=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Wt().fromArray(ie),se=new Wt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),N(!1),ye(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return m!==t&&(e.useProgram(t),m=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(de(e.BLEND),h=!1);return}if(h===!1&&(ue(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(he[n],he[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),N(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function N(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ye(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function be(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function xe(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):de(e.POLYGON_OFFSET_FILL)}function P(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),ne!==t&&(e.activeTexture(t),ne=t)}function F(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+j-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function I(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Pe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ne=null,re={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:N,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:P,activeTexture:Se,bindTexture:F,unbindTexture:I,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Ne,viewport:Pe,reset:Le}}function hs(e,t,n,r){let i=gs(r);switch(n){case S:return e*t;case T:return e*t;case E:return e*t*2;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case N:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case P:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case I:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function gs(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function _s(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):St(`canvas`)}function w(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a=!1){if(t!==null){if(e[t]!==void 0)return e[t];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let o=n;if(n===e.RED&&(r===e.FLOAT&&(o=e.R32F),r===e.HALF_FLOAT&&(o=e.R16F),r===e.UNSIGNED_BYTE&&(o=e.R8)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.R8UI),r===e.UNSIGNED_SHORT&&(o=e.R16UI),r===e.UNSIGNED_INT&&(o=e.R32UI),r===e.BYTE&&(o=e.R8I),r===e.SHORT&&(o=e.R16I),r===e.INT&&(o=e.R32I)),n===e.RG&&(r===e.FLOAT&&(o=e.RG32F),r===e.HALF_FLOAT&&(o=e.RG16F),r===e.UNSIGNED_BYTE&&(o=e.RG8)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RG8UI),r===e.UNSIGNED_SHORT&&(o=e.RG16UI),r===e.UNSIGNED_INT&&(o=e.RG32UI),r===e.BYTE&&(o=e.RG8I),r===e.SHORT&&(o=e.RG16I),r===e.INT&&(o=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RGB8UI),r===e.UNSIGNED_SHORT&&(o=e.RGB16UI),r===e.UNSIGNED_INT&&(o=e.RGB32UI),r===e.BYTE&&(o=e.RGB8I),r===e.SHORT&&(o=e.RGB16I),r===e.INT&&(o=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(o=e.RGBA16UI),r===e.UNSIGNED_INT&&(o=e.RGBA32UI),r===e.BYTE&&(o=e.RGBA8I),r===e.SHORT&&(o=e.RGBA16I),r===e.INT&&(o=e.RGBA32I)),n===e.RGB&&r===e.UNSIGNED_INT_5_9_9_9_REV&&(o=e.RGB9_E5),n===e.RGBA){let t=a?Be:kt.getTransfer(i);r===e.FLOAT&&(o=e.RGBA32F),r===e.HALF_FLOAT&&(o=e.RGBA16F),r===e.UNSIGNED_BYTE&&(o=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT_4_4_4_4&&(o=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(o=e.RGB5_A1)}return(o===e.R16F||o===e.R32F||o===e.RG16F||o===e.RG32F||o===e.RGBA16F||o===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),o}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),M(t),t.isVideoTexture&&y.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t)}function M(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ne(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function ne(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function re(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ie=0;function ae(){ie=0}function oe(){let e=ie;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,n){let r=f.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){_e(r,t,n);return}d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){_e(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=f.get(t);if(t.version>0&&r.__version!==t.version){ve(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let fe={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},pe={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,fe[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,fe[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,fe[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,pe[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,pe[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,me[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=se(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ne(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function _e(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ge(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=kt.getPrimaries(kt.workingColorSpace),c=n.colorSpace===``?null:kt.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=Oe(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=k(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);he(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=j(n,u);if(n.isDepthTexture)g=A(n.format===O,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023){if(f!==null){if(y){if(x){if(n.layerUpdates.size>0){let r=hs(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(n.isDataArrayTexture){if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(n.layerUpdates.size>0){let t=hs(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b){if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}}else if(v.length>0){if(y&&b){let t=ke(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=ke(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ve(t,n,r){if(n.image.length!==6)return;let i=ge(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=kt.getPrimaries(kt.workingColorSpace),s=n.colorSpace===``?null:kt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Oe(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(n,h);he(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=ke(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function N(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Te(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Te(n);Ee(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.colorSpace),l=Te(n);r&&Ee(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):Ee(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let r=f.get(n.depthTexture);r.__renderTarget=n,(!r.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),ce(n.depthTexture,0);let i=r.__webglTexture,a=Te(n);if(n.depthTexture.format===1026)Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else if(n.depthTexture.format===1027)Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0);else throw Error(`Unknown depthTexture format`)}function xe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);be(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ye(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function P(t,n,r){let i=f.get(t);n!==void 0&&N(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function Se(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,te);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ee(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=Te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),he(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)N(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else N(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),he(e.TEXTURE_2D,i),N(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,0),T(i)&&E(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),he(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)N(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else N(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&xe(t)}function F(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=D(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let I=[],Ce=[];function we(t){if(t.samples>0){if(Ee(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(I.length=0,Ce.length=0,I.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(I.push(o),Ce.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,I))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Te(e){return Math.min(p.maxSamples,e.samples)}function Ee(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function De(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(kt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=P,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Ee}function vs(e,t){function n(n,r=``){let i,a=kt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ys=class extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bs=class extends Zn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},xs={type:`move`},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ws=`
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

}`,Ts=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ut,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ti({vertexShader:Cs,fragmentShader:ws,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Es=class extends Ke{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=new Ts,_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new L,T=null,E=new oi;E.viewport=new Wt;let k=new oi;k.viewport=new Wt;let A=[E,k],j=new ys,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Ss,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Ss,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Ss,x[e]=t),t.getHandSpace()};function M(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,te=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Kt(p.framebufferWidth,p.framebufferHeight,{format:w,type:u,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?O:D,a=_.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Kt(f.textureWidth,f.textureHeight,{format:w,type:u,depthTexture:new oa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ie=new B,ae=new B;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=E.near=t,j.far=k.far=E.far=n,(ee!==j.near||te!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,te=j.far),E.layers.mask=e.layers.mask|2,k.layers.mask=e.layers.mask|4,j.layers.mask=E.layers.mask|k.layers.mask;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(j,E,k):j.projectionMatrix.copy(E.projectionMatrix),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Xe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(y,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(y))}let o=A[r];o===void 0&&(o=new oi,o.layers.enable(r),o.viewport=new Wt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let de=new yi;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Ds=new Pn,Os=new V;function ks(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Zr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ds.copy(o),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),e.envMapRotation.value.setFromMatrix4(Os.makeRotationFromEuler(Ds)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function As(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var js=class{constructor(e={}){let{canvas:t=Ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),g=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,O=null,k=new Wt,A=new Wt,j=null,ee=new H(0),te=0,M=t.width,ne=t.height,re=1,ie=null,ae=null,oe=new Wt(0,0,M,ne),se=new Wt(0,0,M,ne),ce=!1,le=new vi,ue=!1,de=!1,fe=new V,pe=new V,me=new B,he=new Wt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ve(){return E===null?re:1}let N=n;function ye(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Ge,!1),t.addEventListener(`webglcontextrestored`,Ke,!1),t.addEventListener(`webglcontextcreationerror`,qe,!1),N===null){let t=`webgl2`;if(N=ye(t,e),N===null)throw ye(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let be,xe,P,Se,F,I,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Be,Ve,He;function Ue(){be=new ea(N),be.init(),Be=new vs(N,be),xe=new ki(N,be,e,Be),P=new ms(N,be),xe.reverseDepthBuffer&&p&&P.buffers.depth.setReversed(!0),Se=new ra(N),F=new Xo,I=new _s(N,be,P,F,xe,Be,Se),Ce=new ji(S),we=new $i(S),Te=new bi(N),Ve=new Di(N,Te),Ee=new ta(N,Te,Se,Ve),De=new aa(N,Ee,Te,Se),Fe=new ia(N,xe,I),Me=new Ai(F),Oe=new Yo(S,Ce,we,be,xe,Ve,Me),ke=new ks(S,F),Ae=new es,je=new ss(be),Pe=new Ei(S,Ce,we,P,De,m,s),Ne=new fs(S,De,xe),He=new As(N,Se,xe,P),Ie=new Oi(N,be,Se),Le=new na(N,be,Se),Se.programs=Oe.programs,S.capabilities=xe,S.extensions=be,S.properties=F,S.renderLists=Ae,S.shadowMap=Ne,S.state=P,S.info=Se}Ue();let We=new Es(S,N);this.xr=We,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=be.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=be.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(e){e!==void 0&&(re=e,this.setSize(M,ne,!1))},this.getSize=function(e){return e.set(M,ne)},this.setSize=function(e,n,r=!0){if(We.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}M=e,ne=n,t.width=Math.floor(e*re),t.height=Math.floor(n*re),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(M*re,ne*re).floor()},this.setDrawingBufferSize=function(e,n,r){M=e,ne=n,re=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),P.viewport(k.copy(oe).multiplyScalar(re).round())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),P.scissor(A.copy(se).multiplyScalar(re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){P.setScissorTest(ce=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,N.clearBufferuiv(N.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,N.clearBufferiv(N.COLOR,0,g))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ge,!1),t.removeEventListener(`webglcontextrestored`,Ke,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),Ae.dispose(),je.dispose(),F.dispose(),Ce.dispose(),we.dispose(),De.dispose(),Ve.dispose(),He.dispose(),Oe.dispose(),We.dispose(),We.removeEventListener(`sessionstart`,et),We.removeEventListener(`sessionend`,tt),nt.stop()};function Ge(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Ke(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Se.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Ue(),Se.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function qe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Je(e){let t=e.target;t.removeEventListener(`dispose`,Je),Ye(t)}function Ye(e){Xe(e),F.remove(e)}function Xe(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ge);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=dt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ve.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Te.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*ve()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*ve()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(be.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ze(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ct(e,t,n),e.side=0,e.needsUpdate=!0,ct(e,t,n),e.side=2):ct(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=je.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ze(a,n,e),r.add(a)}else Ze(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}be.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Qe=null;function $e(e){Qe&&Qe(e)}function et(){nt.stop()}function tt(){nt.start()}let nt=new yi;nt.setAnimationLoop($e),typeof self<`u`&&nt.setContext(self),this.setAnimationLoop=function(e){Qe=e,We.setAnimationLoop(e),e===null?nt.stop():nt.start()},We.addEventListener(`sessionstart`,et),We.addEventListener(`sessionend`,tt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(t),t=We.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=je.get(e,x.length),y.init(t),x.push(y),pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromProjectionMatrix(pe),de=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,de),v=Ae.get(e,b.length),v.init(),b.push(v),We.enabled===!0&&We.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&rt(e,t,-1/0,S.sortObjects)}rt(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ie,ae),_e=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,_e&&Pe.addToRenderList(v,e),this.info.render.frame++,ue===!0&&Me.beginShadows();let n=y.state.shadowsArray;Ne.render(n,e,t),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];at(r,i,e,a)}_e&&Pe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];it(v,e,r,r.viewport)}}else i.length>0&&at(r,i,e,t),_e&&Pe.render(e),it(v,e,t);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Ve.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],ue===!0&&Me.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function rt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||le.intersectsSprite(e)){r&&he.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pe);let t=De.update(e),i=e.material;i.visible&&v.push(e,t,i,n,he.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||le.intersectsObject(e))){let t=De.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),he.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),he.copy(e.boundingSphere.center)),he.applyMatrix4(e.matrixWorld).applyMatrix4(pe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,he.z,o)}}else i.visible&&v.push(e,t,i,n,he.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)rt(i[e],t,n,r)}function it(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),ue===!0&&Me.setGlobalState(S.clippingPlanes,n),r&&P.viewport(k.copy(r)),i.length>0&&ot(i,t,n),a.length>0&&ot(a,t,n),o.length>0&&ot(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:be.has(`EXT_color_buffer_half_float`)||be.has(`EXT_color_buffer_float`)?_:u,minFilter:l,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ee),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),_e&&Pe.render(n);let c=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),ue===!0&&Me.setGlobalState(S.clippingPlanes,r),ot(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),be.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,st(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ee,te),d!==void 0&&(r.viewport=d),S.toneMapping=c}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&st(o,t,n,s,c,l)}}function st(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function ct(e,t,n){t.isScene!==!0&&(t=ge);let r=F.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?we:Ce).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Je),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ut(e,s),u}else s.uniforms=Oe.getUniforms(e),e.onBeforeCompile(s,S),u=Oe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Me.uniform),ut(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function lt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=mo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ut(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function dt(e,t,n,r,i){t.isScene!==!0&&(t=ge),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ze,c=(r.isMeshStandardMaterial?we:Ce).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=F.get(r),v=y.state.lights;if(ue===!0&&(de===!0||e!==O)){let t=e===O&&r.id===D;Me.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Me.numPlanes||_.numIntersection!==Me.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=ct(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(P.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){P.buffers.depth.getReversed()?(fe.copy(e.projectionMatrix),Dt(fe),Ot(fe),k.setValue(N,`projectionMatrix`,fe)):k.setValue(N,`projectionMatrix`,e.projectionMatrix),k.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(N,me.setFromMatrixPosition(e.matrixWorld)),xe.logarithmicDepthBuffer&&k.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(N,i,`bindMatrix`),k.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(k.setOptional(N,i,`batchingTexture`),k.setValue(N,`batchingTexture`,i._matricesTexture,I),k.setOptional(N,i,`batchingIdTexture`),k.setValue(N,`batchingIdTexture`,i._indirectTexture,I),k.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Fe.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(N,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(N,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&ft(A,T),a&&r.fog===!0&&ke.refreshFogUniforms(A,a),ke.refreshMaterialUniforms(A,r,re,ne,y.state.transmissionRenderTarget[e.id]),mo.upload(N,lt(_),A,I)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(mo.upload(N,lt(_),A,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(N,`center`,i.center),k.setValue(N,`modelViewMatrix`,i.modelViewMatrix),k.setValue(N,`normalMatrix`,i.normalMatrix),k.setValue(N,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];He.update(n,x),He.bind(n,x)}}return x}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=n;let r=F.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||be.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=F.get(e);if(s.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(N.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(s.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(oe).multiplyScalar(re).floor(),A.copy(se).multiplyScalar(re).floor(),j=ce;if(P.bindFramebuffer(N.FRAMEBUFFER,i)&&r&&P.drawBuffers(e,i),P.viewport(k),P.scissor(A),P.setScissorTest(j),a){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=F.get(e.texture),i=t||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){P.bindFramebuffer(N.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!xe.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!xe.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,Be.convert(s),Be.convert(c),a)}finally{let e=E===null?null:F.get(E).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!xe.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!xe.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,s);let e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,e),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,Be.convert(c),Be.convert(l),0);let o=E===null?null:F.get(E).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,o);let u=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Et(N,u,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(e),N.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Tt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Tt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Be.convert(t.format),g=Be.convert(t.type),_;t.isData3DTexture?(I.setTexture3D(t,0),_=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),_=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),_=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let v=N.getParameter(N.UNPACK_ROW_LENGTH),y=N.getParameter(N.UNPACK_IMAGE_HEIGHT),b=N.getParameter(N.UNPACK_SKIP_PIXELS),x=N.getParameter(N.UNPACK_SKIP_ROWS),S=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,m.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,m.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,c),N.pixelStorei(N.UNPACK_SKIP_ROWS,l),N.pixelStorei(N.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=F.get(e),r=F.get(t),m=F.get(n.__renderTarget),h=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,m.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,i,p+n),N.blitFramebuffer(c,l,a,o,d,f,a,o,N.DEPTH_BUFFER_BIT,N.NEAREST)):w?N.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):N.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):N.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):N.texSubImage2D(N.TEXTURE_2D,i,d,f,a,o,h,g,m);N.pixelStorei(N.UNPACK_ROW_LENGTH,v),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,y),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b),N.pixelStorei(N.UNPACK_SKIP_ROWS,x),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&N.generateMipmap(_),P.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(Tt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),Tt(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,P.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}},Ms=class extends Zn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=Ze()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ps=new B,Fs=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix4(e),this.setXYZ(t,Ps.x,Ps.y,Ps.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyNormalMatrix(e),this.setXYZ(t,Ps.x,Ps.y,Ps.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.transformDirection(e),this.setXYZ(t,Ps.x,Ps.y,Ps.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new U(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Is=new B,Ls=new Wt,Rs=new Wt,zs=new B,Bs=new V,Vs=new B,Hs=new gn,Us=new V,Ws=new wn,Gs=class extends Wr{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new V,this.bindMatrixInverse=new V,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Vs),this.boundingBox.expandByPoint(Vs)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Vs),this.boundingSphere.expandByPoint(Vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(r),e.ray.intersectsSphere(Hs)!==!1&&(Us.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Us),(this.boundingBox===null||Ws.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ws)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ls.fromBufferAttribute(r.attributes.skinIndex,e),Rs.fromBufferAttribute(r.attributes.skinWeight,e),Is.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=Rs.getComponent(e);if(r!==0){let i=Ls.getComponent(e);Bs.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(zs.copy(Is).applyMatrix4(Bs),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ks=class extends Zn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},qs=class extends Ut{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Js=new V,Ys=new V,Xs=class e{constructor(e=[],t=[]){this.uuid=Ze(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new V)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new V;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ys;Js.multiplyMatrices(i,t[r]),Js.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qs(t,e,e,w,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new Ks),this.bones.push(i),this.boneInverses.push(new V().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Zs=class extends U{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new V,$s=new V,ec=[],tc=new Zt,nc=new V,rc=new Wr,ic=new gn,ac=class extends Wr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,nc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),tc.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(tc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ic.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ic)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(rc.geometry=this.geometry,rc.material=this.material,rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(n),e.ray.intersectsSphere(ic)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qs),$s.multiplyMatrices(n,Qs),rc.matrixWorld=$s,rc.raycast(e,ec);for(let e=0,n=ec.length;e<n;e++){let n=ec[e];n.instanceId=i,n.object=this,t.push(n)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(r*this.count),r,this.count,k,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},oc=class extends vr{static get type(){return`LineBasicMaterial`}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new B,cc=new B,lc=new V,uc=new wn,dc=new gn,fc=new B,pc=new B,mc=class extends Zn{constructor(e=new Mr,t=new oc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)sc.fromBufferAttribute(t,e-1),cc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=sc.distanceTo(cc);e.setAttribute(`lineDistance`,new wr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=i,e.ray.intersectsSphere(dc)===!1)return;lc.copy(r).invert(),uc.copy(e.ray).applyMatrix4(lc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=hc(this,e,uc,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=hc(this,e,uc,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=hc(this,e,uc,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=hc(this,e,uc,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(sc.fromBufferAttribute(o,i),cc.fromBufferAttribute(o,a),n.distanceSqToSegment(sc,cc,fc,pc)>r)return;fc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(fc);if(!(s<t.near||s>t.far))return{distance:s,point:pc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var gc=new B,_c=new B,vc=class extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)gc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+gc.distanceTo(_c);e.setAttribute(`lineDistance`,new wr(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},yc=class extends mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},bc=class extends vr{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xc=new V,Sc=new wn,Cc=new gn,wc=new B,Tc=class extends Zn{constructor(e=new Mr,t=new bc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(r),Cc.radius+=i,e.ray.intersectsSphere(Cc)===!1)return;xc.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(xc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);wc.fromBufferAttribute(l,n),Ec(wc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)wc.fromBufferAttribute(l,a),Ec(wc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ec(e,t,n,r,i,a,o){let s=Sc.distanceSqToPoint(e);if(s<n){let n=new B;Sc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dc=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,r=[],i=[],a=[],o=new B,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Qe(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Qe(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},kc=class extends Oc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ac=class extends kc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function jc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Mc=new B,Nc=new jc,Pc=new jc,Fc=new jc,Ic=class extends Oc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Mc.subVectors(r[0],r[1]).add(r[0]),c=Mc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Mc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Mc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Nc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Nc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Nc.calc(s),Pc.calc(s),Fc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Rc(e,t){let n=1-e;return n*n*t}function zc(e,t){return 2*(1-e)*e*t}function Bc(e,t){return e*e*t}function Vc(e,t,n,r){return Rc(e,t)+zc(e,n)+Bc(e,r)}function Hc(e,t){let n=1-e;return n*n*n*t}function Uc(e,t){let n=1-e;return 3*n*n*e*t}function Wc(e,t){return 3*(1-e)*e*e*t}function Gc(e,t){return e*e*e*t}function Kc(e,t,n,r,i){return Hc(e,t)+Uc(e,n)+Wc(e,r)+Gc(e,i)}var qc=class extends Oc{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Kc(e,r.x,i.x,a.x,o.x),Kc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Oc{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Kc(e,r.x,i.x,a.x,o.x),Kc(e,r.y,i.y,a.y,o.y),Kc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends Oc{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends Oc{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Oc{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vc(e,r.x,i.x,a.x),Vc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Oc{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vc(e,r.x,i.x,a.x),Vc(e,r.y,i.y,a.y),Vc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Oc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Lc(o,s.x,c.x,l.x,u.x),Lc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}},el=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Ic,CubicBezierCurve:qc,CubicBezierCurve3:Jc,EllipseCurve:kc,LineCurve:Yc,LineCurve3:Xc,QuadraticBezierCurve:Zc,QuadraticBezierCurve3:Qc,SplineCurve:$c}),tl=class extends Oc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new el[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new el[n.type]().fromJSON(n))}return this}},nl=class extends tl{constructor(e){super(),this.type=`Path`,this.currentPoint=new L,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yc(this.currentPoint.clone(),new L(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Zc(this.currentPoint.clone(),new L(e,t),new L(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new qc(this.currentPoint.clone(),new L(e,t),new L(n,r),new L(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new $c([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new kc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rl=class e extends Mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new wr(u,3)),this.setAttribute(`normal`,new wr(d,3)),this.setAttribute(`uv`,new wr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},il=class e extends rl{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},al=class extends nl{constructor(e){super(e),this.uuid=Ze(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new nl().fromJSON(n))}return this}},ol={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=sl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=ml(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return ll(a,o,n,s,c,p,0),o}};function sl(e,t,n,r,i){let a,o;if(i===Ll(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Pl(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Pl(a,e[a],e[a+1],o);return o&&El(o,o.next)&&(Fl(o),o=o.next),o}function cl(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(El(n,n.next)||Tl(n.prev,n,n.next)===0)){if(Fl(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ll(e,t,n,r,i,a,o){if(!e)return;!o&&a&&yl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?dl(e,r,i,a):ul(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Fl(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=fl(cl(e),t,n),ll(e,t,n,r,i,a,2)):o===2&&pl(e,t,n,r,i,a):ll(cl(e),t,n,r,i,a,1);break}}}function ul(e){let t=e.prev,n=e,r=e.next;if(Tl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Cl(i,s,a,c,o,l,m.x,m.y)&&Tl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Tl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=xl(p,m,t,n,r),v=xl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Cl(s,u,c,d,l,f,y.x,y.y)&&Tl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Cl(s,u,c,d,l,f,b.x,b.y)&&Tl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Cl(s,u,c,d,l,f,y.x,y.y)&&Tl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Cl(s,u,c,d,l,f,b.x,b.y)&&Tl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function fl(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!El(i,a)&&Dl(i,r,r.next,a)&&jl(i,a)&&jl(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Fl(r),Fl(r.next),r=e=a),r=r.next}while(r!==e);return cl(r)}function pl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&wl(o,e)){let s=Nl(o,e);o=cl(o,o.next),s=cl(s,s.next),ll(o,t,n,r,i,a,0),ll(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ml(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=sl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Sl(l));for(i.sort(hl),a=0;a<i.length;a++)n=gl(i[a],n);return n}function hl(e,t){return e.x-t.x}function gl(e,t){let n=_l(e,t);if(!n)return t;let r=Nl(n,e);return cl(r,r.next),cl(n,n.next)}function _l(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Cl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),jl(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&vl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function vl(e,t){return Tl(e.prev,e,t.prev)<0&&Tl(t.next,e,e.next)<0}function yl(e,t,n,r){let i=e;do i.z===0&&(i.z=xl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,bl(i)}function bl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function xl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Sl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Cl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function wl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Al(e,t)&&(jl(e,t)&&jl(t,e)&&Ml(e,t)&&(Tl(e.prev,e,t.prev)||Tl(e,t.prev,t))||El(e,t)&&Tl(e.prev,e,e.next)>0&&Tl(t.prev,t,t.next)>0)}function Tl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function El(e,t){return e.x===t.x&&e.y===t.y}function Dl(e,t,n,r){let i=kl(Tl(e,t,n)),a=kl(Tl(e,t,r)),o=kl(Tl(n,r,e)),s=kl(Tl(n,r,t));return!!(i!==a&&o!==s||i===0&&Ol(e,n,t)||a===0&&Ol(e,r,t)||o===0&&Ol(n,e,r)||s===0&&Ol(n,t,r))}function Ol(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function kl(e){return e>0?1:e<0?-1:0}function Al(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Dl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function jl(e,t){return Tl(e.prev,e,e.next)<0?Tl(e,t,e.next)>=0&&Tl(e,e.prev,t)>=0:Tl(e,t,e.prev)<0||Tl(e,e.next,t)<0}function Ml(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Nl(e,t){let n=new Il(e.i,e.x,e.y),r=new Il(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Pl(e,t,n,r){let i=new Il(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Fl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Il(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ll(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Rl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];zl(e),Bl(n,e);let a=e.length;t.forEach(zl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Bl(n,t[e]);let o=ol.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function zl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Bl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Vl=class e extends Mr{constructor(e=new al([new L(.5,.5),new L(-.5,.5),new L(-.5,-.5),new L(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new wr(r,3)),this.setAttribute(`uv`,new wr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Hl:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new B,b=new B,x=new B),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Rl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Rl.isClockWise(t)&&(w[e]=t.reverse())}}let T=Rl.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new L(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new L(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let ee=[],te,M=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);ee.push(te),M=M.concat(te)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);oe(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],te[e],r);oe(i.x,i.y,-n)}}}let ne=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],te[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];se(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];se(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){le(e),le(t),le(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function ce(e,t,i,a){le(e),le(t),le(a),le(t),le(i),le(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function le(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ul(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new el[i.type]().fromJSON(i)),new e(r,t.options)}},Hl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new L(a,o),new L(s,c),new L(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new L(o,1-c),new L(l,1-d),new L(f,1-m),new L(h,1-_)]:[new L(s,1-c),new L(u,1-d),new L(p,1-m),new L(g,1-_)]}};function Ul(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Wl=class e extends Mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new wr(p,3)),this.setAttribute(`normal`,new wr(m,3)),this.setAttribute(`uv`,new wr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gl=class e extends Mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new B,u=new B,d=new B;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new wr(o,3)),this.setAttribute(`normal`,new wr(s,3)),this.setAttribute(`uv`,new wr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kl=class extends vr{static get type(){return`MeshStandardMaterial`}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ql=class extends Kl{static get type(){return`MeshPhysicalMaterial`}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Jl=class extends vr{static get type(){return`MeshToonMaterial`}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.color=new H(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Yl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zl(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ql(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function $l(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var eu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},tu=class extends eu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},nu=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ru=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},iu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Yl(t,this.TimeBufferType),this.values=Yl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yl(e.times,Array),values:Yl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case je:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===je,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};iu.prototype.TimeBufferType=Float32Array,iu.prototype.ValueBufferType=Float32Array,iu.prototype.DefaultInterpolation=Ae;var au=class extends iu{constructor(e,t,n){super(e,t,n)}};au.prototype.ValueTypeName=`bool`,au.prototype.ValueBufferType=Array,au.prototype.DefaultInterpolation=ke,au.prototype.InterpolantFactoryMethodLinear=void 0,au.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends iu{};ou.prototype.ValueTypeName=`color`;var su=class extends iu{};su.prototype.ValueTypeName=`number`;var cu=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)z.slerpFlat(i,0,a,c-o,a,c,s);return i}},lu=class extends iu{InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};lu.prototype.ValueTypeName=`quaternion`,lu.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends iu{constructor(e,t,n){super(e,t,n)}};uu.prototype.ValueTypeName=`string`,uu.prototype.ValueBufferType=Array,uu.prototype.DefaultInterpolation=ke,uu.prototype.InterpolantFactoryMethodLinear=void 0,uu.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends iu{};du.prototype.ValueTypeName=`vector`;var fu=class{constructor(e=``,t=-1,n=[],r=Fe){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ze(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(mu(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(iu.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Zl(o);o=Ql(o,1,c),s=Ql(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new su(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];$l(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new su(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(du,a+`.position`,i,`pos`,r),n(lu,a+`.quaternion`,i,`rot`,r),n(du,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function pu(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return su;case`vector`:case`vector2`:case`vector3`:case`vector4`:return du;case`color`:return ou;case`quaternion`:return lu;case`bool`:case`boolean`:return au;case`string`:return uu}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function mu(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=pu(e.type);if(e.times===void 0){let t=[],n=[];$l(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var hu={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},gu=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},_u=class{constructor(e){this.manager=e===void 0?gu:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_u.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var vu={},yu=class extends Error{constructor(e,t){super(e),this.response=t}},bu=class extends _u{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=hu.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(vu[e]!==void 0){vu[e].push({onLoad:t,onProgress:n,onError:r});return}vu[e]=[],vu[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=vu[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new yu(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{hu.add(e,t);let n=vu[e];delete vu[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=vu[e];if(n===void 0)throw this.manager.itemError(e),t;delete vu[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},xu=class extends _u{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=hu.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=St(`img`);function s(){l(),hu.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Su=class extends _u{constructor(e){super(e)}load(e,t,n,r){let i=new Ut,a=new xu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Cu=class extends Zn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wu=class extends Cu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tu=new V,Eu=new B,Du=new B,Ou=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ku=class extends Ou{constructor(){super(new oi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Xe*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Au=class extends Cu{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ju=new V,Mu=new B,Nu=new B,Pu=class extends Ou{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new L(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Mu.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mu),Nu.copy(n.position),Nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nu),n.updateMatrixWorld(),r.makeTranslation(-Mu.x,-Mu.y,-Mu.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}},Fu=class extends Cu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Iu=class extends Ou{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lu=class extends Cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ru=class{static decodeText(e){if(console.warn(`THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.`),typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},zu=class extends _u{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=hu.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return hu.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),hu.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});hu.add(e,s),i.manager.itemStart(e)}},Bu=`\\[\\]\\.:\\/`,Vu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Hu=`[^\\[\\]\\.:\\/]`,Uu=`[^`+Bu.replace(`\\.`,``)+`]`,Wu=`((?:WC+[\\/:])*)`.replace(`WC`,Hu),Gu=`(WCOD+)?`.replace(`WCOD`,Uu),Ku=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Hu),qu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Hu),Ju=RegExp(`^`+Wu+Gu+Ku+qu+`$`),Yu=[`material`,`materials`,`bones`,`map`],Xu=class{constructor(e,t,n){let r=n||Zu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Vu,``)}static parseTrackName(e){let t=Ju.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Yu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zu.Composite=Xu,Zu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Zu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Zu.prototype.GetterByBindingType=[Zu.prototype._getValue_direct,Zu.prototype._getValue_array,Zu.prototype._getValue_arrayElement,Zu.prototype._getValue_toArray],Zu.prototype.SetterByBindingTypeAndVersioning=[[Zu.prototype._setValue_direct,Zu.prototype._setValue_direct_setNeedsUpdate,Zu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zu.prototype._setValue_array,Zu.prototype._setValue_array_setNeedsUpdate,Zu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zu.prototype._setValue_arrayElement,Zu.prototype._setValue_arrayElement_setNeedsUpdate,Zu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zu.prototype._setValue_fromArray,Zu.prototype._setValue_fromArray_setNeedsUpdate,Zu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qu=class{constructor(e,t,n,r,i){this.isGLBufferAttribute=!0,this.name=``,this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},$u=new V,ed=class{constructor(e,t,n=0,r=1/0){this.ray=new wn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,n=[]){return nd(e,this,n,t),n.sort(td),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)nd(e[r],this,n,t);return n.sort(td),n}};function td(e,t){return e.distance-t.distance}function nd(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)nd(r[e],t,n,!0)}}var rd=class extends vc{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mr;r.setAttribute(`position`,new wr(t,3)),r.setAttribute(`color`,new wr(n,3));let i=new oc({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new H,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var id=`audio/music_chill.m4a`,ad=.22,od=1.5,sd=class{el=null;unlocked=!1;user=!0;platform=!1;hidden=!1;fade=0;get userEnabled(){return this.user}unlock(){this.unlocked||(this.unlocked=!0,this.apply())}setUserEnabled(e){this.user=e,this.apply()}setPlatformMuted(e){this.platform=e,this.apply()}setHidden(e){this.hidden=e,this.apply()}apply(){if(!this.unlocked||!this.user||this.platform||this.hidden){this.el?.pause();return}this.el||(this.el=new Audio(id),this.el.loop=!0,this.el.volume=0);let e=this.el;e.play().catch(()=>{}),clearInterval(this.fade),this.fade=window.setInterval(()=>{e.volume=Math.min(ad,e.volume+ad*.05/od),e.volume>=ad&&clearInterval(this.fade)},50)}},cd={snip1:.7,snip2:.7,snip3:.7,snip4:.7,dryer:.28,shower:.85,sizzle:.35,lather:.75,paint:.9,comb:.9,applause:.5,pop:.45,clamp:.5},ld={dryer:4,shower:5,sizzle:3,lather:2.75,paint:3.6,comb:4},ud=.25,dd=class{ctx=null;user=!0;platform=!1;hidden=!1;lastSnip=0;lastSizzle=0;lastWhoosh=0;lastSquish=0;clips=new Map;held=new Map;unlock(){if(this.ctx)this.ctx.state===`suspended`&&this.audible&&this.ctx.resume();else{try{this.ctx=new AudioContext}catch{}this.apply(),this.loadClips()}}get audible(){return this.user&&!this.platform&&!this.hidden}get userEnabled(){return this.user}setUserEnabled(e){this.user=e,this.apply()}setPlatformMuted(e){this.platform=e,this.apply()}setHidden(e){this.hidden=e,this.apply()}apply(){this.ctx&&(this.audible?this.ctx.resume():this.ctx.suspend())}async loadClips(){let e=this.ctx;e&&await Promise.all(Object.keys(cd).map(async t=>{try{let n=await e.decodeAudioData(await(await fetch(`audio/sfx/${t}.m4a`)).arrayBuffer()),r=n.getChannelData(0),i=0;for(;i<r.length&&Math.abs(r[i])<1e-4;)i++;this.clips.set(t,{buf:n,start:i/n.sampleRate})}catch{}}))}play(e,t=1,n=1,r=0){let i=this.clips.get(e),a=this.ctx;if(!i||!a)return!1;let o=a.createBufferSource(),s=a.createGain();return o.buffer=i.buf,o.playbackRate.value=n,s.gain.value=cd[e]*t,o.connect(s).connect(a.destination),o.start(a.currentTime+r,i.start),!0}loop(e){let t=this.clips.get(e),n=this.ctx,r=ld[e];if(!t||!n||!r)return null;let i=n.createBufferSource(),a=n.createGain();return i.buffer=t.buf,i.loop=!0,i.loopStart=t.start,i.loopEnd=Math.min(t.buf.duration,t.start+r),a.gain.value=0,i.connect(a).connect(n.destination),i.start(0,t.start),{src:i,gain:a}}hold(e){if(!this.ready())return;let t=this.ctx.currentTime,n=this.held.get(e);if(!n){let t=this.loop(e);if(!t){this.fallback(e);return}n={gain:t.gain,until:0},this.held.set(e,n)}n.until<t&&e===`sizzle`&&this.play(`clamp`);let r=n.gain.gain,i=cd[e];r.cancelScheduledValues(t),r.setValueAtTime(r.value,t),r.linearRampToValueAtTime(i,t+.06),r.setValueAtTime(i,t+.1),r.linearRampToValueAtTime(0,t+.1+ud),n.until=t+.1+ud}fallback(e){e===`dryer`?this.whoosh():e===`sizzle`?this.sizzle():this.squish()}snip(e){let t=performance.now();if(!this.ready()||t-this.lastSnip<60||(this.lastSnip=t,navigator.vibrate?.(10),this.play(`snip${1+Math.floor(Math.random()*4)}`,.5+.5*e,.94+Math.random()*.14)))return;let n=this.ctx;this.noise(.045,`highpass`,2600,.6*e,.9+Math.random()*.25);let r=n.currentTime,i=n.createOscillator(),a=n.createGain();i.frequency.value=4300+Math.random()*500,a.gain.setValueAtTime(.05*e,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.06),i.connect(a).connect(n.destination),i.start(r),i.stop(r+.07)}sizzle(){let e=performance.now();!this.ready()||e-this.lastSizzle<110||(this.lastSizzle=e,this.noise(.14,`bandpass`,5500,.12))}whoosh(){let e=performance.now();!this.ready()||e-this.lastWhoosh<120||(this.lastWhoosh=e,this.noise(.2,`lowpass`,1100,.18))}squish(){let e=performance.now();!this.ready()||e-this.lastSquish<150||(this.lastSquish=e,this.noise(.12,`bandpass`,650+Math.random()*400,.22,.7))}water(e){if(!this.ready())return;let t=this.ctx,n=this.loop(`shower`);if(n){let r=t.currentTime,i=n.gain.gain,a=cd.shower;i.setValueAtTime(0,r),i.linearRampToValueAtTime(a,r+.2),i.setValueAtTime(a,r+e-.6),i.linearRampToValueAtTime(0,r+e),n.src.stop(r+e+.05);return}let r=Math.floor(t.sampleRate*e),i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=(Math.random()*2-1)*Math.min(1,e/4e3,(r-e)/8e3);let o=t.createBufferSource();o.buffer=i;let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=2600;let c=t.createGain();c.gain.value=.14,o.connect(s).connect(c).connect(t.destination),o.start()}chime(e){if(!this.ready())return;let t=this.ctx,n=t.currentTime;[523.25,659.25,783.99,1046.5].slice(0,Math.max(1,e+1)).forEach((e,r)=>{let i=n+r*.14,a=t.createOscillator(),o=t.createGain();a.type=`triangle`,a.frequency.value=e,o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.12,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+.5),a.connect(o).connect(t.destination),a.start(i),a.stop(i+.55)}),e===3&&this.play(`applause`,1,1,.3)}pop(){if(!this.ready()||this.play(`pop`,1,.97+Math.random()*.06))return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.frequency.setValueAtTime(620,t),n.frequency.exponentialRampToValueAtTime(980,t+.06),r.gain.setValueAtTime(.08,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.1),n.connect(r).connect(e.destination),n.start(t),n.stop(t+.11)}ready(){return this.audible&&!!this.ctx}noise(e,t,n,r,i=1){let a=this.ctx,o=Math.floor(a.sampleRate*e),s=a.createBuffer(1,o,a.sampleRate),c=s.getChannelData(0);for(let e=0;e<o;e++)c[e]=(Math.random()*2-1)*Math.exp(-e/(o*.25));let l=a.createBufferSource();l.buffer=s,l.playbackRate.value=i;let u=a.createBiquadFilter();u.type=t,u.frequency.value=n;let d=a.createGain();d.gain.value=r,l.connect(u).connect(d).connect(a.destination),l.start()}};function fd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var pd=class extends _u{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new vd(e)}),this.register(function(e){return new yd(e)}),this.register(function(e){return new Od(e)}),this.register(function(e){return new kd(e)}),this.register(function(e){return new Ad(e)}),this.register(function(e){return new xd(e)}),this.register(function(e){return new Sd(e)}),this.register(function(e){return new Cd(e)}),this.register(function(e){return new wd(e)}),this.register(function(e){return new _d(e)}),this.register(function(e){return new Td(e)}),this.register(function(e){return new bd(e)}),this.register(function(e){return new Dd(e)}),this.register(function(e){return new Ed(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new jd(e)}),this.register(function(e){return new Md(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Ru.extractUrlBase(e);a=Ru.resolveURL(t,this.path)}else a=Ru.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new bu(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Nd){try{a[K.KHR_BINARY_GLTF]=new Id(e)}catch(e){r&&r(e);return}i=JSON.parse(a[K.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new lf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case K.KHR_MATERIALS_UNLIT:a[t]=new gd;break;case K.KHR_DRACO_MESH_COMPRESSION:a[t]=new Ld(i,this.dracoLoader);break;case K.KHR_TEXTURE_TRANSFORM:a[t]=new Rd;break;case K.KHR_MESH_QUANTIZATION:a[t]=new zd;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function md(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var K={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},hd=class{constructor(e){this.parser=e,this.name=K.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new H(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],ze);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Lu(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Fu(s),o.distance=c;break;case`spot`:o=new Au(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,ef(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},gd=class{constructor(){this.name=K.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,t,n){let r=[];e.color=new H(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],ze),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Re))}return Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new L(e,e)}return Promise.all(i)}},yd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.dispersion=r.dispersion===void 0?0:r.dispersion,Promise.resolve()}},bd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},xd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new H(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],ze)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,Re)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},Sd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},Cd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new H().setRGB(o[0],o[1],o[2],ze),Promise.all(i)}},wd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new H().setRGB(o[0],o[1],o[2],ze),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,Re)),Promise.all(i)}},Ed=class{constructor(e){this.parser=e,this.name=K.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},Dd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Od=class{constructor(e){this.parser=e,this.name=K.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},kd=class{constructor(e){this.parser=e,this.name=K.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Ad=class{constructor(e){this.parser=e,this.name=K.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},jd=class{constructor(e){this.name=K.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Md=class{constructor(e){this.name=K.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Ud.TRIANGLES&&e.mode!==Ud.TRIANGLE_STRIP&&e.mode!==Ud.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new V,n=new B,a=new z,s=new B(1,1,1),c=new ac(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Zs(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Zn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Nd=`glTF`,Pd=12,Fd={JSON:1313821514,BIN:5130562},Id=class{constructor(e){this.name=K.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pd),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nd)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Pd,i=new DataView(e,Pd),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Fd.JSON){let r=new Uint8Array(e,Pd+a,t);this.content=n.decode(r)}else if(r===Fd.BIN){let n=Pd+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Ld=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=K.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Jd[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Jd[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Wd[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,ze,n)})})}},Rd=class{constructor(){this.name=K.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},zd=class{constructor(){this.name=K.KHR_MESH_QUANTIZATION}},Bd=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Vd=new z,Hd=class extends Bd{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Vd.fromArray(i).normalize().toArray(i),i}},Ud={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wd={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gd={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},Kd={33071:n,33648:r,10497:t},qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jd={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Yd={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Xd={CUBICSPLINE:void 0,LINEAR:Ae,STEP:ke},Zd={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Qd(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Kl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function $d(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function ef(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function tf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function nf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function rf(e){let t,n=e.extensions&&e.extensions[K.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+af(n.attributes):e.indices+`:`+af(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+af(e.targets[n]);return t}function af(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function of(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function sf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var cf=new V,lf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new md,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Su(this.options.manager):new zu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bu(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return $d(i,a,r),ef(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[K.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Ru.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=qd[r.type],t=Wd[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new U(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=qd[r.type],o=Wd[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Ns(f,u/s),t.cache.add(n,c)),p=new Fs(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new U(f,a,d);if(r.sparse!==void 0){let t=qd.SCALAR,n=Wd[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new U(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Gd[n.magFilter]||1006,t.minFilter=Gd[n.minFilter]||1008,t.wrapS=Kd[n.wrapS]||1e3,t.wrapT=Kd[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Ut(e);t.needsUpdate=!0,n(t)}),t.load(Ru.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),ef(e,a),e.userData.mimeType=a.mimeType||sf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[K.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[K.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[K.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new bc,vr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new oc,vr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Kl}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[K.KHR_MATERIALS_UNLIT]){let e=r[K.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new H(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],ze),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Re)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Zd.OPAQUE;if(l===Zd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Zd.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==yr&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new L(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==yr&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==yr){let e=i.emissiveFactor;o.emissive=new H().setRGB(e[0],e[1],e[2],ze)}return i.emissiveTexture!==void 0&&a!==yr&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Re)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),ef(n,i),t.associations.set(n,{materials:e}),i.extensions&&$d(r,n,i),n})}createUniqueName(e){let t=Zu.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[K.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return df(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=rf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[K.KHR_DRACO_MESH_COMPRESSION]?i(o):df(new Mr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Qd(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Ud.TRIANGLES||u.mode===Ud.TRIANGLE_STRIP||u.mode===Ud.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Gs(l,f):new Wr(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Ud.TRIANGLE_STRIP?d.geometry=fd(d.geometry,1):u.mode===Ud.TRIANGLE_FAN&&(d.geometry=fd(d.geometry,2));else if(u.mode===Ud.LINES)d=new vc(l,f);else if(u.mode===Ud.LINE_STRIP)d=new mc(l,f);else if(u.mode===Ud.LINE_LOOP)d=new yc(l,f);else if(u.mode===Ud.POINTS)d=new Tc(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&nf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),ef(d,i),u.extensions&&$d(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&$d(r,c[0],i),c[0];let l=new bs;i.extensions&&$d(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new oi(yt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Mi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ef(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new V;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Xs(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new fu(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,cf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Ks:t.length>1?new bs:t.length===1?t[0]:new Zn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),ef(o,i),i.extensions&&$d(n,o,i),i.matrix!==void 0){let e=new V;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new bs;n.name&&(i.name=r.createUniqueName(n.name)),ef(i,n),n.extensions&&$d(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof vr||e instanceof Ut)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];Yd[i.path]===Yd.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(Yd[i.path]){case Yd.weights:c=su;break;case Yd.rotation:c=lu;break;case Yd.position:case Yd.scale:c=du;break;default:switch(n.itemSize){case 1:c=su;break;default:c=du}}let l=r.interpolation===void 0?Ae:Xd[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+Yd[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=of(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof lu?Hd:Bd)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uf(e,t,n){let r=t.attributes,i=new Zt;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new B(t[0],t[1],t[2]),new B(a[0],a[1],a[2])),e.normalized){let t=of(Wd[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new B,t=new B;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=of(Wd[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function df(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Jd[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return kt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`),ef(e,t),uf(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:tf(e,t.targets,n)})}var ff=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),pf=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),mf=class extends Zn{constructor(e){super(),this.weight=0,this.isBinary=!1,this.overrideBlink=`none`,this.overrideLookAt=`none`,this.overrideMouth=`none`,this._binds=[],this.name=`VRMExpression_${e}`,this.expressionName=e,this.type=`VRMExpression`,this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink===`block`?+(0<this.outputWeight):this.overrideBlink===`blend`?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt===`block`?+(0<this.outputWeight):this.overrideLookAt===`blend`?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth===`block`?+(0<this.outputWeight):this.overrideMouth===`blend`?this.outputWeight:0}get outputWeight(){return this.isBinary?+(this.weight>.5):this.weight}addBind(e){this._binds.push(e)}deleteBind(e){let t=this._binds.indexOf(e);t>=0&&this._binds.splice(t,1)}applyWeight(e){let t=this.outputWeight;t*=e?.multiplier??1,this.isBinary&&t<1&&(t=0),this._binds.forEach(e=>e.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(e=>e.clearAppliedWeight())}};function hf(e,t,n){let r=e.parser.json,i=r.nodes?.[t];if(i==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${t}] of glTF but the node doesn't exist`),null;let a=i.mesh;if(a==null)return null;let o=r.meshes?.[a];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let s=o.primitives.length,c=[];return n.traverse(e=>{c.length<s&&e.isMesh&&c.push(e)}),c}function gf(e,t){return pf(this,null,function*(){return hf(e,t,yield e.parser.getDependency(`node`,t))})}function _f(e){return pf(this,null,function*(){let t=yield e.parser.getDependencies(`node`),n=new Map;return t.forEach((t,r)=>{let i=hf(e,r,t);i!=null&&n.set(r,i)}),n})}var vf={Aa:`aa`,Ih:`ih`,Ou:`ou`,Ee:`ee`,Oh:`oh`,Blink:`blink`,Happy:`happy`,Angry:`angry`,Sad:`sad`,Relaxed:`relaxed`,LookUp:`lookUp`,Surprised:`surprised`,LookDown:`lookDown`,LookLeft:`lookLeft`,LookRight:`lookRight`,BlinkLeft:`blinkLeft`,BlinkRight:`blinkRight`,Neutral:`neutral`};function yf(e){return Math.max(Math.min(e,1),0)}var bf=class e{constructor(){this.blinkExpressionNames=[`blink`,`blinkLeft`,`blinkRight`],this.lookAtExpressionNames=[`lookLeft`,`lookRight`,`lookUp`,`lookDown`],this.mouthExpressionNames=[`aa`,`ee`,`ih`,`oh`,`ou`],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(vf));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)&&(e[n]=r)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(vf));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)||(e[n]=r)}),e}copy(e){return this._expressions.concat().forEach(e=>{this.unregisterExpression(e)}),e._expressions.forEach(e=>{this.registerExpression(e)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new e().copy(this)}getExpression(e){return this._expressionMap[e]??null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn(`VRMExpressionManager: The specified expressions is not registered`),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){return this.getExpression(e)?.weight??null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=yf(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(e=>{e.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,n-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},xf={Color:`color`,EmissionColor:`emissionColor`,ShadeColor:`shadeColor`,MatcapColor:`matcapColor`,RimColor:`rimColor`,OutlineColor:`outlineColor`},Sf={_Color:xf.Color,_EmissionColor:xf.EmissionColor,_ShadeColor:xf.ShadeColor,_RimColor:xf.RimColor,_OutlineColor:xf.OutlineColor},Cf=new H,wf=class e{constructor({material:e,type:t,targetValue:n,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=r??1;let i=this._initColorBindState(),a=this._initAlphaBindState();this._state={color:i,alpha:a}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:n,deltaValue:r}=t;this.material[n]?.add(Cf.copy(r).multiplyScalar(e))}if(n!=null){let{propertyName:t,deltaValue:r}=n;this.material[t]!=null&&(this.material[t]+=r*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:t,initialValue:n}=e;this.material[t]?.copy(n)}if(t!=null){let{propertyName:e,initialValue:n}=t;this.material[e]!=null&&(this.material[e]=n)}}_initColorBindState(){let{material:e,type:t,targetValue:n}=this,r=this._getPropertyNameMap()?.[t]?.[0]??null;if(r==null)return console.warn(`Tried to add a material color bind to the material ${e.name??`(no name)`}, the type ${t} but the material or the type is not supported.`),null;let i=e[r].clone();return{propertyName:r,initialValue:i,deltaValue:new H(n.r-i.r,n.g-i.g,n.b-i.b)}}_initAlphaBindState(){let{material:e,type:t,targetAlpha:n}=this,r=this._getPropertyNameMap()?.[t]?.[1]??null;if(r==null&&n!==1)return console.warn(`Tried to add a material alpha bind to the material ${e.name??`(no name)`}, the type ${t} but the material or the type does not support alpha.`),null;if(r==null)return null;let i=e[r];return{propertyName:r,initialValue:i,deltaValue:n-i}}_getPropertyNameMap(){return Object.entries(e._propertyNameMapMap).find(([e])=>this.material[e]===!0)?.[1]??null}};wf._propertyNameMapMap={isMeshStandardMaterial:{color:[`color`,`opacity`],emissionColor:[`emissive`,null]},isMeshBasicMaterial:{color:[`color`,`opacity`]},isMToonMaterial:{color:[`color`,`opacity`],emissionColor:[`emissive`,null],outlineColor:[`outlineColorFactor`,null],matcapColor:[`matcapFactor`,null],rimColor:[`parametricRimColorFactor`,null],shadeColor:[`shadeColorFactor`,null]}};var Tf=wf,Ef=class{constructor({primitives:e,index:t,weight:n}){this.primitives=e,this.index=t,this.weight=n}applyWeight(e){this.primitives.forEach(t=>{t.morphTargetInfluences?.[this.index]!=null&&(t.morphTargetInfluences[this.index]+=this.weight*e)})}clearAppliedWeight(){this.primitives.forEach(e=>{e.morphTargetInfluences?.[this.index]!=null&&(e.morphTargetInfluences[this.index]=0)})}},Df=new L,Of=class e{constructor({material:t,scale:n,offset:r}){this.material=t,this.scale=n,this.offset=r;let i=Object.entries(e._propertyNamesMap).find(([e])=>t[e]===!0)?.[1];i==null?(console.warn(`Tried to add a texture transform bind to the material ${t.name??`(no name)`} but the material is not supported.`),this._properties=[]):(this._properties=[],i.forEach(e=>{let i=t[e]?.clone();if(!i)return null;t[e]=i;let a=i.offset.clone(),o=i.repeat.clone(),s=r.clone().sub(a),c=n.clone().sub(o);this._properties.push({name:e,initialOffset:a,deltaOffset:s,initialScale:o,deltaScale:c})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(Df.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Df.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Of._propertyNamesMap={isMeshStandardMaterial:[`map`,`emissiveMap`,`bumpMap`,`normalMap`,`displacementMap`,`roughnessMap`,`metalnessMap`,`alphaMap`],isMeshBasicMaterial:[`map`,`specularMap`,`alphaMap`],isMToonMaterial:[`map`,`normalMap`,`emissiveMap`,`shadeMultiplyTexture`,`rimMultiplyTexture`,`outlineWidthMultiplyTexture`,`uvAnimationMaskTexture`]};var kf=Of,Af=new Set([`1.0`,`1.0-beta`]),jf=class e{get name(){return`VRMExpressionLoaderPlugin`}constructor(e){this.parser=e}afterRoot(e){return pf(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return pf(this,null,function*(){return(yield this._v1Import(e))||(yield this._v0Import(e))||null})}_v1Import(e){return pf(this,null,function*(){let t=this.parser.json;if(t.extensionsUsed?.indexOf(`VRMC_vrm`)===-1)return null;let n=t.extensions?.VRMC_vrm;if(!n)return null;let r=n.specVersion;if(!Af.has(r))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${r}"`),null;let i=n.expressions;if(!i)return null;let a=new Set(Object.values(vf)),o=new Map;i.preset!=null&&Object.entries(i.preset).forEach(([e,t])=>{if(t!=null){if(!a.has(e)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${e}" detected. Ignoring the expression`);return}o.set(e,t)}}),i.custom!=null&&Object.entries(i.custom).forEach(([e,t])=>{if(a.has(e)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${e}". Ignoring the expression`);return}o.set(e,t)});let s=new bf;return yield Promise.all(Array.from(o.entries()).map(t=>pf(this,[t],function*([t,n]){var r,i,a;let o=new mf(t);if(e.scene.add(o),o.isBinary=n.isBinary??!1,o.overrideBlink=n.overrideBlink??`none`,o.overrideLookAt=n.overrideLookAt??`none`,o.overrideMouth=n.overrideMouth??`none`,(r=n.morphTargetBinds)==null||r.forEach(t=>pf(this,null,function*(){if(t.node===void 0||t.index===void 0)return;let r=yield gf(e,t.node),i=t.index;if(!r.every(e=>Array.isArray(e.morphTargetInfluences)&&i<e.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${n.name} attempts to index morph #${i} but not found.`);return}o.addBind(new Ef({primitives:r,index:i,weight:t.weight??1}))})),n.materialColorBinds||n.textureTransformBinds){let t=[];e.scene.traverse(e=>{let n=e.material;n&&(Array.isArray(n)?t.push(...n):t.push(n))}),(i=n.materialColorBinds)==null||i.forEach(e=>pf(this,null,function*(){t.filter(t=>{let n=this.parser.associations.get(t)?.materials;return e.material===n}).forEach(t=>{o.addBind(new Tf({material:t,type:e.type,targetValue:new H().fromArray(e.targetValue),targetAlpha:e.targetValue[3]}))})})),(a=n.textureTransformBinds)==null||a.forEach(e=>pf(this,null,function*(){t.filter(t=>{let n=this.parser.associations.get(t)?.materials;return e.material===n}).forEach(t=>{o.addBind(new kf({material:t,offset:new L().fromArray(e.offset??[0,0]),scale:new L().fromArray(e.scale??[1,1])}))})}))}s.registerExpression(o)}))),s})}_v0Import(t){return pf(this,null,function*(){let n=this.parser.json,r=n.extensions?.VRM;if(!r)return null;let i=r.blendShapeMaster;if(!i)return null;let a=new bf,o=i.blendShapeGroups;if(!o)return a;let s=new Set;return yield Promise.all(o.map(r=>pf(this,null,function*(){let i=r.presetName,o=(i!=null&&e.v0v1PresetNameMap[i]||null)??r.name;if(o==null){console.warn(`VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression`);return}if(s.has(o)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${i} has duplicated entries. Ignoring the expression`);return}s.add(o);let c=new mf(o);t.scene.add(c),c.isBinary=r.isBinary??!1,r.binds&&r.binds.forEach(e=>pf(this,null,function*(){var i;if(e.mesh===void 0||e.index===void 0)return;let a=[];if((i=n.nodes)==null||i.forEach((t,n)=>{t.mesh===e.mesh&&a.push(n)}),a.length===0){console.warn(`VRMExpressionLoaderPlugin: ${r.name} attempts to bind a morph target to the mesh #${e.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}let o=e.index;yield Promise.all(a.map(n=>pf(this,null,function*(){let i=yield gf(t,n);if(!i.every(e=>Array.isArray(e.morphTargetInfluences)&&o<e.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${r.name} attempts to index ${o}th morph but not found.`);return}c.addBind(new Ef({primitives:i,index:o,weight:.01*(e.weight??100)}))})))}));let l=r.materialValues;l&&l.length!==0&&l.forEach(e=>{if(e.materialName===void 0||e.propertyName===void 0||e.targetValue===void 0)return;let n=[];t.scene.traverse(t=>{if(t.material){let r=t.material;Array.isArray(r)?n.push(...r.filter(t=>(t.name===e.materialName||t.name===e.materialName+` (Outline)`)&&n.indexOf(t)===-1)):r.name===e.materialName&&n.indexOf(r)===-1&&n.push(r)}});let r=e.propertyName;n.forEach(t=>{if(r===`_MainTex_ST`){let n=new L(e.targetValue[0],e.targetValue[1]),r=new L(e.targetValue[2],e.targetValue[3]);r.y=1-r.y-n.y,c.addBind(new kf({material:t,scale:n,offset:r}));return}let n=Sf[r];if(n){c.addBind(new Tf({material:t,type:n,targetValue:new H().fromArray(e.targetValue),targetAlpha:e.targetValue[3]}));return}console.warn(r+` is not supported`)})}),a.registerExpression(c)}))),a})}};jf.v0v1PresetNameMap={a:`aa`,e:`ee`,i:`ih`,o:`oh`,u:`ou`,blink:`blink`,joy:`happy`,angry:`angry`,sorrow:`sad`,fun:`relaxed`,lookup:`lookUp`,lookdown:`lookDown`,lookleft:`lookLeft`,lookright:`lookRight`,blink_l:`blinkLeft`,blink_r:`blinkRight`,neutral:`neutral`};var Mf=jf,Nf=class e{constructor(t,n){this._firstPersonOnlyLayer=e.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=e.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=t,this.meshAnnotations=n}copy(e){if(this.humanoid!==e.humanoid)throw Error(`VRMFirstPerson: humanoid must be same in order to copy`);return this.meshAnnotations=e.meshAnnotations.map(e=>({meshes:e.meshes.concat(),type:e.type})),this}clone(){return new e(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:t=e.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:n=e.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||=(this._firstPersonOnlyLayer=t,this._thirdPersonOnlyLayer=n,this.meshAnnotations.forEach(e=>{e.meshes.forEach(t=>{e.type===`firstPersonOnly`?(t.layers.set(this._firstPersonOnlyLayer),t.traverse(e=>e.layers.set(this._firstPersonOnlyLayer))):e.type===`thirdPersonOnly`?(t.layers.set(this._thirdPersonOnlyLayer),t.traverse(e=>e.layers.set(this._thirdPersonOnlyLayer))):e.type===`auto`&&this._createHeadlessModel(t)})}),!0)}_excludeTriangles(e,t,n,r){let i=0;if(t!=null&&t.length>0)for(let a=0;a<e.length;a+=3){let o=e[a],s=e[a+1],c=e[a+2],l=t[o],u=n[o];if(l[0]>0&&r.includes(u[0])||l[1]>0&&r.includes(u[1])||l[2]>0&&r.includes(u[2])||l[3]>0&&r.includes(u[3]))continue;let d=t[s],f=n[s];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;let p=t[c],m=n[c];p[0]>0&&r.includes(m[0])||p[1]>0&&r.includes(m[1])||p[2]>0&&r.includes(m[2])||p[3]>0&&r.includes(m[3])||(e[i++]=o,e[i++]=s,e[i++]=c)}return i}_createErasedMesh(e,t){let n=new Gs(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let r=n.geometry,i=r.getAttribute(`skinIndex`),a=i instanceof Qu?[]:i.array,o=[];for(let e=0;e<a.length;e+=4)o.push([a[e],a[e+1],a[e+2],a[e+3]]);let s=r.getAttribute(`skinWeight`),c=s instanceof Qu?[]:s.array,l=[];for(let e=0;e<c.length;e+=4)l.push([c[e],c[e+1],c[e+2],c[e+3]]);let u=r.getIndex();if(!u)throw Error(`The geometry doesn't have an index buffer`);let d=Array.from(u.array),f=this._excludeTriangles(d,l,o,t),p=[];for(let e=0;e<f;e++)p[e]=d[e];return r.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Xs(e.skeleton.bones,e.skeleton.boneInverses),new V),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((e,t)=>{this._isEraseTarget(e)&&n.push(t)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let r=this._createErasedMesh(t,n);e.add(r)}_createHeadlessModel(e){if(e.type===`Group`){if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(e=>e.layers.set(this._thirdPersonOnlyLayer));else{let t=new bs;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(e=>e.type===`SkinnedMesh`).forEach(e=>{let n=e;this._createHeadlessModelForSkinnedMesh(t,n)})}}else if(e.type===`SkinnedMesh`){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(e=>e.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode(`head`)?!0:e.parent?this._isEraseTarget(e.parent):!1}};Nf.DEFAULT_FIRSTPERSON_ONLY_LAYER=9,Nf.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Pf=Nf,Ff=new Set([`1.0`,`1.0-beta`]),If=class{get name(){return`VRMFirstPersonLoaderPlugin`}constructor(e){this.parser=e}afterRoot(e){return pf(this,null,function*(){let t=e.userData.vrmHumanoid;if(t!==null){if(t===void 0)throw Error(`VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first`);e.userData.vrmFirstPerson=yield this._import(e,t)}})}_import(e,t){return pf(this,null,function*(){return t==null?null:(yield this._v1Import(e,t))||(yield this._v0Import(e,t))||null})}_v1Import(e,t){return pf(this,null,function*(){let n=this.parser.json;if(n.extensionsUsed?.indexOf(`VRMC_vrm`)===-1)return null;let r=n.extensions?.VRMC_vrm;if(!r)return null;let i=r.specVersion;if(!Ff.has(i))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${i}"`),null;let a=r.firstPerson,o=[],s=yield _f(e);return Array.from(s.entries()).forEach(([e,t])=>{let n=(a?.meshAnnotations)?.find(t=>t.node===e);o.push({meshes:t,type:n?.type??`auto`})}),new Pf(t,o)})}_v0Import(e,t){return pf(this,null,function*(){let n=this.parser.json,r=n.extensions?.VRM;if(!r)return null;let i=r.firstPerson;if(!i)return null;let a=[],o=yield _f(e);return Array.from(o.entries()).forEach(([e,t])=>{let r=n.nodes[e],o=i.meshAnnotations?i.meshAnnotations.find(e=>e.mesh===r.mesh):void 0;a.push({meshes:t,type:this._convertV0FlagToV1Type(o?.firstPersonFlag)})}),new Pf(t,a)})}_convertV0FlagToV1Type(e){return e===`FirstPersonOnly`?`firstPersonOnly`:e===`ThirdPersonOnly`?`thirdPersonOnly`:e===`Both`?`both`:`auto`}},Lf=new B,Rf=new B,zf=new z,Bf=class extends bs{constructor(e){super(),this.vrmHumanoid=e,this._boneAxesMap=new Map,Object.values(e.humanBones).forEach(e=>{let t=new rd(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(e=>{e.geometry.dispose(),e.material.dispose()})}updateMatrixWorld(e){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Lf,zf,Rf);let n=Lf.set(.1,.1,.1).divide(Rf);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(e)}},Vf=`hips.spine.chest.upperChest.neck.head.leftEye.rightEye.jaw.leftUpperLeg.leftLowerLeg.leftFoot.leftToes.rightUpperLeg.rightLowerLeg.rightFoot.rightToes.leftShoulder.leftUpperArm.leftLowerArm.leftHand.rightShoulder.rightUpperArm.rightLowerArm.rightHand.leftThumbMetacarpal.leftThumbProximal.leftThumbDistal.leftIndexProximal.leftIndexIntermediate.leftIndexDistal.leftMiddleProximal.leftMiddleIntermediate.leftMiddleDistal.leftRingProximal.leftRingIntermediate.leftRingDistal.leftLittleProximal.leftLittleIntermediate.leftLittleDistal.rightThumbMetacarpal.rightThumbProximal.rightThumbDistal.rightIndexProximal.rightIndexIntermediate.rightIndexDistal.rightMiddleProximal.rightMiddleIntermediate.rightMiddleDistal.rightRingProximal.rightRingIntermediate.rightRingDistal.rightLittleProximal.rightLittleIntermediate.rightLittleDistal`.split(`.`),Hf={hips:null,spine:`hips`,chest:`spine`,upperChest:`chest`,neck:`upperChest`,head:`neck`,leftEye:`head`,rightEye:`head`,jaw:`head`,leftUpperLeg:`hips`,leftLowerLeg:`leftUpperLeg`,leftFoot:`leftLowerLeg`,leftToes:`leftFoot`,rightUpperLeg:`hips`,rightLowerLeg:`rightUpperLeg`,rightFoot:`rightLowerLeg`,rightToes:`rightFoot`,leftShoulder:`upperChest`,leftUpperArm:`leftShoulder`,leftLowerArm:`leftUpperArm`,leftHand:`leftLowerArm`,rightShoulder:`upperChest`,rightUpperArm:`rightShoulder`,rightLowerArm:`rightUpperArm`,rightHand:`rightLowerArm`,leftThumbMetacarpal:`leftHand`,leftThumbProximal:`leftThumbMetacarpal`,leftThumbDistal:`leftThumbProximal`,leftIndexProximal:`leftHand`,leftIndexIntermediate:`leftIndexProximal`,leftIndexDistal:`leftIndexIntermediate`,leftMiddleProximal:`leftHand`,leftMiddleIntermediate:`leftMiddleProximal`,leftMiddleDistal:`leftMiddleIntermediate`,leftRingProximal:`leftHand`,leftRingIntermediate:`leftRingProximal`,leftRingDistal:`leftRingIntermediate`,leftLittleProximal:`leftHand`,leftLittleIntermediate:`leftLittleProximal`,leftLittleDistal:`leftLittleIntermediate`,rightThumbMetacarpal:`rightHand`,rightThumbProximal:`rightThumbMetacarpal`,rightThumbDistal:`rightThumbProximal`,rightIndexProximal:`rightHand`,rightIndexIntermediate:`rightIndexProximal`,rightIndexDistal:`rightIndexIntermediate`,rightMiddleProximal:`rightHand`,rightMiddleIntermediate:`rightMiddleProximal`,rightMiddleDistal:`rightMiddleIntermediate`,rightRingProximal:`rightHand`,rightRingIntermediate:`rightRingProximal`,rightRingDistal:`rightRingIntermediate`,rightLittleProximal:`rightHand`,rightLittleIntermediate:`rightLittleProximal`,rightLittleDistal:`rightLittleIntermediate`};function Uf(e){return e.invert?e.invert():e.inverse(),e}var Wf=new B,Gf=new z,Kf=class{constructor(e){this.humanBones=e,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let e={};return Object.keys(this.humanBones).forEach(t=>{let n=t,r=this.getBoneNode(n);r&&(Wf.copy(r.position),Gf.copy(r.quaternion),e[n]={position:Wf.toArray(),rotation:Gf.toArray()})}),e}getPose(){let e={};return Object.keys(this.humanBones).forEach(t=>{let n=t,r=this.getBoneNode(n);if(!r)return;Wf.set(0,0,0),Gf.identity();let i=this.restPose[n];i?.position&&Wf.fromArray(i.position).negate(),i?.rotation&&Uf(Gf.fromArray(i.rotation)),Wf.add(r.position),Gf.premultiply(r.quaternion),e[n]={position:Wf.toArray(),rotation:Gf.toArray()}}),e}setPose(e){Object.entries(e).forEach(([e,t])=>{let n=e,r=this.getBoneNode(n);if(!r)return;let i=this.restPose[n];i&&(t?.position&&(r.position.fromArray(t.position),i.position&&r.position.add(Wf.fromArray(i.position))),t?.rotation&&(r.quaternion.fromArray(t.rotation),i.rotation&&r.quaternion.multiply(Gf.fromArray(i.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{let n=this.getBoneNode(e);n&&(t?.position&&n.position.fromArray(t.position),t?.rotation&&n.quaternion.fromArray(t.rotation))})}getBone(e){return this.humanBones[e]??void 0}getBoneNode(e){return this.humanBones[e]?.node??null}},qf=new B,Jf=new z,Yf=new B,Xf=class e extends Kf{static _setupTransforms(e){let t=new Zn;t.name=`VRMHumanoidRig`;let n={},r={},i={},a={};Vf.forEach(t=>{var o;let s=e.getBoneNode(t);if(s){let e=new B,c=new z;s.updateWorldMatrix(!0,!1),s.matrixWorld.decompose(e,c,qf),n[t]=e,r[t]=c,i[t]=s.quaternion.clone();let l=new z;(o=s.parent)==null||o.matrixWorld.decompose(qf,l,qf),a[t]=l}});let o={};return Vf.forEach(r=>{let i=e.getBoneNode(r);if(i){let e=n[r],a=r,s;for(;s==null&&(a=Hf[a],a!=null);)s=n[a];let c=new Zn;c.name=`Normalized_`+i.name,(a?o[a]?.node:t).add(c),c.position.copy(e),s&&c.position.sub(s),o[r]={node:c}}}),{rigBones:o,root:t,parentWorldRotations:a,boneRotations:i}}constructor(t){let{rigBones:n,root:r,parentWorldRotations:i,boneRotations:a}=e._setupTransforms(t);super(n),this.original=t,this.root=r,this._parentWorldRotations=i,this._boneRotations=a}update(){Vf.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),r=this._parentWorldRotations[e],i=Jf.copy(r).invert(),a=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(r).premultiply(i).multiply(a),e===`hips`){let e=n.getWorldPosition(Yf);t.parent.updateWorldMatrix(!0,!1);let r=t.parent.matrixWorld,i=e.applyMatrix4(r.invert());t.position.copy(i)}}})}},Zf=class e{get restPose(){return console.warn(`VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead.`),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){this.autoUpdateHumanBones=t?.autoUpdateHumanBones??!0,this._rawHumanBones=new Kf(e),this._normalizedHumanBones=new Xf(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Kf(e.humanBones),this._normalizedHumanBones=new Xf(this._rawHumanBones),this}clone(){return new e(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn(`VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead.`),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn(`VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead.`),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn(`VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead.`),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn(`VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead.`),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn(`VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead.`),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn(`VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead.`),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Qf={Hips:`hips`,Spine:`spine`,Head:`head`,LeftUpperLeg:`leftUpperLeg`,LeftLowerLeg:`leftLowerLeg`,LeftFoot:`leftFoot`,RightUpperLeg:`rightUpperLeg`,RightLowerLeg:`rightLowerLeg`,RightFoot:`rightFoot`,LeftUpperArm:`leftUpperArm`,LeftLowerArm:`leftLowerArm`,LeftHand:`leftHand`,RightUpperArm:`rightUpperArm`,RightLowerArm:`rightLowerArm`,RightHand:`rightHand`},$f=new Set([`1.0`,`1.0-beta`]),ep={leftThumbProximal:`leftThumbMetacarpal`,leftThumbIntermediate:`leftThumbProximal`,rightThumbProximal:`rightThumbMetacarpal`,rightThumbIntermediate:`rightThumbProximal`},tp=class{get name(){return`VRMHumanoidLoaderPlugin`}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot,this.autoUpdateHumanBones=t?.autoUpdateHumanBones}afterRoot(e){return pf(this,null,function*(){e.userData.vrmHumanoid=yield this._import(e)})}_import(e){return pf(this,null,function*(){return(yield this._v1Import(e))||(yield this._v0Import(e))||null})}_v1Import(e){return pf(this,null,function*(){let t=this.parser.json;if(t.extensionsUsed?.indexOf(`VRMC_vrm`)===-1)return null;let n=t.extensions?.VRMC_vrm;if(!n)return null;let r=n.specVersion;if(!$f.has(r))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${r}"`),null;let i=n.humanoid;if(!i)return null;let a=i.humanBones.leftThumbIntermediate!=null||i.humanBones.rightThumbIntermediate!=null,o={};i.humanBones!=null&&(yield Promise.all(Object.entries(i.humanBones).map(e=>pf(this,[e],function*([e,t]){let n=e,r=t.node;if(a){let e=ep[n];e!=null&&(n=e)}let i=yield this.parser.getDependency(`node`,r);if(i==null){console.warn(`A glTF node bound to the humanoid bone ${n} (index = ${r}) does not exist`);return}o[n]={node:i}}))));let s=new Zf(this._ensureRequiredBonesExist(o),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(s.normalizedHumanBonesRoot),this.helperRoot){let e=new Bf(s);this.helperRoot.add(e),e.renderOrder=this.helperRoot.renderOrder}return s})}_v0Import(e){return pf(this,null,function*(){let t=this.parser.json.extensions?.VRM;if(!t)return null;let n=t.humanoid;if(!n)return null;let r={};n.humanBones!=null&&(yield Promise.all(n.humanBones.map(e=>pf(this,null,function*(){let t=e.bone,n=e.node;if(t==null||n==null)return;if(n<0){console.warn(`A glTF node index for the humanoid bone ${t} is negative (${n}), ignoring this bone.`);return}let i=yield this.parser.getDependency(`node`,n);if(i==null){console.warn(`A glTF node bound to the humanoid bone ${t} (index = ${n}) does not exist`);return}let a=ep[t]??t;if(r[a]!=null){console.warn(`Multiple bone entries for ${a} detected (index = ${n}), ignoring duplicated entries.`);return}r[a]={node:i}}))));let i=new Zf(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(i.normalizedHumanBonesRoot),this.helperRoot){let e=new Bf(i);this.helperRoot.add(e),e.renderOrder=this.helperRoot.renderOrder}return i})}_ensureRequiredBonesExist(e){let t=Object.values(Qf).filter(t=>e[t]==null);if(t.length>0)throw Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${t.join(`, `)}`);return e}},np=class extends Mr{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new U(new Float32Array(195),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,e=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let e=0;e<64;e++){let t=e/63*this._currentTheta;this._attrPos.setXYZ(e+1,this._currentRadius*Math.sin(t),0,this._currentRadius*Math.cos(t))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<63;e++)this._attrIndex.setXYZ(e*3,0,e+1,e+2);this._attrIndex.needsUpdate=!0}},rp=class extends Mr{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new B,this._currentTail=new B,this._attrPos=new U(new Float32Array(294),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},ip=new z,ap=new z,op=new B,sp=new B,cp=Math.sqrt(2)/2,lp=new z(0,0,-cp,cp),up=new B(0,1,0),dp=class extends bs{constructor(e){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=e;{let e=new np;e.radius=.5;let t=new yr({color:65280,transparent:!0,opacity:.5,side:2,depthTest:!1,depthWrite:!1});this._meshPitch=new Wr(e,t),this.add(this._meshPitch)}{let e=new np;e.radius=.5;let t=new yr({color:16711680,transparent:!0,opacity:.5,side:2,depthTest:!1,depthWrite:!1});this._meshYaw=new Wr(e,t),this.add(this._meshYaw)}{let e=new rp;e.radius=.1;let t=new oc({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new vc(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(e){let t=yt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=t,this._meshYaw.geometry.update();let n=yt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=n,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(op),this.vrmLookAt.getLookAtWorldQuaternion(ip),ip.multiply(this.vrmLookAt.getFaceFrontQuaternion(ap)),this._meshYaw.position.copy(op),this._meshYaw.quaternion.copy(ip),this._meshPitch.position.copy(op),this._meshPitch.quaternion.copy(ip),this._meshPitch.quaternion.multiply(ap.setFromAxisAngle(up,t)),this._meshPitch.quaternion.multiply(lp);let{target:r,autoUpdate:i}=this.vrmLookAt;r!=null&&i&&(r.getWorldPosition(sp).sub(op),this._lineTarget.geometry.tail.copy(sp),this._lineTarget.geometry.update(),this._lineTarget.position.copy(op)),super.updateMatrixWorld(e)}},fp=new B,pp=new B;function mp(e,t){return e.matrixWorld.decompose(fp,t,pp),t}function hp(e){return[Math.atan2(-e.z,e.x),Math.atan2(e.y,Math.sqrt(e.x*e.x+e.z*e.z))]}function gp(e){let t=Math.round(e/2/Math.PI);return e-2*Math.PI*t}var _p=new B(0,0,1),vp=new B,yp=new B,bp=new B,xp=new z,Sp=new z,Cp=new z,wp=new z,Tp=new Pn,Ep=class e{constructor(e,t){this.offsetFromHeadBone=new B,this.autoUpdate=!0,this.faceFront=new B(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new z)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn(`VRMLookAt: euler is deprecated. use getEuler() instead.`),this.getEuler(new Pn)}getEuler(e){return e.set(yt.DEG2RAD*this._pitch,yt.DEG2RAD*this._yaw,0,`YXZ`)}copy(e){if(this.humanoid!==e.humanoid)throw Error(`VRMLookAt: humanoid must be same in order to copy`);return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new e(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode(`head`);return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){return mp(this.humanoid.getRawBoneNode(`head`),e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(_p)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=hp(this.faceFront);return Tp.set(0,.5*Math.PI+t,n,`YZX`),e.setFromEuler(Tp).premultiply(wp.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Sp),this.getFaceFrontQuaternion(Cp),e.copy(_p).applyQuaternion(Sp).applyQuaternion(Cp).applyEuler(this.getEuler(Tp))}lookAt(e){let t=xp.copy(this._restHeadWorldQuaternion).multiply(Uf(this.getLookAtWorldQuaternion(Sp))),n=this.getLookAtWorldPosition(yp),r=bp.copy(e).sub(n).applyQuaternion(t).normalize(),[i,a]=hp(this.faceFront),[o,s]=hp(r),c=gp(o-i),l=gp(a-s);this._yaw=yt.RAD2DEG*c,this._pitch=yt.RAD2DEG*l,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(vp)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Ep.EULER_ORDER=`YXZ`;var Dp=Ep,Op=new B(0,0,1),kp=new z,Ap=new z,jp=new Pn(0,0,0,`YXZ`),Mp=class{constructor(e,t,n,r,i){this.humanoid=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=i,this.faceFront=new B(0,0,1),this._restQuatLeftEye=new z,this._restQuatRightEye=new z,this._restLeftEyeParentWorldQuat=new z,this._restRightEyeParentWorldQuat=new z;let a=this.humanoid.getRawBoneNode(`leftEye`),o=this.humanoid.getRawBoneNode(`rightEye`);a&&(this._restQuatLeftEye.copy(a.quaternion),mp(a.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),mp(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(e,t){let n=this.humanoid.getRawBoneNode(`leftEye`),r=this.humanoid.getRawBoneNode(`rightEye`),i=this.humanoid.getNormalizedBoneNode(`leftEye`),a=this.humanoid.getNormalizedBoneNode(`rightEye`);n&&(jp.x=t<0?-yt.DEG2RAD*this.rangeMapVerticalDown.map(-t):yt.DEG2RAD*this.rangeMapVerticalUp.map(t),jp.y=e<0?-yt.DEG2RAD*this.rangeMapHorizontalInner.map(-e):yt.DEG2RAD*this.rangeMapHorizontalOuter.map(e),kp.setFromEuler(jp),this._getWorldFaceFrontQuat(Ap),i.quaternion.copy(Ap).multiply(kp).multiply(Ap.invert()),kp.copy(this._restLeftEyeParentWorldQuat),n.quaternion.copy(i.quaternion).multiply(kp).premultiply(kp.invert()).multiply(this._restQuatLeftEye)),r&&(jp.x=t<0?-yt.DEG2RAD*this.rangeMapVerticalDown.map(-t):yt.DEG2RAD*this.rangeMapVerticalUp.map(t),jp.y=e<0?-yt.DEG2RAD*this.rangeMapHorizontalOuter.map(-e):yt.DEG2RAD*this.rangeMapHorizontalInner.map(e),kp.setFromEuler(jp),this._getWorldFaceFrontQuat(Ap),a.quaternion.copy(Ap).multiply(kp).multiply(Ap.invert()),kp.copy(this._restRightEyeParentWorldQuat),r.quaternion.copy(a.quaternion).multiply(kp).premultiply(kp.invert()).multiply(this._restQuatRightEye))}lookAt(e){console.warn(`VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.`);let t=yt.RAD2DEG*e.y,n=yt.RAD2DEG*e.x;this.applyYawPitch(t,n)}_getWorldFaceFrontQuat(e){if(this.faceFront.distanceToSquared(Op)<.01)return e.identity();let[t,n]=hp(this.faceFront);return jp.set(0,.5*Math.PI+t,n,`YZX`),e.setFromEuler(jp)}};Mp.type=`bone`;var Np=class{constructor(e,t,n,r,i){this.expressions=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=i}applyYawPitch(e,t){t<0?(this.expressions.setValue(`lookDown`,0),this.expressions.setValue(`lookUp`,this.rangeMapVerticalUp.map(-t))):(this.expressions.setValue(`lookUp`,0),this.expressions.setValue(`lookDown`,this.rangeMapVerticalDown.map(t))),e<0?(this.expressions.setValue(`lookLeft`,0),this.expressions.setValue(`lookRight`,this.rangeMapHorizontalOuter.map(-e))):(this.expressions.setValue(`lookRight`,0),this.expressions.setValue(`lookLeft`,this.rangeMapHorizontalOuter.map(e)))}lookAt(e){console.warn(`VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.`);let t=yt.RAD2DEG*e.y,n=yt.RAD2DEG*e.x;this.applyYawPitch(t,n)}};Np.type=`expression`;var Pp=class{constructor(e,t){this.inputMaxValue=e,this.outputScale=t}map(e){return this.outputScale*yf(e/this.inputMaxValue)}},Fp=new Set([`1.0`,`1.0-beta`]),Ip=.01,Lp=class{get name(){return`VRMLookAtLoaderPlugin`}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return pf(this,null,function*(){let t=e.userData.vrmHumanoid;if(t===null)return;if(t===void 0)throw Error(`VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first`);let n=e.userData.vrmExpressionManager;if(n!==null){if(n===void 0)throw Error(`VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first`);e.userData.vrmLookAt=yield this._import(e,t,n)}})}_import(e,t,n){return pf(this,null,function*(){return t==null||n==null?null:(yield this._v1Import(e,t,n))||(yield this._v0Import(e,t,n))||null})}_v1Import(e,t,n){return pf(this,null,function*(){let e=this.parser.json;if(e.extensionsUsed?.indexOf(`VRMC_vrm`)===-1)return null;let r=e.extensions?.VRMC_vrm;if(!r)return null;let i=r.specVersion;if(!Fp.has(i))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${i}"`),null;let a=r.lookAt;if(!a)return null;let o=a.type===`expression`?1:10,s=this._v1ImportRangeMap(a.rangeMapHorizontalInner,o),c=this._v1ImportRangeMap(a.rangeMapHorizontalOuter,o),l=this._v1ImportRangeMap(a.rangeMapVerticalDown,o),u=this._v1ImportRangeMap(a.rangeMapVerticalUp,o),d;d=a.type===`expression`?new Np(n,s,c,l,u):new Mp(t,s,c,l,u);let f=this._importLookAt(t,d);return f.offsetFromHeadBone.fromArray(a.offsetFromHeadBone??[0,.06,0]),f})}_v1ImportRangeMap(e,t){let n=e?.inputMaxValue??90,r=e?.outputScale??t;return n<Ip&&(console.warn(`VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!`),n=Ip),new Pp(n,r)}_v0Import(e,t,n){return pf(this,null,function*(){let e=this.parser.json.extensions?.VRM;if(!e)return null;let r=e.firstPerson;if(!r)return null;let i=r.lookAtTypeName===`BlendShape`?1:10,a=this._v0ImportDegreeMap(r.lookAtHorizontalInner,i),o=this._v0ImportDegreeMap(r.lookAtHorizontalOuter,i),s=this._v0ImportDegreeMap(r.lookAtVerticalDown,i),c=this._v0ImportDegreeMap(r.lookAtVerticalUp,i),l;l=r.lookAtTypeName===`BlendShape`?new Np(n,a,o,s,c):new Mp(t,a,o,s,c);let u=this._importLookAt(t,l);return r.firstPersonBoneOffset?u.offsetFromHeadBone.set(r.firstPersonBoneOffset.x??0,r.firstPersonBoneOffset.y??.06,-(r.firstPersonBoneOffset.z??0)):u.offsetFromHeadBone.set(0,.06,0),u.faceFront.set(0,0,-1),l instanceof Mp&&l.faceFront.set(0,0,-1),u})}_v0ImportDegreeMap(e,t){let n=e?.curve;JSON.stringify(n)!==`[0,0,0,1,1,1,1,0]`&&console.warn(`Curves of LookAtDegreeMap defined in VRM 0.0 are not supported`);let r=e?.xRange??90,i=e?.yRange??t;return r<Ip&&(console.warn(`VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!`),r=Ip),new Pp(r,i)}_importLookAt(e,t){let n=new Dp(e,t);if(this.helperRoot){let e=new dp(n);this.helperRoot.add(e),e.renderOrder=this.helperRoot.renderOrder}return n}};function Rp(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}var zp=new Set([`1.0`,`1.0-beta`]),Bp=class{get name(){return`VRMMetaLoaderPlugin`}constructor(e,t){this.parser=e,this.needThumbnailImage=t?.needThumbnailImage??!1,this.acceptLicenseUrls=t?.acceptLicenseUrls??[`https://vrm.dev/licenses/1.0/`],this.acceptV0Meta=t?.acceptV0Meta??!0}afterRoot(e){return pf(this,null,function*(){e.userData.vrmMeta=yield this._import(e)})}_import(e){return pf(this,null,function*(){return(yield this._v1Import(e))??(yield this._v0Import(e))??null})}_v1Import(e){return pf(this,null,function*(){let e=this.parser.json;if(e.extensionsUsed?.indexOf(`VRMC_vrm`)===-1)return null;let t=e.extensions?.VRMC_vrm;if(t==null)return null;let n=t.specVersion;if(!zp.has(n))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${n}"`),null;let r=t.meta;if(!r)return null;let i=r.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(i))throw Error(`VRMMetaLoaderPlugin: The license url "${i}" is not accepted`);let a;return this.needThumbnailImage&&r.thumbnailImage!=null&&(a=(yield this._extractGLTFImage(r.thumbnailImage))??void 0),{metaVersion:`1`,name:r.name,version:r.version,authors:r.authors,copyrightInformation:r.copyrightInformation,contactInformation:r.contactInformation,references:r.references,thirdPartyLicenses:r.thirdPartyLicenses,thumbnailImage:a,licenseUrl:r.licenseUrl,avatarPermission:r.avatarPermission,allowExcessivelyViolentUsage:r.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:r.allowExcessivelySexualUsage,commercialUsage:r.commercialUsage,allowPoliticalOrReligiousUsage:r.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:r.allowAntisocialOrHateUsage,creditNotation:r.creditNotation,allowRedistribution:r.allowRedistribution,modification:r.modification,otherLicenseUrl:r.otherLicenseUrl}})}_v0Import(e){return pf(this,null,function*(){let e=this.parser.json.extensions?.VRM;if(!e)return null;let t=e.meta;if(!t)return null;if(!this.acceptV0Meta)throw Error(`VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false`);let n;return this.needThumbnailImage&&t.texture!=null&&t.texture!==-1&&(n=yield this.parser.getDependency(`texture`,t.texture)),{metaVersion:`0`,allowedUserName:t.allowedUserName,author:t.author,commercialUssageName:t.commercialUssageName,contactInformation:t.contactInformation,licenseName:t.licenseName,otherLicenseUrl:t.otherLicenseUrl,otherPermissionUrl:t.otherPermissionUrl,reference:t.reference,sexualUssageName:t.sexualUssageName,texture:n??void 0,title:t.title,version:t.version,violentUssageName:t.violentUssageName}})}_extractGLTFImage(e){return pf(this,null,function*(){let t=this.parser.json.images?.[e];if(t==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image doesn't exist`),null;let n=t.uri;if(t.bufferView!=null){let e=yield this.parser.getDependency(`bufferView`,t.bufferView),r=new Blob([e],{type:t.mimeType});n=URL.createObjectURL(r)}return n==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new xu().loadAsync(Rp(n,this.parser.options.path)).catch(e=>(console.error(e),console.warn(`VRMMetaLoaderPlugin: Failed to load a thumbnail image`),null))})}},Vp=class{constructor(e){this.scene=e.scene,this.meta=e.meta,this.humanoid=e.humanoid,this.expressionManager=e.expressionManager,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt}update(e){this.humanoid.update(),this.lookAt&&this.lookAt.update(e),this.expressionManager&&this.expressionManager.update()}},Hp=class extends Vp{constructor(e){super(e),this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.nodeConstraintManager=e.nodeConstraintManager}update(e){super.update(e),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(e),this.materials&&this.materials.forEach(t=>{t.update&&t.update(e)})}},Up=Object.defineProperty,Wp=Object.getOwnPropertySymbols,Gp=Object.prototype.hasOwnProperty,Kp=Object.prototype.propertyIsEnumerable,qp=(e,t,n)=>t in e?Up(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jp=(e,t)=>{for(var n in t||={})Gp.call(t,n)&&qp(e,n,t[n]);if(Wp)for(var n of Wp(t))Kp.call(t,n)&&qp(e,n,t[n]);return e},Yp=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())});function Xp(e,t){e.colorSpace=t}var Zp=class{get pending(){return Promise.all(this._pendings)}constructor(e,t){this._parser=e,this._materialParams=t,this._pendings=[]}assignPrimitive(e,t){t!=null&&(this._materialParams[e]=t)}assignColor(e,t,n){if(t!=null){let r=new H().fromArray(t);n&&r.convertSRGBToLinear(),this._materialParams[e]=r}}assignTexture(e,t,n){return Yp(this,null,function*(){let r=Yp(this,null,function*(){if(t!=null){let r=yield this._parser.assignTexture(this._materialParams,e,t);if(r==null){console.warn(`GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong`);return}n&&Xp(r,`srgb`)}});return this._pendings.push(r),r})}assignTextureByIndex(e,t,n){return Yp(this,null,function*(){return this.assignTexture(e,t==null?void 0:{index:t},n)})}},Qp=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,$p=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

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

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

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

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

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

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

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

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,em={None:`none`,Normal:`normal`,LitShadeRate:`litShadeRate`,UV:`uv`},tm={None:`none`,WorldCoordinates:`worldCoordinates`,ScreenCoordinates:`screenCoordinates`};function nm(e){return e.colorSpace}var rm=class extends ti{constructor(e={}){super({vertexShader:Qp,fragmentShader:$p}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=0,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=em.None,this._outlineWidthMode=tm.None,this._isOutline=!1,e.transparentWithZWrite&&(e.depthWrite=!0),delete e.transparentWithZWrite,e.fog=!0,e.lights=!0,e.clipping=!0,this.uniforms=Qr.merge([G.common,G.normalmap,G.emissivemap,G.fog,G.lights,{litFactor:{value:new H(1,1,1)},mapUvTransform:{value:new R},colorAlpha:{value:1},normalMapUvTransform:{value:new R},shadeColorFactor:{value:new H(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new R},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new R},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new H(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new R},parametricRimColorFactor:{value:new H(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new R},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new H(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new R},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new R},outlineWidthFactor:{value:0},outlineColorFactor:{value:new H(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new R},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},e.uniforms??{}]),this.setValues(e),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([e,t])=>`${e}:${t}`),this.matcapTexture?`matcapTextureColorSpace:${nm(this.matcapTexture)}`:``,this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${nm(this.shadeMultiplyTexture)}`:``,this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${nm(this.rimMultiplyTexture)}`:``].join(`,`),this.onBeforeCompile=e=>{let t=Object.entries(Jp(Jp({},this._generateDefines()),this.defines)).filter(([e,t])=>!!t).map(([e,t])=>`#define ${e} ${t}`).join(`
`)+`
`;e.vertexShader=t+e.vertexShader,e.fragmentShader=t+e.fragmentShader}}get color(){return this.uniforms.litFactor.value}set color(e){this.uniforms.litFactor.value=e}get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get normalMap(){return this.uniforms.normalMap.value}set normalMap(e){this.uniforms.normalMap.value=e}get normalScale(){return this.uniforms.normalScale.value}set normalScale(e){this.uniforms.normalScale.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(e){this.uniforms.emissiveMap.value=e}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(e){this.uniforms.shadeColorFactor.value=e}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(e){this.uniforms.shadeMultiplyTexture.value=e}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(e){this.uniforms.shadingShiftFactor.value=e}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(e){this.uniforms.shadingShiftTexture.value=e}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(e){this.uniforms.shadingShiftTextureScale.value=e}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(e){this.uniforms.shadingToonyFactor.value=e}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(e){this.uniforms.giEqualizationFactor.value=e}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(e){this.uniforms.matcapFactor.value=e}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(e){this.uniforms.matcapTexture.value=e}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(e){this.uniforms.parametricRimColorFactor.value=e}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(e){this.uniforms.rimMultiplyTexture.value=e}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(e){this.uniforms.rimLightingMixFactor.value=e}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(e){this.uniforms.parametricRimFresnelPowerFactor.value=e}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(e){this.uniforms.parametricRimLiftFactor.value=e}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(e){this.uniforms.outlineWidthMultiplyTexture.value=e}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(e){this.uniforms.outlineWidthFactor.value=e}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(e){this.uniforms.outlineColorFactor.value=e}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(e){this.uniforms.outlineLightingMixFactor.value=e}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(e){this.uniforms.uvAnimationMaskTexture.value=e}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(e){this.uniforms.uvAnimationScrollXOffset.value=e}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(e){this.uniforms.uvAnimationScrollYOffset.value=e}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(e){this.uniforms.uvAnimationRotationPhase.value=e}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(e){this._ignoreVertexColor=e,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(e){this._v0CompatShade=e,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(e){this._uploadUniformsWorkaround(),this._updateUVAnimation(e)}copy(e){return super.copy(e),this.map=e.map,this.normalMap=e.normalMap,this.emissiveMap=e.emissiveMap,this.shadeMultiplyTexture=e.shadeMultiplyTexture,this.shadingShiftTexture=e.shadingShiftTexture,this.matcapTexture=e.matcapTexture,this.rimMultiplyTexture=e.rimMultiplyTexture,this.outlineWidthMultiplyTexture=e.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=e.uvAnimationMaskTexture,this.normalMapType=e.normalMapType,this.uvAnimationScrollXSpeedFactor=e.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=e.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=e.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=e.ignoreVertexColor,this.v0CompatShade=e.v0CompatShade,this.debugMode=e.debugMode,this.outlineWidthMode=e.outlineWidthMode,this.isOutline=e.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(e){this.uniforms.uvAnimationScrollXOffset.value+=e*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=e*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=e*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:170,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode===`normal`,DEBUG_LITSHADERATE:this._debugMode===`litShadeRate`,DEBUG_UV:this._debugMode===`uv`,OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===tm.ScreenCoordinates}}_updateTextureMatrix(e,t){e.value&&(e.value.matrixAutoUpdate&&e.value.updateMatrix(),t.value.copy(e.value.matrix))}},im=new Set([`1.0`,`1.0-beta`]),am=class e{get name(){return e.EXTENSION_NAME}constructor(e,t={}){this.parser=e,this.materialType=t.materialType??rm,this.renderOrderOffset=t.renderOrderOffset??0,this.v0CompatShade=t.v0CompatShade??!1,this.debugMode=t.debugMode??`none`,this._mToonMaterialSet=new Set}beforeRoot(){return Yp(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Yp(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return Yp(this,null,function*(){let t=this.parser,n=t.json.meshes?.[e];if(n==null)throw Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let r=n.primitives,i=yield t.loadMesh(e);if(r.length===1){let e=i,t=r[0].material;t!=null&&this._setupPrimitive(e,t)}else{let e=i;for(let t=0;t<r.length;t++){let n=e.children[t],i=r[t].material;i!=null&&this._setupPrimitive(n,i)}}return i})}_removeUnlitExtensionIfMToonExists(){this.parser.json.materials?.map((e,t)=>{this._getMToonExtension(t)&&e.extensions?.KHR_materials_unlit&&delete e.extensions.KHR_materials_unlit})}_getMToonExtension(t){let n=this.parser.json.materials?.[t];if(n==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${t}] of glTF but the material doesn't exist`);return}let r=n.extensions?.[e.EXTENSION_NAME];if(r==null)return;let i=r.specVersion;if(!im.has(i)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${e.EXTENSION_NAME} specVersion "${i}"`);return}return r}_extendMaterialParams(e,t){return Yp(this,null,function*(){delete t.metalness,delete t.roughness;let n=new Zp(this.parser,t);n.assignPrimitive(`transparentWithZWrite`,e.transparentWithZWrite),n.assignColor(`shadeColorFactor`,e.shadeColorFactor),n.assignTexture(`shadeMultiplyTexture`,e.shadeMultiplyTexture,!0),n.assignPrimitive(`shadingShiftFactor`,e.shadingShiftFactor),n.assignTexture(`shadingShiftTexture`,e.shadingShiftTexture,!0),n.assignPrimitive(`shadingShiftTextureScale`,e.shadingShiftTexture?.scale),n.assignPrimitive(`shadingToonyFactor`,e.shadingToonyFactor),n.assignPrimitive(`giEqualizationFactor`,e.giEqualizationFactor),n.assignColor(`matcapFactor`,e.matcapFactor),n.assignTexture(`matcapTexture`,e.matcapTexture,!0),n.assignColor(`parametricRimColorFactor`,e.parametricRimColorFactor),n.assignTexture(`rimMultiplyTexture`,e.rimMultiplyTexture,!0),n.assignPrimitive(`rimLightingMixFactor`,e.rimLightingMixFactor),n.assignPrimitive(`parametricRimFresnelPowerFactor`,e.parametricRimFresnelPowerFactor),n.assignPrimitive(`parametricRimLiftFactor`,e.parametricRimLiftFactor),n.assignPrimitive(`outlineWidthMode`,e.outlineWidthMode),n.assignPrimitive(`outlineWidthFactor`,e.outlineWidthFactor),n.assignTexture(`outlineWidthMultiplyTexture`,e.outlineWidthMultiplyTexture,!1),n.assignColor(`outlineColorFactor`,e.outlineColorFactor),n.assignPrimitive(`outlineLightingMixFactor`,e.outlineLightingMixFactor),n.assignTexture(`uvAnimationMaskTexture`,e.uvAnimationMaskTexture,!1),n.assignPrimitive(`uvAnimationScrollXSpeedFactor`,e.uvAnimationScrollXSpeedFactor),n.assignPrimitive(`uvAnimationScrollYSpeedFactor`,e.uvAnimationScrollYSpeedFactor),n.assignPrimitive(`uvAnimationRotationSpeedFactor`,e.uvAnimationRotationSpeedFactor),n.assignPrimitive(`v0CompatShade`,this.v0CompatShade),n.assignPrimitive(`debugMode`,this.debugMode),yield n.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){e.renderOrder=this._parseRenderOrder(n)+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode==`string`&&e.outlineWidthMode!==`none`&&typeof e.outlineWidthFactor==`number`&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof vr)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=` (Outline)`,n.isOutline=!0,n.side=1,e.material.push(n);let r=e.geometry,i=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,i,0),r.addGroup(0,i,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(e=>n.add(e)):n.add(t);for(let e of n)this._mToonMaterialSet.add(e)}_parseRenderOrder(e){return(e.transparentWithZWrite?0:19)+(e.renderQueueOffsetNumber??0)}};am.EXTENSION_NAME=`VRMC_materials_mtoon`;var om=am,sm=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),cm=class e{get name(){return e.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return sm(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);n!=null&&(console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead."),t.emissiveIntensity=n.emissiveMultiplier)})}_getHDREmissiveMultiplierExtension(t){let n=this.parser.json.materials?.[t];if(n==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${t}] of glTF but the material doesn't exist`);return}let r=n.extensions?.[e.EXTENSION_NAME];if(r!=null)return r}};cm.EXTENSION_NAME=`VRMC_materials_hdr_emissiveMultiplier`;var lm=cm,um=Object.defineProperty,dm=Object.defineProperties,fm=Object.getOwnPropertyDescriptors,pm=Object.getOwnPropertySymbols,mm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable,gm=(e,t,n)=>t in e?um(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_m=(e,t)=>{for(var n in t||={})mm.call(t,n)&&gm(e,n,t[n]);if(pm)for(var n of pm(t))hm.call(t,n)&&gm(e,n,t[n]);return e},vm=(e,t)=>dm(e,fm(t)),ym=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())});function bm(e){return e**2.2}var xm=class{get name(){return`VRMMaterialsV0CompatPlugin`}constructor(e){this.parser=e,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=t.extensionsUsed??[],t.extensionsUsed.indexOf(`KHR_texture_transform`)===-1&&t.extensionsUsed.push(`KHR_texture_transform`)}beforeRoot(){return ym(this,null,function*(){let e=this.parser.json,t=e.extensions?.VRM?.materialProperties;t&&(this._populateRenderQueueMap(t),t.forEach((t,n)=>{let r=e.materials?.[n];if(r==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${n}] of glTF but the material doesn't exist`);return}if(t.shader===`VRM/MToon`){let i=this._parseV0MToonProperties(t,r);e.materials[n]=i}else if(t.shader?.startsWith(`VRM/Unlit`)){let i=this._parseV0UnlitProperties(t,r);e.materials[n]=i}else t.shader===`VRM_USE_GLTFSHADER`||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${t.shader}`)}))})}_parseV0MToonProperties(e,t){let n=e.keywordMap?._ALPHABLEND_ON??!1,r=e.floatProperties?._ZWrite===1&&n,i=this._v0ParseRenderQueue(e),a=e.keywordMap?._ALPHATEST_ON??!1,o=n?`BLEND`:a?`MASK`:`OPAQUE`,s=a?e.floatProperties?._Cutoff??.5:void 0,c=(e.floatProperties?._CullMode??2)===0,l=this._portTextureTransform(e),u=(e.vectorProperties?._Color??[1,1,1,1]).map((e,t)=>t===3?e:bm(e)),d=e.textureProperties?._MainTex,f=d==null?void 0:{index:d,extensions:_m({},l)},p=e.floatProperties?._BumpScale??1,m=e.textureProperties?._BumpMap,h=m==null?void 0:{index:m,scale:p,extensions:_m({},l)},g=(e.vectorProperties?._EmissionColor??[0,0,0,1]).map(bm),_=e.textureProperties?._EmissionMap,v=_==null?void 0:{index:_,extensions:_m({},l)},y=(e.vectorProperties?._ShadeColor??[.97,.81,.86,1]).map(bm),b=e.textureProperties?._ShadeTexture,x=b==null?void 0:{index:b,extensions:_m({},l)},S=e.floatProperties?._ShadeShift??0,C=e.floatProperties?._ShadeToony??.9;C=yt.lerp(C,1,.5+.5*S),S=-S-(1-C);let w=e.floatProperties?._IndirectLightIntensity??.1,T=w?1-w:void 0,E=e.textureProperties?._SphereAdd,D=E==null?void 0:[1,1,1],O=E==null?void 0:{index:E},k=e.floatProperties?._RimLightingMix??0,A=e.textureProperties?._RimTexture,j=A==null?void 0:{index:A,extensions:_m({},l)},ee=(e.vectorProperties?._RimColor??[0,0,0,1]).map(bm),te=e.floatProperties?._RimFresnelPower??1,M=e.floatProperties?._RimLift??0,ne=[`none`,`worldCoordinates`,`screenCoordinates`][e.floatProperties?._OutlineWidthMode??0],re=e.floatProperties?._OutlineWidth??0;re=.01*re;let ie=e.textureProperties?._OutlineWidthTexture,ae=ie==null?void 0:{index:ie,extensions:_m({},l)},oe=(e.vectorProperties?._OutlineColor??[0,0,0]).map(bm),se=(e.floatProperties?._OutlineColorMode??0)===1?e.floatProperties?._OutlineLightingMix??1:0,ce=e.textureProperties?._UvAnimMaskTexture,le=ce==null?void 0:{index:ce,extensions:_m({},l)},ue=e.floatProperties?._UvAnimScrollX??0,de=e.floatProperties?._UvAnimScrollY??0;de!=null&&(de=-de);let fe=e.floatProperties?._UvAnimRotation??0,pe={specVersion:`1.0`,transparentWithZWrite:r,renderQueueOffsetNumber:i,shadeColorFactor:y,shadeMultiplyTexture:x,shadingShiftFactor:S,shadingToonyFactor:C,giEqualizationFactor:T,matcapFactor:D,matcapTexture:O,rimLightingMixFactor:k,rimMultiplyTexture:j,parametricRimColorFactor:ee,parametricRimFresnelPowerFactor:te,parametricRimLiftFactor:M,outlineWidthMode:ne,outlineWidthFactor:re,outlineWidthMultiplyTexture:ae,outlineColorFactor:oe,outlineLightingMixFactor:se,uvAnimationMaskTexture:le,uvAnimationScrollXSpeedFactor:ue,uvAnimationScrollYSpeedFactor:de,uvAnimationRotationSpeedFactor:fe};return vm(_m({},t),{pbrMetallicRoughness:{baseColorFactor:u,baseColorTexture:f},normalTexture:h,emissiveTexture:v,emissiveFactor:g,alphaMode:o,alphaCutoff:s,doubleSided:c,extensions:{VRMC_materials_mtoon:pe}})}_parseV0UnlitProperties(e,t){let n=e.shader===`VRM/UnlitTransparentZWrite`,r=e.shader===`VRM/UnlitTransparent`||n,i=this._v0ParseRenderQueue(e),a=e.shader===`VRM/UnlitCutout`,o=r?`BLEND`:a?`MASK`:`OPAQUE`,s=a?e.floatProperties?._Cutoff??.5:void 0,c=this._portTextureTransform(e),l=(e.vectorProperties?._Color??[1,1,1,1]).map(bm),u=e.textureProperties?._MainTex,d=u==null?void 0:{index:u,extensions:_m({},c)},f={specVersion:`1.0`,transparentWithZWrite:n,renderQueueOffsetNumber:i,shadeColorFactor:l,shadeMultiplyTexture:d};return vm(_m({},t),{pbrMetallicRoughness:{baseColorFactor:l,baseColorTexture:d},alphaMode:o,alphaCutoff:s,extensions:{VRMC_materials_mtoon:f}})}_portTextureTransform(e){let t=e.vectorProperties?._MainTex;if(t==null)return{};let n=[t?.[0]??0,t?.[1]??0],r=[t?.[2]??1,t?.[3]??1];return n[1]=1-r[1]-n[1],{KHR_texture_transform:{offset:n,scale:r}}}_v0ParseRenderQueue(e){let t=e.shader===`VRM/UnlitTransparentZWrite`,n=e.keywordMap?._ALPHABLEND_ON!=null||e.shader===`VRM/UnlitTransparent`||t,r=e.floatProperties?._ZWrite===1||t,i=0;if(n){let t=e.renderQueue;t!=null&&(i=r?this._renderQueueMapTransparentZWrite.get(t):this._renderQueueMapTransparent.get(t))}return i}_populateRenderQueueMap(e){let t=new Set,n=new Set;e.forEach(e=>{let r=e.shader===`VRM/UnlitTransparentZWrite`,i=e.keywordMap?._ALPHABLEND_ON!=null||e.shader===`VRM/UnlitTransparent`||r,a=e.floatProperties?._ZWrite===1||r;if(i){let r=e.renderQueue;r!=null&&(a?n.add(r):t.add(r))}}),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),n.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${n.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(t).sort().forEach((e,n)=>{let r=Math.min(Math.max(n-t.size+1,-9),0);this._renderQueueMapTransparent.set(e,r)}),Array.from(n).sort().forEach((e,t)=>{let n=Math.min(Math.max(t,0),9);this._renderQueueMapTransparentZWrite.set(e,n)})}},Sm=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),Cm=new B,wm=class extends bs{constructor(e){super(),this._attrPosition=new U(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(We);let t=new Mr;t.setAttribute(`position`,this._attrPosition);let n=new oc({color:16711935,depthTest:!1,depthWrite:!1});this._line=new mc(t,n),this.add(this._line),this.constraint=e}updateMatrixWorld(e){Cm.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Cm.x,Cm.y,Cm.z),this.constraint.source&&Cm.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Cm.x,Cm.y,Cm.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(e)}};function Tm(e,t){return t.set(e.elements[12],e.elements[13],e.elements[14])}var Em=new B,Dm=new B;function Om(e,t){return e.decompose(Em,t,Dm),t}function km(e){return e.invert?e.invert():e.inverse(),e}var Am=class{constructor(e,t){this.destination=e,this.source=t,this.weight=1}},jm=new B,Mm=new B,Nm=new B,Pm=new z,Fm=new z,Im=new z,Lm=class extends Am{get aimAxis(){return this._aimAxis}set aimAxis(e){this._aimAxis=e,this._v3AimAxis.set(e===`PositiveX`?1:e===`NegativeX`?-1:0,e===`PositiveY`?1:e===`NegativeY`?-1:0,e===`PositiveZ`?1:e===`NegativeZ`?-1:0)}get dependencies(){let e=new Set([this.source]);return this.destination.parent&&e.add(this.destination.parent),e}constructor(e,t){super(e,t),this._aimAxis=`PositiveX`,this._v3AimAxis=new B(1,0,0),this._dstRestQuat=new z}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let e=Pm.identity(),t=Fm.identity();this.destination.parent&&(Om(this.destination.parent.matrixWorld,e),km(t.copy(e)));let n=jm.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(e),r=Tm(this.source.matrixWorld,Mm).sub(Tm(this.destination.matrixWorld,Nm)).normalize(),i=Im.setFromUnitVectors(n,r).premultiply(t).multiply(e).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function Rm(e,t){let n=[e],r=e.parent;for(;r!==null;)n.unshift(r),r=r.parent;n.forEach(e=>{t(e)})}var zm=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(e){this._constraints.add(e);let t=this._objectConstraintsMap.get(e.destination);t??(t=new Set,this._objectConstraintsMap.set(e.destination,t)),t.add(e)}deleteConstraint(e){this._constraints.delete(e),this._objectConstraintsMap.get(e.destination).delete(e)}setInitState(){let e=new Set,t=new Set;for(let n of this._constraints)this._processConstraint(n,e,t,e=>e.setInitState())}update(){let e=new Set,t=new Set;for(let n of this._constraints)this._processConstraint(n,e,t,e=>e.update())}_processConstraint(e,t,n,r){if(n.has(e))return;if(t.has(e))throw Error(`VRMNodeConstraintManager: Circular dependency detected while updating constraints`);t.add(e);let i=e.dependencies;for(let e of i)Rm(e,e=>{let i=this._objectConstraintsMap.get(e);if(i)for(let e of i)this._processConstraint(e,t,n,r)});r(e),n.add(e)}},Bm=new z,Vm=new z,Hm=class extends Am{get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._dstRestQuat=new z,this._invSrcRestQuat=new z}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),km(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let e=Bm.copy(this._invSrcRestQuat).multiply(this.source.quaternion),t=Vm.copy(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}},Um=new B,Wm=new z,Gm=new z,Km=class extends Am{get rollAxis(){return this._rollAxis}set rollAxis(e){this._rollAxis=e,this._v3RollAxis.set(+(e===`X`),+(e===`Y`),+(e===`Z`))}get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._rollAxis=`X`,this._v3RollAxis=new B(1,0,0),this._dstRestQuat=new z,this._invDstRestQuat=new z,this._invSrcRestQuatMulDstRestQuat=new z}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),km(this._invDstRestQuat.copy(this._dstRestQuat)),km(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let e=Wm.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),t=Um.copy(this._v3RollAxis).applyQuaternion(e),n=Gm.setFromUnitVectors(t,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},qm=new Set([`1.0`,`1.0-beta`]),Jm=class e{get name(){return e.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return Sm(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(t){return Sm(this,null,function*(){let n=this.parser.json;if(n.extensionsUsed?.indexOf(e.EXTENSION_NAME)===-1)return null;let r=new zm,i=yield this.parser.getDependencies(`node`);return i.forEach((t,a)=>{let o=n.nodes[a]?.extensions?.[e.EXTENSION_NAME];if(o==null)return;let s=o.specVersion;if(!qm.has(s)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${e.EXTENSION_NAME} specVersion "${s}"`);return}let c=o.constraint;if(c.roll!=null){let e=this._importRollConstraint(t,i,c.roll);r.addConstraint(e)}else if(c.aim!=null){let e=this._importAimConstraint(t,i,c.aim);r.addConstraint(e)}else if(c.rotation!=null){let e=this._importRotationConstraint(t,i,c.rotation);r.addConstraint(e)}}),t.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){let{source:r,rollAxis:i,weight:a}=n,o=t[r],s=new Km(e,o);if(i!=null&&(s.rollAxis=i),a!=null&&(s.weight=a),this.helperRoot){let e=new wm(s);this.helperRoot.add(e)}return s}_importAimConstraint(e,t,n){let{source:r,aimAxis:i,weight:a}=n,o=t[r],s=new Lm(e,o);if(i!=null&&(s.aimAxis=i),a!=null&&(s.weight=a),this.helperRoot){let e=new wm(s);this.helperRoot.add(e)}return s}_importRotationConstraint(e,t,n){let{source:r,weight:i}=n,a=t[r],o=new Hm(e,a);if(i!=null&&(o.weight=i),this.helperRoot){let e=new wm(o);this.helperRoot.add(e)}return o}};Jm.EXTENSION_NAME=`VRMC_node_constraint`;var Ym=Jm,Xm=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),Zm=class{},Qm=new B,$m=new B,eh=class extends Zm{get type(){return`capsule`}constructor(e){super(),this.offset=e?.offset??new B(0,0,0),this.tail=e?.tail??new B(0,0,0),this.radius=e?.radius??0,this.inside=e?.inside??!1}calculateCollision(e,t,n,r){Qm.setFromMatrixPosition(e),$m.subVectors(this.tail,this.offset).applyMatrix4(e),$m.sub(Qm);let i=$m.lengthSq();r.copy(t).sub(Qm);let a=$m.dot(r);a<=0||(i<=a||$m.multiplyScalar(a/i),r.sub($m));let o=r.length(),s=this.inside?this.radius-n-o:o-n-this.radius;return s<0&&(r.multiplyScalar(1/o),this.inside&&r.negate()),s}},th=new B,nh=new R,rh=class extends Zm{get type(){return`plane`}constructor(e){super(),this.offset=e?.offset??new B(0,0,0),this.normal=e?.normal??new B(0,0,1)}calculateCollision(e,t,n,r){r.setFromMatrixPosition(e),r.negate().add(t),nh.getNormalMatrix(e),th.copy(this.normal).applyNormalMatrix(nh).normalize();let i=r.dot(th)-n;return r.copy(th),i}},ih=new B,ah=class extends Zm{get type(){return`sphere`}constructor(e){super(),this.offset=e?.offset??new B(0,0,0),this.radius=e?.radius??0,this.inside=e?.inside??!1}calculateCollision(e,t,n,r){r.subVectors(t,ih.setFromMatrixPosition(e));let i=r.length(),a=this.inside?this.radius-n-i:i-n-this.radius;return a<0&&(r.multiplyScalar(1/i),this.inside&&r.negate()),a}},oh=new B,sh=class extends Mr{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new B,this._currentTail=new B,this._shape=e,this._attrPos=new U(new Float32Array(396),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0);let n=oh.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(n)>1e-10&&(this._currentTail.copy(n),e=!0),e&&this._buildPosition()}_buildPosition(){oh.copy(this._currentTail).sub(this._currentOffset);let e=oh.length()/this._currentRadius;for(let t=0;t<=16;t++){let n=t/16*Math.PI;this._attrPos.setXYZ(t,-Math.sin(n),-Math.cos(n),0),this._attrPos.setXYZ(17+t,e+Math.sin(n),Math.cos(n),0),this._attrPos.setXYZ(34+t,-Math.sin(n),0,-Math.cos(n)),this._attrPos.setXYZ(51+t,e+Math.sin(n),0,Math.cos(n))}for(let t=0;t<32;t++){let n=t/16*Math.PI;this._attrPos.setXYZ(68+t,0,Math.sin(n),Math.cos(n)),this._attrPos.setXYZ(100+t,e,Math.sin(n),Math.cos(n))}let t=Math.atan2(oh.y,Math.sqrt(oh.x*oh.x+oh.z*oh.z)),n=-Math.atan2(oh.z,oh.x);this.rotateZ(t),this.rotateY(n),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<34;e++){let t=(e+1)%34;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(68+e*2,34+e,34+t)}for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(136+e*2,68+e,68+t),this._attrIndex.setXY(200+e*2,100+e,100+t)}this._attrIndex.needsUpdate=!0}},ch=class extends Mr{constructor(e){super(),this.worldScale=1,this._currentOffset=new B,this._currentNormal=new B,this._shape=e,this._attrPos=new U(new Float32Array(18),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},lh=class extends Mr{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new B,this._shape=e,this._attrPos=new U(new Float32Array(288),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.needsUpdate=!0}},uh=new B,dh=class extends bs{constructor(e){if(super(),this.matrixAutoUpdate=!1,this.collider=e,this.collider.shape instanceof ah)this._geometry=new lh(this.collider.shape);else if(this.collider.shape instanceof eh)this._geometry=new sh(this.collider.shape);else if(this.collider.shape instanceof rh)this._geometry=new ch(this.collider.shape);else throw Error(`VRMSpringBoneColliderHelper: Unknown collider shape type detected`);let t=new oc({color:16711935,depthTest:!1,depthWrite:!1});this._line=new vc(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let t=this.matrix.elements;this._geometry.worldScale=uh.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},fh=class extends Mr{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new B,this._springBone=e,this._attrPos=new U(new Float32Array(294),3),this.setAttribute(`position`,this._attrPos),this._attrIndex=new U(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},ph=new B,mh=class extends bs{constructor(e){super(),this.matrixAutoUpdate=!1,this.springBone=e,this._geometry=new fh(this.springBone);let t=new oc({color:16776960,depthTest:!1,depthWrite:!1});this._line=new vc(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let t=this.matrix.elements;this._geometry.worldScale=ph.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},hh=class extends Zn{constructor(e){super(),this.colliderMatrix=new V,this.shape=e}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),gh(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function gh(e,t,n){let r=t.elements;e.copy(t),n&&(e.elements[12]=r[0]*n.x+r[4]*n.y+r[8]*n.z+r[12],e.elements[13]=r[1]*n.x+r[5]*n.y+r[9]*n.z+r[13],e.elements[14]=r[2]*n.x+r[6]*n.y+r[10]*n.z+r[14])}var _h=new V;function vh(e){return e.invert?e.invert():e.getInverse(_h.copy(e)),e}var yh=class{constructor(e){this._inverseCache=new V,this._shouldUpdateInverse=!0,this.matrix=e;let t={set:(e,t,n)=>(this._shouldUpdateInverse=!0,e[t]=n,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}get inverse(){return this._shouldUpdateInverse&&=(vh(this._inverseCache.copy(this.matrix)),!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},bh=new V,xh=new B,Sh=new B,Ch=new B,wh=new B,Th=new V,Eh=class{constructor(e,t,n={},r=[]){this._currentTail=new B,this._prevTail=new B,this._boneAxis=new B,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new V,this._initialLocalRotation=new z,this._initialLocalChildPosition=new B,this.bone=e,this.bone.matrixAutoUpdate=!1,this.child=t,this.settings={hitRadius:n.hitRadius??0,stiffness:n.stiffness??1,gravityPower:n.gravityPower??0,gravityDir:n.gravityDir?.clone()??new B(0,-1,0),dragForce:n.dragForce??.4},this.colliderGroups=r}get dependencies(){let e=new Set,t=this.bone.parent;t&&e.add(t);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)e.add(this.colliderGroups[t].colliders[n]);return e}get center(){return this._center}set center(e){this._center?.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new yh(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:bh}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let e=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let e=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail)}update(e){if(e<=0)return;this._calcWorldSpaceBoneLength();let t=Sh.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);wh.copy(this._currentTail).add(xh.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(t,this.settings.stiffness*e).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*e),Ch.setFromMatrixPosition(this.bone.matrixWorld),wh.sub(Ch).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ch),this._collision(wh),this._prevTail.copy(this._currentTail),this._currentTail.copy(wh).applyMatrix4(this._getMatrixWorldToCenter());let n=Th.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,xh.copy(wh).applyMatrix4(n).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(e){for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++){let r=this.colliderGroups[t].colliders[n],i=r.shape.calculateCollision(r.colliderMatrix,e,this.settings.hitRadius,xh);if(i<0){e.addScaledVector(xh,-i),e.sub(Ch);let t=e.length();e.multiplyScalar(this._worldSpaceBoneLength/t).add(Ch)}}}_calcWorldSpaceBoneLength(){xh.setFromMatrixPosition(this.bone.matrixWorld),this.child?Sh.setFromMatrixPosition(this.child.matrixWorld):(Sh.copy(this._initialLocalChildPosition),Sh.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=xh.sub(Sh).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:bh}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:bh}};function Dh(e,t){let n=[],r=e;for(;r!==null;)n.unshift(r),r=r.parent;n.forEach(e=>{t(e)})}function Oh(e,t){e.children.forEach(e=>{t(e)||Oh(e,t)})}function kh(e){let t=new Map;for(let n of e){let r=n;do{let n=(t.get(r)??0)+1;if(n===e.size)return r;t.set(r,n),r=r.parent}while(r!==null)}return null}var Ah=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn(`VRMSpringBoneManager: springBones is deprecated. use joints instead.`),this._joints}get colliderGroups(){let e=new Set;return this._joints.forEach(t=>{t.colliderGroups.forEach(t=>{e.add(t)})}),Array.from(e)}get colliders(){let e=new Set;return this.colliderGroups.forEach(t=>{t.colliders.forEach(t=>{e.add(t)})}),Array.from(e)}addJoint(e){this._joints.add(e);let t=this._objectSpringBonesMap.get(e.bone);t??(t=new Set,this._objectSpringBonesMap.set(e.bone,t)),t.add(e),this._isSortedJointsDirty=!0}addSpringBone(e){console.warn(`VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead.`),this.addJoint(e)}deleteJoint(e){this._joints.delete(e),this._objectSpringBonesMap.get(e.bone).delete(e),this._isSortedJointsDirty=!0}deleteSpringBone(e){console.warn(`VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead.`),this.deleteJoint(e)}setInitState(){this._sortJoints();for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.setInitState()}}reset(){this._sortJoints();for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.reset()}}update(e){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let t=0;t<this._sortedJoints.length;t++){let n=this._sortedJoints[t];n.bone.updateMatrix(),n.bone.updateWorldMatrix(!1,!1),n.update(e),Oh(n.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let e=[],t=new Set,n=new Set,r=new Set;for(let i of this._joints)this._insertJointSort(i,t,n,e,r);this._sortedJoints=e;let i=kh(r);this._ancestors=[],i&&(this._ancestors.push(i),Oh(i,e=>(this._objectSpringBonesMap.get(e)?.size??0)>0||(this._ancestors.push(e),!1))),this._isSortedJointsDirty=!1}_insertJointSort(e,t,n,r,i){if(n.has(e))return;if(t.has(e)){this._hasWarnedCircularDependency||=(console.warn(`VRMSpringBoneManager: Circular dependency detected`),!0);return}t.add(e);let a=e.dependencies;for(let e of a){let a=!1,o=null;Dh(e,e=>{let s=this._objectSpringBonesMap.get(e);if(s)for(let e of s)a=!0,this._insertJointSort(e,t,n,r,i);else a||(o=e)}),o&&i.add(o)}r.push(e),n.add(e)}_relevantChildrenUpdated(e){return(this._objectSpringBonesMap.get(e)?.size??0)>0||(e.updateWorldMatrix(!1,!1),!1)}},jh=`VRMC_springBone_extended_collider`,Mh=new Set([`1.0`,`1.0-beta`]),Nh=new Set([`1.0`]),Ph=class e{get name(){return e.EXTENSION_NAME}constructor(e,t){this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=t?.useExtendedColliders??!0}afterRoot(e){return Xm(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Xm(this,null,function*(){return(yield this._v1Import(e))??(yield this._v0Import(e))??null})}_v1Import(t){return Xm(this,null,function*(){var n;let r=t.parser.json;if(r.extensionsUsed?.indexOf(e.EXTENSION_NAME)===-1)return null;let i=new Ah,a=yield t.parser.getDependencies(`node`),o=r.extensions?.[e.EXTENSION_NAME];if(!o)return null;let s=o.specVersion;if(!Mh.has(s))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${e.EXTENSION_NAME} specVersion "${s}"`),null;let c=o.colliders?.map((t,n)=>{let r=a[t.node];if(r==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${n} attempted to reference a node #${t.node} but not found. Skipping the collider`),null;let i=t.shape,o=t.extensions?.[jh];if(this.useExtendedColliders&&o!=null){let t=o.specVersion;if(!Nh.has(t))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${jh} specVersion "${t}". Fallbacking to the ${e.EXTENSION_NAME} definition`);else{let e=o.shape;if(e.sphere)return this._importSphereCollider(r,{offset:new B().fromArray(e.sphere.offset??[0,0,0]),radius:e.sphere.radius??0,inside:e.sphere.inside??!1});if(e.capsule)return this._importCapsuleCollider(r,{offset:new B().fromArray(e.capsule.offset??[0,0,0]),radius:e.capsule.radius??0,tail:new B().fromArray(e.capsule.tail??[0,0,0]),inside:e.capsule.inside??!1});if(e.plane)return this._importPlaneCollider(r,{offset:new B().fromArray(e.plane.offset??[0,0,0]),normal:new B().fromArray(e.plane.normal??[0,0,1])})}}if(i.sphere)return this._importSphereCollider(r,{offset:new B().fromArray(i.sphere.offset??[0,0,0]),radius:i.sphere.radius??0,inside:!1});if(i.capsule)return this._importCapsuleCollider(r,{offset:new B().fromArray(i.capsule.offset??[0,0,0]),radius:i.capsule.radius??0,tail:new B().fromArray(i.capsule.tail??[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${n} has no valid shape. Skipping the collider`)}),l=o.colliderGroups?.map((e,t)=>({colliders:(e.colliders??[]).map(e=>c?.[e]??(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${t} attempted to reference a collider #${e} but not found. Skipping the collider`),null)).filter(e=>e!=null),name:e.name}));return(n=o.springs)==null||n.forEach((e,t)=>{let n=e.joints,r=e.colliderGroups?.map(e=>l?.[e]??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${t} attempted to reference a collider group #${e} but not found. Skipping the collider group`),null)).filter(e=>e!=null),o=e.center==null?void 0:a[e.center],s;n.forEach(e=>{if(s){let t=s.node,n=a[t],c=e.node,l=a[c],u={hitRadius:s.hitRadius,dragForce:s.dragForce,gravityPower:s.gravityPower,stiffness:s.stiffness,gravityDir:s.gravityDir==null?void 0:new B().fromArray(s.gravityDir)},d=this._importJoint(n,l,u,r);o&&(d.center=o),i.addJoint(d)}s=e})}),i.setInitState(),i})}_v0Import(e){return Xm(this,null,function*(){let t=e.parser.json;if(t.extensionsUsed?.indexOf(`VRM`)===-1)return null;let n=t.extensions?.VRM?.secondaryAnimation;if(!n)return null;let r=n?.boneGroups;if(!r)return null;let i=new Ah,a=yield e.parser.getDependencies(`node`),o=n.colliderGroups?.map((e,t)=>{let n=a[e.node];return n==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${t} attempted to reference a node #${e.node} but not found. Skipping the collider group`),null):{colliders:(e.colliders??[]).map((e,t)=>{let r=new B(0,0,0);return e.offset&&r.set(e.offset.x??0,e.offset.y??0,e.offset.z?-e.offset.z:0),this._importSphereCollider(n,{offset:r,radius:e.radius??0,inside:!1})})}});return r?.forEach((e,t)=>{let n=e.bones;n&&n.forEach(n=>{let r=a[n];if(r==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${t} attempted to reference a node #${n} but not found. Skipping the node`);return}let s=new B;e.gravityDir?s.set(e.gravityDir.x??0,e.gravityDir.y??0,e.gravityDir.z??0):s.set(0,-1,0);let c=e.center==null?void 0:a[e.center],l={hitRadius:e.hitRadius,dragForce:e.dragForce,gravityPower:e.gravityPower,stiffness:e.stiffiness,gravityDir:s},u=e.colliderGroups?.map(e=>o?.[e]??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${t} attempted to reference a collider group #${e} but not found. Skipping the collider group`),null)).filter(e=>e!=null);r.traverse(e=>{let t=e.children[0]??null,n=this._importJoint(e,t,l,u);c&&(n.center=c),i.addJoint(n)})})}),e.scene.updateMatrixWorld(),i.setInitState(),i})}_importJoint(e,t,n,r){let i=new Eh(e,t,n,r);if(this.jointHelperRoot){let e=new mh(i);this.jointHelperRoot.add(e),e.renderOrder=this.jointHelperRoot.renderOrder}return i}_importSphereCollider(e,t){let n=new hh(new ah(t));if(e.add(n),this.colliderHelperRoot){let e=new dh(n);this.colliderHelperRoot.add(e),e.renderOrder=this.colliderHelperRoot.renderOrder}return n}_importCapsuleCollider(e,t){let n=new hh(new eh(t));if(e.add(n),this.colliderHelperRoot){let e=new dh(n);this.colliderHelperRoot.add(e),e.renderOrder=this.colliderHelperRoot.renderOrder}return n}_importPlaneCollider(e,t){let n=new hh(new rh(t));if(e.add(n),this.colliderHelperRoot){let e=new dh(n);this.colliderHelperRoot.add(e),e.renderOrder=this.colliderHelperRoot.renderOrder}return n}};Ph.EXTENSION_NAME=`VRMC_springBone`;var Fh=Ph,Ih=class{get name(){return`VRMLoaderPlugin`}constructor(e,t){this.parser=e;let n=t?.helperRoot,r=t?.autoUpdateHumanBones;this.expressionPlugin=t?.expressionPlugin??new Mf(e),this.firstPersonPlugin=t?.firstPersonPlugin??new If(e),this.humanoidPlugin=t?.humanoidPlugin??new tp(e,{helperRoot:n,autoUpdateHumanBones:r}),this.lookAtPlugin=t?.lookAtPlugin??new Lp(e,{helperRoot:n}),this.metaPlugin=t?.metaPlugin??new Bp(e),this.mtoonMaterialPlugin=t?.mtoonMaterialPlugin??new om(e),this.materialsHDREmissiveMultiplierPlugin=t?.materialsHDREmissiveMultiplierPlugin??new lm(e),this.materialsV0CompatPlugin=t?.materialsV0CompatPlugin??new xm(e),this.springBonePlugin=t?.springBonePlugin??new Fh(e,{colliderHelperRoot:n,jointHelperRoot:n}),this.nodeConstraintPlugin=t?.nodeConstraintPlugin??new Ym(e,{helperRoot:n})}beforeRoot(){return ff(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(e){return ff(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(e)})}getMaterialType(e){return this.mtoonMaterialPlugin.getMaterialType(e)??null}extendMaterialParams(e,t){return ff(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(e,t),yield this.mtoonMaterialPlugin.extendMaterialParams(e,t)})}afterRoot(e){return ff(this,null,function*(){yield this.metaPlugin.afterRoot(e),yield this.humanoidPlugin.afterRoot(e),yield this.expressionPlugin.afterRoot(e),yield this.lookAtPlugin.afterRoot(e),yield this.firstPersonPlugin.afterRoot(e),yield this.springBonePlugin.afterRoot(e),yield this.nodeConstraintPlugin.afterRoot(e),yield this.mtoonMaterialPlugin.afterRoot(e);let t=e.userData.vrmMeta,n=e.userData.vrmHumanoid;if(t&&n){let r=new Hp({scene:e.scene,expressionManager:e.userData.vrmExpressionManager,firstPerson:e.userData.vrmFirstPerson,humanoid:n,lookAt:e.userData.vrmLookAt,meta:t,materials:e.userData.vrmMToonMaterials,springBoneManager:e.userData.vrmSpringBoneManager,nodeConstraintManager:e.userData.vrmNodeConstraintManager});e.userData.vrm=r}})}};function Lh(e){let t=new Set;return e.traverse(e=>{if(!e.isMesh)return;let n=e;t.add(n)}),t}function Rh(e,t,n){if(t.size===1){let n=t.values().next().value;if(n.weight===1)return e[n.index]}let r=new Float32Array(e[0].count*3),i=0;if(n)i=1;else for(let e of t)i+=e.weight;for(let n of t){let t=e[n.index],a=n.weight/i;for(let e=0;e<t.count;e++)r[e*3+0]+=t.getX(e)*a,r[e*3+1]+=t.getY(e)*a,r[e*3+2]+=t.getZ(e)*a}return new U(r,3)}function zh(e){let t=Lh(e.scene),n=new Map,r=e.expressionManager?.expressionMap;if(r!=null)for(let[e,t]of Object.entries(r)){let r=new Set;for(let i of t.binds)if(i instanceof Ef){if(i.weight!==0)for(let t of i.primitives){let r=n.get(t);r??(r=new Map,n.set(t,r));let a=r.get(e);a??(a=new Set,r.set(e,a)),a.add(i)}r.add(i)}for(let e of r)t.deleteBind(e)}for(let e of t){let t=n.get(e);if(t==null)continue;let i=e.geometry.morphAttributes;e.geometry.morphAttributes={};let a=e.geometry.clone();e.geometry=a;let o=a.morphTargetsRelative,s=i.position!=null,c=i.normal!=null,l={},u={},d=[];if(s||c){s&&(l.position=[]),c&&(l.normal=[]);let n=0;for(let[a,f]of t)s&&(l.position[n]=Rh(i.position,f,o)),c&&(l.normal[n]=Rh(i.normal,f,o)),r?.[a].addBind(new Ef({index:n,weight:1,primitives:[e]})),u[a]=n,d.push(0),n++}a.morphAttributes=l,e.morphTargetDictionary=u,e.morphTargetInfluences=d}}function Bh(e,t,n){if(e.getComponent)return e.getComponent(t,n);{let r=e.array[t*e.itemSize+n];return e.normalized&&(r=yt.denormalize(r,e.array)),r}}function Vh(e,t,n,r){e.setComponent?e.setComponent(t,n,r):(e.normalized&&(r=yt.normalize(r,e.array)),e.array[t*e.itemSize+n]=r)}function Hh(e){let t=Uh(e),n=new Set;for(let e of t)n.has(e.geometry)&&(e.geometry=Xh(e.geometry)),n.add(e.geometry);let r=new Map;for(let e of n){let t=e.getAttribute(`skinIndex`),n=r.get(t)??new Map;r.set(t,n);let i=e.getAttribute(`skinWeight`),a=Wh(t,i);n.set(i,a)}let i=new Map;for(let e of t){let t=Gh(e,r);i.set(e,t)}let a=[];for(let[e,t]of i){let n=!1;for(let r of a)if(Kh(t,r.boneInverseMap)){n=!0,r.meshes.add(e);for(let[e,n]of t)r.boneInverseMap.set(e,n);break}n||a.push({boneInverseMap:t,meshes:new Set([e])})}let o=new Map,s=new Yh,c=new Yh,l=new Yh;for(let e of a){let{boneInverseMap:t,meshes:n}=e,r=Array.from(t.keys()),i=new Xs(r,Array.from(t.values())),a=c.getOrCreate(i);for(let e of n){let t=e.geometry.getAttribute(`skinIndex`),n=s.getOrCreate(t),i=e.skeleton.bones,c=`${n};${a};${i.map(e=>l.getOrCreate(e)).join(`,`)}`,u=o.get(c);u??(u=t.clone(),qh(u,i,r),o.set(c,u)),e.geometry.setAttribute(`skinIndex`,u)}for(let e of n)e.bind(i,new V)}}function Uh(e){let t=new Set;return e.traverse(e=>{if(!e.isSkinnedMesh)return;let n=e;t.add(n)}),t}function Wh(e,t){let n=new Set;for(let r=0;r<e.count;r++)for(let i=0;i<e.itemSize;i++){let a=Bh(e,r,i);Bh(t,r,i)!==0&&n.add(a)}return n}function Gh(e,t){let n=new Map,r=e.skeleton,i=e.geometry,a=i.getAttribute(`skinIndex`),o=i.getAttribute(`skinWeight`),s=t.get(a)?.get(o);if(!s)throw Error(`Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.`);for(let e of s)n.set(r.bones[e],r.boneInverses[e]);return n}function Kh(e,t){for(let[n,r]of e.entries()){let e=t.get(n);if(e!=null&&!Jh(r,e))return!1}return!0}function qh(e,t,n){let r=new Map;for(let e of t)r.set(e,r.size);let i=new Map;for(let[e,t]of n.entries()){let n=r.get(t);i.set(n,e)}for(let t=0;t<e.count;t++)for(let n=0;n<e.itemSize;n++){let r=Bh(e,t,n),a=i.get(r);Vh(e,t,n,a)}e.needsUpdate=!0}function Jh(e,t,n){if(n||=1e-4,e.elements.length!=t.elements.length)return!1;for(let r=0,i=e.elements.length;r<i;r++)if(Math.abs(e.elements[r]-t.elements[r])>n)return!1;return!0}var Yh=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(e){return this._objectIndexMap.get(e)}getOrCreate(e){let t=this._objectIndexMap.get(e);return t??(t=this._index,this._objectIndexMap.set(e,t),this._index++),t}};function Xh(e){let t=new Mr;t.name=e.name,t.setIndex(e.index);for(let[n,r]of Object.entries(e.attributes))t.setAttribute(n,r);for(let[n,r]of Object.entries(e.morphAttributes)){let e=n;t.morphAttributes[e]=r.concat()}t.morphTargetsRelative=e.morphTargetsRelative,t.groups=[];for(let n of e.groups)t.addGroup(n.start,n.count,n.materialIndex);return t.boundingSphere=e.boundingSphere?.clone()??null,t.boundingBox=e.boundingBox?.clone()??null,t.drawRange.start=e.drawRange.start,t.drawRange.count=e.drawRange.count,t.userData=e.userData,t}function Zh(e){if(Object.values(e).forEach(e=>{e?.isTexture&&e.dispose()}),e.isShaderMaterial){let t=e.uniforms;t&&Object.values(t).forEach(e=>{let t=e.value;t?.isTexture&&t.dispose()})}e.dispose()}function Qh(e){let t=e.geometry;t&&t.dispose();let n=e.skeleton;n&&n.dispose();let r=e.material;r&&(Array.isArray(r)?r.forEach(e=>Zh(e)):r&&Zh(r))}function $h(e){e.traverse(Qh)}function eg(e,t){console.warn(`VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.`);let n=t?.experimentalSameBoneCounts??!1,r=[];e.traverse(e=>{e.type===`SkinnedMesh`&&r.push(e)});let i=new Map,a=0;for(let e of r){let t=e.geometry.getAttribute(`skinIndex`);if(i.has(t))continue;let n=new Map,r=new Map;for(let e=0;e<t.count;e++)for(let i=0;i<t.itemSize;i++){let a=Bh(t,e,i),o=n.get(a);o??(o=n.size,n.set(a,o),r.set(o,a)),Vh(t,e,i,o)}t.needsUpdate=!0,i.set(t,r),a=Math.max(a,n.size)}for(let e of r){let t=e.geometry.getAttribute(`skinIndex`),r=i.get(t),o=[],s=[],c=n?a:r.size;for(let t=0;t<c;t++){let n=r.get(t)??0;o.push(e.skeleton.bones[n]),s.push(e.skeleton.boneInverses[n])}let l=new Xs(o,s);e.bind(l,new V)}}function tg(e,t){let n=e.position.count,r=Array(n),i=0,a=t.array;for(let e=0;e<a.length;e++){let t=a[e];r[t]||(r[t]=!0,i++)}return{isVertexUsed:r,vertexCount:n,verticesUsed:i}}function ng(e){let t=[],n=[],r=0;for(let i=0;i<e.length;i++)if(e[i]){let e=r++;t[i]=e,n[e]=i}return{originalIndexNewIndexMap:t,newIndexOriginalIndexMap:n}}function rg(e,t){t.name=e.name,t.morphTargetsRelative=e.morphTargetsRelative,e.groups.forEach(e=>{t.addGroup(e.start,e.count,e.materialIndex)}),t.boundingBox=e.boundingBox?.clone()??null,t.boundingSphere=e.boundingSphere?.clone()??null,t.setDrawRange(e.drawRange.start,e.drawRange.count),t.userData=e.userData}function ig(e,t,n){let r=t.array,i=new r.constructor(r.length);for(let e=0;e<r.length;e++){let t=r[e];i[e]=n[t]}e.setIndex(new U(i,t.itemSize,t.normalized))}function ag(e,t,n){let r=e.constructor,i=new r(t.length*n),a=!0;for(let r=0;r<t.length;r++){let o=t[r]*n,s=r*n;for(let t=0;t<n;t++){let n=e[o+t];i[s+t]=n,a&&=n===0}}return[i,a]}function og(e){let t=new Map,n=[];for(let[r,i]of Object.entries(e))if(i.isInterleavedBufferAttribute){let e=i,n=e.data,a=t.get(n)??[];t.set(n,a),a.push([r,e])}else{let e=i;n.push([r,e])}return[t,n]}function sg(e,t,n){let[r,i]=og(t);for(let[t,i]of r){let r=t.array,{stride:a}=t,[o,s]=ag(r,n,a),c=new Ns(o,a);c.setUsage(t.usage);for(let[t,n]of i){let{itemSize:r,offset:i,normalized:a}=n,o=new Fs(c,r,i,a);e.setAttribute(t,o)}}for(let[t,r]of i){let i=r.array,{itemSize:a,normalized:o}=r,[s,c]=ag(i,n,a);e.setAttribute(t,new U(s,a,o))}}function cg(e){let t=new Map,n=[];for(let[r,i]of Object.entries(e)){let e=r;for(let r=0;r<i.length;r++){let a=i[r];if(a.isInterleavedBufferAttribute){let n=a,i=n.data,o=t.get(i)??[];t.set(i,o),o.push([e,r,n])}else{let t=a;n.push([e,r,t])}}}return[t,n]}function lg(e,t,n){let r=!0,[i,a]=cg(t),o={};for(let[e,t]of i){let i=e.array,{stride:a}=e,[s,c]=ag(i,n,a);r&&=c;let l=new Ns(s,a);l.setUsage(e.usage);for(let[e,n,r]of t){let{itemSize:t,offset:i,normalized:a}=r,s=new Fs(l,t,i,a);o[e]??(o[e]=[]),o[e][n]=s}}for(let[e,t,i]of a){let a=i,s=a.array,{itemSize:c,normalized:l}=a,[u,d]=ag(s,n,c);r&&=d,o[e]??(o[e]=[]),o[e][t]=new U(u,c,l)}e.morphAttributes=r?{}:o}function ug(e){let t=new Map;e.traverse(e=>{if(!e.isMesh)return;let n=e,r=n.geometry,i=r.index;if(i==null)return;let a=t.get(r);if(a!=null){n.geometry=a;return}let{isVertexUsed:o,vertexCount:s,verticesUsed:c}=tg(r.attributes,i);if(c===s)return;let{originalIndexNewIndexMap:l,newIndexOriginalIndexMap:u}=ng(o),d=new Mr;rg(r,d),t.set(r,d),ig(d,i,l),sg(d,r.attributes,u),lg(d,r.morphAttributes,u),n.geometry=d}),Array.from(t.keys()).forEach(e=>{e.dispose()})}function dg(e){e.meta?.metaVersion===`0`&&(e.scene.rotation.y=Math.PI)}var fg=class{constructor(){}};fg.combineMorphs=zh,fg.combineSkeletons=Hh,fg.deepDispose=$h,fg.removeUnnecessaryJoints=eg,fg.removeUnnecessaryVertices=ug,fg.rotateVRM0=dg;var pg=-4.6;function mg(e){let t=e.length;return{hairlineY:n=>{let r=(n+Math.PI)/(2*Math.PI)*t-.5,i=Math.floor(r),a=r-i,o=e[(i%t+t)%t];return o+(e[((i+1)%t+t)%t]-o)*a},hairlineGLSL:`
    const float HAIRLINE[${t}] = float[${t}](${e.map(e=>e.toFixed(4)).join(`, `)});
    float hairlineY(float phi) {
      float f = (phi + 3.14159265) / 6.2831853 * ${t}.0 - 0.5;
      float i = floor(f);
      int a = int(mod(i, ${t}.0)), b = int(mod(i + 1.0, ${t}.0));
      return mix(HAIRLINE[a], HAIRLINE[b], f - i);
    }`}}function hg(e,t){if(t>e[0].y)return null;for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];if(t<=r.y&&t>=i.y){let e=(r.y-t)/(r.y-i.y),n=r.rx+(i.rx-r.rx)*e;return{rx:n,rz:n*(r.ratio+(i.ratio-r.ratio)*e),z:r.z+(i.z-r.z)*e,slope:(i.rx-r.rx)/(i.y-r.y)}}}return null}function gg(e,t,n,r){let i=hg(e,t[n+1]);if(!i)return!1;let a=t[n]/(i.rx+r),o=(t[n+2]-i.z)/(i.rz+r),s=Math.hypot(a,o);if(s>=1||s<1e-6)return!1;let c=1-s,l=-i.slope,u=1+l*l;return t[n]+=a/s*c*(i.rx+r)/u,t[n+2]+=o/s*c*(i.rz+r)/u,t[n+1]+=c*(i.rx+r)*l/u,!0}var _g=`#8fe3cf`;function vg(e,t=1.08,n=.06){return e.map(e=>{let r=e.rx*t+n;return{...e,rx:r,ratio:(e.rx*e.ratio*t+n)/r}})}var yg=44,bg=120,xg=13;function Sg(e,t,n){let r=e.length,i=Math.min(r-2,Math.floor(t)),a=t-i,o=n(e[Math.max(0,i-1)]),s=n(e[i]),c=n(e[i+1]),l=n(e[Math.min(r-1,i+2)]),u=a*a,d=u*a;return .5*(2*s+(-o+c)*a+(2*o-5*s+4*c-l)*u+(-o+3*s-3*c+l)*d)}function Cg(e){let t=new bs,n=e.length-1,r=new Float32Array(15972),i=e[0].y,a=e[n].y;for(let t=0;t<yg;t++){let o=(t/43)**1.35*n,s=Sg(e,o,e=>e.rx),c=Sg(e,o,e=>e.y),l=Sg(e,o,e=>e.ratio),u=Sg(e,o,e=>e.z),d=Math.min(1,Math.max(0,(i-c)/(i-a))),f=.045*Math.min(1,d*2.2)**1.5;for(let e=0;e<=bg;e++){let n=e/bg*Math.PI*2,i=1-f*(1+Math.sin(n*xg+.6)*.7+.3*Math.sin(n*xg*2.3+1.7))*.5,a=(t*121+e)*3;r[a]=Math.sin(n)*s*i,r[a+1]=c-f*.6*Math.abs(Math.sin(n*xg*.5))*d,r[a+2]=u+Math.cos(n)*s*l*i}}let o=[];for(let e=0;e<43;e++)for(let t=0;t<bg;t++){let n=e*121+t,r=n+bg+1;o.push(n,r,n+1,n+1,r,r+1)}let s=new Mr;s.setAttribute(`position`,new U(r,3)),s.setIndex(o),s.computeVertexNormals();let c=new ql({color:_g,roughness:.42,sheen:.8,sheenRoughness:.35,sheenColor:new H(`#e6fff7`),clearcoat:.25,clearcoatRoughness:.5,side:2});return t.add(new Wr(s,c)),t}function wg(e,t,n,r){let i=n.r[0]+r,a=n.r[1]+r,o=n.r[2]+r,s=(e[t]-n.c[0])/i,c=(e[t+1]-n.c[1])/a,l=(e[t+2]-n.c[2])/o,u=s*s+c*c+l*l;if(u>=1||u<1e-8)return!1;let d=1/Math.sqrt(u);return e[t]=n.c[0]+s*d*i,e[t+1]=n.c[1]+c*d*a,e[t+2]=n.c[2]+l*d*o,!0}function Tg(e,t,n,r,i){let a=(e.x-i.c[0])/i.r[0],o=(e.y-i.c[1])/i.r[1],s=(e.z-i.c[2])/i.r[2],c=t/i.r[0],l=n/i.r[1],u=r/i.r[2],d=c*c+l*l+u*u,f=2*(a*c+o*l+s*u),p=a*a+o*o+s*s-1,m=f*f-4*d*p;if(m<0)return!1;let h=(-f-Math.sqrt(m))/(2*d);return h>0&&h<.985}function Eg(e,t,n,r,i){let a=(e.x-i.c[0])/i.r[0],o=(e.y-i.c[1])/i.r[1],s=(e.z-i.c[2])/i.r[2],c=t/i.r[0],l=n/i.r[1],u=r/i.r[2],d=c*c+l*l+u*u,f=2*(a*c+o*l+s*u),p=a*a+o*o+s*s-1,m=f*f-4*d*p;if(m<0)return!1;let h=Math.sqrt(m),g=(-f-h)/(2*d),_=(-f+h)/(2*d);return g>0&&_<.985}var Dg=new B(0,.05,0),Og=.85,kg=1.04,Ag=[[0,.3],[.6,.26],[1.2,.04],[1.6,-.08],[2.2,-.35],[2.7,-.6],[Math.PI,-.66]],jg=32;async function Mg(e){let t=new pd;t.register(e=>new Ih(e));let n=await t.loadAsync(e),r=n.userData.vrm;fg.rotateVRM0(r),fg.removeUnnecessaryVertices(n.scene);let i=[];r.scene.traverse(e=>{let t=e;t.isMesh&&((Array.isArray(t.material)?t.material:[t.material]).some(e=>/hair|cloth/i.test(e.name))&&i.push(t),t.frustumCulled=!1)}),i.forEach(e=>e.removeFromParent());let a=r.humanoid,o=e=>a.getRawBoneNode(e)?.getWorldPosition(new B);r.update(0),r.scene.updateMatrixWorld(!0);let s=o(`leftUpperArm`)??o(`neck`)??new B(.2,0,0);for(let e of[`leftShoulder`,`rightShoulder`,`leftUpperArm`,`rightUpperArm`])a.getRawBoneNode(e)?.scale.setScalar(.001);r.update(0),r.scene.updateMatrixWorld(!0);let c=o(`neck`)??o(`head`),l=o(`leftEye`),u=o(`rightEye`),d=o(`head`),f=l&&u?(l.y+u.y)/2:d.y+(d.y-c.y)*.9,p=Math.abs(s.x),m=[],h=1/0,g=new B;r.scene.traverse(e=>{let t=e;if(!t.isMesh||!t.visible)return;let n=/face/i.test(t.name)||/face/i.test(t.parent?.name??``),r=t.geometry.getAttribute(`position`);for(let e=0;e<r.count;e+=2)t.getVertexPosition(e,g),g.applyMatrix4(t.matrixWorld),m.push(g.x,g.y,g.z),n&&(h=Math.min(h,g.y))});let _=new Float32Array(m),v=_.length/3,y=Lg(_,1,e=>_[e*3+1]>c.y),b=f+.35*(y-f),x=.05*(y-f),S=1e9,C=-1e9,w=1e9,T=-1e9;for(let e=0;e<v;e++){let t=_[e*3+1];Math.abs(t-b)>x||(S=Math.min(S,_[e*3]),C=Math.max(C,_[e*3]),w=Math.min(w,_[e*3+2]),T=Math.max(T,_[e*3+2]))}let E=f+.03*(y-f)*3,D={c:[(S+C)/2,E,(w+T)/2],r:[(C-S)/2*kg,(y-E)*kg,(T-w)/2*kg]},O=0,k=1e9,A=1e9,j=-1e9;for(let e=0;e<v;e++){let t=_[e*3],n=_[e*3+1],r=_[e*3+2];n>f||n<c.y||Math.abs(t-D.c[0])>D.r[0]||(O=Math.max(O,Math.abs(t-D.c[0])),k=Math.min(k,n),A=Math.min(A,r),j=Math.max(j,r))}let ee=Number.isFinite(h)?h:Math.max(k,c.y),te={c:[D.c[0],(ee+D.c[1])/2,(A+j)/2],r:[O,(D.c[1]-ee)/2,(j-A)/2]},M=y-ee,ne=s.y,re=(e,t)=>{let n=0,r=1e9,i=-1e9;for(let a=0;a<v;a++)Math.abs(_[a*3+1]-e)>.03*M||Math.abs(_[a*3])>t||(n=Math.max(n,Math.abs(_[a*3]-D.c[0])),r=Math.min(r,_[a*3+2]),i=Math.max(i,_[a*3+2]));return{rx:n,z:(r+i)/2,rz:(i-r)/2}},ie=Math.min(c.y,ee-.05*M),ae=ie+.45*(ee-ie),oe=re(ae,p*.6),se=re(ne,p*3),ce=Math.max(D.r[0]/kg*2.1,se.rx*1.25,oe.rx*2.5),le=Math.min(ne,ie)-.04*M,ue=Og/D.r[0],de=D.c,fe=Math.max(.72,oe.rz/Math.max(oe.rx,1e-6)),pe=[{rx:oe.rx*1.12,y:ae,ratio:fe,z:oe.z},{rx:oe.rx*1.3,y:ie,ratio:fe,z:oe.z},...[[ce*.5,le],[ce*.78,le-.26*M],[ce*.94,le-.63*M],[ce*1.02,le-1.5*M]].map(([e,t])=>({rx:e,y:t,ratio:.72,z:oe.z}))].filter(e=>(e.y-de[1])*ue+Dg.y>pg+.3),me=Og/D.r[0],he=D.c,ge=(e,t,n)=>[(e-he[0])*me+Dg.x,(t-he[1])*me+Dg.y,(n-he[2])*me+Dg.z],_e=e=>({c:ge(...e.c),r:[e.r[0]*me,e.r[1]*me,e.r[2]*me]}),ve=_e(D),N=_e(te),ye=pe.map(e=>{let t=ge(0,e.y,e.z);return{rx:e.rx*me,y:t[1],ratio:e.ratio,z:t[2]}});for(let e=1;e<ye.length;e++)ye[e].rx<ye[e-1].rx&&(ye[e]={...ye[e-1],y:ye[e].y});let be=ye[ye.length-1];ye.push({...be,rx:be.rx*1.05,y:pg});let xe=vg(ye),{hairlineY:P,hairlineGLSL:Se}=mg(Fg()),F=new yr({color:new H(`#5a3524`),vertexColors:!0,alphaToCoverage:!0}),I=Ig(r.scene,D,P,M*.015,F);r.scene.scale.setScalar(me),r.scene.position.set(Dg.x-he[0]*me,Dg.y-he[1]*me,Dg.z-he[2]*me);let Ce=new bs,we=new hi(new B(0,1,0),-(ye[0].y-.05));r.scene.traverse(e=>{let t=e;if(t.isMesh)for(let e of Array.isArray(t.material)?t.material:[t.material])e.clippingPlanes=[we],e.clipping=!0}),I.scale.setScalar(me),I.position.copy(r.scene.position),Ce.add(r.scene,I,Cg(xe));let Te={c:[N.c[0],(N.c[1]-N.r[1]+ye[1].y)/2,ye[0].z],r:[ye[0].rx*.8,Math.abs(N.c[1]-ye[1].y),ye[0].rx*.8]},Ee={c:[0,(ye[2].y+pg)/2,be.z],r:[be.rx*.95,(ye[2].y-pg)/2,be.rx*be.ratio*1.1]},De=new Zn;r.lookAt&&(r.lookAt.target=De);let Oe=2+Math.random()*3,ke=0,Ae=`neutral`,je=null,Me=0,Ne={},Pe=null,Fe=(e,t,n)=>gg(xe,e,t,n),Ie=[];r.scene.traverse(e=>{e.isMesh&&(/face/i.test(e.name)||/face/i.test(e.parent?.name??``))&&Ie.push(e)});let Le=new ed;return{object:Ce,scalp:ve,headCenter:new B(ve.c[0],ve.c[1]-ve.r[1]*.15,ve.c[2]),hairlineY:P,hairlineGLSL:Se,preferToonHair:!0,landmarks:{topY:ge(0,y,0)[1],eyeY:ge(0,f,0)[1],chinY:ge(0,ee,0)[1],collarY:ye[0].y},scalpCap:I,bindHairColor(e){F.color=e.value.clone().multiplyScalar(.55),Pe=e.value},update(e,t){Pe&&F.color.copy(Pe).multiplyScalar(.55),De.position.copy(t.position),Oe-=e,Oe<=0&&(ke=.14,Oe=2.5+Math.random()*3.5),ke-=e,Me-=e;let n=Pg[Me>0&&je?je:Ae],i=Math.min(1,e*6);for(let e of Ng)Ne[e]=(Ne[e]??0)+((n[e]??0)-(Ne[e]??0))*i,r.expressionManager?.setValue(e,Ne[e]);let a=(Ne.happy??0)>.6||(Ne.relaxed??0)>.5;r.expressionManager?.setValue(`blink`,+(ke>0&&!a)),r.update(e)},pickFace(e){Ce.updateMatrixWorld(!0),Le.ray.copy(e);let t=Le.intersectObjects(Ie,!1)[0];if(!t?.face)return null;let n=t.face.normal.clone().transformDirection(t.object.matrixWorld);return n.dot(e.direction)>0&&n.negate(),{point:t.point.clone(),normal:n}},mood(e,t){t?(je=e,Me=t):Ae=e},collide(e,t,n){let r=wg(e,t,ve,n);return r=wg(e,t,N,n)||r,Fe(e,t,n*.6)||r},collideBody:Fe,occluded(e,t,n,r){let i=t-e.x,a=n-e.y,o=r-e.z;return Tg(e,i,a,o,ve)||Tg(e,i,a,o,N)||Tg(e,i,a,o,Te)||Eg(e,i,a,o,Ee)}}}var Ng=[`happy`,`sad`,`relaxed`,`surprised`],Pg={neutral:{},smile:{happy:.35},joy:{happy:1},sad:{sad:1},relaxed:{relaxed:.8},surprised:{surprised:.8}};function Fg(){return Array.from({length:jg},(e,t)=>{let n=Math.abs(-Math.PI+(t+.5)*(2*Math.PI/jg)),r=0;for(;r<Ag.length-2&&Ag[r+1][0]<n;)r++;let[i,a]=Ag[r],[o,s]=Ag[r+1];return a+(s-a)*Math.min(1,Math.max(0,(n-i)/(o-i)))})}function Ig(e,t,n,r,i){let a=[],o=new B,s=new B,c=new B,l=new B,u=e=>{let r=(e.x-t.c[0])/t.r[0],i=(e.y-t.c[1])/t.r[1],a=(e.z-t.c[2])/t.r[2],o=Math.hypot(r,i,a);return o<1.5&&i/o>n(Math.atan2(r,a))-.06};e.traverse(e=>{let n=e;if(!n.isMesh)return;let i=n.geometry.getAttribute(`position`),d=n.geometry.getIndex(),f=d?d.count/3:i.count/3,p=(e,t)=>n.getVertexPosition(e,t).applyMatrix4(n.matrixWorld);for(let e=0;e<f;e++){let n=d?d.getX(e*3):e*3,i=d?d.getX(e*3+1):e*3+1,f=d?d.getX(e*3+2):e*3+2;if(p(n,o),p(i,s),p(f,c),u(o)||u(s)||u(c))for(let e of[o,s,c])l.set(e.x-t.c[0],e.y-t.c[1],e.z-t.c[2]).normalize().multiplyScalar(r),a.push(e.x+l.x,e.y+l.y,e.z+l.z)}});let d=new Mr;d.setAttribute(`position`,new wr(a,3)),d.setAttribute(`color`,new wr(new Float32Array(a.length/3*4).fill(1),4)),d.computeVertexNormals();let f=new Wr(d,i);return f.frustumCulled=!1,f}function Lg(e,t,n){let r=-1e9;for(let i=0;i<e.length/3;i++)n(i)&&(r=Math.max(r,e[i*3+t]));return r}var Rg=class{camera;canvas;vp=new V;right=new B;up=new B;width=1;height=1;constructor(e,t){this.camera=e,this.canvas=t}update(){this.camera.updateMatrixWorld(),this.vp.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight}project(e,t,n){let r=this.vp.elements,i=e[t],a=e[t+1],o=e[t+2],s=r[3]*i+r[7]*a+r[11]*o+r[15];n[0]=((r[0]*i+r[4]*a+r[8]*o+r[12])/s+1)*.5*this.width,n[1]=(1-(r[1]*i+r[5]*a+r[9]*o+r[13])/s)*.5*this.height,n[2]=s}worldDelta(e,t,n){let r=2*n*Math.tan(yt.degToRad(this.camera.fov/2))/this.height;this.right.setFromMatrixColumn(this.camera.matrixWorld,0),this.up.setFromMatrixColumn(this.camera.matrixWorld,1);let i=this.right,a=this.up;return[(i.x*e-a.x*t)*r,(i.y*e-a.y*t)*r,(i.z*e-a.z*t)*r]}},zg=new B(0,-.85,0),Bg=new B(0,-.3,0),Vg=8.6,Hg=.5,Ug=1.5,Wg=new B(0,-1.7,0),Gg=.07,Kg=-.35,qg=.75,Jg=-2.3,Yg=.9,Xg=.82,Zg=class{canvas;renderer;scene=new Ms;camera=new oi(30,16/9,.1,100);yaw=0;yawTarget=0;zoom=1;zoomTarget=1;pitch=Gg;pitchTarget=Gg;lift=0;liftTarget=0;fit=1;bg=null;target=new B;key=new Lu(16777215,1.9);tmpA=new B;tmpB=new B;constructor(e){this.canvas=e,this.renderer=new js({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=Re,this.renderer.localClippingEnabled=!0,this.scene.background=new H(`#e6d3f3`),this.scene.add(this.camera),this.scene.add(new wu(16774138,6969464,1.25)),this.attachLight(this.key,[2.5,3.5,4]),this.attachLight(new Lu(16765162,.8),[-3,2,-4]),addEventListener(`resize`,()=>this.resize()),this.resize()}attachLight(e,t){e.position.set(...t),e.target.position.set(0,0,-8.6),this.camera.add(e,e.target)}setBackground(e){e.colorSpace=Re,this.bg&&this.bg!==e&&this.bg.dispose(),this.bg=e,this.scene.background=e,this.coverBackground()}coverBackground(){let e=this.bg,t=e?.image;if(!e||!t?.width)return;let n=this.camera.aspect/(t.width/t.height);n>1?e.repeat.set(1,1/n):e.repeat.set(n,1),e.offset.set((1-e.repeat.x)/2,(1-e.repeat.y)/2),e.updateMatrix()}resize(){let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),Object.assign(this.canvas.style,{left:`0`,top:`0`,width:`${e}px`,height:`${t}px`}),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fit=Math.max(1,Xg/this.camera.aspect),this.coverBackground()}turn(e){this.yawTarget+=e*Math.PI/4}zoomBy(e){this.zoomTarget=Math.min(Ug,Math.max(Hg,this.zoomTarget*e))}tilt(e){this.pitchTarget=Math.min(qg,Math.max(Kg,this.pitchTarget+e))}pan(e){let t=2*(Vg*this.zoomTarget*this.fit)*Math.tan(yt.degToRad(this.camera.fov/2))/Math.max(1,this.canvas.clientHeight),n=$g(this.zoomTarget);this.liftTarget=Math.min(Yg-n,Math.max(Jg-n,this.liftTarget+e*t)),this.lift=this.liftTarget}nudge(e){let t=2*(Vg*this.zoomTarget*this.fit)*Math.tan(yt.degToRad(this.camera.fov/2)),n=$g(this.zoomTarget);this.liftTarget=Math.min(Yg-n,Math.max(Jg-n,this.liftTarget+e*t*.2))}look(e){this.yawTarget=this.yaw+Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)),this.pitchTarget=e.pitch,this.zoomTarget=e.zoom,this.liftTarget=0}update(e){let t=Math.min(1,e*7);this.yaw+=(this.yawTarget-this.yaw)*t,this.zoom+=(this.zoomTarget-this.zoom)*t,this.pitch+=(this.pitchTarget-this.pitch)*t;let n=$g(this.zoomTarget);this.liftTarget=Math.min(Yg-n,Math.max(Jg-n,this.liftTarget)),this.lift+=(this.liftTarget-this.lift)*t,e_(this.camera,{yaw:this.yaw,pitch:this.pitch,zoom:this.zoom,lift:this.lift},this.fit,this.target)}keyLightDir(e){return this.key.getWorldPosition(this.tmpA),this.key.target.getWorldPosition(this.tmpB),e.copy(this.tmpA).sub(this.tmpB).normalize()}render(){this.renderer.render(this.scene,this.camera),this.opaque()}opaque(){let e=this.renderer.getContext();e.colorMask(!1,!1,!1,!0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.colorMask(!0,!0,!0,!0),this.renderer.resetState()}},Qg={yaw:0,pitch:Gg,zoom:.8};function $g(e){return e<=1?zg.y+(Bg.y-zg.y)*(1-(e-Hg)/.5):zg.y+(Wg.y-zg.y)*(e-1)/.5}function e_(e,t,n=1,r=new B){t.zoom<=1?r.lerpVectors(Bg,zg,(t.zoom-Hg)/.5):r.lerpVectors(zg,Wg,(t.zoom-1)/.5),r.y+=t.lift??0;let i=Vg*t.zoom*n,a=Math.cos(t.pitch)*i;e.position.set(r.x+Math.sin(t.yaw)*a,r.y+Math.sin(t.pitch)*i+.3*t.zoom,r.z+Math.cos(t.yaw)*a),e.lookAt(r),e.updateMatrixWorld()}var t_={rotate:{title:`Turn your phone sideways`,sub:`Hair Stylist Live plays in landscape`},hud:{live:`LIVE`,gallery:`Gallery`,studio:`Studio`,level:`Lv {n}`,soundOn:`Sound on`,soundOff:`Sound off`,sound:`Sound`,music:`Music`,settings:`Settings`,musicOn:`Music on`,musicOff:`Music off`,mutedBySite:`Muted by the site`,language:`Language`},order:{request:`{client}'s request`,seeAngle:`See her from this angle`,freeName:`{client}: free style`,freeTitle:`Anything goes ✨`,freeK:`Make her`,freeV:`look amazing`,updo:`Updo`,bangs:`Bangs`,sides:`Sides`,back:`Back`,style:`Style`,color:`Color`,curtain:`curtain`,sideSwept:`side-swept`,forward:`combed straight`,please:`{client}: "{title}, please!"`,trend:`🔥 Trend of the day: {title}. Double rewards!`,washFirst:`{client} wants a wash first: 🫧 shampoo, 💧 rinse, 💨 dry`,dyeStyles:{ombre:`ombré`,roots:`roots`,twotone:`two-tone`,split:`split`,money:`face-framing`}},lengths:{forehead:`above the brows`,brows:`to the brows`,cheek:`to the cheekbones`,chin:`to the chin`,shoulder:`to the shoulders`,chest:`to the chest`},shapes:{bangs:{v:`V`,round:`rounded`,arch:`arched`},back:{v:`V`,u:`U`}},textures:{straight:`sleek`,wavy:`wavy`,curly:`curly`},updos:{down:`Down`,ponytail:`Ponytail`,bun:`Bun`,"space-buns":`Space buns`},bangsStyles:{forward:`⇣ Forward`,"side-left":`⇠ Side`,"side-right":`Side ⇢`,curtain:`⇠⇢ Curtain`},chat:{title:`STREAM CHAT`,placeholder:`Say something...`,you:`you`},tools:{wash:`Shampoo`,cut:`Scissors`,comb:`Comb`,curl:`Curl`,wave:`Waver`,straight:`Straighten`,dye:`Dye`,dry:`Dry`,style:`Style`},toolNames:{wash:`Shampoo`,cut:`Scissors`,comb:`Comb`,wave:`Waver`,style:`Accessories & bling`,curl:`Curling iron`,straight:`Straightener`,dye:`Hair dye`,dry:`Hair dryer`},toolHints:{wash:`Rub shampoo into the hair, rinse it, then blow-dry`,style:`Pick an accessory or a sticker, then tap her hair or face`,straight:`Hold the straightener on the hair to make it sleek`,curl:`Hold the curling iron on the hair for bouncy curls`,wave:`Hold the waver on the hair for soft mermaid waves`,dye:`Pick a color, then paint it onto the hair`,cut:``,comb:``,dry:``},toolLocked:`{tool} unlocks at level {n}`,colorLocked:`{color} dye unlocks at level {n}`,colors:{brown:`brown`,black:`black`,blonde:`blonde`,ginger:`ginger`,pink:`pink`,mint:`mint`,lilac:`lilac`,blue:`blue`,platinum:`platinum`},dye:{full:`Full`,ombre:`Ombré`,roots:`Roots`,front:`By face`,erase:`Remove dye`,colorDye:`{color} dye`,ombreDye:`ombré dye`},comb:{bangs:`Bangs`,updo:`Updo`},tray:{accessories:`Accessories`,face:`Face`,undo:`↶ Undo`,clear:`✕ Clear`},rinse:`Rinse`,turn:`Turn the chair`,zoomIn:`Zoom in`,zoomOut:`Zoom out`,moveUp:`View higher`,moveDown:`View lower`,finish:`Finish style`,skip:`Skip`,result:{verdicts:[`Oh no…`,`Not bad!`,`Gorgeous!`,`Perfect!`],subs:[`{client} is unsure about her new look`,`Try again — you’ve got this!`,`{client} loves her new look`,`{client} loves her new look`],free:`Stunning! ✨`,freeSub:`{client} loves her free-style look`,score:`STYLE SCORE`,followers:{one:`+{n} follower`,other:`+{n} followers`},trend:`TREND ×2`,levelUp:`Level {n}!`,unlocked:`Unlocked: {list}`,next:`Next client ▸`,retry:`↺ Try again`,freeBtn:`Free style ✨`},parts:{bangs:`Bangs`,sides:`Sides`,back:`Back`,sleek:`Sleek`,waves:`Waves`,curls:`Curls`,wash:`Wash`,dry:`Dry`,color:`Color`,ombre:`Ombré`,ponytail:`Ponytail`,bun:`Bun`,spaceBuns:`Space buns`,bangsStyle:`Bangs style`,accessory:`Accessory`,bling:`Bling`,roots:`Roots`,twotone:`Two-tone`,split:`Split dye`,money:`Face-framing`},studio:{title:`Your studio`,sub:`Every piece makes the stream more popular: likes +{n}% now`,owned:`In your studio ✓`,back:`Back to the stream`,bought:`omg the {item} 😍 the studio looks so cute`},needLikes:`{item}: ♥{n} more likes needed`,gallery:{title:`Gallery`,empty:`Finished looks will show up here`,free:`Free style ✨`},gift:{title:`Daily gift 🎁`,sub:`Come back every day: the gifts get bigger!`,day:`Day {n}`,claim:`Claim ♥{n}`,surprise:`+ surprise`},gen:{cuts:{bob:`Bob`,lob:`Lob`,long:`Long layers`,aline:`A-line bob`,pixie:`Pixie`,wolf:`Wolf cut`,shag:`Shaggy lob`,hime:`Hime cut`,framing:`Face-framing layers`,micro:`Micro bangs`,babybob:`Baby bangs bob`},dyes:{full:`{color} hair`,ombre:`{color} ombré`,roots:`{color} roots`,twotone:`{color} to {color2}`,split:`{color} & {color2} split`,money:`{color} face-framing`},curtain:`Curtain bangs`,side:`Side bangs`,wash:`Fresh wash`,bangsShapes:{v:`V bangs`,round:`Rounded bangs`,arch:`Arched bangs`},backShapes:{v:`V-cut back`,u:`U-cut back`}},hints:{dryNow:`Now blow-dry it with the hair dryer 💨`,newTool:`New tool: {tool}! {hint}`,paint:`Paint the color onto the hair 🖌`,erase:`Brush over the dye to wash it out`,newItem:`New in your kit: {item}! ✨`,pickItem:`Pick an accessory or a sticker in the tray first`,pickColor:`Pick a color from the palette first`},stuck:{new:`New! {hint}`,wash:`Rub shampoo into her hair 🫧 then press {rinse}`,dry:`Her hair is still wet: blow-dry it 💨`,rinse:`Press {rinse} to wash the shampoo off 💧`,noWash:`This order has no wash: skip the shampoo`,restored:`The hair is back as she came in: try that cut again ✂️`,roots:`Colored roots: {path}, then paint near the roots 🖌`,twotone:`Two-tone: {path} all over, then {path2} on the ends 🖌`,split:`Split dye: {color} on one half, {color2} on the other (turn the chair) 🖌`,money:`Face-framing streaks: {path}, only on the locks by her face 🖌`,cut:{bangs:`Cut the bangs along the pink dots ✂`,sides:`Cut the sides along the pink dots ✂`,back:`Turn the chair and cut the back along the pink dots ✂`},bangsStyle:`Style the bangs: {path}`,texture:`Hold the {tool} on her hair`,color:`Dye it: {path}, then paint the hair 🖌`,ombre:`Ombré: {path}, then paint the ends 🖌`,updo:`Tie it up: {path}`,accessory:`Finishing touch: {path}, then tap her hair`,bling:`Add bling: {path}, then tap her face`,finish:`Looks like the photo! Press {finish} ✦`,free:`Anything goes! Try any tool, then press {finish} ✦`},tutorial:{bangs:`Swipe across the bangs along the pink dots ✂`,turn:`Turn her with the round arrows on the left (or drag on empty space)`,view:`Zoom with + − and move the view with ▲ ▼`,trim:`Now cut the sides and the back to the dots`,finish:`Looks like the photo? Press Finish style ✦`},guide:{tool:`Tap {tool} in the toolbar`,tab:`Open the {tab} tab`,item:`Pick {item}`,face:`Tap her face where the photo shows`,faceMore:`Tap her face where the photo shows: {n} more`,hair:`Tap her hair to put it on`},orders:{"soft-bob":`Soft bob + bangs`,lob:`Shoulder lob`,"long-layers":`Long layers`,"a-line":`A-line bob`,pixie:`Pixie cut`,"fresh-bob":`Fresh wash + bob`,"wash-lob":`Wash & blowout lob`,"spa-layers":`Spa day layers`,"bow-bob":`Bob with a bow`,"freckle-lob":`Freckles & lob`,"curtain-lob":`Curtain bangs lob`,"side-swept-bob":`Side-swept bob`,"high-pony":`High ponytail`,"ballet-bun":`Ballerina bun`,"flower-waves":`Flower waves`,"sleek-bob":`Sleek bob`,"glass-lob":`Glass hair lob`,"curly-bob":`Curly bob`,mermaid:`Mermaid waves`,"beach-lob":`Beach wave lob`,"pink-pixie":`Pink pixie`,"blonde-bob":`Blonde bob`,"jet-black":`Jet black sleek`,"ginger-curls":`Ginger curls`,"idol-sparkle":`Idol sparkle`,"pink-space-buns":`Pink space buns`,"curly-pony":`Curly ponytail + bow`,"kitty-mint":`Kitty mint pixie`,"mint-aline":`Mint A-line`,"honey-waves":`Honey waves`,"pink-ombre":`Pink ombré lob`,"lilac-curls":`Lilac curls`,"blue-wolf":`Blue wolf cut`,"platinum-lob":`Platinum glass lob`,"sunset-ombre":`Sunset ombré waves`,"lilac-tips":`Lilac tips bob`,"princess-curls":`Princess curls`,"pastel-mermaid":`Pastel mermaid`,free:`Free style`},items:{bow:`Bow`,scrunchie:`Scrunchie`,flower:`Flower pin`,star_clip:`Star clip`,pearl_pins:`Pearl pins`,headband:`Headband`,cat_ears:`Cat ears`,crown:`Tiara`,freckle:`Freckles`,heart:`Heart`,blush:`Blush`,star:`Star`,sparkle:`Glitter`,pearl:`Pearl`,rhinestone_pink:`Pink gem`,rhinestone_clear:`Diamond`,butterfly:`Butterfly tattoo`,moon:`Moon tattoo`},decor:{fairy_lights:`Fairy lights`,plush_bunny:`Bunny plush`,poster:`Poster`,balloons:`Heart balloons`,monstera:`Monstera`,neon_live:`Neon sign`,cat_basket:`Sleepy kitten`,disco_ball:`Disco ball`,suncatcher:`Sun catcher`,photo_strip:`Photo garland`},lines:{idle:[`hiii 👋`,`omg her hair is SO long`,`the salon is so cute 💖`,`first time catching the stream live!!`,`what are we doing today?`,`love this vibe ✨`,`can you do mine next 🥺`,`the ring light 😍`,`chat is she gonna cut the bangs`,`asmr stylist era`],greet:[`welcome {client}!! 💕`,`{title}?? yesss`,`{client} is gonna look sooo good`,`ooh {title} is such a vibe`],cut:[`the snip sound 😩🤌`,`CUT IT ✂️✂️`,`bye bye split ends`,`so satisfying`,`omg the hair falling 😳`,`trim queen 👑`],curl:[`curls!! 🌀`,`the sizzle asmr`,`bouncy bouncy`,`ringlets 😍`],straight:[`glass hair ✨`,`sleeeek`,`so shiny omg`],dye:[`THE COLOR 😍`,`new color who dis`,`ok this color slaps`,`dye job of the year`],dry:[`wind machine 💨`,`blowout time`,`shampoo commercial vibes`],comb:[`brushing asmr`,`so smooth`,`detangle king`],wash:[`shampoo asmr 🫧`,`so foamy!!`,`the bubbles 😍`,`scalp massage pls`,`bubble bath for hair`],rinse:[`the water sound 😌`,`rinse rinse rinse`,`spa day 💧`,`so relaxing`],style:[`so cute!!`,`omg the details 😍`,`accessorize queen 👑`,`that sparkle ✨`,`cuteness overload`,`i need this look`],result:[[`hmm... 😬`,`it is... a choice`,`she might cry lol`,`bold move`],[`cute!`,`not bad 👏`,`pretty good ngl`,`i like it`],[`SO PRETTY 😍`,`she looks amazing!!`,`glow up 💅`,`teach me pls`],[`PERFECTION 💯`,`CHEF'S KISS 😘🤌`,`this is the one!!!`,`iconic. legendary.`,`i'm crying it's so good 😭`]]}},n_=`modulepreload`,r_=function(e,t){return new URL(e,t).href},i_={},a_=function(e){return e.pathname.endsWith(`.css`)},o_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=r_(t,n);let r=s(t);if(r.href in i_)return;i_[r.href]=!0;let i=a_(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:n_,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},s_=[[`en`,`English`],[`es`,`Español`],[`pt`,`Português`],[`fr`,`Français`],[`de`,`Deutsch`],[`it`,`Italiano`],[`pl`,`Polski`],[`tr`,`Türkçe`],[`uk`,`Українська`],[`ru`,`Русский`]],c_=Object.assign({"./de.ts":()=>o_(()=>import(`./de-DzrscVRz.js`),[],import.meta.url),"./es.ts":()=>o_(()=>import(`./es-CfQbtv1S.js`),[],import.meta.url),"./fr.ts":()=>o_(()=>import(`./fr-Dyk-AVCm.js`),[],import.meta.url),"./it.ts":()=>o_(()=>import(`./it-Bo_IN4Rx.js`),[],import.meta.url),"./pl.ts":()=>o_(()=>import(`./pl-4f_JpvTC.js`),[],import.meta.url),"./pt.ts":()=>o_(()=>import(`./pt-nkSw4Zgk.js`),[],import.meta.url),"./ru.ts":()=>o_(()=>import(`./ru-BkM0Bvcs.js`),[],import.meta.url),"./tr.ts":()=>o_(()=>import(`./tr-IqaqZ_YQ.js`),[],import.meta.url),"./uk.ts":()=>o_(()=>import(`./uk-CxCb216r.js`),[],import.meta.url)}),l_=`hsl.lang`,u_=`en`,d_=t_,f_=new Intl.PluralRules(`en`),q=()=>d_,p_=()=>u_;function m_(e){let t=(e??``).toLowerCase().split(/[-_]/)[0];return s_.some(([e])=>e===t)?t:null}async function h_(e){if(e!==`en`){let t=c_[`./${e}.ts`];if(!t)return;try{d_=(await t()).dict}catch(t){console.warn(`[i18n] failed to load`,e,t);return}}else d_=t_;u_=e,f_=new Intl.PluralRules(e),document.documentElement.lang=e}function J(e,t={}){return e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(typeof t[n]==`number`?__(t[n]):t[n]):e)}function g_(e,t,n={}){return J(e[f_.select(t)]??e.other,{...n,n:t})}var __=e=>e.toLocaleString(u_),v_=[[`luna`,`#c9a27e`],[`peach`,`#f49ac1`],[`nova`,`#6b4a3a`],[`minty`,`#7fd8be`],[`coco`,`#a0714f`],[`sky`,`#f3d27a`],[`rose`,`#e36b8f`],[`kiki`,`#b59cf2`],[`yuna`,`#3b2f4a`],[`bae.sun`,`#ffb36b`],[`mochi`,`#f6c6d8`],[`lilac`,`#c4a7f5`],[`jade`,`#5fc6a3`],[`pixie`,`#ff8fb8`],[`hana.b`,`#2e2633`]],y_=class{post;nextIdle=2;lastReact=-10;time=0;constructor(e){this.post=e}say(e){let[t,n]=v_[Math.floor(Math.random()*v_.length)];this.post({name:t,color:n,text:e})}pick(e){return e[Math.floor(Math.random()*e.length)]}update(e){this.time+=e,this.nextIdle-=e,this.nextIdle<=0&&(this.say(this.pick(q().lines.idle)),this.nextIdle=3.5+Math.random()*4)}greet(e,t){let n=q().lines.greet.map(n=>J(n,{client:e,title:t}));this.say(n[0]),setTimeout(()=>this.say(this.pick(n.slice(1))),900)}react(e){this.time-this.lastReact<2.2||Math.random()<.35||(this.lastReact=this.time,this.say(this.pick(q().lines[e])),this.nextIdle=Math.max(this.nextIdle,2))}result(e){let t=q().lines.result[Math.max(0,Math.min(3,e))];for(let e=0;e<4;e++)setTimeout(()=>this.say(this.pick(t)),250+e*450)}},b_=[{model:`vroid_m.vrm`,name:`Mia`},{model:`vroid_a.vrm`,name:`Hana`},{model:`vroid_b.vrm`,name:`Zoe`,freckles:.9},{model:`vroid_o.vrm`,name:`Rin`},{model:`vroid_i.vrm`,name:`Momo`},{model:`vroid_k.vrm`,name:`Aoi`}];function x_(e){return b_.find(t=>t.model===e)?.freckles??.55}var S_=class{capacity;mesh;pos;size;uniforms={uTex:{value:null},uTint:{value:new H(1,1,1)},uAlpha:{value:1},uScale:{value:1},uLift:{value:0}};constructor(e,t,n=1){this.capacity=e,this.pos=new Float32Array(e*3),this.size=new Float32Array(e);let r=new Mr;r.setAttribute(`position`,new U(this.pos,3).setUsage(We)),r.setAttribute(`aSize`,new U(this.size,1).setUsage(We)),this.uniforms.uTint.value.set(t),this.uniforms.uAlpha.value=n;let i=new ti({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        attribute float aSize; uniform float uScale; uniform float uLift;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / -mv.z;
          mv.xyz *= max(0.05, (-mv.z - uLift) / -mv.z); // along the view ray: same spot on screen, only nearer
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uTex; uniform vec3 uTint; uniform float uAlpha;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          if (t.a < 0.04) discard;
          gl_FragColor = vec4(t.rgb * uTint, t.a * uAlpha);
          #include <colorspace_fragment>
        }`});this.mesh=new Tc(r,i),this.mesh.frustumCulled=!1,this.mesh.visible=!1;let a=new L;this.mesh.onBeforeRender=(e,t,n)=>{e.getDrawingBufferSize(a),this.uniforms.uScale.value=a.y*.5*n.projectionMatrix.elements[5]}}setTexture(e){this.uniforms.uTex.value=e}lift(e){this.uniforms.uLift.value=e}set(e,t,n,r,i){this.pos[e*3]=t,this.pos[e*3+1]=n,this.pos[e*3+2]=r,this.size[e]=i}commit(e){this.size.fill(0,e);let t=this.mesh.geometry.attributes;t.position.needsUpdate=!0,t.aSize.needsUpdate=!0,this.mesh.visible=e>0}};function C_(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createLinearGradient(0,4,0,60);n.addColorStop(0,`rgba(160,215,255,0)`),n.addColorStop(.75,`rgba(185,228,255,0.75)`),n.addColorStop(1,`rgba(255,255,255,1)`),t.fillStyle=n,t.beginPath(),t.ellipse(32,34,4.5,28,0,0,Math.PI*2),t.fill();let r=new Dc(e);return r.colorSpace=Re,r}var w_=72,T_=.2,E_=.06,D_=.075,O_=.45,k_=.8,A_=.2,j_=.045,M_=e=>(e+.5)/w_*Math.PI*2-Math.PI,N_=class{mesh;dots=[];sprites=new S_(216,`#ffffff`);t=0;bangs=new Map;lines=new Map;constructor(){this.sprites.setTexture(P_()),this.mesh=this.sprites.mesh,this.sprites.lift(O_),this.mesh.renderOrder=10}update(e,t,n,r){let i=n.headCenter,a=new Map(r),o=a.has(`sides`)&&a.has(`back`),s=[...a.keys()].filter(e=>e!==`bangs`&&!o);o&&s.push(`body`);for(let e of[...this.lines.keys()])s.includes(e)||this.lines.delete(e);if(this.t-=e,this.t<=0){this.t=T_;for(let e of s){let n=e===`body`?e=>t.cutLineY(e):a.get(e),r=e===`body`?`${a.get(`sides`)}/${a.get(`back`)}`:`${n}`,i=t.outline(e,n,w_,void 0,!0),o=t.outline(null,n,w_),s=this.lines.get(e);if(!s||s.sig!==r){s={sig:r,ys:new Float32Array(w_),target:new Float32Array(w_),r:new Float32Array(w_),gone:new Float32Array(w_),s:new Float32Array(w_)};for(let e=0;e<w_;e++)s.ys[e]=typeof n==`number`?n:n(M_(e));this.lines.set(e,s)}for(let e=0;e<w_;e++){let t=i[e]||(i[(e+w_-1)%w_]&&i[(e+1)%w_]?(i[(e+w_-1)%w_]+i[(e+1)%w_])/2:0);t?(s.target[e]=Math.max(t,o[e]),s.gone[e]=0):s.gone[e]+=T_}}}let c=Math.min(1,e*6),l=e/A_;this.dots=[];for(let[e,n]of this.lines)for(let r=0;r<w_;r++){let a=M_(r),o=e===`body`?t.backWeightAt(a)<.5?`sides`:`back`:e,s=n.target[r]>0&&n.gone[r]<=k_;if(n.s[r]=Math.min(1,Math.max(0,n.s[r]+(s?l:-l))),!n.s[r]){n.r[r]=0;continue}n.r[r]=n.r[r]?n.r[r]+(n.target[r]-n.r[r])*c:n.target[r];let u=n.r[r]+E_;this.dots.push({x:i.x+Math.sin(a)*u,y:n.ys[r],z:i.z+Math.cos(a)*u,zone:o,s:n.s[r]})}let u=new Set;if(a.has(`bangs`)){let e=new Map;for(let n of t.bangsCutPoints()){let t=n.x-i.x,r=n.z-i.z,a=Math.hypot(t,r),o=Math.round(Math.atan2(t,r)/j_);(e.get(o)?.r??-1)<a&&e.set(o,{x:n.x,y:n.y,z:n.z,r:a})}for(let[t,n]of e){u.add(t);let e=(n.r+E_)/(n.r||1),r=i.x+(n.x-i.x)*e,a=i.z+(n.z-i.z)*e,o=this.bangs.get(t);o?(o.x+=(r-o.x)*c,o.y+=(n.y-o.y)*c,o.z+=(a-o.z)*c):this.bangs.set(t,{x:r,y:n.y,z:a,s:0})}}for(let[e,t]of this.bangs){if(t.s=Math.min(1,Math.max(0,t.s+(u.has(e)?l:-l))),!t.s){this.bangs.delete(e);continue}this.dots.push({x:t.x,y:t.y,z:t.z,zone:`bangs`,s:t.s})}this.dots.forEach((e,t)=>this.sprites.set(t,e.x,e.y,e.z,D_*e.s)),this.sprites.commit(this.dots.length)}near(e,t,n,r,i,a){let o=[0,0,0],s=new Float32Array(3);for(let c of this.facing([`bangs`,`sides`,`back`],t,n))if(s[0]=c.x,s[1]=c.y,s[2]=c.z,e.project(s,0,o),Math.hypot(o[0]-r,o[1]-i)<a)return!0;return!1}facing(e,t,n){return this.dots.filter(r=>e.includes(r.zone)&&(r.x-n.x)*(t.x-n.x)+(r.z-n.z)*(t.z-n.z)>.25*Math.hypot(r.x-n.x,r.z-n.z)*Math.hypot(t.x-n.x,t.z-n.z))}};function P_(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle=`#ff4f9e`,t.beginPath(),t.arc(32,32,20,0,Math.PI*2),t.fill();let n=new Dc(e);return n.colorSpace=Re,n}var F_=[0,150,400,800,1400,2200,3200,4500,6e3,8e3],I_={cut:1,wash:2,dry:2,style:2,comb:3,straight:3,curl:3,wave:3,dye:4},L_=[{hex:`#5a3524`,name:`brown`,level:4},{hex:`#1e1a20`,name:`black`,level:4},{hex:`#d9b06a`,name:`blonde`,level:4},{hex:`#c4532e`,name:`ginger`,level:4},{hex:`#f07ab8`,name:`pink`,level:4},{hex:`#62d1b8`,name:`mint`,level:5},{hex:`#9c86f2`,name:`lilac`,level:5},{hex:`#6fa8f5`,name:`blue`,level:6},{hex:`#e8e4ee`,name:`platinum`,level:6}],R_=e=>L_.find(t=>t.name===e);function z_(e){let t=1;for(;t<F_.length&&e>=F_[t];)t++;return t}function B_(e){let t=z_(e);if(t>=F_.length)return 1;let n=F_[t-1],r=F_[t];return(e-n)/(r-n)}function V_(e){let t=q(),n=Object.keys(I_).filter(t=>I_[t]===e).map(e=>t.toolNames[e]),r=L_.filter(t=>t.level===e&&e>I_.dye).map(e=>J(t.dye.colorDye,{color:t.colors[e.name]}));return[...n,...r,...e===5?[t.dye.ombreDye]:[]]}var H_=e=>q().items[e],U_=[{id:`bow`,kind:`accessory`,price:0,place:`surface`},{id:`scrunchie`,kind:`accessory`,price:300,place:`surface`},{id:`flower`,kind:`accessory`,price:500,place:`surface`},{id:`star_clip`,kind:`accessory`,price:600,place:`surface`},{id:`pearl_pins`,kind:`accessory`,price:800,place:`surface`},{id:`headband`,kind:`accessory`,price:1e3,place:`crown`},{id:`cat_ears`,kind:`accessory`,price:1500,place:`crown`},{id:`crown`,kind:`accessory`,price:3e3,place:`crown`},{id:`freckle`,kind:`sticker`,price:0,size:.045,spray:6},{id:`heart`,kind:`sticker`,price:0,size:.165},{id:`blush`,kind:`sticker`,price:300,size:.3},{id:`star`,kind:`sticker`,price:400,size:.165},{id:`sparkle`,kind:`sticker`,price:500,size:.135,spray:3},{id:`pearl`,kind:`sticker`,price:600,size:.09},{id:`rhinestone_pink`,kind:`sticker`,price:800,size:.105},{id:`rhinestone_clear`,kind:`sticker`,price:1e3,size:.105},{id:`butterfly`,kind:`sticker`,price:1500,size:.255},{id:`moon`,kind:`sticker`,price:1500,size:.225}],W_=e=>U_.find(t=>t.id===e),G_=e=>`assets/${e.kind===`accessory`?`accessories`:`stickers`}/${e.id}.png`,K_=[`freckle`,`blush`],q_=e=>K_.includes(e.id)?`assets/stickers/icons/${e.id}.png`:G_(e),J_=(()=>{let e=new qs(new Uint8Array([90,90,90,255,190,190,190,255,255,255,255,255]),3,1);return e.minFilter=e.magFilter=i,e.needsUpdate=!0,e})(),Y_=e=>new Jl({color:e,gradientMap:J_});function X_(e,t,n,r,i){let a=new Wr(e,Y_(t));return a.position.set(...n),r&&a.scale.set(...r),i&&a.rotation.set(...i),a}var Z_=new Wl(1,20,14),Q_=1.8,$_=.05;function ev(e){let t=new bs;switch(e){case`bow`:for(let e of[-1,1])t.add(X_(Z_,`#f7a8cf`,[e*.12,.03,0],[.12,.05,.08],[0,0,e*.35])),t.add(X_(new qr(.05,.02,.16),`#ef8fbf`,[e*.05,.01,-.1],void 0,[.3,e*.4,0]));t.add(X_(Z_,`#ef8fbf`,[0,.04,0],[.045,.045,.045]));break;case`scrunchie`:t.add(X_(new Gl(.11,.045,10,24),`#8fe0c4`,[0,.03,0],[1,1,.6],[Math.PI/2,0,0]));break;case`flower`:for(let e=0;e<5;e++){let n=e/5*Math.PI*2;t.add(X_(Z_,`#f9b3cf`,[Math.cos(n)*.07,.03,Math.sin(n)*.07],[.06,.02,.045],[0,-n,0]))}t.add(X_(Z_,`#ffd75e`,[0,.05,0],[.035,.025,.035])),t.add(X_(Z_,`#7cc576`,[.1,.02,.07],[.07,.012,.03],[0,-.7,0]));break;case`star_clip`:{let e=new al;for(let t=0;t<10;t++){let n=t%2?.045:.1,r=t/10*Math.PI*2-Math.PI/2;t?e.lineTo(Math.cos(r)*n,Math.sin(r)*n):e.moveTo(Math.cos(r)*n,Math.sin(r)*n)}let n=new Vl(e,{depth:.03,bevelEnabled:!0,bevelSize:.01,bevelThickness:.01,bevelSegments:2});t.add(X_(n,`#ffd75e`,[0,.03,0],void 0,[-Math.PI/2,0,0])),t.add(X_(new qr(.22,.012,.03),`#c3a8f0`,[.04,.012,.02]));break}case`pearl_pins`:for(let e=0;e<3;e++)t.add(X_(Z_,`#f6f2fb`,[e*.07-.07,.03,e*.05-.05],[.035,.035,.035])),t.add(X_(new qr(.008,.008,.16),`#b9a4ef`,[e*.07-.07+.03,.012,e*.05-.05+.06],void 0,[0,.5,0]))}return t}function tv(e,t){let n=new bs,r=t.r[0]*1.18,i=t.r[1]*1.1;if(e===`headband`||e===`cat_ears`){let t=e===`headband`?`#c3a8f0`:`#f7b6d2`,a=X_(new Gl(1,.035,8,48,Math.PI*1.1),t,[0,0,0],[r,i,1],[0,0,-.05*Math.PI]);if(n.add(a),e===`headband`)n.add(nv(ev(`bow`),[r*Math.cos(.75),i*Math.sin(.75),.05],.75,1.3));else for(let e of[-1,1]){let t=Math.PI/2-e*.55,a=new bs;a.add(X_(new il(.14,.26,4),`#f7b6d2`,[0,.11,0])),a.add(X_(new il(.08,.17,4),`#fde0ec`,[0,.09,.03])),a.position.set(r*Math.cos(t),i*Math.sin(t),0),a.rotation.z=t-Math.PI/2,n.add(a)}}else if(e===`crown`){let e=new bs;e.add(X_(new Gl(.34,.025,8,32),`#f2c45a`,[0,0,0],void 0,[Math.PI/2,0,0]));for(let t=0;t<7;t++){let n=t/7*Math.PI-Math.PI,r=t===3?.2:t%2?.1:.14;e.add(X_(new il(.035,r,6),`#f2c45a`,[Math.cos(n)*.34,r/2,-Math.sin(n)*.34*.4+.3]))}e.add(X_(Z_,`#ff6fae`,[0,.06,.33],[.045,.045,.03])),e.scale.setScalar(1.45);let t=Math.sqrt(Math.max(0,1-(.493/r)**2));e.position.set(0,i*t,.04),e.rotation.x=.12,n.add(e)}return n.position.set(...t.c),e!==`crown`&&(n.rotation.x=-.35),n}function nv(e,t,n,r=1){return e.position.set(...t),e.rotation.z=n-Math.PI/2,e.scale.setScalar(r),e}function rv(e,t,n,r){if(W_(e).place===`crown`)return tv(e,t);let i=ev(e);return i.scale.setScalar(Q_),n&&r&&(i.position.copy(n).addScaledVector(r,$_),i.quaternion.setFromUnitVectors(new B(0,1,0),r)),i}function iv(e,t,n=1.14){let r=[t.r[0]*n,t.r[1]*n,t.r[2]*n],i=[(e.origin.x-t.c[0])/r[0],(e.origin.y-t.c[1])/r[1],(e.origin.z-t.c[2])/r[2]],a=[e.direction.x/r[0],e.direction.y/r[1],e.direction.z/r[2]],o=a[0]**2+a[1]**2+a[2]**2,s=2*(i[0]*a[0]+i[1]*a[1]+i[2]*a[2]),c=i[0]**2+i[1]**2+i[2]**2-1,l=s*s-4*o*c;if(l<0)return null;let u=(-s-Math.sqrt(l))/(2*o);if(u<0)return null;let d=e.at(u,new B);return{point:d,normal:new B((d.x-t.c[0])/r[0]**2,(d.y-t.c[1])/r[1]**2,(d.z-t.c[2])/r[2]**2).normalize()}}var av=new Map,ov=new Su;function sv(e){let t=av.get(e);return t||(t=ov.load(G_(W_(e))),t.colorSpace=Re,av.set(e,t)),t}function cv(){return Promise.all(U_.filter(e=>e.kind===`sticker`).map(async e=>{let t=await ov.loadAsync(G_(e));t.colorSpace=Re,av.set(e.id,t)})).then(()=>void 0,()=>void 0)}function lv(e,t,n,r=1,i=1){let a=(W_(e).size??.1)*r,o=e===`blush`?.5:1,s=new yr({map:sv(e),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});if(e===`freckle`){let e=Math.min(1,Math.max(0,i));s.opacity=.35+.6*e,s.color.setScalar(1.15-.5*e)}let c=new Wr(new xi(a,a*o),s);return c.position.copy(t).addScaledVector(n,.004),c.lookAt(t.clone().add(n)),c.renderOrder=3,c}var Y=(e,t,n)=>({bangs:e,sides:t,back:n}),uv=e=>{let t=R_(e);return{hex:t.hex,name:t.name}},dv=[{id:`soft-bob`,minLevel:1,lengths:Y(`brows`,`chin`,`chin`)},{id:`lob`,minLevel:1,lengths:Y(`brows`,`shoulder`,`shoulder`)},{id:`long-layers`,minLevel:1,lengths:Y(`brows`,`chest`,`chest`)},{id:`a-line`,minLevel:1,lengths:Y(`brows`,`shoulder`,`chin`)},{id:`pixie`,minLevel:1,lengths:Y(`forehead`,`cheek`,`chin`)},{id:`fresh-bob`,minLevel:2,lengths:Y(`brows`,`chin`,`chin`),wash:!0},{id:`wash-lob`,minLevel:2,lengths:Y(`brows`,`shoulder`,`shoulder`),wash:!0},{id:`spa-layers`,minLevel:2,lengths:Y(`brows`,`chest`,`chest`),wash:!0},{id:`bow-bob`,minLevel:2,lengths:Y(`brows`,`chin`,`chin`),accessory:`bow`},{id:`freckle-lob`,minLevel:2,lengths:Y(`brows`,`shoulder`,`shoulder`),face:{id:`freckle`,count:6,zone:`cheeks`}},{id:`curtain-lob`,minLevel:3,lengths:Y(`brows`,`shoulder`,`shoulder`),bangsStyle:`curtain`},{id:`side-swept-bob`,minLevel:3,lengths:Y(`brows`,`chin`,`chin`),bangsStyle:`side`},{id:`high-pony`,minLevel:3,lengths:Y(`brows`,`chest`,`chest`),updo:`ponytail`},{id:`ballet-bun`,minLevel:3,lengths:Y(`brows`,`chest`,`chest`),updo:`bun`},{id:`flower-waves`,minLevel:3,lengths:Y(`brows`,`chest`,`chest`),texture:`wavy`,accessory:`flower`},{id:`sleek-bob`,minLevel:3,lengths:Y(`brows`,`chin`,`chin`),texture:`straight`},{id:`glass-lob`,minLevel:3,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`straight`,wash:!0},{id:`curly-bob`,minLevel:3,lengths:Y(`brows`,`chin`,`chin`),texture:`curly`},{id:`mermaid`,minLevel:3,lengths:Y(`brows`,`chest`,`chest`),texture:`wavy`},{id:`beach-lob`,minLevel:3,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`wavy`},{id:`pink-pixie`,minLevel:4,lengths:Y(`forehead`,`cheek`,`chin`),color:uv(`pink`)},{id:`blonde-bob`,minLevel:4,lengths:Y(`brows`,`chin`,`chin`),color:uv(`blonde`)},{id:`jet-black`,minLevel:4,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`straight`,color:uv(`black`)},{id:`ginger-curls`,minLevel:4,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`curly`,color:uv(`ginger`)},{id:`idol-sparkle`,minLevel:4,lengths:Y(`brows`,`shoulder`,`shoulder`),color:uv(`pink`),face:{id:`rhinestone_pink`,count:2,zone:`under-eyes`}},{id:`pink-space-buns`,minLevel:5,lengths:Y(`brows`,`chest`,`chest`),color:uv(`pink`),updo:`space-buns`},{id:`curly-pony`,minLevel:5,lengths:Y(`brows`,`chest`,`chest`),texture:`curly`,updo:`ponytail`,accessory:`bow`},{id:`kitty-mint`,minLevel:5,lengths:Y(`forehead`,`cheek`,`chin`),color:uv(`mint`),accessory:`cat_ears`},{id:`mint-aline`,minLevel:5,lengths:Y(`brows`,`shoulder`,`chin`),color:uv(`mint`)},{id:`honey-waves`,minLevel:5,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`wavy`,color:uv(`blonde`),wash:!0},{id:`pink-ombre`,minLevel:5,lengths:Y(`brows`,`shoulder`,`shoulder`),color:uv(`pink`),dye:`ombre`},{id:`lilac-curls`,minLevel:5,lengths:Y(`forehead`,`shoulder`,`shoulder`),texture:`curly`,color:uv(`lilac`)},{id:`blue-wolf`,minLevel:6,lengths:Y(`forehead`,`cheek`,`shoulder`),color:uv(`blue`)},{id:`platinum-lob`,minLevel:6,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`straight`,color:uv(`platinum`),wash:!0},{id:`sunset-ombre`,minLevel:6,lengths:Y(`brows`,`chest`,`chest`),texture:`wavy`,color:uv(`ginger`),dye:`ombre`},{id:`lilac-tips`,minLevel:6,lengths:Y(`brows`,`chin`,`chin`),color:uv(`lilac`),dye:`ombre`},{id:`princess-curls`,minLevel:6,lengths:Y(`brows`,`shoulder`,`shoulder`),texture:`curly`,color:uv(`platinum`),accessory:`crown`},{id:`pastel-mermaid`,minLevel:6,lengths:Y(`brows`,`chest`,`chest`),texture:`wavy`,color:uv(`lilac`)}];function fv(e){let t=e.shape?.bangs,n=e.shape?.back,r=e=>Math.PI-Math.abs(e);return{bangs:t===`v`?e=>-.4*Math.abs(e):t===`round`?e=>-.55*e*e:t===`arch`?e=>-.3*(1-e*e):void 0,back:n===`v`?e=>.5*Math.max(0,1-r(e)/1.2):n===`u`?e=>.4*Math.cos(Math.min(1,r(e)/1.6)*Math.PI/2):void 0}}function pv(e){let t=yv(e);return t?bv(t,e.split(`:`)[1]):q().orders[e]??e}var mv={bob:Y(`brows`,`chin`,`chin`),lob:Y(`brows`,`shoulder`,`shoulder`),long:Y(`brows`,`chest`,`chest`),aline:Y(`brows`,`shoulder`,`chin`),pixie:Y(`forehead`,`cheek`,`chin`),wolf:Y(`forehead`,`cheek`,`shoulder`),shag:Y(`forehead`,`shoulder`,`shoulder`),hime:Y(`brows`,`cheek`,`chest`),framing:Y(`brows`,`shoulder`,`chest`),micro:Y(`forehead`,`chest`,`chest`),babybob:Y(`forehead`,`chin`,`chin`)},hv=U_.filter(e=>e.kind===`accessory`).map(e=>e.id),gv=U_.filter(e=>e.kind===`sticker`).map(e=>e.id),_v=[`ombre`,`roots`,`twotone`,`split`,`money`],vv=[`rhinestone_pink`,`rhinestone_clear`,`pearl`,`sparkle`];function yv(e){let[t,n,...r]=e.split(`:`);if(t!==`gen`||!(n in mv))return null;let i={id:e,minLevel:1,lengths:mv[n]},a=e=>{i.minLevel=Math.max(i.minLevel,e)};for(let e of r){let t=e.slice(0,e.indexOf(`-`)),n=e.slice(e.indexOf(`-`)+1);if(e===`wash`)i.wash=!0,a(I_.wash);else if(t===`tex`)i.texture=n,a(I_.curl);else if(t===`updo`)i.updo=n,a(I_.comb);else if(t===`bangs`)i.bangsStyle=n,a(I_.comb);else if(t===`bshape`)i.shape={...i.shape,bangs:n};else if(t===`kshape`)i.shape={...i.shape,back:n};else if(t===`color`||_v.includes(t)){let[e,r]=n.split(`-`);i.color=uv(e),r&&(i.color2=uv(r)),t!==`color`&&(i.dye=t);let o=i.dye===`ombre`||i.dye===`roots`||i.dye===`twotone`;a(Math.max(R_(e).level,r?R_(r).level:0,o?5:0))}else if(t===`acc`)i.accessory=n,a(I_.style);else if(t===`face`){let e=W_(n);i.face={id:e.id,count:e.spray??2,zone:vv.includes(e.id)?`under-eyes`:`cheeks`},a(I_.style)}}return i}function bv(e,t){let n=q(),r=n.gen,i=[e.shape?.bangs&&r.bangsShapes[e.shape.bangs],e.shape?.back&&r.backShapes[e.shape.back],e.color&&J(r.dyes[e.dye??`full`],{color:n.colors[e.color.name],color2:e.color2?n.colors[e.color2.name]:``}),e.texture&&n.parts[e.texture===`straight`?`sleek`:e.texture===`wavy`?`waves`:`curls`],e.bangsStyle&&e.bangsStyle!==`forward`&&(e.bangsStyle===`curtain`?r.curtain:r.side),e.accessory&&n.items[e.accessory],e.face&&n.items[e.face.id],e.wash&&r.wash].filter(e=>!!e).slice(0,2),a=e=>e[0].toLocaleUpperCase()+e.slice(1);return[e.updo?n.updos[e.updo]:r.cuts[t],...i].map(a).join(` + `)}function xv(e,t=Math.random){let n=e=>e[Math.floor(t()*e.length)],r=n(Object.keys(mv)),i=mv[r],a=i.sides===`cheek`,o=[`hair`,`shape`,`texture`,`color`,`deco`,`wash`].filter(t=>e>={hair:I_.comb,shape:1,texture:I_.curl,color:I_.dye,deco:I_.style,wash:I_.wash}[t]),s=e<=2?1:e<=4?2:3,c=s&&1+Math.floor(t()*s),l=new Set([...o].sort(()=>t()-.5).slice(0,c)),u=[],d=!1;for(let r of o)if(l.has(r)){if(r===`hair`){let e=[...i.sides===`chest`&&i.back===`chest`?[`updo-ponytail`,`updo-bun`,`updo-space-buns`]:[],...i.bangs===`brows`?[`bangs-side`,`bangs-curtain`]:[]];if(!e.length)continue;let t=n(e);d=t.startsWith(`updo`),u.push(t)}else if(r===`shape`){let e=!d&&(i.back===`chin`||i.back===`shoulder`);u.push(e&&t()<.4?`kshape-${n([`v`,`u`])}`:`bshape-${n([`v`,`round`,`arch`])}`)}else if(r===`texture`){let e=[`straight`,...a?[]:[`curly`],...i.sides===`shoulder`||i.sides===`chest`?[`wavy`]:[]];u.push(`tex-${n(e)}`)}else if(r===`color`){let r=L_.filter(t=>t.level<=e).map(e=>e.name),i=r.filter(e=>e!==`brown`),o=n(r),s=n(i.filter(e=>e!==o)),c=[[`color`,3],[`split`,1.5],[`money`,1.5],...e>=5&&!a&&!d?[[`ombre`,1.2],[`roots`,1],[`twotone`,1.3]]:[]],l=t()*c.reduce((e,[,t])=>e+t,0),f=c[0][0];for(let[e,t]of c)if((l-=t)<0){f=e;break}f!==`color`&&o===`brown`&&(o=n(i.filter(e=>e!==s))),u.push(f===`split`||f===`twotone`?`${f}-${o}-${s}`:`${f}-${o}`)}else r===`deco`?u.push(t()<.5?`acc-${n(hv)}`:`face-${n(gv)}`):u.push(`wash`)}return yv([`gen`,r,...u].join(`:`))}function Sv(e,t){switch(e){case`forehead`:return t.eyeY+.45*(t.topY-t.eyeY);case`brows`:return t.eyeY+.22*(t.topY-t.eyeY);case`cheek`:return(t.eyeY+t.chinY)/2;case`chin`:return t.chinY;case`shoulder`:return t.collarY-.35;case`chest`:return t.collarY-.7}}var Cv=.75,wv=.35,Tv=.45,Ev=.32,Dv={bangs:.25,sides:.35,back:.4};function Ov(e){let t=[...e].sort((e,t)=>e-t);return t[Math.floor(t.length/2)]}function kv(e){let t=[...e].sort((e,t)=>e-t);return t[Math.floor(t.length*.9)]-t[Math.floor(t.length*.1)]}var Av=e=>Math.max(0,Math.min(1,e));function jv(e,t){let n=e.map(e=>e-t).sort((e,t)=>e-t),r=Math.floor(n.length*.1),i=Math.ceil(n.length*.9),a=0;for(let e=r;e<i;e++)a+=Math.abs(n[e]);return a/Math.max(1,i-r)}function Mv(e,t,n,r={accessories:[],stickers:{}}){let i=[],a=0,o=0,s=(e,t,n,r,s,c)=>{i.push({key:e,label:t,score:n,long:s,share:c}),a+=n*r,o+=r};for(let r of[`bangs`,`sides`,`back`]){if(r!==`bangs`&&e.updo||t.tips[r].length<4)continue;let i=r===`bangs`?!!e.shape?.bangs:r===`back`&&!!e.shape?.back,a=Sv(e.lengths[r],n),o=(e=>{let t=i?jv(e,a):Math.abs(Ov(e)-a),n=Av(1-Math.max(0,kv(e)-.25)/.8),r=[...e].sort((e,t)=>e-t),o=Ov(e)<a-.08||r[Math.floor(r.length*.2)]<a-.25;return{score:Av(1-t/Ev)*(.6+.4*n),long:o}})(t.tips[r]);s(r,q().parts[r],o.score,.7*Dv[r]*(i?1.6:1),o.long,t.cutShare[r])}if(e.texture){let n=e.texture,r=t.styled[n===`straight`?`sleek`:n===`wavy`?`waves`:`curls`],a=Av((r-wv)/Tv);s(`texture`,q().parts[n===`straight`?`sleek`:n===`wavy`?`waves`:`curls`],a,.15),i[i.length-1].fill=Av(r/.6875)}if(e.wash&&(s(`wash`,q().parts.wash,Av(t.washed/.55),.1),s(`dry`,q().parts.dry,Av(1-t.wet*1.5),.1)),e.color){let n=new H(e.color.hex),r=new H(e.color2?.hex??e.color.hex),i=(e,t=n)=>Av(1-Math.hypot(e.r-t.r,e.g-t.g,e.b-t.b)*1.6),a=e.dye??`full`,o=a===`ombre`?.65*i(t.tipColor)+.35*(1-i(t.rootColor)):a===`roots`?.65*i(t.rootColor)+.35*(1-i(t.tipColor)):a===`twotone`?.5*i(t.rootColor)+.5*i(t.tipColor,r):a===`split`?Math.max(.5*i(t.leftColor)+.5*i(t.rightColor,r),.5*i(t.leftColor,r)+.5*i(t.rightColor)):a===`money`?.55*i(t.frontColor)+.45*(1-i(t.restColor)):.5*i(t.rootColor)+.5*i(t.tipColor);s(`color`,a===`full`?q().parts.color:q().parts[a],o,.15)}if(e.updo&&s(`updo`,q().parts[e.updo===`space-buns`?`spaceBuns`:e.updo],+(t.updo===e.updo),.2),e.bangsStyle){let n=e.bangsStyle===`side`?Av(Math.abs(t.bangsSweep)/.2):e.bangsStyle===`forward`?1-Av(Math.max(Math.abs(t.bangsSweep),t.bangsSpread-.04)/.2):Av((t.bangsSpread-.04)/.14)*(1-Av(Math.abs(t.bangsSweep)/.25)*.5);s(`bangsStyle`,q().parts.bangsStyle,n,.12),i[i.length-1].needsLength=e.bangsStyle!==`forward`}e.accessory&&s(`accessory`,q().parts.accessory,+!!r.accessories.includes(e.accessory),.12),e.face&&s(`bling`,q().parts.bling,Av((r.stickers[e.face.id]??0)/e.face.count),.12);let c=o?a/o:0;return{total:c,stars:c>=.82?3:c>=.6?2:+(c>=.35),parts:i}}var Nv=class{view;item;count;step=null;t=0;left=-1;turned=!1;done=!1;constructor(e,t,n){this.view=e,this.item=t,this.count=n}get kind(){return W_(this.item).kind}update(e,t){if(this.done)return;if(this.t+=e,t.placed>=this.count){this.finish();return}let n=t.styleTool?t.tab===this.kind?t.selected===this.item?`place`:`item`:`tab`:`tool`,r=this.count-t.placed;(n!==this.step||r!==this.left)&&(n!==this.step&&(this.t=0),this.step=n,this.left=r,this.say()),n===`place`&&this.kind===`sticker`&&!this.turned&&(this.turned=!0,this.view.faceFront());let i=n===`tool`?t.toolButton:n===`tab`?t.tabButton:n===`item`?t.itemButton:t.spot,a=this.t*1.6%1;this.view.hand(i&&{x:i.x,y:i.y+14*Math.sin(a*Math.PI),press:a>.35&&a<.65})}repeat(){!this.done&&this.step&&this.say()}finish(){this.done=!0,this.view.say(null),this.view.hand(null)}say(){let e=q(),t=e.guide,n=H_(this.item);this.view.say(this.step===`tool`?J(t.tool,{tool:e.toolNames.style}):this.step===`tab`?J(t.tab,{tab:this.kind===`sticker`?e.tray.face:e.tray.accessories}):this.step===`item`?J(t.item,{item:n}):this.kind===`sticker`?J(this.left>1&&!W_(this.item).spray?t.faceMore:t.face,{n:this.left}):t.hair)}},Pv=1.1,Fv=.25,Iv=6,Lv=.25,Rv=class{view;step=`bangs`;t=0;check=0;startYaw=0;startView=NaN;constructor(e){this.view=e,this.enter(`bangs`,0)}get active(){return this.step!==`done`}get zones(){return this.step===`bangs`?[`bangs`]:this.step===`turn`||this.step===`view`||this.step===`trim`?[`sides`,`back`]:[]}update(e,t){this.active&&(this.t+=e,this.check-=e,this.check<=0&&(this.check=Fv,this.advance(t)),this.animateHand(t))}skip(){this.finish()}repeat(){this.step!==`done`&&(this.view.say(q().tutorial[this.step]),this.view.pulseFinish(this.step===`finish`))}finish(){this.step=`done`,this.view.say(null),this.view.hand(null),this.view.pulseFinish(!1)}enter(e,t){this.step=e,this.t=0,this.startYaw=t,this.startView=NaN,this.view.say(q().tutorial[e]),this.view.pulseFinish(e===`finish`)}advance(e){let t=t=>{let n=e.measure().tips[t];if(n.length<4)return!0;let r=[...n].sort((e,t)=>e-t);return r[Math.floor(r.length*.05)]>e.target(t)-Lv};this.step===`bangs`&&t(`bangs`)?this.enter(`turn`,e.yaw):this.step===`turn`&&Math.abs(e.yaw-this.startYaw)>.7?this.enter(`view`,e.yaw):this.step===`view`?(isNaN(this.startView)&&(this.startView=e.view),(Math.abs(e.view-this.startView)>.01||this.t>Iv)&&this.enter(`trim`,e.yaw)):this.step===`trim`&&t(`sides`)&&t(`back`)&&e.finishButton()&&this.enter(`finish`,e.yaw)}animateHand(e){let t=this.t%1.6/Pv,n=t<=1,r=e=>e*e*(3-2*e),i=this.step===`finish`?e.finishButton():this.step===`turn`?e.turnButton():this.step===`view`?e.zoomButton():void 0;if(i!==void 0){this.view.hand(i&&{x:i.x,y:i.y+10*Math.sin(this.t*6),press:Math.sin(this.t*6)>.6});return}let a=e.line(this.zones);if(a.length<2){this.view.hand(null);return}let o=a[0],s=a[a.length-1];if(Math.abs(s.x-o.x)<120){let e=(o.x+s.x)/2;o={x:e-90,y:o.y},s={x:e+90,y:s.y}}if(!n){this.view.hand(null);return}let c=r(Math.min(1,t));this.view.hand({x:o.x+(s.x-o.x)*c,y:o.y+(s.y-o.y)*c,press:t>.08&&t<.95})}},zv=1.7,Bv=.04,Vv=[{id:`fairy_lights`,price:400,wide:[960,200,1100]},{id:`plush_bunny`,price:600,wide:[235,648,160]},{id:`poster`,price:800,wide:[640,482,150]},{id:`balloons`,price:1e3,wide:[560,820,190]},{id:`monstera`,price:1200,wide:[225,1078,230]},{id:`neon_live`,price:1500,wide:[1340,330,300]},{id:`cat_basket`,price:2e3,wide:[430,882,170]},{id:`disco_ball`,price:2500,wide:[600,300,130]},{id:`suncatcher`,price:3e3,wide:[64,470,110],narrow:[290,470,95]},{id:`photo_strip`,price:3500,wide:[1380,570,80],narrow:[1290,575,72]}],Hv={floor_lamp:`suncatcher`,rug:`photo_strip`},Uv=e=>`assets/decor/${e.id}.png`,Wv=e=>q().decor[e.id]??e.id,Gv=new Map;function Kv(e){let t=Gv.get(e);return t||(t=new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e}),Gv.set(e,t)),t}async function qv(e,t,n=!1){let r=await Kv(e);if(!r)return null;let i=document.createElement(`canvas`);i.width=r.naturalWidth,i.height=r.naturalHeight;let a=i.getContext(`2d`);a.drawImage(r,0,0);let o=e=>n&&e.narrow||e.wide,s=Vv.filter(e=>t.includes(e.id)).sort((e,t)=>o(e)[1]-o(t)[1]);for(let e of s){let t=await Kv(Uv(e));if(!t)continue;let[n,r,i]=o(e),s=i*t.naturalHeight/t.naturalWidth;a.drawImage(t,n-i/2,r-s,i,s)}let c=new Dc(i);return c.colorSpace=Re,c}var Jv=(e,t,n)=>Math.max(t,Math.min(n,e));function Yv(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xv(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}var Zv=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qv=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],$v=.975,ey=6,ty=.3;function ny(e,t,n,r,i,a){let o=i/20,s={id:t,n:21,count:21,seg0:o,L:i,margin:a.margin,stiff:a.stiff,x:new Float32Array(63),p:new Float32Array(63),r:new Float32Array(63),r0:new Float32Array(63),hold:new Float32Array(21),rest:new Float32Array(20).fill(o),curl:new Float32Array(21),period:a.period,bangs:a.bangs,foam:0,wet:0,wetShown:0,dyeRoot:[0,0,0],rootAmt:0,dyeTip:[0,0,0],tipAmt:0,dyeDirty:!1,kids:[]};return ry(e,s,n,r),s.x.set(s.r),s.p.set(s.r),s.r0.set(s.r),a.curl&&(s.curl.fill(a.curl),iy(s)),s}function ry(e,t,n,r){let i=t.n,a=t.seg0,o=r.slice(),s=[n[0],n[1],n[2]],c=new Float32Array(3);for(let n=0;n<i&&(t.r.set(s,n*3),n!==i-1);n++){if(n>=1&&(o=Xv([o[0]*.86,o[1]*.86-.14,o[2]*.86])),c[0]=s[0]+o[0]*a,c[1]=s[1]+o[1]*a,c[2]=s[2]+o[2]*a,n>=1)for(let n=0;n<3;n++)e.collide(c,0,t.margin),o=Xv([c[0]-s[0],c[1]-s[1],c[2]-s[2]]),c[0]=s[0]+o[0]*a,c[1]=s[1]+o[1]*a,c[2]=s[2]+o[2]*a;s=[c[0],c[1],c[2]]}}function iy(e){for(let t=0;t<e.n-1;t++){let n=(e.curl[t]+e.curl[t+1])*.5;e.rest[t]=e.seg0*(1-ty*n*Math.min(1,.42/e.period))}}function ay(e,t,n){let r=t.x,i=t.p,a=t.r,o=t.count,s=-55*n*n;for(let e=2;e<o;e++){let t=e*3;for(let e=0;e<3;e++){let n=(r[t+e]-i[t+e])*$v;i[t+e]=r[t+e],r[t+e]+=n+(e===1?s:0)}}for(let n=0;n<ey;n++){for(let e=0;e<6;e++)r[e]=a[e];for(let e=2;e<o;e++){let n=e/(t.n-1),i=Math.max(t.stiff*(1-n)*(1-n)*(1-n),t.hold[e]),o=e*3;r[o]+=(a[o]-r[o])*i,r[o+1]+=(a[o+1]-r[o+1])*i,r[o+2]+=(a[o+2]-r[o+2])*i}for(let e=0;e<o-1;e++){let n=e*3,i=n+3,a=r[i]-r[n],o=r[i+1]-r[n+1],s=r[i+2]-r[n+2],c=Math.sqrt(a*a+o*o+s*s)||1e-6,l=(c-t.rest[e])/c;e<1?(r[i]-=a*l,r[i+1]-=o*l,r[i+2]-=s*l):(r[n]+=a*l*.5,r[n+1]+=o*l*.5,r[n+2]+=s*l*.5,r[i]-=a*l*.5,r[i+1]-=o*l*.5,r[i+2]-=s*l*.5)}for(let e=0;e<o-2;e++){let n=e*3,i=n+6,a=(t.rest[e]+t.rest[e+1])*.92,o=r[i]-r[n],s=r[i+1]-r[n+1],c=r[i+2]-r[n+2],l=Math.sqrt(o*o+s*s+c*c)||1e-6;if(l>=a)continue;let u=(l-a)/l*.25;e<1?(r[i]-=o*u,r[i+1]-=s*u,r[i+2]-=c*u):(r[n]+=o*u*.5,r[n+1]+=s*u*.5,r[n+2]+=c*u*.5,r[i]-=o*u*.5,r[i+1]-=s*u*.5,r[i+2]-=c*u*.5)}let s=n===5;for(let n=2;n<o;n++)if(e.collide(r,n*3,t.margin)&&s){let e=n*3;i[e]+=(r[e]-i[e])*.35,i[e+1]+=(r[e+1]-i[e+1])*.35,i[e+2]+=(r[e+2]-i[e+2])*.35}}}var oy={uWidth:.8,uToneVar:0,uFiber:1,uEdge:8,uShadeStep:-.6,uShadeSoft:.8,uShadeDark:.4,uLitBoost:.6,uRootDark:1,uSheen:0,uSheenPow:4,uRim:0,uSpec1:.1,uSpec2:1,uAmbient:.3,uRing:0,uStrands:.35},sy=[{key:`uWidth`,label:`Strand width`,min:.4,max:2,step:.05},{key:`uToneVar`,label:`Tone variation`,min:0,max:2,step:.05},{key:`uFiber`,label:`Fiber texture`,min:0,max:1,step:.05},{key:`uEdge`,label:`Edge sharpness`,min:2,max:20,step:.5,toonOnly:!0},{key:`uShadeStep`,label:`Shadow line`,min:-.6,max:.8,step:.02,toonOnly:!0},{key:`uShadeSoft`,label:`Shadow softness`,min:.005,max:.8,step:.005,toonOnly:!0},{key:`uShadeDark`,label:`Shadow brightness`,min:.2,max:1,step:.02,toonOnly:!0},{key:`uLitBoost`,label:`Lit brightness`,min:.6,max:1.6,step:.02,toonOnly:!0},{key:`uRootDark`,label:`Root darkness`,min:.3,max:1,step:.02,toonOnly:!0},{key:`uSheen`,label:`Sheen`,min:0,max:1.5,step:.05,toonOnly:!0},{key:`uSheenPow`,label:`Sheen tightness`,min:4,max:200,step:2,toonOnly:!0},{key:`uRim`,label:`Rim light`,min:0,max:1,step:.05},{key:`uRing`,label:`Angel ring`,min:0,max:1,step:.05,toonOnly:!0},{key:`uStrands`,label:`Strand lines`,min:0,max:1,step:.05,toonOnly:!0},{key:`uSpec1`,label:`Primary spec`,min:0,max:.5,step:.01},{key:`uSpec2`,label:`Secondary spec`,min:0,max:2,step:.05},{key:`uAmbient`,label:`Ambient`,min:0,max:1,step:.02}],cy=Object.fromEntries(Object.entries(oy).map(([e,t])=>[e,{value:t}])),ly={value:new H(`#fff8ff`)};function uy(e){let t=new qs(new Uint8Array([200,200,200,255]),1,1);return t.needsUpdate=!0,{uColor:{value:new H(`#5a3524`)},uLight:{value:new B(.2,.4,.9)},uHeadC:{value:e},uTex:{value:t},uToon:{value:0},...cy,uShadeTint:ly}}var dy=`
  attribute vec3 aTan; attribute vec2 aSV; attribute vec4 aInfo; attribute float aWet; attribute vec4 aDye; attribute vec4 aDye2;
  uniform vec3 uHeadC; uniform float uWidth;
  varying vec2 vUV; varying vec3 vT; varying vec3 vN; varying vec3 vPos; varying vec4 vInfo; varying float vWet; varying vec4 vDye; varying vec4 vDye2;
  void main() {
    vWet = aWet; vDye = aDye; vDye2 = aDye2;
    vec3 T = normalize(aTan);
    vec3 V = normalize(cameraPosition - position);
    vec3 S = normalize(cross(T, V));
    float v = aSV.y;
    float taper = aInfo.z > 0.5 ? mix(1.0, 0.2, smoothstep(0.55, 1.0, v)) : mix(1.0, 0.8, smoothstep(0.9, 1.0, v));
    vec3 p = position + S * aSV.x * aInfo.x * 0.5 * taper * uWidth * (1.0 - 0.45 * aWet); // wet locks cling together
    vUV = vec2(aSV.x * 0.5 + 0.5, v); vT = T; vN = normalize(position - uHeadC); vPos = p; vInfo = aInfo;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,fy=`
  uniform sampler2D uTex; uniform vec3 uColor; uniform vec3 uLight; uniform float uToon; uniform float uRing;
  uniform float uToneVar, uFiber, uEdge, uShadeStep, uShadeSoft, uShadeDark, uLitBoost, uRootDark, uSheen, uSheenPow, uRim;
  uniform float uSpec1, uSpec2, uAmbient, uStrands; uniform vec3 uShadeTint;
  varying vec2 vUV; varying vec3 vT; varying vec3 vN; varying vec3 vPos; varying vec4 vInfo; varying float vWet; varying vec4 vDye; varying vec4 vDye2;
  void main() {
    // fiber detail from the strand texture (only the clean middle part of it)
    float fib = mix(0.5, texture2D(uTex, vec2(0.3 + vUV.x * 0.6, 0.05 + fract(vUV.y * 2.0 + vInfo.y * 3.0) * 0.6)).r, uFiber);
    float tone = 1.0 + (vInfo.y - 1.0) * uToneVar;
    float edge = 1.0 - pow(abs(vUV.x * 2.0 - 1.0), mix(4.0, uEdge, uToon));
    float a = edge * mix(mix(0.75, 1.0, fib), 1.0, uToon) * vInfo.w;
    if (a < 0.05) discard;
    // dye painted on this strand: one layer toward the roots, one on the ends, blending down the length
    vec3 hcol = mix(mix(uColor, vDye.rgb, vDye.a), mix(uColor, vDye2.rgb, vDye2.a), smoothstep(0.35, 0.8, vUV.y));
    // wet hair: darker, glossy
    vec3 base = hcol * tone * mix(0.7, 1.12, fib) * mix(1.0, 0.5, vWet);
    vec3 L = normalize(uLight), V = normalize(cameraPosition - vPos), H = normalize(L + V);
    vec3 T = normalize(vT);
    float diff = clamp((dot(vN, L) + 0.55) / 1.55, 0.0, 1.0);
    // Kajiya-Kay: narrow white primary + wider secondary tinted by the hair color
    vec3 T1 = normalize(T - vN * 0.08), T2 = normalize(T + vN * 0.2);
    float th1 = dot(T1, H), s1 = sqrt(max(0.0, 1.0 - th1 * th1));
    float th2 = dot(T2, H), s2 = sqrt(max(0.0, 1.0 - th2 * th2));
    float shadow = smoothstep(-0.2, 0.6, dot(vN, L));
    vec3 spec = (vec3(pow(s1, 260.0) * uSpec1) + hcol * pow(s2, 48.0) * uSpec2) * shadow;
    float ao = mix(0.42, 1.0, smoothstep(0.0, 0.2, vUV.y)) * mix(0.75, 1.0, smoothstep(-0.6, 0.4, dot(vN, V)));
    float rim = pow(1.0 - clamp(dot(vN, V), 0.0, 1.0), 3.0) * uRim;
    vec3 col = base * (uAmbient + 0.8 * diff) * ao + spec * ao * (1.0 + vWet) + hcol * rim;
    if (uToon > 0.0) {
      // anime: hard light/shadow split with a cool shadow tone, plus a solid "angel ring" highlight band
      float lit = smoothstep(-uShadeSoft, uShadeSoft, dot(vN, L) + uShadeStep);
      vec3 hairC = hcol * tone;
      vec3 toon = mix(hairC * uShadeTint * uShadeDark, hairC * uLitBoost, lit);
      toon += hairC * pow(s2, uSheenPow) * uSheen * lit + hairC * rim;
      // wet: darker and deeper in color, with bright wet shine running along the locks, lit side or not
      toon = toon * mix(1.0, 0.45, vWet) * mix(vec3(1.0), vec3(0.92, 0.95, 1.08), vWet)
        + (hairC * 1.3 * pow(s2, 64.0) * 0.4 + vec3(pow(s1, 600.0) * 0.22)) * vWet * mix(0.5, 1.0, lit); // narrow and
      // faint: locks hanging across the light take it whole, and a pale sheen over a whole lock reads as gray hair
      // the ring sits at a fixed height on the head, on the side facing the viewer, with a jagged edge
      float band = abs(vN.y - 0.58) - 0.045 + (fib - 0.5) * 0.06 + sin(vUV.x * 3.0 + vInfo.y * 40.0) * 0.012;
      float ring = smoothstep(0.015, 0.0, band) * smoothstep(0.15, 0.45, dot(vN, V)) * lit;
      toon = mix(toon, mix(hairC, vec3(1.0, 0.86, 0.76), 0.3) * 1.3, ring * uRing);
      toon *= mix(uRootDark, 1.0, smoothstep(0.0, 0.12, vUV.y));
      // strand lines: without them a head of toon hair is one flat shape (the canvas is opaque, nothing shows
      // between the locks), so every lock gets a lighter edge and some fiber along its length
      float side = smoothstep(0.4, 0.95, abs(vUV.x * 2.0 - 1.0));
      toon *= 1.0 + uStrands * ((fib - 0.5) * 0.5 + side * (0.35 + 0.35 * lit));
      col = mix(col, toon, uToon);
    }
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }`;function py(e){let t=new ti({uniforms:e,vertexShader:dy,fragmentShader:fy,side:2});return t.alphaToCoverage=!0,t}function my(e,t){return new ti({uniforms:e,vertexShader:`
      varying vec3 vL; varying vec3 vW;
      void main() { vL = position; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uLight; uniform vec3 uHeadC; varying vec3 vL; varying vec3 vW;
      ${t}
      void main() {
        vec3 u = normalize(vL);
        if (u.y < hairlineY(atan(u.x, u.z)) - 0.01) discard;
        float d = clamp((dot(normalize(vW - uHeadC), normalize(uLight)) + 0.5) / 1.5, 0.0, 1.0);
        gl_FragColor = vec4(uColor * (0.3 + 0.5 * d) * 0.8, 1.0);
        #include <colorspace_fragment>
      }`})}var hy=.075,gy=.11;function _y(e,t){let n=e.g,r=n.x,i=e.pts,a=n.count-1,o=e.o;for(let s=0;s<48;s++){let c=e.len*s/47,l=c/n.seg0,u=Math.floor(l);u>a-1&&(u=a-1);let d=l-u;d>1&&(d=1);let f=Math.max(0,u-1)*3,p=u*3,m=(u+1)*3,h=Math.min(a,u+2)*3,g=d*d,_=g*d,v=-.5*_+g-.5*d,y=1.5*_-2.5*g+1,b=-1.5*_+2*g+.5*d,x=.5*_-.5*g,S=v*r[f]+y*r[p]+b*r[m]+x*r[h],C=v*r[f+1]+y*r[p+1]+b*r[m+1]+x*r[h+1],w=v*r[f+2]+y*r[p+2]+b*r[m+2]+x*r[h+2],T=r[m]-r[p],E=r[m+1]-r[p+1],D=r[m+2]-r[p+2],O=Math.sqrt(T*T+E*E+D*D)||1;T/=O,E/=O,D/=O;let k=o[0]*T+o[1]*E+o[2]*D,A=1-s/47*.55;S+=(o[0]-k*T)*A,C+=(o[1]-k*E)*A,w+=(o[2]-k*D)*A;let j=n.curl[u]+(n.curl[u+1]-n.curl[u])*d;if(j>.01){let r=S-t.x,i=C-t.y,a=w-t.z,o=E*a-D*i,l=D*r-T*a,u=T*i-E*r,d=Math.sqrt(o*o+l*l+u*u)||1;o/=d,l/=d,u/=d;let f=e.phase+c*6.2832/n.period,p=Math.min(1,s/3);if(n.period>.7){let e=Math.sin(f)*gy*j*p;S+=o*e,C+=l*e,w+=u*e}else{let e=E*u-D*l,t=D*o-T*u,n=T*l-E*o,r=hy*j*p,i=Math.cos(f)*r,a=Math.sin(f)*r;S+=o*i+e*a,C+=l*i+t*a,w+=u*i+n*a}}i[s*3]=S,i[s*3+1]=C,i[s*3+2]=w}}var vy=class{capacity;points;geometry=new Mr;pos;tan;info;wet;dye;dye2;dyeDirty=!1;wetDirty=!1;constructor(e,t){this.capacity=e,this.points=t;let n=e*t*2;this.pos=new Float32Array(n*3),this.tan=new Float32Array(n*3),this.info=new Float32Array(n*4),this.wet=new Float32Array(n),this.dye=new Float32Array(n*4),this.dye2=new Float32Array(n*4);let r=new Float32Array(n*2),i=new Uint32Array(e*(t-1)*6),a=0;for(let n=0;n<e;n++)for(let e=0;e<t;e++){let o=(n*t+e)*2,s=e/(t-1);r[o*2]=-1,r[o*2+1]=s,r[o*2+2]=1,r[o*2+3]=s,e<t-1&&(i[a++]=o,i[a++]=o+1,i[a++]=o+2,i[a++]=o+1,i[a++]=o+3,i[a++]=o+2)}let o=this.geometry;o.setAttribute(`position`,new U(this.pos,3).setUsage(We)),o.setAttribute(`aTan`,new U(this.tan,3).setUsage(We)),o.setAttribute(`aSV`,new U(r,2)),o.setAttribute(`aInfo`,new U(this.info,4).setUsage(We)),o.setAttribute(`aWet`,new U(this.wet,1).setUsage(We)),o.setAttribute(`aDye`,new U(this.dye,4).setUsage(We)),o.setAttribute(`aDye2`,new U(this.dye2,4).setUsage(We)),o.setIndex(new U(i,1)),o.boundingSphere=new gn(new B(0,-1,0),6)}setCount(e){this.geometry.setDrawRange(0,e*(this.points-1)*6)}write(e,t){let n=this.pos,r=this.tan,i=this.points,a=e*i*2;for(let e=0;e<i;e++){let o=Math.max(0,e-1)*3,s=Math.min(i-1,e+1)*3,c=t[s]-t[o],l=t[s+1]-t[o+1],u=t[s+2]-t[o+2],d=(a+e*2)*3;n[d]=n[d+3]=t[e*3],n[d+1]=n[d+4]=t[e*3+1],n[d+2]=n[d+5]=t[e*3+2],r[d]=r[d+3]=c,r[d+1]=r[d+4]=l,r[d+2]=r[d+5]=u}}writeInfo(e,t,n,r,i){let a=this.info,o=this.points,s=e*o*2*4,c=+!!r;for(let e=0;e<o*2;e++){let r=s+e*4;a[r]=t,a[r+1]=n,a[r+2]=c,a[r+3]=i}}writeWet(e,t){let n=this.points*2;this.wet.fill(t,e*n,e*n+n),this.wetDirty=!0}writeDye(e,t,n){let r=this.points*2,i=this.dye,a=this.dye2;for(let o=e*r;o<e*r+r;o++)for(let e=0;e<4;e++)i[o*4+e]=t[e],a[o*4+e]=n[e];this.dyeDirty=!0}flush(e){let t=this.geometry.attributes;t.position.needsUpdate=!0,t.aTan.needsUpdate=!0,e&&(t.aInfo.needsUpdate=!0),this.wetDirty&&=(t.aWet.needsUpdate=!0,!1),this.dyeDirty&&=(t.aDye.needsUpdate=!0,t.aDye2.needsUpdate=!0,!1)}},yy=10,by=2500,xy=2.2,Sy=class{ch;geo=new vy(by,yy);mesh;pieces=[];constructor(e,t){this.ch=t,this.mesh=new Wr(this.geo.geometry,e),this.mesh.frustumCulled=!1}clear(){this.pieces=[],this.geo.setCount(0)}spawn(e,t,n,r){this.pieces.length>=by&&this.pieces.shift();let i=e.pts,a=new Float32Array(30);for(let e=0;e<yy;e++){let n=t+(47-t)*e/9,r=Math.min(46,Math.floor(n)),o=n-r;for(let t=0;t<3;t++)a[e*3+t]=i[r*3+t]+(i[(r+1)*3+t]-i[r*3+t])*o}let o=0;for(let e=0;e<9;e++)o+=Math.hypot(a[e*3+3]-a[e*3],a[e*3+4]-a[e*3+1],a[e*3+5]-a[e*3+2]);let s=a.slice();for(let e=0;e<yy;e++)s[e*3]-=n+(r-.5)*.004;let c=e.g,l=t/47,u=Math.min(1,Math.max(0,(l-.35)/.45)),d=u*u*(3-2*u),f={root:[0,1,2].map(e=>c.dyeRoot[e]+(c.dyeTip[e]-c.dyeRoot[e])*d).concat(c.rootAmt+(c.tipAmt-c.rootAmt)*d),tip:[...c.dyeTip,c.tipAmt]};this.pieces.push({x:a,p:s,rest:o/9,age:0,w:e.w,tone:e.tone,natural:e.natural,dye:f,wet:c.wet})}update(e){let t=-55*e*e,n=this.pieces;for(let r=n.length-1;r>=0;r--){let i=n[r],a=i.x,o=i.p;if(i.age+=e,i.age>xy){n.splice(r,1);continue}for(let e=0;e<30;e++){let n=(a[e]-o[e])*.99;o[e]=a[e],a[e]+=n+(e%3==1?t:0)}for(let e=0;e<3;e++)for(let e=0;e<9;e++){let t=e*3,n=t+3,r=a[n]-a[t],o=a[n+1]-a[t+1],s=a[n+2]-a[t+2],c=Math.sqrt(r*r+o*o+s*s)||1e-6,l=(c-i.rest)/c*.5;a[t]+=r*l,a[t+1]+=o*l,a[t+2]+=s*l,a[n]-=r*l,a[n+1]-=o*l,a[n+2]-=s*l}for(let e=0;e<yy;e++){let t=e*3;this.ch.collideBody(a,t,.02)&&(o[t]+=(a[t]-o[t])*.5,o[t+2]+=(a[t+2]-o[t+2])*.5)}}n.forEach((e,t)=>{this.geo.write(t,e.x),this.geo.writeInfo(t,e.w,e.tone,e.natural,Math.min(1,(xy-e.age)/.8)),this.geo.writeDye(t,e.dye.root,e.dye.tip),this.geo.writeWet(t,e.wet)}),this.geo.setCount(n.length),this.geo.flush(!0)}},Cy=520,wy=4,Ty=6,Ey=2600,Dy=[2.75,3.1,3.45],Oy=1.05;function ky(e,t){let n=Yv(11),r=[],i=[],a=e.scalp,o=Math.PI*(3-Math.sqrt(5));for(let s=0;s<Cy;s++){let c=1-(s+.5)/Cy*2,l=Math.sqrt(1-c*c),u=s*o,d=[Math.cos(u)*l,c,Math.sin(u)*l];if(d[1]<e.hairlineY(Math.atan2(d[0],d[2]))+.015)continue;let f=[a.c[0]+d[0]*a.r[0],a.c[1]+d[1]*a.r[1],a.c[2]+d[2]*a.r[2]],p=Xv([d[0]/a.r[0],d[1]/a.r[1],d[2]/a.r[2]]),m=d[2]>.25&&d[1]>.25,h=t===`layered`,g=t===`bangs`&&d[2]>.42&&d[1]>.3&&Math.abs(d[0])<.62||h&&d[2]>.3&&d[1]>.3&&Math.abs(d[0])<.7,_=Math.abs(d[0])<.03?n()<.5?-1:1:Math.sign(d[0]),v=Jv((.15-d[2])/.6,0,1),y=g?[d[0]*.5,-.25,1]:h?[d[0]*.7,-.45,-.55]:[_*.95*(1-v)+d[0]*.4*v,-.3-.7*v,-.35-.2*v],b=Zv(y,p);y=Xv([y[0]-b*p[0],y[1]-b*p[1],y[2]-b*p[2]]);let x=g?.95+.25*Math.abs(d[0]):2.75+(m?-.1:0)+n()*.1;if(h){let e=d[1]>.6?2:+(d[1]>.15);x=g?Oy+.25*Math.abs(d[0]):Dy[e]+n()*.08}t===`curly`&&(x*=1.05);let S=ny(e,r.length,f,y,x,{margin:.015+n()*.035,stiff:g?.16:.08,curl:t===`curly`?1:t===`wavy`?.75:0,period:t===`curly`?.42:t===`wavy`?1.05:.5,bangs:g});r.push(S);let C=Xv(Qv(p,y)),w=e=>{if(i.length>=2600)return;let t={...e,g:S,natural:!0,pts:new Float32Array(144),idx:i.length};S.kids.push(t),i.push(t)},T=h&&d[1]>.45?Ty:wy;for(let t=0;t<T;t++){let r=(n()-.5)*.2,i=.012+n()*.03;w({o:[C[0]*r+p[0]*i,C[1]*r+p[1]*i,C[2]*r+p[2]*i],len:x*(.93+n()*.07),w:.06+n()*.04,tone:.82+n()*.3,phase:Ay(S,t,e.headCenter)})}w({o:[p[0]*.005,p[1]*.005,p[2]*.005],len:x*.97,w:h?.32:.2,tone:.55,phase:Ay(S,0,e.headCenter)})}return{guides:r,strands:i}}function Ay(e,t,n){return e.period>.7?(Math.atan2(e.r[0]-n.x,e.r[2]-n.z)*2+t*.1+12.566)%6.283:(e.id*1.7+t*.35)%6.283}var jy=160,My=1/120,Ny=110,Py=3,Fy=9,Iy=420,Ly=2.2,Ry=3.5,zy=200,By=48,Vy=9,Hy=90,Uy=.2,Wy=.05,Gy=4,Ky=55,qy=.8,Jy=.15,Yy=.04,Xy=.15,Zy=.3,Qy=12,$y=.55,eb=.7,tb=.3,nb=1,rb=50,ib=4.5,ab=.45,ob=1.05,sb=.85,cb=110,lb=105,ub=2.6,db=1.2,fb=1.75,pb=2.05,mb=2.65,hb=.11,gb=.4,_b=.08,vb=.25,yb=class{ch;group=new bs;uniforms;guides=[];strands=[];geo=new vy(Ey,48);pieces;rng=Yv(5);backWeight=new Map;targets=new Map;wisps=new Set;targetLen=new Map;strandLen=new Map;lineTargets=null;shape={};sa=[0,0,0];sb=[0,0,0];simTime=0;spin=0;foam=new S_(Iy*Fy,`#ffffff`);water=new S_(zy,`#ffffff`,.85);drips=new S_(By,`#dff2ff`,.9);fall=new S_(Hy,`#ffffff`);dripP=[];fallP=[];dripAcc=0;updo=`down`;bubbleJitter=new Float32Array;dropPhase=Float32Array.from({length:600},Yv(9));rinseLeft=0;washQuality=0;time=0;scalpTint={value:new H};cap=null;constructor(e,t=!1){this.ch=e,this.uniforms=uy(e.headCenter);let n=new Wr(this.geo.geometry,py(this.uniforms));n.frustumCulled=!1,this.pieces=new Sy(py(this.uniforms),e),this.group.add(n,this.pieces.mesh,this.foam.mesh,this.water.mesh,this.drips.mesh,this.fall.mesh);let r=C_();if(this.water.setTexture(r),this.drips.setTexture(r),!t){if(e.bindHairColor){if(e.bindHairColor(this.scalpTint),e.scalpCap){let t=e.scalpCap,n=t.geometry.getAttribute(`position`),r=new Float32Array(n.count*3),i=new B;t.updateWorldMatrix(!0,!1);for(let e=0;e<n.count;e++)i.fromBufferAttribute(n,e).applyMatrix4(t.matrixWorld).toArray(r,e*3);this.cap={attr:t.geometry.getAttribute(`color`),pos:r,near:[],edge:xb(e,r)}}}else{let t=new Wr(new Wl(1,64,48),my(this.uniforms,e.hairlineGLSL)),n=e.scalp;t.position.set(...n.c),t.scale.set(n.r[0]*1.012,n.r[1]*1.012,n.r[2]*1.012),this.group.add(t)}}}setStrandTexture(e){this.uniforms.uTex.value=e}setFoamTexture(e){this.foam.setTexture(e),this.fall.setTexture(e)}setColor(e){this.uniforms.uColor.value.set(e),this.updateScalpTint()}dyeBrush(e,t,n,r,i,a){let o=new Map;if(this.forNear(e,t,n,lb,(e,t,n)=>o.set(e,Math.max(o.get(e)??0,n))),a===`front`)for(let e of o.keys())this.framesFace(e)||o.delete(e);let s=i&&[i.r,i.g,i.b];for(let[e,t]of o){let n=Math.min(1,ub*r*t);s?(a!==`ends`&&(Sb(e.dyeRoot,e.rootAmt,s,n),e.rootAmt=Math.min(1,e.rootAmt+n)),a!==`roots`&&(Sb(e.dyeTip,e.tipAmt,s,n),e.tipAmt=Math.min(1,e.tipAmt+n))):(a!==`ends`&&(e.rootAmt=Math.max(0,e.rootAmt-n)),a!==`roots`&&(e.tipAmt=Math.max(0,e.tipAmt-n))),e.dyeDirty=!0}return o.size>0}framesFace(e){let t=this.ch.headCenter;return!e.bangs&&Math.abs(Math.atan2(e.r[0]-t.x,e.r[2]-t.z))<db}dyeOrder(e,t,n=t){let r=[t.r,t.g,t.b],i=[n.r,n.g,n.b],a=this.ch.headCenter;for(let t of this.guides){let n=t.r[0]<a.x,o=this.framesFace(t),[s,c]=e===`full`?[r,r]:e===`ombre`?[null,r]:e===`roots`?[r,null]:e===`twotone`?[r,i]:e===`split`?n?[r,r]:[i,i]:o?[r,r]:[null,null];s&&(t.dyeRoot=[s[0],s[1],s[2]],t.rootAmt=1),c&&(t.dyeTip=[c[0],c[1],c[2]],t.tipAmt=1),t.dyeDirty=!0}this.flushDye()}flushDye(){let e=!1;for(let t of this.guides){if(!t.dyeDirty)continue;t.dyeDirty=!1,e=!0;let n=[...t.dyeRoot,t.rootAmt],r=[...t.dyeTip,t.tipAmt];for(let e of t.kids)this.geo.writeDye(e.idx,n,r)}e&&this.updateScalpTint()}updateScalpTint(){let e=this.scalpTint.value.copy(this.uniforms.uColor.value),t=0,n=0,r=0,i=0;for(let a of this.guides){let o=a.rootAmt;t+=o*(a.dyeRoot[0]-e.r),n+=o*(a.dyeRoot[1]-e.g),r+=o*(a.dyeRoot[2]-e.b),i++}i&&e.setRGB(e.r+t/i,e.g+n/i,e.b+r/i)}setLightDir(e){this.uniforms.uLight.value.copy(e)}grow(e){({guides:this.guides,strands:this.strands}=ky(this.ch,e)),this.backWeight.clear(),this.targets.clear(),this.wisps.clear(),this.targetLen.clear(),this.strandLen.clear(),this.lineTargets=null,this.shape={},this.pieces.clear();for(let e=0;e<jy;e++)for(let e of this.guides)ay(this.ch,e,My);for(let e of this.guides)e.p.set(e.x);this.geo.setCount(this.strands.length);for(let e of this.strands)this.geo.writeInfo(e.idx,e.w,e.tone,e.natural,1),this.geo.writeWet(e.idx,0),this.geo.writeDye(e.idx,Cb,Cb);this.syncStrands(!0),this.linkCap(),this.updateScalpTint(),this.rinseLeft=0,this.washQuality=0,this.updo=`down`,this.dripP=[],this.fallP=[];let t=Yv(23);this.bubbleJitter=Float32Array.from({length:this.guides.length*Fy*4},(e,n)=>n%4==3?.7+t()*.6:(t()-.5)*.12)}linkCap(){let e=this.cap;if(e){e.near=[];for(let t=0;t<e.pos.length/3;t++){let n=e.pos[t*3],r=e.pos[t*3+1],i=e.pos[t*3+2],a=[];for(let e of this.guides){let t=Math.hypot(e.r[0]-n,e.r[1]-r,e.r[2]-i);t<gb&&a.push({g:e,prox:1-wb(hb,gb,t)})}e.near.push(a)}this.updateCap()}}updateCap(){let e=this.cap;if(!e)return;let t=new Map;for(let e of this.guides){let n=0;for(let t of e.kids)n=Math.max(n,t.len);t.set(e,wb(_b,vb,n))}let n=e.attr.array;e.near.forEach((r,i)=>{let a=0,o=0;for(let e of r)a+=e.prox*t.get(e.g),o+=e.prox;n[i*4+3]=e.edge[i]*(o>1e-6?a/o:1)}),e.attr.needsUpdate=!0}update(e){this.simTime=Math.min(this.simTime+e,My*Gy);let t=Math.floor(this.simTime/My),n=t?Jv(this.spin/t,-.05,Wy):0;t&&(this.spin=0);for(let e=0;e<t;e++){n&&this.rotateFrame(n);for(let e of this.guides)ay(this.ch,e,My);this.simTime-=My}this.pieces.update(e),this.time+=e,this.updateWash(e),this.flushDye(),this.syncStrands(!1)}wash(e,t,n,r){let i=new Map;this.forNear(e,t,n,Ny,(e,t,n)=>i.set(e,Math.max(i.get(e)??0,n)));for(let[e,t]of i)e.foam=Math.min(1,e.foam+Py*r*t);return i.size>0}foamCoverage(){let e=0;for(let t of this.guides)t.foam>.5&&e++;return this.guides.length?e/this.guides.length:0}get washedShare(){return this.washQuality}get wetness(){let e=0;for(let t of this.guides)e+=t.wet;return e/Math.max(1,this.guides.length)}get hasFoam(){return this.guides.some(e=>e.foam>.05)}get rinsing(){return this.rinseLeft>0}get rinseProgress(){return this.rinseLeft>0?1-this.rinseLeft/Ly:0}rinse(){return this.rinseLeft>0||!this.hasFoam?!1:(this.washQuality=Math.max(this.washQuality,this.foamCoverage()),this.rinseLeft=Ly,!0)}updateWash(e){let t=this.ch.scalp,n=t.c[1]+t.r[1],r=this.ch.headCenter;if(this.rinseLeft>0){this.rinseLeft=Math.max(0,this.rinseLeft-e);let i=n+.2-(1-this.rinseLeft/Ly)*(n+.2-(t.c[1]-t.r[1]*1.2));for(let t of this.guides)if(!(t.r[1]<i&&this.rinseLeft>0)){if(t.foam>.15&&this.fallP.length<Hy&&this.rng()<e*10*t.foam){let e=Math.min(t.count-1,2+Math.floor(this.rng()*4))*3;this.fallP.push({x:t.x[e],y:t.x[e+1],z:t.x[e+2],vx:(this.rng()-.5)*.3,vy:-.4,vz:0,age:0,size:.16+this.rng()*.12})}t.foam*=Math.exp(-e*6),t.wet=Math.min(1,t.wet+e*3),this.rinseLeft===0&&(t.foam=0)}let a=4.2;for(let e=0;e<zy;e++){let i=this.dropPhase[e*3]*Math.PI*2,o=Math.sqrt(this.dropPhase[e*3+1]),s=n+1.2-(this.time*6+this.dropPhase[e*3+2]*a)%a;this.water.set(e,r.x+Math.sin(i)*o*t.r[0]*1.3,s,r.z+Math.cos(i)*o*t.r[2]*1.3,.3)}this.water.commit(this.rinseLeft>0?zy:0)}for(let e of this.guides)if(!(Math.abs(e.wet-e.wetShown)<.02)){e.wetShown=e.wet;for(let t of e.kids)this.geo.writeWet(t.idx,e.wet)}let i=0,a=this.bubbleJitter;this.guides.forEach((e,t)=>{if(!(e.foam<.02||t>=Iy))for(let n=0;n<Fy&&!(n>e.foam*Fy);n++){let o=(.03+n*.065)*(e.n-1);if(o>e.count-1)break;let s=Math.floor(o),c=o-s,l=s*3,u=e.x,d=u[l]+(u[l+3]-u[l])*c,f=u[l+1]+(u[l+4]-u[l+1])*c,p=u[l+2]+(u[l+5]-u[l+2])*c,m=d-r.x,h=f-r.y,g=p-r.z,_=Math.hypot(m,h,g)||1,v=(t*Fy+n)*4;this.foam.set(i++,d+m/_*.06+a[v],f+h/_*.06+a[v+1],p+g/_*.06+a[v+2],.36*a[v+3]*Math.min(1,.4+e.foam))}}),this.foam.commit(i),this.updateDrips(e)}updateDrips(e){let t=0;for(let e of this.guides)t+=e.wet;for(t/=Math.max(1,this.guides.length),this.dripAcc+=e*Vy*t;this.dripAcc>=1&&this.strands.length;){--this.dripAcc;let e=this.strands[Math.floor(this.rng()*this.strands.length)];e.g.wet<.3||e.w>=.2||this.dripP.length>=By||this.dripP.push({x:e.pts[141],y:e.pts[142],z:e.pts[143],vy:-.3,age:0})}this.dripP=this.dripP.filter(t=>(t.age+=e)<1.2),this.dripP.forEach((t,n)=>{t.vy-=9*e,t.y+=t.vy*e,this.drips.set(n,t.x,t.y,t.z,t.age<.2?.08+t.age*.35:.15)}),this.drips.commit(this.dripP.length),this.fallP=this.fallP.filter(t=>(t.age+=e)<1.4),this.fallP.forEach((t,n)=>{t.vy-=3.5*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,this.fall.set(n,t.x,t.y,t.z,t.size*(1-t.age/1.4))}),this.fall.commit(this.fallP.length)}syncStrands(e){for(let e of this.strands)_y(e,this.ch.headCenter),this.geo.write(e.idx,e.pts);this.geo.flush(e)}turnChair(e){this.spin+=e*Uy}rotateFrame(e){let t=this.ch.headCenter.x,n=this.ch.headCenter.z,r=Math.cos(e),i=Math.sin(e);for(let e of this.guides)for(let a of[e.x,e.p])for(let o=2;o<e.count;o++){let e=o*3,s=a[e]-t,c=a[e+2]-n;a[e]=t+s*r-c*i,a[e+2]=n+s*i+c*r}}settle(e){for(let t=0;t<e;t++)for(let e of this.guides)ay(this.ch,e,My);this.syncStrands(!0)}setTexture(e){for(let t of this.guides)t.curl.fill(e===`straight`?0:e===`wavy`?.75:1),t.period=e===`curly`?.42:e===`wavy`?1.05:.5,t.kids.forEach((e,n)=>{e.phase=Ay(t,e.w<.2?n:0,this.ch.headCenter)}),iy(t)}zoneOf(e){return e.w>=.2?null:this.lockZone(e.g)}lockZone(e){if(e.bangs)return`bangs`;let t=this.backWeight.get(e);if(t!==void 0)return t<.5?`sides`:`back`;let n=this.ch.headCenter;return Math.abs(Math.atan2(e.r[0]-n.x,e.r[2]-n.z))<fb?`sides`:`back`}backWeightAt(e){return wb(pb,mb,Math.abs(e))}cutLineY(e){let t=this.lineTargets;return t?t.sides+(t.back-t.sides)*this.backWeightAt(e)-(this.shape.back?.(e)??0):NaN}assignZones(e,t,n=NaN,r={}){let i=this.ch.headCenter;this.lineTargets={sides:e,back:t,bangs:n},this.shape=r,this.backWeight.clear(),this.targets.clear(),this.wisps.clear(),this.targetLen.clear(),this.strandLen.clear();let a=(e,t)=>{let n=(e.count-1)*3;for(let r=1;r<e.count;r++)if(e.x[r*3+1]<t){n=r*3;break}return Math.atan2(e.x[n]-i.x,e.x[n+2]-i.z)},o=e=>Math.atan2(e.r[0]-i.x,e.r[2]-i.z),s=this.guides.filter(e=>e.bangs).map(o),c=Math.min(...s),l=Math.max(...s);for(let i of this.guides){if(i.bangs){let e=l>c?(o(i)-c)/(l-c)*2-1:0,t=n-(r.bangs?.(e)??0),a=i.r[1]-Jy;a<t&&this.wisps.add(i),this.targets.set(i,Math.min(t,a));continue}let s=a(i,Math.max(e,t));for(let e=0;e<4;e++)s=a(i,this.cutLineY(s));this.backWeight.set(i,this.backWeightAt(s)),this.targets.set(i,this.cutLineY(s))}for(let[e,t]of this.targets){let n=(e.count-1)*e.seg0;for(let r=1;r<e.count;r++){let i=e.x[(r-1)*3+1],a=e.x[r*3+1];if(a<t){n=(r-1+Math.min(1,Math.max(0,(i-t)/Math.max(1e-6,i-a))))*e.seg0;break}}this.targetLen.set(e,n)}for(let e of this.strands){let t=this.targetLen.get(e.g);t!==void 0&&this.strandLen.set(e,Math.min(t,e.len))}}overLength(e){let t=this.strandLen.get(e);return t===void 0?NaN:e.len-t}lockTarget(e){return this.targets.get(e)??NaN}bangsCutPoints(){let e=[];return this.guides.forEach((t,n)=>{let r=this.targets.get(t);if(!t.bangs||this.wisps.has(t)||r===void 0||isNaN(r))return;let i=-1/0;for(let e of t.kids)e.len>0&&e.w<.2&&(i=Math.max(i,this.overLength(e)));if(!(i>Yy))return;let a=this.targetLen.get(t)/t.seg0,o=Math.min(t.count-2,Math.floor(a)),s=Math.min(1,a-o),c=o*3;e.push({id:n,x:t.x[c]+(t.x[c+3]-t.x[c])*s,y:t.x[c+1]+(t.x[c+4]-t.x[c+1])*s,z:t.x[c+2]+(t.x[c+5]-t.x[c+2])*s})}),e}outline(e,t,n,r=.12,i=!1){let a=new Float32Array(n),o=this.ch.headCenter,s=Float32Array.from({length:n},(e,r)=>typeof t==`number`?t:t((r+.5)/n*Math.PI*2-Math.PI));for(let t of this.strands){if(e){let n=this.zoneOf(t);if(e===`body`?!n||n===`bangs`:n!==e)continue}if(i&&!(this.overLength(t)>Yy))continue;let c=t.pts;for(let e=2;e<48;e++){let t=c[e*3]-o.x,i=c[e*3+2]-o.z,l=Math.floor((Math.atan2(t,i)/(Math.PI*2)+1.5)%1*n);Math.abs(c[e*3+1]-s[l])>r||(a[l]=Math.max(a[l],Math.hypot(t,i)))}}return a}measure(){let e={bangs:[],sides:[],back:[]},t={bangs:0,sides:0,back:0},n={bangs:0,sides:0,back:0},r=this.lineTargets;for(let i of this.strands){let a=this.zoneOf(i);if(!a||this.wisps.has(i.g))continue;let o=i.pts[142],s=this.lockTarget(i.g);if(!Number.isFinite(o))continue;let c=this.overLength(i);e[a].push(r&&!isNaN(c)?r[a]-c:r&&!isNaN(s)?o-s+r[a]:o),n[a]++,c>Yy||t[a]++}let i=0,a=0,o=0,s=0,c={waves:0,curls:0,sleek:0};for(let e of this.guides){let t=0;for(let n=0;n<e.count;n++)t+=e.curl[n];if(t/=Math.max(1,e.count),i+=t,e.period>.7&&(o+=t),a+=e.wet,e.bangs)continue;let n=Math.floor(e.count*.35),r=0;for(let t=n;t<e.count;t++)r+=e.curl[t];r/=Math.max(1,e.count-n),s++,r>=.4?c[e.period>.7?`waves`:`curls`]++:r<.25&&c.sleek++}s&&(c.waves/=s,c.curls/=s,c.sleek/=s);let l=Math.max(1,this.guides.length),u=0,d=0,f=0,p=0,m=this.ch.headCenter;for(let e of this.guides){if(!e.bangs)continue;let t=(e.count-1)*3,n=e.x[t]-e.x[0];u+=n,d+=n*Math.sign(e.x[0]-m.x||1),f++,p+=Math.hypot(n,e.x[t+1]-e.x[1],e.x[t+2]-e.x[2])}p=Math.max(.1,p/Math.max(1,f));let h=f?u/f/p:0,g=f?d/f/p:0,_=this.uniforms.uColor.value,v=()=>({c:new H(0,0,0),n:0}),y=v(),b=v(),x=v(),S=v(),C=v(),w=v(),T=(e,t,n)=>{e.c.r+=_.r+(t[0]-_.r)*n,e.c.g+=_.g+(t[1]-_.g)*n,e.c.b+=_.b+(t[2]-_.b)*n,e.n++};for(let e of this.guides){T(y,e.dyeRoot,e.rootAmt),T(b,e.dyeTip,e.tipAmt);let t=e.r[0]<m.x?x:S,n=this.framesFace(e)?C:w;for(let r of[t,n])T(r,e.dyeRoot,e.rootAmt),T(r,e.dyeTip,e.tipAmt)}let E=e=>e.n?e.c.multiplyScalar(1/e.n):_.clone();return{updo:this.updo,tips:e,cutShare:{bangs:t.bangs/Math.max(1,n.bangs),sides:t.sides/Math.max(1,n.sides),back:t.back/Math.max(1,n.back)},curl:i/l,washed:this.washQuality,wet:a/l,waveShare:i>1e-6?o/i:0,styled:c,rootColor:E(y),tipColor:E(b),leftColor:E(x),rightColor:E(S),frontColor:E(C),restColor:E(w),bangsSweep:h,bangsSpread:g}}snapshotLengths(){return{strands:this.strands.map(e=>({len:e.len,natural:e.natural})),counts:this.guides.map(e=>e.count)}}restoreLengths(e,t){this.guides.forEach((n,r)=>{this.lockZone(n)===t&&(n.count=e.counts[r])}),this.strands.forEach((n,r)=>{this.lockZone(n.g)===t&&(n.len=e.strands[r].len,n.natural=e.strands[r].natural,this.geo.writeInfo(n.idx,n.len?n.w:0,n.tone,n.natural,1))}),this.updateCap(),this.settle(40),this.geo.flush(!0)}trimTo(e,t=!0){for(let n of this.strands){let r=t?this.targets.get(n.g):void 0,i=t?this.targetLen.get(n.g):void 0;if(i!==void 0){n.len>i&&(n.len=i,n.natural=!1,this.geo.writeInfo(n.idx,n.len?n.w:0,n.tone,!1,1));continue}let a=r??e(this.lockZone(n.g));n.g.bangs&&(a=Math.min(a,n.g.r[1]-Jy));let o=n.pts;for(let e=2;e<48;e++)if(o[e*3+1]<a){let t=(o[(e-1)*3+1]-a)/Math.max(1e-6,o[(e-1)*3+1]-o[e*3+1]),r=e-1+t;n.len=r>.05?n.len*r/47:0,n.natural=!1;let i=this.strandLen.get(n);i!==void 0&&n.len<i&&this.strandLen.set(n,n.len),this.geo.writeInfo(n.idx,n.len?n.w:0,n.tone,!1,1);break}}for(let e of this.guides){let t=0;for(let n of e.kids)t=Math.max(t,n.len);e.count=Math.min(e.n,Math.ceil(t/e.seg0)+2)}this.updateCap(),this.syncStrands(!0)}cut(e,t,n,r,i,a=!1){let o=Math.min(t,r)-2,s=Math.max(t,r)+2,c=Math.min(n,i)-2,l=Math.max(n,i)+2,u=e.camera.position,d=this.sa,f=this.sb,p=Math.max(1e-6,(r-t)**2+(i-n)**2),m=Math.max(1,Math.ceil(Math.sqrt(p)/Qy)),h=new Float32Array(m).fill(1/0),g=[];for(let _ of this.strands){let v=_.pts;e.project(v,0,d);for(let y=0;y<47;y++){if(e.project(v,(y+1)*3,f),!(Math.max(d[0],f[0])<o||Math.min(d[0],f[0])>s||Math.max(d[1],f[1])<c||Math.min(d[1],f[1])>l)&&y>=2){let e=bb(t,n,r,i,d[0],d[1],f[0],f[1]);if(e>=0){let o=y*3,s=v[o]+(v[o+3]-v[o])*e,c=v[o+1]+(v[o+4]-v[o+1])*e,l=v[o+2]+(v[o+5]-v[o+2])*e;if(!this.ch.occluded(u,s,c,l)){let o=Math.atan2(s-this.ch.headCenter.x,l-this.ch.headCenter.z),c=this.snapCut(_,y+e,o,a);if(c<0)break;let u=d[0]+(f[0]-d[0])*e,v=d[1]+(f[1]-d[1])*e,b=((u-t)*(r-t)+(v-n)*(i-n))/p,x=Math.min(m-1,Math.max(0,Math.floor(b*m))),S=d[2]+(f[2]-d[2])*e;g.push({st:_,f:c,bin:x,depth:S,angle:o}),h[x]=Math.min(h[x],S);break}}}d[0]=f[0],d[1]=f[1],d[2]=f[2]}}let _=new Set,v=0;for(let e of g){let n=Math.min(h[e.bin],h[Math.max(0,e.bin-1)],h[Math.min(m-1,e.bin+1)]);if(e.depth>n+qy)continue;let i=e.st,a=e.f;this.pieces.spawn(i,a,(r-t)*2e-5,this.rng()),i.len*=a/47,i.natural=!1,this.geo.writeInfo(i.idx,i.w,i.tone,!1,1),_.add(i.g),v++}if(!v)return 0;for(let e of _){let t=0;for(let n of e.kids)t=Math.max(t,n.len);e.count=Math.min(e.n,Math.ceil(t/e.seg0)+2)}return this.updateCap(),this.geo.flush(!0),v}snapCut(e,t,n,r){let i=this.lockTarget(e.g),a=e.pts;if(isNaN(i))return t;let o=Math.floor(t),s=a[o*3+1]+(a[o*3+4]-a[o*3+1])*(t-o),c=e.g.bangs?i:this.cutLineY(n);if(!r&&Math.abs(s-c)>Xy&&!(s>i&&s-i<Zy))return t;let l=this.targetLen.get(e.g);if(l!==void 0)return e.len>l+1e-4?Math.max(2,47*l/e.len):-1;for(let e=1;e<48;e++)if(a[e*3+1]<i){let t=a[(e-1)*3+1],n=a[e*3+1];return Math.max(2,e-1+(t-i)/Math.max(1e-6,t-n))}return-1}forNear(e,t,n,r,i){let a=e.camera.position,o=this.sa;for(let s of this.guides)for(let c=2;c<s.count;c++){e.project(s.x,c*3,o);let l=Math.hypot(o[0]-t,o[1]-n);if(l>r)continue;let u=c*3;this.ch.occluded(a,s.x[u],s.x[u+1],s.x[u+2])||i(s,c,1-l/r,o[2])}}isNear(e,t,n,r){let i=!1;return this.forNear(e,t,n,r,()=>{i=!0}),i}comb(e,t,n,r,i){let a=new Map;this.forNear(e,t,n,Ky,(t,n,o,s)=>{let c=e.worldDelta(r,i,s),l=n*3;for(let e=0;e<3;e++)t.x[l+e]+=c[e]*o*.8,t.p[l+e]+=c[e]*o*.5;let u=a.get(t);(!u||n<u.i)&&a.set(t,{i:n,f:Math.max(o,u?.f??0),d:c})});for(let[e,t]of a)for(let n=t.i;n<e.n;n++){let r=n*3,i=t.f*nb;e.r[r]+=t.d[0]*i,e.r[r+1]+=t.d[1]*i,e.r[r+2]+=t.d[2]*i,this.ch.collide(e.r,r,e.margin)}}tie(e){this.updo=e;let t=this.ch.scalp,n=t.c,r=t.r,i=(e,t)=>{let i=Xv([(e[0]-n[0])/r[0],(e[1]-n[1])/r[1],(e[2]-n[2])/r[2]]);return[n[0]+i[0]*r[0]*t,n[1]+i[1]*r[1]*t,n[2]+i[2]*r[2]*t]},a=e=>Xv([(e[0]-n[0])/r[0]**2,(e[1]-n[1])/r[1]**2,(e[2]-n[2])/r[2]**2]),o=e===`ponytail`?[[n[0],n[1]+r[1]*.42,n[2]-r[2]*.9]]:e===`bun`?[[n[0],n[1]+r[1]*.62,n[2]-r[2]*.78]]:[[n[0]-r[0]*.62,n[1]+r[1]*.74,n[2]-r[2]*.12],[n[0]+r[0]*.62,n[1]+r[1]*.74,n[2]-r[2]*.12]];for(let t of this.guides){if(t.bangs)continue;if(t.hold.fill(0),e===`down`){t.r.set(t.r0),t.x.set(t.r),t.p.set(t.r);continue}let s=[t.r0[0],t.r0[1],t.r0[2]],c=1+t.margin/r[0]+.03,l=i(o.length>1&&s[0]-n[0]>0?o[1]:o[0],c+.02),u=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]),d=Math.max(1,Math.min(t.n-2,Math.round(u*1.15/t.seg0)));for(let e=0;e<=d;e++){let n=e/d,r=i([s[0]+(l[0]-s[0])*n,s[1]+(l[1]-s[1])*n,s[2]+(l[2]-s[2])*n],e?c:1);t.r.set(e?r:s,e*3),t.hold[e]=$y}let f=a(l),p=this.rng()*Math.PI*2;if(e===`ponytail`){let e=Xv([f[0]*.7+Math.cos(p)*.15,f[1]*.7-.6,f[2]*.7+Math.sin(p)*.15]),n=[l[0],l[1],l[2]];for(let r=d+1;r<t.n;r++){e=Xv([e[0]*.86,e[1]*.86-.14,e[2]*.86]);let i=new Float32Array([n[0]+e[0]*t.seg0,n[1]+e[1]*t.seg0,n[2]+e[2]*t.seg0]);this.ch.collide(i,0,t.margin),n=[i[0],i[1],i[2]],t.r.set(n,r*3)}}else{let n=Xv([f[1],-f[0],0].every(e=>Math.abs(e)<1e-6)?[1,0,0]:[f[1],-f[0],0]),r=[f[1]*n[2]-f[2]*n[1],f[2]*n[0]-f[0]*n[2],f[0]*n[1]-f[1]*n[0]],i=t.n-d-1,a=e===`bun`?1:.75,o=p;for(let e=1;e<=i;e++){let s=e/i,c=tb*a*(1-.7*s),u=(.16+.34*s)*a;o+=t.seg0/Math.max(.05,c);let p=(d+e)*3;for(let e=0;e<3;e++)t.r[p+e]=l[e]+f[e]*u+(n[e]*Math.cos(o)+r[e]*Math.sin(o))*c;t.hold[d+e]=eb}}t.x.set(t.r),t.p.set(t.r)}this.syncStrands(!0)}part(e){let t=this.ch.scalp;for(let n of this.guides){if(!n.bangs)continue;let r=Xv([(n.r[0]-t.c[0])/t.r[0],(n.r[1]-t.c[1])/t.r[1],(n.r[2]-t.c[2])/t.r[2]]),i=Xv([r[0]/t.r[0],r[1]/t.r[1],r[2]/t.r[2]]),a=r[0]<0?-1:1,o=e===`forward`?[r[0]*.5,-.25,1]:e===`curtain`?[a*.7,-.3,.8]:[e===`side-left`?-.9:.9,-.3,.75],s=o[0]*i[0]+o[1]*i[1]+o[2]*i[2];o=Xv([o[0]-s*i[0],o[1]-s*i[1],o[2]-s*i[2]]),ry(this.ch,n,n.r,o),n.x.set(n.r),n.p.set(n.r)}this.syncStrands(!0)}blow(e,t,n,r){let i=e.camera.position,a=!1;return this.forNear(e,t,n,cb,(e,t,n)=>{let o=t*3,s=e.x[o]-i.x,c=e.x[o+1]-i.y,l=e.x[o+2]-i.z,u=Math.hypot(s,c,l)||1,d=.9*n*r;e.x[o]+=(s/u+(this.rng()-.5)*1.2)*d,e.x[o+1]+=(c/u+(this.rng()-.3)*1.2)*d,e.x[o+2]+=(l/u+(this.rng()-.5)*1.2)*d,e.wet=Math.max(0,e.wet-Ry*r*n/Math.max(1,e.count)),a=!0}),a}wave(e,t,n,r){let i=new Set;this.forNear(e,t,n,rb,(e,t,n)=>{e.period=ob,e.curl[t]=Jv(e.curl[t]+r*ib*n,0,sb),i.add(e)});for(let e of i)iy(e);return i.size>0}curl(e,t,n,r,i){let a=new Set;this.forNear(e,t,n,rb,(e,t,n)=>{i>0&&(e.period=ab),e.curl[t]=Jv(e.curl[t]+i*r*ib*n,0,1),a.add(e)});for(let e of a)iy(e);return a.size>0}};function bb(e,t,n,r,i,a,o,s){let c=n-e,l=r-t,u=o-i,d=s-a,f=c*d-l*u;if(Math.abs(f)<1e-9)return-1;let p=((i-e)*d-(a-t)*u)/f,m=((i-e)*l-(a-t)*c)/f;return p>=0&&p<=1&&m>=0&&m<=1?m:-1}function xb(e,t){let n=e.scalp,r=new Float32Array(t.length/3);for(let i=0;i<r.length;i++){let a=(t[i*3]-n.c[0])/n.r[0],o=(t[i*3+1]-n.c[1])/n.r[1],s=(t[i*3+2]-n.c[2])/n.r[2],c=e.hairlineY(Math.atan2(a,s)),l=o/Math.hypot(a,o,s);r[i]=wb(c-.05,c+.01,l)}return r}function Sb(e,t,n,r){let i=t>.01?r/(t+r):1;for(let t=0;t<3;t++)e[t]+=(n[t]-e[t])*i}var Cb=[0,0,0,0];function wb(e,t,n){let r=Jv((n-e)/(t-e),0,1);return r*r*(3-2*r)}var Tb=360,Eb=400,Db=2,Ob=new H(`#efe3ff`);function kb(e){return e.updo===`ponytail`||e.updo===`bun`?{...Qg,yaw:.95}:Qg}function Ab(e,t,n,r,i,a=!0,o=[],s=`straight`){let c=t.landmarks;if(!c)return``;let l=new yb(t,!0);l.uniforms.uTex.value=n.uniforms.uTex.value,l.uniforms.uToon.value=n.uniforms.uToon.value,l.setColor(i),l.grow(`layered`),r.color&&l.dyeOrder(r.dye??`full`,new H(r.color.hex),new H(r.color2?.hex??r.color.hex));let u=r.texture??s;u!==`straight`&&l.setTexture(u),l.settle(120),l.assignZones(Sv(r.lengths.sides,c),Sv(r.lengths.back,c),Sv(r.lengths.bangs,c),fv(r)),a&&(l.trimTo(e=>Sv(r.lengths[e],c)),l.settle(160)),r.bangsStyle&&r.bangsStyle!==`forward`&&(l.part(r.bangsStyle===`side`?`side-left`:`curtain`),l.settle(120)),r.updo&&(l.tie(r.updo),l.settle(120));let{renderer:d,scene:f}=e,p=e.camera,m={pos:p.position.clone(),rot:p.quaternion.clone(),aspect:p.aspect};p.aspect=Tb/Eb,p.updateProjectionMatrix(),e_(p,kb(r)),l.setLightDir(e.keyLightDir(new B));let h=d.domElement,g=d.getPixelRatio(),_=Math.min(Db,h.width/Tb,h.height/Eb),v=Math.floor(Tb*_),y=Math.floor(Eb*_),b=d.getViewport(new Wt),x=f.background;n.group.visible=!1,f.add(l.group,...o),t.bindHairColor?.(l.scalpTint),f.background=Ob,d.setViewport(0,0,v/g,y/g),d.setScissor(0,0,v/g,y/g),d.setScissorTest(!0),d.render(f,p),e.opaque();let S=document.createElement(`canvas`);S.width=Tb,S.height=Eb;let C=S.getContext(`2d`);return C.imageSmoothingQuality=`high`,C.drawImage(h,0,h.height-y,v,y,0,0,Tb,Eb),d.setScissorTest(!1),d.setViewport(b),p.position.copy(m.pos),p.quaternion.copy(m.rot),p.aspect=m.aspect,p.updateProjectionMatrix(),p.updateMatrixWorld(),f.background=x,f.remove(l.group,...o),n.group.visible=!0,t.bindHairColor?.(n.scalpTint),l.group.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),e.render(),S.toDataURL(`image/png`)}var jb=null,Mb={muteAudio:!1,disableChat:!1},Nb=[],Pb=!1,Fb=!1,Ib=!1;function Lb(e){if(jb)try{e(jb)}catch(e){console.warn(`[CrazyGames SDK]`,e)}}var Rb={async init(){let e=window.CrazyGames?.SDK;if(e)try{if(await e.init(),e.environment===`disabled`)return;jb=e,Mb={...Mb,...e.game.settings},e.game.addSettingsChangeListener(e=>{Mb={...Mb,...e};for(let e of Nb)e(Mb)})}catch(e){console.warn(`[CrazyGames SDK] init failed, running standalone`,e),jb=null}},get environment(){return jb?.environment??`standalone`},get settings(){return Mb},get locale(){try{return jb?.user?.systemInfo?.locale??null}catch{return null}},onSettings(e){Nb.push(e),e(Mb)},loadingStart(){Pb||(Pb=!0,Lb(e=>e.game.loadingStart()))},loadingStop(){Pb&&(Pb=!1,Lb(e=>e.game.loadingStop()),Ib&&(Ib=!1,Rb.gameplayStart()))},gameplayStart(){if(Pb){Ib=!0;return}Fb||(Fb=!0,Lb(e=>e.game.gameplayStart()))},gameplayStop(){Ib=!1,Fb&&(Fb=!1,Lb(e=>e.game.gameplayStop()))},happytime(){Lb(e=>e.game.happytime())},getItem(e){let t=null;try{t=localStorage.getItem(e)}catch{}if(!jb)return t;try{let n=jb.data.getItem(e);return n===null&&t!==null&&jb.data.setItem(e,t),n??t}catch{return t}},setItem(e,t){if(jb)try{jb.data.setItem(e,t);return}catch{}try{localStorage.setItem(e,t)}catch{}}},zb=[`#5a3524`,`#1e1a20`,`#d9b06a`,`#7a4a2e`,`#8a3b22`,`#6b5a4e`,`#b07a3c`],Bb=`hsl.progress.v1`,Vb=`hsl.gallery.v1`,Hb=16,Ub=3,Wb=2,Gb=e=>e<=2?.75:.5,Kb=[300,400,500,700,900,1200,2500],qb={id:`free`,minLevel:0,lengths:{bangs:`brows`,sides:`chest`,back:`chest`}},Jb=[`forehead`,`brows`,`cheek`,`chin`,`shoulder`,`chest`],Yb=[`forward`,`side-left`,`side-right`,`curtain`],Xb=class{progress={likes:0,followers:0,served:0,best:0,introduced:1,trendDay:``,trendDone:!1,owned:[],decor:[],giftDay:0,giftStreak:0,seen:[],recent:[]};viewers=1248;gallery=[];lastClient=``;visitsToday=0;constructor(){try{let e=Rb.getItem(Bb);e&&(this.progress={...this.progress,...JSON.parse(e)}),this.gallery=JSON.parse(Rb.getItem(Vb)??`[]`)}catch{}this.progress.decor=[...new Set(this.progress.decor.map(e=>Hv[e]??e))];let e=new Date().toDateString();this.progress.trendDay!==e&&(this.progress.trendDay=e,this.progress.trendDone=!1),this.viewers+=Math.min(4e3,Math.round(this.progress.followers*.6))}get level(){return z_(this.progress.followers)}get trendOrder(){let e=dv.filter(e=>e.minLevel<=this.level),t=0;for(let e of this.progress.trendDay)t=t*31+e.charCodeAt(0)>>>0;return e[t%e.length]}get trendPending(){return!this.progress.trendDone&&this.progress.served>0}next(){let e=this.level;this.visitsToday++;let t,n=!1,r=!1,i=dv.filter(t=>t.minLevel>this.progress.introduced&&t.minLevel<=e);if(this.progress.served===0)t=dv[0];else if(i.length){let e=i.filter(e=>this.unlikeRecent(e));t=$b(e.length?e:i),this.progress.introduced=t.minLevel,r=!0}else if(this.trendPending&&this.visitsToday%Ub===0)t=this.trendOrder,n=!0;else if(Math.random()<Gb(e)){t=xv(e);for(let n=0;n<30&&!this.unlikeRecent(t);n++)t=xv(e)}else{let n=dv.filter(t=>t.minLevel<=e),r=n.filter(e=>this.unlikeRecent(e));t=$b(r.length?r:n)}let{name:a,model:o}=this.progress.served===0?b_[0]:$b(b_.filter(e=>e.name!==this.lastClient));this.progress.recent=[...this.progress.recent,Qb(t)].slice(-4),this.lastClient=a;let s=Math.random(),c=t.texture===`straight`?`wavy`:t.texture||this.progress.served===0||s<.6?`straight`:s<.85?`wavy`:`curly`,l=[t.color?.hex,t.color2?.hex].filter(e=>!!e).map(e=>new H(e)),u=e=>Math.min(9,...l.map(t=>{let n=new H(e);return Math.hypot(n.r-t.r,n.g-t.g,n.b-t.b)})),d=zb.filter(e=>u(e)>.25),f=d.length?$b(d):zb.reduce((e,t)=>u(e)>u(t)?e:t),p=this.startHair(t,r);return!t.bangsStyle&&p.part!==`forward`&&(t={...t,bangsStyle:`forward`}),{client:a,model:o,order:t,startColor:f,startTexture:c,trend:n,intro:r,free:!1,start:p}}startHair(e,t){if(this.progress.served===0)return{lengths:{},part:`forward`};let n=this.level<I_.comb?`forward`:$b(Yb.filter(t=>!e.bangsStyle||(e.bangsStyle===`curtain`?t!==`curtain`:!t.startsWith(`side`)))),r=!t&&!!(e.texture||e.color||e.updo||e.bangsStyle||e.accessory||e.face),i=Math.random();if(r&&i<.3)return{lengths:{...e.lengths},part:n};if(i<.65){let t=e=>Jb[Jb.indexOf(e)+1],r=e.lengths;return{lengths:{bangs:t(r.bangs),sides:t(r.sides),back:t(r.back)},part:n}}return{lengths:{},part:n}}unlikeRecent(e){let t=Qb(e),n=this.progress.recent.at(-1);return!this.progress.recent.includes(t)&&(!n||n.split(`|`)[2]!==t.split(`|`)[2])}reward(e,t,n){let r=e.trend?Wb:1,i=Math.round((t*800+n*150)*r*this.decorBonus),a=Math.round((t*100+n*25)*r),o=this.level,s=this.progress;s.likes+=i,s.followers+=a,s.served++,s.best=Math.max(s.best,Math.round(t*1e3)),e.trend&&(s.trendDone=!0),this.viewers+=n*90+Math.round(Math.random()*40),this.save();let c=this.level>o?this.level:0;return{likes:i,followers:a,levelUp:c,unlocked:c?Array.from({length:c-o},(e,t)=>V_(o+1+t)).flat():[]}}freeVisit(e){return{...e,order:qb,trend:!1,intro:!1,free:!0,startTexture:`straight`,start:{lengths:{},part:`forward`}}}rewardFree(e){let t=this.level,n=this.progress,r=Math.round((250+90*e)*this.decorBonus),i=30+12*e;n.likes+=r,n.followers+=i,n.served++,this.viewers+=40+e*15,this.save();let a=this.level>t?this.level:0;return{likes:r,followers:i,levelUp:a,unlocked:a?Array.from({length:a-t},(e,n)=>V_(t+1+n)).flat():[]}}get gift(){let e=this.progress,t=Zb();if(e.giftDay===t||e.served===0)return null;let n=((e.giftDay===t-1?e.giftStreak+1:1)-1)%Kb.length+1,r=U_.filter(e=>!this.owns(e.id)),i=n===Kb.length&&r.length?r[t%r.length].id:null;return{day:n,likes:Kb[n-1],item:i}}claimGift(){let e=this.gift,t=this.progress;return e?(t.giftStreak=t.giftDay===Zb()-1?t.giftStreak+1:1,t.giftDay=Zb(),t.likes+=e.likes,e.item&&t.owned.push(e.item),this.save(),e):null}get decorBonus(){return 1+Bv*this.progress.decor.length}buyDecor(e){let t=Vv.find(t=>t.id===e);return!t||this.progress.decor.includes(e)||this.progress.likes<t.price?!1:(this.progress.likes-=t.price,this.progress.decor.push(e),this.viewers+=60,this.save(),!0)}owns(e){return W_(e).price===0||this.progress.owned.includes(e)}buy(e){let t=W_(e);return this.owns(e)||this.progress.likes<t.price?!1:(this.progress.likes-=t.price,this.progress.owned.push(e),this.save(),!0)}addPhoto(e){let t=e.visit===void 0?-1:this.gallery.findIndex(t=>t.visit===e.visit);t>=0&&this.gallery.splice(t,1),this.gallery.unshift(e),this.gallery.length=Math.min(this.gallery.length,Hb),Rb.setItem(Vb,JSON.stringify(this.gallery))}save(){Rb.setItem(Bb,JSON.stringify(this.progress))}};function Zb(){let e=new Date;return Math.round(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function Qb(e){let t=e.lengths,n=e=>e===`cheek`||e===`chin`?`short`:e===`shoulder`?`mid`:`long`,r=e.updo??`${n(t.back)}${n(t.sides)===n(t.back)?``:`/${n(t.sides)}`}${e.shape?.back??``}`;return[`${t.bangs===`forehead`?`short`:`brows`}${e.shape?.bangs??``}`,e.bangsStyle??``,r,e.texture??``,e.color?.name??``].join(`|`)}function $b(e){return e[Math.floor(Math.random()*e.length)]}var ex=[[`wash`,`wash`],[`cut`,`scissors`],[`comb`,`comb`],[`curl`,`curl`],[`wave`,`wave`],[`straight`,`straight`],[`dye`,`dye`],[`dry`,`dry`],[`style`,`accessory`]],tx=e=>e===`dye`||e===`comb`||e===`style`,nx=8,rx=7,ix=10,ax=348,ox=8,sx=92,cx=1920,lx=1080,ux=`<svg viewBox="0 -0.5 24 24"><path d="M18.06 9.5A7 7 0 1 1 12 6"/><path d="M10 3l3 3-3 3"/></svg>`,dx=7,fx=class{canvas;h;frame;viewers;likes;orderImg;orderTitle;orderTasks;orderChips;chatList;toolButtons=new Map;palette;hint;hearts;modal;finishBtn;rinseBtn;soundBtn;musicBtn;settings;washSteps;checks=new Map;focus=new Map;musicOn=!0;chatInput;soundOn=!0;levelNum;levelFill;orderCard;swatches=[];ombreToggle;tray;combTray;bar;optsBack;tool=`cut`;playing=!0;trayItems=new Map;camButtons;trayGrids;trayPrev;trayNext;trayTabs=new Map;hintTimer=0;rotateCard;upright=!1;scale=1;coachEl;coachText;handEl;level=99;constructor(e,t,n){this.canvas=t,this.h=n;let r=q();this.frame=X(`gui`),this.rotateCard=$(X(`rotate-card hidden`),hx(`phone_rotate`,`rotate-phone`),$(X(`rotate-title`),Q(r.rotate.title)),$(X(`rotate-sub`),Q(r.rotate.sub))),e.append(this.frame,this.rotateCard);let i=X(`stats`);this.viewers=Z(`num`),this.likes=Z(`num`);let a=$(X(`stats-row`),$(X(`pill live`),Z(`dot`),Q(r.hud.live)),$(X(`pill`),hx(`eye`,`ui-eye`),this.viewers),$(X(`pill`),Z(`heart`,`♥`),this.likes));this.levelNum=Z(`lvl-num`),this.levelFill=Z(`fill`);let o=X(`meta`),s=(e,t,n)=>{let r=gx(`hud-btn`,``,n);return r.append(hx(e,``)),r.title=t,r.setAttribute(`aria-label`,t),r},c=s(`camera`,r.hud.gallery,()=>n.gallery()),l=s(`sofa`,r.hud.studio,()=>n.studio()),u=(e,t,n)=>{let r=gx(`set-row`,``,n);return r.append(hx(e,`set-icon`),$(Z(`set-label`),Q(t))),r};this.soundBtn=u(`sound_on`,r.hud.sound,()=>{this.soundOn=!this.soundOn,n.sound(this.soundOn)}),this.soundBtn.append(Z(`switch`)),this.musicBtn=u(`music`,r.hud.music,()=>{this.musicOn=!this.musicOn,n.music(this.musicOn)}),this.musicBtn.append(Z(`switch`));let d=u(`globe`,r.hud.language,()=>{this.settings.classList.add(`hidden`),n.languages()});d.append(Z(`set-value`,`${s_.find(([e])=>e===p_())?.[1]??``} ›`)),this.settings=$(X(`settings card hidden`),this.soundBtn,this.musicBtn,d);let f=s(`gear`,r.hud.settings,()=>this.settings.classList.toggle(`hidden`));document.addEventListener(`pointerdown`,e=>{!this.settings.contains(e.target)&&!f.contains(e.target)&&this.settings.classList.add(`hidden`)},!0),o.append(this.levelNum,$(Z(`bar lvl-bar`),this.levelFill),c,l,$(X(`gear-wrap`),f,this.settings)),i.append(a,o);let p=X(`side`),m=this.orderCard=X(`card order`);this.orderImg=document.createElement(`img`),this.orderImg.className=`order-img`,this.orderImg.alt=``,this.orderTitle=X(`order-title`),this.orderChips=X(`chips`);let h=$(X(`order-pic`),this.orderImg,$(Z(`pic-eye`),hx(`eye`,``)));h.title=r.order.seeAngle,h.addEventListener(`click`,()=>n.refView()),this.washSteps=X(`wash-steps hidden`);for(let[e,t]of[[`bubbles`,r.tools.wash],[`drop`,r.rinse],[`dryer`,r.tools.dry]]){let r=$(Z(`wash-step`),hx(e,`wash-icon`));r.title=t,r.setAttribute(`aria-label`,t),r.addEventListener(`click`,()=>n.orderStep(e===`dryer`?`dry`:`wash`)),this.washSteps.append(r)}this.finishBtn=gx(`finish`,``,()=>n.finish()),this.finishBtn.append(Z(`spark`,`✦`),Q(r.finish)),this.orderTasks=$(X(`order-tasks`),this.washSteps,this.orderChips),m.append(this.orderTitle,h,this.orderTasks,this.finishBtn);let g=X(`card chat`);this.chatList=X(`chat-list`);let _=document.createElement(`input`);_.placeholder=r.chat.placeholder,_.maxLength=60;let v=gx(`send`,`➤`,()=>{let e=_.value.trim();e&&(n.say(e),_.value=``)});_.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&v.click()}),this.chatInput=$(X(`chat-input`),_,v),g.append($(X(`chat-head`),Q(r.chat.title)),this.chatList,this.chatInput),p.append(m,g);let y=this.bar=X(`toolbar`),b=X(`tool-row`);for(let[e,t]of ex){let n=r.tools[e],i=gx(`tool`,``,()=>{this.level<I_[e]?this.showHint(J(r.toolLocked,{tool:r.toolNames[e],n:I_[e]}),2.5):this.pickTool(e)});i.title=n,i.dataset.icon=t,i.append(px(`assets/ui/tool_${t}.png`,``),$(Z(`tool-label`),Q(n)),$(Z(`lock`),hx(`lock`,`lock-icon`),Q(`${I_[e]}`))),this.toolButtons.set(e,i),b.append(i)}this.optsBack=gx(`opts-back`,``,()=>this.setOpts(!1));let x=Z(`opts-arrow`);x.innerHTML=`<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>`,this.optsBack.append(px(``,``),x),this.palette=X(`palette hidden`);for(let{hex:e,name:t,level:i}of L_){let a=gx(`swatch`,``,()=>{if(this.level<i){this.showHint(J(r.colorLocked,{color:r.colors[t],n:i}),2.5);return}this.palette.querySelectorAll(`.swatch`).forEach(e=>e.classList.toggle(`on`,e===a)),n.dye(e)});a.title=r.colors[t],a.style.background=e,this.swatches.push({el:a,level:i}),this.palette.append(a)}let S=gx(`swatch eraser`,``,()=>{this.palette.querySelectorAll(`.swatch`).forEach(e=>e.classList.toggle(`on`,e===S)),n.dye(null)});S.title=r.dye.erase,this.palette.append(S);let C=[[`full`,r.dye.full],[`ends`,r.dye.ombre],[`roots`,r.dye.roots],[`front`,r.dye.front]].map(([e,t],r)=>{let i=gx(r?`mode mode-${e}`:`mode on`,t,()=>{C.forEach(e=>e.classList.toggle(`on`,e===i)),n.dyeMode(e)});return i});this.ombreToggle=$(X(`dye-mode`),...C),this.palette.append(this.ombreToggle),this.tray=this.buildTray(n),this.combTray=X(`comb-tray hidden`);let w=$(X(`comb-row`),$(Z(`comb-k`),Q(r.comb.bangs)));for(let e of[`forward`,`side-left`,`side-right`,`curtain`])w.append(gx(`part-btn`,r.bangsStyles[e],()=>n.part(e)));let T=$(X(`comb-row`),$(Z(`comb-k`),Q(r.comb.updo)));for(let e of[`down`,`ponytail`,`bun`,`space-buns`])T.append(gx(`part-btn`,r.updos[e],()=>n.tie(e)));this.combTray.append(w,T),y.append(b,$(X(`tool-opts`),this.optsBack,this.palette,this.tray,this.combTray)),this.rinseBtn=gx(`rinse hidden`,``,()=>n.rinse()),this.rinseBtn.append(hx(`drop`,`drop`),Q(r.rinse)),y.append(this.rinseBtn);let E=gx(`turn left`,``,()=>n.turn(1)),D=gx(`turn right`,``,()=>n.turn(-1));E.innerHTML=D.innerHTML=ux,E.title=D.title=r.turn;let O=gx(`turn zoom in`,``,()=>n.zoom(1)),k=gx(`turn zoom out`,``,()=>n.zoom(-1));O.innerHTML=`<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>`,k.innerHTML=`<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>`,O.title=r.zoomIn,k.title=r.zoomOut;let A=gx(`turn up`,``,()=>n.lift(1)),j=gx(`turn down`,``,()=>n.lift(-1));A.innerHTML=`<svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg>`,j.innerHTML=`<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>`,A.title=r.moveUp,j.title=r.moveDown,this.camButtons={left:E,right:D,in:O,out:k,up:A,down:j};let ee=$(X(`cam-pad`),A,E,D,j,O,k);this.hint=X(`hint hidden`),this.coachText=Z(`coach-text`),this.coachEl=$(X(`coach hidden`),this.coachText,gx(`coach-skip`,r.skip,()=>n.skipTutorial())),this.handEl=$(X(`tut-hand hidden`),Z(`ripple`),hx(`hand`,`finger`)),this.hearts=X(`hearts`),this.modal=X(`modal hidden`);let te=$(X(`dock`),y);this.frame.append(i,p,te,ee,this.hint,this.coachEl,this.hearts,this.modal,this.handEl),this.pickTool(`cut`,!0),addEventListener(`resize`,this.onResize),this.resizeObserver.observe(t),this.layout()}onResize=()=>this.layout();resizeObserver=new ResizeObserver(()=>this.layout());destroy(){removeEventListener(`resize`,this.onResize),this.resizeObserver.disconnect(),this.frame.remove(),this.rotateCard.remove()}layout(){let e=this.canvas.getBoundingClientRect(),t=e.width<e.height;this.rotateCard.classList.toggle(`hidden`,!t),t!==this.upright&&(this.upright=t,this.h.upright(t));let n=this.scale=Math.min(e.width/cx,e.height/lx);Object.assign(this.frame.style,{left:`${e.left}px`,top:`${e.top}px`,width:`${e.width/n}px`,height:`${e.height/n}px`,transform:`scale(${n})`}),this.modalOpen&&this.fitCard()}pickTool(e,t=!1){for(let[t,n]of this.toolButtons){let r=t===e;n.classList.toggle(`on`,r),r&&n.classList.remove(`new`),n.firstElementChild.src=`assets/ui/tool_${n.dataset.icon}${r?`_on`:``}.png`,r&&(this.optsBack.firstElementChild.src=`assets/ui/tool_${n.dataset.icon}_on.png`,this.optsBack.title=n.title)}this.tool=e,this.palette.classList.toggle(`hidden`,e!==`dye`),this.tray.classList.toggle(`hidden`,e!==`style`),this.combTray.classList.toggle(`hidden`,e!==`comb`),this.setOpts(this.playing&&tx(e)),e===`style`&&this.updateTrayPager(),t||this.h.tool(e)}setOpts(e){this.bar.classList.toggle(`opts-open`,e)}get optsOpen(){return this.bar.classList.contains(`opts-open`)}buildTray(e){let t=X(`tray hidden`),n=this.trayGrids={accessory:X(`tray-grid`),sticker:X(`tray-grid hidden`)},r=(e,r)=>{let i=gx(r===`accessory`?`tray-tab on`:`tray-tab`,e,()=>{t.querySelectorAll(`.tray-tab`).forEach(e=>e.classList.toggle(`on`,e===i)),n.accessory.classList.toggle(`hidden`,r!==`accessory`),n.sticker.classList.toggle(`hidden`,r!==`sticker`),this.updateTrayPager()});return this.trayTabs.set(r,i),i},i=q(),a=$(X(`tray-tabs`),r(i.tray.accessories,`accessory`),r(i.tray.face,`sticker`)),o=$(X(`tray-acts`),gx(`tray-act`,i.tray.undo,()=>e.styleUndo()),gx(`tray-act`,i.tray.clear,()=>e.styleClear()));for(let t of U_){let r=gx(`tray-item`,``,()=>e.styleItem(t.id));r.title=H_(t.id),r.append(px(q_(t),``),Z(`price`)),this.trayItems.set(t.id,r),n[t.kind].append(r)}for(let e of Object.values(n)){let t=e.childElementCount>nx;e.style.setProperty(`--n`,`${t?rx:e.childElementCount}`),e.dataset.paged=t?`1`:``,e.addEventListener(`scroll`,()=>this.updateTrayPager(),{passive:!0}),e.addEventListener(`wheel`,t=>{Math.abs(t.deltaY)<=Math.abs(t.deltaX)||(t.preventDefault(),e.scrollBy({left:t.deltaY}))},{passive:!1})}let s=e=>{let t=this.trayGrid();t.scrollBy({left:e*(t.clientWidth+ix),behavior:`smooth`})};return this.trayPrev=gx(`tray-page prev`,``,()=>s(-1)),this.trayNext=gx(`tray-page next`,``,()=>s(1)),this.trayPrev.innerHTML=this.trayNext.innerHTML=`<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>`,t.append(a,o,$(X(`tray-pager`),this.trayPrev,n.accessory,n.sticker,this.trayNext)),t}trayGrid(){return this.trayGrids[this.trayTab]}updateTrayPager(){let e=this.trayGrid(),t=!!e.dataset.paged;this.trayPrev.classList.toggle(`off`,!t||e.scrollLeft<=1),this.trayNext.classList.toggle(`off`,!t||e.scrollLeft>=e.scrollWidth-e.clientWidth-1),this.trayPrev.parentElement.classList.toggle(`paged`,t)}setStyleState(e,t,n){for(let[r,i]of this.trayItems){let a=e(r);i.classList.toggle(`locked`,!a),i.classList.toggle(`on`,r===n),i.lastElementChild.textContent=a?``:`♥${__(t(r))}`}}clearDye(){this.palette.querySelectorAll(`.swatch`).forEach(e=>e.classList.remove(`on`))}setLevel(e,t){this.ombreToggle.classList.toggle(`basic`,e<5),this.level=e,this.levelNum.textContent=J(q().hud.level,{n:e}),this.levelFill.style.width=`${Math.round(t*100)}%`;for(let[t,n]of this.toolButtons)n.classList.toggle(`locked`,e<I_[t]);for(let t of this.swatches)t.el.classList.toggle(`locked`,e<t.level)}highlightTool(e){this.toolButtons.get(e)?.classList.add(`new`)}clearHighlights(){for(let e of this.toolButtons.values())e.classList.remove(`new`)}setStats(e,t){this.viewers.textContent=__(e),this.likes.textContent=vx(t)}setOrder(e,t,n,r,i=!1){this.orderCard.classList.toggle(`trend`,r);for(let e of this.toolButtons.values())e.classList.remove(`new`);let a=q();this.orderImg.src=n,this.orderTitle.textContent=pv(t.id),_x(this.orderTitle),this.orderChips.replaceChildren(),this.checks.clear(),this.focus.clear();let o=(e,t,n,r)=>{let i=X(r?`chip tile`:`chip`);r?(i.title=`${t}: ${n}`,i.setAttribute(`aria-label`,i.title),i.append(r)):i.append($(Z(`chip-k`),Q(t)),Q(n));let a=Z(`chip-redo`);a.innerHTML=`<svg viewBox="0 -0.5 24 24"><path d="M5.94 9.5A7 7 0 1 0 12 6"/><path d="M14 3l-3 3 3 3"/></svg>`,i.append(a),this.orderChips.append(i),e.length&&(this.checks.set(i,e),i.addEventListener(`click`,()=>this.h.orderStep(this.focus.get(i)??e[0])))},s=e=>px(e,`chip-art`),c=e=>s(`assets/order/${e}.png`),l=(...e)=>{let t=Z(`chip-art chip-swatches`);for(let n of e){let e=Z(`chip-sw`);e.style.background=n,t.append(e)}return t};if(this.orderCard.classList.toggle(`free`,i),this.setOrderReady(i),i){this.orderTitle.textContent=J(a.order.freeName,{client:e}),_x(this.orderTitle),o([],a.order.freeK,a.order.freeV,null);return}let u=[t.shape?.bangs&&a.shapes.bangs[t.shape.bangs],a.lengths[t.lengths.bangs]],d=[`${a.order.bangs}: ${u.filter(e=>!!e).join(`, `)}`];if(t.updo||d.push(`${a.order.sides}: ${a.lengths[t.lengths.sides]}`,`${a.order.back}: ${[t.shape?.back&&a.shapes.back[t.shape.back],a.lengths[t.lengths.back]].filter(e=>!!e).join(`, `)}`),o(t.updo?[`bangs`]:[`bangs`,`sides`,`back`],a.tools.cut,d.join(` · `),s(`assets/ui/tool_scissors.png`)),t.color){let e=[a.colors[t.color.name],...t.color2?[a.colors[t.color2.name]]:[]].join(` / `);o([`color`],a.order.color,t.dye?`${a.order.dyeStyles[t.dye]}: ${e}`:e,l(t.color.hex,...t.color2?[t.color2.hex]:[]))}t.texture&&o([`texture`],a.order.style,a.textures[t.texture],c(`tex_${t.texture===`straight`?`sleek`:t.texture}`)),t.bangsStyle&&o([`bangsStyle`],a.order.bangs,a.order[t.bangsStyle===`curtain`?`curtain`:t.bangsStyle===`forward`?`forward`:`sideSwept`],c(`bangs_${t.bangsStyle}`)),t.updo&&o([`updo`],a.order.updo,a.updos[t.updo].toLowerCase(),c(`updo_${t.updo.replace(`-`,`_`)}`)),t.accessory&&o([`accessory`],a.parts.accessory,H_(t.accessory),s(q_(W_(t.accessory)))),t.face&&o([`bling`],a.parts.bling,H_(t.face.id),s(q_(W_(t.face.id))));let f=this.orderChips.childElementCount+(t.wash?3:0),p=f<=4?f:Math.ceil(f/2);this.orderTasks.style.setProperty(`--tile`,`${Math.min(sx,Math.floor((ax-(p-1)*ox)/p))}px`),this.palette.querySelectorAll(`.swatch`).forEach(e=>e.classList.remove(`on`))}setProgress(e,t=()=>!1){for(let[n,r]of this.checks){let i=r.map(e),a=i.reduce((e,t)=>e+t,0)/i.length,o=r.some(t);n.style.setProperty(`--p`,`${Math.round(a*100)}%`),n.classList.toggle(`done`,i.every(e=>e>=1)&&!o),n.classList.toggle(`failed`,o),this.focus.set(n,r.find(t)??r.find((e,t)=>i[t]<1)??r[0])}}setOrderReady(e){this.orderCard.classList.contains(`ready`)!==e&&(this.orderCard.classList.toggle(`ready`,e),e&&(this.finishBtn.classList.remove(`pop`),this.finishBtn.offsetWidth,this.finishBtn.classList.add(`pop`)))}post(e,t=!1){let n=X(t?`msg mine`:`msg`),r=X(`avatar`);r.style.background=e.color,r.textContent=e.name[0].toUpperCase();let i=X(`bubble`);for(i.append($(Z(`who`),Q(`${e.name}:`)),Q(` ${e.text}`)),n.append(r,i),this.chatList.append(n);this.chatList.children.length>dx;)this.chatList.firstElementChild.remove()}showHint(e,t=3.5){this.hint.textContent=e,this.hint.classList.remove(`hidden`),clearTimeout(this.hintTimer),this.hintTimer=window.setTimeout(()=>this.hint.classList.add(`hidden`),t*1e3)}heart(){let e=Z(`float-heart`,`♥`);e.style.left=`${Math.random()*60}px`,e.style.animationDuration=`${1.6+Math.random()*.8}s`,e.style.color=[`#ff5fa8`,`#ff8fc6`,`#f7b3d6`,`#c79bff`][Math.floor(Math.random()*4)],this.hearts.append(e),e.addEventListener(`animationend`,()=>e.remove())}setPlaying(e){this.finishBtn.disabled=!e,this.playing=e,this.setOpts(e&&tx(this.tool))}setSound(e,t){this.soundOn=e;let n=e&&!t;this.soundBtn.classList.toggle(`on`,n),this.soundBtn.firstElementChild.src=mx(n?`sound_on`:`sound_off`),this.soundBtn.disabled=t,this.soundBtn.title=t?q().hud.mutedBySite:n?q().hud.soundOn:q().hud.soundOff}setMusic(e,t){this.musicOn=e,this.musicBtn.classList.toggle(`on`,e&&!t),this.musicBtn.disabled=t,this.musicBtn.title=t?q().hud.mutedBySite:e?q().hud.musicOn:q().hud.musicOff}setWashStep(e){this.washSteps.classList.toggle(`hidden`,e===null),e!==null&&this.washSteps.querySelectorAll(`.wash-step`).forEach((t,n)=>{t.classList.toggle(`done`,n<e),t.classList.toggle(`now`,n===e)})}setWashProgress(e){this.washSteps.querySelector(`.wash-step.now`)?.style.setProperty(`--p`,`${Math.round(Math.min(1,Math.max(0,e))*100)}%`)}coach(e){this.coachEl.classList.toggle(`hidden`,e===null),e!==null&&this.coachText.textContent!==e&&(this.coachText.textContent=e,this.coachEl.classList.remove(`pop`),this.coachEl.offsetWidth,this.coachEl.classList.add(`pop`))}hand(e){this.handEl.classList.toggle(`hidden`,!e),e&&(this.handEl.style.transform=`translate(${e.x/this.scale}px, ${e.y/this.scale}px)`,this.handEl.classList.toggle(`press`,e.press))}pulseFinish(e){this.finishBtn.classList.toggle(`pulse`,e)}finishCenter(){return this.centerOf(this.finishBtn)}camCenter(e){return this.centerOf(this.camButtons[e])}toolCenter(e){return this.centerOf(this.optsOpen&&e!==this.tool?this.optsBack:this.toolButtons.get(e))}trayTabCenter(e){return this.centerOf(this.trayTabs.get(e))}trayItemCenter(e){let t=this.trayItems.get(e),n=t?.parentElement;return t&&n&&!n.classList.contains(`hidden`)&&(t.offsetLeft<n.scrollLeft?n.scrollLeft=t.offsetLeft:t.offsetLeft+t.offsetWidth>n.scrollLeft+n.clientWidth&&(n.scrollLeft=t.offsetLeft+t.offsetWidth-n.clientWidth)),this.centerOf(t)}get trayTab(){return this.trayTabs.get(`sticker`)?.classList.contains(`on`)?`sticker`:`accessory`}centerOf(e){if(!e)return null;let t=e.getBoundingClientRect(),n=this.canvas.getBoundingClientRect();return t.width?{x:t.left+t.width/2-n.left,y:t.top+t.height/2-n.top}:null}setChatInput(e){this.chatInput.classList.toggle(`hidden`,!e)}setRinse(e){this.rinseBtn.classList.toggle(`hidden`,e===`hidden`),this.rinseBtn.classList.toggle(`ready`,e===`ready`)}showResult(e,t,n,r,i=!1){let a=!t;t||={total:1,stars:3,parts:[]};let o=Math.round(t.total*1e3),s=X(`stars`);for(let e=0;e<3;e++){let n=Z(e<t.stars?`star on`:`star`,`★`);n.style.animationDelay=`${.25+e*.25}s`,s.append(n)}let c=X(`parts`);for(let e of t.parts){let t=Z(`fill`);t.style.width=`${Math.round(e.score*100)}%`,c.append($(X(`part`),$(Z(`part-k`),Q(e.label)),$(Z(`bar small`),t)))}let l=Z(`fill`);l.style.width=`${o/10}%`;let u=q(),d=a?u.result.free:u.result.verdicts[t.stars],f=X(`result card`);f.append($(X(`result-title`),Q(d)),$(X(`result-sub`),Q(J(a?u.result.freeSub:u.result.subs[t.stars],{client:e}))),...a?[]:[s,$(X(`score-row`),$(Z(`score-k`),Q(u.result.score)),$(Z(`score-v`),Q(`${__(o)} / ${__(1e3)}`))),$(Z(`bar`),l),c],$(X(`reward`),$(Z(`gain`),Z(`heart`,`♥`),Q(`+${__(n.likes)}`)),$(Z(`gain`),Z(`fol`,`★`),Q(g_(u.result.followers,n.followers))),...r?[Z(`x2`,u.result.trend)]:[])),n.levelUp&&f.append($(X(`levelup`),$(X(`levelup-title`),Q(J(u.result.levelUp,{n:n.levelUp}))),...n.unlocked.length?[$(X(`levelup-sub`),Q(J(u.result.unlocked,{list:n.unlocked.join(`, `)})))]:[]));let p=$(X(`result-buttons`),gx(`finish next`,u.result.next,()=>this.h.next()),gx(`finish next retry-btn`,u.result.retry,()=>this.h.retry()));i&&p.append(gx(`finish next free-btn`,u.result.freeBtn,()=>this.h.nextFree())),f.append(p),this.modal.replaceChildren(f),this.modal.classList.remove(`hidden`,`center`),f.querySelectorAll(`.part-k, .result-title, .result-sub`).forEach(e=>_x(e)),this.fitCard()}fitCard(){let e=this.modal.firstElementChild;if(!e?.classList.contains(`result`))return;e.style.zoom=``;let t=this.modal.clientHeight-48;e.offsetHeight>t&&(e.style.zoom=String(t/e.offsetHeight))}hideResult(){this.modal.classList.add(`hidden`)}get modalOpen(){return!this.modal.classList.contains(`hidden`)}showStudio(e,t,n){let r=q(),i=X(`grid studio-grid`);for(let n of Vv){let a=e.includes(n.id),o=X(a?`decor owned`:`decor`),s=document.createElement(`img`);s.src=Uv(n),s.alt=Wv(n);let c=a?$(Z(`decor-owned`),Q(r.studio.owned)):gx(t>=n.price?`decor-buy`:`decor-buy poor`,`♥ ${__(n.price)}`,()=>this.h.buyDecor(n.id));o.append($(X(`decor-pic`),s),$(X(`pol-title`),Q(Wv(n))),c),i.append(o)}let a=X(`gallery card`);a.append($(X(`gallery-title`),Q(r.studio.title)),$(X(`studio-sub`),Q(J(r.studio.sub,{n:Math.round((n-1)*100)}))),i,gx(`finish next`,r.studio.back,()=>{this.hideResult(),this.h.galleryClosed()})),this.modal.replaceChildren(a),this.modal.classList.remove(`hidden`),this.modal.classList.add(`center`),a.querySelectorAll(`.pol-title`).forEach(e=>_x(e))}showLanguages(){let e=X(`lang-grid`);for(let[t,n]of s_)e.append(gx(t===p_()?`lang-btn on`:`lang-btn`,n,()=>{t===p_()?(this.hideResult(),this.h.galleryClosed()):this.h.language(t)}));let t=X(`gallery card lang-card`);t.append($(X(`gallery-title`),hx(`globe`,`title-icon`),Q(q().hud.language)),e,gx(`finish next`,q().studio.back,()=>{this.hideResult(),this.h.galleryClosed()})),this.modal.replaceChildren(t),this.modal.classList.remove(`hidden`),this.modal.classList.add(`center`),t.querySelectorAll(`.pol-title`).forEach(e=>_x(e))}showGift(e,t){let n=q(),r=X(`gift-days`);t.forEach((i,a)=>{let o=a+1,s=X(o<e.day?`gift-day done`:o===e.day?`gift-day today`:`gift-day`);if(s.append($(X(`gift-n`),Q(J(n.gift.day,{n:o})))),o===t.length&&o===e.day&&e.item){let t=px(q_(W_(e.item)),``);t.className=`gift-item`,s.append(t)}else o===t.length&&o>=e.day?s.append(hx(`gift`,`gift-icon`)):s.append($(X(`gift-pic`),Q(o<e.day?`✓`:`♥`)));s.append($(X(`gift-likes`),Q(`♥${__(i)}`))),o===t.length&&s.append($(X(`gift-plus`),Q(e.item&&o===e.day?H_(e.item):n.gift.surprise))),r.append(s)});let i=X(`gallery card gift-card`);i.append($(X(`gallery-title`),Q(n.gift.title)),$(X(`studio-sub`),Q(n.gift.sub)),r,gx(`finish next`,J(n.gift.claim,{n:e.likes}),()=>this.h.claimGift())),this.modal.replaceChildren(i),this.modal.classList.remove(`hidden`),this.modal.classList.add(`center`),i.querySelectorAll(`.gift-n, .gift-plus`).forEach(e=>_x(e))}showGallery(e){let t=q(),n=X(`grid`);e.length||n.append($(X(`empty`),Q(t.gallery.empty)));for(let r of e){let e=X(`polaroid`),i=document.createElement(`img`),a=r.orderId===`free`?t.gallery.free:r.orderId?pv(r.orderId):r.title??``;i.src=r.img,i.alt=a,e.append(i,$(X(`pol-title`),Q(a)),$(X(`pol-sub`),Q(`${r.client} · ${`★`.repeat(r.stars)}${`☆`.repeat(3-r.stars)} · ${__(r.score)}`))),n.append(e)}let r=X(`gallery card`);r.append($(X(`gallery-title`),Q(t.gallery.title)),n,gx(`finish next`,t.studio.back,()=>{this.hideResult(),this.h.galleryClosed()})),this.modal.replaceChildren(r),this.modal.classList.remove(`hidden`),this.modal.classList.add(`center`),r.querySelectorAll(`.pol-title`).forEach(e=>_x(e))}};function X(e){let t=document.createElement(`div`);return t.className=e,t}function Z(e,t=``){let n=document.createElement(`span`);return n.className=e,n.textContent=t,n}function Q(e){return document.createTextNode(e)}function px(e,t){let n=document.createElement(`img`);return n.src=e,n.alt=``,n.draggable=!1,t&&(n.className=t),n}var mx=e=>`assets/icons/icon_${e}.png`;function hx(e,t){return px(mx(e),t?`icon ${t}`:`icon`)}function gx(e,t,n){let r=document.createElement(`button`);return r.className=e,r.textContent=t,r.addEventListener(`click`,n),r.addEventListener(`pointerdown`,e=>e.stopPropagation()),r}function $(e,...t){return e.append(...t),e}function _x(e,t=.7){let n=e;n.style.fontSize=``,n.style.whiteSpace=`nowrap`;let r=parseFloat(getComputedStyle(n).fontSize);for(let e=.95;n.scrollWidth>n.clientWidth+1&&e>=t;e-=.05)n.style.fontSize=`${r*e}px`;n.scrollWidth>n.clientWidth+1&&(n.style.whiteSpace=``)}function vx(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e4?`${(e/1e3).toFixed(1)}K`:__(e)}var yx=[[`layered`,`Layered`],[`long`,`Long`],[`bangs`,`Bangs`],[`wavy`,`Wavy`],[`curly`,`Curly`]],bx=[`#5a3524`,`#1e1a20`,`#d9b06a`,`#f07ab8`,`#62d1b8`,`#9c86f2`,`#e8e4ee`],xx=`hsl.dev.look.v1`,Sx=ly.value.getHexString(),Cx=class{bar;info;look;sliders=new Map;tint;toonInput;constructor(e,t){let n=this.bar=wx(`div`,`hud hidden`);n.append(Dx(yx.map(([e,t])=>({label:t,value:e})),`layered`,e=>t.preset(e)),Dx(bx.map(e=>({label:``,value:e,swatch:e})),bx[0],e=>t.color(e))),n.append(Dx(b_.map(e=>({label:e.name,value:e.model})),b_[0].model,e=>t.client(e)));let r=!0,i=Ex(`Sound`,()=>{r=!r,i.classList.toggle(`on`,r),t.sound(r)});i.classList.add(`on`),n.append(Tx(i)),this.info=wx(`div`,`info hidden`),this.look=this.buildLook(t),e.append(n,this.look,this.info),this.loadLook()}toggle(){this.bar.classList.toggle(`hidden`),this.info.classList.toggle(`hidden`),this.look.classList.toggle(`hidden`)}buildLook(e){let t=wx(`div`,`look hidden`);t.append(wx(`div`,`look-title`)),t.firstElementChild.textContent=`Hair look`;let n=(e,n,r)=>{let i=wx(`label`,`look-row`),a=wx(`span`,`look-k`);a.textContent=e,i.append(a,n),r&&i.append(r),t.append(i)},r=(e,t,n,r)=>{let i=document.createElement(`input`);return Object.assign(i,{type:`range`,min:String(e),max:String(t),step:String(n),value:String(r)}),i};this.toonInput=r(0,1,.05,1);let i=wx(`span`,`look-v`);i.textContent=`1`,this.toonInput.addEventListener(`input`,()=>{i.textContent=this.toonInput.value,e.toon(Number(this.toonInput.value))}),n(`Toon mix`,this.toonInput,i);for(let e of sy){let t=r(e.min,e.max,e.step,oy[e.key]),i=wx(`span`,`look-v`);i.textContent=String(oy[e.key]),t.addEventListener(`input`,()=>{cy[e.key].value=Number(t.value),i.textContent=t.value,this.saveLook()}),this.sliders.set(e.key,{input:t,out:i}),n(e.toonOnly?`${e.label} ·toon`:e.label,t,i)}this.tint=document.createElement(`input`),this.tint.type=`color`,this.tint.value=`#${Sx}`,this.tint.addEventListener(`input`,()=>{ly.value.set(this.tint.value),this.saveLook()}),n(`Shadow tint ·toon`,this.tint);let a=Ex(`Copy values`,()=>void navigator.clipboard?.writeText(JSON.stringify(this.values(),null,2))),o=Ex(`Reset`,()=>{this.applyLook({}),this.saveLook()});return t.append(Tx(a,o)),t}values(){let e={};for(let t of sy)e[t.key]=cy[t.key].value;return e.uShadeTint=`#${ly.value.getHexString()}`,e}applyLook(e){for(let t of sy){let n=typeof e[t.key]==`number`?e[t.key]:oy[t.key];cy[t.key].value=n;let r=this.sliders.get(t.key);r.input.value=String(n),r.out.textContent=String(n)}let t=typeof e.uShadeTint==`string`?e.uShadeTint:`#${Sx}`;ly.value.set(t),this.tint.value=t}loadLook(){try{let e=localStorage.getItem(xx);e&&this.applyLook(JSON.parse(e))}catch{}}saveLook(){try{localStorage.setItem(xx,JSON.stringify(this.values()))}catch{}}setInfo(e){this.info.textContent=e}};function wx(e,t){let n=document.createElement(e);return n.className=t,n}function Tx(...e){let t=wx(`div`,`grp`);return t.append(...e),t}function Ex(e,t){let n=document.createElement(`button`);return n.textContent=e,n.onclick=t,n}function Dx(e,t,n){let r=e.map(e=>{let i=Ex(e.label,()=>{r.forEach(e=>e.classList.toggle(`on`,e===i)),n(e.value)});return e.swatch&&(i.className=`sw`,i.style.background=e.swatch),e.value===t&&i.classList.add(`on`),i});return Tx(...r)}var Ox=.008,kx=70,Ax=.35,jx=.8,Mx=240,Nx=300,Px=`hsl.sound`,Fx=`hsl.music`,Ix=30,Lx=10,Rx=.45,zx=.4,Bx=.15,Vx=[`bangs`,`sides`,`back`,`color`,`texture`,`bangsStyle`,`updo`,`accessory`,`bling`],Hx=.85,Ux=1,Wx=e=>e.score>=.75&&(e.share===void 0||e.share>=Hx),Gx=e=>e.share!==void 0&&e.share>=Hx&&e.score<.75,Kx=(e,t)=>Gx(e)||e.key===`bangsStyle`&&!!e.needsLength&&!Wx(e)&&t.some(e=>e.key===`bangs`&&Gx(e)),qx=e=>e.every(t=>Wx(t)||Kx(t,e));function Jx(e){return[e.updo&&`updo`,e.bangsStyle&&`bangsStyle`,e.dye,e.accessory&&`accessory`,e.face&&`bling`].filter(e=>!!e)}var Yx=class{uiRoot;stage;projector;sfx=new dd;music=new sd;washTimer=0;lastWashStep=null;idle=0;character;hair;hud;ui;uiHandlers;orderPhoto=``;lastResult=null;chat;session=new Xb;visit=null;upcoming=null;queued=null;retryVisit=null;bgNarrow=!1;bgReady;paused=!1;usedTools=new Set;styleGroup=new bs;placed=[];styleSel=null;raycaster=new ed;guides=new N_;tutorial=null;styleGuide=null;pendingGuide=null;intro=null;partStart=new Map;startLengths=null;heldMood=`neutral`;surpriseCooldown=0;tmp3=new Float32Array(3);tmpOut=[0,0,0];seated=new Map;playing=!1;tool=`cut`;toon=null;cuts=0;dyeColor=null;dyeMode=`full`;dyePainted=!1;heartCooldown=0;viewerDrift=0;lastYaw=0;swing=0;photo=null;visitNo=Date.now();ptr={x:0,y:0,lx:0,ly:0,down:!1,rotating:!1};lightDir=new B;strandTex;foamTex;last=performance.now();fps={t:0,n:0,value:0};constructor(e,n){this.uiRoot=n,this.stage=new Zg(e),this.projector=new Rg(this.stage.camera,e);let r=new Su;this.bgReady=this.refreshBackground(),addEventListener(`resize`,()=>{this.stage.camera.aspect<1.7!==this.bgNarrow&&this.refreshBackground()}),this.foamTex=r.loadAsync(`assets/foam_bubble.png`).then(e=>(e.colorSpace=Re,e)),this.strandTex=r.loadAsync(`assets/hair_strand.png`).then(e=>(e.wrapS=e.wrapT=t,e)),this.ui=new fx(n,e,this.uiHandlers={tool:e=>{this.tool=e,this.sfx.unlock(),this.sfx.pop(),e===`wash`&&this.visit&&!this.visit.order.wash&&!this.visit.free&&this.ui.showHint(q().stuck.noWash,3)},dye:e=>this.dye(e),dyeMode:e=>{this.dyeMode=e,this.sfx.pop()},turn:e=>{this.sfx.unlock(),this.stage.turn(e)},zoom:e=>{this.sfx.unlock(),this.stage.zoomBy(e>0?.8:1.25)},lift:e=>{this.sfx.unlock(),this.stage.nudge(e)},finish:()=>this.finish(),orderStep:e=>this.orderStep(e),next:()=>{this.sfx.pop(),this.ui.hideResult(),this.beginVisit()},retry:()=>{this.visit&&(this.sfx.pop(),this.ui.hideResult(),this.retryVisit={...this.visit,trend:!1},this.beginVisit())},nextFree:()=>{this.sfx.pop(),this.ui.hideResult(),this.queued=this.upcoming,this.upcoming=this.session.freeVisit(this.upcoming??this.session.next()),this.beginVisit()},say:e=>this.ui.post({name:q().chat.you,color:`#ff4f9e`,text:e},!0),gallery:()=>{this.sfx.pop(),Rb.gameplayStop(),this.ui.showGallery(this.session.gallery)},galleryClosed:()=>{this.playing&&Rb.gameplayStart()},languages:()=>{this.sfx.unlock(),this.sfx.pop(),Rb.gameplayStop(),this.ui.showLanguages()},language:t=>{Rb.setItem(l_,t),this.switchLanguage(t,n,e)},studio:()=>{this.sfx.unlock(),this.sfx.pop(),Rb.gameplayStop(),this.openStudio()},buyDecor:e=>{let t=Vv.find(t=>t.id===e);if(!this.session.buyDecor(e)){this.ui.showHint(J(q().needLikes,{item:Wv(t),n:t.price-this.session.progress.likes}),2.5);return}this.sfx.chime(3),this.ui.setStats(this.session.viewers,this.session.progress.likes),this.ui.post({name:`luna`,color:`#c9a27e`,text:J(q().studio.bought,{item:Wv(t).toLowerCase()})}),this.refreshBackground(),this.openStudio()},sound:e=>this.setSound(e),music:e=>this.setMusic(e),upright:e=>{this.paused=e,e?Rb.gameplayStop():this.playing&&Rb.gameplayStart()},skipTutorial:()=>{this.tutorial?.skip(),this.tutorial=null,this.endStyleGuide()},styleItem:e=>this.pickStyleItem(e),styleUndo:()=>{let e=this.placed.pop();e&&(this.styleGroup.remove(e.obj),this.sfx.pop())},styleClear:()=>{this.clearStyle(),this.sfx.pop()},tie:e=>{this.playing&&(this.sfx.unlock(),this.sfx.hold(`comb`),this.hair.tie(e),this.react(`comb`),this.usedTools.add(`comb`),this.character.mood?.(`joy`,.8))},part:e=>{this.playing&&(this.sfx.unlock(),this.sfx.hold(`comb`),this.hair.part(e),this.react(`comb`),this.usedTools.add(`comb`),this.character.mood?.(`joy`,.8))},rinse:()=>{this.playing&&this.hair.rinse()&&(this.sfx.unlock(),this.sfx.water(2.4),this.chat.react(`rinse`),this.ui.showHint(q().hints.dryNow,3))},claimGift:()=>{let e=this.session.claimGift();if(this.ui.hideResult(),this.playing&&Rb.gameplayStart(),e){this.sfx.unlock(),this.sfx.chime(3),this.ui.setStats(this.session.viewers,this.session.progress.likes);for(let e=0;e<12;e++)setTimeout(()=>this.ui.heart(),e*90);e.item&&(this.ui.showHint(J(q().hints.newItem,{item:H_(e.item)}),3),this.refreshStyleUi())}},refView:()=>{this.sfx.unlock(),this.sfx.pop(),this.stage.look(this.visit?kb(this.visit.order):Qg)}}),this.chat=new y_(e=>this.ui.post(e)),this.stage.scene.add(this.guides.mesh,this.styleGroup),this.hud=new Cx(n,{preset:e=>this.hair?.grow(e),color:e=>this.hair?.setColor(e),client:e=>void this.seat(e).then(()=>this.hair.grow(`layered`)),toon:e=>{this.toon=e,this.hair&&(this.hair.uniforms.uToon.value=e)},sound:e=>this.setSound(e)}),this.ui.setStats(this.session.viewers,this.session.progress.likes),this.ui.setLevel(this.session.level,B_(this.session.progress.followers)),this.bindInput(e),this.setSound(Rb.getItem(Px)!==`0`,!1),this.setMusic(Rb.getItem(Fx)!==`0`,!1);let i=()=>this.music.unlock();addEventListener(`pointerdown`,i,{capture:!0,once:!0}),addEventListener(`pointerdown`,()=>{this.idle=0},{capture:!0}),addEventListener(`pointermove`,e=>{e.buttons&&(this.idle=0)},{capture:!0}),addEventListener(`keydown`,i,{capture:!0,once:!0}),document.addEventListener(`visibilitychange`,()=>{this.sfx.setHidden(document.hidden),this.music.setHidden(document.hidden)}),Rb.onSettings(e=>{this.sfx.setPlatformMuted(e.muteAudio),this.music.setPlatformMuted(e.muteAudio),this.ui.setSound(this.sfx.userEnabled,e.muteAudio),this.ui.setMusic(this.music.userEnabled,e.muteAudio),this.ui.setChatInput(!e.disableChat)})}async switchLanguage(e,t,n){await h_(e),this.ui.destroy(),this.ui=new fx(t,n,this.uiHandlers);let r=this.ui,i=Rb.settings;r.setStats(this.session.viewers,this.session.progress.likes),r.setLevel(this.session.level,B_(this.session.progress.followers)),r.setSound(this.sfx.userEnabled,i.muteAudio),r.setMusic(this.music.userEnabled,i.muteAudio),r.setChatInput(!i.disableChat);let a=this.visit;a&&r.setOrder(a.client,a.order,this.orderPhoto,a.trend,a.free),this.refreshStyleUi(),r.pickTool(this.tool,!0),this.dyeColor=null,this.dyeMode=`full`,this.lastWashStep=-1,r.setPlaying(this.playing),this.tutorial?.repeat(),this.styleGuide?.repeat(),this.lastResult&&!this.playing?r.showResult(...this.lastResult):this.playing&&Rb.gameplayStart()}setSound(e,t=!0){this.sfx.setUserEnabled(e),this.ui.setSound(e,Rb.settings.muteAudio),t&&Rb.setItem(Px,e?`1`:`0`)}setMusic(e,t=!0){this.music.setUserEnabled(e),this.ui.setMusic(e,Rb.settings.muteAudio),t&&Rb.setItem(Fx,e?`1`:`0`)}openStudio(){this.ui.showStudio(this.session.progress.decor,this.session.progress.likes,this.session.decorBonus)}async refreshBackground(){let e=this.session.progress.decor;this.bgNarrow=this.stage.camera.aspect<zv;let t=await qv(`assets/bg_salon_anime.webp`,e,this.bgNarrow);t&&this.stage.setBackground(t)}load(e){let t=this.seated.get(e);return t||(t=Promise.all([Mg(`characters/${e}`),this.strandTex,this.foamTex]).then(([e,t,n])=>{let r=new yb(e);return r.setStrandTexture(t),r.setFoamTexture(n),r.uniforms.uToon.value=this.toon??+!!e.preferToonHair,{character:e,hair:r}}),this.seated.set(e,t)),t}async seat(e){let{character:t,hair:n}=await this.load(e);this.character!==t&&(this.character&&this.stage.scene.remove(this.character.object,this.hair.group),this.character=t,this.hair=n,this.heldMood=`neutral`,this.stage.scene.add(t.object,n.group),this.toon!==null&&(n.uniforms.uToon.value=this.toon))}async begin(e=()=>{}){let t=[...this.uiRoot.querySelectorAll(`img`)].filter(e=>!e.complete).map(e=>new Promise(t=>{e.addEventListener(`load`,t,{once:!0}),e.addEventListener(`error`,t,{once:!0})})),n=[cv(),this.bgReady,this.strandTex,this.foamTex,document.fonts.ready,...t],r=n.length*2,i=0;await Promise.all(n.map(t=>t.then(()=>e(++i/r)))),await this.beginVisit(),e(1)}async beginVisit(){let e=this.visit=this.retryVisit??this.upcoming??this.queued??this.session.next();this.retryVisit?this.retryVisit=null:(this.visitNo++,this.upcoming?this.upcoming=null:this.queued=null),this.usedTools.clear(),await this.seat(e.model),this.dyeColor=null,this.ui.clearDye(),this.clearStyle(),this.styleSel=null,this.hair.setColor(e.startColor),this.hair.grow(`layered`),e.startTexture!==`straight`&&(this.hair.setTexture(e.startTexture),this.hair.settle(90));let t=this.character.landmarks;if(t&&!e.free){let n=e.order.lengths;this.hair.assignZones(Sv(n.sides,t),Sv(n.back,t),Sv(n.bangs,t),fv(e.order))}let n=e.start.lengths;if(t&&(n.bangs||n.sides||n.back)&&(this.hair.trimTo(e=>Sv(n[e]??`chest`,t)-(n[e]?0:.6),!1),this.hair.settle(90)),e.start.part!==`forward`&&(this.hair.part(e.start.part),this.hair.settle(60)),this.startLengths=this.hair.snapshotLengths(),this.stage.look({...Qg,zoom:1}),this.hair.setLightDir(this.stage.keyLightDir(this.lightDir)),this.guides.mesh.visible=!1,this.orderPhoto=Ab(this.stage,this.character,this.hair,e.order,e.startColor,!e.free,this.orderStyle(e.order),e.startTexture),this.ui.setOrder(e.client,e.order,this.orderPhoto,e.trend,e.free),this.lastResult=null,this.refreshStyleUi(),this.ui.setLevel(this.session.level,B_(this.session.progress.followers)),I_[this.tool]>this.session.level&&this.ui.pickTool(`cut`),this.ui.setPlaying(!0),this.playing=!0,this.partStart.clear(),t&&!e.free)for(let n of Mv(e.order,this.hair.measure(),t,this.styleOn()).parts)this.partStart.set(n.key,n.share??n.fill??n.score);Rb.gameplayStart(),this.cuts=0,this.chat.greet(e.client,pv(e.order.id)),this.setMood(`smile`),this.character.mood?.(`joy`,1.4);let r=[];e.order.texture&&r.push(e.order.texture===`straight`?`straight`:e.order.texture===`wavy`?`wave`:`curl`),e.order.color&&r.push(`dye`),e.order.wash&&r.push(`wash`,`dry`),(e.order.updo||e.order.bangsStyle)&&r.push(`comb`),(e.order.accessory||e.order.face)&&r.push(`style`);let i=e.intro?r.filter(t=>I_[t]===e.order.minLevel):[];this.endStyleGuide();let a=this.session.progress.seen;!e.free&&e.order.face&&!a.includes(`bling`)?this.pendingGuide={item:e.order.face.id,count:e.order.face.count}:!e.free&&e.order.accessory&&!a.includes(`accessory`)&&(this.pendingGuide={item:e.order.accessory,count:1}),this.intro=i.length?{key:this.partFor(i[0],e.order),text:J(q().hints.newTool,{tool:q().toolNames[i[0]],hint:q().toolHints[i[0]]}),tool:i[0]}:this.introFor(e),this.intro&&this.pendingGuide&&(this.intro.key===`accessory`||this.intro.key===`bling`)&&(this.intro=null),e.trend?this.ui.showHint(J(q().order.trend,{title:pv(e.order.id)}),4):this.session.progress.served===0?(this.ui.pickTool(`cut`),this.tutorial=new Rv({say:e=>this.ui.coach(e),hand:e=>this.ui.hand(e),pulseFinish:e=>this.ui.pulseFinish(e)})):(!this.intro||!this.showIntro())&&this.ui.showHint(e.order.wash?J(q().order.washFirst,{client:e.client}):J(q().order.please,{client:e.client,title:pv(e.order.id)}),e.order.wash?5:3);for(let t of Jx(e.order))a.includes(t)||a.push(t);this.session.save(),this.idle=0,this.offerGift()}updateChecks(){let e=this.visit,t=this.character?.landmarks;if(!e||e.free||!t||!this.playing||this.swing>0)return;let n=Mv(e.order,this.hair.measure(),t,this.styleOn()).parts;this.ui.setProgress(e=>{let t=n.find(t=>t.key===e);if(!t)return 0;if(Wx(t))return 1;let r=this.partStart.get(e)??0,i=t.share===void 0?t.fill===void 0?r<.75?(t.score-r)/(Cv-r):t.score/Cv:r<.999?(t.fill-r)/(1-r):t.fill:r<.999?(t.share-r)/(1-r):t.score/Cv;return Math.min(.95,Math.max(0,i))},e=>this.failed(e,n)),this.ui.setOrderReady(qx(n)),this.intro&&!this.tutorial&&this.showIntro(n);let r=this.pendingGuide;r&&!this.tutorial&&n.every(e=>e.key===`accessory`||e.key===`bling`||Wx(e)||Kx(e,n))&&(this.pendingGuide=null,this.ui.clearHighlights(),this.styleGuide=new Nv({say:e=>this.ui.coach(e),hand:e=>this.ui.hand(e),faceFront:()=>this.stage.look({...Qg,yaw:0,zoom:.75})},r.item,r.count))}endStyleGuide(){this.styleGuide?.finish(),this.styleGuide=null,this.pendingGuide=null}updateStyleGuide(e){let t=this.styleGuide;if(!t)return;if(this.ui.modalOpen){this.ui.hand(null);return}let n=this.styleOn(),r=W_(t.item).kind===`sticker`,i=r?n.stickers[t.item]??0:+!!n.accessories.includes(t.item);t.update(e,{styleTool:this.tool===`style`&&this.ui.optsOpen,tab:this.ui.trayTab,selected:this.styleSel,placed:i,toolButton:this.ui.toolCenter(`style`),tabButton:this.ui.trayTabCenter(r?`sticker`:`accessory`),itemButton:this.ui.trayItemCenter(t.item),spot:this.styleSpot(t.item,i)}),t.done&&(this.styleGuide=null,this.chat.react(`style`))}styleSpot(e,t){let n=this.character,r=n.landmarks,i=n.scalp,a=this.visit?.order;if(!r)return null;let o;if(W_(e).kind===`sticker`){let e=a?.face?.zone!==`under-eyes`,s=t%2?1:-1,c=r.eyeY-(r.eyeY-r.chinY)*(e?.4:.18),l=i.c[0]+s*i.r[0]*(e?.42:.3);o=n.pickFace?.(new wn(new B(l,c,i.c[2]+5),new B(0,0,-1)))}else o=iv(new wn(new B(i.c[0]+3,i.c[1]+2.4,i.c[2]+4),new B(-3,-2.4,-4).normalize()),i);return o?(this.projector.update(),this.tmp3[0]=o.point.x,this.tmp3[1]=o.point.y,this.tmp3[2]=o.point.z,this.projector.project(this.tmp3,0,this.tmpOut),{x:this.tmpOut[0],y:this.tmpOut[1]}):null}washStep(){let e=this.visit,t=this.hair;return!e||e.free||!e.order.wash?null:t.rinsing?1:t.washedShare<zx?+(t.foamCoverage()>=Rx):t.wetness>Bx?2:3}washStepProgress(e){let t=this.hair;return e===0?t.foamCoverage()/Rx:e===1?t.rinseProgress:e===2?(1-t.wetness)/.85:1}introFor(e){let t=Jx(e.order).find(e=>!this.session.progress.seen.includes(e));if(!t)return null;let n=[`updo`,`bangsStyle`,`accessory`,`bling`].includes(t)?t:`color`,r=this.stepFor(n);return{key:n,text:J(q().stuck.new,{hint:r.text}),tool:r.tool}}partFor(e,t){return e===`wash`?`wash`:e===`dry`?`dry`:e===`cut`?`bangs`:e===`comb`?t.updo?`updo`:`bangsStyle`:e===`dye`?`color`:e===`style`?t.accessory?`accessory`:`bling`:`texture`}nextStep(e){let t=this.washStep();return t===0||t===1?`wash`:t===2?`dry`:Vx.find(t=>e.some(n=>n.key===t&&!Wx(n)&&!Kx(n,e)))??null}showIntro(e){let t=this.visit,n=this.character.landmarks,r=this.intro;return!t||!n||!r||this.nextStep(e??Mv(t.order,this.hair.measure(),n,this.styleOn()).parts)!==r.key?!1:(this.intro=null,this.ui.showHint(r.text,6),r.tool&&this.ui.highlightTool(r.tool),!0)}stepFor(e){let t=this.visit.order,n=q(),r=n.stuck,i=(...e)=>e.join(` → `);switch(e){case`wash`:return{text:J(r.wash,{rinse:n.rinse}),tool:`wash`};case`dry`:return{text:r.dry,tool:`dry`};case`bangs`:case`sides`:case`back`:return{text:r.cut[e],tool:`cut`};case`bangsStyle`:return{text:J(r.bangsStyle,{path:i(n.tools.comb,n.comb.bangs,n.bangsStyles[t.bangsStyle===`curtain`?`curtain`:t.bangsStyle===`forward`?`forward`:`side-left`])}),tool:`comb`};case`updo`:return{text:J(r.updo,{path:i(n.tools.comb,n.comb.updo,n.updos[t.updo??`ponytail`])}),tool:`comb`};case`texture`:{let e=t.texture===`straight`?`straight`:t.texture===`wavy`?`wave`:`curl`;return{text:J(r.texture,{tool:n.toolNames[e]}),tool:e}}case`color`:{let e=t.color?n.colors[t.color.name]:``,a=t.color2?n.colors[t.color2.name]:``;return{text:t.dye===`ombre`?J(r.ombre,{path:i(n.tools.dye,e,n.dye.ombre)}):t.dye===`roots`?J(r.roots,{path:i(n.tools.dye,e,n.dye.roots)}):t.dye===`twotone`?J(r.twotone,{path:i(n.tools.dye,e,n.dye.full),path2:i(a,n.dye.ombre)}):t.dye===`split`?J(r.split,{color:e,color2:a}):t.dye===`money`?J(r.money,{path:i(n.tools.dye,e,n.dye.front)}):J(r.color,{path:i(n.tools.dye,e)}),tool:`dye`}}case`accessory`:return{text:J(r.accessory,{path:i(n.tools.style,H_(t.accessory??`bow`))}),tool:`style`};case`bling`:return{text:J(r.bling,{path:i(n.tools.style,n.tray.face,H_(t.face?.id??`heart`))}),tool:`style`}}}stuckHint(){let e=this.visit,t=this.character.landmarks;if(!e||!t)return;if(e.free){this.ui.showHint(J(q().stuck.free,{finish:q().finish}),5),this.ui.pulseFinish(!0);return}this.ui.clearHighlights();let n=Mv(e.order,this.hair.measure(),t,this.styleOn()),r=()=>{this.ui.showHint(J(q().stuck.finish,{finish:q().finish}),5),this.ui.pulseFinish(!0)};if(qx(n.parts)){r();return}if(this.washStep()===1){this.ui.showHint(J(q().stuck.rinse,{rinse:q().rinse}),5);return}let i=this.nextStep(n.parts);if(!i){r();return}let a=this.stepFor(i);this.ui.showHint(a.text,5),a.tool&&this.ui.highlightTool(a.tool)}failed(e,t){let n=t.find(t=>t.key===e);if(!n||!Kx(n,t))return!1;let r=e===`bangsStyle`?`bangs`:e;return(this.partStart.get(r)??0)<.999}restoreCut(e,t){let n=[`bangs`,`sides`,`back`].filter(n=>this.failed(n,t)||n===`bangs`&&e===`bangsStyle`);if(this.playing&&n.length&&this.startLengths){this.sfx.unlock(),this.sfx.pop();for(let e of n)this.hair.restoreLengths(this.startLengths,e);this.ui.pickTool(`cut`),this.ui.showHint(q().stuck.restored,3),this.idle=0}}orderStep(e){if(!this.playing||!this.visit||this.visit.free)return;let t=this.character.landmarks;if(t){let n=Mv(this.visit.order,this.hair.measure(),t,this.styleOn()).parts;if(this.failed(e,n)){this.restoreCut(e,n);return}}this.sfx.unlock();let n=this.stepFor(e);n.tool&&I_[n.tool]<=this.session.level&&this.tool!==n.tool&&this.ui.pickTool(n.tool),this.ui.showHint(n.text,4),this.idle=0}offerGift(){let e=this.session.gift;e&&(Rb.gameplayStop(),this.ui.showGift(e,Kb))}finish(){let e=this.visit,t=this.character.landmarks;if(!this.playing||!e||!t)return;this.playing=!1,Rb.gameplayStop(),this.tutorial?.finish(),this.tutorial=null,this.endStyleGuide(),this.ui.pulseFinish(!1),this.ui.clearHighlights(),this.ptr.down=!1,this.ui.setPlaying(!1);let n=e.free?{total:1,stars:3,parts:[]}:Mv(e.order,this.hair.measure(),t,this.styleOn()),r=e.free?this.session.rewardFree(this.usedTools.size):this.session.reward(e,n.total,n.stars);this.stage.look(kb(e.order)),this.photo={t:jx,client:e.client,orderId:e.order.id,stars:n.stars,score:Math.round(n.total*1e3),visit:this.visitNo},this.lastResult=[e.client,e.free?null:n,r,e.trend,this.session.level>=3],this.ui.showResult(...this.lastResult),this.ui.setLevel(this.session.level,B_(this.session.progress.followers)),this.ui.setStats(this.session.viewers,this.session.progress.likes),this.chat.result(n.stars),this.setMood([`sad`,`sad`,`smile`,`joy`][n.stars]),this.upcoming=this.queued??this.session.next(),this.queued=null,this.load(this.upcoming.model),this.sfx.chime(n.stars),n.stars===3&&Rb.happytime();for(let e=0;e<4+n.stars*4;e++)setTimeout(()=>this.ui.heart(),e*120)}updateGuides(e){let t=this.visit,n=this.character.landmarks;if(!t||!n)return;let r=e=>Sv(t.order.lengths[e],n),i=this.playing&&!t.free&&(this.tool===`cut`||!!this.tutorial),a=this.tutorial?this.tutorial.zones:[`bangs`,`sides`,`back`].filter(e=>e===`bangs`||!t.order.updo);if(this.guides.update(e,this.hair,this.character,i?a.map(e=>[e,r(e)]):[]),!this.tutorial)return;let o=this.stage.camera.position;this.tutorial.update(e,{measure:()=>this.hair.measure(),target:r,yaw:this.stage.yaw,line:e=>this.guides.facing(e,o,this.character.headCenter).map(e=>(this.tmp3[0]=e.x,this.tmp3[1]=e.y,this.tmp3[2]=e.z,this.projector.project(this.tmp3,0,this.tmpOut),{x:this.tmpOut[0],y:this.tmpOut[1]})).sort((e,t)=>e.x-t.x),view:this.stage.zoomTarget+this.stage.liftTarget,turnButton:()=>this.ui.camCenter(`right`),zoomButton:()=>this.ui.camCenter(`in`),finishButton:()=>this.ui.finishCenter()}),this.tutorial.active||(this.tutorial=null)}takePhoto(){let e=this.photo,t=this.stage.canvas;this.photo=null;let n=t.height*.8,r=Math.min(t.width,n*Mx/Nx),i=document.createElement(`canvas`);i.width=Mx,i.height=Nx,i.getContext(`2d`).drawImage(t,(t.width-r)/2,t.height*.02,r,n,0,0,Mx,Nx),this.session.addPhoto({img:i.toDataURL(`image/jpeg`,.75),client:e.client,orderId:e.orderId,stars:e.stars,score:e.score,visit:e.visit})}dye(e){this.playing&&(this.sfx.unlock(),this.sfx.pop(),this.dyeColor=e?new H(e):`erase`,this.dyePainted=!1,this.ui.showHint(e?q().hints.paint:q().hints.erase,2.5))}canUse(e){let t=this.visit?.order;return this.session.owns(e)||t?.accessory===e||t?.face?.id===e}refreshStyleUi(){this.ui.setStyleState(e=>this.canUse(e),e=>W_(e).price,this.styleSel)}pickStyleItem(e){if(this.sfx.unlock(),this.canUse(e))this.sfx.pop();else{let t=W_(e);if(!this.session.buy(e)){this.ui.showHint(J(q().needLikes,{item:H_(e),n:t.price-this.session.progress.likes}),2.5);return}this.sfx.chime(2),this.ui.showHint(J(q().hints.newItem,{item:H_(e)}),2.5),this.ui.setStats(this.session.viewers,this.session.progress.likes)}this.styleSel=e,this.refreshStyleUi()}placeStyle(e,t){let n=this.styleSel;if(!n)return this.ui.showHint(q().hints.pickItem,2),!0;let r=W_(n),i=(e,t)=>{let n=this.stage.canvas;return this.raycaster.setFromCamera(new L(e/n.clientWidth*2-1,-(t/n.clientHeight)*2+1),this.stage.camera),this.raycaster.ray},a=null,o=1;if(r.kind===`sticker`){let s=this.character.pickFace?.(i(e,t));if(!s)return!1;if(r.spray){let c=new bs,l=x_(this.visit?.model);c.add(lv(n,s.point,s.normal,1,l));for(let a=1;a<r.spray;a++){let r=Math.random()*Math.PI*2,a=8+Math.random()*22,o=this.character.pickFace?.(i(e+Math.cos(r)*a,t+Math.sin(r)*a));o&&c.add(lv(n,o.point,o.normal,.7+Math.random()*.5,l))}a=c,o=c.children.length}else a=lv(n,s.point,s.normal)}else if(r.place===`crown`){if(!iv(i(e,t),this.character.scalp,1.25)&&!this.hair.isNear(this.projector,e,t,kx))return!1;for(let e of this.placed.filter(e=>W_(e.id).place===`crown`))this.styleGroup.remove(e.obj);this.placed=this.placed.filter(e=>W_(e.id).place!==`crown`),a=rv(n,this.character.scalp)}else{let r=iv(i(e,t),this.character.scalp);if(!r)return!1;a=rv(n,this.character.scalp,r.point,r.normal)}return this.styleGroup.add(a),this.placed.push({id:n,obj:a,count:o}),this.sfx.pop(),this.react(`style`),this.usedTools.add(`style`),this.character.mood?.(`joy`,.9),!0}clearStyle(){for(let e of this.placed)this.styleGroup.remove(e.obj);this.placed=[]}styleOn(){let e={accessories:[],stickers:{}};for(let t of this.placed)W_(t.id).kind===`accessory`?e.accessories.push(t.id):e.stickers[t.id]=(e.stickers[t.id]??0)+t.count;return e}orderStyle(e){let t=[],n=this.character,r=n.landmarks,i=n.scalp;if(e.accessory){let n=iv(new wn(new B(i.c[0]+3,i.c[1]+2.4,i.c[2]+4),new B(-3,-2.4,-4).normalize()),i);t.push(rv(e.accessory,i,n?.point,n?.normal))}if(e.face&&r){let a=e.face.zone===`cheeks`?r.eyeY-(r.eyeY-r.chinY)*.4:r.eyeY-(r.eyeY-r.chinY)*.18,o=i.r[0]*(e.face.zone===`cheeks`?.42:.3),s=Math.ceil(e.face.count/2);for(let r of[-1,1])for(let c=0;c<s;c++){let l=s>1?(c/(s-1)-.5)*.18:0,u=s>1?(c*7%3-1)*.04:0,d=n.pickFace?.(new wn(new B(i.c[0]+r*o+l,a+u,i.c[2]+5),new B(0,0,-1)));d&&t.push(lv(e.face.id,d.point,d.normal,e.face.id===`freckle`?1.3:1.5,x_(this.visit?.model)))}}return t}setMood(e){e!==this.heldMood&&(this.heldMood=e,this.character.mood?.(e))}react(e){this.chat.react(e),this.heartCooldown<=0&&(this.heartCooldown=Ax+Math.random()*.6,this.ui.heart(),this.session.progress.likes+=1+Math.floor(Math.random()*4),this.ui.setStats(this.session.viewers,this.session.progress.likes))}start(){let e=t=>{this.tick(Math.min(1/30,(t-this.last)/1e3)),this.last=t,requestAnimationFrame(e)};requestAnimationFrame(e)}tick(e){if(!this.hair||this.paused)return;let t=this.fps;t.t+=e,t.n++,t.t>.5&&(t.value=Math.round(t.n/t.t),t.t=t.n=0),this.stage.update(e),this.hair.turnChair(this.lastYaw-this.stage.yaw),this.swing=Math.abs(this.lastYaw-this.stage.yaw)>1e-4?Ux:Math.max(0,this.swing-e),this.lastYaw=this.stage.yaw,this.projector.update();let n=this.ptr;if(this.playing&&n.down&&!n.rotating&&(this.tool===`curl`||this.tool===`straight`?this.hair.curl(this.projector,n.x,n.y,e,this.tool===`curl`?1:-1)&&(this.sfx.hold(`sizzle`),this.react(this.tool),this.usedTools.add(this.tool)):this.tool===`dye`?this.dyeColor?this.hair.dyeBrush(this.projector,n.x,n.y,e,this.dyeColor===`erase`?null:this.dyeColor,this.dyeMode)&&(this.sfx.hold(`paint`),this.react(`dye`),this.usedTools.add(`dye`),this.dyePainted||(this.dyePainted=!0,this.character.mood?.(`joy`,1.2))):this.ui.showHint(q().hints.pickColor,2):this.tool===`wave`?this.hair.wave(this.projector,n.x,n.y,e)&&(this.sfx.hold(`sizzle`),this.react(`curl`),this.usedTools.add(`wave`)):this.tool===`wash`?this.hair.wash(this.projector,n.x,n.y,e)&&(this.sfx.hold(`lather`),this.react(`wash`),this.usedTools.add(`wash`)):this.tool===`dry`&&this.hair.blow(this.projector,n.x,n.y,e)&&(this.sfx.hold(`dryer`),this.react(`dry`),this.usedTools.add(`dry`))),(this.washTimer-=e)<=0){this.washTimer=.2;let e=this.washStep();e!==this.lastWashStep&&(this.lastWashStep=e,this.ui.setWashStep(e),this.ui.clearHighlights()),e!==null&&this.ui.setWashProgress(e<3?this.washStepProgress(e):1),this.updateChecks()}this.ui.setRinse(!this.playing||this.hair.rinsing||!this.hair.hasFoam?`hidden`:this.hair.foamCoverage()>.45?`ready`:`some`),this.heartCooldown-=e,this.surpriseCooldown-=e,this.playing&&this.setMood(this.hair.hasFoam||this.hair.rinsing?`relaxed`:`smile`),this.viewerDrift-=e,this.viewerDrift<=0&&(this.viewerDrift=1.5+Math.random()*2,this.session.viewers=Math.max(100,this.session.viewers+Math.round(Math.random()*9-3)),this.ui.setStats(this.session.viewers,this.session.progress.likes)),this.chat.update(e),this.updateGuides(e),this.updateStyleGuide(e),this.playing&&!this.tutorial&&!this.styleGuide&&!this.ui.modalOpen&&(this.idle+=e)>Lx&&(this.idle=-6,this.stuckHint()),this.character.update?.(e,this.stage.camera),this.hair.update(e),this.hair.setLightDir(this.stage.keyLightDir(this.lightDir)),this.stage.render(),this.photo&&(this.photo.t-=e)<=0&&this.takePhoto(),this.hud.setInfo(`${t.value} fps · ${this.hair.strands.length} strands / ${this.hair.guides.length} guides · cuts ${this.cuts}`)}bindInput(e){let t=this.ptr,n=t=>{let n=e.getBoundingClientRect();return[t.clientX-n.left,t.clientY-n.top]},r=new Map,i=0,a=()=>{let[e,t]=[...r.values()];return Math.hypot(e[0]-t[0],e[1]-t[1])};e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,o=>{try{e.setPointerCapture(o.pointerId)}catch{}this.sfx.unlock();let[s,c]=n(o);if(o.pointerType===`touch`&&r.set(o.pointerId,[s,c]),r.size===2){i=a(),t.down=!1;return}if(!(!this.hair||r.size>2)){if(t.x=t.lx=s,t.y=t.ly=c,t.down=!0,this.projector.update(),this.playing&&o.button===0&&this.tool===`style`&&this.placeStyle(s,c)){t.down=!1;return}t.rotating=!this.playing||o.button!==0||!this.hair.isNear(this.projector,s,c,kx)}}),e.addEventListener(`pointermove`,e=>{let[o,s]=n(e);if(r.has(e.pointerId)&&r.set(e.pointerId,[o,s]),r.size===2){let e=a();i>0&&e>0&&this.stage.zoomBy(i/e),i=e;return}if(t.x=o,t.y=s,!t.down)return;this.projector.update();let c=o-t.lx,l=s-t.ly;if(t.rotating)this.stage.yawTarget-=c*Ox,this.stage.yaw=this.stage.yawTarget,this.stage.pan(l);else if(this.tool===`cut`){let e=this.stage.camera.position,n=this.character.headCenter,r=this.guides.near(this.projector,e,n,(t.lx+o)/2,(t.ly+s)/2,Ix),i=this.hair.cut(this.projector,t.lx,t.ly,o,s,r);i&&(this.cuts++,this.sfx.snip(Math.min(1,.4+i/30)),this.react(`cut`),this.usedTools.add(`cut`),i>60&&this.surpriseCooldown<=0&&(this.character.mood?.(`surprised`,.8),this.surpriseCooldown=4))}else this.tool===`comb`&&(this.hair.comb(this.projector,o,s,c,l),Math.hypot(c,l)>4&&(this.sfx.hold(`comb`),this.react(`comb`),this.usedTools.add(`comb`)));t.lx=o,t.ly=s});let o=e=>{r.delete(e.pointerId),i=0,t.down=!1,t.rotating=!1};e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,o),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.stage.zoomBy(Math.exp(e.deltaY*.0015))},{passive:!1}),addEventListener(`keydown`,e=>{e.key===`ArrowLeft`&&this.stage.turn(1),e.key===`ArrowRight`&&this.stage.turn(-1),e.code})}},Xx=document.getElementById(`game`),Zx=document.getElementById(`ui`),Qx=document.getElementById(`loading`),$x=Qx?.querySelector(`.ld-bar i`),eS=e=>{$x&&($x.style.width=`${Math.round(4+96*e)}%`)};async function tS(){await Rb.init(),await h_(m_(Rb.getItem(`hsl.lang`))??m_(Rb.locale)??m_(navigator.language)??`en`),Rb.loadingStart();let e=new Yx(Xx,Zx);await e.begin(eS),Rb.loadingStop(),e.start(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Qx?.classList.add(`done`),setTimeout(()=>Qx?.remove(),500)}))}tS();