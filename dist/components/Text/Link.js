import e from"react";const t=(t,l)=>e.createElement("a",{key:t,href:t},l),l=({value:l})=>Array.isArray(l)?e.createElement(a,{value:l}):"tooltip"in l&&""!=l.tooltip?e.createElement("div",{title:l.tooltip,"arial-label":l.tooltip},t(l.url,l.value)):t(l.url,l.value),a=({value:t})=>t.map(((t,a)=>e.createElement("span",{key:a},a>0&&" // ",e.createElement(l,{value:t}))));export{l as Link,a as LinkList,t as resolveLink};
//# sourceMappingURL=Link.js.map
