import type { Meta, StoryObj } from '@storybook/react';
import { TallyCounter } from './tally-counter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Utils/Tally Counter',
  component: TallyCounter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TallyCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RTL: Story = {
  args: {
    count: 8,
  },
};

export const LTR: Story = {
  args: {
    reverse: true,
    count: 6,
  },
};

export const TooBig: Story = {
  args: {
    count: 17,
  },
};

export const Zero: Story = {
  args: {
    count: 0,
  },
};
