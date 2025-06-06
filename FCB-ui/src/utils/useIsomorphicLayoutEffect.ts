import React, { useEffect } from "react";
import { canUseDOM } from "./canUseDOM";

export const useIsomorphicLayoutEffect: typeof React.useEffect = canUseDOM ? React.useLayoutEffect: React.useEffect