/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "FCB-ui";

import { Meta } from "@storybook/react";

import Appearance from "./ButtonAppearance.stories";
import AppearanceSource from "./ButtonAppearance.stories.tsx?raw";
import Default from "./ButtonDefault.stories";
import DefaultSource from "./ButtonDefault.stories.tsx?raw";
import Disabled from "./ButtonDisabled.stories";
import DisabledSource from "./ButtonDisabled.stories.tsx?raw";
import Icon from "./ButtonIcon.stories";
import IconSource from "./ButtonIcon.stories.tsx?raw";
import Shape from "./ButtonShape.stories";
import ShapeSource from "./ButtonShape.stories.tsx?raw";
import Size from "./ButtonSize.stories";
import SizeSource from "./ButtonSize.stories.tsx?raw";
import WithLongText from "./ButtonWithLongText.stories";
import WithLongTextSource from "./ButtonWithLongText.stories.tsx?raw";

const meta: Meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Buttons allow users to take actions, and make choices, with a single tap.",
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

(Shape as any).parameters = {
  docs: {
    source: {
      code: ShapeSource,
    },
  },
};

(Appearance as any).parameters = {
  docs: {
    source: {
      code: AppearanceSource,
    },
    description: {
      story:
        "- `(undefined)`: the button appears with the default style\n" +
        "- `primary`: emphasizes the button as a primary action.\n" +
        "- `outline`: removes background styling.\n" +
        "- `subtle`: minimizes emphasis to blend into the background until hovered or focused\n" +
        "- `transparent`: removes background and border styling.\n",
    },
  },
};

(Icon as any).parameters = {
  docs: {
    source: {
      code: IconSource,
    },
    description: {
      story:
        "Button has an `icon` slot that, if specified, renders an icon either `before` or `after` the children, " +
        "as specified by the `iconPosition` prop.",
    },
  },
};

(Size as any).parameters = {
  docs: {
    source: {
      code: SizeSource,
    },
    description: {
      story:
        "A button supports `small`, `medium` and `large` size. Default size is `medium`.",
    },
  },
};

(Disabled as any).parameters = {
  docs: {
    source: {
      code: DisabledSource,
    },
    description: {
      story:
        "A button can be `disabled` or `disabledFocusable`. When set, allows the button to be focusable even when it has been disabled.",
    },
  },
};

(WithLongText as any).parameters = {
  docs: {
    source: {
      code: WithLongTextSource,
    },
    description: {
      story: "Text wraps after it hits the max width of the component.",
    },
  },
};

export { Appearance, Default, Disabled, Icon, Shape, Size, WithLongText };
