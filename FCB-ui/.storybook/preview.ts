import type { Preview } from '@storybook/react'

import { withFCBProvider } from '../docs/withFCBProvider';
export const decorators = [withFCBProvider]
const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs:{
      canvas:{
        withToolbar: false,
      }
    }
  },
};

export default preview;