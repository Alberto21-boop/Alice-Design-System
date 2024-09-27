import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTagSelect from './index';

// Exportação padrão (Meta) para Storybook
export default {
    title: 'Componentes/AliTagSelect',
    component: AliTagSelect,
    argTypes: {
        themeColor: {
            control: 'select',
            options: [
                'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
                'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
                'charcoal', 'slate', 'onyx'
            ],
        },
    },
} as Meta;

// Template para o componente AliTagSelect
const Template: StoryFn<typeof AliTagSelect> = (args) => <AliTagSelect {...args} />;

// Story padrão do AliTagSelect
export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    label: 'Tag Select Example',
};
