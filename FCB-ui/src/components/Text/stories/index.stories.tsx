import { Text } from "FCB-ui";

import type { Meta } from '@storybook/react';

import { Change } from './Change.stories';
import  ChangeSource  from './Change.stories?raw';
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";
const meta = {
  title: 'components/Text',
  component: Text,
  argTypes: {
    align: {
      control: 'radio',
      options: ['start', 'center', 'end', 'justify'],
      description: 'Aligns text based on the parent container.',
      defaultValue: 'start',
    },
    block: {
      control: 'boolean',
      description: 'Applies a block display for the content.',
      defaultValue: false,
    },
    font: {
      control: 'radio',
      options: ['base', 'monospace', 'numeric'],
      description: 'Applies the font family to the content.',
      defaultValue: 'base',
    },
    italic: {
      control: 'boolean',
      description: 'Applies the italic font style to the content.',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      description: 'Applies font size and line height from tokens.',
      defaultValue: 300,
    },
    strikethrough: {
      control: 'boolean',
      description: 'Applies strikethrough decoration.',
      defaultValue: false,
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate overflowing text for block displays.',
      defaultValue: false,
    },
    underline: {
      control: 'boolean',
      description: 'Applies underline decoration.',
      defaultValue: false,
    },
    weight: {
      control: 'radio',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Applies font weight to the content.',
      defaultValue: 'regular',
    },
    wrap: {
      control: 'boolean',
      description: 'Wraps the text content on white spaces.',
      defaultValue: true,
    },
  }
}  satisfies Meta<typeof Text> 

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

(Change as any).parameters = {
  docs: {
    description: {
      story: "属性可以自己追加",
    },
    source: {
      code: ChangeSource,
    },
  },
};

export { Default };
export {Change}