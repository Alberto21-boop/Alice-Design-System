import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliTimePicker from './index';

export default {
    title: 'Componentes/AliTimePicker',
    component: AliTimePicker,
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

const Template: StoryFn<typeof AliTimePicker> = (args) => <AliTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
    themeColor: 'blue',
    onChange: (time: string) => console.log('Selected time:', time),
};
