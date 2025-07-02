import * as React from "react";

import { useEventCallback } from "../../../../utils/useEventCallback";
import {
  DialogContextValue,
  useDialogContext,
  useDialogSurfaceContext,
} from "../../contexts";
import { applyTriggerPropsToChildren } from "../../utils/trigger/applyTriggerPropsToChildren";
import { getTriggerChild } from "../../utils/trigger/getTriggerChild";
import type { FcbTriggerComponent } from "../../utils/trigger/types";

import type { DialogTriggerProps } from "./DialogTrigger.types";

export const DialogTrigger: React.FC<DialogTriggerProps> = (props) => {
  const isInsideSurfaceDialog = useDialogSurfaceContext(); //*
  const { children, action = isInsideSurfaceDialog ? "close" : "open" } = props;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const child = getTriggerChild(children as any);

  const { requestOpenChange } = useDialogContext(
    (ctx: DialogContextValue) => ctx
  );

  const handleClick = useEventCallback(
    (
      event: React.MouseEvent<
        HTMLButtonElement & HTMLAnchorElement & HTMLDivElement
      >
    ) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      (child?.props as any).onClick?.(event);
      if (!event.isDefaultPrevented()) {
        requestOpenChange({
          event,
          type: "triggerClick",
          open: action === "open",
        });
      }
    }
  );

  const triggerChildProps = {
    ...child?.props,
    ref: child?.ref,
    onClick: handleClick,
  } as const;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  return applyTriggerPropsToChildren(children as any, triggerChildProps);
};

DialogTrigger.displayName = "DialogTrigger";
// type casting here is required to ensure internal type TriggerComponent is not leaked
(DialogTrigger as FcbTriggerComponent).isFcbTriggerComponent = true;
