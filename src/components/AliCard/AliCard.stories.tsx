import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliCard from './index';

export default {
    title: 'Componentes/AliCard',
    component: AliCard,
    argTypes: {
        title: {
            control: 'text',
            description: 'O título do card',
        },
        content: {
            control: 'text',
            description: 'O conteúdo do card',
        },
        footer: {
            control: 'text',
            description: 'O conteúdo opcional do rodapé',
        },
        width: {
            control: 'text',
            description: 'Largura customizável do card',
        },
        height: {
            control: 'text',
            description: 'Altura customizável do card',
        },
        showFooterLine: {
            control: 'boolean',
            description: 'Controla se a linha do rodapé será exibida',
        },
        backgroundColor: {
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
                    'white', // Adicionando a cor branca
                ],
            },
            description: 'Cor de fundo do card',
        },
        fontColor: {
            control: {
                type: 'select',
                options: ['white', 'black'],
            },
            description: 'Cor da fonte do card',
        },
    },
} as Meta;

const Template: StoryFn = (args) => <AliCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    title: 'Card Title',
    content: 'This is the content of the card. It can contain text or other elements.',
    footer: 'Footer content goes here.',
    width: '300px',
    height: '200px',
    showFooterLine: true,
    backgroundColor: 'blue',
    fontColor: 'white',
};

export const WhiteCard = Template.bind({});
WhiteCard.args = {
    title: 'White Background Card',
    content: 'This card has a white background with black text.',
    footer: 'Footer content goes here.',
    width: '300px',
    height: '200px',
    showFooterLine: true,
    backgroundColor: 'white', // Usando a cor branca
    fontColor: 'black', // Texto preto
};

export const NoFooterLineCard = Template.bind({});
NoFooterLineCard.args = {
    title: 'Card Without Footer Line',
    content: 'This card does not have a footer line, just content and a title.',
    footer: 'Optional footer content here',
    width: '300px',
    height: '200px',
    showFooterLine: false,
    backgroundColor: 'green',
    fontColor: 'white',
};
