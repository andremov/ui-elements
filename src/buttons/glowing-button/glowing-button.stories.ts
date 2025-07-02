import type { Meta, StoryObj } from '@storybook/react';
import { GlowingButton } from './glowing-button';

const meta = {
  title: 'Buttons/Glowing Button',
  component: GlowingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlowingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark: Story = {
  args: {
    label: 'Glowing Button',
  },
};
export const Light: Story = {
  args: {
    label: 'Glowing Button',
    textColor: '#000000',
    backgroundColor: '#ffffff',
  },
};
