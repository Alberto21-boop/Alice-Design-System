import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AliButton } from './AliButton';

export default {
    title: 'AliButton',
    component: AliButton,
    argTypes: {
        actionLevel: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
    },
} as Meta<typeof AliButton>;

const Template: StoryFn<typeof AliButton> = (args) => <AliButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    actionLevel: 'primary',
    size: 'md',
    children: 'Primary Button',
    AliClick: () => alert('Primary Button Clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
    actionLevel: 'secondary',
    size: 'md',
    children: 'Secondary Button',
    AliClick: () => alert('Secondary Button Clicked!'),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    actionLevel: 'tertiary',
    size: 'md',
    children: 'Tertiary Button',
    AliClick: () => alert('Tertiary Button Clicked!'),
};
