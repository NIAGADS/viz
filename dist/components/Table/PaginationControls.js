import e from"react";const t=({table:t})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"h-2"}),e.createElement("div",{className:"flex items-center gap-2"},e.createElement("button",{className:"border rounded p-1",onClick:()=>t.setPageIndex(0),disabled:!t.getCanPreviousPage()},"<<"),e.createElement("button",{className:"border rounded p-1",onClick:()=>t.previousPage(),disabled:!t.getCanPreviousPage()},"<"),e.createElement("button",{className:"border rounded p-1",onClick:()=>t.nextPage(),disabled:!t.getCanNextPage()},">"),e.createElement("button",{className:"border rounded p-1",onClick:()=>t.setPageIndex(t.getPageCount()-1),disabled:!t.getCanNextPage()},">>"),e.createElement("span",{className:"flex items-center gap-1"},e.createElement("div",null,"Page"),e.createElement("strong",null,t.getState().pagination.pageIndex+1," of"," ",t.getPageCount())),e.createElement("span",{className:"flex items-center gap-1"},"| Go to page:",e.createElement("input",{type:"number",defaultValue:t.getState().pagination.pageIndex+1,onChange:e=>{const a=e.target.value?Number(e.target.value)-1:0;t.setPageIndex(a)},className:"border p-1 rounded w-16"})),e.createElement("select",{value:t.getState().pagination.pageSize,onChange:e=>{t.setPageSize(Number(e.target.value))}},[10,20,30,40,50].map((t=>e.createElement("option",{key:t,value:t},"Show ",t))))));export{t as default};
//# sourceMappingURL=PaginationControls.js.map
