import React, { useState } from 'react';
import {
    BannerContainer,
    BannerContent,
    RightContainer,
    BannerImage,
    BannerText,
    CloseButton
} from './styles';

// Adicionando tipos explícitos para themeColor
interface AliBannerProps {
    text: string;
    themeColor: 'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx'; // Definir o tipo explicitamente
    imageUrl?: string;  // Imagem é opcional
    className?: string;
}

const AliBanner: React.FC<AliBannerProps> = ({ className, text, themeColor, imageUrl }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <BannerContainer className={className} themeColor={themeColor}>
            <BannerContent>
                <BannerText>{text}</BannerText>
            </BannerContent>
            <RightContainer>
                {imageUrl && <BannerImage src={imageUrl} alt="Banner" />}
                <CloseButton onClick={() => setIsVisible(false)}>×</CloseButton>
            </RightContainer>
        </BannerContainer>
    );
};

export default AliBanner;
