import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliCheckbox from './index';

// Configuração do default export para o Storybook
export default {
    title: 'Componentes/AliCheckbox', // Define o título da story no Storybook
    component: AliCheckbox,           // Define o componente que será documentado
} as Meta;

// Template base para criar diferentes variações do componente
const Template: StoryFn = (args) => <AliCheckbox {...args} />;

// Primeira variação (Default) do componente AliCheckbox
export const Default = Template.bind({});
Default.args = {
    label: 'Example Checkbox',        // Define o texto do label
    checked: false,                   // Define que o checkbox começa desmarcado
    themeColor: 'blue',               // Define a cor do checkbox
    icon: 'CheckCircle',              // Ícone que será exibido quando o checkbox for marcado
};

// Segunda variação (CheckedWithHeartIcon) do componente AliCheckbox
export const CheckedWithHeartIcon = Template.bind({});
CheckedWithHeartIcon.args = {
    label: 'Checked with Heart Icon', // Define o texto do label
    checked: true,                    // Define que o checkbox começa marcado
    themeColor: 'green',              // Define a cor do checkbox
    icon: 'Heart',                    // Ícone que será exibido quando o checkbox for marcado
};

export const SecondaryRoundCheckbox = Template.bind({});
SecondaryRoundCheckbox.args = {
    label: 'Secondary Round Checkbox',
    checked: false,
    themeColor: 'pink',
    icon: 'Heart',
    variant: 'secondary',  // Define que é o estilo secundário
};
