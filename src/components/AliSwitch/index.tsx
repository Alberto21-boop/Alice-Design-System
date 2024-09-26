import React, { useState } from 'react';
import { SwitchContainer, SwitchInput, SwitchLabel, SwitchToggle } from './styles';

interface AliSwitchProps {
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
    label?: string;
}

const AliSwitch: React.FC<AliSwitchProps> = ({ themeColor, label }) => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked((prevChecked) => !prevChecked); // Corrigido para alternar o estado corretamente
    };

    return (
        <SwitchContainer onClick={handleToggle}> {/* Adiciona o evento de clique no contêiner */}
            <SwitchLabel>{label}</SwitchLabel>
            <SwitchInput
                type="checkbox"
                checked={checked}
                onChange={handleToggle} // Certifique-se de que o evento onChange está funcionando corretamente
            />
            <SwitchToggle themeColor={themeColor} checked={checked} />
        </SwitchContainer>
    );
};

export default AliSwitch;
