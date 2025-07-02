import type { PortalProps } from "FCB-ui";
import { ReactNode } from "react";

import { DialogSurfaceContextValue } from "../../contexts";

/**
 * Union between all possible semantic element that represent a DialogSurface
 */
export type DialogSurfaceElement = HTMLElement;

/**
 * DialogSurface Props
 */
export type DialogSurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Dimmed background of dialog.
   * The default backdrop is rendered as a `<div>` with styling.
   * This slot expects a `<div>` element which will replace the default backdrop.
   * The backdrop should have `aria-hidden="true"`.
   *
   */
  backdrop?: React.HTMLAttributes<HTMLDivElement> & ReactNode;
} & Pick<PortalProps, "mountNode">;

export type DialogSurfaceContextValues = {
  dialogSurface: DialogSurfaceContextValue;
};
