import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FCBProvider } from '../FCBProvider';
import { Default } from "./Default.stories";
import DefaultSource from "./Default.stories?raw";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/FCBProvider',
  component: FCBProvider,
}  satisfies Meta<typeof FCBProvider> 

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };


