(function framework7ComponentLoader(t,o){void 0===o&&(o=!0);var e=t.$,n=t.utils,r=(t.getDevice,t.getSupport,t.Class,t.Modal),s=(t.ConstructorMethods,t.ModalMethods),a=n.extend,i=n.nextTick;function c(t){this.wrapped=t}function l(t){var o,e;function n(o,e){try{var s=t[o](e),a=s.value,i=a instanceof c;Promise.resolve(i?a.wrapped:a).then((function(t){i?n("return"===o?"return":"next",t):r(s.done?"return":"normal",t)}),(function(t){n("throw",t)}))}catch(t){r("throw",t)}}function r(t,r){switch(t){case"return":o.resolve({value:r,done:!0});break;case"throw":o.reject(r);break;default:o.resolve({value:r,done:!1})}(o=o.next)?n(o.key,o.arg):e=null}this._invoke=function(t,r){return new Promise((function(s,a){var i={key:t,arg:r,resolve:s,reject:a,next:null};e?e=e.next=i:(o=e=i,n(t,r))}))},"function"!=typeof t.return&&(this.return=void 0)}function u(t,o){return(u=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}l.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},l.prototype.next=function(t){return this._invoke("next",t)},l.prototype.throw=function(t){return this._invoke("throw",t)},l.prototype.return=function(t){return this._invoke("return",t)};var p=function(t){var o,n;function r(o,n){var r,s=a({on:{}},o.params.toast,n),c=f(r=t.call(this,o,s)||this);c.app=o,c.params=s;var l,u,p=c.params,d=p.closeButton,h=p.closeTimeout;if(c.params.el)l=e(c.params.el);else{var m=c.render();l=e(m)}return l&&l.length>0&&l[0].f7Modal?l[0].f7Modal||f(r):0===l.length?c.destroy()||f(r):(a(c,{$el:l,el:l[0],type:"toast"}),l[0].f7Modal=c,d&&(l.find(".toast-button").on("click",(function(){c.emit("local::closeButtonClick toastCloseButtonClick",c),c.close()})),c.on("beforeDestroy",(function(){l.find(".toast-button").off("click")}))),c.on("open",(function(){e(".toast.modal-in").each((function(t){var e=o.toast.get(t);t!==c.el&&e&&e.close()})),h&&(u=i((function(){c.close()}),h))})),c.on("close",(function(){window.clearTimeout(u)})),c.params.destroyOnClose&&c.once("closed",(function(){setTimeout((function(){c.destroy()}),0)})),c||f(r))}return n=t,(o=r).prototype=Object.create(n.prototype),o.prototype.constructor=o,u(o,n),r.prototype.render=function(){var t=this;if(t.params.render)return t.params.render.call(t,t);var o=t.params,e=o.position,n=o.horizontalPosition,r=o.cssClass,s=o.icon,a=o.text,i=o.closeButton,c=o.closeButtonColor,l=o.closeButtonText;return $jsx("div",{class:"toast toast-"+e+" "+("top"===e||"bottom"===e?"toast-horizontal-"+n:"")+" "+(r||"")+" "+(s?"toast-with-icon":"")},$jsx("div",{class:"toast-content"},s&&$jsx("div",{class:"toast-icon"},s),$jsx("div",{class:"toast-text"},a),i&&!s&&$jsx("a",{class:"toast-button button "+(c?"color-"+c:"")},l)))},r}(r),d={name:"toast",static:{Toast:p},create:function(){var t=this;t.toast=a({},s({app:t,constructor:p,defaultSelector:".toast.modal-in"}),{show:function(o){return a(o,{destroyOnClose:!0}),new p(t,o).open()}})},params:{toast:{icon:null,text:null,position:"bottom",horizontalPosition:"left",closeButton:!1,closeButtonColor:null,closeButtonText:"Ok",closeTimeout:null,cssClass:null,render:null,containerEl:null}}};if(o){if(t.prototype.modules&&t.prototype.modules[d.name])return;t.use(d),t.instance&&(t.instance.useModuleParams(d,t.instance.params),t.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
