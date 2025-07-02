import type { Meta, StoryObj } from '@storybook/react';
import { BorderedCard } from './bordered-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/Bordered Card',
  component: BorderedCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BorderedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Geography: Story = {
  args: {
    backgroundColor: 'bg-amber-300',
    cardTitle: 'Mountains',
    categoryName: 'Geography',
  },
};

export const History: Story = {
  args: {
    backgroundColor: 'bg-blue-300',
    cardTitle: 'Government',
    categoryName: 'History',
  },
};
