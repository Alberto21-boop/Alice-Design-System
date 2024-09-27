import React, { useState } from 'react';
import { TagSelectContainer } from './styles';

export interface AliTagSelectProps {
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
    label: string;
}

const AliTagSelect: React.FC<AliTagSelectProps> = ({ themeColor, label }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <TagSelectContainer
            themeColor={themeColor}
            isSelected={isSelected}
            onClick={handleClick}
        >
            {label}
        </TagSelectContainer>
    );
};

export default AliTagSelect;
