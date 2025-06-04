import type { Meta } from '@storybook/react';
import { Divider } from "FCB-ui";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Divider',
  component: Divider,
    argTypes: {
    alignContent: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    appearance: {
      control: 'radio',
      options: ['brand', 'default', 'strong', 'subtle'],
    },
    inset: {
      control: 'boolean',
    },
    vertical: {
      control: 'boolean',
    },
  },
}  satisfies Meta<typeof Divider> 

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };


