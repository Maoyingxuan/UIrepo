import React from "react";
import {
  ForwardRefComponent,
  RadioGroupProps,
  useControllableState,
  useId,
} from "FCB-ui";
import { RadioGroupProvider, useRadioGroupContextValues } from "./context";
import { useRadioGroupStyles } from "./useRadioGroupStyles.styles";
import { useEventCallback } from "../../utils/useEventCallback";
import {isHTMLElement} from "../../utils/isHTMLelement"
export const RadioGroup: ForwardRefComponent<RadioGroupProps> =
  React.forwardRef((props, ref) => {
    const {
      children,
      className,
      onChange,
      layout = "vertical",
      ...restProps
    } = props;
    const generatedName = useId("FCB-ui-radiogroup-");

    const contextValues = useRadioGroupContextValues({
      name: generatedName,
      layout,
      ...props,
    });

    const cls = useRadioGroupStyles({
      layout,
      className,
    });

    return (
      <RadioGroupProvider value={contextValues.radioGroup}>
        <div
          {...restProps}
          className={cls}
          ref={ref as React.Ref<HTMLDivElement>}
          // 管理 RadioGroup 的 value，判断当前 Radio 是否被change
          onChange={useEventCallback((ev) => {
            if (
              onChange &&
              isHTMLElement(ev.target, {
                constructorName: "HTMLInputElement",
              }) &&
              ev.target.type === "radio"
            ) {
              onChange(ev, { value: ev.target.value });
            }
          })}
        >
          {children}
        </div>
      </RadioGroupProvider>
    );
  });

RadioGroup.displayName = "RadioGroup";
