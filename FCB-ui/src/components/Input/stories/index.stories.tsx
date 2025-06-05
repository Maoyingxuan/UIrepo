import type { Meta } from '@storybook/react';
import { Input } from "FCB-ui";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";

const meta = {
  title: 'components/Input',
  component: Input,
argTypes: {
  disabled: {
    control: 'boolean',
    description: '是否禁用输入框。',
    defaultValue: false,
  },
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
    description: '尺寸',
    defaultValue: 'medium',
  },
  appearance: {
    control: 'radio',
    options: [
      'outline',
      'underline',
      'filled-darker',
      'filled-lighter',
      'filled-darker-shadow',
      'filled-lighter-shadow'
    ],
    description: '样式',
    defaultValue: 'outline',
  },
  defaultValue: {
    control: 'text',
    description: '默认值',
  },
  onChange: {
    action: 'value changed',
    description: "当用户改变输入值时触发。",
    table: {
      category: 'Events',
    },
  },
  type: {
    control: 'select',
    options: [
      'text',
      'email',
      'password',
      'search',
      'tel',
      'url',
      'date',
      'datetime-local',
      'month',
      'number',
      'time',
      'week'
    ],
    description: '类型',
    defaultValue: 'text',
  },
}
}  satisfies Meta<typeof Input>

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};
export {Default}