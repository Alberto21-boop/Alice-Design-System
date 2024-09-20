import React, { useState } from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, CheckboxLabel } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconsMap } from '../../assets/IconMap/index';

interface AliCheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    themeColor?:
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
    icon?: keyof typeof iconsMap;
    variant?: 'primary' | 'secondary';  // Novo campo para definir o estilo
}

const AliCheckbox: React.FC<AliCheckboxProps> = ({
    label = 'Default Label',
    checked = false,
    onChange,
    themeColor = 'blue',
    icon = 'CheckCircle',
    variant = 'primary' // Por padrão, será primário
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    const IconComponent = iconsMap[icon];

    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <StyledCheckbox
                checked={isChecked}
                onClick={handleCheckboxChange}
                themeColor={themeColor}
                variant={variant} // Passa a variante para o estilo
            >
                {isChecked && IconComponent && <FontAwesomeIcon icon={IconComponent} color="white" />}
            </StyledCheckbox>
            <CheckboxLabel onClick={handleCheckboxChange}>{label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export default AliCheckbox;
