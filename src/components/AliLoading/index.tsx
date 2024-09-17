import React from 'react';
import { LoadingWrapper, Spinner, Bar, Pulse, Dots } from './styles';
import { defaultTheme } from '../../styles/themes/default'; // Importe o tema para usar as cores corretas

// Tipagem do tema de cores
type ThemeColors = keyof typeof defaultTheme.colors;

interface LoadingProps {
    type?: 'spinner' | 'bar' | 'dots' | 'pulse';
    size?: 'small' | 'medium' | 'large';
    themeColor?: ThemeColors; // Usando as cores do tema
}

const Loading: React.FC<LoadingProps> = ({ type = 'spinner', size = 'medium', themeColor = 'brand-blue' }) => {
    return (
        <LoadingWrapper>
            {type === 'spinner' && <Spinner size={size} themeColor={themeColor} />}
            {type === 'bar' && <Bar themeColor={themeColor} />}
            {type === 'pulse' && <Pulse size={size} themeColor={themeColor} />}
            {type === 'dots' && (
                <Dots themeColor={themeColor}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Dots>
            )}
        </LoadingWrapper>
    );
};

export default Loading;
