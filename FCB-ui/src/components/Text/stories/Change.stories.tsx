import { Text } from "FCB-ui";
export const Change = (args: React.ComponentProps<typeof Text>) => {
    return(
        <Text {...args} style={{color:'green'}}>
            green-font
        </Text>
    )
}