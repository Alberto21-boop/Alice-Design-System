import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliLink, { AliLinkProps } from './index'; // Importando o AliLink do arquivo correto

// Exportar a configuração do Storybook
export default {
    title: 'Componentes/AliLink', // Título do componente no Storybook
    component: AliLink,           // O componente principal
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
        isSecondary: {
            control: 'boolean', // Controle para o estilo secundário
        },
        isTertiary: {
            control: 'boolean', // Certifique-se de que o controle terciário está configurado como booleano
        }
    }
} as Meta<AliLinkProps>; // Certifique-se de que o Meta está tipado corretamente

// Template para criar as stories
const Template: StoryFn<AliLinkProps> = (args) => <AliLink {...args} />;

// História padrão
export const DefaultLink = Template.bind({});
DefaultLink.args = {
    href: '#',
    children: 'Link Example',
    themeColor: 'blue',
    isSecondary: false, // Estilo padrão
    isTertiary: false,
};

// História secundária com animação de piscar
export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
    href: '#',
    children: 'Secondary Link',
    themeColor: 'green',
    isSecondary: true, // Estilo com animação de piscar
    isTertiary: false,
};

export const TertiaryLink = Template.bind({});
TertiaryLink.args = {
    href: '#',
    children: 'Tertiary Link',
    themeColor: 'purple',
    isSecondary: false,
    isTertiary: true, // Estilo com piscar e vibrar
};