import type { Meta } from '@storybook/react';
import { Label } from "FCB-ui";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";

const meta = {
  title: 'components/Label',
  component: Label,
  argTypes: {
    disabled: {
    control: 'boolean',
    description: '禁用',
    defaultValue: false,
  },
  required: {
    control: 'text',
    description: '必填字段',
    defaultValue: false,
  },
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
    description: '尺寸',
    defaultValue: 'medium',
  },
  weight: {
    control: 'radio',
    options: ['regular', 'semibold'],
    description: '字重',
    defaultValue: 'regular',
  },
  }
}  satisfies Meta<typeof Label>

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};
export {Default}