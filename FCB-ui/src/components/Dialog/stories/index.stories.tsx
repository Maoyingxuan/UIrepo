/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogActions,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "FCB-ui";

import { Meta } from "@storybook/react";

import Actions from "./DialogActions.stories";
import ActionsSource from "./DialogActions.stories?raw";
import Alert from "./DialogAlert.stories";
import AlertSource from "./DialogAlert.stories?raw";
import ChangeFocus from "./DialogChangeFocus.stories";
import ChangeFocusSource from "./DialogChangeFocus.stories?raw";
import ControllingOpenAndClose from "./DialogControllingOpenAndClose.stories";
import ControllingOpenAndCloseSource from "./DialogControllingOpenAndClose.stories?raw";
import CustomTrigger from "./DialogCustomTrigger.stories";
import CustomTriggerSource from "./DialogCustomTrigger.stories?raw";
import Default from "./DialogDefault.stories";
// ! raw code imports
import DefaultSource from "./DialogDefault.stories.tsx?raw";
import FluidActions from "./DialogFluidDialogActions.stories";
import FluidActionsSource from "./DialogFluidDialogActions.stories?raw";
import NoFocusableElement from "./DialogNoFocusableElement.stories";
import NoFocusableElementSource from "./DialogNoFocusableElement.stories?raw";
import NonModal from "./DialogNonModal.stories";
import NonModalSource from "./DialogNonModal.stories?raw";
import ScrollingLongContent from "./DialogScrollingLongContent.stories";
import ScrollingLongContentSource from "./DialogScrollingLongContent.stories?raw";
import TitleCustomAction from "./DialogTitleCustomAction.stories";
import TitleCustomActionSource from "./DialogTitleCustomAction.stories?raw";
import TitleNoAction from "./DialogTitleNoAction.stories";
import TitleNoActionSource from "./DialogTitleNoAction.stories?raw";
import TriggerOutsideDialog from "./DialogTriggerOutsideDialog.stories";
import TriggerOutsideDialogSource from "./DialogTriggerOutsideDialog.stories?raw";
import WithForm from "./DialogWithForm.stories";
import WithFormSource from "./DialogWithForm.stories?raw";

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
  Actions,
  Alert,
  ChangeFocus,
  ControllingOpenAndClose,
  CustomTrigger,
  Default,
  FluidActions,
  NoFocusableElement,
  NonModal,
  ScrollingLongContent,
  TitleCustomAction,
  TitleNoAction,
  TriggerOutsideDialog,
  WithForm,
};
