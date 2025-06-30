import * as React from "react";
import {
  type ForwardRefComponent,
  useIsomorphicLayoutEffect,
} from "FCB-ui";
import { DialogSurfaceProps } from "./DialogSurface.types";
import { Portal } from "FCB-ui";
import {
  DialogContextValue,
  DialogSurfaceProvider,
  useDialogContext,
} from "../../contexts";
import { useEventCallback } from "../../../../utils/useEventCallback";
import { useDialogSurfaceContextValues } from "./useDialogSurfaceContextValues";
import { useDialogSurfaceStyles } from "./useDialogSurfaceStyles.styles";
import { FCBProvider } from "FCB-ui";
import { useDisableBodyScroll } from "../../utils/useDisableBodyScroll";
import { isResolvedShorthand } from "../../utils/isResolvedShorthand";
/**
 * DialogSurface component represents the visual part of a `Dialog` as a whole,
 * it contains everything that should be visible.
 */
export const DialogSurface: ForwardRefComponent<DialogSurfaceProps> =
  React.forwardRef((props, ref) => {
    const { backdrop, mountNode, ...restProps } = props;

    const {
      modalType,
      requestOpenChange,
      dialogTitleId,
      open,
      backdropClosable,
    } = useDialogContext((ctx: DialogContextValue) => ctx);

    const contextValues = useDialogSurfaceContextValues();

    const handleKeyDown = useEventCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        props.onKeyDown?.(event);

        if (event.key === 'Escape' && !event.isDefaultPrevented()) {
          requestOpenChange({
            event,
            open: false,
            type: "escapeKeyDown",
          });
          // stop propagation to avoid conflicting with other elements that listen for `Escape`
          // e,g: nested Dialog, Popover, Menu and Tooltip
          event.preventDefault();
        }
      }
    );

    const styles = useDialogSurfaceStyles(props);

    const handledBackdropClick = useEventCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (backdropClosable === false) {
          return;
        }
        if (isResolvedShorthand(props.backdrop)) {
          props.backdrop!.onClick?.(event);
        }
        if (modalType === "modal" && !event.isDefaultPrevented()) {
          requestOpenChange({
            event,
            open: false,
            type: "backdropClick",
          });
        }
      }
    );

    const { disableBodyScroll, enableBodyScroll } = useDisableBodyScroll();

    useIsomorphicLayoutEffect(() => {
      if (modalType === "non-modal") {
        return;
      }

      if (open) {
        disableBodyScroll();
      }

      return () => {
        // cleanup
        // 1. 组件卸载之前执行 2. 依赖项变更，组件更新之前执行
        enableBodyScroll();
      };
    }, [enableBodyScroll, disableBodyScroll, modalType, open]);

    if (!open) {
      return null;
    }

    return (
      <Portal mountNode={mountNode}>
        <FCBProvider>
          {modalType !== "non-modal" && (
            <div
              className={styles.backdrop}
              onClick={handledBackdropClick}
              aria-hidden={true}
            >
              {backdrop}
            </div>
          )}
          <DialogSurfaceProvider value={contextValues.dialogSurface}>
            <div
              className={styles.root}
              tabIndex={-1}
              aria-modal={modalType !== "non-modal"}
              role={modalType === "alert" ? "alertdialog" : "dialog"}
              aria-labelledby={
                restProps["aria-label"] ? undefined : dialogTitleId
              }
              {...restProps}
              ref={ref as React.Ref<HTMLDivElement>}
              onKeyDown={handleKeyDown}
            />
          </DialogSurfaceProvider>
        </FCBProvider>
      </Portal>
    );
  });

DialogSurface.displayName = "DialogSurface";

