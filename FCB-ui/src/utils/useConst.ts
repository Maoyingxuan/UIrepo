import * as React from "react";
export function useConst<T>(initialValue: T | (() => T)): T {
  const ref = React.useRef<{ value: T }>();
  if (ref.current === undefined) {
    ref.current = {
      value:
        typeof initialValue === "function"
          ? 
            (initialValue as any)()
          : initialValue,
    };
  }
  return ref.current.value;
}



