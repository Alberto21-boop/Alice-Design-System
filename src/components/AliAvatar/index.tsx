import React from 'react';
import { AvatarContainer, AvatarImage } from './styles';

interface AliAvatarProps {
    src?: string; // URL da imagem do avatar
    alt?: string; // Texto alternativo para a imagem
    name: string; // Nome do usuário, usado para gerar as iniciais
    size?: 'small' | 'medium' | 'large'; // Tamanhos do avatar
    className?: string;
}

const getInitials = (name: string): string => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('').toUpperCase();
    return initials.slice(0, 2); // Retorna as duas primeiras iniciais
};

const AliAvatar: React.FC<AliAvatarProps> = ({ className, src, alt, name, size = 'medium' }) => {
    return (
        <AvatarContainer className={className} size={size}>
            {src ? <AvatarImage src={src} alt={alt || name} /> : getInitials(name)}
        </AvatarContainer>
    );
};

export default AliAvatar;
