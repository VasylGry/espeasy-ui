!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=63)}([function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return M}),n.d(e,"c",function(){return A});var o=function(){},i={},r=[],s=[];function a(t,e){var n,a,l,u,c=s;for(u=arguments.length;u-- >2;)r.push(arguments[u]);for(e&&null!=e.children&&(r.length||r.push(e.children),delete e.children);r.length;)if((a=r.pop())&&void 0!==a.pop)for(u=a.length;u--;)r.push(a[u]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof t)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&n?c[c.length-1]+=a:c===s?c=[a]:c.push(a),n=l;var p=new o;return p.nodeName=t,p.children=c,p.attributes=null==e?void 0:e,p.key=null==e?void 0:e.key,void 0!==i.vnode&&i.vnode(p),p}function l(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function h(t){!t._dirty&&(t._dirty=!0)&&1==d.push(t)&&(i.debounceRendering||c)(f)}function f(){for(var t;t=d.pop();)t._dirty&&D(t)}function v(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function m(t){var e=l({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,o,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)u(n,null),u(o,t);else if("class"!==e||i)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var r in n)r in o||(t.style[r]="");for(var r in o)t.style[r]="number"==typeof o[r]&&!1===p.test(r)?o[r]+"px":o[r]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,y,s):t.removeEventListener(e,y,s),(t._listeners||(t._listeners={}))[e]=o}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==o?"":o}catch(t){}null!=o&&!1!==o||"spellcheck"==e||t.removeAttribute(e)}else{var a=i&&e!==(e=e.replace(/^xlink:?/,""));null==o||!1===o?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function y(t){return this._listeners[t.type](i.event&&i.event(t)||t)}var x=[],_=0,C=!1,w=!1;function E(){for(var t;t=x.shift();)i.afterMount&&i.afterMount(t),t.componentDidMount&&t.componentDidMount()}function S(t,e,n,o,i,r){_++||(C=null!=i&&void 0!==i.ownerSVGElement,w=null!=t&&!("__preactattr_"in t));var s=N(t,e,n,o,r);return i&&s.parentNode!==i&&i.appendChild(s),--_||(w=!1,r||E()),s}function N(t,e,n,o,i){var r=t,s=C;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=e&&(t.nodeValue=e):(r=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(r,t),O(t,!0))),r.__preactattr_=!0,r;var a,l,u=e.nodeName;if("function"==typeof u)return function(t,e,n,o){var i=t&&t._component,r=i,s=t,a=i&&t._componentConstructor===e.nodeName,l=a,u=m(e);for(;i&&!l&&(i=i._parentComponent);)l=i.constructor===e.nodeName;i&&l&&(!o||i._component)?(T(i,u,3,n,o),t=i.base):(r&&!a&&(L(r),t=s=null),i=P(e.nodeName,u,n),t&&!i.nextBase&&(i.nextBase=t,s=null),T(i,u,1,n,o),t=i.base,s&&t!==s&&(s._component=null,O(s,!1)));return t}(t,e,n,o);if(C="svg"===u||"foreignObject"!==u&&C,u=String(u),(!t||!v(t,u))&&(a=u,(l=C?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,r=l,t)){for(;t.firstChild;)r.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(r,t),O(t,!0)}var c=r.firstChild,p=r.__preactattr_,d=e.children;if(null==p){p=r.__preactattr_={};for(var h=r.attributes,f=h.length;f--;)p[h[f].name]=h[f].value}return!w&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&function(t,e,n,o,i){var r,s,a,l,u,c=t.childNodes,p=[],d={},h=0,f=0,m=c.length,b=0,y=e?e.length:0;if(0!==m)for(var x=0;x<m;x++){var _=c[x],C=_.__preactattr_,w=y&&C?_._component?_._component.__key:C.key:null;null!=w?(h++,d[w]=_):(C||(void 0!==_.splitText?!i||_.nodeValue.trim():i))&&(p[b++]=_)}if(0!==y)for(var x=0;x<y;x++){l=e[x],u=null;var w=l.key;if(null!=w)h&&void 0!==d[w]&&(u=d[w],d[w]=void 0,h--);else if(f<b)for(r=f;r<b;r++)if(void 0!==p[r]&&(E=s=p[r],$=i,"string"==typeof(S=l)||"number"==typeof S?void 0!==E.splitText:"string"==typeof S.nodeName?!E._componentConstructor&&v(E,S.nodeName):$||E._componentConstructor===S.nodeName)){u=s,p[r]=void 0,r===b-1&&b--,r===f&&f++;break}u=N(u,l,n,o),a=c[x],u&&u!==t&&u!==a&&(null==a?t.appendChild(u):u===a.nextSibling?g(a):t.insertBefore(u,a))}var E,S,$;if(h)for(var x in d)void 0!==d[x]&&O(d[x],!1);for(;f<=b;)void 0!==(u=p[b--])&&O(u,!1)}(r,d,n,o,w||null!=p.dangerouslySetInnerHTML),function(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||b(t,o,n[o],n[o]=void 0,C);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||b(t,o,n[o],n[o]=e[o],C)}(r,e.attributes,p),C=s,r}function O(t,e){var n=t._component;n?L(n):(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||g(t),$(t))}function $(t){for(t=t.lastChild;t;){var e=t.previousSibling;O(t,!0),t=e}}var j=[];function P(t,e,n){var o,i=j.length;for(t.prototype&&t.prototype.render?(o=new t(e,n),M.call(o,e,n)):((o=new M(e,n)).constructor=t,o.render=k);i--;)if(j[i].constructor===t)return o.nextBase=j[i].nextBase,j.splice(i,1),o;return o}function k(t,e,n){return this.constructor(t,n)}function T(t,e,n,o,r){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o)),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===i.syncComponentUpdates&&t.base?h(t):D(t,1,r)),u(t.__ref,t))}function D(t,e,n,o){if(!t._disable){var r,s,a,u=t.props,c=t.state,p=t.context,d=t.prevProps||u,h=t.prevState||c,f=t.prevContext||p,v=t.base,g=t.nextBase,b=v||g,y=t._component,C=!1,w=f;if(t.constructor.getDerivedStateFromProps&&(c=l(l({},c),t.constructor.getDerivedStateFromProps(u,c)),t.state=c),v&&(t.props=d,t.state=h,t.context=f,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,c,p)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(u,c,p),t.props=u,t.state=c,t.context=p),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!C){r=t.render(u,c,p),t.getChildContext&&(p=l(l({},p),t.getChildContext())),v&&t.getSnapshotBeforeUpdate&&(w=t.getSnapshotBeforeUpdate(d,h));var N,$,j=r&&r.nodeName;if("function"==typeof j){var k=m(r);(s=y)&&s.constructor===j&&k.key==s.__key?T(s,k,1,p,!1):(N=s,t._component=s=P(j,k,p),s.nextBase=s.nextBase||g,s._parentComponent=t,T(s,k,0,p,!1),D(s,1,n,!0)),$=s.base}else a=b,(N=y)&&(a=t._component=null),(b||1===e)&&(a&&(a._component=null),$=S(a,r,p,n||!v,b&&b.parentNode,!0));if(b&&$!==b&&s!==y){var M=b.parentNode;M&&$!==M&&(M.replaceChild($,b),N||(b._component=null,O(b,!1)))}if(N&&L(N),t.base=$,$&&!o){for(var A=t,I=t;I=I._parentComponent;)(A=I).base=$;$._component=A,$._componentConstructor=A.constructor}}for(!v||n?x.push(t):C||(t.componentDidUpdate&&t.componentDidUpdate(d,h,w),i.afterUpdate&&i.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);_||o||E()}}function L(t){i.beforeUnmount&&i.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?L(n):e&&(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),t.nextBase=e,g(e),j.push(t),$(e)),u(t.__ref,null)}function M(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function A(t,e,n){return S(n,t,{},!1,e,!1)}l(M.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),h(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),D(this,2)},render:function(){}})},function(t,e,n){"use strict";n.d(e,"b",function(){return a});var o=n(11),i=n.n(o);n.d(e,"a",function(){return i.a});var r=n(16),s=n.n(r);n.d(e,"c",function(){return s.a});const a=t=>{const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push(n);return e}},function(t,e,n){var o=n(9)(Object,"create");t.exports=o},function(t,e,n){var o=n(14);t.exports=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}},function(t,e,n){var o=n(50);t.exports=function(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var o=n(13),i=n(24),r="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&o(t)==r}},function(t,e,n){var o=n(8).Symbol;t.exports=o},function(t,e,n){var o=n(20),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();t.exports=r},function(t,e,n){var o=n(32),i=n(37);t.exports=function(t,e){var n=i(t,e);return o(n)?n:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var o=n(18);t.exports=function(t,e,n){var i=null==t?void 0:o(t,e);return void 0===i?n:i}},function(t,e,n){var o=n(5),i=n(19),r=n(25),s=n(54);t.exports=function(t,e){return o(t)?t:i(t,e)?[t]:r(s(t))}},function(t,e,n){var o=n(7),i=n(22),r=n(23),s="[object Null]",a="[object Undefined]",l=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:l&&l in Object(t)?i(t):r(t)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var o=n(6),i=1/0;t.exports=function(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}},function(t,e,n){var o=n(57);t.exports=function(t,e,n){return null==t?t:o(t,e,n)}},function(t,e,n){"use strict";n.d(e,"a",function(){return h});var o=n(1);const i="#000000",r=t=>{return t.filter(t=>0===t.inputs.length).map(t=>{const e=t=>({t:t.type,v:t.config.map(t=>t.value),o:t.outputs.map(t=>t.lines.map(t=>e(t.input.nodeObject))),c:[t.position.x,t.position.y]});return e(t)})},s=(t,e,n)=>{t.map(t=>{let o=e.renderedNodes.find(e=>e.position.x===t.c[0]&&e.position.y===t.c[1]);if(!o){const n=e.nodes.find(e=>t.t==e.type);(o=new p(e.canvas,n,{x:t.c[0],y:t.c[1]})).config.map((e,n)=>{e.value=t.v[n]}),o.render(),e.renderedNodes.push(o)}if(n){const t=n.getBoundingClientRect(),r=o.inputs[0].getBoundingClientRect(),s=new u(document.body.clientWidth,document.body.clientHeight,"none",i);e.canvas.appendChild(s.element);const a=t.x+t.width,l=t.y+t.height/2,c=r.x,p=r.y+r.height/2;s.setPath(a,l,c,p);const d={output:n,input:o.inputs[0],svg:s,start:{x:a,y:l},end:{x:c,y:p}};o.inputs[0].lines.push(d),n.lines.push(d)}t.o.map((t,n)=>{s(t,e,o.outputs[n])})})},a=t=>{const e=t.filter(t=>"TRIGGERS"===t.group);let n="";return e.map(t=>{const e=(t,n)=>{const o=t.toDsl?t.toDsl():[];let i="",r=t.indent?"  ":"";return t.outputs.map((s,a)=>{let l=o[a]||t.type,u="";s.lines&&(s.lines.map(o=>{u+=e(o.input.nodeObject,t.indent?n+1:n)}),u=u.split("\n").map(t=>r+t).filter(t=>""!==t.trim()).join("\n")+"\n"),l.includes("%%output%%")?l=l.replace("%%output%%",u):l+=u,i+=l}),i},o=e(t,0);n+=o+"\n\n"}),n},l={enableNativeDrag:(t,e)=>{t.draggable=!0,t.ondragstart=(t=>{Object(o.b)(e).map(n=>{t.dataTransfer.setData(n,e[n])})})},enableNativeDrop:(t,e)=>{t.ondragover=(t=>{t.preventDefault()}),t.ondrop=e}};class u{constructor(t,e,n,o){this.element=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.element.setAttribute("style","z-index: -1;position:absolute;top:0px;left:0px"),this.element.setAttribute("width",t),this.element.setAttribute("height",e),this.element.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.line=document.createElementNS("http://www.w3.org/2000/svg","path"),this.line.setAttributeNS(null,"fill",n),this.line.setAttributeNS(null,"stroke",o),this.element.appendChild(this.line)}setPath(t,e,n,o,i=.5){const r=(n-t)*i,s=`M ${t} ${e} C ${t+r} ${e} ${n-r} ${o} ${n} ${o}`;this.line.setAttributeNS(null,"d",s)}}class c{constructor(t){this.type=t.type,this.group=t.group,this.config=t.config.map(t=>Object.assign({},t)),this.inputs=t.inputs.map(t=>{}),this.outputs=t.outputs.map(t=>{}),this.toDsl=t.toDsl,this.toString=t.toString,this.toHtml=t.toHtml,this.indent=t.indent}}class p extends c{constructor(t,e,n){super(e),this.canvas=t,this.position=n,this.lines=[],this.linesEnd=[],this.toDsl=e.toDsl,this.toString=e.toString,this.toHtml=e.toHtml,this.indent=e.indent}updateInputsOutputs(t,e){t.map(t=>{const e=t.getBoundingClientRect();t.lines.map(t=>{t.end.x=e.x,t.end.y=e.y+e.height/2,t.svg.setPath(t.start.x,t.start.y,t.end.x,t.end.y)})}),e.map(t=>{const e=t.getBoundingClientRect();t.lines.map(t=>{t.start.x=e.x+e.width,t.start.y=e.y+e.height/2,t.svg.setPath(t.start.x,t.start.y,t.end.x,t.end.y)})})}handleMoveEvent(t){if(!this.canvas.canEdit)return;const e=t.clientX-this.element.getBoundingClientRect().left,n=t.clientY-this.element.getBoundingClientRect().top,o=t=>{const o=t.y-n,i=t.x-e;this.position.y=o-o%this.canvas.gridSize,this.position.x=i-i%this.canvas.gridSize,this.element.style.top=`${this.position.y}px`,this.element.style.left=`${this.position.x}px`,this.updateInputsOutputs(this.inputs,this.outputs)},i=t=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}handleDblClickEvent(t){this.canvas.canEdit&&this.config.length&&d(this.type,this.config,()=>{this.toHtml?this.text.innerHTML=this.toHtml():this.text.textContent=this.toString()})}handleRightClickEvent(t){if(this.canvas.canEdit)return this.inputs.map(t=>{t.lines.map(t=>{t.output.lines=[],t.svg.element.parentNode.removeChild(t.svg.element)}),t.lines=[]}),this.outputs.map(t=>{t.lines.map(t=>{const e=t.input.lines.indexOf(t);t.input.lines.splice(e,1),t.svg.element.parentNode.removeChild(t.svg.element)}),t.lines=[]}),this.element.parentNode.removeChild(this.element),this.destroy&&this.destroy(),t.preventDefault(),t.stopPropagation(),!1}render(){this.element=document.createElement("div"),this.element.nodeObject=this,this.element.className=`node node-chart group-${this.group}`,this.text=document.createElement("span"),this.toHtml?this.text.innerHTML=this.toHtml():this.text.textContent=this.toString(),this.element.appendChild(this.text),this.element.style.top=`${this.position.y}px`,this.element.style.left=`${this.position.x}px`;const t=document.createElement("div");t.className="node-inputs",this.element.appendChild(t),this.inputs.map((e,n)=>{const o=this.inputs[n]=document.createElement("div");o.className="node-input",o.nodeObject=this,o.lines=[],o.onmousedown=(t=>{t.preventDefault(),t.stopPropagation()}),t.appendChild(o)});const e=document.createElement("div");e.className="node-outputs",this.element.appendChild(e),this.outputs.map((t,n)=>{const o=this.outputs[n]=document.createElement("div");o.className="node-output",o.nodeObject=this,o.lines=[],o.oncontextmenu=(t=>(o.lines.map(t=>{t.svg.element.parentNode.removeChild(t.svg.element)}),o.lines=[],t.stopPropagation(),t.preventDefault(),!1)),o.onmousedown=(t=>{if(t.stopPropagation(),o.lines.length)return;const e=o.getBoundingClientRect(),n=e.x+e.width,r=e.y+e.height/2,s=new u(document.body.clientWidth,document.body.clientHeight,"none",i);this.canvas.appendChild(s.element);const a=t=>{s.setPath(n,r,t.pageX,t.pageY)},l=t=>{const e=document.elementFromPoint(t.clientX,t.clientY),i=e?e.closest(".node-input"):null;if(i){const t=i.getBoundingClientRect(),e=t.x,a=t.y+t.height/2;s.setPath(n,r,e,a);const l={output:o,input:i,svg:s,start:{x:n,y:r},end:{x:e,y:a}};o.lines.push(l),i.lines.push(l)}else s.element.remove();document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)}),e.appendChild(o)}),this.element.ondblclick=this.handleDblClickEvent.bind(this),this.element.onmousedown=this.handleMoveEvent.bind(this),this.element.oncontextmenu=this.handleRightClickEvent.bind(this),this.canvas.appendChild(this.element)}}const d=(t,e,n)=>{const o=document.createElement("template");o.innerHTML=`\n        <div class='configbox'>\n            <form class="pure-form pure-form-aligned" name=configform onsubmit="return false;">\n                <fieldset>\n                    <label>${t}</label>\n                    <div class="configbox-body"></div>\n                </fieldset>\n            </form>\n            <div class="configbox-footer">\n                <button class="pure-button pure-button-primary" id=ob>OK</button>\n                <button class="pure-button" id=cb>Cancel</button>\n            </div>\n        </div>\n    `,document.body.appendChild(o.content.cloneNode(!0));const i=document.body.querySelectorAll(".configbox")[0],r=document.body.querySelectorAll(".configbox-body")[0],s=document.getElementById("ob");document.getElementById("cb").onclick=(()=>{i.remove()}),s.onclick=(()=>{e.map(t=>{t.value=document.forms.configform.elements[t.name].value}),i.remove(),n()}),e.map(t=>{const e=(t=>{const e=document.createElement("template"),n=e=>`<option ${e==t.value?"selected":""}>${e}</option>`;switch(t.type){case"text":e.innerHTML=`<div class="pure-control-group"><label>${t.name}</label><input type='text' name='${t.name}' value='${t.value}' /></div>`;break;case"number":e.innerHTML=`<div class="pure-control-group"><label>${t.name}</label><input type='number' name='${t.name}' value='${t.value}' /></div>`;break;case"select":e.innerHTML=`<div class="pure-control-group"><label>${t.name}</label><select name='${t.name}'>${t.values.map(t=>n(t))}</select></div>`;break;case"textselect":e.innerHTML=`<div class="pure-control-group"><label>${t.name}</label><div style="position:relative;display:inline-block;height:30px;">\n            <select style="position:absolute;"\n                    onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">\n                    ${t.values.map(t=>n(t))}\n            </select>\n            <input type="text" name="${t.name}" id="displayValue" \n                   placeholder="add/select a value" onfocus="this.select()"\n                   style="position:absolute;top:0px;left:0px;z-index:100;width: 190px;"  >\n            <input name="idValue" id="idValue" type="hidden">\n          </div></div>`}return e.content.cloneNode(!0)})(t);r.appendChild(e)})};class h{constructor(t,e,n){this.nodes=[],this.renderedNodes=[],this.onSave=n.onSave,this.canEdit=!n.readOnly,this.debug=null==n.debug||n.debug,this.gridSize=n.gridSize||1,this.element=t,e.map(t=>{const e=new c(t);this.nodes.push(e)}),this.render(),this.canEdit&&l.enableNativeDrop(this.canvas,t=>{const e=this.nodes.find(e=>e.type==t.dataTransfer.getData("type"));let n=new p(this.canvas,e,{x:t.x,y:t.y});n.render(),n.destroy=(()=>{this.renderedNodes.splice(this.renderedNodes.indexOf(n),1),n=null}),this.renderedNodes.push(n)})}loadConfig(t){s(t,this)}saveConfig(){return r(this.renderedNodes)}renderContainers(){if(this.canEdit&&(this.sidebar=document.createElement("div"),this.sidebar.className="sidebar",this.element.appendChild(this.sidebar)),this.canvas=document.createElement("div"),this.canvas.className="canvas",this.canvas.canEdit=this.canEdit,this.canvas.gridSize=this.gridSize,this.element.appendChild(this.canvas),this.canEdit&&this.debug){this.debug=document.createElement("div"),this.debug.className="debug";const t=document.createElement("div");this.debug.appendChild(t);const e=document.createElement("button");e.textContent="SAVE",e.onclick=(()=>{const t=JSON.stringify(r(this.renderedNodes)),e=a(this.renderedNodes);this.onSave(t,e)});const n=document.createElement("button");n.textContent="LOAD",n.onclick=(()=>{const t=prompt("enter config");s(JSON.parse(t),this)});const o=document.createElement("button");o.textContent="EXPORT",o.onclick=(()=>{const e=a(this.renderedNodes);t.textContent=e}),this.debug.appendChild(o),this.debug.appendChild(e),this.debug.appendChild(n),this.debug.appendChild(t),this.element.appendChild(this.debug)}}renderConfigNodes(){const t={};this.nodes.map(e=>{if(!t[e.group]){const n=document.createElement("div");n.className="group",n.textContent=e.group,this.sidebar.appendChild(n),t[e.group]=n}const n=document.createElement("div");n.className=`node group-${e.group}`,n.textContent=e.type,t[e.group].appendChild(n),l.enableNativeDrag(n,{type:e.type})})}render(){this.renderContainers(),this.canEdit&&this.renderConfigNodes()}}},function(t,e,n){var o=n(12),i=n(15);t.exports=function(t,e){for(var n=0,r=(e=o(e,t)).length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}},function(t,e,n){var o=n(5),i=n(6),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||s.test(t)||!r.test(t)||null!=e&&t in Object(e)}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(21))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(7),i=Object.prototype,r=i.hasOwnProperty,s=i.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=r.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(t){}var i=s.call(t);return o&&(e?t[a]=n:delete t[a]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var o=n(26),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,s=o(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,o,i){e.push(o?i.replace(r,"$1"):n||t)}),e});t.exports=s},function(t,e,n){var o=n(27),i=500;t.exports=function(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}},function(t,e,n){var o=n(28),i="Expected a function";function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var o=arguments,i=e?e.apply(this,o):o[0],r=n.cache;if(r.has(i))return r.get(i);var s=t.apply(this,o);return n.cache=r.set(i,s)||r,s};return n.cache=new(r.Cache||o),n}r.Cache=o,t.exports=r},function(t,e,n){var o=n(29),i=n(49),r=n(51),s=n(52),a=n(53);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=r,l.prototype.has=s,l.prototype.set=a,t.exports=l},function(t,e,n){var o=n(30),i=n(42),r=n(48);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(r||i),string:new o}}},function(t,e,n){var o=n(31),i=n(38),r=n(39),s=n(40),a=n(41);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=r,l.prototype.has=s,l.prototype.set=a,t.exports=l},function(t,e,n){var o=n(2);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},function(t,e,n){var o=n(33),i=n(34),r=n(10),s=n(36),a=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,c=l.toString,p=u.hasOwnProperty,d=RegExp("^"+c.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!r(t)||i(t))&&(o(t)?d:a).test(s(t))}},function(t,e,n){var o=n(13),i=n(10),r="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",l="[object Proxy]";t.exports=function(t){if(!i(t))return!1;var e=o(t);return e==s||e==a||e==r||e==l}},function(t,e,n){var o,i=n(35),r=(o=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!r&&r in t}},function(t,e,n){var o=n(8)["__core-js_shared__"];t.exports=o},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var o=n(2),i="__lodash_hash_undefined__",r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return r.call(e,t)?e[t]:void 0}},function(t,e,n){var o=n(2),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}},function(t,e,n){var o=n(2),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}},function(t,e,n){var o=n(43),i=n(44),r=n(45),s=n(46),a=n(47);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=r,l.prototype.has=s,l.prototype.set=a,t.exports=l},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var o=n(3),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=o(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},function(t,e,n){var o=n(3);t.exports=function(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var o=n(3);t.exports=function(t){return o(this.__data__,t)>-1}},function(t,e,n){var o=n(3);t.exports=function(t,e){var n=this.__data__,i=o(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e,n){var o=n(9)(n(8),"Map");t.exports=o},function(t,e,n){var o=n(4);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var o=n(4);t.exports=function(t){return o(this,t).get(t)}},function(t,e,n){var o=n(4);t.exports=function(t){return o(this,t).has(t)}},function(t,e,n){var o=n(4);t.exports=function(t,e){var n=o(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},function(t,e,n){var o=n(55);t.exports=function(t){return null==t?"":o(t)}},function(t,e,n){var o=n(7),i=n(56),r=n(5),s=n(6),a=1/0,l=o?o.prototype:void 0,u=l?l.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(r(e))return i(e,t)+"";if(s(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-a?"-0":n}},function(t,e){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,i=Array(o);++n<o;)i[n]=e(t[n],n,t);return i}},function(t,e,n){var o=n(58),i=n(12),r=n(61),s=n(10),a=n(15);t.exports=function(t,e,n,l){if(!s(t))return t;for(var u=-1,c=(e=i(e,t)).length,p=c-1,d=t;null!=d&&++u<c;){var h=a(e[u]),f=n;if(u!=p){var v=d[h];void 0===(f=l?l(v,h,d):void 0)&&(f=s(v)?v:r(e[u+1])?[]:{})}o(d,h,f),d=d[h]}return t}},function(t,e,n){var o=n(59),i=n(14),r=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];r.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||o(t,e,n)}},function(t,e,n){var o=n(60);t.exports=function(t,e,n){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var o=n(9),i=function(){try{var t=o(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e){var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var i=typeof t;return!!(e=null==e?n:e)&&("number"==i||"symbol"!=i&&o.test(t))&&t>-1&&t%1==0&&t<e}},,function(t,e,n){"use strict";n.r(e);var o=n(0);const i=[{group:"DEVICES",type:"CLOCK",inputs:[],outputs:[],config:[],vals:[],indent:!0,toHtml:()=>`<b>${(new Date).toTimeString()}</b>`},{group:"DEVICES",type:"IMAGE",inputs:[],outputs:[],config:[{name:"url",type:"text",value:"https://www.letscontrolit.com/wiki/images/4/44/ESPeasyLOGO.png"},{name:"width",type:"number",value:"200"}],vals:[],indent:!0,toHtml:function(){return`<img src="${this.config[0].value}" width="${this.config[1].value}" />`}},{group:"DEVICES",type:"VARIABLE",inputs:[],outputs:[],vals:[],config:[{name:"device",type:"select",values:[],value:0}],toHtml:function(t){return`${this.config[0].value}: ${t?t[this.config[0].value]:0}`}},{group:"DEVICES",type:"METER",inputs:[],outputs:[],vals:[],config:[{name:"device",type:"select",values:[],value:0},{name:"max",type:"number",value:"255"},{name:"size",type:"number",value:"255"},{name:"orientation",type:"select",values:["horizontal","vertical"],value:"horizontal"}],toHtml:function(t){const e=t?t[this.config[0].value]:0,n="vertical"===this.config[3].value;return`<div class="c_meter" style="width: ${n?24:this.config[2].value}px; height: ${n?this.config[2].value:24}px;"><div class="c_meter_val" style="width: ${n?100:100*e/this.config[1].value}%; height: ${n?100*e/this.config[1].value:100}%;">${this.config[0].value}: ${e}</div></div>`}},{group:"DEVICES",type:"IMAGE_METER",inputs:[],outputs:[],vals:[],config:[{name:"device",type:"select",values:[],value:0},{name:"max",type:"number",value:"255"},{name:"image width",type:"number",value:"255"},{name:"image height",type:"number",value:"255"},{name:"image 1 url",type:"text",value:"#"},{name:"image 2 url",type:"text",value:"https://www.letscontrolit.com/wiki/images/4/44/ESPeasyLOGO.png"},{name:"orientation",type:"select",values:["left","right","top","bottom"],value:"left"}],toHtml:function(t){const e=t?t[this.config[0].value]:0,n=this.config[2].value,o=this.config[3].value,i=this.config[4].value,r=this.config[5].value;let s,a,l=100*e/this.config[1].value;switch(this.config[6].value){case"right":l=100-l;case"left":s=l,a=100;break;case"top":l=100-l;case"bottom":s=100,a=l}return`<div class="c_fill" style="width: ${n}px; height: ${o}px; background: url(${i});">\n                        <div class="c_fill_val" style="width: ${s}%; height: ${a}%;">\n                            <img src="${r}" width="${n}px" height="${o}px" />\n                        </div>\n                    </div>`}},{group:"ACTIONS",type:"BUTTON",inputs:[],outputs:[],vals:[],config:[{name:"text",type:"text",value:"CLICK"},{name:"cmd",type:"text",value:"event,test"}],toHtml:function(){return`<button type="button" onclick="fetch('/control?cmd=${this.config[1].value}')">${this.config[0].value}</button>`}},{group:"ACTIONS",type:"INPUT",inputs:[],outputs:[],vals:[],config:[{name:"name",type:"text",value:"var"},{name:"min",type:"number",value:"0"},{name:"max",type:"number",value:"255"},{name:"cmd",type:"text",value:"set_level,1"},{name:"type",type:"select",values:["input","slider"],value:"slider"}],toHtml:function(t){return`${this.config[0].value}: <input type="${"input"===this.config[3].value?"number":"range"}" min="${this.config[1].value}" max="${this.config[2].value}" value="${t?t[this.config[0].value]:0}" />`}}],r=window.getPluginAPI(),s=r.espeasy.getVariables,a=r.espeasy.loadDashboardConfig,l=r.espeasy.storeDashboardConfig;var u=n(17);const c={title:"Панель",pagetitle:"",href:"dashboard",class:"full",component:class extends o.a{constructor(t){super(t),this.shutdown=!1,this.state={pages:[],vals:[],tab:0},this.selectTab=(t=>{const e=parseInt(t.currentTarget.dataset.tab);this.setState({tab:e})})}render(t){return Object(o.b)("div",null,Object(o.b)("div",{class:"dash_menu"},Object(o.b)("ul",{ref:t=>this.menu=t},this.state.pages.map((t,e)=>Object(o.b)("li",null,Object(o.b)("a",{onClick:this.selectTab,"data-tab":e},t.title))))),Object(o.b)("ul",{class:"tabs"},this.state.pages.map((t,e)=>{const n=`editor ${e===this.state.tab?"active":""}`;return Object(o.b)("li",{class:n},t.nodes.map(t=>{const e=i.find(e=>e.type===t.t),n=`node-dash node-${e.group}`,r=`top: ${t.c[1]}px; left: ${t.c[0]}px;`,s={config:t.v.map(t=>({value:t}))};return Object(o.b)("div",{class:n,style:r,dangerouslySetInnerHTML:{__html:e.toHtml.bind(s)(this.state.vals)}})}))})))}componentDidMount(){a().then(t=>{this.setState({pages:t})});const t=async()=>{const e=await s();this.setState({vals:e}),this.shutdown||setTimeout(t,1e3)};t()}componentWillUnmount(){this.shutdown=!0}},children:[{title:"Редактор",pagetitle:"",href:"dashboard/editor",class:"full",component:class extends o.a{constructor(t){super(t),this.pages=[],this.nodes=i,this.saveConfig=(()=>{const t=this.pages.map(t=>({title:t.title,nodes:t.chart.saveConfig()}));l(JSON.stringify(t))}),this.addPage=(({title:t,nodes:e=[]}={})=>{t||(t=prompt("Введите имя страницы","new")),this.pages.push({title:t,nodes:e,chart:this.createPage({title:t,nodes:e})}),this.selectTab(null,this.pages.length-1)}),this.selectTab=((t,e)=>{const n=null!=e?e:t.currentTarget.dataset.tab;document.querySelectorAll("ul.tabs li").forEach((t,e)=>{e===parseInt(n)?t.classList.add("active"):t.classList.remove("active")})})}createPage(t){const e=document.createElement("li");e.innerText=t.title,e.dataset.tab=this.pages.length,e.onclick=this.selectTab,this.menu.appendChild(e);const n=document.createElement("li"),o=this.renderChart(n,t.nodes);return this.tabs.appendChild(n),o}renderChart(t,e){const n=new u.a(t,i,{gridSize:10,debug:!1});return n.loadConfig(e),n}render(t){return this.editors=[],Object(o.b)("div",null,Object(o.b)("div",{class:"dash_menu"},Object(o.b)("ul",null,Object(o.b)("div",{style:"display: inline",ref:t=>this.menu=t}),Object(o.b)("li",null,Object(o.b)("a",{onClick:this.addPage},"Добавить страницу")))),Object(o.b)("div",{class:"dash_menu_right"},Object(o.b)("div",null,Object(o.b)("a",{onClick:this.saveConfig},"Сохранить"))),Object(o.b)("ul",{class:"tabs",ref:t=>this.tabs=t}))}componentDidMount(){s().then(t=>{const e=i.find(t=>"VARIABLE"===t.type),n=i.find(t=>"METER"===t.type),o=i.find(t=>"IMAGE_METER"===t.type);Object.keys(t).forEach(t=>{e.config[0].values.push(t),n.config[0].values.push(t),o.config[0].values.push(t)}),a().then(t=>{t.forEach(t=>{this.addPage(t)}),this.selectTab(null,0)})})}}}]};window.getPluginAPI().menu.addMenu(c)}]);
//# sourceMappingURL=dash.js.map