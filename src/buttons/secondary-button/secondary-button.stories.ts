import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from './secondary-button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/Secondary Button',
  component: SecondaryButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Test' as unknown as JSX.Element,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Test' as unknown as JSX.Element,
    disabled: true,
  },
};
