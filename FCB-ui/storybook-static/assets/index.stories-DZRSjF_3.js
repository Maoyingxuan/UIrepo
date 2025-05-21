import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{t as n}from"./FCBProvider-nCQs_iNQ.js";import"./index-D4lIrffr.js";const t=n,i=()=>{const a=Object.keys(t).filter(e=>e.startsWith("borderRadius"));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto) 1fr ",gap:"10px 20px",alignItems:"center"},children:a.map(e=>[r.jsx("div",{children:e},e),r.jsx("div",{style:{textAlign:"right"},children:t[e]},`${e}-value`),r.jsx("div",{style:{background:"#bbb",width:"3em",height:"3em",borderRadius:t[e]}},`${e}-col1`),r.jsx("div",{style:{border:`${t.strokeWidthThin} solid black`,width:"3em",height:"3em",borderRadius:t[e]}},`${e}-col2`)])})},c={title:"主题/BorderRadius",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"BorderRadii"};var d,s,o;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const BorderRadiiTokens = Object.keys(theme).filter(tokenName => tokenName.startsWith("borderRadius")) as (keyof BorderRadiusTokens)[];
  return <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, auto) 1fr ",
    gap: "10px 20px",
    alignItems: "center"
  }}>
          {BorderRadiiTokens.map(radius => [<div key={radius}>{radius}</div>, <div key={\`\${radius}-value\`} style={{
      textAlign: "right"
    }}>
              {theme[radius]}
            </div>, <div key={\`\${radius}-col1\`} style={{
      background: "#bbb",
      width: "3em",
      height: "3em",
      borderRadius: theme[radius]
    }} />, <div key={\`\${radius}-col2\`} style={{
      border: \`\${theme.strokeWidthThin} solid black\`,
      width: "3em",
      height: "3em",
      borderRadius: theme[radius]
    }} />])}
        </div>;
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["BorderRadii"];export{i as BorderRadii,p as __namedExportsOrder,c as default};
