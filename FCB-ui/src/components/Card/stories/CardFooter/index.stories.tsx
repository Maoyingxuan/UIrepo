/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardFooter } from "FCB-ui";

import Default from "./CardFooterDefault.stories";

import DefaultSource from "./CardFooterDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "components/Card/CardFooter",
  component: CardFooter,
} as Meta;

export { Default };
