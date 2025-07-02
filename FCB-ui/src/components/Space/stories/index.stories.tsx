/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space } from "FCB-ui";

import { Meta } from "@storybook/react";

import Align from "./SpaceAlign.stories";
import AlignSource from "./SpaceAlign.stories.tsx?raw";
import Default from "./SpaceDefault.stories";
// ! raw code imports
import DefaultSource from "./SpaceDefault.stories.tsx?raw";
import Direction from "./SpaceDirection.stories";
import DirectionSource from "./SpaceDirection.stories.tsx?raw";
import Size from "./SpaceSize.stories";
import SizeSource from "./SpaceSize.stories.tsx?raw";
import Split from "./SpaceSplit.stories";
import SplitSource from "./SpaceSplit.stories.tsx?raw";
import Wrap from "./SpaceWrap.stories";
import WrapSource from "./SpaceWrap.stories.tsx?raw";

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

export { Align, Default, Direction, Size, Split,Wrap };
