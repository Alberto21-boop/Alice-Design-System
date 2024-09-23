import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliInput from './index';

export default {
    title: 'Componentes/AliInput',
    component: AliInput,
} as Meta;

const Template: StoryFn = (args) => <AliInput {...args} />;

// Input de Texto Padrão
export const Default = Template.bind({});
Default.args = {
    label: 'Text Input',
    type: 'text',
    placeholder: 'Enter text',
};

// Input de Senha
export const PasswordInput = Template.bind({});
PasswordInput.args = {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
};

// Input de Busca
export const SearchInput = Template.bind({});
SearchInput.args = {
    label: 'Search',
    type: 'search',
    placeholder: 'Search...',
};

// Input de Arquivo com Ícone de Lixeira
export const FileInput = Template.bind({});
FileInput.args = {
    label: 'Upload File',
    type: 'file',
};

// Input com Select (Dropdown)
export const SelectInput = Template.bind({});
SelectInput.args = {
    label: 'Select an Option',
    type: 'select',
    options: ['Option 1', 'Option 2', 'Option 3'],  // Exemplo de opções
};

// Input de Slider (Range)
export const SliderInput = Template.bind({});
SliderInput.args = {
    label: 'Select Range',
    type: 'range',
    value: 50,  // Valor inicial do slider
};

// Input TextArea
export const TextAreaInput = Template.bind({});
TextAreaInput.args = {
    label: 'Message',
    type: 'textarea',
    placeholder: 'Enter your message',
};
