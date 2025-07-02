/* eslint-disable @typescript-eslint/no-explicit-any */
import { Portal } from "FCB-ui";

import { Meta } from "@storybook/react";

import Default from "./PortalDefault.stories";
// ! raw code imports
import DefaultSource from "./PortalDefault.stories.tsx?raw";

const meta: Meta = {
  title: "Components/Portal/Portal",
  component: Portal,
  parameters: {
    docs: {
      description: {
        component:
          "A portal renders content outside of a DOM tree, at the end of the document.",
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
