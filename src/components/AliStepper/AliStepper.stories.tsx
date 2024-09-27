import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliStepper from './index';

export default {
    title: 'Componentes/AliStepper',
    component: AliStepper,
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

const Template: StoryFn<typeof AliStepper> = (args) => <AliStepper {...args} />;

export const Default = Template.bind({});
Default.args = {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 1,
    themeColor: 'blue',
};

export const AllStepsCompleted = Template.bind({});
AllStepsCompleted.args = {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 2,
    themeColor: 'green',
};
