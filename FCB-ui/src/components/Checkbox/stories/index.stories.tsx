import { Meta } from "@storybook/react/*";
import { Checkbox } from "../Checkbox";
import { Default } from "./Default.stories";
import DefaultSource from "./Default.stories?raw";
const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '是否禁用复选框',
      defaultValue: false,
    },
    required: {
      control: 'text',
      description: '是否为必填项，可传字符串或 true',
    },
    size: {
      control: 'radio',
      options: ['medium', 'large'],
      description: '复选框尺寸',
      defaultValue: 'medium',
    },
    label: {
      control: 'text',
      description: '复选框的标签文本',
    },
    labelPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: '标签的位置',
      defaultValue: 'after',
    },
  },
}  satisfies Meta<typeof Checkbox>

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};
export { Default };