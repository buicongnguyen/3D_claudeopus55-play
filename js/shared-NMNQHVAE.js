import{B as ci,J as j,K as ft,L as Q,M as qe,N as G,O as Xt,P as $t,c as Kt,h as Be,k as je,p as Ge,q as li,s as We,w as hi}from"./shared-QCPMP74P.js";import{b as Et,m as Oe,n as ni}from"./shared-NVB2I6YQ.js";import{$ as ue,B as yi,C as J,D as bi,E as xi,Ea as Xe,F as Ti,Fa as ee,G as Mi,Ga as _i,Ha as Di,Ja as we,M as zt,O as Si,Oa as ie,P as Mt,Q as St,R as x,Ra as Ai,S as bt,T as f,Ta as $e,U as Ri,Va as zi,W as tt,Wa as Tt,X as Ci,Xa as Vi,Ya as Ui,Z as K,_ as te,a as fi,aa as S,c as di,ca as pe,d as At,da as xt,e as Z,ea as Rt,f as Y,fa as Ct,fb as Ii,g as ui,ga as X,gb as Fi,h as Zt,i as Jt,ia as W,ib as Vt,j as Qe,ja as I,jb as Li,k as Ye,ka as Pi,kb as Ze,l as pi,la as et,m as mi,ma as Hi,n as vi,na as me,nb as Ni,o as gi,p as wi,pb as Oi,q as Ei,qa as Pt,qb as Je,r as de,ra as Ht,rb as Bi,s as yt,sb as ji,tb as Gi,ua as ve,v as Ke,xa as ge,ya as ki}from"./shared-SBVO4ZXA.js";var rt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var O=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},os=new Li(-1,1,1,-1,0,1),ti=class extends Ct{constructor(){super(),this.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rt([0,2,0,0,2,0],2))}},rs=new ti,nt=class{constructor(t){this._mesh=new X(rs,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,os)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ut=class extends O{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof I?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=W.clone(t.uniforms),this.material=new I({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new nt(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var se=class extends O{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Ee=class extends O{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ye=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new x);this._width=i.width,this._height=i.height,e=new tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:J}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ut(rt),this.copyPass.material.blending=Z,this.clock=new Ni}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}se!==void 0&&(o instanceof se?i=!0:o instanceof Ee&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new x);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var be=class extends O{constructor(t,e,i=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new S}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Wi={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new S(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var It=class p extends O{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new x(t.x,t.y):new x(256,256),this.clearColor=new S(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tt(a,o,{type:J}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let n=new tt(a,o,{type:J});n.texture.name="UnrealBloomPass.h"+d,n.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(n);let h=new tt(a,o,{type:J});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),o=Math.round(o/2)}let r=Wi;this.highPassUniforms=W.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new I({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new x(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new f(1,1,1),new f(1,1,1),new f(1,1,1),new f(1,1,1),new f(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=W.clone(rt.uniforms),this.blendMaterial=new I({uniforms:this.copyUniforms,vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,blending:Y,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new S,this._oldClearAlpha=1,this._basic=new pe,this._fsQuad=new nt(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new x(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=p.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=p.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new I({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new x(.5,.5)},direction:{value:new x(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new I({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};It.BlurDirectionX=new x(1,0);It.BlurDirectionY=new x(0,1);var ae={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xe=class extends O{constructor(){super(),this.uniforms=W.clone(ae.uniforms),this.material=new zi({name:ae.name,uniforms:this.uniforms,vertexShader:ae.vertexShader,fragmentShader:ae.fragmentShader}),this._fsQuad=new nt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ri.getTransfer(this._outputColorSpace)===Si&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pi?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mi?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vi?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ei?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===de?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wi&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oe={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new x},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new K},cameraProjectionMatrixInverse:{value:new K},cameraWorldMatrix:{value:new K},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new f(-1,-1,-1)},sceneBoxMax:{value:new f(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},re={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Te={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function qi(p=5){let t=Math.floor(p)%2===0?Math.floor(p)+1:Math.floor(p),e=ns(t),i=e.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let r=e[o],l=2*Math.PI*r/i,c=new f(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let a=new ve(s,t,t);return a.wrapS=yt,a.wrapT=yt,a.needsUpdate=!0,a}function ns(p){let t=Math.floor(p)%2===0?Math.floor(p)+1:Math.floor(p),e=t*t,i=Array(e).fill(0),s=Math.floor(t/2),a=t-1;for(let o=1;o<=e;){if(s===-1&&a===t?(a=t-2,s=0):(a===t&&(a=0),s<0&&(s=t-1)),i[s*t+a]!==0){a-=2,s++;continue}else i[s*t+a]=o++;a++,s--}return i}var ne={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ei(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new x},cameraProjectionMatrixInverse:{value:new K},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ei(p,t,e){let i=ls(p,t,e),s="vec3[SAMPLES](";for(let a=0;a<p;a++){let o=i[a];s+=`vec3(${o.x}, ${o.y}, ${o.z})${a<p-1?",":")"}`}return s}function ls(p,t,e){let i=[];for(let s=0;s<p;s++){let a=2*Math.PI*t*s/p,o=Math.pow(s/(p-1),e);i.push(new f(Math.cos(a),Math.sin(a),o))}return i}var Me=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let i,s,a,o=.5*(Math.sqrt(3)-1),r=(t+e)*o,l=Math.floor(t+r),c=Math.floor(e+r),d=(3-Math.sqrt(3))/6,n=(l+c)*d,h=l-n,u=c-n,M=t-h,y=e-u,A,R;M>y?(A=1,R=0):(A=0,R=1);let _=M-A+d,z=y-R+d,D=M-1+2*d,w=y-1+2*d,g=l&255,C=c&255,U=this.perm[g+this.perm[C]]%12,T=this.perm[g+A+this.perm[C+R]]%12,H=this.perm[g+1+this.perm[C+1]]%12,P=.5-M*M-y*y;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[U],M,y));let k=.5-_*_-z*z;k<0?s=0:(k*=k,s=k*k*this._dot(this.grad3[T],_,z));let B=.5-D*D-w*w;return B<0?a=0:(B*=B,a=B*B*this._dot(this.grad3[H],D,w)),70*(i+s+a)}noise3d(t,e,i){let s,a,o,r,c=(t+e+i)*.3333333333333333,d=Math.floor(t+c),n=Math.floor(e+c),h=Math.floor(i+c),u=1/6,M=(d+n+h)*u,y=d-M,A=n-M,R=h-M,_=t-y,z=e-A,D=i-R,w,g,C,U,T,H;_>=z?z>=D?(w=1,g=0,C=0,U=1,T=1,H=0):_>=D?(w=1,g=0,C=0,U=1,T=0,H=1):(w=0,g=0,C=1,U=1,T=0,H=1):z<D?(w=0,g=0,C=1,U=0,T=1,H=1):_<D?(w=0,g=1,C=0,U=0,T=1,H=1):(w=0,g=1,C=0,U=1,T=1,H=0);let P=_-w+u,k=z-g+u,B=D-C+u,ut=_-U+2*u,pt=z-T+2*u,lt=D-H+2*u,mt=_-1+3*u,vt=z-1+3*u,L=D-1+3*u,ht=d&255,ct=n&255,st=h&255,m=this.perm[ht+this.perm[ct+this.perm[st]]]%12,v=this.perm[ht+w+this.perm[ct+g+this.perm[st+C]]]%12,E=this.perm[ht+U+this.perm[ct+T+this.perm[st+H]]]%12,b=this.perm[ht+1+this.perm[ct+1+this.perm[st+1]]]%12,V=.6-_*_-z*z-D*D;V<0?s=0:(V*=V,s=V*V*this._dot3(this.grad3[m],_,z,D));let F=.6-P*P-k*k-B*B;F<0?a=0:(F*=F,a=F*F*this._dot3(this.grad3[v],P,k,B));let N=.6-ut*ut-pt*pt-lt*lt;N<0?o=0:(N*=N,o=N*N*this._dot3(this.grad3[E],ut,pt,lt));let at=.6-mt*mt-vt*vt-L*L;return at<0?r=0:(at*=at,r=at*at*this._dot3(this.grad3[b],mt,vt,L)),32*(s+a+o+r)}noise4d(t,e,i,s){let a=this.grad4,o=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,d,n,h,u,M,y=(t+e+i+s)*l,A=Math.floor(t+y),R=Math.floor(e+y),_=Math.floor(i+y),z=Math.floor(s+y),D=(A+R+_+z)*c,w=A-D,g=R-D,C=_-D,U=z-D,T=t-w,H=e-g,P=i-C,k=s-U,B=T>H?32:0,ut=T>P?16:0,pt=H>P?8:0,lt=T>k?4:0,mt=H>k?2:0,vt=P>k?1:0,L=B+ut+pt+lt+mt+vt,ht=o[L][0]>=3?1:0,ct=o[L][1]>=3?1:0,st=o[L][2]>=3?1:0,m=o[L][3]>=3?1:0,v=o[L][0]>=2?1:0,E=o[L][1]>=2?1:0,b=o[L][2]>=2?1:0,V=o[L][3]>=2?1:0,F=o[L][0]>=1?1:0,N=o[L][1]>=1?1:0,at=o[L][2]>=1?1:0,fe=o[L][3]>=1?1:0,gt=T-ht+c,q=H-ct+c,_t=P-st+c,Dt=k-m+c,ot=T-v+2*c,$=H-E+2*c,wt=P-b+2*c,De=k-V+2*c,Ae=T-F+3*c,ze=H-N+3*c,Ve=P-at+3*c,Ue=k-fe+3*c,Ie=T-1+4*c,Fe=H-1+4*c,Le=P-1+4*c,Ne=k-1+4*c,Nt=A&255,Ot=R&255,Bt=_&255,jt=z&255,ts=r[Nt+r[Ot+r[Bt+r[jt]]]]%32,es=r[Nt+ht+r[Ot+ct+r[Bt+st+r[jt+m]]]]%32,is=r[Nt+v+r[Ot+E+r[Bt+b+r[jt+V]]]]%32,ss=r[Nt+F+r[Ot+N+r[Bt+at+r[jt+fe]]]]%32,as=r[Nt+1+r[Ot+1+r[Bt+1+r[jt+1]]]]%32,Gt=.6-T*T-H*H-P*P-k*k;Gt<0?d=0:(Gt*=Gt,d=Gt*Gt*this._dot4(a[ts],T,H,P,k));let Wt=.6-gt*gt-q*q-_t*_t-Dt*Dt;Wt<0?n=0:(Wt*=Wt,n=Wt*Wt*this._dot4(a[es],gt,q,_t,Dt));let qt=.6-ot*ot-$*$-wt*wt-De*De;qt<0?h=0:(qt*=qt,h=qt*qt*this._dot4(a[is],ot,$,wt,De));let Qt=.6-Ae*Ae-ze*ze-Ve*Ve-Ue*Ue;Qt<0?u=0:(Qt*=Qt,u=Qt*Qt*this._dot4(a[ss],Ae,ze,Ve,Ue));let Yt=.6-Ie*Ie-Fe*Fe-Le*Le-Ne*Ne;return Yt<0?M=0:(Yt*=Yt,M=Yt*Yt*this._dot4(a[as],Ie,Fe,Le,Ne)),27*(d+n+h+u+M)}_dot(t,e,i){return t[0]*e+t[1]*i}_dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}_dot4(t,e,i,s,a){return t[0]*e+t[1]*i+t[2]*s+t[3]*a}};var le=class p extends O{constructor(t,e,i=512,s=512,a,o,r){super(),this.width=i,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=qi(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new tt(this.width,this.height,{type:J}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new I({defines:Object.assign({},oe.defines),uniforms:W.clone(oe.uniforms),vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader,blending:Z,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ui,this.normalMaterial.blending=Z,this.pdMaterial=new I({defines:Object.assign({},ne.defines),uniforms:W.clone(ne.uniforms),vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new I({defines:Object.assign({},re.defines),uniforms:W.clone(re.uniforms),vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,blending:Z}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new I({uniforms:W.clone(rt.uniforms),vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ye,blendDst:Jt,blendEquation:Zt,blendSrcAlpha:Qe,blendDstAlpha:Jt,blendEquationAlpha:Zt}),this.blendMaterial=new I({uniforms:W.clone(Te.uniforms),vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ui,blendSrc:Ye,blendDst:Jt,blendEquation:Zt,blendSrcAlpha:Qe,blendDstAlpha:Jt,blendEquationAlpha:Zt}),this._fsQuad=new nt(null),this._originalClearColor=new S,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),r!==void 0&&this.updatePdMaterial(r)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new _i,this.depthTexture.format=Ti,this.depthTexture.type=bi,this.normalRenderTarget=new tt(this.width,this.height,{minFilter:Ke,magFilter:Ke,type:J,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ei(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case p.OUTPUT.Off:break;case p.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Z,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case p.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Z,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case p.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Z,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case p.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case p.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Z,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case p.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Z,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,i,s,a){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=r,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,i,s,a){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,a=e.clearAlpha||a,s!=null&&(t.setClearColor(s),t.setClearAlpha(a||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=r,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,e.push(i))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Me,i=t*t*4,s=new Uint8Array(i);for(let o=0;o<t;o++)for(let r=0;r<t;r++){let l=o,c=r;s[(o*t+r)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+r)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+r)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+r)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let a=new ve(s,t,t,xi,yi);return a.wrapS=yt,a.wrapT=yt,a.needsUpdate=!0,a}};le.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var hs={uniforms:{tDiffuse:{value:null},resolution:{value:new x(1,1)},time:{value:0},focus:{value:.55},band:{value:.26},blur:{value:2.2},saturation:{value:1.05},contrast:{value:1.04},warmth:{value:0},vignette:{value:.25},tint:{value:new S("#ffffff")},grain:{value:.025},fade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 resolution; uniform float time, focus, band, blur, saturation, contrast, warmth, vignette, grain, fade; uniform vec3 tint;
    varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      // Tilt-shift: a sharp horizontal band of focus, softening toward the top and bottom.
      float d = abs(vUv.y - focus);
      float amount = smoothstep(band, band + 0.3, d) * blur;
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      if (amount > 0.05) {
        vec3 acc = col; float w = 1.0;
        for (int i = 0; i < 12; i++) {
          float a = float(i) * 2.39996;
          float r = sqrt(float(i) + 0.5) / sqrt(12.0);
          vec2 o = vec2(cos(a), sin(a)) * r * amount / resolution;
          acc += texture2D(tDiffuse, vUv + o).rgb; w += 1.0;
        }
        col = acc / w;
      }
      // Grade: warmth, tint, saturation and contrast in display space.
      col *= tint;
      col.r *= 1.0 + warmth; col.b *= 1.0 - warmth;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.5) * contrast + 0.5;
      // Vignette and a whisper of film grain to break up gradients.
      vec2 v = vUv - 0.5; v.x *= resolution.x / resolution.y;
      col *= 1.0 - vignette * smoothstep(0.35, 1.05, length(v));
      col += (rand(vUv * resolution + time) - 0.5) * grain;
      col = mix(col, vec3(0.0), fade);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`},Se=class{constructor(t,{quality:e="high",preserve:i=!1}={}){this.canvas=t,this.renderer=new Gi({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:i});let s=this.renderer;s.outputColorSpace=zt,s.toneMapping=de,s.shadowMap.enabled=!0,s.shadowMap.type=fi,s.info.autoReset=!1,this.scale=1,this.frameTimes=[],this.setQuality(e)}setQuality(t){this.qualityKey=$t[t]?t:"high",this.quality=$t[this.qualityKey],this.scale=1,this.renderer.antialias=!this.quality.post,this.buildComposer()}buildComposer(){for(let s of this.composer?.passes||[])s.dispose?.();if(this.composer?.dispose(),this.composer=this.finish=this.bloom=this.gtao=null,!this.quality.post||!this.scene)return;let t=this.renderer.getDrawingBufferSize(new x),e=new tt(t.x,t.y,{type:J,samples:this.quality.msaa}),i=new ye(this.renderer,e);i.addPass(new be(this.scene,this.camera)),this.quality.gtao?(this.gtao=new le(this.scene,this.camera,t.x,t.y),this.gtao.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1.2,scale:1,samples:12}),this.gtao.blendIntensity=.7,i.addPass(this.gtao)):this.gtao=null,this.quality.bloom?(this.bloom=new It(new x(t.x/2,t.y/2),.3,.45,.88),i.addPass(this.bloom)):this.bloom=null,i.addPass(new xe),this.finish=new Ut(hs),i.addPass(this.finish),this.composer=i,this.applyGrade()}attach(t,e){this.scene=t,this.camera=e,this.buildComposer()}setGrade(t,e){this.grade=t,this.bloomSettings=e,this.applyGrade()}applyGrade(){let t=this.grade,e=this.finish?.uniforms;e&&t&&(e.saturation.value=t.saturation,e.contrast.value=t.contrast,e.warmth.value=t.warmth,e.vignette.value=t.vignette,e.tint.value.copy(t.tint?.isColor?t.tint:new S(t.tint))),this.bloom&&this.bloomSettings&&([this.bloom.strength,this.bloom.radius,this.bloom.threshold]=this.bloomSettings)}setFocus(t,e=.26,i=2.2){this.finish&&(this.finish.uniforms.focus.value=t,this.finish.uniforms.band.value=e,this.finish.uniforms.blur.value=i*Math.min(1.5,this.pixelRatio))}setFade(t){this.finish&&(this.finish.uniforms.fade.value=t),this.fadeValue=t}get pixelRatio(){return Math.min(devicePixelRatio,this.quality.pixelRatio)*this.scale}resize(t,e){if(this.width=t,this.height=e,this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e,!1),this.composer){this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,e);let i=this.renderer.getDrawingBufferSize(new x);this.finish.uniforms.resolution.value.set(i.x,i.y),this.gtao?.setSize(i.x,i.y)}}adapt(t){if(document.hidden||(this.frameTimes.push(t),this.frameTimes.length<90))return;let e=this.frameTimes.reduce((s,a)=>s+a,0)/this.frameTimes.length;this.frameTimes.length=0;let i=this.scale;e>1/40&&this.scale>.6?this.scale=Math.max(.6,this.scale-.1):e<1/58&&this.scale<1&&(this.scale=Math.min(1,this.scale+.05)),i!==this.scale&&this.width&&this.resize(this.width,this.height)}render(t,e){this.renderer.info.reset(),this.composer?(this.finish.uniforms.time.value=e,this.composer.render(t)):this.renderer.render(this.scene,this.camera)}info(){return{...this.renderer.info.render,quality:this.qualityKey,scale:this.scale}}};var dt=p=>new S(p),ii={afternoon:{sun:[-.45,.82,.35],sunColor:"#fff1dc",sunIntensity:3.1,hemiSky:"#d6ecff",hemiGround:"#6f8b4e",hemiIntensity:1.15,zenith:"#5aa3e0",horizon:"#cfe8f2",haze:"#d9edf3",deep:"#6ea9d8",cloudLit:"#ffffff",cloudShade:"#a9c4dc",glow:"#fff4d6",stars:0,moon:0,fog:"#d9ecef",exposure:1,env:.9,bloom:[.22,.4,.92],grade:{saturation:1.08,contrast:1.04,warmth:.02,vignette:.22,tint:"#fffaf2"},fireflies:0,lanterns:.25,lights:0,dust:1},golden:{sun:[-.62,.36,.5],sunColor:"#ffcf8f",sunIntensity:2.9,hemiSky:"#ffe2bd",hemiGround:"#6a7a45",hemiIntensity:1,zenith:"#6f9ad0",horizon:"#ffd6a0",haze:"#ffe1bd",deep:"#9b9fc8",cloudLit:"#fff0d4",cloudShade:"#d2a896",glow:"#ffd08a",stars:0,moon:0,fog:"#f4dcbc",exposure:1,env:.85,bloom:[.32,.45,.88],grade:{saturation:1.1,contrast:1.05,warmth:.05,vignette:.26,tint:"#fff5e8"},fireflies:.15,lanterns:.45,lights:.15,dust:1},sunset:{sun:[-.72,.16,.62],sunColor:"#ffb886",sunIntensity:2.3,hemiSky:"#f2d2d0",hemiGround:"#5c6070",hemiIntensity:1,zenith:"#4d5fa8",horizon:"#ff9f7c",haze:"#ffb49a",deep:"#7a5c9c",cloudLit:"#ffc49a",cloudShade:"#9a7aa0",glow:"#ff9a5e",stars:.08,moon:0,fog:"#e8a894",exposure:1.02,env:.75,bloom:[.45,.5,.84],grade:{saturation:1.06,contrast:1.06,warmth:.05,vignette:.3,tint:"#fff2ec"},fireflies:.4,lanterns:.7,lights:.45,dust:.6},dusk:{sun:[.35,.72,-.2],sunColor:"#a9b8ff",sunIntensity:1.15,hemiSky:"#8f9ade",hemiGround:"#3c4150",hemiIntensity:1.05,zenith:"#1d2658",horizon:"#b77aa6",haze:"#8c6f9a",deep:"#2e3068",cloudLit:"#c69ab8",cloudShade:"#4c4a78",glow:"#e6a0c4",stars:.55,moon:.4,fog:"#6d5f8c",exposure:1.12,env:.6,bloom:[.6,.5,.82],grade:{saturation:1.05,contrast:1.08,warmth:-.02,vignette:.36,tint:"#eef0ff"},fireflies:.75,lanterns:1,lights:.85,dust:0},night:{sun:[.4,.8,-.3],sunColor:"#9fb6ff",sunIntensity:.85,hemiSky:"#6f7fcf",hemiGround:"#28303f",hemiIntensity:.9,zenith:"#070c28",horizon:"#2d3a74",haze:"#343a6a",deep:"#0b1030",cloudLit:"#6e78b4",cloudShade:"#1c2046",glow:"#9fb3ff",stars:1,moon:1,fog:"#262b55",exposure:1.2,env:.5,bloom:[.72,.55,.8],grade:{saturation:1.02,contrast:1.1,warmth:-.04,vignette:.42,tint:"#e6ecff"},fireflies:1,lanterns:1,lights:1,dust:0}},Yi=["afternoon","golden","sunset","dusk","night"];function si(p,t,e){let i={};for(let s of Object.keys(p)){let a=p[s],o=t[s];typeof a=="number"?i[s]=a+(o-a)*e:typeof a=="string"?i[s]=dt(a).lerp(dt(o),e):a?.isColor?i[s]=a.clone().lerp(o,e):Array.isArray(a)?i[s]=a.map((r,l)=>r+(o[l]-r)*e):typeof a=="object"&&(i[s]=si(a,o,e))}return i}var Qi=p=>si(p,p,0),cs=`
varying vec3 vDir;
void main(){
  vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
  vec4 p = projectionMatrix * viewMatrix * vec4((modelMatrix * vec4(position, 1.0)).xyz, 1.0);
  gl_Position = p.xyww;
}`,fs=`
uniform vec3 zenith, horizon, haze, deep, cloudLit, cloudShade, glow, sunDir, moonDir;
uniform float stars, moon, time;
varying vec3 vDir;
float hash(vec3 p){ p = fract(p * 0.3183099 + .1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  float a = fract(sin(dot(i, vec2(127.1,311.7)))*43758.5453), b = fract(sin(dot(i+vec2(1,0), vec2(127.1,311.7)))*43758.5453);
  float c = fract(sin(dot(i+vec2(0,1), vec2(127.1,311.7)))*43758.5453), d = fract(sin(dot(i+vec2(1,1), vec2(127.1,311.7)))*43758.5453);
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }
float fbm(vec2 p){ float v = 0.0, a = .5; for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.03 + 7.1; a *= .5; } return v; }
void main(){
  vec3 d = normalize(vDir);
  float up = d.y;
  vec3 col;
  if (up >= 0.0) {
    col = mix(horizon, zenith, pow(smoothstep(0.0, 0.85, up), 0.55));
    // stars and a soft moon
    vec3 sp = floor(d * 380.0);
    float s = step(0.9965, hash(sp)) * stars * smoothstep(0.05, 0.4, up);
    s *= 0.6 + 0.4 * sin(time * 2.0 + hash(sp + 3.0) * 30.0);
    col += vec3(s) * 1.4;
    float m = smoothstep(0.9993, 0.9996, dot(d, moonDir)) * moon;
    col = mix(col, vec3(1.0, 0.97, 0.9) * 2.2, m);
    col += glow * pow(max(dot(d, moonDir), 0.0), 64.0) * moon * 0.35;
  } else {
    // looking down past the island: open sky deepening below, with a drifting sea of clouds
    float depth = smoothstep(0.0, -0.8, up);
    vec3 base = mix(haze, deep, depth);
    vec2 uv = d.xz / max(-up, 0.05) * 5.0;
    vec2 drift = vec2(time * 0.006, time * 0.0035);
    float c = fbm(uv * 0.11 + drift);
    float detail = fbm(uv * 0.45 - drift * 2.0);
    float puff = smoothstep(0.46, 0.74, c + detail * 0.16);
    float toward = dot(normalize(d.xz + 1e-4), normalize(sunDir.xz + 1e-4));
    vec3 cloud = mix(cloudShade, cloudLit, clamp(0.35 + (c - 0.45) * 2.2 + toward * 0.18, 0.0, 1.0));
    col = mix(base, cloud, puff * mix(0.92, 0.45, depth));
    col = mix(col, haze, smoothstep(-0.2, 0.0, up) * 0.8);
  }
  // sun glow around the horizon toward the sun
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += glow * (pow(sd, 8.0) * 0.35 + pow(sd, 90.0) * 0.8) * (1.0 - stars * 0.8);
  col += glow * pow(sd, 2400.0) * 6.0 * (1.0 - stars);
  gl_FragColor = vec4(col, 1.0);
}`,Re=class{constructor(t,e){this.renderer=t,this.scene=e,this.current=Qi(ii.afternoon),this.from=this.current,this.to=this.current,this.t=1,this.duration=1,this.key="afternoon",this.uniforms={zenith:{value:dt("#fff")},horizon:{value:dt("#fff")},haze:{value:dt("#fff")},deep:{value:dt("#fff")},cloudLit:{value:dt("#fff")},cloudShade:{value:dt("#fff")},glow:{value:dt("#fff")},sunDir:{value:new f(0,1,0)},moonDir:{value:new f(-.5,.45,-.75).normalize()},stars:{value:0},moon:{value:0},time:{value:0}};let i=new X(new Ai(400,48,24),new I({uniforms:this.uniforms,vertexShader:cs,fragmentShader:fs,side:di,depthWrite:!1,fog:!1}));i.frustumCulled=!1,i.renderOrder=-10,this.dome=i,e.add(i),this.envScene=new me,this.envDome=new X(i.geometry,i.material),this.envScene.add(this.envDome),this.pmrem=new ji(t),this.envTarget=null,this.envAge=99,this.sun=new Ze("#ffffff",3),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=3,this.sun.shadow.intensity=.72,Object.assign(this.sun.shadow.camera,{left:-14,right:14,top:12,bottom:-12,near:1,far:60}),this.sunTarget=new ue,e.add(this.sunTarget),this.sun.target=this.sunTarget,this.hemi=new Fi("#fff","#444",1),this.rim=new Ze("#ffffff",.4),e.add(this.sun,this.hemi,this.rim),e.fog=new Hi("#ffffff",40,120),this.apply(this.current)}setShadowSize(t){this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null}go(t,e=4){ii[t]&&(this.key=t,this.from=this.current,this.to=Qi(ii[t]),this.t=e>0?0:1,this.duration=Math.max(.001,e),e<=0&&(this.current=this.to,this.apply(this.current),this.envAge=99))}get transitioning(){return this.t<1}update(t,e){if(this.uniforms.time.value=e,this.t<1){this.t=Math.min(1,this.t+t/this.duration);let i=this.t*this.t*(3-2*this.t);this.current=si(this.from,this.to,i),this.apply(this.current)}this.envAge+=t,(!this.envTarget||this.t<1&&this.envAge>.35||this.envAge>90)&&this.refreshEnvironment()}refreshEnvironment(){this.envAge=0;let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.envScene,.02,1,800),this.scene.environment=this.envTarget.texture,t?.dispose()}apply(t){let e=this.uniforms;for(let s of["zenith","horizon","haze","deep","cloudLit","cloudShade","glow"])e[s].value.copy(t[s]);e.stars.value=t.stars,e.moon.value=t.moon;let i=new f(...t.sun).normalize();e.sunDir.value.copy(i),this.sun.position.copy(i).multiplyScalar(30),this.sun.color.copy(t.sunColor),this.sun.intensity=t.sunIntensity,this.hemi.color.copy(t.hemiSky),this.hemi.groundColor.copy(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.rim.position.set(-i.x*20,8,-Math.abs(i.z)*20-10),this.rim.color.copy(t.glow),this.rim.intensity=.35+t.stars*.25,this.scene.fog.color.copy(t.fog),this.scene.environmentIntensity=t.env,this.renderer.toneMappingExposure=t.exposure}};var he=new f,Ce=class{constructor(){this.camera=new Pi(30,1,.5,900),this.pitch=St.degToRad(52),this.yaw=0,this.target=new f,this.distance=30,this.offset=new x,this.trauma=0,this.time=0,this.drift=1,this.shot=null,this.hold=null,this.parallax=new x,this.parallaxTarget=new x}fit(t,e,i,s,{pitch:a=52,fov:o=30,smooth:r=!1}={}){let l=this.camera,c=r&&this.current&&!this.shot?this.current:null;l.fov=o,l.aspect=e/i,this.pitch=St.degToRad(a);let d=t.reduce((M,y)=>M.add(y),new f).multiplyScalar(1/t.length);this.target.copy(d),this.width=e,this.height=i;let n=4,h=200;for(let M=0;M<24;M++){let y=(n+h)/2,A=this.bounds(t,y,e,i);A.w<=s.w&&A.h<=s.h?h=y:n=y}this.distance=h;let u=this.bounds(t,h,e,i);return this.offset.set(u.x+u.w/2-(s.x+s.w/2),u.y+u.h/2-(s.y+s.h/2)),this.base=this.pose(),c?(this.blend={from:c,t:0},this.apply(c)):this.apply(this.base),this.base}bounds(t,e,i,s){let a=this.camera;this.place(a,this.target,e,this.yaw,this.pitch),a.aspect=i/s,a.clearViewOffset(),a.updateProjectionMatrix(),a.updateMatrixWorld();let o=1/0,r=1/0,l=-1/0,c=-1/0;for(let d of t){he.copy(d).project(a);let n=(he.x*.5+.5)*i,h=(-he.y*.5+.5)*s;o=Math.min(o,n),l=Math.max(l,n),r=Math.min(r,h),c=Math.max(c,h)}return{x:o,y:r,w:l-o,h:c-r}}place(t,e,i,s,a){t.position.set(e.x+Math.sin(s)*Math.cos(a)*i,e.y+Math.sin(a)*i,e.z+Math.cos(s)*Math.cos(a)*i),t.lookAt(e)}pose(){return{target:this.target.clone(),distance:this.distance,yaw:this.yaw,pitch:this.pitch,fov:this.camera.fov,offset:this.offset.clone()}}apply(t,e={}){let i=this.camera;i.fov=t.fov,this.place(i,t.target,t.distance,t.yaw+(e.yaw||0),t.pitch+(e.pitch||0)),e.shake&&i.position.add(e.shake),this.width&&i.setViewOffset(this.width,this.height,t.offset.x,t.offset.y,this.width,this.height),i.updateProjectionMatrix(),i.updateMatrixWorld()}move(t,e,i,{curve:s=Q.inOutCubic,done:a,arc:o=0}={}){this.shot={from:t,to:e,t:0,duration:i,curve:s,done:a,arc:o}}flyIn(t=3.2,e){let i=this.base,s={...i,target:i.target.clone().add(new f(0,1.5,-4)),distance:i.distance*1.9,yaw:i.yaw-.55,pitch:i.pitch+.2,fov:i.fov+6,offset:i.offset.clone()};this.apply(s),this.move(s,i,t,{done:e,curve:Q.outCubic,arc:.3})}pushTo(t,{distance:e=.55,duration:i=1.4,pitch:s=-.08,hold:a=2.2,done:o}={}){let r={...this.base,target:t.clone(),distance:this.base.distance*e,pitch:this.base.pitch+s,offset:new x},l=this.current||this.base;clearTimeout(this.hold),this.move(l,r,i,{curve:Q.inOutCubic,done:()=>{this.holdPose=r,this.hold=setTimeout(()=>{this.holdPose=null,this.move(r,this.base,1.6,{curve:Q.inOutCubic,done:o})},a*1e3)}})}focus(t,{distance:e=.42,duration:i=1.1,pitch:s=-.16,yaw:a=0}={}){if(!this.base)return;clearTimeout(this.hold);let o={...this.base,target:t.clone(),distance:this.base.distance*e,pitch:this.base.pitch+s,yaw:this.base.yaw+a,offset:new x},r=this.current||this.base;this.holdPose=null,this.move(r,o,i,{curve:Q.inOutCubic,done:()=>{this.focused===o&&(this.holdPose=o)}}),this.focused=o}release({duration:t=1.3}={}){if(!this.focused)return;let e=this.current||this.focused;this.focused=null,this.holdPose=null,this.move(e,this.base,t,{curve:Q.inOutCubic})}reset({glide:t=!1}={}){clearTimeout(this.hold),this.shot=null,this.holdPose=null,this.focused=null,this.blend=t&&this.current?{from:this.current,t:0}:null,!t&&this.base&&this.apply(this.base)}get busy(){return!!(this.shot||this.blend||this.holdPose)}orbit(t,e=null){t===this.orbiting&&e===this.orbitPose||(this.current&&(this.blend={from:this.current,t:0}),this.orbiting=t,this.orbitPose=e)}shake(t){this.trauma=Math.min(1,this.trauma+t)}pointer(t,e){this.parallaxTarget.set(t,e)}update(t,{quiet:e=!1,dragging:i=!1}={}){this.time+=t;let s=this.base;if(!s)return;if(this.shot){let o=this.shot;o.t=Math.min(1,o.t+t/o.duration);let r=o.curve(o.t);s={target:o.from.target.clone().lerp(o.to.target,r),distance:ft(o.from.distance,o.to.distance,r),yaw:ft(o.from.yaw,o.to.yaw,r)+Math.sin(r*Math.PI)*o.arc*.3,pitch:ft(o.from.pitch,o.to.pitch,r),fov:ft(o.from.fov,o.to.fov,r),offset:o.from.offset.clone().lerp(o.to.offset,r)},o.t>=1&&(this.shot=null,o.done?.())}else if(this.holdPose)s=this.holdPose;else if(this.orbiting){let o=this.orbitPose||this.base;s={...o,yaw:o.yaw+Math.sin(this.time*.07)*.35,distance:o.distance*1.05,pitch:o.pitch-.05}}if(this.blend&&!this.shot){this.blend.t=Math.min(1,this.blend.t+t/1.4);let o=Q.inOutCubic(this.blend.t),r=this.blend.from;s={target:r.target.clone().lerp(s.target,o),distance:ft(r.distance,s.distance,o),yaw:ft(r.yaw,s.yaw,o),pitch:ft(r.pitch,s.pitch,o),fov:ft(r.fov,s.fov,o),offset:r.offset.clone().lerp(s.offset,o)},this.blend.t>=1&&(this.blend=null)}this.current=s;let a={};if(e)this.trauma=0;else if(i||this.parallax.lerp(this.parallaxTarget,1-Math.exp(-t*2)),a.yaw=Math.sin(this.time*.13)*.006*this.drift+this.parallax.x*.012,a.pitch=Math.sin(this.time*.11+1)*.004*this.drift-this.parallax.y*.008,this.trauma>0){let o=this.trauma*this.trauma*.12;a.shake=new f(Math.sin(this.time*47)*o,Math.sin(this.time*53+1)*o,Math.sin(this.time*41+2)*o*.5),this.trauma=Math.max(0,this.trauma-t*1.6)}this.apply(s,a)}screenY(t){return he.copy(t).project(this.camera),j(-he.y*.5+.5)}};var ds=`
attribute float size; attribute float alpha; attribute vec3 tint; attribute float spin;
varying float vAlpha; varying vec3 vTint; varying float vSpin;
uniform float scale;
void main(){
  vAlpha = alpha; vTint = tint; vSpin = spin;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,us=`
varying float vAlpha; varying vec3 vTint; varying float vSpin;
void main(){
  vec2 p = gl_PointCoord - 0.5;
  float r = length(p);
  float core = exp(-r * r * 38.0);
  float halo = exp(-r * r * 9.0) * 0.45;
  // a soft four-point twinkle on some particles
  float c = cos(vSpin), s = sin(vSpin);
  vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  float star = max(0.0, 1.0 - abs(q.x) * 30.0) * max(0.0, 1.0 - abs(q.y) * 3.0) + max(0.0, 1.0 - abs(q.y) * 30.0) * max(0.0, 1.0 - abs(q.x) * 3.0);
  float a = (core + halo + star * 0.5 * step(0.5, fract(vSpin * 3.1))) * vAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vTint * a, a);
}`,Pe=class{constructor(t=1600){this.max=t,this.count=0;let e=new Ct;this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.spin=new Float32Array(t),this.life=new Float32Array(t),this.age=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.base=new Float32Array(t),e.setAttribute("position",new xt(this.pos,3).setUsage(Mt)),e.setAttribute("tint",new xt(this.col,3).setUsage(Mt)),e.setAttribute("size",new xt(this.size,1).setUsage(Mt)),e.setAttribute("alpha",new xt(this.alpha,1).setUsage(Mt)),e.setAttribute("spin",new xt(this.spin,1).setUsage(Mt)),e.setDrawRange(0,0),this.material=new I({uniforms:{scale:{value:300}},vertexShader:ds,fragmentShader:us,transparent:!0,depthWrite:!1,blending:Y}),this.points=new Xe(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5,this.budget=1}setViewport(t,e){this.material.uniforms.scale.value=t*e*.9}spawn(t,e,i,s,a,{gravity:o=-3,drag:r=1.5,spin:l=Math.random()*6.28}={}){if(this.count>=this.max)return;let c=this.count++;this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.col.set([i.r,i.g,i.b],c*3),this.size[c]=s,this.base[c]=s,this.life[c]=a,this.age[c]=0,this.alpha[c]=1,this.grav[c]=o,this.drag[c]=r,this.spin[c]=l}burst(t,{color:e="#ffd67a",count:i=40,speed:s=2.6,size:a=.28,life:o=.9,up:r=1.4,gravity:l=-3.2,palette:c}={}){let d=Math.round(i*this.budget),n=new S,h=new S(e);for(let u=0;u<d;u++){let M=Math.random()*Math.PI*2,y=Math.random()*.9+.1,A=s*(.4+Math.random()*.8),R=new f(Math.cos(M)*A*y,r+Math.random()*A*.8,Math.sin(M)*A*y);n.copy(c?new S(c[u%c.length]):h).multiplyScalar(1.6+Math.random()*1.4),this.spawn(t,R,n,a*(.5+Math.random()),o*(.6+Math.random()*.6),{gravity:l})}}ring(t,{color:e="#fff0b0",count:i=36,radius:s=.2,speed:a=3.2,size:o=.22,life:r=.55}={}){let l=Math.round(i*this.budget),c=new S(e).multiplyScalar(2.2);for(let d=0;d<l;d++){let n=d/l*Math.PI*2,h=new f(t.x+Math.cos(n)*s,t.y,t.z+Math.sin(n)*s);this.spawn(h,new f(Math.cos(n)*a,.2,Math.sin(n)*a),c,o,r,{gravity:0,drag:4})}}rise(t,{color:e="#ffcf6b",count:i=12,spread:s=.4,speed:a=.9,size:o=.2,life:r=1.6}={}){let l=Math.max(1,Math.round(i*this.budget)),c=new S(e).multiplyScalar(2);for(let d=0;d<l;d++){let n=new f(t.x+(Math.random()-.5)*s,t.y+Math.random()*.2,t.z+(Math.random()-.5)*s);this.spawn(n,new f((Math.random()-.5)*.3,a*(.6+Math.random()*.6),(Math.random()-.5)*.3),c,o*(.6+Math.random()*.6),r,{gravity:.2,drag:.6})}}firework(t,e){let i=e[Math.floor(Math.random()*e.length)];this.burst(t,{color:i,count:90,speed:5.5,size:.55,life:1.8,up:0,gravity:-1.2}),this.burst(t,{color:"#fff6d8",count:20,speed:2,size:.4,life:.6,up:0,gravity:-.5})}update(t){let e=this.count;for(let s=0;s<e;s++){if(this.age[s]+=t,this.age[s]>=this.life[s]){if(e--,s!==e){for(let[r,l]of[[this.pos,3],[this.vel,3],[this.col,3]])r.copyWithin(s*l,e*l,e*l+l);for(let r of[this.size,this.alpha,this.spin,this.life,this.age,this.grav,this.drag,this.base])r[s]=r[e];s--}continue}let a=Math.exp(-this.drag[s]*t);this.vel[s*3]*=a,this.vel[s*3+1]=this.vel[s*3+1]*a+this.grav[s]*t,this.vel[s*3+2]*=a,this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t;let o=this.age[s]/this.life[s];this.alpha[s]=Math.min(1,o*12)*(1-o)**1.4,this.size[s]=this.base[s]*(1-o*.5),this.spin[s]+=t*2}this.count=e;let i=this.points.geometry;i.setDrawRange(0,e);for(let s of["position","tint","size","alpha","spin"])i.attributes[s].needsUpdate=!0}clear(){this.count=0,this.points.geometry.setDrawRange(0,0)}},ps=`
attribute vec4 seed; uniform float time, scale, intensity; uniform vec3 area, centre; uniform float blinkRate;
varying float vAlpha;
void main(){
  float t = time * (0.15 + seed.w * 0.25);
  vec3 p = centre + (seed.xyz - 0.5) * area;
  p.x += sin(t * 1.3 + seed.y * 20.0) * 0.8 + sin(t * 0.37 + seed.z * 9.0) * 1.6;
  p.z += cos(t * 1.1 + seed.x * 17.0) * 0.8 + cos(t * 0.29 + seed.y * 7.0) * 1.6;
  p.y += sin(t * 0.9 + seed.x * 13.0) * 0.35;
  float blink = blinkRate > 0.0 ? pow(0.5 + 0.5 * sin(time * blinkRate * (0.6 + seed.w) + seed.x * 50.0), 3.0) : 1.0;
  vAlpha = intensity * (0.25 + 0.75 * blink) * step(seed.w, intensity * 1.2 + 0.001);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = (0.18 + seed.y * 0.12) * scale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,ms=`
uniform vec3 color; varying float vAlpha;
void main(){
  vec2 p = gl_PointCoord - 0.5; float r = dot(p, p);
  float a = (exp(-r * 60.0) + exp(-r * 12.0) * 0.4) * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(color * a, a);
}`,ce=class{constructor({count:t=220,color:e="#fff2a0",area:i=[24,3,18],centre:s=[0,1.4,0],blinkRate:a=1.6}={}){let o=new Ct,r=new Float32Array(t*4);for(let l=0;l<r.length;l++)r[l]=Math.random();o.setAttribute("seed",new xt(r,4)),o.setAttribute("position",new xt(new Float32Array(t*3),3)),this.uniforms={time:{value:0},scale:{value:300},intensity:{value:0},area:{value:new f(...i)},centre:{value:new f(...s)},color:{value:new S(e).multiplyScalar(2.2)},blinkRate:{value:a}},this.points=new Xe(o,new I({uniforms:this.uniforms,vertexShader:ps,fragmentShader:ms,transparent:!0,depthWrite:!1,blending:Y})),this.points.frustumCulled=!1,this.points.renderOrder=4}setViewport(t,e){this.uniforms.scale.value=t*e*.9}update(t,e){this.uniforms.time.value=t,this.uniforms.intensity.value=e,this.points.visible=e>.01}},He=class{constructor(t=360){this.max=t;let e=new ie(.12,.07,2,1);e.translate(0,0,0),this.mesh=new ge(e,new Tt({side:At,roughness:.7,metalness:0}),t),this.mesh.instanceMatrix.setUsage(Mt),this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.items=[],this.dummy=new ue,this.budget=1,this.leafShape=null}confetti(t,{count:e=120,palette:i=["#ff6b8b","#ffd166","#6fd3c6","#9a8cff","#ffffff","#ff9f5a"],spread:s=1,speed:a=5}={}){let o=Math.round(e*this.budget);for(let r=0;r<o&&this.items.length<this.max;r++){let l=Math.random()*Math.PI*2;this.items.push({p:new f(t.x+(Math.random()-.5)*s,t.y,t.z+(Math.random()-.5)*s),v:new f(Math.cos(l)*a*.35*Math.random(),a*(.7+Math.random()*.6),Math.sin(l)*a*.35*Math.random()),r:new te(Math.random()*6,Math.random()*6,Math.random()*6),w:new f(Math.random()*9-4.5,Math.random()*9-4.5,Math.random()*9-4.5),s:.8+Math.random()*.7,life:3.5+Math.random()*1.5,age:0,color:new S(i[r%i.length]),drag:1.8,fall:-3.2,floor:.12})}}drift(t,e,{size:i=1.3}={}){this.items.length>=this.max||this.items.push({p:new f(t.x+(Math.random()-.5)*t.w,t.y,t.z+(Math.random()-.5)*t.d),v:new f(.4+Math.random()*.4,-.35-Math.random()*.2,(Math.random()-.5)*.2),r:new te(Math.random()*6,Math.random()*6,Math.random()*6),w:new f(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),s:i*(.8+Math.random()*.5),life:14,age:0,color:new S(e[Math.floor(Math.random()*e.length)]),drag:.2,fall:0,floor:.06,sway:Math.random()*6})}update(t,e){let i=this.dummy,s=0;for(let a=this.items.length-1;a>=0;a--){let o=this.items[a];if(o.age+=t,o.age>o.life){this.items.splice(a,1);continue}let r=Math.exp(-o.drag*t);o.v.x*=r,o.v.z*=r,o.v.y=o.v.y*r+o.fall*t,o.sway!==void 0&&(o.v.x+=Math.sin(e*1.3+o.sway)*.4*t,o.v.z+=Math.cos(e*.9+o.sway)*.3*t),o.fall&&o.v.y<-1.1&&(o.v.y=-1.1+Math.sin(e*5+a)*.1),o.p.addScaledVector(o.v,t),o.p.y<o.floor&&(o.p.y=o.floor,o.v.set(0,0,0),o.w.multiplyScalar(.9)),o.r.x+=o.w.x*t,o.r.y+=o.w.y*t,o.r.z+=o.w.z*t;let l=Math.min(1,(o.life-o.age)/.6);i.position.copy(o.p),i.rotation.copy(o.r),i.scale.setScalar(o.s*l),i.updateMatrix(),this.mesh.setMatrixAt(s,i.matrix),this.mesh.setColorAt(s,o.color),s++}this.mesh.count=s,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.items.length=0,this.mesh.count=0}};var kt={time:{value:0},strength:{value:1}};function ai(p,{height:t=3,amount:e=.12,frequency:i=1.4}={}){let s=p.clone(),a=s.name==="leaves";return s.onBeforeCompile=o=>{o.uniforms.windTime=kt.time,o.uniforms.windStrength=kt.strength,a&&(o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",Bi.normal_fragment_begin.replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;"))),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform float windTime; uniform float windStrength;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 anchor = vec3(0.0);
          #ifdef USE_INSTANCING
            anchor = instanceMatrix[3].xyz;
          #endif
          vec4 worldAnchor = modelMatrix * vec4(anchor, 1.0);
          float phase = worldAnchor.x * 0.37 + worldAnchor.z * 0.23;
          float k = pow(clamp(position.y / ${t.toFixed(2)}, 0.0, 1.2), 2.0) * ${e.toFixed(3)} * windStrength;
          transformed.x += (sin(windTime * ${i.toFixed(2)} + phase) + 0.4 * sin(windTime * ${(i*2.3).toFixed(2)} + phase * 1.7)) * k;
          transformed.z += cos(windTime * ${(i*.8).toFixed(2)} + phase * 1.3) * k * 0.6;
        }`)},s.customProgramCacheKey=()=>`wind-${t}-${e}-${i}-${a}`,s}var ke=class{constructor({count:t=6e3,inside:e,avoid:i,seed:s=7,heightScale:a=1}){let o=new Ct,r=4,l=[],c=[],d=[];for(let w=0;w<=r;w++){let g=w/r,C=.045*(1-g)**.9;l.push(-C,g,.03*g*g,C,g,.03*g*g),d.push(g,g)}for(let w=0;w<r;w++){let g=w*2;c.push(g,g+1,g+3,g,g+3,g+2)}o.setAttribute("position",new Rt(l,3)),o.setAttribute("normal",new Rt(l.map((w,g)=>g%3===1?1:0),3)),o.setAttribute("h",new Rt(d,1)),o.setIndex(c);let n=new Tt({color:"#ffffff",roughness:.85,side:At});n.onBeforeCompile=w=>{w.uniforms.windTime=kt.time,w.uniforms.windStrength=kt.strength,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
attribute float h; varying float vH; uniform float windTime; uniform float windStrength;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vH = h;
          vec3 base = instanceMatrix[3].xyz;
          float phase = base.x * 0.45 + base.z * 0.31;
          float gust = sin(windTime * 0.6 + base.x * 0.08) * 0.5 + 0.5;
          float bend = (sin(windTime * 2.1 + phase) * 0.6 + gust * 0.8) * windStrength * h * h;
          transformed.x += bend * 0.18; transformed.z += cos(windTime * 1.7 + phase) * 0.06 * h * h * windStrength;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);"),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying float vH;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(0.45, 1.15, vH);`)},n.customProgramCacheKey=()=>"grass";let h=new ge(o,n,t),u=Xt(s),M=new K,y=new bt,A=new f,R=new f,_=new S,z=["#4f8c36","#63a042","#7cb24d","#8fbd55","#5a9438","#a3c761"].map(w=>new S(w)),D=0;for(let w=0;D<t&&w<t*8;w++){let g=(u()-.5)*2,C=(u()-.5)*2;if(g*g+C*C>1)continue;let U=g*e.rx,T=C*e.rz;if(i(U,T))continue;let H=Math.sin(U*.9)*Math.cos(T*1.1)*.5+.5;if(u()>.35+H*.65)continue;let P=Math.hypot(g,C);R.set(U,e.y(U,T),T),y.setFromAxisAngle(new f(0,1,0),u()*Math.PI*2);let k=(.18+u()*.28)*a*(1-Math.max(0,P-.9)*3);A.set(.8+u()*.6,Math.max(.05,k),1),M.compose(R,y,A),h.setMatrixAt(D,M),_.copy(z[Math.floor(u()*z.length)]).multiplyScalar(.9+u()*.2),h.setColorAt(D,_),D++}h.count=D,h.castShadow=!1,h.receiveShadow=!0,h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,this.mesh=h}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose()}};var oi=new Set(["wave","eat","cheer","hop"]),_e=class{constructor(t,e){this.name=e;let{root:i,clips:s}=t.friend(e);this.root=new et,this.root.name=`friend-${e}`,this.model=i,this.root.add(i),i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1)}),this.mixer=new Oi(i),this.actions=new Map;for(let[a,o]of s){let r=this.mixer.clipAction(o);oi.has(a)&&(r.setLoop(Mi,1),r.clampWhenFinished=!1),this.actions.set(a,r)}this.bones={},i.traverse(a=>{a.isBone&&(this.bones[a.name.slice(e.length+1)]=a)}),this.state="idle",this.current=null,this.blinkTimer=1+Math.random()*3,this.blink=0,this.look=new x,this.lookTarget=null,this.path=null,this.speed=1.3,this.facing=0,this.heading=0,this.mixer.addEventListener("finished",a=>{this.current===a.action&&this.play(this.path?"walk":this.rest,.25)}),this.rest="idle",this.play("idle",0),this.mixer.setTime(Math.random()*2)}play(t,e=.2){let i=this.actions.get(t);i&&(this.current===i&&!oi.has(t)||(i.reset().setEffectiveWeight(1).setEffectiveTimeScale(1).play(),this.current&&this.current!==i?this.current.crossFadeTo(i,e,!1):e&&i.fadeIn(e),this.current=i,this.state=t))}walk(t,{face:e,done:i,speed:s=1.3}={}){this.path=t.map(a=>a.clone()),this.speed=s,this.pathDone=i,this.pathFace=e,this.play("walk",.2)}place(t,e=0){this.root.position.copy(t),this.heading=e,this.root.rotation.y=e,this.path=null}lookAt(t){this.lookTarget=t?t.clone():null}update(t,e=!1){if(this.path?.length){let a=this.path[0],o=this.root.position,r=new f(a.x-o.x,0,a.z-o.z),l=r.length();if(l<.05)this.path.shift(),this.path.length||(this.path=null,this.pathFace!==void 0&&(this.faceTarget=this.pathFace),this.play(this.rest,.3),this.pathDone?.());else{let c=Math.min(l,this.speed*t);o.addScaledVector(r.normalize(),c),this.faceTarget=Math.atan2(r.x,r.z)}}if(this.ground&&(this.root.position.y=this.ground(this.root.position.x,this.root.position.z)),this.faceTarget!==void 0){let a=this.faceTarget-this.heading;a=Math.atan2(Math.sin(a),Math.cos(a)),this.heading+=a*Math.min(1,t*7),this.root.rotation.y=this.heading}this.mixer.update(t),this.blinkTimer-=t,this.blinkTimer<=0&&(this.blink=.16,this.blinkTimer=2+Math.random()*4+(Math.random()<.2?-1.6:0));let i=this.bones.eyes;if(i){this.blink=Math.max(0,this.blink-t);let a=this.blink>0?Math.abs(Math.sin(this.blink/.16*Math.PI)):0;i.scale.y=1-.9*a}let s=this.bones.head;if(s&&!e){let a=0,o=0;if(this.lookTarget&&!this.path){let l=s.getWorldPosition(new f),c=this.root.worldToLocal(this.lookTarget.clone()).sub(this.root.worldToLocal(l.clone()));a=j(Math.atan2(c.x,c.z),-.8,.8),o=j(Math.atan2(-c.y,Math.hypot(c.x,c.z)),-.3,.45)}this.look.x=G(this.look.x,a,t,.12),this.look.y=G(this.look.y,o,t,.12);let r=new bt().setFromEuler(new te(this.look.y,this.look.x,0,"YXZ"));s.quaternion.multiply(r)}}react(t){this.path||this.play(t,.12)}setRest(t){this.rest=t,!this.path&&!oi.has(this.state)&&this.play(t,.3)}};var it=Math.PI*2,Lt=.1,vs=.95,Ki=.36,Xi={rx:10.8,rz:8.3},$i=["pip","momo","nori","juniper","bramble"],Zi={vertexShader:"varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform vec3 color; uniform float opacity, time, width, dashes, pulse; varying vec2 vUv;
    void main(){
      float r = length(vUv);
      float ring = smoothstep(1.0 - width, 1.0 - width * 0.5, r) * (1.0 - smoothstep(0.97, 1.0, r));
      float glow = exp(-pow((r - (1.0 - width * 0.5)) * 7.0, 2.0)) * 0.35;
      float a = atan(vUv.y, vUv.x);
      float dash = dashes > 0.0 ? step(0.0, sin(a * dashes + time * 2.0)) : 1.0;
      float p = 1.0 + pulse * 0.35 * sin(time * 6.0);
      float alpha = (ring * dash + glow) * opacity * p;
      if (alpha < 0.005) discard;
      gl_FragColor = vec4(color * (1.4 + glow * 2.0), alpha);
    }`};function ri(p="#ffd978",{width:t=.16,dashes:e=0,pulse:i=1}={}){let s=new X(new ie(2,2),new I({uniforms:{color:{value:new S(p)},opacity:{value:1},time:{value:0},width:{value:t},dashes:{value:e},pulse:{value:i}},vertexShader:Zi.vertexShader,fragmentShader:Zi.fragmentShader,transparent:!0,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.renderOrder=3,s.visible=!1,s}function gs(){let p=document.createElement("canvas");p.width=p.height=64;let t=p.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(.6,"rgba(0,0,0,.18)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new ee(p);return i.colorSpace=zt,i}function ws(){let p=document.createElement("canvas");p.width=p.height=64;let t=p.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,248,220,1)"),e.addColorStop(.18,"rgba(255,214,140,.7)"),e.addColorStop(.5,"rgba(255,170,80,.18)"),e.addColorStop(1,"rgba(255,150,60,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new ee(p);return i.colorSpace=zt,i}function Es(){let p=document.createElement("canvas");p.width=64,p.height=128;let t=p.getContext("2d"),e=t.createRadialGradient(32,92,2,32,80,60);e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,200,90,.95)"),e.addColorStop(.55,"rgba(255,120,40,.55)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(32,4),t.bezierCurveTo(52,50,60,80,54,100),t.bezierCurveTo(46,124,18,124,10,100),t.bezierCurveTo(4,80,12,50,32,4),t.fill();let i=new ee(p);return i.colorSpace=zt,i}var Ji=class{constructor(t,e,i,s,{quality:a="high",insets:o=null}={}){this.playSafe=o,this.canvas=t,this.state=e,this.callbacks=i,this.library=s,this.skyLanterns=[],this.time=0,this.paused=!1,this.selection=null,this.drag=null,this.safe={top:0,right:0,bottom:0,left:0},this.frame={width:14,depth:9.8},this.fruits=new Map,this.ghosts=[],this.targetIds=new Set,this.hintIds=new Set,this.touchDevice=matchMedia("(pointer: coarse)").matches,this.mode="play",this.view=new Se(t,{quality:a,preserve:!1}),$t[a].physical||s.simplifyMaterials(),this.renderer=this.view.renderer,this.scene=new me,this.rig=new Ce,this.camera=this.rig.camera,this.view.attach(this.scene,this.camera),this.tod=new Re(this.renderer,this.scene),this.tod.setShadowSize(this.view.quality.shadow),this.world=new et,this.world.name="diorama",this.scene.add(this.world),this.props=new et,this.props.name="props",this.scene.add(this.props),this.fx=new et,this.fx.name="fx",this.scene.add(this.fx),this.sparkles=new Pe(1800),this.fx.add(this.sparkles.points),this.fireflies=new ce({count:260,color:"#e9ff9a",area:[26,3.2,20],centre:[0,1.5,-1]}),this.motes=new ce({count:140,color:"#fff3c8",area:[24,5,16],centre:[0,2.2,0],blinkRate:0}),this.flutter=new He(420),this.fx.add(this.fireflies.points,this.motes.points,this.flutter.mesh),this.setBudget(),this.raycaster=new Je,this.pointer=new x,this.plane=new ki(new f(0,1,0),-.09),this.ring=ri("#ffdc78",{width:.14}),this.reachRing=ri("#fff2c9",{width:.05,dashes:18,pulse:0}),this.reachRing.material.uniforms.opacity.value=.5,this.groupRings=[],this.hintRings=[],this.fx.add(this.ring,this.reachRing),this.shadowTex=gs(),this.glowTex=ws(),this.heldShadow=new X(new ie(1,1),new pe({map:this.shadowTex,transparent:!0,depthWrite:!1})),this.heldShadow.rotation.x=-Math.PI/2,this.heldShadow.renderOrder=2,this.heldShadow.visible=!1,this.fx.add(this.heldShadow),this.buildProps(),this.applyLooks(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t.parentElement),this.resize(),this.setChapterLook(!0),this.sync(!0),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r),{passive:!1}),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>{this.drag?.pointerId===r.pointerId&&this.cancel()}),t.addEventListener("lostpointercapture",r=>{this.drag?.pointerId===r.pointerId&&this.cancel()}),t.addEventListener("contextmenu",r=>r.preventDefault()),t.addEventListener("keydown",r=>this.key(r)),t.addEventListener("pointermove",r=>this.hover(r)),window.addEventListener("blur",()=>this.cancel()),this.last=performance.now(),this.raf=requestAnimationFrame(r=>this.animate(r))}get quiet(){return!!this.state.reducedMotion||!!this.systemQuiet}setBudget(){let t=this.view.quality;this.sparkles.budget=t.particles*(this.touchDevice?.7:1),this.flutter.budget=t.particles}setQuality(t){this.view.setQuality(t),this.tod.setShadowSize(this.view.quality.shadow),this.setBudget(),this.buildBoard(!0),this.resize()}world3(t,e=Lt){return new f((t.x-.5)*this.frame.width,e,(t.y-.5)*this.frame.depth)}world(t,e){return this.world3(t,e)}normalized(t){return{x:t.x/this.frame.width+.5,y:t.z/this.frame.depth+.5}}project(t,e=.1){let i=this.world3(t,e).project(this.camera);return{x:(i.x*.5+.5)*this.canvas.clientWidth,y:(-.5*i.y+.5)*this.canvas.clientHeight}}projectWorld(t){let e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*this.canvas.clientWidth,y:(-.5*e.y+.5)*this.canvas.clientHeight,visible:e.z<1}}headPoint(t){let e=this.characters.get(t);if(!e?.root.visible)return null;let i=e.root.position.clone();return i.y+=2.3*e.root.scale.y,this.projectWorld(i)}get mobile(){return this.frame.width<10}buildProps(){let t=this.library;this.basket=t.clone("basket"),this.plate=t.clone("plate"),this.stick=t.clone("skewer"),this.threaded=new et,this.plateFood=new et,this.props.add(this.basket,this.plate,this.stick,this.threaded,this.plateFood),this.cloth=t.clone("cloth"),this.cloth.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),this.props.add(this.cloth),this.characters=new Map;for(let e of $i){let i=new _e(t,e);i.root.visible=!1,i.ground=(s,a)=>this.groundAt(s,a),this.characters.set(e,i),this.scene.add(i.root)}this.lanterns=[];for(let e=0;e<li.length;e++){let i=t.clone("lantern");i.traverse(o=>{o.isMesh&&(o.material=[o.material].flat().map(r=>{let l=r.clone();return l.userData.owned=!0,l}),o.material.length===1&&(o.material=o.material[0]))});let s=new Vt("#ffb35c",0,3.4,1.8);s.position.y=.45;let a=new Ht(new Pt({map:this.glowTex,color:"#ffe2a8",transparent:!0,depthWrite:!1,blending:Y}));a.position.y=.46,a.scale.setScalar(1.8),a.material.opacity=0,i.add(s,a),this.lanterns.push({lamp:i,light:s,glow:a,lit:0,target:0,flicker:Math.random()*10}),this.props.add(i)}this.fire={light:new Vt("#ff8a3d",0,9,1.5),on:0,flames:[]},this.scene.add(this.fire.light),this.picnicLight=new Vt("#ffc98c",0,26,1.1),this.picnicLight.position.set(0,6.5,1.2),this.scene.add(this.picnicLight),this.flameTex=Es()}buildBoard(t=!1){let e=`${this.frame.width}x${this.frame.depth}:${this.view.qualityKey}`;if(e===this.boardKey&&!t)return;this.boardKey=e,this.library.disposeClone(this.world),this.world.clear();let i=this.library,s=this.frame.width,a=this.frame.depth,o=Math.max(.62,s/14*1.02),r=a/9.8;this.islandScale={x:o,z:r};let l=Xi.rx*o,c=Xi.rz*r;this.islandRadius={rx:l,rz:c};let d=i.clone("island");d.scale.set(o,1,r),d.traverse(m=>{m.isMesh&&(m.castShadow=!1)}),this.world.add(d),this.cloth.scale.set(s/14,1,a/9.8),this.sampleGround(d,l,c);let n=Xt(1234),h=(m,v,E=.9)=>(m/l)**2+(v/c)**2<E*E,u=(m,v,E=.35)=>Math.abs(m)<s/2+E&&Math.abs(v)<a/2+E,M=[],y=(m,v,E)=>M.every(b=>Math.hypot(b.x-m,b.z-v)>b.r+E),A=(m,v,E)=>M.push({x:m,z:v,r:E});this.layoutSeats();for(let m of[...this.seats,this.guestSeat,...this.pathPoints])A(m.x,m.z,.8);let R=this.spots={campfire:new f(-s/2-(this.mobile?1.2:2.1),0,this.mobile?-a/2-1.5:-1.2),book:new f(this.mobile?s/2-.9:s/2+1.3,0,this.mobile?-a/2-1.1:1.9),tea:new f(this.mobile?-s/2+1.2:-s/2+1.6,0,-a/2-1),pond:new f(this.mobile?-s/2+.6:-s/2-1.75,0,this.mobile?a/2+1.9:a/2-2.3)};for(let[m,v]of Object.entries(R)){A(v.x,v.z,m==="pond"?1.6:1);let E=this.groundAt(v.x,v.z);if(m==="pond")for(let b=0;b<it;b+=it/12)for(let V of[.5,1,1.35])E=Math.max(E,this.groundAt(v.x+Math.cos(b)*V*1.3,v.z+Math.sin(b)*V*.9));v.y=E+(m==="pond"?.03:-.01)}let _={tree_oak:[],tree_pine:[],tree_birch:[],tree_blossom:[]},z=Object.keys(_),D=(m,v,E)=>{let b=z[Math.floor(n()*z.length)];_[b].push(new K().compose(new f(m,this.groundAt(m,v)-.06,v),new bt().setFromAxisAngle(new f(0,1,0),n()*it),new f(E,E*(.9+n()*.25),E))),A(m,v,1.3*E)};for(let m=0;m<60&&_.tree_oak.length+_.tree_pine.length+_.tree_birch.length+_.tree_blossom.length<(this.mobile?12:17);m++){let v=Math.PI*(1.02+n()*.96),E=.72+n()*.22,b=Math.cos(v)*l*E,V=Math.sin(v)*c*E;V>-a/2+.6&&Math.abs(b)<s/2+1.4||u(b,V,1.2)||!y(b,V,1.1)||D(b,V,.85+n()*.45)}for(let[m,v]of Object.entries(_)){if(!v.length)continue;let E=i.instanced(m,v,{material:b=>b.name==="canopy"||b.name==="leaves"?ai(b,{height:4.5,amount:.16,frequency:1.1}):b});this.world.add(E)}let w=(m,v,{min:E=.8,max:b=1.2,radius:V=.5,band:F=[.5,.97],avoidCloth:N=.5,front:at=!0,shadow:fe=!0}={})=>{let gt=[];for(let q=0;q<v*12&&gt.length<v;q++){let _t=n()*it,Dt=F[0]+n()*(F[1]-F[0]),ot=Math.cos(_t)*l*Dt,$=Math.sin(_t)*c*Dt;if(!at&&$>a/2||u(ot,$,N)||!y(ot,$,V)||!h(ot,$,.96))continue;let wt=E+n()*(b-E);gt.push(new K().compose(new f(ot,this.groundAt(ot,$)-.02,$),new bt().setFromAxisAngle(new f(0,1,0),n()*it),new f(wt,wt,wt))),A(ot,$,V*wt)}gt.length&&this.world.add(i.instanced(m,gt,{castShadow:fe,material:q=>q.name==="canopy"||q.name==="foliage"||q.name==="leaves"?ai(q,{height:1.2,amount:.05,frequency:1.7}):q}))},g=this.mobile?.6:1;w("bush",Math.round(7*g),{radius:.7,front:!1}),w("bush_berry",Math.round(4*g),{radius:.7,front:!1}),w("bush_flower",Math.round(5*g),{radius:.7}),w("rock_0",Math.round(4*g),{radius:.6,min:.6,max:1.1}),w("rock_1",Math.round(3*g),{radius:.5,min:.5,max:1}),w("rock_2",Math.round(2*g),{radius:.8,min:.6,max:.9,front:!1}),w("fern",Math.round(10*g),{radius:.5,min:.7,max:1.2}),w("mushrooms",Math.round(6*g),{radius:.35,min:.45,max:.75,avoidCloth:.9}),w("log",this.mobile?0:1,{radius:1.2,front:!1});for(let m of["flower_daisy","flower_bell","flower_tulip","flower_sun"])w(m,Math.round(14*g),{radius:.12,min:.8,max:1.3,band:[.3,.98],avoidCloth:.25,shadow:!1});w("tuft",Math.round(30*g),{radius:.1,min:.8,max:1.5,band:[.2,.99],avoidCloth:.1,shadow:!1});let C=i.clone("pond");C.position.copy(R.pond),C.scale.setScalar(this.mobile?.8:1.1),this.world.add(C),this.water=this.makeWater(),this.water.position.copy(R.pond).setY(R.pond.y-.03*C.scale.y),this.water.scale.set(1.25*1.02*C.scale.x,1,.85*1.02*C.scale.z),this.world.add(this.water),this.campfire=i.clone("campfire"),this.campfire.position.copy(R.campfire),this.world.add(this.campfire),this.fire.flames=[0,1,2,3].map(m=>{let v=new Ht(new Pt({map:this.flameTex,color:"#ffffff",transparent:!0,depthWrite:!1,blending:Y,opacity:0}));return v.center.set(.5,.05),v.position.copy(R.campfire).add(new f((m-1.5)*.09,.12,(m%2-.5)*.08)),v.userData.phase=m*1.7,this.world.add(v),v}),this.fire.light.position.copy(R.campfire).add(new f(0,.8,0));let U=[];for(let m=0;m<this.pathPoints.length-1;m++){let v=this.pathPoints[m],E=this.pathPoints[m+1],b=Math.max(1,Math.floor(v.distanceTo(E)/.8));for(let V=0;V<b;V++){let F=v.clone().lerp(E,(V+.5)/b);u(F.x,F.z,.1)||U.push(new K().compose(F.setY(this.groundAt(F.x,F.z)-.01),new bt().setFromAxisAngle(new f(0,1,0),n()*it),new f(1,1,1).multiplyScalar(.8+n()*.3)))}}U.length&&this.world.add(i.instanced("stone_step",U,{castShadow:!1}));let T=-a/2-.75,H=s/2-.4;for(let m of[-1,1]){let v=i.clone("post");v.position.set(m*H,this.groundAt(m*H,T)-.03,T),v.rotation.y=m<0?Math.PI:0,this.world.add(v)}let P=m=>new f(m*(H-.2),2.8+this.groundAt(m*H,T),T),k=P(-1),B=P(1),ut=this.mobile?.55:.8,pt=new we(Array.from({length:9},(m,v)=>{let E=v/8;return k.clone().lerp(B,E).setY(k.y-Math.sin(E*Math.PI)*ut)}));this.world.add(new X(new $e(pt,60,.014,5,!1),new Tt({color:"#4a3a2a",roughness:.9}))),this.lanterns.forEach((m,v)=>{let E=.12+v*(.76/(this.lanterns.length-1)),b=pt.getPoint(E);m.lamp.position.set(b.x,b.y-1.02*.85,b.z),m.lamp.scale.setScalar(.85),m.anchor=b.clone()}),this.bunting=new et;let lt=new we(Array.from({length:9},(m,v)=>{let E=v/8;return k.clone().lerp(B,E).setY(k.y-.55-Math.sin(E*Math.PI)*ut*.8)}));this.bunting.add(new X(new $e(lt,60,.01,4,!1),new Tt({color:"#6b5a48",roughness:.9})));let mt=["#ef6f6c","#ffd166","#7ccba2","#8ab4f8","#f4a6c8","#ffffff"],vt=Math.round(s*1.6),L=i.parts("bunting_flag");for(let m=0;m<vt;m++){let v=(m+.5)/vt,E=lt.getPoint(v),b=lt.getTangent(v);for(let V of L){let F=new Tt({color:mt[m%mt.length],roughness:.8,side:At}),N=new X(V.geometry,F);N.position.copy(E),N.rotation.y=-Math.atan2(b.z,b.x),N.scale.setScalar(this.mobile?.8:1),N.userData.sway=m,this.bunting.add(N)}}this.world.add(this.bunting),this.tea=i.clone("teapot"),this.tea.position.copy(R.tea),this.tea.scale.setScalar(.62),this.tea.rotation.y=.5,this.world.add(this.tea),this.book=i.clone("storybook"),this.book.position.copy(R.book),this.book.scale.setScalar(.85),this.book.rotation.y=-.4,this.world.add(this.book),this.jarLight=new Vt("#9fc4ff",0,4,1.8),this.jarLight.position.copy(R.book).add(new f(.7,.5,0)),this.world.add(this.jarLight);let ht=this.view.quality,ct=(m,v)=>u(m,v,.15)||M.some(E=>E.r>.9&&Math.hypot(E.x-m,E.z-v)<E.r*.6)||Math.hypot(m-R.pond.x,v-R.pond.z)<1.5||Math.hypot(m-R.campfire.x,v-R.campfire.z)<.7;this.grass=new ke({count:Math.round(ht.grass*(this.mobile?.6:1)),inside:{rx:l*.985,rz:c*.985,y:(m,v)=>this.groundAt(m,v)-.01},avoid:ct,heightScale:1}),this.world.add(this.grass.mesh);let st=this.tod.sun.shadow.camera;Object.assign(st,{left:-l-1,right:l+1,top:c+2,bottom:-c-2}),st.updateProjectionMatrix(),this.updateKeepsakes(!0)}sampleGround(t,e,i){t.updateMatrixWorld(!0);let s=[];t.traverse(n=>{n.isMesh&&n.material?.name==="turf"&&s.push(n)});let a=64,o=48,r=new Float32Array((a+1)*(o+1)),l=new Je,c=new f(0,-1,0),d=new f;for(let n=0;n<=o;n++)for(let h=0;h<=a;h++){d.set((h/a-.5)*2*e,4,(n/o-.5)*2*i),l.set(d,c);let u=l.intersectObjects(s,!1)[0];r[n*(a+1)+h]=u?u.point.y:-.2}this.groundField={nx:a,nz:o,rx:e,rz:i,heights:r}}groundAt(t,e){let i=this.frame.width,s=this.frame.depth;if(Math.abs(t)<=i/2&&Math.abs(e)<=s/2)return .07;let a=this.groundField;if(!a)return 0;let o=j(t/(2*a.rx)+.5,0,1)*a.nx,r=j(e/(2*a.rz)+.5,0,1)*a.nz,l=Math.min(a.nx-1,Math.floor(o)),c=Math.min(a.nz-1,Math.floor(r)),d=o-l,n=r-c,h=a.nx+1,u=a.heights;return(u[c*h+l]*(1-d)+u[c*h+l+1]*d)*(1-n)+(u[(c+1)*h+l]*(1-d)+u[(c+1)*h+l+1]*d)*n}makeWater(){if(!this.rippleMap){let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),a=s.createImageData(128,128);for(let o=0;o<128;o++)for(let r=0;r<128;r++){let l=r/128*it,c=o/128*it,d=Math.cos(l*3+c)*.5+Math.cos(l*5-c*2)*.3+Math.sin(l*2+c*4)*.2,n=Math.cos(c*3-l)*.5+Math.sin(c*5+l*2)*.3+Math.cos(c*2-l*3)*.2,h=(o*128+r)*4;a.data[h]=128+d*50,a.data[h+1]=128+n*50,a.data[h+2]=255,a.data[h+3]=255}s.putImageData(a,0,0),this.rippleMap=new ee(i),this.rippleMap.wrapS=this.rippleMap.wrapT=yt,this.rippleMap.repeat.set(3,3)}let t=new X(new Di(1,64).rotateX(-Math.PI/2),new Vi({color:"#3f7f96",roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.82,normalMap:this.rippleMap,normalScale:new x(.25,.25),envMapIntensity:1.5}));return t.receiveShadow=!0,t.renderOrder=1,t}layoutSeats(){let t=this.frame.width,e=this.frame.depth,i=this.world3({x:.91,y:.89},0);this.guestSeat=i,this.mobile?(this.seats=[-2.5,-.85,.85,2.5].map(s=>new f(s*t/7.4,0,-e/2-1.05)),this.entry=new f(t/2+1.6,0,e/2+1.4),this.pathPoints=[this.entry,new f(t/2+.7,0,e/2+.6),i],this.detour=[new f(t/2+.75,0,e/2+.3),new f(t/2+.75,0,-e/2-1.05)]):(this.seats=[new f(t/2+1.05,0,.7),new f(t/2+1.35,0,-2.5),new f(-t/2-1.15,0,-2.2),new f(-t/2-1.2,0,1.3)],this.entry=new f(t/2+3.4,0,e/2+.9),this.pathPoints=[this.entry,new f(t/2+1.6,0,e/2+.2),i],this.detour=[new f(i.x,0,e/2+.75),new f(-t/2-.9,0,e/2+.75)])}friendScale(){return this.mobile?.68:.98}titlePose(t="title"){let e=this.rig.base,i=this.frame.depth;return t==="ending"?{...e,target:new f(0,1.4,-i*.25),distance:e.distance*.8,pitch:St.degToRad(26),offset:new x}:t==="festival"?{...e,target:new f(0,3.4,-i*.6),distance:e.distance*1.05,pitch:St.degToRad(12),offset:new x}:{...e,target:new f(0,1.1,-i*.2),distance:e.distance*(this.mobile?.8:.62),pitch:St.degToRad(this.mobile?30:21),offset:new x}}setChapterLook(t=!1){let e=this.state.journey.status==="complete"?"night":Yi[this.state.journey.chapter]||"afternoon";this.tod.go(e,t||this.quiet?0:5),this.callbacks.onTime?.(e)}placeCast({walkIn:t=!1}={}){let e=this.state.journey,i=this.friendScale(),s=We(this.state).model,a=e.status==="complete";$i.forEach((o,r)=>{let l=this.characters.get(o);l.root.scale.setScalar(i);let c=o===s&&!a,d=r<e.chapter||a&&r<=e.chapter;if(l.root.visible=c||d,!!l.root.visible)if(c)t&&!this.quiet?(l.place(this.entry,-Math.PI/2),l.walk(this.pathPoints.slice(1),{face:-.35,speed:1.6,done:()=>{l.react("wave"),this.callbacks.onArrive?.(o)}})):l.place(this.guestSeat,-.35),l.setRest("idle");else{let n=this.seats[r]||this.seats[this.seats.length-1],h=Math.atan2(-n.x,-n.z)*.9;if(t&&!this.quiet&&r===e.chapter-1&&!a){l.place(this.guestSeat,-.35);let u=this.mobile?[...this.detour,n]:n.x<0?[...this.detour,n]:[new f(n.x,0,this.guestSeat.z+.4),n];l.walk(u,{face:h,speed:2.1})}else l.path||l.place(n,h);l.setRest("idle")}}),this.guest=a?null:this.characters.get(s),this.placeBrambleLantern()}updateKeepsakes(t=!1){let e=this.state.journey,i=e.completed,s=(a,o)=>{a&&(o&&!a.visible&&!t&&this.sparkles.rise(a.position.clone().add(new f(0,.5,0)),{count:20,color:"#fff0b0"}),a.visible=o)};s(this.tea,i.includes(1)),s(this.bunting,i.includes(2)),s(this.book,i.includes(3)),this.jarTarget=i.includes(3)?1:0,this.lanterns.forEach((a,o)=>{a.target=i.includes(o)?1:0,t&&(a.lit=a.target)}),this.fireTarget=e.chapter>=3||e.status==="complete"?1:0,this.campfire&&(this.campfire.visible=!0)}setSafeArea(t,e=t){this.safe=t,this.playSafe=e;let i=this.frameFor(this.canvas.clientWidth,this.canvas.clientHeight);!this.boardKey||i.width!==this.frame.width||i.depth!==this.frame.depth?this.resize():this.frameCamera(!0)}frameFor(t,e){let i=this.playSafe||{top:0,right:0,bottom:0,left:0},s=Math.max(160,t-i.left-i.right),a=Math.max(160,e-i.top-i.bottom),o=r=>Math.round(r*5)/5;return(t<700||e<520)&&s/a<1.25?{width:7.4,depth:Math.min(11.8,Math.max(8.8,o(a/s*7.4*1.05)))}:t<700||e<520?{width:Math.min(14,Math.max(9,o(s/a*6.4*.95))),depth:6.4}:{width:14,depth:9.8}}resize(){let t=this.canvas.clientWidth,e=this.canvas.clientHeight;if(!t||!e)return;let i={...this.frame};this.frame=this.frameFor(t,e),this.view.resize(t,e),this.sparkles.setViewport(e,this.view.pixelRatio),this.fireflies.setViewport(e,this.view.pixelRatio),this.motes.setViewport(e,this.view.pixelRatio);let s=i.width!==this.frame.width||i.depth!==this.frame.depth;(s||!this.boardKey)&&this.buildBoard(),s&&hi(this.state,this.frame)&&this.callbacks.onReseat?.(),this.layout(),this.frameCamera();for(let[a,o]of this.fruits){let r=this.state.fruits.find(l=>l.id===a);r&&o.pos.copy(this.world3(r))}this.cancel(),this.callbacks.onResize?.()}frameCamera(t=!1){let e=this.canvas.clientWidth,i=this.canvas.clientHeight,s=this.frame.width,a=this.frame.depth,o=this.safe,r=e<700||i<520,l=r?.08:.7,c=[];for(let h of[-s/2-l,s/2+l])c.push(new f(h,0,a/2+(r?.3:.9)),new f(h,0,-a/2-(r?.15:.5)));if(!r)for(let h of[-s/2+.2,s/2-.2])c.push(new f(h,3,-a/2-.75));c.push(this.guestSeat.clone().setY(r?1.1:1.6));let d={x:o.left,y:o.top,w:Math.max(120,e-o.left-o.right),h:Math.max(120,i-o.top-o.bottom)},n=r?e<i?62:54:46;this.rig.fit(c,e,i,d,{pitch:n,fov:this.mobile?34:28,smooth:t&&!this.quiet}),this.view.setFocus(this.rig.screenY(new f(0,0,.6)),this.mobile?.34:.3,2.4)}layout(){let t=this.mobile;this.layoutSeats(),this.basket.position.copy(this.world3(ni,.02)),this.basket.scale.setScalar(t?.8:1.05),this.basket.rotation.y=.12,this.plate.position.copy(this.world3(Oe,.06)),this.plate.scale.setScalar(t?.62:.88),this.stick.position.copy(this.world3(Ge,.05)),this.stick.scale.setScalar(t?.66:.96),this.threaded.position.copy(this.stick.position),this.threaded.scale.copy(this.stick.scale),this.plateFood.position.copy(this.plate.position),this.plateFood.scale.copy(this.plate.scale),this.placeCast()}makeFruit(t,{from:e,delay:i=0,pop:s=!1,delivery:a=!1}={}){let o=this.library.clone(`fruit_${t.level}`),r=new et;r.add(o);let l={id:t.id,level:t.level,holder:r,mesh:o,pos:(e||this.world3(t)).clone(),vel:new f,tilt:new x,squash:new qe(1,{stiffness:260,damping:11}),grow:new qe(s?0:1,{stiffness:170,damping:12}),phase:Math.random()*it,born:this.time+i,hop:0,delivery:a?{start:this.time+i,from:e.clone()}:null};return s&&(l.grow.target=1),r.position.copy(l.pos),r.rotation.y=(t.id*17%13-6)*.05,this.scene.add(r),this.fruits.set(t.id,l),l}removeFruit(t){this.scene.remove(t.holder)}choreograph(t){this.pending=t}sync(t=!1){let e=this.pending;this.pending=null;let i=new Set(this.state.fruits.map(r=>r.id));for(let[r,l]of[...this.fruits]){if(i.has(r))continue;this.fruits.delete(r);let c=null;e?.type==="merge"&&e.removed.includes(r)?c={to:this.world3(e.position,Lt),shrink:!0,duration:.2}:(e?.type==="serve"||e?.type==="share")&&e.fruit.id===r?c={to:this.plate.position.clone().add(new f(0,.35,0)),shrink:!0,duration:.42,arc:1.2}:e?.type==="skewer"&&e.fruit.id===r&&(c={to:this.skewerSlot(Math.min(2,this.state.journey.skewers?2:this.state.journey.skewer.length-1)),shrink:!1,duration:.38,arc:1}),c&&!this.quiet?this.ghosts.push({view:l,from:l.holder.position.clone(),...c,t:0}):this.removeFruit(l)}let s=new Set((e?.spawned||[]).map(r=>r.id)),a=new Set((e?.type==="merge"?e.outputs:[]).map(r=>r.id)),o=0;for(let r of this.state.fruits){let l=this.fruits.get(r.id);if(l){l.level!==r.level&&(this.removeFruit(l),this.fruits.delete(r.id),this.makeFruit(r,{pop:!t}));continue}if(t||this.quiet){this.makeFruit(r);continue}if(s.has(r.id))this.makeFruit(r,{from:this.basket.position.clone().add(new f(0,.9,0)),delay:.1+o++*.13,delivery:!0});else if(a.has(r.id)){let c=this.world3(e.position,Lt),d=e.outputs[0]&&r.id===e.outputs[0].id;this.makeFruit(r,{from:d?c:c.clone().lerp(this.world3(r),.3),delay:.18+(d?0:.08),pop:!0})}else this.makeFruit(r,{pop:!0})}this.syncServings(),this.updateKeepsakes(t)}skewerSlot(t){let e=new f(-.7+t*.7,Ki-.12,0);return this.stick.localToWorld(e)}syncServings(){let t=We(this.state),e=this.state.journey,i=`${e.chapter}:${e.skewer.join(",")}:${e.skewers}:${Object.values(e.served).join(",")}`;if(i===this.servingKey)return;this.servingKey=i,this.threaded.clear(),(e.skewers?[t.skewer,t.skewer,t.skewer]:e.skewer).forEach((a,o)=>{let r=this.library.clone(`fruit_${a}`);r.scale.setScalar(.5);let l=new Ci().setFromObject(r),c=(l.min.y+l.max.y)/2;r.position.set(-.7+o*.7,Ki-c,0),this.threaded.add(r)}),this.plateFood.clear();let s=t.orders.flatMap(a=>Array(e.served[a.level]||0).fill(a.level));s.forEach((a,o)=>{let r=this.library.clone(`fruit_${a}`);r.position.set((o-(s.length-1)/2)*.46,.12,o%2?.15:-.1),r.scale.setScalar(s.length===1?.66:.47),this.plateFood.add(r)})}feedback(t){if(!t?.ok)return;let e=this.quiet;if(t.type==="merge"){let i=this.world3(t.position,.35),s=Et[t.level].color,a=t.count-1+(t.chain-1)*1.5;e||(setTimeout(()=>{this.sparkles.burst(i,{color:s,count:26+a*18,speed:2.4+a*.5,size:.26}),this.sparkles.ring(this.world3(t.position,.12),{color:"#fff3c4",radius:.25,speed:2.6+a}),(t.chain>1||t.count>2)&&this.sparkles.burst(i,{palette:["#ffffff","#ffe08a",s],count:30,speed:4,size:.2,up:2})},180),t.bonus&&t.outputs.slice(1).forEach((o,r)=>setTimeout(()=>{let l=this.world3(o,.3);this.sparkles.ring(this.world3(o,.12),{color:"#ffe08a",radius:.15,speed:2.2,count:24}),this.sparkles.rise(l,{color:"#ffd35c",count:14,spread:.5,speed:1.4}),this.flutter.confetti(l,{count:18,spread:.3,speed:3,palette:["#ffd35c","#fff3c4","#ff9fb8"]})},320+r*140)),this.rig.shake(Math.min(.55,.12+a*.1)),t.chain>1&&(this.hitstop=.07)),(t.chain>1||t.count>3)&&this.cheerAll("hop")}else if(t.type==="serve")setTimeout(()=>{this.guest?.react("eat"),e||this.sparkles.rise(this.plate.position.clone().add(new f(0,.4,0)),{color:"#ff9fb8",count:14,spread:.6})},380);else if(t.type==="share")setTimeout(()=>{e||this.sparkles.rise(this.plate.position.clone().add(new f(0,.3,0)),{color:"#ffffff",count:6})},380);else if(t.type==="skewer")setTimeout(()=>{let i=this.skewerSlot(Math.max(0,this.state.journey.skewer.length-1));e||this.sparkles.burst(i,{color:"#ffe3a0",count:12,speed:1.2,size:.18,up:.8}),t.served&&(this.guest?.react("hop"),e||this.sparkles.burst(this.stick.position.clone().add(new f(0,.4,0)),{color:"#ffd166",count:40,speed:2.4}))},380);else if(t.type==="basket")this.basketBounce=this.time;else if(t.type==="move"){let i=this.fruits.get(t.fruit.id);i&&i.squash.kick(-3)}t.spawned?.length&&(this.basketBounce=this.time)}cheerAll(t){for(let e of this.characters.values())e.root.visible&&!e.path&&setTimeout(()=>e.react(t),Math.random()*200)}celebrate(t,{finale:e=!1}={}){let i=this.lanterns[t];if(this.updateKeepsakes(),i&&(i.lit=0,i.target=1),this.cheerAll("cheer"),this.quiet){i&&(i.lit=1);return}let s=i?i.lamp.position.clone().add(new f(0,.4,0)):new f;this.rig.pushTo(s.clone().add(new f(0,-.6,1.2)),{distance:this.mobile?.62:.5,duration:1.3,hold:2.4}),setTimeout(()=>{this.sparkles.burst(s,{color:"#ffcf6b",count:70,speed:3,size:.32,up:1}),this.sparkles.rise(s,{color:"#ffe7a8",count:24,spread:.6}),this.flutter.confetti(s.clone().setY(s.y+.2),{count:90,spread:.8,speed:4})},900),e&&this.finale()}finale(){if(this.quiet)return;this.finaleTime=this.time;let t=this.frame.width,e=this.frame.depth;for(let s=0;s<18;s++){let a=this.library.clone("sky_lantern");a.scale.setScalar(.9+Math.random()*.5);let o=new f((Math.random()-.5)*t*1.2,.3,(Math.random()-.5)*e*.9);a.position.copy(o),a.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.material=[l.material].flat().map(c=>{if(!c.name?.startsWith("paper"))return c;let d=c.clone();return d.color.copy(this.lanternPaper),d.emissive=this.lanternGlow.clone(),d.emissiveIntensity=1.4,d.userData.owned=!0,d}),l.material.length===1&&(l.material=l.material[0]))});let r=new Ht(new Pt({map:this.glowTex,color:"#ffc97a",transparent:!0,depthWrite:!1,blending:Y}));r.position.y=.35,r.scale.setScalar(1.15),r.material.opacity=.55,a.add(r),this.scene.add(a),this.skyLanterns.push({obj:a,start:o,delay:1.5+s*.35,speed:.55+Math.random()*.35,sway:Math.random()*it})}let i=this.state.journey;this.brambleLamp&&i.chapter===4&&!i.replay&&(this.brambleLamp.visible=!0,this.skyLanterns.push({obj:this.brambleLamp,start:this.brambleLamp.position.clone(),delay:.2,speed:.7,sway:0,keep:!0})),this.fireworks={until:this.time+14,next:this.time+2.5}}async warmUp(){try{await this.renderer.compileAsync?.(this.scene,this.camera)}catch{}await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t)))}applyLooks(){let t=Be(je(this.state,"blanket")),e=Be(je(this.state,"lantern"));this.lanternPaper=new S(e.look.paper),this.lanternGlow=new S(e.look.glow);for(let a of this.lanterns)a.light.color.copy(this.lanternGlow),a.glow.material.color.copy(this.lanternGlow).lerp(new S("#ffffff"),.35),a.lamp.traverse(o=>{if(o.isMesh)for(let r of[o.material].flat())r.name?.startsWith("paper")&&r.color.copy(this.lanternPaper)});let i=null;if(this.cloth.traverse(a=>{if(a.isMesh)for(let o of[a.material].flat())o.name==="gingham"&&o.map&&(i=o)}),!i)return;if(this.clothMap??=i.map,this.blanketId=t.id,t.id==="blanket-cornflower"){this.setClothMap(i,this.clothMap);return}this.blanketTextures??=new Map;let s=this.blanketTextures.get(t.id);if(s){this.setClothMap(i,s);return}new Ii().load(new URL(`./assets/lantern-picnic/${t.look.texture}`,document.baseURI).href,a=>{let o=this.clothMap;Object.assign(a,{flipY:o.flipY,wrapS:o.wrapS,wrapT:o.wrapT,colorSpace:o.colorSpace,anisotropy:o.anisotropy,channel:o.channel,rotation:o.rotation}),a.offset.copy(o.offset),a.repeat.copy(o.repeat),a.center.copy(o.center),a.needsUpdate=!0,this.blanketTextures.set(t.id,a),this.blanketId===t.id&&this.setClothMap(i,a)})}setClothMap(t,e){t.map!==e&&(t.map=e,t.needsUpdate=!0)}speak(t){this.speaker=t&&this.characters.get(t)?.root.visible?t:null;for(let i of this.characters.values())i.root.visible&&i.setRest(i.name===this.speaker?"talk":"idle");let e=this.speaker&&this.characters.get(this.speaker);return e?e.root.position.clone().setY(e.root.position.y+1.05*e.root.scale.y):null}answer(){this.clearAnswer();let t=this.answerLights=new et,e=Xt(99);for(let i=0;i<16;i++){let s=(e()-.5)*1.9,a=40+e()*50,o=new f(Math.sin(s)*a*1.2,-10+e()*11,-Math.cos(s)*a-14),r=3+Math.floor(e()*4);for(let l=0;l<r;l++){let c=new Ht(new Pt({map:this.glowTex,color:l?"#ffd9a0":"#fff2cf",transparent:!0,depthWrite:!1,blending:Y,opacity:0,fog:!1}));c.position.copy(o).add(new f((e()-.5)*4,e()*1.5,(e()-.5)*3)),c.scale.setScalar(l?1.6+e():3.2),c.userData={delay:.3+i*.35+l*.12,rise:.25+e()*.35,base:c.position.y,phase:e()*it},t.add(c)}}this.answerTime=this.time,this.scene.add(t)}resetFestival(){for(let t of this.skyLanterns)this.scene.remove(t.obj),this.library.disposeClone(t.obj);this.skyLanterns.length=0,this.fireworks=null,this.finaleTime=0,this.brambleLamp&&!this.brambleLamp.parent&&(this.brambleLamp=null),this.clearAnswer(),this.placeBrambleLantern()}clearAnswer(){this.answerLights&&(this.scene.remove(this.answerLights),this.answerLights.traverse(t=>t.material?.dispose?.()),this.answerLights=null),this.reply&&(this.scene.remove(this.reply.obj),this.library.disposeClone(this.reply.obj),this.reply=null)}sendReply(t){let e=this.library.clone("sky_lantern");e.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.material=[o.material].flat().map(r=>{if(!r.name?.startsWith("paper"))return r;let l=r.clone();return l.emissive=new S("#ffc46e"),l.emissiveIntensity=3,l.userData.owned=!0,l}),o.material.length===1&&(o.material=o.material[0]))});let i=new Ht(new Pt({map:this.glowTex,color:"#ffd28a",transparent:!0,depthWrite:!1,blending:Y}));i.position.y=.35,i.scale.setScalar(2.4),e.add(i);let s=this.plate.position.clone().add(new f(-.2,.25,-.9)),a=new we([new f(-26,16,-70),new f(-12,12,-34),new f(-3,7,-10),s.clone().add(new f(0,2.6,0)),s]);e.scale.setScalar(1.3),this.scene.add(e),this.reply={obj:e,curve:a,start:this.time,duration:this.quiet?.01:7.5,done:t,landed:!1}}placeBrambleLantern(){if(this.brambleLamp&&this.skyLanterns.some(s=>s.obj===this.brambleLamp))return;let t=this.state.journey,e=t.chapter===4&&t.status!=="complete";if(!this.brambleLamp){let s=this.library.clone("lantern");s.traverse(r=>{r.isMesh&&(r.material=[r.material].flat().map(l=>{if(!l.name?.startsWith("paper"))return l;let c=l.clone();return c.emissive=new S("#ffb85c"),c.emissiveIntensity=2.2,c.userData.owned=!0,c}).at(0))});let a=new Vt("#ffb35c",3,4,1.6);a.position.y=.5,s.add(a);let o=new Ht(new Pt({map:this.glowTex,color:"#ffe2a8",transparent:!0,depthWrite:!1,blending:Y,opacity:.7}));o.position.y=.46,o.scale.setScalar(1.4),s.add(o),s.scale.setScalar(.5),this.brambleLamp=s,this.scene.add(s)}let i=this.guestSeat;this.brambleLamp.position.set(i.x-.75,this.groundAt(i.x-.75,i.z+.2),i.z+.2),this.brambleLamp.visible=!!e}showHint(t){this.hintIds=new Set(t||[])}pointerPoint(t){let e=this.canvas.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2),this.raycaster.setFromCamera(this.pointer,this.camera);let i=new f;return this.raycaster.ray.intersectPlane(this.plane,i),this.normalized(i)}hit(t){this.pointerPoint(t);let e=[...this.fruits.values()].map(n=>n.holder),i=this.guest?.root.visible?[this.guest.root]:[],s=[...this.characters.values()].filter(n=>n.root.visible&&n!==this.guest).map(n=>n.root),a=[...e,this.basket,this.plate,...i,...s],o=this.raycaster.intersectObjects(a,!0);if(o.length){let n=o[0].object;for(;n.parent&&!a.includes(n);)n=n.parent;if(n===this.basket)return{type:"basket"};if(n===this.plate)return{type:"plate"};for(let h of this.characters.values())if(n===h.root)return{type:"friend",name:h.name};for(let h of this.fruits.values())if(h.holder===n)return{type:"fruit",id:h.id}}let r=this.canvas.getBoundingClientRect(),l=t.clientX-r.x,c=t.clientY-r.y,d=null;for(let n of this.state.fruits){let h=this.project(n,.6),u=Math.hypot(l-h.x,c-h.y);u<(t.pointerType==="touch"?30:25)&&(!d||u<d.dist)&&(d={type:"fruit",id:n.id,dist:u})}return d??{type:"floor"}}hover(t){if(t.pointerType==="touch")return;let e=this.canvas.getBoundingClientRect();if(this.rig.pointer((t.clientX-e.left)/e.width*2-1,(t.clientY-e.top)/e.height*2-1),this.drag||this.paused)return;let i=this.hit(t);this.hovered=i.type==="fruit"?i.id:null,this.canvas.style.cursor=["fruit","basket","friend"].includes(i.type)?"grab":""}start(t,e,i,s,a=!1){if(this.paused||this.drag||this.mode!=="play")return;if(this.state.journey.status!=="playing"){this.callbacks.onHint?.(this.state.journey.status==="complete"?"The festival glows on. Revisit any invitation from the Journey.":"Your lantern is lit. Open the next invitation.");return}if(t==="basket"){this.callbacks.onAdd?.();return}let o=this.state.fruits.find(c=>c.id===e);if(!o)return;let r=this.pointerPoint(i);this.selection={type:t,id:e,point:{x:o.x,y:o.y}},this.drag={pointerId:i.pointerId,startX:i.clientX,startY:i.clientY,moved:!1,fromSelection:a,offset:a?{x:0,y:0}:{x:o.x-r.x,y:o.y-r.y}},a&&(this.selection.point=s),this.canvas.setPointerCapture(i.pointerId),this.canvas.focus({preventScroll:!0}),this.canvas.classList.add("grabbing");let l=this.fruits.get(e);l&&(l.squash.kick(-4),l.grow.kick(2)),this.callbacks.onPick?.(t,e),this.updatePreview()}down(t){if(this.drag||t.button!==0||t.isPrimary===!1)return;if(this.mode!=="play"){this.callbacks.onSkip?.();return}if(this.paused)return;t.preventDefault();let e=this.pointerPoint(t),i=this.hit(t);if(this.selection){if(i.type==="fruit"&&i.id===this.selection.id){this.cancel();return}if(i.type==="basket"){this.cancel(),this.callbacks.onAdd?.();return}if(i.type==="friend"){this.characters.get(i.name)?.react("wave"),this.callbacks.onFriend?.(i.name);return}let s=this.selection;this.start(s.type,s.id,t,e,!0);return}i.type==="fruit"||i.type==="basket"?this.start(i.type,i.id,t,e):i.type==="plate"?this.callbacks.onHint?.("Drag the requested fruit to this plate. Other fruit can be shared to make room."):i.type==="friend"&&(this.characters.get(i.name).react(Math.random()<.5?"wave":"hop"),this.callbacks.onFriend?.(i.name))}move(t){if(!this.drag||this.drag.pointerId!==t.pointerId)return;t.preventDefault();let e=this.pointerPoint(t);this.drag.moved||=Math.hypot(t.clientX-this.drag.startX,t.clientY-this.drag.startY)>5,this.selection.point={x:e.x+this.drag.offset.x,y:e.y+this.drag.offset.y},this.updatePreview()}up(t){if(!this.drag||this.drag.pointerId!==t.pointerId)return;this.move(t);let{moved:e,fromSelection:i}=this.drag,s=this.selection;if(this.drag=null,this.canvas.classList.remove("grabbing"),this.canvas.hasPointerCapture(t.pointerId)&&this.canvas.releasePointerCapture(t.pointerId),!e&&!i){let a=this.state.fruits.find(o=>o.id===s.id);this.callbacks.onHint?.(Kt("{fruit} picked up. Tap a matching fruit, the plate, the skewer or a new spot.",{fruit:Kt(Et[a.level].name)}));return}this.selection=null,this.hideHighlights(),this.callbacks.onPreview?.(null),this.callbacks.onDrop?.(s.id,s.point)}updatePreview(){this.hideHighlights();let t=this.selection;if(!t){this.callbacks.onPreview?.(null);return}let e=this.state.fruits.find(s=>s.id===t.id),i=ci(this.state,t.id,t.point,this.frame);if(e&&!i&&(this.reachRing.visible=!0,this.reachRing.position.copy(this.world3(t.point,.13)),this.reachRing.scale.setScalar(Et[e.level].radius*2+.16)),i?.type==="merge")this.targetIds=new Set(i.removed),i.members.forEach((s,a)=>{if(!this.groupRings[a]){let r=ri("#ffd25c",{width:.2});this.fx.add(r),this.groupRings.push(r)}let o=this.groupRings[a];o.visible=!0,o.position.copy(this.world3(s,.12)),o.scale.setScalar(Et[s.level].radius+.2)});else if(i){let s=i.type==="serve"||i.type==="share"?this.plate.position:i.type==="skewer"||i.type==="wrong-skewer"?this.stick.position:this.world3(i.point);this.ring.visible=!0,this.ring.position.copy(s).setY(.16),this.ring.scale.setScalar(this.mobile?.85:1.15),this.ring.material.uniforms.color.value.set(i.type==="wrong-skewer"?"#ff8f7a":i.type==="share"?"#bfe3ff":"#ffd66b")}this.callbacks.onPreview?.(i)}hideHighlights(){this.ring.visible=!1,this.reachRing.visible=!1,this.targetIds.clear(),this.groupRings.forEach(t=>{t.visible=!1})}cancel(){let t=this.drag?.pointerId;this.drag=null,this.selection=null,this.hideHighlights(),this.canvas.classList.remove("grabbing"),t!==void 0&&this.canvas.hasPointerCapture(t)&&this.canvas.releasePointerCapture(t),this.callbacks.onPreview?.(null)}key(t){if(this.paused)return;let e=t.key.toLowerCase();if(t.repeat&&!e.startsWith("arrow")){t.preventDefault();return}if(this.mode!=="play"){[" ","enter","escape"].includes(e)&&(t.preventDefault(),this.callbacks.onSkip?.());return}if(!(this.state.journey.status!=="playing"&&e!=="u")){if(e==="escape"){this.cancel();return}if(e==="u"){t.preventDefault(),this.callbacks.onUndo?.();return}if(e==="b"){t.preventDefault(),this.callbacks.onAdd?.();return}if(this.selection?.type==="fruit"&&["t","k"].includes(e)){t.preventDefault();let i=this.selection.id;this.cancel(),this.callbacks.onDrop?.(i,e==="t"?Oe:Ge);return}if(e==="n"||e==="enter"&&!this.selection){t.preventDefault();let i=this.state.fruits,s=i.findIndex(o=>o.id===this.selection?.id),a=i[(s+1)%i.length];a&&(this.selection={type:"fruit",id:a.id,point:{x:a.x,y:a.y}},this.callbacks.onPick?.("fruit",a.id),this.callbacks.onHint?.(Kt("{fruit} picked up. Arrow keys move; Enter places; T serves; K threads.",{fruit:Kt(Et[a.level].name)})),this.updatePreview());return}if(this.selection&&["arrowleft","arrowright","arrowup","arrowdown"].includes(e)){t.preventDefault();let i=t.shiftKey?.7:.22;this.selection.point.x+=(e==="arrowright"?i:e==="arrowleft"?-i:0)/this.frame.width,this.selection.point.y+=(e==="arrowdown"?i:e==="arrowup"?-i:0)/this.frame.depth,this.updatePreview()}if(e==="enter"&&this.selection){t.preventDefault();let i=this.selection;this.cancel(),this.callbacks.onDrop?.(i.id,i.point)}}}get deliveries(){return[...this.fruits.values()].filter(t=>t.delivery).length+this.ghosts.length}animate(t){this.raf=requestAnimationFrame(n=>this.animate(n));let e=Math.max(0,Math.min((t-this.last)/1e3,.05));if(this.last=t,document.hidden)return;this.hitstop>0&&(this.hitstop-=e,e*=.15),this.time+=e;let i=this.time,s=this.quiet;kt.time.value=i,kt.strength.value=s?.2:1,this.tod.update(e,i);let a=this.tod.current;this.view.setGrade(a.grade,a.bloom);let o=this.selection?.type==="fruit"?this.selection.id:null;for(let n of this.state.fruits){let h=this.fruits.get(n.id);if(!h)continue;let u=o===n.id,M=u?this.selection.point:n,y=this.world3(M,u?vs:Lt),A=Et[n.level].radius*2;if(h.delivery&&!s&&!u){let P=j((i-h.delivery.start)/.7);if(P<=0){h.holder.visible=!1;continue}h.holder.visible=!0;let k=h.delivery.from;h.pos.lerpVectors(k,y,Q.outCubic(P)),h.pos.y+=Math.sin(P*Math.PI)*2,P>=1&&(h.delivery=null,h.squash.kick(-5),s||this.sparkles.ring(y.clone().setY(.12),{count:14,radius:.15,speed:1.6,size:.14,color:"#ffffff"}),this.callbacks.onLand?.(n))}else{if(i<h.born){h.holder.visible=!1;continue}h.holder.visible=!0;let P=h.pos.clone();h.pos.x=G(h.pos.x,y.x,e,u?.025:.06),h.pos.z=G(h.pos.z,y.z,e,u?.025:.06);let k=h.pos.y>Lt+.3;h.pos.y=G(h.pos.y,y.y,e,u?.05:.045),!u&&k&&h.pos.y<Lt+.08&&(h.squash.kick(-6),this.callbacks.onSettle?.(n)),h.vel.subVectors(h.pos,P).divideScalar(Math.max(e,1e-4))}h.holder.position.copy(h.pos),h.squash.target=1,h.grow.target=1;let R=h.squash.update(e),_=Math.max(0,h.grow.update(e)),z=s?0:Math.sin(i*2.2+h.phase)*.018,D=this.targetIds.has(n.id)&&!s?Math.abs(Math.sin(i*9+h.phase))*.08:0,w=this.hintIds.has(n.id)&&!s?Math.max(0,Math.sin(i*5))*.06:0,g=this.hovered===n.id&&!o?.06:0,C=R+z+D+w,U=1/Math.sqrt(Math.max(.3,C)),T=A*_*(u?1.1:1+g);h.mesh.scale.set(T*U,T*C,T*U),h.mesh.position.y=D*1.5+w*2;let H=u&&!s?.035:0;h.tilt.x=G(h.tilt.x,j(h.vel.z*H,-.5,.5),e,.08),h.tilt.y=G(h.tilt.y,j(-h.vel.x*H,-.5,.5),e,.08),h.mesh.rotation.x=h.tilt.x,h.mesh.rotation.z=h.tilt.y+(u&&!s?Math.sin(i*6)*.04:0)}for(let n=this.ghosts.length-1;n>=0;n--){let h=this.ghosts[n];h.t=Math.min(1,h.t+e/h.duration);let u=Q.inOutCubic(h.t);h.view.holder.position.lerpVectors(h.from,h.to,u),h.arc&&(h.view.holder.position.y+=Math.sin(h.t*Math.PI)*h.arc),h.shrink&&h.view.mesh.scale.multiplyScalar(1-.12*u),h.t>=1&&(this.removeFruit(h.view),this.ghosts.splice(n,1))}if(o!==null){let n=this.fruits.get(o);this.heldShadow.visible=!!n,n&&(this.heldShadow.position.set(n.pos.x,.11,n.pos.z),this.heldShadow.scale.setScalar(Et[n.level].radius*2.2),this.heldShadow.material.opacity=.6)}else this.heldShadow.visible=!1;for(let n of[this.ring,this.reachRing,...this.groupRings])n.material.uniforms.time.value=i;let r=this.basketBounce!==void 0?i-this.basketBounce:9;this.basket.rotation.z=!s&&r<.8?Math.sin(r*22)*.06*(1-r/.8):0,this.basket.scale.y=(this.mobile?.8:1.05)*(1+(!s&&r<.5?Math.sin(r*18)*.05*(1-r/.5):0));let l=o!==null?this.fruits.get(o)?.pos:null;for(let n of this.characters.values()){if(!n.root.visible)continue;let h=this.speaker&&this.speaker!==n.name?this.characters.get(this.speaker):null;n.lookAt(l?l.clone().setY(l.y+.3):h?h.root.position.clone().setY(1.1):n===this.guest||n.name===this.speaker?null:this.guest?.root.position.clone().setY(1.2)??null),n.update(e,s)}let c=a.lights,d=a.lanterns;for(let n of this.lanterns){n.lit=G(n.lit,n.target,e,.35);let h=1+(s?0:Math.sin(i*13+n.flicker)*.04+Math.sin(i*7.3+n.flicker*2)*.05),u=n.lit*h;n.lamp.traverse(M=>{if(M.isMesh)for(let y of[M.material].flat())y.name?.startsWith("paper")&&(y.emissive.copy(this.lanternGlow),y.emissiveIntensity=.05+u*(1.2+d*2.4))}),n.light.intensity=u*(.8+c*7),n.glow.material.opacity=u*(.25+d*.55),s||(n.lamp.rotation.z=Math.sin(i*.9+n.flicker)*.03)}this.fire.on=G(this.fire.on,this.fireTarget*Math.max(.35,c),e,.8),this.fire.light.intensity=this.fire.on*(9+(s?0:Math.sin(i*17)*1.5+Math.sin(i*9.3)*1.8));for(let n of this.fire.flames){let h=n.userData.phase,u=s?1:.8+Math.sin(i*11+h)*.15+Math.sin(i*23+h*2)*.1;n.material.opacity=this.fire.on*.95,n.scale.set(.34*(1.1-u*.2),.62*u,1),n.material.rotation=s?0:Math.sin(i*5+h)*.12}this.picnicLight.intensity=G(this.picnicLight.intensity,a.lights*19*(.45+.55*this.lanterns.reduce((n,h)=>n+h.lit,0)/this.lanterns.length),e,.6),this.fire.on>.2&&!s&&Math.random()<e*14&&this.sparkles.rise(this.spots.campfire.clone().setY(.4),{color:"#ff9a4a",count:1,spread:.25,speed:1.2,size:.12,life:1.3}),this.jarLight.intensity=G(this.jarLight.intensity,(this.jarTarget||0)*(.5+c*2.5),e,.4),this.bunting.visible&&!s&&this.bunting.children.forEach((n,h)=>{n.userData.sway!==void 0&&(n.rotation.x=Math.sin(i*2+n.userData.sway*.7)*.18)}),this.fireflies.update(i,a.fireflies*(s?.5:1)),this.motes.update(i,a.dust*.5),!s&&this.mode!=="title"&&a.dust>.5&&Math.random()<e*.35*this.flutter.budget&&this.flutter.drift({x:-this.frame.width*.3,y:5,z:-1,w:this.frame.width,d:this.frame.depth},this.tod.key==="golden"?["#e9a23b","#d9772b","#f2c14e"]:["#ffc7d9","#ffe1ea","#9fd36a"],{size:1.1}),this.sparkles.update(e),this.flutter.update(e,i),this.rippleMap&&!s&&this.rippleMap.offset.set(i*.012,i*.007);for(let n of this.skyLanterns){let h=i-this.finaleTime-n.delay;h<0||(n.obj.position.set(n.start.x*(1+h*.04)+Math.sin(h*.6+n.sway)*.6,n.start.y+h*n.speed,n.start.z+Math.cos(h*.5+n.sway)*.4-h*.55),n.obj.rotation.y=h*.3)}if(this.answerLights)for(let n of this.answerLights.children){let h=i-this.answerTime-n.userData.delay;n.material.opacity=j(h/1.2)*(.75+(s?0:Math.sin(i*3+n.userData.phase)*.2)),n.position.y=n.userData.base+Math.max(0,h)*n.userData.rise}if(this.reply&&!this.reply.landed){let n=this.reply,h=j((i-n.start)/n.duration);n.obj.position.copy(n.curve.getPoint(Q.inOutCubic(h))),n.obj.rotation.y=h*3,s||(n.obj.position.y+=Math.sin(i*1.7)*.08*(1-h)),h>=1&&(n.landed=!0,s||this.sparkles.burst(n.obj.position.clone().add(new f(0,.4,0)),{color:"#ffd28a",count:40,speed:1.8}),n.done?.())}if(this.fireworks&&i<this.fireworks.until&&i>this.fireworks.next){this.fireworks.next=i+.6+Math.random()*.9;let n=new f((Math.random()-.5)*24,9+Math.random()*6,-10-Math.random()*8);this.sparkles.firework(n,["#ff7aa2","#ffd166","#7fe0c8","#a18bff","#ffffff"]),this.callbacks.onFirework?.()}this.rig.update(e,{quiet:s,dragging:!!this.drag}),this.view.render(e,i),this.view.adapt(e),this.callbacks.onFrame?.()}info(){return this.view.info()}};export{$i as FRIENDS,Ji as LanternWorld};
