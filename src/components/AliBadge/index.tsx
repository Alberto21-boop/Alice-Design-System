import React from 'react';
import { BadgeContainer } from './styles';

interface AliBadgeProps {
    label: string;
    className?: string;
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

const AliBadge: React.FC<AliBadgeProps> = ({ className, label, themeColor }) => {
    return <BadgeContainer className={className} themeColor={themeColor}>{label}</BadgeContainer>;
};

export default AliBadge;
