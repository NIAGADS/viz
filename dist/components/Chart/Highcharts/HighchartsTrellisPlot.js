import t from"react";import e from"./HighchartsPlot.js";import r from"@mui/material/Grid";import{makeStyles as l}from"@mui/styles";const a=l((t=>({root:{margin:"auto"},marginRight:{marginRight:t.spacing(8)}}))),n=({data:l,properties:n})=>{const i=a();return l?t.createElement(r,{container:!0,wrap:"nowrap"},l.map(((a,o)=>{const m={legend:{enabled:o==l.length-1,layout:"vertical",align:"right",verticalAlign:"middle",itemStyle:{fontWeight:"10px",fontSize:"10px"}},chart:{width:o==l.length-1?300:250}};return t.createElement(r,{item:!0,key:`col_${o}`,className:o<l.length-1?i.marginRight:i.root},t.createElement(e,{data:a,properties:n,plotOptions:m}))}))):null},i=r=>{const{data:l,properties:a}=r;return l?t.createElement("table",{className:"table table-trellis-plot"},t.createElement("tbody",null,t.createElement("tr",null,l.map(((r,n)=>{const i={legend:{enabled:n==l.length-1,layout:"vertical",align:"right",verticalAlign:"middle",itemStyle:{fontWeight:"10px",fontSize:"10px"}},chart:{width:n==l.length-1?300:250}};return t.createElement("td",{key:n},t.createElement(e,{data:r,properties:a,plotOptions:i}))}))))):null};export{n as HighchartsColumnTrellis,i as HighchartsTableTrellis};
//# sourceMappingURL=HighchartsTrellisPlot.js.map
