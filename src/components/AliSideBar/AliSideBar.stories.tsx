import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliSidebar, { ThemeColorOptions } from '../AliSideBar';
import { faCoffee, faCheckCircle, faTimesCircle, faUser, faHome, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                ] as ThemeColorOptions[],
            },
            description: 'Define a cor tema do sidebar',
            defaultValue: 'blue',
            table: {
                type: { summary: 'ThemeColorOptions' },
                defaultValue: { summary: 'blue' },
            },
        },
        buttons: {
            control: {
                type: 'object',
            },
            description: 'Lista de botões para o sidebar, cada um com um ícone e texto',
            table: {
                type: { summary: 'Array<{ icon: any; text: string }>' },
                defaultValue: { summary: 'defaultButtons' },
            },
        },
    },
} as Meta<typeof AliSidebar>;

const Template: StoryFn<typeof AliSidebar> = (args) => <AliSidebar {...args} />;

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
    themeColor: 'blue',
    buttons: [
        { icon: faCoffee, text: 'Coffee' },
        { icon: faCheckCircle, text: 'CheckCircle' },
        { icon: faTimesCircle, text: 'TimesCircle' },
        { icon: faUser, text: 'User' },
        { icon: faHome, text: 'Home' },
        { icon: faSearch, text: 'Search' },
        { icon: faBell, text: 'Bell' },
        { icon: faEnvelope, text: 'Envelope' },
    ],
};
