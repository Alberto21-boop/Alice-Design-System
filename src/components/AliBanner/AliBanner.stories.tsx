import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliBanner from './index';

export default {
    title: 'Componentes/AliBanner',
    component: AliBanner,
    argTypes: {
        themeColor: {
            control: 'select',
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
            description: 'Define the banner color theme',
        },
        imageUrl: {
            control: 'text',
            description: 'Optional image for the banner',
        },
        text: {
            control: 'text',
            description: 'Text to be displayed in the banner',
        },
    },
} as Meta;

// Define valores padrão no Template para evitar erros
const Template: StoryFn<typeof AliBanner> = (args) => <AliBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Este é um banner de exemplo!',
    themeColor: 'blue',
    imageUrl: 'https://via.placeholder.com/48x64', // Imagem de exemplo, tamanho 3x4
};
