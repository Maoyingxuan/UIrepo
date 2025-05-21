import"./index-B7YJKKKT.js";import{m as o,F as n,w as l,t as m,c,a as h,b as x,d as s}from"./FCBProvider-nCQs_iNQ.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";const v=o({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:s.colorBrandBackground2,color:s.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),d=()=>{const r=v();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:l,children:e.jsx("div",{className:r.text,children:"Web Light Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:m,children:e.jsx("div",{className:r.text,children:"Teams Light Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:c,children:e.jsx("div",{className:r.text,children:"webDarkTheme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:h,children:e.jsx("div",{className:r.text,children:"Teams Dark Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:x,children:e.jsx("div",{className:r.text,children:"teamsHighContrastTheme"})})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};const a=o({example:{backgroundColor:s.colorBrandBackground2,color:s.colorBrandForeground2,border:`5px solid ${s.colorBrandStroke1}`,borderRadius:"5px",margin:"5px"},text:{padding:"5px",fontSize:"18px"}}),i=()=>{const r=a();return e.jsx(n,{children:e.jsxs("div",{className:r.example,children:[e.jsx("div",{className:r.text,children:"Web Light Theme using brand tokens"}),e.jsx(n,{theme:{colorBrandStroke1:"red",colorBrandBackground2:"green",colorBrandForeground2:"yellow"},children:e.jsx(t,{})}),e.jsx(t,{})]})})};function t(){const r=a();return e.jsx("div",{className:r.example,children:e.jsx("div",{className:r.text,children:"Child Nested FishProvider with partial theme"})})}i.__docgenInfo={description:"",methods:[],displayName:"Nested"};const p=`import { makeStyles } from "@griffel/react";
import {
  FCBProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "FCB-ui";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FCBProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </FCBProvider>
      </div>
      <div>
        <FCBProvider
          className={styles.provider}
          theme={teamsHighContrastTheme}
        >
          <div className={styles.text}>teamsHighContrastTheme</div>
        </FCBProvider>
      </div>
    </>
  );
};
`,u=`import { makeStyles } from "@griffel/react";
import { tokens, FCBProvider } from "FCB-ui";

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: \`5px solid \${tokens.colorBrandStroke1}\`,
    borderRadius: "5px",
    margin: "5px",
  },
  text: {
    padding: "5px",
    fontSize: "18px",
  },
});

export const Nested = () => {
  const styles = useStyles();
  return (
    <FCBProvider>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>
        <FCBProvider
          theme={{
            colorBrandStroke1: "red",
            colorBrandBackground2: "green",
            colorBrandForeground2: "yellow",
            // 更多的 theme 属性
          }}
        >
          <Child />
        </FCBProvider>
        <Child />
      </div>
    </FCBProvider>
  );
};

function Child() {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <div className={styles.text}>
        Child Nested FishProvider with partial theme
      </div>
    </div>
  );
}`,N={title:"components/FCBProvider",component:n};d.parameters={docs:{source:{code:p}}};i.parameters={docs:{description:{story:"FishProvider可以嵌套使用。"}},source:{code:u}};const C=["Default","Nested"];export{d as Default,i as Nested,C as __namedExportsOrder,N as default};
