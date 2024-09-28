import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliBreadcrumb from './index';

export default {
    title: 'Componentes/AliBreadcrumb',
    component: AliBreadcrumb,
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

const Template: StoryFn<typeof AliBreadcrumb> = (args) => <AliBreadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Electronics', url: '/products/electronics' },
        { name: 'iPhone 13' },
    ],
    separator: '>',
    themeColor: 'blue', // Valor padrão
    onNavigate: (url: string) => console.log('Navigating to:', url),
};

// Definindo explicitamente o tipo do array de cores
const colors: Array<'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx'> = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink',
    'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright',
    'charcoal', 'slate', 'onyx'
];

export const AllColors = () => (
    <div>
        {colors.map((color) => (
            <div key={color} style={{ marginBottom: '10px' }}>
                <AliBreadcrumb
                    items={[
                        { name: 'Home', url: '/' },
                        { name: 'Products', url: '/products' },
                        { name: 'Electronics', url: '/products/electronics' },
                        { name: 'iPhone 13' },
                    ]}
                    separator=">"
                    themeColor={color} // Agora tipado corretamente
                    onNavigate={(url: string) => console.log('Navigating to:', url)}
                />
            </div>
        ))}
    </div>
);
