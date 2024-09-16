import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Alert from './index';

export default {
    title: 'Componentes/AliAlert',
    component: Alert,
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success'],
            description: 'Tipo de alerta',
        },
        message: {
            control: 'text',
            description: 'Mensagem do alerta',
        },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
            description: 'Posição do alerta na tela',
        },
        width: {
            control: 'text',
            description: 'Largura do alerta (opcional)',
        },
        height: {
            control: 'text',
            description: 'Altura do alerta (opcional)',
        },
    },
} as Meta;

// Define valores padrão no Template para evitar erros
const Template: StoryFn = (args) => (
    <Alert
        type={args.type || 'info'}  // Valor padrão para 'type'
        message={args.message || 'Default message'}  // Valor padrão para 'message'
        position={args.position}
        width={args.width}
        height={args.height}
    />
);

export const InfoAlert = Template.bind({});
InfoAlert.args = {
    type: 'info',
    message: 'This is an information alert.',
    position: 'top',
    width: '400px',
    height: '60px',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
    type: 'warning',
    message: 'This is a warning alert.',
    position: 'top',
    width: '400px',
    height: '60px',
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    type: 'error',
    message: 'This is an error alert.',
    position: 'top',
    width: '400px',
    height: '60px',
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    type: 'success',
    message: 'This is a success alert.',
    position: 'top',
    width: '400px',
    height: '60px',
};
