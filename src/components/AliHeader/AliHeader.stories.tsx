import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliHeader from '.';


export default {
    title: 'AliHeader',
    component: AliHeader,
    argTypes: {
        themeColor: {
            control: { type: 'select', options: ['blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'] },
        },
        children: {
            control: 'text',
        },
    },
} as Meta<typeof AliHeader>;

const Template: StoryFn<typeof AliHeader> = (args) => <AliHeader {...args} />;


export const Blue = Template.bind({});
Blue.args = {
    themeColor: 'blue',
    children: <h1>Meu Header Azul</h1>,
};

export const Green = Template.bind({});
Green.args = {
    themeColor: 'green',
    children: <h1>Meu Header Verde</h1>,
};

export const Purple = Template.bind({});
Purple.args = {
    themeColor: 'purple',
    children: <h1>Meu Header Roxo</h1>,
};

export const Orange = Template.bind({});
Orange.args = {
    themeColor: 'orange',
    children: <h1>Meu Header Laranja</h1>,
};

export const AlertRed = Template.bind({});
AlertRed.args = {
    themeColor: 'alert-red',
    children: <h1>Meu Header Vermelho Alerta</h1>,
};

export const GrayDark = Template.bind({});
GrayDark.args = {
    themeColor: 'gray-dark',
    children: <h1>Meu Header Cinza Escuro</h1>,
};

export const Pink = Template.bind({});
Pink.args = {
    themeColor: 'pink',
    children: <h1>Meu Header Rosa</h1>,
};

export const Yellow = Template.bind({});
Yellow.args = {
    themeColor: 'yellow',
    children: <h1>Meu Header Amarelo</h1>,
};

export const AliceBlue = Template.bind({});
AliceBlue.args = {
    themeColor: 'alice-blue',
    children: <h1>Meu Header Alice Blue</h1>,
};

export const YellowSoft = Template.bind({});
YellowSoft.args = {
    themeColor: 'yellow-soft',
    children: <h1>Meu Header Amarelo Suave</h1>,
};

export const YellowBright = Template.bind({});
YellowBright.args = {
    themeColor: 'yellow-bright',
    children: <h1>Meu Header Amarelo Brilhante</h1>,
};

export const Charcoal = Template.bind({});
Charcoal.args = {
    themeColor: 'charcoal',
    children: <h1>Meu Header Carvão</h1>,
};

export const Slate = Template.bind({});
Slate.args = {
    themeColor: 'slate',
    children: <h1>Meu Header Ardósia</h1>,
};

export const Onyx = Template.bind({});
Onyx.args = {
    themeColor: 'onyx',
    children: <h1>Meu Header Ônix</h1>,
};
