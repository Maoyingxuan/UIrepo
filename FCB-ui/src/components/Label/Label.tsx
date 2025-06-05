import { ForwardRefComponent } from "FCB-ui"
import React, { ReactNode } from "react"
import { labelClassNames,useStyles } from "./useLabelStyles.styles";
import { mergeClasses } from "@griffel/react";
export type Textprops =  React.LabelHTMLAttributes<HTMLLabelElement> &  {
      /**
   * 禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 必填字段
   * @example <Label required="Required field" /> or <Label required="*" /> or <Label required /> or <Label required={<span>Required field</span>} />
   * @default false
   */
  required?: ReactNode;

  /**
   * 尺寸
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * 字重
   * @default regular
   */
  weight?: "regular" | "semibold";
}
export const Label: ForwardRefComponent<Textprops> = React.forwardRef((
    {
        disabled = false,
        required = false,
        weight = "regular",
        size = "medium",
        children,
        className,
        ...rest
    },
    ref
)=>{
    const styles = useStyles()
    return (
<label
        ref={ref as React.Ref<HTMLLabelElement>}
        className={mergeClasses(
          labelClassNames.root,
          styles.root,
          disabled && styles.disabled,
          styles[size],
          weight === "semibold" && styles.semibold,
          className
        )}
        {...rest}
        aria-hidden="true"
      >
        {children}
        {required && (
          <span
            className={mergeClasses(
              labelClassNames.required,
              styles.required,
              disabled && styles.disabled
            )}
          >
            {typeof required === "boolean" ? "*" : required}
          </span>
        )}
      </label>
    )
}
)

