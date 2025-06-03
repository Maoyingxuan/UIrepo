import{m as d,F as s,b as c,a as h,t as p,w as v,c as g,d as t}from"./FCBProvider-C54X4kKq.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";const i={webLight:g,webDark:v,teamsLight:p,teamsDark:h,teamsHC:c},u=d({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:t.colorBrandBackground2,color:t.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),o=({theme:r})=>{const a=u();return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(s,{className:a.provider,theme:i[r],children:e.jsx("div",{className:a.text,children:"Web Light Theme"})})})})};o.args={theme:"webLight"};o.argTypes={theme:{control:"radio",options:Object.keys(i),description:"切换主题"}};o.__docgenInfo={description:"",methods:[],displayName:"Default",props:{theme:{required:!0,tsType:{name:"union",raw:"keyof typeof themeMap",elements:[{name:"literal",value:"webLight"},{name:"literal",value:"webDark"},{name:"literal",value:"teamsLight"},{name:"literal",value:"teamsDark"},{name:"literal",value:"teamsHC"}]},description:""}}};const m=d({example:{backgroundColor:t.colorBrandBackground2,color:t.colorBrandForeground2,border:`5px solid ${t.colorBrandStroke1}`,borderRadius:"5px",margin:"5px"},text:{padding:"5px",fontSize:"18px"}}),l=()=>{const r=m();return e.jsx(s,{children:e.jsxs("div",{className:r.example,children:[e.jsx("div",{className:r.text,children:"Web Light Theme using brand tokens"}),e.jsx(s,{theme:{colorBrandStroke1:"red",colorBrandBackground2:"green",colorBrandForeground2:"yellow"},children:e.jsx(n,{})}),e.jsx(n,{})]})})};function n(){const r=m();return e.jsx("div",{className:r.example,children:e.jsx("div",{className:r.text,children:"Child Nested FishProvider with partial theme"})})}l.__docgenInfo={description:"",methods:[],displayName:"Nested"};const x=`import { makeStyles } from "@griffel/react";
import {
  FCBProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "FCB-ui";

const themeMap = {
  webLight: webLightTheme,
  webDark: webDarkTheme,
  teamsLight: teamsLightTheme,
  teamsDark: teamsDarkTheme,
  teamsHC: teamsHighContrastTheme,
};

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

export const Default = ({theme}:{theme: keyof typeof themeMap}) => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FCBProvider className={styles.provider} theme={themeMap[theme]}>
          <div className={styles.text}>Web Light Theme</div>
        </FCBProvider>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};

Default.args = {
  theme: 'webLight',
};

Default.argTypes = {
  theme: {
    control: 'radio',
    options: Object.keys(themeMap),
    description: '切换主题',
  },
};
`,k=`import { makeStyles } from "@griffel/react";
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
}`,C={title:"components/FCBProvider",component:s};o.parameters={docs:{source:{code:x}}};l.parameters={docs:{description:{story:"FishProvider可以嵌套使用。"}},source:{code:k}};const T=["Default","Nested"];export{o as Default,l as Nested,T as __namedExportsOrder,C as default};
