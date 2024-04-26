import type { Meta, StoryObj } from '@storybook/react';
import { GlowingButton } from './GlowingButton';

const meta = {
  title: 'Buttons/GlowingButton',
  component: GlowingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlowingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'GlowingButton',
  },
};
