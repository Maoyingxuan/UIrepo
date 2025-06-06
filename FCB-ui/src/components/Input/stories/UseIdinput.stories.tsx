import { Input,Label,useId } from "FCB-ui";
export const UseIdInput = () => {
    const id = useId("input");
    return(
        <div>
        <Label htmlFor={id}> 绑定 Input</Label>
        <Input id={id}/>
        </div>
    )
}