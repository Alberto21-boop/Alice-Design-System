import React from 'react';
import { StyledLink } from './styles';

export interface AliLinkProps {
    href: string;
    children: React.ReactNode;
    themeColor?: 'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx';
    isSecondary?: boolean;
}

const AliLink: React.FC<AliLinkProps> = ({ href, children, themeColor = 'blue', isSecondary = false }) => {
    return (
        <StyledLink href={href} themeColor={themeColor} isSecondary={isSecondary}>
            {children}
        </StyledLink>
    );
};

export default AliLink;
