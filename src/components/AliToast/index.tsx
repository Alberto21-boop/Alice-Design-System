import React, { useEffect, useState } from 'react';
import { ToastContainer, ProgressBar } from './styles';

interface AliToastProps {
    message: string;
    duration?: number; // Duração em milissegundos
    onClose: () => void;
}

const AliToast: React.FC<AliToastProps> = ({ message, duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Esconder o Toast após o tempo definido
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <ToastContainer duration={duration}>
            <span>{message}</span>
            <ProgressBar duration={duration} />
        </ToastContainer>
    );
};

export default AliToast;
