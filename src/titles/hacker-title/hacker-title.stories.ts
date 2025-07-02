import type { Meta, StoryObj } from '@storybook/react';
import { HackerTitle } from './hacker-title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Titles/Hacker',
  component: HackerTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HackerTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FewIterationsFastAnimation: Story = {
  args: {},
};

export const FewIterationsSlowAnimation: Story = {
  args: {
    animationSpeed: 70,
  },
};
export const ManyIterationsFastAnimation: Story = {
  args: {
    letterIteration: 5,
  },
};

export const ManyIterationsSlowAnimation: Story = {
  args: {
    letterIteration: 5,
    animationSpeed: 70,
  },
};
