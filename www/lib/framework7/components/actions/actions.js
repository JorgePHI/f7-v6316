(function framework7ComponentLoader(o,e){void 0===e&&(e=!0);var t=o.$,n=o.utils,r=o.getDevice,a=(o.getSupport,o.Class,o.Modal),s=(o.ConstructorMethods,o.ModalMethods);function i(o){this.wrapped=o}function c(o){var e,t;function n(e,t){try{var a=o[e](t),s=a.value,c=s instanceof i;Promise.resolve(c?s.wrapped:s).then((function(o){c?n("return"===e?"return":"next",o):r(a.done?"return":"normal",o)}),(function(o){n("throw",o)}))}catch(o){r("throw",o)}}function r(o,r){switch(o){case"return":e.resolve({value:r,done:!0});break;case"throw":e.reject(r);break;default:e.resolve({value:r,done:!1})}(e=e.next)?n(e.key,e.arg):t=null}this._invoke=function(o,r){return new Promise((function(a,s){var i={key:o,arg:r,resolve:a,reject:s,next:null};t?t=t.next=i:(e=t=i,n(o,r))}))},"function"!=typeof o.return&&(this.return=void 0)}function l(o,e){return(l=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}function p(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}c.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},c.prototype.next=function(o){return this._invoke("next",o)},c.prototype.throw=function(o){return this._invoke("throw",o)},c.prototype.return=function(o){return this._invoke("return",o)};var d=n.extend,u=n.nextTick,m=function(o){var e,n;function a(e,n){var a,s,i,c,l=d({on:{}},e.params.actions,n),m=p(a=o.call(this,e,l)||this),f=r();if(m.params=l,m.params.buttons&&(s=m.params.buttons,Array.isArray(s[0])||(s=[s])),m.groups=s,m.params.el?i=t(m.params.el).eq(0):m.params.content?i=t(m.params.content).filter((function(o){return 1===o.nodeType})).eq(0):m.params.buttons&&(m.params.convertToPopover&&(m.popoverHtml=m.renderPopover()),m.actionsHtml=m.render()),i&&i.length>0&&i[0].f7Modal)return i[0].f7Modal||p(a);if(i&&0===i.length&&!m.actionsHtml&&!m.popoverHtml)return m.destroy()||p(a);m.params.backdrop&&m.params.backdropEl?c=t(m.params.backdropEl):m.params.backdrop&&0===(c=m.$containerEl.children(".actions-backdrop")).length&&(c=t('<div class="actions-backdrop"></div>'),m.$containerEl.append(c));var v,b=m.open,h=m.close;function k(o){var e,n,r=t(this);if(r.hasClass("list-button")||r.hasClass("item-link")?(e=r.parents("li").index(),n=r.parents(".list").index()):(e=r.index(),n=r.parents(".actions-group").index()),void 0!==s){var a=s[n][e];a.onClick&&a.onClick(m,o),m.params.onClick&&m.params.onClick(m,o),!1!==a.close&&m.close()}}function y(o){var e=o.target,n=t(e);!f.desktop&&f.cordova&&(window.Keyboard&&window.Keyboard.isVisible||window.cordova.plugins&&window.cordova.plugins.Keyboard&&window.cordova.plugins.Keyboard.isVisible)||0===n.closest(m.el).length&&(m.params.closeByBackdropClick&&m.params.backdrop&&m.backdropEl&&m.backdropEl===e||m.params.closeByOutsideClick)&&m.close()}function $(o){27===o.keyCode&&m.params.closeOnEscape&&m.close()}return m.open=function(o){var n=!1,r=m.params,a=r.targetEl,s=r.targetX,i=r.targetY,c=r.targetWidth,l=r.targetHeight;return m.params.convertToPopover&&(a||void 0!==s&&void 0!==i)&&(m.params.forceToPopover||f.ios&&f.ipad||e.width>=768||f.desktop&&"aurora"===e.theme)&&(n=!0),n&&m.popoverHtml?((v=e.popover.create({containerEl:m.params.containerEl,content:m.popoverHtml,backdrop:m.params.backdrop,targetEl:a,targetX:s,targetY:i,targetWidth:c,targetHeight:l,on:{open:function(){m.$el||(m.$el=v.$el),m.$el.trigger("modal:open "+m.type.toLowerCase()+":open"),m.emit("local::open modalOpen "+m.type+"Open",m)},opened:function(){m.$el||(m.$el=v.$el),m.$el.trigger("modal:opened "+m.type.toLowerCase()+":opened"),m.emit("local::opened modalOpened "+m.type+"Opened",m)},close:function(){m.$el||(m.$el=v.$el),m.$el.trigger("modal:close "+m.type.toLowerCase()+":close"),m.emit("local::close modalClose "+m.type+"Close",m)},closed:function(){m.$el||(m.$el=v.$el),m.$el.trigger("modal:closed "+m.type.toLowerCase()+":closed"),m.emit("local::closed modalClosed "+m.type+"Closed",m)}}})).open(o),v.once("popoverOpened",(function(){v.$el.find(".list-button, .item-link").each((function(o){t(o).on("click",k)}))})),v.once("popoverClosed",(function(){v.$el.find(".list-button, .item-link").each((function(o){t(o).off("click",k)})),u((function(){v.destroy(),v=void 0}))}))):(m.$el=m.actionsHtml?t(m.actionsHtml):m.$el,m.$el[0].f7Modal=m,m.groups&&(m.$el.find(".actions-button").each((function(o){t(o).on("click",k)})),m.once("actionsClosed",(function(){m.$el.find(".actions-button").each((function(o){t(o).off("click",k)}))}))),m.el=m.$el[0],b.call(m,o)),m},m.close=function(o){return v?v.close(o):h.call(m,o),m},d(m,{app:e,$el:i,el:i?i[0]:void 0,$backdropEl:c,backdropEl:c&&c[0],type:"actions"}),m.params.closeOnEscape&&(m.on("open",(function(){t(document).on("keydown",$)})),m.on("close",(function(){t(document).off("keydown",$)}))),m.on("opened",(function(){(m.params.closeByBackdropClick||m.params.closeByOutsideClick)&&e.on("click",y)})),m.on("close",(function(){(m.params.closeByBackdropClick||m.params.closeByOutsideClick)&&e.off("click",y)})),i&&(i[0].f7Modal=m),m||p(a)}n=o,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,l(e,n);var s=a.prototype;return s.render=function(){var o=this;if(o.params.render)return o.params.render.call(o,o);var e=o.groups,t=o.params.cssClass;return $jsx("div",{class:"actions-modal"+(o.params.grid?" actions-grid":"")+" "+(t||"")},e.map((function(o){return $jsx("div",{class:"actions-group"},o.map((function(o){var e=["actions-"+(o.label?"label":"button")],t=o.color,n=o.bg,r=o.bold,a=o.disabled,s=o.label,i=o.text,c=o.icon;return t&&e.push("color-"+t),n&&e.push("bg-color-"+n),r&&e.push("actions-button-bold"),a&&e.push("disabled"),s?$jsx("div",{class:e.join(" ")},i):$jsx("div",{class:e.join(" ")},c&&$jsx("div",{class:"actions-button-media"},c),$jsx("div",{class:"actions-button-text"},i))})))})))},s.renderPopover=function(){var o=this;if(o.params.renderPopover)return o.params.renderPopover.call(o,o);var e=o.groups,t=o.params.cssClass;return $jsx("div",{class:"popover popover-from-actions "+(t||"")},$jsx("div",{class:"popover-inner"},e.map((function(o){return $jsx("div",{class:"list"},$jsx("ul",null,o.map((function(o){var e=[],t=o.color,n=o.bg,r=o.bold,a=o.disabled,s=o.label,i=o.text,c=o.icon;return t&&e.push("color-"+t),n&&e.push("bg-color-"+n),r&&e.push("popover-from-actions-bold"),a&&e.push("disabled"),s?(e.push("popover-from-actions-label"),'<li class="'+e.join(" ")+'">'+i+"</li>"):c?(e.push("item-link item-content"),$jsx("li",null,$jsx("a",{class:e.join(" ")},$jsx("div",{class:"item-media"},c),$jsx("div",{class:"item-inner"},$jsx("div",{class:"item-title"},i))))):(e.push("list-button"),$jsx("li",null,$jsx("a",{class:e.join(" ")},i)))}))))}))))},a}(a),f={name:"actions",params:{actions:{convertToPopover:!0,forceToPopover:!1,backdrop:!0,backdropEl:void 0,cssClass:null,closeByBackdropClick:!0,closeOnEscape:!1,render:null,renderPopover:null,containerEl:null}},static:{Actions:m},create:function(){this.actions=s({app:this,constructor:m,defaultSelector:".actions-modal.modal-in"})},clicks:{".actions-open":function(o,e){void 0===e&&(e={});this.actions.open(e.actions,e.animate,o)},".actions-close":function(o,e){void 0===e&&(e={});this.actions.close(e.actions,e.animate,o)}}};if(e){if(o.prototype.modules&&o.prototype.modules[f.name])return;o.use(f),o.instance&&(o.instance.useModuleParams(f,o.instance.params),o.instance.useModule(f))}return f}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
