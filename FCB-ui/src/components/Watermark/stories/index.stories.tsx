/* eslint-disable @typescript-eslint/no-explicit-any */
import { Watermark } from "FCB-ui";

import { Meta } from "@storybook/react";

import Default from "./WatermarkDefault.stories";
import DefaultSource from "./WatermarkDefault.stories.tsx?raw";
import Image from "./WatermarkImage.stories";
import ImageSource from "./WatermarkImage.stories.tsx?raw";
import Multiline from "./WatermarkMultiline.stories";
import MultilineSource from "./WatermarkMultiline.stories.tsx?raw";

const meta: Meta = {
  title: "components/Watermark",
  component: Watermark,
  parameters: {
    docs: {
      description: {
        component: "Add specific text or patterns to the page.",
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

(Multiline as any).parameters = {
  docs: {
    source: {
      code: MultilineSource,
    },
  },
};

(Image as any).parameters = {
  docs: {
    source: {
      code: ImageSource,
    },
  },
};

export { Default, Image,Multiline };
