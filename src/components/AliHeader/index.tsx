import React from 'react';
import { AliHeaderContainer } from './styles';

interface AliHeaderProps {
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
    | 'onyx'
    children: React.ReactNode;
    className?: string;
}

const AliHeader: React.FC<AliHeaderProps> = ({ themeColor, children, className }) => {
    return (
        <AliHeaderContainer themeColor={themeColor} className={className}>
            {children}
        </AliHeaderContainer>
    );
};

export default AliHeader;
