import type { DialogSurfaceContextValue } from "../../contexts";

import type { DialogSurfaceContextValues } from "./DialogSurface.types";

export function useDialogSurfaceContextValues(): DialogSurfaceContextValues {
  const dialogSurface: DialogSurfaceContextValue = true;
  return { dialogSurface };
}
