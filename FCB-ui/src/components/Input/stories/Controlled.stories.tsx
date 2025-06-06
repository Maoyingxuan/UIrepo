import { Input } from "FCB-ui";
import { useState } from "react";
export const Controlled = () => {
    const [value,setValue] = useState("Controlled Input");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    return(
        <div>
        <Input value={value} onChange={onChange}/>
        </div>
    )
}