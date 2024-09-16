import React from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './styles';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, size = 'medium', children }) => {
    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalWrapper isOpen={isOpen} onClick={handleBackgroundClick}>
            <ModalContent size={size}>
                {/* Botão de fechar agora estilizado no styles.ts */}
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
