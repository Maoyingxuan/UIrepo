import { makeStyles, mergeClasses } from "@griffel/react";
import { FCBProvider, tokens } from "FCB-ui";
import { useThemeStyleTag } from "./useThemeStyleTag";

const FCBProviderClassNames = {
  root: "FCBui-FCBProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({ className, theme }:any) => {
  const baseStyles = useBaseStyles();
  // 根据theme创建cssrules
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    FCBProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
