import React from "react";
import { ForwardRefComponent } from "../../utils/types";
import { checkboxClassNames, useCheckboxStyles, useInputBaseClassName, useInputStyles, useLabelStyles } from "./useCheckboxstyles.styles";
import { Label, useControllableState, useId } from "FCB-ui";
import { mergeClasses } from "@griffel/react";
import { useEventCallback } from "../../utils/useEventCallback";

export type CheckboxProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  disabled?: boolean;

  required?: boolean;

  /**
   * The controlled value for the checkbox.
   *
   * @default false
   */
  checked?: "mixed" | boolean;

  /**
   * Whether the checkbox should be rendered as checked by default.
   */
  defaultChecked?: "mixed" | boolean;

  /**
   * Checkboxes don't support children. To add a label, use the `label` prop.
   */
  children?: never;

  /**
   * The Checkbox's label.
   */
  label?: React.ReactNode | string;

  /**
   * The position of the label relative to the checkbox indicator.
   *
   * @default after
   */
  labelPosition?: "before" | "after";

  /**
   * 改变复选框的选中状态时触发的回调函数。
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxOnChangeData
  ) => void;

  /**
   * The size of the checkbox indicator.
   *
   * @default medium
   */
  size?: "medium" | "large";
};

/**
 * Data for the onChange event for checkbox.
 */
export interface CheckboxOnChangeData {
  checked: "mixed" | boolean;
}
export const Checkbox :ForwardRefComponent<CheckboxProps> = React.forwardRef(
    (props, ref) => {
    const {
      disabled = false,
      required,
      size = "medium",
      labelPosition = "after",
      onChange,
      label,
      checked: _checked,
      defaultChecked,
      ...restProps
    } = props;

    const [checked, setChecked] = useControllableState({
      defaultState: defaultChecked,
      state: _checked,
      initialState: false,
    });

    const id = useId("checkbox-");

    const styles = useCheckboxStyles({
      checked,
      disabled,
      labelPosition,
      size,
    });

    const inputStyles = useInputStyles();
    const inputBaseClassName = useInputBaseClassName();

    const inputClassNames = mergeClasses(
      checkboxClassNames.input,
      inputBaseClassName,
      size === "large" && inputStyles.large,
      inputStyles[labelPosition]
    );

    const labelStyles = useLabelStyles();

    const _label = label && (
      <Label
        htmlFor={id}
        disabled={disabled}
        required={required}
        size="medium"
        className={mergeClasses(
          checkboxClassNames.label,
          labelStyles.base,
          labelStyles[size],
          labelStyles[labelPosition]
        )}
        children={label}
      />
    );

    return (
      <div {...restProps} className={styles.root} ref={null}>
        <input
          id={id}
          disabled={disabled}
          className={inputClassNames}
          type="checkbox"
          ref={ref as React.Ref<HTMLInputElement>}
          checked={checked === true}
          onChange={useEventCallback((ev) => {
            const val = ev.currentTarget.indeterminate
              ? "mixed"
              : ev.currentTarget.checked;
            onChange?.(ev, { checked: val });
            setChecked(val);
          })}
        />

        {labelPosition === "before" && _label}

        <span aria-hidden={true} className={styles.indicator}></span> 

        {labelPosition === "after" && _label}
      </div>
    );
  })