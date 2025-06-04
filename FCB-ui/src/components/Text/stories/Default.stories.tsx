import { Text } from "FCB-ui";
export const Default = (args: React.ComponentProps<typeof Text>) => {
    return(
        <Text {...args}>
        parents
        <div style={{ backgroundColor: "red" }}>
        <Text {...args}>child</Text>
        </div>
        </Text>
    )
}