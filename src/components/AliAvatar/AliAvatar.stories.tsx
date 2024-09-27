import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliAvatar from './index';

export default {
    title: 'Componentes/AliAvatar',
    component: AliAvatar,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        src: {
            control: 'text',
        },
        name: {
            control: 'text',
        },
    },
} as Meta;

const Template: StoryFn<typeof AliAvatar> = (args) => <AliAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'John Doe',
    size: 'medium',
};

export const WithImage = Template.bind({});
WithImage.args = {
    src: 'https://via.placeholder.com/150', // Exemplo de imagem de avatar
    name: 'John Doe',
    size: 'medium',
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
    name: 'Jane Smith',
    size: 'large',
};
