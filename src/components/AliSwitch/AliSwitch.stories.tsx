import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliSwitch from './index';

export default {
    title: 'Componentes/AliSwitch',
    component: AliSwitch,
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

const Template: StoryFn<typeof AliSwitch> = (args) => <AliSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    label: 'Switch',
};

// Renderizar todos os switches de uma vez
const colors = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
] as const;

export const AllSwitches = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {colors.map((color) => (
            <AliSwitch key={color} themeColor={color} label={`Switch - ${color}`} />
        ))}
    </div>
);
