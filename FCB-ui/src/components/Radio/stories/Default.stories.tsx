import { Radio } from "../Radio";
import { RadioGroup } from "../RadioGroup";
import { Label } from "../../Label";
import { RadioGroupProps } from "../RadioGroup.types";
import React from "react";
export const Default = (props: Partial<RadioGroupProps>) => {
  const [value, setValue] = React.useState<string | undefined>("");
    const onchange = (ev: React.FormEvent<HTMLDivElement>, data: { value: string }) => {
    setValue(data.value);
  };
  
  return (
    <>  
    <Label>Choose your favorite fruit:</Label>
    <RadioGroup {...props} onChange={onchange} value={value}>
      <Radio value="apple" label="Apple" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
      <Radio value="grape" label="Grape" />
      <Radio value="mango" label="Mango" />
    </RadioGroup>
    </>
  );
}