import { Meta, StoryFn } from '@storybook/react';
import AliIconButton from './index';
import { iconsMap } from '../../assets/IconMap';
import React from 'react';


export default {
    title: 'Componentes/AliIconButton',
    component: AliIconButton,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        iconName: {
            control: { type: 'select' },
            options: Object.keys(iconsMap),
        },
        actionLevel: {
            control: { type: 'select' },
            options: [
                'primary-blue', 'secondary-blue', 'tertiary-blue',
                'primary-green', 'secondary-green', 'tertiary-green',
                'primary-alert', 'secondary-alert', 'tertiary-alert',
                'primary-gray', 'secondary-gray', 'tertiary-gray',
                'primary-purple', 'secondary-purple', 'tertiary-purple',
                'primary-pink', 'secondary-pink', 'tertiary-pink',
                'primary-yellow', 'secondary-yellow', 'tertiary-yellow',
                'primary-orange', 'secondary-orange', 'tertiary-orange',
                'primary-alice-blue', 'secondary-alice-blue', 'tertiary-alice-blue',
                'primary-yellow-soft', 'secondary-yellow-soft', 'tertiary-yellow-soft',
                'primary-yellow-bright', 'secondary-yellow-bright', 'tertiary-yellow-bright',
                'primary-charcoal', 'secondary-charcoal', 'tertiary-charcoal',
                'primary-slate', 'secondary-slate', 'tertiary-slate',
                'primary-onyx', 'secondary-onyx', 'tertiary-onyx',
            ],
        },
        isRound: {
            control: { type: 'boolean' },
        },
    },
} as Meta<typeof AliIconButton>;

const Template: StoryFn<typeof AliIconButton> = (args) => <AliIconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};


export const BlueSecondary = Template.bind({});
BlueSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const BlueTertiary = Template.bind({});
BlueTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GreenPrimary = Template.bind({});
GreenPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-green',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GreenSecondary = Template.bind({});
GreenSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-green',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GreenTertiary = Template.bind({});
GreenTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-green',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AlertPrimary = Template.bind({});
AlertPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-alert',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AlertSecondary = Template.bind({});
AlertSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-alert',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AlertTertiary = Template.bind({});
AlertTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-alert',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GrayPrimary = Template.bind({});
GrayPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-gray',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GraySecondary = Template.bind({});
GraySecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-gray',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const GrayTertiary = Template.bind({});
GrayTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-gray',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PurplePrimary = Template.bind({});
PurplePrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-purple',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PurpleSecondary = Template.bind({});
PurpleSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-purple',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PurpleTertiary = Template.bind({});
PurpleTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-purple',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PinkPrimary = Template.bind({});
PinkPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-pink',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PinkSecondary = Template.bind({});
PinkSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-pink',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const PinkTertiary = Template.bind({});
PinkTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-pink',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowPrimary = Template.bind({});
YellowPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-yellow',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowSecondary = Template.bind({});
YellowSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-yellow',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowTertiary = Template.bind({});
YellowTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-yellow',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OrangePrimary = Template.bind({});
OrangePrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-orange',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OrangeSecondary = Template.bind({});
OrangeSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-orange',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OrangeTertiary = Template.bind({});
OrangeTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-orange',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AliceBluePrimary = Template.bind({});
AliceBluePrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-alice-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AliceBlueSecondary = Template.bind({});
AliceBlueSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-alice-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const AliceBlueTertiary = Template.bind({});
AliceBlueTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-alice-blue',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowSoftPrimary = Template.bind({});
YellowSoftPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-yellow-soft',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowSoftSecondary = Template.bind({});
YellowSoftSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-yellow-soft',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowSoftTertiary = Template.bind({});
YellowSoftTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-yellow-soft',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowBrightPrimary = Template.bind({});
YellowBrightPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-yellow-bright',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowBrightSecondary = Template.bind({});
YellowBrightSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-yellow-bright',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const YellowBrightTertiary = Template.bind({});
YellowBrightTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-yellow-bright',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const CharcoalPrimary = Template.bind({});
CharcoalPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-charcoal',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const CharcoalSecondary = Template.bind({});
CharcoalSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-charcoal',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const CharcoalTertiary = Template.bind({});
CharcoalTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-charcoal',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const SlatePrimary = Template.bind({});
SlatePrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-slate',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const SlateSecondary = Template.bind({});
SlateSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-slate',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const SlateTertiary = Template.bind({});
SlateTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-slate',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OnyxPrimary = Template.bind({});
OnyxPrimary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'primary-onyx',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OnyxSecondary = Template.bind({});
OnyxSecondary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'secondary-onyx',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};

export const OnyxTertiary = Template.bind({});
OnyxTertiary.args = {
    ariaLabel: 'Icon Button',
    iconName: 'Box',
    size: 'medium',
    actionLevel: 'tertiary-onyx',
    isRound: true,
    AliClick: () => alert('Icon Button Clicked!'),
};
