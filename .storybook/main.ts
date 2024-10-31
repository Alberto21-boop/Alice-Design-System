import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)", // Mantém as stories dos componentes
    "../src/stories/Introducao.stories.@(ts|tsx)" // Adiciona a introdução, sem tirar nada
  ],

  addons: ["@storybook/preset-create-react-app", //"@storybook/addon-onboarding",
  "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm", //'@storybook/mdx2-csf',
  '@storybook/addon-docs'],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  staticDirs: ['../public'],

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
export default config;
