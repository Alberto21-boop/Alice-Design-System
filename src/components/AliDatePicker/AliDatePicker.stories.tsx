import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliDatePicker from './index';

export default {
    title: 'Componentes/AliDatePicker',
    component: AliDatePicker,
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

const Template: StoryFn<typeof AliDatePicker> = (args) => <AliDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    onChange: (date: Date | null) => console.log('Selected date:', date),
};
