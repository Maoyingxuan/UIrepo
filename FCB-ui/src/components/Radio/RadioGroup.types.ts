import * as React from "react";

export type RadioGroupProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /**
   * The name of this radio group. This name is applied to all Radio items inside this group.
   *
   * If no name is provided, one will be generated so that all of the Radio items have the same name.
   */
  name?: string;

  /**
   * The selected Radio item in this group.
   *
   * This should be the `value` prop of one of the Radio items inside this group.
   */
  value?: string;

  /**
   * The default selected Radio item in this group.
   *
   * This should be the `value` prop of one of the Radio items inside this group.
   */
  defaultValue?: string;

  /**
   * Callback when the selected Radio item changes.
   */
  onChange?: (
    ev: React.FormEvent<HTMLDivElement>,
    data: RadioGroupOnChangeData
  ) => void;

  /**
   * How the radio items are laid out in the group.
   *
   * @default vertical
   */
  layout?: "vertical" | "horizontal" | "horizontal-stacked";

  /**
   * Disable all Radio items in this group.
   */
  disabled?: boolean;

  /**
   * Require a selection in this group. Adds the `required` prop to all child Radio items.
   */
  required?: boolean;
};

/**
 * Data for the onChange event for RadioGroup.
 */
export type RadioGroupOnChangeData = {
  /**
   * The value of the newly selected Radio item.
   */
  value: string;
};

export type RadioGroupContextValue = Pick<
  RadioGroupProps,
  "name" | "value" | "defaultValue" | "disabled" | "layout" | "required"
>;

export type RadioGroupContextValues = {
  radioGroup: RadioGroupContextValue;
};