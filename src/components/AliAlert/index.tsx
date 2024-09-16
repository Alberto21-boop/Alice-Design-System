import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente para renderizar ícones
import { AlertContainer, AlertIcon, AlertMessage } from './styles';
import { iconsMap } from '../../assets/IconMap/index'; // Importa o map de ícones

interface AlertProps {
    type: 'info' | 'warning' | 'error' | 'success';
    message: string;  // Propriedade obrigatória
    position?: 'top' | 'bottom' | 'left' | 'right'; // Propriedade opcional
    width?: string;  // Propriedade opcional
    height?: string;  // Propriedade opcional
}

const Alert: React.FC<AlertProps> = ({ type, message, position = 'top', width = '300px', height = '60px' }) => {
    const Icon = iconsMap[type === 'info' ? 'InfoCircle' :
        type === 'warning' ? 'ExclamationCircle' :
            type === 'error' ? 'TimesCircle' :
                'CheckCircle']; // Seleciona o ícone correspondente ao tipo

    return (
        <AlertContainer type={type} position={position} width={width} height={height}>
            <AlertIcon>
                <FontAwesomeIcon icon={Icon} /> {/* Usa o componente FontAwesomeIcon */}
            </AlertIcon>
            <AlertMessage>{message}</AlertMessage>
        </AlertContainer>
    );
};

export default Alert;
