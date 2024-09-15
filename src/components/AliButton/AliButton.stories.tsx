import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AliButton } from './AliButton';

export default {
    title: 'Componentes/AliButton',
    component: AliButton,
    argTypes: {
        actionLevel: {
            control: { type: 'select' },
            options: [
                'primary-blue',
                'secondary-blue',
                'tertiary-blue',
                'primary-green',
                'secondary-green',
                'tertiary-green',
                'primary-alert',
                'secondary-alert', ,
                'tertiary-alert',
                'primary-gray',
                'secondary-gray',
                'tertiary-gray',
                'primary-purple',
                'secondary-purple',
                'tertiary-purple',
                'primary-pink',
                'secondary-pink',
                'tertiary-pink',
                'primary-yellow',
                'secondary-yellow',
                'tertiary-yellow',
                'primary-orange',
                'secondary-orange',
                'tertiary-orange',
                'primary-alice-blue',
                'secondary-alice-blue',
                'tertiary-alice-blue',
                'primary-yellow-soft',
                'secondary-yellow-soft',
                'tertiary-yellow-soft',
                'primary-yellow-bright',
                'secondary-yellow-bright',
                'tertiary-yellow-bright',
                'primary-charcoal',
                'secondary-charcoal',
                'tertiary-charcoal',
                'primary-slate',
                'secondary-slate',
                'tertiary-slate',
                'primary-onyx',
                'secondary-onyx',
                'tertiary-onyx',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
    },
} as Meta<typeof AliButton>;

const Template: StoryFn<typeof AliButton> = (args) => <AliButton {...args} />;

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
    actionLevel: 'primary-blue',
    size: 'md',
    children: 'Primary Blue Button',
    AliClick: () => alert('Primary Button Clicked!'),
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
    actionLevel: 'secondary-blue',
    size: 'md',
    children: 'Secondary Blue Button',
    AliClick: () => alert('Secondary Button Clicked!'),
};

export const TertiaryBlue = Template.bind({});
TertiaryBlue.args = {
    actionLevel: 'tertiary-blue',
    size: 'md',
    children: 'Tertiary Blue Button',
    AliClick: () => alert('Tertiary Button Clicked!'),
};
export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
    actionLevel: 'primary-green',
    size: 'md',
    children: 'Primary Green Button',
    AliClick: () => alert('Primary Green Button Clicked!'),
};

export const SecondyGreen = Template.bind({});
SecondyGreen.args = {
    actionLevel: 'secondary-green',
    size: 'md',
    children: 'Secondary Green Button',
    AliClick: () => alert('Secondary Green Button Clicked!'),
};

export const TertiaryGreen = Template.bind({});
TertiaryGreen.args = {
    actionLevel: 'tertiary-green',
    size: 'md',
    children: 'Tertiary Green Button',
    AliClick: () => alert('Tertiary Green Button Clicked!'),
};

export const PrimaryAlert = Template.bind({});
PrimaryAlert.args = {
    actionLevel: 'primary-alert',
    size: 'md',
    children: 'Primary Alert Button',
    AliClick: () => alert('Alert Button Clicked!'),
};

export const SecundaryAlert = Template.bind({});
SecundaryAlert.args = {
    actionLevel: 'secondary-alert',
    size: 'md',
    children: 'Secondary Alert Button',
    AliClick: () => alert('Secondary Alert Button Clicked!'),
};

export const TertiaryAlert = Template.bind({});
TertiaryAlert.args = {
    actionLevel: 'tertiary-alert',
    size: 'md',
    children: 'Tertiary Alert Button',
    AliClick: () => alert('Tertiary Alert Button Clicked!'),
};

export const PrimaryGray = Template.bind({});
PrimaryGray.args = {
    actionLevel: 'primary-gray',
    size: 'md',
    children: 'Primary Gray Button',
    AliClick: () => alert('Primary Gray Button Clicked!'),
};

