(this.webpackJsonpkatex_react=this.webpackJsonpkatex_react||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(5),o=n.n(i),s=(n(19),n(20),n(0)),c=n(1),u=n(13),l=n(12),d=n(6),h=n.n(d),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.editor=new h.a({holder:this.props.id,autofocus:!0,tools:this.props.plugins})}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id})}}]),n}(r.a.Component),m=n(11),f=(n(28),function(){function e(t){var n=t.data,a=t.api;Object(s.a)(this,e),this.api=a,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-formula__textarea"},this.data=n,this.nodes=this.drawView()}return Object(c.a)(e,null,[{key:"toolbox",get:function(){return{title:"Formula",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/></svg>'}}},{key:"enableLineBreaks",get:function(){return!0}}]),Object(c.a)(e,[{key:"render",value:function(){var e=this,t=function(){return m.a.render(e.nodes.textarea.value,e.nodes.formula,{throwOnError:!1,output:"htmlAndMathml",displayMode:!0})};return t(),this.nodes.textarea.addEventListener("input",(function(e){return t()})),this.nodes.wrapper}},{key:"drawView",value:function(){var e=document.createElement("div"),t=document.createElement("textarea"),n=document.createElement("output");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),e.appendChild(t),e.appendChild(n),{wrapper:e,textarea:t,formula:n}}},{key:"save",value:function(e){return{formula:this.nodes.textarea.input}}}],[{key:"sanitize",get:function(){return{code:!0}}}]),e}()),v=n(7),w=n.n(v),k=n(8),g=n.n(k),x=n(9),b=n.n(x),y=n(10),E=n.n(y),S={header:g.a,list:b.a,image:w.a,formula:f,code:E.a};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{id:"editor",plugins:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),document.title="React editor","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.29d4c5fa.chunk.js.map