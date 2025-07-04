import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/index.stories.@(js|jsx|mjs|ts|tsx)"],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-mdx-gfm"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "typescript": {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;