export const SecundaryGray = Template.bind({});
SecundaryGray.args = {
    actionLevel: 'secondary-gray',
    size: 'md',
    children: 'Secondary Gray Button',
    AliClick: () => alert('Secondary Gray Button Clicked!'),
};

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
    actionLevel: 'tertiary-gray',
    size: 'md',
    children: 'Tertiary Gray Button',
    AliClick: () => alert('Tertiary Gray Button Clicked!'),
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
    actionLevel: 'primary-purple',
    size: 'md',
    children: 'Primary Purple Button',
    AliClick: () => alert('Primary Purple Button Clicked!'),
};

export const SecundaryPurple = Template.bind({});
SecundaryPurple.args = {
    actionLevel: 'secondary-purple',
    size: 'md',
    children: 'Secondary Purple Button',
    AliClick: () => alert('Secondary Purple Button Clicked!'),
};

export const TertiaryPurple = Template.bind({});
TertiaryPurple.args = {
    actionLevel: 'tertiary-purple',
    size: 'md',
    children: 'Tertiary Purple Button',
    AliClick: () => alert('Tertiary Purple Button Clicked!'),
};

export const PrimaryPink = Template.bind({});
PrimaryPink.args = {
    actionLevel: 'primary-pink',
    size: 'md',
    children: 'Primary Pink Button',
    AliClick: () => alert('Primary Pink Button Clicked!'),
};

export const SecundaryPink = Template.bind({});
SecundaryPink.args = {
    actionLevel: 'secondary-pink',
    size: 'md',
    children: 'Secondary Pink Button',
    AliClick: () => alert('Secondary Pink Button Clicked!'),
};

export const TertiaryPink = Template.bind({});
TertiaryPink.args = {
    actionLevel: 'tertiary-pink',
    size: 'md',
    children: 'Tertiary Pink Button',
    AliClick: () => alert('Tertiary Pink Button Clicked!'),
};

export const PrimaryYellow = Template.bind({});
PrimaryYellow.args = {
    actionLevel: 'primary-yellow',
    size: 'md',
    children: 'Primary Yellow Button',
    AliClick: () => alert('Primary Yellow Button Clicked!'),
};

export const SecundaryYellow = Template.bind({});
SecundaryYellow.args = {
    actionLevel: 'secondary-yellow',
    size: 'md',
    children: 'Secondary Pink Button',
    AliClick: () => alert('Secondary Yellow Button Clicked!'),
};

export const TertiaryYellow = Template.bind({});
TertiaryYellow.args = {
    actionLevel: 'tertiary-yellow',
    size: 'md',
    children: 'Tertiary Yellow Button',
    AliClick: () => alert('Tertiary Yellow Button Clicked!'),
};

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    actionLevel: 'primary-orange',
    size: 'md',
    children: 'Primary Orange Button',
    AliClick: () => alert('Primary Orange Button Clicked!'),
};

export const SecundaryOrange = Template.bind({});
SecundaryOrange.args = {
    actionLevel: 'secondary-orange',
    size: 'md',
    children: 'Secondary Orange Button',
    AliClick: () => alert('Secondary Orange Button Clicked!'),
};

export const TertiaryOrange = Template.bind({});
TertiaryOrange.args = {
    actionLevel: 'tertiary-orange',
    size: 'md',
    children: 'Tertiary Yellow Button',
    AliClick: () => alert('Tertiary Yellow Button Clicked!'),
};

export const PrimaryAliceBlue = Template.bind({});
PrimaryAliceBlue.args = {
    actionLevel: 'primary-alice-blue',
    size: 'md',
    children: 'Primary Alice Blue Button',
    AliClick: () => alert('Primary Alice Blue Button Clicked!'),
};

export const SecundaryAliceBlue = Template.bind({});
SecundaryAliceBlue.args = {
    actionLevel: 'secondary-alice-blue',
    size: 'md',
    children: 'Secondary Alice Blue Button',
    AliClick: () => alert('Secondary Alice Blue Button Clicked!'),
};

export const TertiaryAliceBlue = Template.bind({});
TertiaryAliceBlue.args = {
    actionLevel: 'tertiary-alice-blue',
    size: 'md',
    children: 'Tertiary Alice Blue Button',
    AliClick: () => alert('Tertiary Alice Blue Button Clicked!'),
};

