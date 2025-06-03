import{within as p,expect as o,userEvent as B}from"./index-i7od9_os.js";import{P as d}from"./FCBProvider-C54X4kKq.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";const x={title:"Example/Page",component:d,parameters:{layout:"fullscreen"}},t={},e={play:async({canvasElement:g})=>{const a=p(g),n=a.getByRole("button",{name:/Log in/i});await o(n).toBeInTheDocument(),await B.click(n),await o(n).not.toBeInTheDocument();const l=a.getByRole("button",{name:/Log out/i});await o(l).toBeInTheDocument()}};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,i,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const I=["LoggedOut","LoggedIn"];export{e as LoggedIn,t as LoggedOut,I as __namedExportsOrder,x as default};
