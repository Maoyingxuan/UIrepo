import React from "react"
import { ForwardRefComponent } from "../../utils/types"
import { mergeClasses } from "@griffel/react";
import {
  inputClassNames,
  useContentClassName,
  useContentStyles,
  useInputClassName,
  useInputElementStyles,
  useRootClassName,
  useRootStyles,
} from "./useInputStyles.styles";
type ContentType = {
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
};
export type InputOnChangeData = {
  /** Updated input value from the user */
  value: string;
};
export type InputProps = React.HTMLAttributes<HTMLInputElement> &
  ContentType & {
    /**
     * 是否禁用输入框。
     */
    disabled?: boolean;

    /**
     * 类名。
     */
    className?: string;

    /** Input can't have children. */
    children?: never;

    /**
     * 尺寸
     * @default 'medium'
     */
    // This name overlaps with the native `size` prop, but that prop isn't very useful in practice
    size?: "small" | "medium" | "large";

    /**
     * 样式
     * @default 'outline'
     */
    appearance?:
      | "outline"
      | "underline"
      | "filled-darker"
      | "filled-lighter"
      | "filled-darker-shadow"
      | "filled-lighter-shadow";

    /**
     * 默认值
     *
     */
    defaultValue?: string;

    /**
     * 
     * 
     */
    value?: string;

    /**
     * Called when the user changes the input's value.
     */
    onChange?: (
      ev: React.ChangeEvent<HTMLInputElement>,
      data: InputOnChangeData
    ) => void;

    /**
     * 类型
     * @default 'text'
     */
    type?:
      | "text"
      | "email"
      | "password"
      | "search"
      | "tel"
      | "url"
      | "date"
      | "datetime-local"
      | "month"
      | "number"
      | "time"
      | "week";
  };

export const Input: ForwardRefComponent<InputProps> = React.forwardRef((
    props,
    ref
)=>{
    const {
      type = "text",
      size = "medium",
      appearance = "outline",
      defaultValue, // 非受控组件
      value: _value = "",
      onChange,
      contentBefore,
      contentAfter,
      disabled,
      className,
      ...rest
    } = props
    const rootStyles = useRootStyles()
    const invalid = `${props["aria-invalid"]}` === "true";
    const filled = appearance.indexOf("filled") > -1;
    const contentStyles = useContentStyles()
    const contentClasses = [
      useContentClassName(),
      disabled && contentStyles.disabled,
      contentStyles[size],
    ];
    const inputStyles = useInputElementStyles();
    const [value, setValue] = React.useState(_value);
    return(
        <span className={
            mergeClasses(
                inputClassNames.root,
                useRootClassName(),
                rootStyles[size],
                !!contentBefore && rootStyles[`${size}WithContentBefore`],
                !!contentAfter && rootStyles[`${size}WithContentAfter`],
                rootStyles[appearance],
                !disabled &&
                    (appearance === "outline" || appearance === "underline") &&
                    rootStyles[`${appearance}Interactive`],
                !disabled && filled && rootStyles.filledInteractive,
                filled && rootStyles.filled,
                invalid && rootStyles.invalid,
                disabled && rootStyles.disabled,
                className
            )
        }>
        {contentBefore && (
          <span
            className={mergeClasses(
              inputClassNames.contentBefore,
              ...contentClasses
            )}
          >
            {contentBefore}
          </span>
        )}
        <input type = {type} ref = {ref as React.Ref<HTMLInputElement>}
          className={mergeClasses(
            inputClassNames.input,
            useInputClassName(),
            inputStyles[size],
            !!contentBefore && inputStyles[`${size}WithContentBefore`],
            !!contentAfter && inputStyles[`${size}WithContentAfter`],
            disabled && inputStyles.disabled,
          )}
          value={value}
          onChange={(e)=>{
            const newval = e.target.value
            onChange?.(e,{value:newval})
            setValue(newval)
          }}
        {...rest} />
        {contentAfter && (
          <span
            className={mergeClasses(
              inputClassNames.contentAfter,
              ...contentClasses
            )}
          >
            {contentAfter}
          </span>
        )}
        </span>
    )
})