export const PrimaryYellowSoft = Template.bind({});
PrimaryYellowSoft.args = {
    actionLevel: 'primary-yellow-soft',
    size: 'md',
    children: 'Primary Yellow Soft Button',
    AliClick: () => alert('Primary Yellow Soft Button Clicked!'),
};

export const SecundaryYellowSoft = Template.bind({});
SecundaryYellowSoft.args = {
    actionLevel: 'secondary-yellow-soft',
    size: 'md',
    children: 'Secondary Yellow Soft Button',
    AliClick: () => alert('Secondary Yellow Soft Button Clicked!'),
};

export const TertiaryYellowSoft = Template.bind({});
TertiaryYellowSoft.args = {
    actionLevel: 'tertiary-yellow-soft',
    size: 'md',
    children: 'Tertiary Yellow Soft Button',
    AliClick: () => alert('Tertiary Yellow Soft Button Clicked!'),
};

export const PrimaryYellowBright = Template.bind({});
PrimaryYellowBright.args = {
    actionLevel: 'primary-yellow-bright',
    size: 'md',
    children: 'Primary Yellow Bright Button',
    AliClick: () => alert('Primary Yellow Bright Button Clicked!'),
};

export const SecundaryYellowBright = Template.bind({});
SecundaryYellowBright.args = {
    actionLevel: 'secondary-yellow-bright',
    size: 'md',
    children: 'Secondary Yellow Bright Button',
    AliClick: () => alert('Secondary Yellow Bright Button Clicked!'),
};

export const TertiaryYellowBright = Template.bind({});
TertiaryYellowBright.args = {
    actionLevel: 'tertiary-yellow-bright',
    size: 'md',
    children: 'Tertiary Yellow Bright Button',
    AliClick: () => alert('Tertiary Yellow Bright Button Clicked!'),
};

export const PrimaryCharcoal = Template.bind({});
PrimaryCharcoal.args = {
    actionLevel: 'primary-charcoal',
    size: 'md',
    children: 'Primary Charcoal Button',
    AliClick: () => alert('Primary Charcoal Button Clicked!'),
};

export const SecundaryCharcoal = Template.bind({});
SecundaryCharcoal.args = {
    actionLevel: 'secondary-charcoal',
    size: 'md',
    children: 'Secondary Charcoal Button',
    AliClick: () => alert('Secondary Charcoal Button Clicked!'),
};

export const TertiaryCharcoal = Template.bind({});
TertiaryCharcoal.args = {
    actionLevel: 'tertiary-charcoal',
    size: 'md',
    children: 'Tertiary Charcoal Button',
    AliClick: () => alert('Tertiary Charcoal Button Clicked!'),
};

export const PrimarySlate = Template.bind({});
PrimarySlate.args = {
    actionLevel: 'primary-slate',
    size: 'md',
    children: 'Primary Slate Button',
    AliClick: () => alert('Primary Slate Button Clicked!'),
};

export const SecundarySlate = Template.bind({});
SecundarySlate.args = {
    actionLevel: 'secondary-slate',
    size: 'md',
    children: 'Secondary Slate Button',
    AliClick: () => alert('Secondary Slate Button Clicked!'),
};

export const TertiarySlate = Template.bind({});
TertiarySlate.args = {
    actionLevel: 'tertiary-slate',
    size: 'md',
    children: 'Tertiary Slate Button',
    AliClick: () => alert('Tertiary Slate Button Clicked!'),
};

export const PrimaryOnyx = Template.bind({});
PrimaryOnyx.args = {
    actionLevel: 'primary-onyx',
    size: 'md',
    children: 'Primary Onyx Button',
    AliClick: () => alert('Primary Onyx Button Clicked!'),
};

export const SecundaryOnyx = Template.bind({});
SecundaryOnyx.args = {
    actionLevel: 'secondary-onyx',
    size: 'md',
    children: 'Secondary Onyx Button',
    AliClick: () => alert('Secondary Onyx Button Clicked!'),
};

export const TertiaryOnyx = Template.bind({});
TertiaryOnyx.args = {
    actionLevel: 'tertiary-onyx',
    size: 'md',
    children: 'Tertiary Onyx Button',
    AliClick: () => alert('Tertiary Onyx Button Clicked!'),
};

