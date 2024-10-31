import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FontAwesomeIcon } from '../../assets/icons';
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'Ícones/Icons',
    component: FontAwesomeIcon,
} as Meta;

const iconList = [
    { name: 'CoffeeIcon', icon: faCoffee },
    { name: 'CheckCircleIcon', icon: faCheckCircle },
    // Adicione os demais ícones aqui...
];

const Template: StoryFn<typeof FontAwesomeIcon> = (args) => <FontAwesomeIcon {...args} />;

export const Icons = () => (
    <div>
        {iconList.map(({ name, icon }) => (
            <div key={name}>
                <FontAwesomeIcon icon={icon} />
                <span>{name}</span>
            </div>
        ))}
    </div>
);
