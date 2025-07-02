/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "FCB-ui";

import { Meta } from "@storybook/react";

import Align from "./FlexAlign.stories";
import AlignSource from "./FlexAlign.stories.tsx?raw";
import Default from "./FlexDefault.stories";
import DefaultSource from "./FlexDefault.stories.tsx?raw";
import Gap from "./FlexGap.stories";
import GapSource from "./FlexGap.stories.tsx?raw";
import Wrap from "./FlexWrap.stories";
import WrapSource from "./FlexWrap.stories.tsx?raw";


const meta: Meta = {
  title: "components/Flex",
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: "A flex layout container for alignment.",
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

(Align as any).parameters = {
  docs: {
    source: {
      code: AlignSource,
    },
  },
};

(Gap as any).parameters = {
  docs: {
    source: {
      code: GapSource,
    },
  },
};

(Wrap as any).parameters = {
  docs: {
    source: {
      code: WrapSource,
    },
  },
};

export { Align, Default, Gap, Wrap };
