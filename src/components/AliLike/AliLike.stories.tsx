import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliLike from './index';

export default {
    title: 'Componentes/AliLike',
    component: AliLike,
} as Meta;

const Template: StoryFn = (args) => <AliLike {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Give a Like',
    liked: false,
    themeColor: 'blue',
};

export const Liked = Template.bind({});
Liked.args = {
    label: 'You Liked',
    liked: true,
    themeColor: 'green',
};
