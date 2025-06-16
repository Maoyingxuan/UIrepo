/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { CardPreview } from "FCB-ui";

import Default from "./CardPreviewDefault.stories";

import DefaultSource from "./CardPreviewDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export default {
  title: "components/Card/CardPreview",
  component: CardPreview,
} as Meta;

export { Default };
