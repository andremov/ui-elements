import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCard } from './question-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/Question Card',
  component: QuestionCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Geography: Story = {
  args: {
    backgroundColor: 'bg-amber-300',
    right: 0,
    wrong: 0,
    questionTitle: 'Multiple choice',
    cardTitle: 'Mountains',
    questionBody: 'Where is the tallest mountain located?',
    categoryName: 'Geography',
    correctAnswer: 1,
    optionNames: ['South America', 'Asia', 'Europe', 'Africa'],
  },
};

export const History: Story = {
  args: {
    backgroundColor: 'bg-blue-300',
    right: 1,
    wrong: 2,
    questionTitle: 'Multiple choice',
    cardTitle: 'Government',
    questionBody: 'What country had their parties take turns for 16 years?',
    categoryName: 'History',
    correctAnswer: 3,
    optionNames: ['Venezuela', 'Brazil', 'Ecuador', 'Colombia'],
  },
};
