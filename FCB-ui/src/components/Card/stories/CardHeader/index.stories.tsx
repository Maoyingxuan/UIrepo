/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardHeader } from "FCB-ui";
import Default from "./CardHeaderDefault.stories";

import DefaultSource from "./CardHeaderDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "components/Card/CardHeader",
  component: CardHeader,
} as Meta;

export { Default };
