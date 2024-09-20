import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliDrawer from './index';

export default {
    title: 'Componentes/AliDrawer',
    component: AliDrawer,
} as Meta;

const Template: StoryFn = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleDrawer}>Toggle Drawer</button>
            <AliDrawer {...args} isOpen={isOpen} onClose={toggleDrawer}>
                <h2>Storybook Drawer Content</h2>
                <p>This is some content inside the drawer.</p>
            </AliDrawer>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
};
