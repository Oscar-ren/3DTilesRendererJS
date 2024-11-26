import{G as b,af as H,M as S,f as A,d as O,C as I}from"./three.module-DpclfMcJ.js";import{S as N,a as k}from"./EllipsoidRegionHelper-OhHLW9vN.js";const x=Symbol("ORIGINAL_MATERIAL"),M=Symbol("HAS_RANDOM_COLOR"),C=Symbol("HAS_RANDOM_NODE_COLOR"),E=Symbol("LOAD_TIME"),T=new O,G=()=>{},R={};function v(p){if(!R[p]){const r=Math.random(),e=.5+Math.random()*.5,t=.375+Math.random()*.25;R[p]=new I().setHSL(r,e,t)}return R[p]}const _=0,w=1,P=2,U=3,W=4,F=5,V=6,L=7,B=8,z=9,y=10;class J{constructor(r){r={displayBoxBounds:!1,displaySphereBounds:!1,displayRegionBounds:!1,colorMode:_,maxDebugDepth:-1,maxDebugDistance:-1,maxDebugError:-1,customColorCallback:null,...r},this.name="DEBUG_TILES_PLUGIN",this.tiles=null,this.extremeDebugDepth=-1,this.extremeDebugError=-1,this.boxGroup=null,this.sphereGroup=null,this.regionGroup=null,this.displayBoxBounds=r.displayBoxBounds,this.displaySphereBounds=r.displaySphereBounds,this.displayRegionBounds=r.displayRegionBounds,this.colorMode=r.colorMode,this.maxDebugDepth=r.maxDebugDepth,this.maxDebugDistance=r.maxDebugDistance,this.maxDebugError=r.maxDebugError,this.customColorCallback=r.customColorCallback,this.getDebugColor=(e,t)=>{t.setRGB(e,e,e)}}init(r){this.tiles=r;const e=r.group;this.boxGroup=new b,this.boxGroup.name="DebugTilesRenderer.boxGroup",e.add(this.boxGroup),this.boxGroup.updateMatrixWorld(),this.sphereGroup=new b,this.sphereGroup.name="DebugTilesRenderer.sphereGroup",e.add(this.sphereGroup),this.sphereGroup.updateMatrixWorld(),this.regionGroup=new b,this.regionGroup.name="DebugTilesRenderer.regionGroup",e.add(this.regionGroup),this.regionGroup.updateMatrixWorld(),this._onLoadTileSetCB=()=>{this._initExtremes()},this._onLoadModelCB=({scene:t,tile:a})=>{this._onLoadModel(t,a)},this._onDisposeModelCB=({tile:t})=>{this._onDisposeModel(t)},this._onUpdateAfterCB=()=>{this._onUpdateAfter()},this._onTileVisibilityChangeCB=({scene:t,tile:a,visible:h})=>{this._onTileVisibilityChange(a,h)},r.addEventListener("load-tile-set",this._onLoadTileSetCB),r.addEventListener("load-model",this._onLoadModelCB),r.addEventListener("dispose-model",this._onDisposeModelCB),r.addEventListener("update-after",this._onUpdateAfterCB),r.addEventListener("tile-visibility-change",this._onTileVisibilityChangeCB),r.traverse(t=>{t.cached.scene&&this._onLoadModel(t.cached.scene,t)}),r.visibleTiles.forEach(t=>{this._onTileVisibilityChange(t,!0)})}getTileInformationFromActiveObject(r){let e=null;return this.tiles.activeTiles.forEach(a=>{if(e)return!0;const h=a.cached.scene;h&&h.traverse(n=>{n===r&&(e=a)})}),e?{distanceToCamera:e.__distanceFromCamera,geometricError:e.geometricError,screenSpaceError:e.__error,depth:e.__depth,isLeaf:e.__isLeaf}:null}_initExtremes(){let r=-1;this.tiles.traverse(t=>{r=Math.max(r,t.__depth)});let e=-1;this.tiles.traverse(t=>{e=Math.max(e,t.geometricError)}),this.extremeDebugDepth=r,this.extremeDebugError=e}_onUpdateAfter(){const r=this.tiles;if(!r.root)return;this.boxGroup.visible=this.displayBoxBounds,this.sphereGroup.visible=this.displaySphereBounds,this.regionGroup.visible=this.displayRegionBounds;let e=-1;this.maxDebugDepth===-1?e=this.extremeDebugDepth:e=this.maxDebugDepth;let t=-1;this.maxDebugError===-1?t=this.extremeDebugError:t=this.maxDebugError;let a=-1;this.maxDebugDistance===-1?(r.getBoundingSphere(T),a=T.radius):a=this.maxDebugDistance;const h=this.errorTarget,n=this.colorMode,d=r.visibleTiles;let o;n===y&&(o=Array.from(d).sort((s,D)=>s[E]-D[E])),d.forEach(s=>{const D=s.cached.scene;let u,c,m;n===L&&(u=Math.random(),c=.5+Math.random()*.5,m=.375+Math.random()*.25),D.traverse(i=>{n===B&&(u=Math.random(),c=.5+Math.random()*.5,m=.375+Math.random()*.25);const f=i.material;if(f){const g=i[x];if(n===_&&f!==g)i.material.dispose(),i.material=i[x];else if(n!==_&&f===g)if(i.isPoints){const l=new H;l.size=g.size,l.sizeAttenuation=g.sizeAttenuation,i.material=l}else i.material=new S,i.material.flatShading=!0;switch(n!==L&&delete i.material[M],n!==B&&delete i.material[C],n){case W:{const l=s.__depth/e;this.getDebugColor(l,i.material.color);break}case F:{const l=s.__depthFromRenderedParent/e;this.getDebugColor(l,i.material.color);break}case w:{const l=s.__error/h;l>1?i.material.color.setRGB(1,0,0):this.getDebugColor(l,i.material.color);break}case P:{const l=Math.min(s.geometricError/t,1);this.getDebugColor(l,i.material.color);break}case U:{const l=Math.min(s.__distanceFromCamera/a,1);this.getDebugColor(l,i.material.color);break}case V:{!s.children||s.children.length===0?this.getDebugColor(1,i.material.color):this.getDebugColor(0,i.material.color);break}case B:{i.material[C]||(i.material.color.setHSL(u,c,m),i.material[C]=!0);break}case L:{i.material[M]||(i.material.color.setHSL(u,c,m),i.material[M]=!0);break}case z:{this.customColorCallback?this.customColorCallback(s,i):console.warn("DebugTilesRenderer: customColorCallback not defined");break}case y:{const l=o.indexOf(s);this.getDebugColor(l/(o.length-1),i.material.color);break}}}})})}_onTileVisibilityChange(r,e){const t=r.cached,a=this.sphereGroup,h=this.boxGroup,n=this.regionGroup,d=t.boxHelperGroup,o=t.sphereHelper,s=t.regionHelper;e?(d&&(h.add(d),d.updateMatrixWorld(!0)),o&&(a.add(o),o.updateMatrixWorld(!0)),s&&(n.add(s),s.updateMatrixWorld(!0))):(d&&h.remove(d),o&&a.remove(o),s&&n.remove(s))}_onLoadModel(r,e){e[E]=performance.now();const t=this.tiles,a=e.cached,{sphere:h,obb:n,region:d}=a.boundingVolume;if(n){const o=new b;o.name="DebugTilesRenderer.boxHelperGroup",o.matrix.copy(n.transform),o.matrixAutoUpdate=!1;const s=new A(n.box,v(e.__depth));s.raycast=G,o.add(s),a.boxHelperGroup=o,t.visibleTiles.has(e)&&this.displayBoxBounds&&(this.boxGroup.add(o),o.updateMatrixWorld(!0))}if(h){const o=new N(h,v(e.__depth));o.raycast=G,a.sphereHelper=o,t.visibleTiles.has(e)&&this.displaySphereBounds&&(this.sphereGroup.add(o),o.updateMatrixWorld(!0))}if(d){const o=new k(d,v(e.__depth));o.raycast=G;const s=new O;d.getBoundingSphere(s),o.position.copy(s.center),s.center.multiplyScalar(-1),o.geometry.translate(...s.center),a.regionHelper=o,t.visibleTiles.has(e)&&this.displayRegionBounds&&(this.regionGroup.add(o),o.updateMatrixWorld(!0))}r.traverse(o=>{const s=o.material;s&&(o[x]=s)})}_onDisposeModel(r){const e=r.cached;e.boxHelperGroup&&(e.boxHelperGroup.children[0].geometry.dispose(),delete e.boxHelperGroup),e.sphereHelper&&(e.sphereHelper.geometry.dispose(),delete e.sphereHelper),e.regionHelper&&(e.regionHelper.geometry.dispose(),delete e.regionHelper)}dispose(){const r=this.tiles;r.removeEventListener("load-tile-set",this._onLoadTileSetCB),r.removeEventListener("load-model",this._onLoadModelCB),r.removeEventListener("dispose-model",this._onDisposeModelCB),r.removeEventListener("update-after",this._onUpdateAfterCB),this.colorMode=_,this._onUpdateAfter(),r.traverse(e=>{this._onDisposeModel(e)}),this.boxGroup.removeFromParent(),this.sphereGroup.removeFromParent(),this.regionGroup.removeFromParent()}}export{z as C,U as D,P as G,V as I,y as L,_ as N,F as R,w as S,W as a,L as b,B as c,J as d};