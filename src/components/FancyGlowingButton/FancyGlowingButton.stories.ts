import type { Meta, StoryObj } from '@storybook/react';
import { FancyGlowingButton } from './FancyGlowingButton';

const meta = {
  title: 'FancyGlowingButton',
  component: FancyGlowingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyGlowingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'FancyGlowingButton',
  },
};
