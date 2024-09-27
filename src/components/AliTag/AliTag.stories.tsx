import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTag from './index';

export default {
    title: 'Componentes/AliTag',
    component: AliTag,
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

const Template: StoryFn<typeof AliTag> = (args) => <AliTag {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Tag Example',
    themeColor: 'blue',
};

// Renderizar todas as cores
const colors = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange',
    'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
] as const;

export const AllTags = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {colors.map((color) => (
            <AliTag key={color} label={color} themeColor={color} />
        ))}
    </div>
);
