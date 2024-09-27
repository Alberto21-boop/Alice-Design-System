import React, { useState } from 'react';
import { TagFilterContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente FontAwesome
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícone de "X"

interface AliTagFilterProps {
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

const AliTagFilter: React.FC<AliTagFilterProps> = ({ themeColor, label }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <TagFilterContainer
            themeColor={themeColor}
            isActive={isActive}
            onClick={handleClick}
        >
            {label}
            <FontAwesomeIcon icon={faTimes} /> {/* Usa o componente FontAwesomeIcon */}
        </TagFilterContainer>
    );
};

export default AliTagFilter;
