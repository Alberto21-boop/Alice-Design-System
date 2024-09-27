import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliBadge from './index';

export default {
    title: 'Componentes/AliBadge',
    component: AliBadge,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
                    'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
                    'charcoal', 'slate', 'onyx'
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliBadge> = (args) => <AliBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Badge Example',
    themeColor: 'blue',
};

// Story para mostrar todas as cores
const colors: Array<'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx'> = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
    'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
    'charcoal', 'slate', 'onyx'
];

export const AllColors = () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {colors.map((color) => (
            <AliBadge key={color} label={color} themeColor={color} />
        ))}
    </div>
);
