import type { Meta, StoryObj } from '@storybook/react';
import { PolkaDotBackground } from './polka-dot';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Backgrounds/Polka Dot',
  component: PolkaDotBackground,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PolkaDotBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {},
  args: {
    backgroundColor: '#f0f0f0',
    dotColor: '#ff6347',
    dotRows: 10,
    dotsPerRow: 10,
    direction: 'bottom-right',
    dotPace: 0.0005,
    dotStartingSize: 10,
    dotTargetSize: 90,
  },
};
