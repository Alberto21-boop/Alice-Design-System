import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './index'; // Certifique-se de que o caminho do Tooltip está correto

export default {
    title: 'Componentes/AliTooltip',
    component: Tooltip,
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: ['top', 'bottom', 'left', 'right'],
            },
        },
        content: {
            control: 'text',
            description: 'Content inside the tooltip',
        },
    },
} as Meta;

const Template: StoryFn = (args) => (
    <div style={{ padding: '50px', textAlign: 'center' }}>
        <Tooltip content={args.content} position={args.position}>
            <button>Hover me</button>
        </Tooltip>

    </div>
);

// Stories para diferentes posições
export const TopTooltip = Template.bind({});
TopTooltip.args = {
    content: 'This is a tooltip', // Adiciona o conteúdo do tooltip
    position: 'top',
};

export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
    content: 'This is a tooltip', // Adiciona o conteúdo do tooltip
    position: 'bottom',
};

export const LeftTooltip = Template.bind({});
LeftTooltip.args = {
    content: 'This is a tooltip', // Adiciona o conteúdo do tooltip
    position: 'left',
};

export const RightTooltip = Template.bind({});
RightTooltip.args = {
    content: 'This is a tooltip', // Adiciona o conteúdo do tooltip
    position: 'right',
};
