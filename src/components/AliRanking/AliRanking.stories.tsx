import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliRanking from './index';

export default {
    title: 'Componentes/AliRanking',
    component: AliRanking,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['star', 'heart'],
            },
        },
        maxRating: {
            control: {
                type: 'number',
                min: 1,
                max: 10,
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliRanking> = (args) => <AliRanking {...args} />;

export const Stars = Template.bind({});
Stars.args = {
    type: 'star',
    maxRating: 5,
};

export const Hearts = Template.bind({});
Hearts.args = {
    type: 'heart',
    maxRating: 5,
};
