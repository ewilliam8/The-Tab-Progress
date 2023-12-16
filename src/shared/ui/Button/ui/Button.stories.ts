import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonTheme} from './Button';

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
    },
};

export const Rounded: Story = {
    args: {
        theme: ButtonTheme.ROUNDED,
        children: 'Button',
    },
};
