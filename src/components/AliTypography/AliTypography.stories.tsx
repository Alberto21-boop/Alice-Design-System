import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTypography from '.';

export default {
    title: 'Componentes/AliTypography',
    component: AliTypography,
} as Meta;

const Template: StoryFn<typeof AliTypography> = (args) => <AliTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'h1', component: 'title', size: 'display', children: 'Text',
};
