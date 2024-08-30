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
}

const AliHeader: React.FC<AliHeaderProps> = ({ themeColor, children }) => {
    return (
        <AliHeaderContainer themeColor={themeColor}>
            {children}
        </AliHeaderContainer>
    );
};

export default AliHeader;
