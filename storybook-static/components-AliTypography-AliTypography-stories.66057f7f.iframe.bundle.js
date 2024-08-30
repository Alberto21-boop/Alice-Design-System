"use strict";(self.webpackChunkalice_design_system=self.webpackChunkalice_design_system||[]).push([[279],{"./src/components/AliTypography/AliTypography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AliTypography_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const AliTypographyContainer=styled_components_browser_esm.Ay.div`
  font-family: ${_ref=>{let{theme}=_ref;return theme.fonts.regular}};
  color: ${_ref2=>{let{theme}=_ref2;return theme.colors["base-text"]}};

  ${_ref3=>{let{component}=_ref3;return"title"===component&&styled_components_browser_esm.AH`
      font-weight: bold;
      color: ${_ref4=>{let{theme}=_ref4;return theme.colors["base-title"]}};
    `}}

  ${_ref5=>{let{size}=_ref5;return"display"===size&&styled_components_browser_esm.AH`
      font-size: ${_ref6=>{let{theme}=_ref6;return theme.textSizes["title-title-xl"]}};
    `}}

  ${_ref7=>{let{size}=_ref7;return"large"===size&&styled_components_browser_esm.AH`
      font-size: ${_ref8=>{let{theme}=_ref8;return theme.textSizes["title-title-l"]}};
    `}}

  ${_ref9=>{let{size}=_ref9;return"medium"===size&&styled_components_browser_esm.AH`
      font-size: ${_ref10=>{let{theme}=_ref10;return theme.textSizes["text-regular-m"]}};
    `}}

  ${_ref11=>{let{size}=_ref11;return"small"===size&&styled_components_browser_esm.AH`
      font-size: ${_ref12=>{let{theme}=_ref12;return theme.textSizes["text-regular-s"]}};
    `}}
`,AliTypography=_ref=>{let{variant,component,size,children}=_ref;return react.createElement(AliTypographyContainer,{as:variant,component,size},children)},AliTypography_AliTypography=AliTypography;AliTypography.__docgenInfo={description:"",methods:[],displayName:"AliTypography",props:{variant:{required:!0,tsType:{name:"union",raw:"'h1' | 'h2' | 'p' | 'span'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:"'title' | 'subtitle' | 'text'",elements:[{name:"literal",value:"'title'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'text'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'display' | 'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const AliTypography_stories={title:"AliTypography",component:AliTypography_AliTypography},Default=(args=>React.createElement(AliTypography_AliTypography,args)).bind({});Default.args={variant:"h1",component:"title",size:"display",children:"Text"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <AliTypography {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-AliTypography-AliTypography-stories.66057f7f.iframe.bundle.js.map