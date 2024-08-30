(self.webpackChunkalice_design_system=self.webpackChunkalice_design_system||[]).push([[792],{"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const GlobalStyle=styled_components_browser_esm.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${props=>props.theme.colors["base-background"]};
  
    color: ${_ref=>{let{theme}=_ref;return theme.colors["base-text"]}};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${_ref2=>{let{theme}=_ref2;return theme.fonts.regular}};
    font-weight: 400;
    font-size: ${_ref3=>{let{theme}=_ref3;return theme.textSizes["text-regular-m"]}}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${_ref4=>{let{theme}=_ref4;return theme.colors["base-button"]}}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${_ref5=>{let{theme}=_ref5;return theme.colors["brand-purple"]}}
  }
`,defaultTheme={colors:{"base-white":"#FFFFFF","base-background":"#FAFAFA","base-card":"#F3F2F2","base-input":"#EDEDED","base-button":"#E6E5E5","base-hover":"#D7D5D5","base-label":"#8D8686","base-text":"#574F4D","base-subtitle":"#403937","base-title":"#272221","base-error":"#f84747","brand-purple-dark":"#4B2995","brand-purple":"#8047F8","brand-purple-light":"#EBE5F9","brand-yellow-dark":"#C47F17","brand-yellow":"#DBAC2C","brand-yellow-light":"#F1E9C9"},textSizes:{"title-title-xl":"3rem","title-title-l":"2rem","title-title-m":"1.5rem","title-title-s":"1.2rem","title-title-xs":"1.125rem","text-regular-l":"1.25rem","text-bold-l":"1.25rem","text-regular-m":"1rem","text-bold-m":"1rem","text-regular-s":"0.875rem","text-bold-s":"0.75rem","components-tag":"0.625rem","components-button-g":"0.875rem","components-button-s":"0.75rem"},fonts:{regular:"'Roboto'",title:"'Baloo 2'"}},_storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[Story=>react.createElement(styled_components_browser_esm.NP,{theme:defaultTheme},react.createElement(GlobalStyle,null),react.createElement(Story,null))],tags:["autodocs"]}},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/AliTypography/AliTypography.stories":["./src/components/AliTypography/AliTypography.stories.tsx",279],"./components/AliTypography/AliTypography.stories.tsx":["./src/components/AliTypography/AliTypography.stories.tsx",279]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[133],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.843472db.iframe.bundle.js.map