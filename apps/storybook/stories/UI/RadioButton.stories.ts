import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from '@bug_sam/ui'

const meta: Meta<typeof RadioButton> = {
    title: 'NIAGADS-VIZ/UI/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        variant: "primary",
        label: 'Option A',
        disabled: false,
        onChange: (event) => alert("I've been selected!")
    },
};