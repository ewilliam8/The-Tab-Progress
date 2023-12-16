import type { Meta, StoryObj } from '@storybook/react';
import {AppLink} from './AppLink';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: 'test.url',
    children: 'link'
  },
};

export const Outlined: Story = {
  args: {
    to: 'test.url',
    children: 'link'
  },
};
