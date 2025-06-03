import{fn as S}from"./index-i7od9_os.js";import{m as f,B}from"./FCBProvider-C54X4kKq.js";import{j as a}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";const k=f({root:{backgroundColor:"red",padding:"100px",border:"10px solid pink"}}),x=()=>{const C=k();return a.jsx("div",{className:C.root,children:a.jsx(B,{primary:!0,label:"Button"})})};x.__docgenInfo={description:"",methods:[],displayName:"Custom"};const j=`import { Button } from "FCB-ui";
import { makeStyles } from "@griffel/react";


const useClasses = makeStyles({
  root: {
    backgroundColor: "red",
    padding: "100px",
    // border: \`10px solid \${tokens.colorNeutralForeground1}\`
    border: '10px solid pink',
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Button" />
    </div>
  );
};
`,E={title:"Example/Button",component:B,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:S()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};x.parameters={docs:{source:{code:j}}};var t,n,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const h=["Primary","Secondary","Large","Small","Custom"];export{x as Custom,o as Large,r as Primary,e as Secondary,s as Small,h as __namedExportsOrder,E as default};
