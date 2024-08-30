/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global';
import { defaultTheme } from '../src/styles/themes/default';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: false, // Adiciona esta linha para não expandir as props em múltiplas linhas
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ["autodocs"]
};

export default preview;
