import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliAutoCarousel from './index';

export default {
    title: 'Componentes/AliAutoCarousel',
    component: AliAutoCarousel,
    argTypes: {
        bgColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
                    'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
                    'charcoal', 'slate', 'onyx'
                ],
            },
        },
        interval: { control: { type: 'number' } },
    },
} as Meta;

const Template: StoryFn<typeof AliAutoCarousel> = (args) => <AliAutoCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: [
        'https://via.placeholder.com/800x300/0000FF/FFFFFF?text=Slide+1',
        'https://via.placeholder.com/800x300/FF0000/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/800x300/00FF00/FFFFFF?text=Slide+3',
    ],
    interval: 3000,
    bgColor: 'gray-dark',
};
