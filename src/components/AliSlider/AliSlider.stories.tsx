import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliSlider from './index';

export default {
    title: 'Componentes/AliSlider',
    component: AliSlider,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
                    'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
                    'charcoal', 'slate', 'onyx'
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliSlider> = (args) => <AliSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 100,
    step: 1,
    themeColor: 'blue',
};
