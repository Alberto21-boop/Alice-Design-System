import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTabs from './index';

export default {
    title: 'Componentes/AliTabs',
    component: AliTabs,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
                    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
                ]
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'] // Adicionando a opção de variante
            }
        }
    }
} as Meta;

const Template: StoryFn<typeof AliTabs> = (args) => <AliTabs {...args} />;

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
    tabs: [
        { label: 'Tab 1', content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' },
        { label: 'Tab 3', content: 'Content for Tab 3' },
        { label: 'Tab 4', content: 'Content for Tab 4' },
        { label: 'Tab 5', content: 'Content for Tab 5' },
    ],
    themeColor: 'blue',
    variant: 'primary'  // Pode ser 'primary' ou 'secondary'
};
