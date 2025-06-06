import type { Meta } from '@storybook/react';
import { Input } from "FCB-ui";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";
import { UseIdInput } from "./UseIdinput.stories";
import UseIdInputSource from "./UseIdinput.stories?raw";
import { Controlled } from "./Controlled.stories";
import ControlledSource from "./Controlled.stories?raw";
import unControlledSource from "./unControlled.stories?raw";
import { uncontrolled } from "./unControlled.stories";
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
(UseIdInput as any).parameters = {
  docs: {
    description: {
      story: "使用自定义useId来生成唯一的 ID，并将其绑定到 Input 和 Label 组件上。",
    },
    source: {
      code: UseIdInputSource,
    },
  },
};
(Controlled as any).parameters = {
  docs: {
    description:{
      story: "受控组件示例，使用 useState 来管理输入值。",
    },
    source: {
      code: ControlledSource,
    },
  },
};
(uncontrolled as any).parameters = {
  docs: {
    description: {
      story: "非受控组件示例，使用 defaultValue 来设置初始值，并通过 onChange 事件处理输入变化。",
    },
    source: {
      code: unControlledSource,
    },
  },
};
export {Default}
export {UseIdInput}
export {Controlled}
export {uncontrolled}