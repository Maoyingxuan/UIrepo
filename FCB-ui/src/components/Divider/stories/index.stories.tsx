import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from "../Divider";
import { Default } from './Default.stories';
import DefaultSource from "./Default.stories?raw";
import { FCBProvider ,tokens} from 'FCB-ui';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Divider',
  component: Divider,
  decorators:[
    (Story)=>(
      <FCBProvider>
        <div style={
          {
            padding:"48px, 24px",
            backgroundColor: tokens.colorNeutralBackground2
          }
        }>
        <Story />
        </div>
      </FCBProvider>
    )
  ]
}  satisfies Meta<typeof Divider> 

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {

};

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };


