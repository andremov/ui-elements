import type { Meta, StoryObj } from '@storybook/react';
import { RequestStatus, RequestStatusBadge } from './request-status-badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Badges/Request Badges',
  component: RequestStatusBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RequestStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoRequestStatus: Story = {
  parameters: {},
  args: {
    currentStatus: RequestStatus.none,
  },
};

export const CustomProcessingRequestStatus: Story = {
  parameters: {},
  args: {
    currentStatus: RequestStatus.processing,
    processingText: 'Working on it',
  },
};

export const ProcessingRequestStatus: Story = {
  parameters: {},
  args: {
    currentStatus: RequestStatus.processing,
  },
};

export const ErrorRequestStatus: Story = {
  parameters: {},
  args: {
    currentStatus: RequestStatus.error,
  },
};
export const SuccessRequestStatus: Story = {
  parameters: {},
  args: {
    currentStatus: RequestStatus.success,
  },
};
