import React from 'react';
import { AliTypographyContainer } from './styles';

type AliTypographyProps = {
    variant: 'h1' | 'h2' | 'p' | 'span';
    component?: 'title' | 'subtitle' | 'text';
    size?: 'display' | 'large' | 'medium' | 'small';
    className?: string;
    children: React.ReactNode;
};

export const AliTypography: React.FC<AliTypographyProps> = ({ variant, component, size, className, children }) => {
    return (
        <AliTypographyContainer as={variant} component={component} size={size} className={className}>
            {children}
        </AliTypographyContainer>
    );
};

export default AliTypography;
