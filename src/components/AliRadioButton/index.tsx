import React from 'react';
import { RadioContainer, HiddenRadioInput, CustomRadio, Label } from './styles';

interface AliRadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    themeColor: 'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx';
}

const AliRadioButton: React.FC<AliRadioButtonProps> = ({
    label,
    name,
    value,
    checked,
    onChange,
    themeColor,
}) => {
    return (
        <RadioContainer>
            <HiddenRadioInput
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange} // Certifique-se que o onChange passa o evento corretamente
            />
            <CustomRadio themeColor={themeColor} checked={checked} /> {/* Passa a prop checked */}
            <Label>{label}</Label>
        </RadioContainer>
    );
};

export default AliRadioButton;
