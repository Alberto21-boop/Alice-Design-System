import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliSidebar from '../AliSideBar';

// Defina as opções de cores válidas
type ThemeColorOptions =
    | 'blue'
    | 'green'
    | 'alert-red'
    | 'gray-dark'
    | 'purple'
    | 'pink'
    | 'yellow'
    | 'orange'
    | 'alice-blue'
    | 'yellow-soft'
    | 'yellow-bright'
    | 'charcoal'
    | 'slate'
    | 'onyx';

export default {
    title: 'Componentes/AliSidebar',
    component: AliSidebar,
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
    },
} as Meta;

const Template: StoryFn<typeof AliSidebar> = (args) => <AliSidebar {...args} />;

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
    themeColor: 'blue', // valor inicial para o themeColor
};
