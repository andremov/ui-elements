import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from './timer';

const meta = {
  title: 'Utils/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['stopwatch', 'countdown'],
    },
    initialTime: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stopwatch: Story = {
  args: {
    mode: 'stopwatch',
    initialTime: 0,
  },
};

export const StopwatchWithInitialTime: Story = {
  args: {
    mode: 'stopwatch',
    initialTime: 30, // Start at 30 seconds
  },
};

export const CountdownTimer: Story = {
  args: {
    mode: 'countdown',
    initialTime: 60, // 1 minute
    onComplete: () => alert('Timer completed!'),
  },
};

export const LongCountdown: Story = {
  args: {
    mode: 'countdown',
    initialTime: 3665, // 1 hour, 1 minute, 5 seconds
    onComplete: () => console.log('Long timer completed!'),
  },
};

export const CustomStyled: Story = {
  args: {
    mode: 'stopwatch',
    initialTime: 0,
    className: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-300',
  },
};
