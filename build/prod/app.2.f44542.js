webpackJsonp([2,6],{292:function(e,t,n){"use strict";var a=n(0),m=n(2),i=n(5),o=n(122),c=n(303),d=n(84),r=n(85),p=n(21),h=n(50);n(299);var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasMediaBar=!1,t.Screen=h.makeObservableService(p.Screen),t}return a.__extends(t,e),t.prototype.created=function(){window.document.body.className="",window.document.body.classList.add("theme-gamecamp")},t.prototype.onCompiled=function(){var e=this.$el.querySelector(".widget-compiler .media-bar"),t=this.$el.querySelector(".gamecamp-media-bar");return t&&e?(t.innerHTML="",t.appendChild(e),void(this.hasMediaBar=!0)):void(this.hasMediaBar=!1)},t}(m);a.__decorate([o.State],l.prototype,"contentBlock",void 0),a.__decorate([o.State],l.prototype,"compilerContext",void 0),a.__decorate([o.State],l.prototype,"mediaItems",void 0),l=a.__decorate([c,i.Component({name:"theme-gamecamp",components:{AppWidgetCompiler:d.AppWidgetCompiler,AppMediaBar:r.AppMediaBar}})],l),t.AppThemeGamecamp=l},296:function(e,t,n){t=e.exports=n(290)(),t.push([e.i,"body.theme-gamecamp {\n  min-height: 100vh;\n  padding-bottom: 30px;\n}\n@media screen and (min-width: 992px) {\n  body.theme-gamecamp {\n    padding-top: 30px;\n  }\n}\nbody.theme-gamecamp .widget-compiler .content:first-child h1:first-child,\nbody.theme-gamecamp .widget-compiler .content:first-child h2:first-child,\nbody.theme-gamecamp .widget-compiler .content:first-child h3:first-child,\nbody.theme-gamecamp .widget-compiler .content:first-child h4:first-child,\nbody.theme-gamecamp .widget-compiler .content:first-child h5:first-child,\nbody.theme-gamecamp .widget-compiler .content:first-child h6:first-child {\n  margin-top: 0;\n}\nbody.theme-gamecamp .content h1,\nbody.theme-gamecamp .content h2,\nbody.theme-gamecamp .content h3,\nbody.theme-gamecamp .content h4,\nbody.theme-gamecamp .content h5,\nbody.theme-gamecamp .content h6,\nbody.theme-gamecamp .content p {\n  margin-bottom: 1.5rem;\n  font-weight: normal;\n}\nbody.theme-gamecamp .content img {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  vertical-align: top;\n}\nbody.theme-gamecamp .content blockquote {\n  border-left: 0;\n}\nbody.theme-gamecamp .content hr {\n  border-top: 2px solid #7e7e7e;\n  width: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\nbody.theme-gamecamp .content table {\n  max-width: 100%;\n  margin-bottom: 22px;\n}\nbody.theme-gamecamp .content th {\n  text-align: left;\n}\nbody.theme-gamecamp .content td,\nbody.theme-gamecamp .content th {\n  padding: 8px;\n  line-height: 1.428571429;\n  vertical-align: top;\n}\nbody.theme-gamecamp .content thead > tr > th {\n  vertical-align: bottom;\n}\nbody.theme-gamecamp .content-container {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\nbody.theme-gamecamp .widget-compiler-widget-game-packages {\n  margin: 0;\n}\n@media screen and (max-width: 991px) {\n  body.theme-gamecamp .gamecamp-media-bar .media-bar {\n    margin-bottom: 30px;\n    background-color: transparent;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item {\n    width: 300px !important;\n    height: auto !important;\n  }\n}\n@media screen and (min-width: 992px) {\n  body.theme-gamecamp .gamecamp-media-bar .media-bar {\n    padding: 0;\n    background-color: transparent;\n    overflow: visible;\n  }\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-items {\n    white-space: initial;\n  }\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item {\n    margin: 0;\n    margin-bottom: 30px;\n    width: 100% !important;\n    height: auto !important;\n    background-color: transparent;\n  }\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item-wrapper {\n    opacity: 1;\n  }\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item a {\n    -webkit-transition: all 350ms cubic-bezier(0.19, 1, 0.2, 1);\n    transition: all 350ms cubic-bezier(0.19, 1, 0.2, 1);\n  }\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item a::before,\n  body.theme-gamecamp .gamecamp-media-bar .media-bar-item a::after {\n    display: none;\n  }\n}\n",""])},299:function(e,t,n){var a=n(296);"string"==typeof a&&(a=[[e.i,a,""]]);n(291)(a,{});a.locals&&(e.exports=a.locals)},303:function(e,t,n){var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"theme-gamecamp"}},[e.Screen.isMobile||!e.hasMediaBar?n("div",[n("div",{staticClass:"gamecamp-media-bar"}),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-10 col-md-8 col-centered content-container"},[n("app-widget-compiler",{attrs:{content:e.contentBlock.content_compiled,context:e.compilerContext},on:{compiled:e.onCompiled}})],1)])])]):n("div",{staticClass:"container content-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"gamecamp-media-bar col-md-4 col-md-push-8"}),e._v(" "),n("div",{staticClass:"col-md-8 col-md-pull-4"},[n("app-widget-compiler",{attrs:{content:e.contentBlock.content_compiled,context:e.compilerContext},on:{compiled:e.onCompiled}})],1)])])])},m=[];e.exports=function(e){var t=e;return"function"==typeof e&&(t=e.options),t.render=a,t.staticRenderFns=m,e}}});