import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Use StoryFn ao invés de Story
import Loading from './index';
import { defaultTheme } from '../../styles/themes/default'; // Importe o tema

export default {
    title: 'Componentes/AliLoading', // O título foi ajustado
    component: Loading,
    argTypes: {
        type: {
            control: 'select',
            options: ['spinner', 'bar', 'dots', 'pulse'], // Tipos de loading
            description: 'Tipo de loading (spinner, barra, pulse, dots)',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'], // Tamanhos disponíveis
            description: 'Tamanho do loading (apenas para spinner e pulse)',
        },
        themeColor: {
            control: 'select',
            options: Object.keys(defaultTheme.colors), // Todas as cores do tema
            description: 'Cor do tema para o loading',
        },
    },
} as Meta;

// Template do Storybook
const Template: StoryFn = (args) => <Loading {...args} />;

export const SpinnerMedium = Template.bind({});
SpinnerMedium.args = {
    type: 'spinner',
    size: 'medium',
    themeColor: 'brand-blue', // Cor padrão
};

export const BarLoading = Template.bind({});
BarLoading.args = {
    type: 'bar',
    themeColor: 'brand-alert-red', // Cor padrão
};

export const PulseLoading = Template.bind({});
PulseLoading.args = {
    type: 'pulse',
    size: 'medium',
    themeColor: 'brand-green', // Cor padrão
};

export const DotsLoading = Template.bind({});
DotsLoading.args = {
    type: 'dots',
    themeColor: 'brand-yellow', // Cor padrão
};
