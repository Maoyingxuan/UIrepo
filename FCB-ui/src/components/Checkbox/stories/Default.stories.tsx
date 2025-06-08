import { Checkbox } from "../Checkbox"
export const Default = (args: React.ComponentProps<typeof Checkbox>) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
    }
    return <Checkbox {...args} label = 'test' onChange={onChange}/>
}