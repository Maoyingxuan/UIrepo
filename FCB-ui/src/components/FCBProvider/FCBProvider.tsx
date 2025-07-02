import type {Theme} from "FCB-ui"
import { webLightTheme } from "FCB-ui";
//传递theme，使子组件生效
//跨组件传递参数（theme）
//props context
import React from "react";

import { useStyles } from "./useStyles.styles";
type ThemeContextValue = Theme | Partial<Theme> | undefined

const ThemeContext = React.createContext<ThemeContextValue>(undefined);
export const FCBProvider = ({className, theme= webLightTheme, children , ...restProps}:any) => {
    const cls = useStyles({className, theme})
    return(
        <ThemeContext.Provider value={theme} {...restProps}>
        <div className={cls}>{children}</div>
      </ThemeContext.Provider>
    ) 
}