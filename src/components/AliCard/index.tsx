import React from 'react';
import { CardContainer, CardTitle, CardContent, CardFooter } from './styles';

interface AliCardProps {
    className?: string,
    title?: string;
    content?: string;
    footer?: React.ReactNode; // Footer opcional que pode receber qualquer React Node
    width?: string; // Largura opcional
    height?: string; // Altura opcional
    children?: React.ReactNode; // Permite adicionar qualquer conteúdo no card
    showFooterLine?: boolean; // Prop para controlar a linha do rodapé
    backgroundColor?:
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
    | 'onyx'
    | 'white'; // Adicionando 'white' como cor de fundo
    fontColor?: 'white' | 'black'; // Cor da fonte
}

const AliCard: React.FC<AliCardProps> = ({
    className,
    title,
    content,
    footer,
    width = 'auto',
    height = 'auto',
    children,
    showFooterLine = true,
    backgroundColor = 'blue',
    fontColor = 'black',
}) => {
    return (
        <CardContainer
            className={className}
            style={{ width, height }}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
        >
            {title && <CardTitle>{title}</CardTitle>}
            {content && <CardContent>{content}</CardContent>}
            {children}
            {footer && <CardFooter showFooterLine={showFooterLine}>{footer}</CardFooter>}
        </CardContainer>
    );
};

export default AliCard;
