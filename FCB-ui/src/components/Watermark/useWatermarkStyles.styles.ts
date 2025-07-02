import { WatermarkProps } from "FCB-ui";

import { makeStyles, mergeClasses } from "@griffel/react";

/**
 * Static CSS class names used internally for the component slots.
 */
export const watermarkClassNames = {
  root: "fcb-ui-Watermark",
  item: "fcb-ui-Watermark-Item",
};

export const useStyles = makeStyles({
  root: {
    position: "relative",
    overflow: "hidden",
  },
});

export const useWatermarkStyles = (props: Partial<WatermarkProps>) => {
  const { className } = props;

  const _styles = useStyles();
  const styles = {
    root: mergeClasses(watermarkClassNames.root, _styles.root, className),
  };

  return styles;
};
