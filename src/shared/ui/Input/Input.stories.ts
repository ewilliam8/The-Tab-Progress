import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'input value',
    }
};

export const Password: Story = {
    args: {
        value: 'input value',
        type: 'password',
    }
};
