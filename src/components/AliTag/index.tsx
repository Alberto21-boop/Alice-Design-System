import React from 'react';
import { TagContainer } from './styles';

interface AliTagProps {
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

const AliTag: React.FC<AliTagProps> = ({ label, themeColor }) => {
    return <TagContainer themeColor={themeColor}>{label}</TagContainer>;
};

export default AliTag;
