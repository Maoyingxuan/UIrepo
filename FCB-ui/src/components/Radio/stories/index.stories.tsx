import type { Meta } from '@storybook/react';
import { Text } from "FCB-ui";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";
import { RadioGroup } from '../RadioGroup';

const meta = {
  title: 'components/RadioGroup',
//   argTypes:{
// name: {
//     control: 'text',
//     description: '该单选框组的名称，所有子 Radio 会继承此 name。如果未提供，会自动生成。',
//     table: {
//       type: { summary: 'string' },
//     },
//   },
//   value: {
//     description: '受控模式下，当前选中的 Radio 的值，需与某个子 Radio 的 value 相同。',
//     table: {
//       type: { summary: 'string' },
//     },
//   },
//   defaultValue: {
//     description: '非受控模式下，初始选中的 Radio 的值，需与某个子 Radio 的 value 相同。',
//     table: {
//       type: { summary: 'string' },
//     },
//   },
//   onChange: {
//     action: 'onChange',
//     description: '当选中的 Radio 变化时触发的回调，参数包括事件对象和新值。',
//     table: {
//       type: {
//         summary: '(event: FormEvent, data: { value: string }) => void',
//       },
//     },
//   },
//   layout: {
//     control: 'radio',
//     options: ['vertical', 'horizontal', 'horizontal-stacked'],
//     description: 'Radio 的排列方向：垂直、水平或堆叠式水平排列。',
//     defaultValue: 'vertical',
//     table: {
//       type: { summary: '"vertical" | "horizontal" | "horizontal-stacked"' },
//       defaultValue: { summary: 'vertical' },
//     },
//   },
//   disabled: {
//     control: 'boolean',
//     description: '是否禁用整个单选框组，所有子 Radio 都不可交互。',
//     defaultValue:  false ,
//   },
//   },
  component: RadioGroup,
}  satisfies Meta<typeof RadioGroup> 

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};



export { Default };
