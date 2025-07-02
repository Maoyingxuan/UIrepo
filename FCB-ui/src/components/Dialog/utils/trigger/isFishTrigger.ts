import * as React from "react";

import type { FcbTriggerComponent, TriggerProps } from "./types";

/**
 * @internal
 * Checks if a given element is a FishUI trigger (e.g. `MenuTrigger` or `Tooltip`).
 * See the {@link FcbTriggerComponent} type for more info.
 */
export function isFishTrigger(
  element: React.ReactElement
): element is React.ReactElement<TriggerProps> {
  return Boolean((element.type as FcbTriggerComponent).isFcbTriggerComponent);
}
