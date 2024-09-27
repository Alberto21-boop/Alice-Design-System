import React from 'react';
import { BadgeContainer } from './styles';

interface AliBadgeProps {
    label: string;
    themeColor:
    | 'blue'
    | 'green'
    | 'alert-red'
    | 'gray-dark'
    | 'purple'
    | 'pink'
    | 'yellow'
    | 'orange'
    | 'alice-blue'
    | 'yellow-soft'
    | 'yellow-bright'
    | 'charcoal'
    | 'slate'
    | 'onyx';
}

const AliBadge: React.FC<AliBadgeProps> = ({ label, themeColor }) => {
    return <BadgeContainer themeColor={themeColor}>{label}</BadgeContainer>;
};

export default AliBadge;
