/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "FCB-ui";

import { Meta } from "@storybook/react";

import CardAppearance from "./CardAppearance.stories";
import CardAppearanceSource from "./CardAppearance.stories.tsx?raw";
import Default from "./CardDefault.stories";
import DefaultSource from "./CardDefault.stories.tsx?raw";
import CardOrientation from "./CardOrientation.stories";
import CardOrientationSource from "./CardOrientation.stories.tsx?raw";
import CardSize from "./CardSize.stories";
import CardSizeSource from "./CardSize.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(CardAppearance as any).parameters = {
  docs: {
    source: {
      code: CardAppearanceSource,
    },
  },
};

(CardOrientation as any).parameters = {
  docs: {
    source: {
      code: CardOrientationSource,
    },
  },
};

(CardSize as any).parameters = {
  docs: {
    source: {
      code: CardSizeSource,
    },
  },
};

export default {
  title: "components/Card/Card",
  component: Card,
} as Meta;

export { CardAppearance,CardOrientation, CardSize, Default };
