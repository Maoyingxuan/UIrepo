import React from "react";

export const useId = (prefix: string = "fcb-ui-") => {
  const id = React.useId();
  return `${prefix}-${id}`;
};
