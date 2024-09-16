import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';

export default {
    title: 'Componentes/AliModal',
    component: Modal,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
} as Meta;

const Template: StoryFn = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Conteúdo do Modal</h2>
                <p>Este é um modal com tamanho {args.size}.</p>
            </Modal>
        </>
    );
};

// Modal com tamanho pequeno
export const SmallModal = Template.bind({});
SmallModal.args = {
    size: 'small',
};

// Modal com tamanho médio
export const MediumModal = Template.bind({});
MediumModal.args = {
    size: 'medium',
};

// Modal com tamanho grande
export const LargeModal = Template.bind({});
LargeModal.args = {
    size: 'large',
};
