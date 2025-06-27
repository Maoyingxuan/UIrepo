/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
// import descriptionMd from "./toMountNodePropsDescription.md";

import Default from "./Default.stories";

// ! raw code imports

import DefaultSource from "./Default.stories.tsx?raw";

const meta: Meta = {
  title: "Components/Portal/toMountNodeProps",
  component: null as any,
  parameters: {
    docs: {
      description: {
        // component: [descriptionMd].join("\n"),
      },
    },
  },
};

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
