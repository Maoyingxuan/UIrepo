import * as React from "react";
import type { DialogOpenChangeData, DialogProps } from "./Dialog.types";
import {
  DialogContextValue,
  DialogProvider,
  DialogSurfaceContextValue,
  DialogSurfaceProvider,
} from "../../contexts";
import {
  useControllableState,
  useId,
} from "FCB-ui";
import { useEventCallback } from "../../../../utils/useEventCallback";
export const Dialog: React.FC<DialogProps> = React.memo((props) => {
  const {
    children,
    modalType = "modal",
    onOpenChange,
    backdropClosable = true,
  } = props;
  const [trigger, content] = childrenToTriggerAndContent(children);

  const [open, setOpen] = useControllableState({
    state: props.open,
    defaultState: props.defaultOpen,
    initialState: false,
  });

  const requestOpenChange = useEventCallback((data: DialogOpenChangeData) => {
    onOpenChange?.(data.event, data);
    if (!data.event.isDefaultPrevented()) {
      setOpen(data.open);
    }
  });

  const dialog: DialogContextValue = {
    open,
    modalType,
    dialogTitleId: useId("dialog-title-"),
    requestOpenChange,
    backdropClosable,
  };

  const dialogSurface: DialogSurfaceContextValue = false;

  return (
    <DialogProvider value={dialog}>
      <DialogSurfaceProvider value={dialogSurface}>
        {trigger}
        {content}
      </DialogSurfaceProvider>
    </DialogProvider>
  );
});

Dialog.displayName = "Dialog";

/**
 * Extracts trigger and content from children
 */
function childrenToTriggerAndContent(
  children: React.ReactNode
): readonly [trigger: React.ReactNode, content: React.ReactNode] {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement[];
  switch (childrenArray.length) {
    // case where there's a trigger followed by content
    case 2:
      return childrenArray as [
        trigger: React.ReactNode,
        content: React.ReactNode,
      ];
    // case where there's only content
    case 1:
      return [undefined, childrenArray[0]];
    // unknown case
    default:
      return [undefined, undefined];
  }
}
