/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Space } from "FCB-ui";

import Default from "./SpaceDefault.stories";
import Direction from "./SpaceDirection.stories";
import Size from "./SpaceSize.stories";
import Align from "./SpaceAlign.stories";
import Wrap from "./SpaceWrap.stories";
import Split from "./SpaceSplit.stories";

// ! raw code imports

import DefaultSource from "./SpaceDefault.stories.tsx?raw";

import DirectionSource from "./SpaceDirection.stories.tsx?raw";

import SizeSource from "./SpaceSize.stories.tsx?raw";

import AlignSource from "./SpaceAlign.stories.tsx?raw";

import WrapSource from "./SpaceWrap.stories.tsx?raw";

import SplitSource from "./SpaceSplit.stories.tsx?raw";

const meta: Meta = {
  title: "components/Space",
  component: Space,
  parameters: {
    docs: {
      description: {
        component: "Set components spacing.",
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

(Direction as any).parameters = {
  docs: {
    source: {
      code: DirectionSource,
    },
  },
};

(Size as any).parameters = {
  docs: {
    source: {
      code: SizeSource,
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

(Wrap as any).parameters = {
  docs: {
    source: {
      code: WrapSource,
    },
  },
};

(Split as any).parameters = {
  docs: {
    source: {
      code: SplitSource,
    },
  },
};

export { Default, Direction, Size, Align, Wrap, Split };
