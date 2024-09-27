import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliPagination from './index';

export default {
    title: 'Componentes/AliPagination',
    component: AliPagination,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue',
                    'green',
                    'alert-red',
                    'gray-dark',
                    'purple',
                    'pink',
                    'yellow',
                    'orange',
                    'alice-blue',
                    'yellow-soft',
                    'yellow-bright',
                    'charcoal',
                    'slate',
                    'onyx',
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliPagination> = (args) => <AliPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    totalPages: 10,
    currentPage: 1,
    themeColor: 'blue',
    onPageChange: (page: number) => console.log('Page changed to:', page),
};

export const AllColors = () => (
    <div>
        {['blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'].map((color) => (
            <div key={color} style={{ marginBottom: '10px' }}>
                <AliPagination
                    totalPages={5}
                    currentPage={1}
                    themeColor={color as any}
                    onPageChange={(page) => console.log(`Page changed to: ${page}, Color: ${color}`)}
                />
            </div>
        ))}
    </div>
);
