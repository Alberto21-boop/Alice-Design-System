import React from 'react';
import { AliButtonContainer } from './styles';


type AliButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    actionLevel?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    AliClick?: () => void;
};

export const AliButton: React.FC<AliButtonProps> = ({
    type = 'button',
    actionLevel = 'primary',
    size = 'md',
    children,
    AliClick,
}) => {
    return (
        <AliButtonContainer type={type} actionLevel={actionLevel} size={size} onClick={AliClick}>
            {children}
        </AliButtonContainer>
    );
};

export default AliButton;
