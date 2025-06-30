/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogActions,
  DialogTrigger,
} from "FCB-ui";

import Default from "./DialogDefault.stories";
import NonModal from "./DialogNonModal.stories";
import Alert from "./DialogAlert.stories";
import ScrollingLongContent from "./DialogScrollingLongContent.stories";
import Actions from "./DialogActions.stories";
import FluidActions from "./DialogFluidDialogActions.stories";
import NoFocusableElement from "./DialogNoFocusableElement.stories";
import ControllingOpenAndClose from "./DialogControllingOpenAndClose.stories";
import ChangeFocus from "./DialogChangeFocus.stories";
import TriggerOutsideDialog from "./DialogTriggerOutsideDialog.stories";
import CustomTrigger from "./DialogCustomTrigger.stories";
import WithForm from "./DialogWithForm.stories";
import TitleCustomAction from "./DialogTitleCustomAction.stories";
import TitleNoAction from "./DialogTitleNoAction.stories";

// ! raw code imports

import DefaultSource from "./DialogDefault.stories.tsx?raw";

import NonModalSource from "./DialogNonModal.stories?raw";

import AlertSource from "./DialogAlert.stories?raw";

import ScrollingLongContentSource from "./DialogScrollingLongContent.stories?raw";

import ActionsSource from "./DialogActions.stories?raw";

import FluidActionsSource from "./DialogFluidDialogActions.stories?raw";

import NoFocusableElementSource from "./DialogNoFocusableElement.stories?raw";

import ControllingOpenAndCloseSource from "./DialogControllingOpenAndClose.stories?raw";

import ChangeFocusSource from "./DialogChangeFocus.stories?raw";

import TriggerOutsideDialogSource from "./DialogTriggerOutsideDialog.stories?raw";

import CustomTriggerSource from "./DialogCustomTrigger.stories?raw";

import WithFormSource from "./DialogWithForm.stories?raw";

import TitleCustomActionSource from "./DialogTitleCustomAction.stories?raw";

import TitleNoActionSource from "./DialogTitleNoAction.stories?raw";

const meta: Meta = {
  title: "components/Dialog",
  component: Dialog,
  subcomponents: {
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogActions,
  } as any,
  parameters: {
    docs: {
      description: {},
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

(NonModal as any).parameters = {
  docs: {
    source: {
      code: NonModalSource,
    },
  },
};

(Alert as any).parameters = {
  docs: {
    source: {
      code: AlertSource,
    },
  },
};

(ScrollingLongContent as any).parameters = {
  docs: {
    source: {
      code: ScrollingLongContentSource,
    },
  },
};

(Actions as any).parameters = {
  docs: {
    source: {
      code: ActionsSource,
    },
  },
};

(FluidActions as any).parameters = {
  docs: {
    source: {
      code: FluidActionsSource,
    },
  },
};

(NoFocusableElement as any).parameters = {
  docs: {
    source: {
      code: NoFocusableElementSource,
    },
  },
};

(ControllingOpenAndClose as any).parameters = {
  docs: {
    source: {
      code: ControllingOpenAndCloseSource,
    },
  },
};

(ChangeFocus as any).parameters = {
  docs: {
    source: {
      code: ChangeFocusSource,
    },
  },
};

(TriggerOutsideDialog as any).parameters = {
  docs: {
    source: {
      code: TriggerOutsideDialogSource,
    },
  },
};

(CustomTrigger as any).parameters = {
  docs: {
    source: {
      code: CustomTriggerSource,
    },
  },
};

(WithForm as any).parameters = {
  docs: {
    source: {
      code: WithFormSource,
    },
  },
};

(TitleCustomAction as any).parameters = {
  docs: {
    source: {
      code: TitleCustomActionSource,
    },
  },
};

(TitleNoAction as any).parameters = {
  docs: {
    source: {
      code: TitleNoActionSource,
    },
  },
};

export {
  Default,
  NonModal,
  Alert,
  ScrollingLongContent,
  Actions,
  FluidActions,
  NoFocusableElement,
  ControllingOpenAndClose,
  ChangeFocus,
  TriggerOutsideDialog,
  CustomTrigger,
  WithForm,
  TitleCustomAction,
  TitleNoAction,
};
