import { SizeType } from "./types";

export function isPresetSize(
  size?: SizeType | string | number
): size is SizeType {
  return ["small", "medium", "large"].includes(size as string);
}

export function isValidGapNumber(
  size?: SizeType | string | number
): size is number {
  if (!size) {
    return false;
  }
  return typeof size === "number" && !Number.isNaN(size);
}
