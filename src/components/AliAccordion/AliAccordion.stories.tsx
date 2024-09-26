import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliAccordion from './index';

export default {
    title: 'Componentes/AliAccordion',
    component: AliAccordion,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
                    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliAccordion> = (args) => <AliAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    title: 'Accordion Title',
    children: 'This is the content of the accordion.',
};

// Renderizar todas as cores
const colors = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
] as const;

export const AllAccordions = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {colors.map((color) => (
            <AliAccordion key={color} themeColor={color} title={`Accordion - ${color}`}>
                This is the content of the accordion for the {color} theme.
            </AliAccordion>
        ))}
    </div>
);
