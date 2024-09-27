import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTagFilter from './index';

export default {
    title: 'Componentes/AliTagFilter',
    component: AliTagFilter,
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
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliTagFilter> = (args) => <AliTagFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    label: 'Filtro',
};

// Renderizando todas as cores
const colors = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
] as const;

export const AllTagFilters = () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {colors.map((color) => (
            <AliTagFilter key={color} themeColor={color} label={color} />
        ))}
    </div>
);
