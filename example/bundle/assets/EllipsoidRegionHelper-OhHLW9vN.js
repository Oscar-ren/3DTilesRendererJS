import{k as m,ag as S,ah as G,ai as b,aj as _,ak as z,g as N,al as R,i as y}from"./three.module-DpclfMcJ.js";import{E as I}from"./EllipsoidRegion-D6hT1syi.js";const n=new m,B=["x","y","z"];class F extends S{constructor(t,e=16776960,a=40){const p=new G,h=[];for(let c=0;c<3;c++){const u=B[c],f=B[(c+1)%3];n.set(0,0,0);for(let i=0;i<a;i++){let o;o=2*Math.PI*i/(a-1),n[u]=Math.sin(o),n[f]=Math.cos(o),h.push(n.x,n.y,n.z),o=2*Math.PI*(i+1)/(a-1),n[u]=Math.sin(o),n[f]=Math.cos(o),h.push(n.x,n.y,n.z)}}p.setAttribute("position",new b(new Float32Array(h),3)),p.computeBoundingSphere(),super(p,new _({color:e,toneMapped:!1})),this.sphere=t,this.type="SphereHelper"}updateMatrixWorld(t){const e=this.sphere;this.position.copy(e.center),this.scale.setScalar(e.radius),super.updateMatrixWorld(t)}}const M=new m,w=new m,l=new m,E=new m,P=new m;function H(s){s=s.toNonIndexed();const{groups:t}=s,{position:e,normal:a}=s.attributes,p=[],h=[];for(const u of t){const{start:f,count:i}=u;for(let o=f,r=f+i;o<r;o++)E.fromBufferAttribute(e,o),P.fromBufferAttribute(a,o),h.push(...E),p.push(...P)}const c=new G;return c.setAttribute("position",new b(new Float32Array(h),3)),c.setAttribute("normal",new b(new Float32Array(p),3)),c}function L(s){const{latStart:t=-Math.PI/2,latEnd:e=Math.PI/2,lonStart:a=0,lonEnd:p=2*Math.PI,heightStart:h=0,heightEnd:c=0}=s,u=new R(1,1,1,32,32),{normal:f,position:i}=u.attributes,o=i.clone();for(let r=0,x=i.count;r<x;r++){l.fromBufferAttribute(i,r);const d=y.mapLinear(l.x,-.5,.5,t,e),g=y.mapLinear(l.y,-.5,.5,a,p);let A=h;s.getCartographicToNormal(d,g,M),l.z<0&&(A=c),s.getCartographicToPosition(d,g,A,l),i.setXYZ(r,...l)}u.computeVertexNormals();for(let r=0,x=o.count;r<x;r++){l.fromBufferAttribute(o,r);const d=y.mapLinear(l.x,-.5,.5,t,e),g=y.mapLinear(l.y,-.5,.5,a,p);M.fromBufferAttribute(f,r),s.getCartographicToNormal(d,g,w),Math.abs(M.dot(w))>.1&&(l.z>0&&w.multiplyScalar(-1),f.setXYZ(r,...w))}return u}class T extends S{constructor(t=new I,e=16776960){super(),this.ellipsoidRegion=t,this.material.color.set(e),this.update()}update(){const t=L(this.ellipsoidRegion);this.geometry.dispose(),this.geometry=new z(t,80)}dispose(){this.geometry.dispose(),this.material.dispose()}}class k extends N{constructor(t=new I,e=16776960){super(),this.ellipsoidRegion=t,this.material.color.set(e),this.update()}update(){this.geometry.dispose();const t=L(this.ellipsoidRegion),{lonStart:e,lonEnd:a}=this;a-e>=2*Math.PI?(t.groups.splice(2,2),this.geometry=H(t)):this.geometry=t}dispose(){this.geometry.dispose(),this.material.dispose()}}export{k as E,F as S,T as a};
