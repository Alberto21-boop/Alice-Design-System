import React from 'react';
import { AliTypographyContainer } from './styles';

type AliTypographyProps = {
    variant: 'h1' | 'h2' | 'p' | 'span';
    component?: 'title' | 'subtitle' | 'text';
    size?: 'display' | 'large' | 'medium' | 'small';
    children: React.ReactNode;
};

export const AliTypography: React.FC<AliTypographyProps> = ({ variant, component, size, children }) => {
    return (
        <AliTypographyContainer as={variant} component={component} size={size}>
            {children}
        </AliTypographyContainer>
    );
};

export default AliTypography;
