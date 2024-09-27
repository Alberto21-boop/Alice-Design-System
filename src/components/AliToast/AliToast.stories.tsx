import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliToast from './index';

export default {
    title: 'Componentes/AliToast',
    component: AliToast,
} as Meta;

const Template: StoryFn<typeof AliToast> = (args) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && <AliToast {...args} onClose={handleClose} />}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    message: 'This is a success message!',
    duration: 3000,
};

export const LongerDuration = Template.bind({});
LongerDuration.args = {
    message: 'This toast lasts for 5 seconds.',
    duration: 5000,
};
