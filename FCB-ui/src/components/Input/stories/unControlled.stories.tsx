import {  useId, Input, Label, InputProps } from "FCB-ui";

const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
  // Uncontrolled inputs can be notified of changes to the value
  console.log(`New value: "${ev.target.value}"`);
};

export const uncontrolled = () => {
  const inputId = useId("input");
  return (
    <div >
      <Label htmlFor={inputId}>Uncontrolled input with default value</Label>
      <Input defaultValue="default value" onChange={onChange} id={inputId} />
    </div>
  );
};
