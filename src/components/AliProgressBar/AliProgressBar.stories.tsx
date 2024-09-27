import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliProgressBar from './index';

export default {
    title: 'Componentes/AliProgressBar',
    component: AliProgressBar,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue',
                    'green',
                    'alert-red',
                    'gray-dark',
                    'purple',
                    'pink',
                    'yellow',
                    'orange',
                    'alice-blue',
                    'yellow-soft',
                    'yellow-bright',
                    'charcoal',
                    'slate',
                    'onyx',
                ],
            },
        },
        progress: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1,
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliProgressBar> = (args) => <AliProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    progress: 50, // Valor inicial do progresso
};
