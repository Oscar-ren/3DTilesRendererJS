import{W as d,S as l,a as u}from"./three.module-DpclfMcJ.js";import{T as w}from"./TilesFadePlugin-CYp6zEtB.js";import{g}from"./lil-gui.module.min-Bc0DeA9g.js";import{T as c}from"./TileCompressionPlugin-LPgvgQPx.js";import{U as f}from"./UpdateOnChangePlugin-BFotcVNs.js";import{G as P}from"./GlobeControls-tcF-lZFC.js";import{T as h}from"./TilesRenderer-3GzfWA9Z.js";import{L as y}from"./I3DMLoader-BlebwdUJ.js";import{C as T}from"./CesiumIonAuthPlugin-Bj8zlFQw.js";import"./EnvironmentControls-CYEuz71t.js";import"./Ellipsoid-Cnb0UTwk.js";import"./B3DMLoader-B2OeBq6-.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./GLTFLoader-DkJa3Jo5.js";import"./PNTSLoader-BMN5TswI.js";import"./CMPTLoader-nLXQ3OXQ.js";import"./GLTFExtensionLoader-TubLlshp.js";import"./EllipsoidRegion-D6hT1syi.js";import"./GoogleCloudAuthPlugin-gv3hNYxX.js";let n,o,i,r,e;const C=localStorage.getItem("ionApiKey")??"put-your-api-key-here",a={apiKey:C,reload:p};R();m();function p(){e&&(o.remove(e.group),e.dispose(),e=null),localStorage.setItem("ionApiKey",a.apiKey),e=new h,e.ellipsoid.copy(y),e.registerPlugin(new T({apiToken:a.apiKey,assetId:"2684829",autoRefreshToken:!0})),e.registerPlugin(new c),e.registerPlugin(new f),e.registerPlugin(new w),e.group.rotation.x=-Math.PI/2,e.errorTarget=20,o.add(e.group),e.setCamera(i),n.setTilesRenderer(e)}function R(){r=new d({antialias:!0}),r.setClearColor(1383455),document.body.appendChild(r.domElement),o=new l,i=new u(60,window.innerWidth/window.innerHeight,1,16e7),i.position.set(2620409,0,-6249816),i.lookAt(0,0,0),n=new P(o,i,r.domElement,null),n.enableDamping=!0,p(),s(),window.addEventListener("resize",s,!1);const t=new g;t.width=300,t.add(a,"apiKey"),t.add(a,"reload")}function s(){const t=window.innerWidth/window.innerHeight;i.aspect=t,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio)}function m(){requestAnimationFrame(m),e&&(n.update(),e.setResolutionFromRenderer(i,r),i.updateMatrixWorld(),e.update(),r.render(o,i))}
