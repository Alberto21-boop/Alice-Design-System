Estou criando um Design System para utilização propria, e assim não só ter um ambiente mais profissional, mas também passar a ter ma agilidade maior em meus estudos.

*Para iniciarmos o projeto, ctrl + j, e então:
npx create-react-app alice-design-system
cd alice-design-system

*Depois instalamos o Storybook
npx storybook@latest init

*Uma vez feito isso rodaremos o projeto
npm run storybook

**Configurando o projeto:

*Agora que você visualizou o storybook, vamos instalar as dependencias necessárias para Typescript:
npm install typescript @types/react @types/react-dom


*Depois de instalar as dependecias do typescript, vamos direcionar no arquivo preview.tsx, um "decorator", para que assim possamos ter os "storys" de uma maneira global.


/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from '../src/styles/global'; 

const theme = {
   Defina seu tema aqui, e da sua maneira 
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;

*feito isso , iremos utilizar o --legacy-peer-deps para sanar os propblemas de conflitos de dependências e força a instalação dos pacotes
npm install styled-components --legacy-peer-deps
npm install --save-dev @types/styled-components --legacy-peer-deps

*Para fixar a versão do Typescript e instalar o styled-components
npm install typescript@4.9.5 --save-dev
npm install styled-components
npm install --save-dev @types/styled-components

Para instalar os icones ao projeto:
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons

