import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliCarousel from './index';

export default {
    title: 'Componentes/AliCarousel',
    component: AliCarousel,
    argTypes: {
        themeColor: {
            control: 'select',
            options: [
                'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
                'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
                'charcoal', 'slate', 'onyx'
            ],
        },
    },
} as Meta;

const Template: StoryFn<typeof AliCarousel> = (args) => <AliCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    images: [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3',
    ],
};
