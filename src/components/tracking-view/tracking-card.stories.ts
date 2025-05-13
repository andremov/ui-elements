import type { Meta, StoryObj } from '@storybook/react';
import { TrackingCard } from './tracking-card';
import { Temporal } from '@js-temporal/polyfill';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Cards/Tracking Card',
  component: TrackingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TrackingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Compact: Story = {
  args: {
    address: '123 Main St, Springfield, IL',
    ETA: Temporal.Now.plainDateTimeISO().add({ minutes: 27 }),
    containerCount: 5,
    containerWeight: 1000,
    trackingNumber: '1Z999AA1012',
    deliveryStatus: 'In Transit',
    deliveryDriver: 'John Doe',
    deliveryID: 'D1234',
    viewType: 'compact',
  },
};

export const Expanded: Story = {
  args: {
    address: '123 Main St, Springfield, IL',
    ETA: Temporal.Now.plainDateTimeISO().add({ minutes: 27 }),
    containerCount: 5,
    containerWeight: 1000,
    trackingNumber: '1Z999AA1012',
    deliveryStatus: 'In Transit',
    deliveryDriver: 'John Doe',
    deliveryID: 'D1234',
    viewType: 'expanded',
  },
};
