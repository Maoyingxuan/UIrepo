import { isValidElement } from "react";

export function isResolvedShorthand(
  /* eslint-disable @typescript-eslint/no-explicit-any */
  shorthand?: any
) {
  return (
    shorthand !== null &&
    typeof shorthand === "object" &&
    !Array.isArray(shorthand) &&
    !isValidElement(shorthand)
  );
}
