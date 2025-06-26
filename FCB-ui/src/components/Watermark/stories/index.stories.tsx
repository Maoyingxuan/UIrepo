/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Watermark } from "FCB-ui";
import Default from "./WatermarkDefault.stories";
import Multiline from "./WatermarkMultiline.stories";
import Image from "./WatermarkImage.stories";
import DefaultSource from "./WatermarkDefault.stories.tsx?raw";
import MultilineSource from "./WatermarkMultiline.stories.tsx?raw";
import ImageSource from "./WatermarkImage.stories.tsx?raw";

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

export { Default, Multiline, Image };
