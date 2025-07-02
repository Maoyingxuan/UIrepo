import { type ForwardRefComponent,Label, useControllableState, useId } from 'FCB-ui';
import React from 'react';

import { mergeClasses } from '@griffel/react';

import { useRadioGroupContextValue } from './context';
import { useRadioStyles } from './useRadioStyles.styles';
export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "size"
> & {
  value?: string;
  label?: React.ReactNode | string;
  // @defaultvalue after
  labelPosition?: "after" | "below";
  disabled?: boolean;
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: RadioOnChangeData
  ) => void;
};

/**
 * Data for the onChange event for Radio.
 */
export type RadioOnChangeData = {
  /**
   * The value prop of this Radio item.
   */
  value: string;
};
export const Radio: ForwardRefComponent<RadioProps> = React.forwardRef(
  (props, ref) => {
    const group = useRadioGroupContextValue();
    const {
      value,
      className,
      name = group.name,
      checked = group.value !== undefined
        ? group.value === props.value
        : undefined,
      defaultChecked = group.defaultValue !== undefined
        ? group.defaultValue === props.value
        : undefined,
      labelPosition = group.layout === "horizontal-stacked" ? "below" : "after",
      disabled = group.disabled,
      required = group.required,
      onChange,
      label,
      ...restProps
    } = props;

    const styles = useRadioStyles({ labelPosition, className });
    const id = useId("FCB-ui-radio");

    return (
      <span {...restProps} className={styles.root} ref={null}>
        <input
          id={id}
          type="radio"
          className={styles.input}
          ref={ref as React.Ref<HTMLInputElement>}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          required={required}
          onChange={(ev) =>
          {
            onChange && onChange(ev, { value: ev.target.value })
          }
          }
        />
        <div aria-hidden={true} className={styles.indicator}></div>
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            required={required}
            size="medium"
            className={styles.label}
            children={label}
          />
        )}
      </span>
    );
  }
);

Radio.displayName = "Radio";
