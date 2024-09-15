import React from 'react';
import { AliButtonContainer } from './styles';


type AliButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    actionLevel?: | 'primary-blue'
    | 'secondary-blue'
    | 'tertiary-blue'
    | 'primary-green'
    | 'secondary-green'
    | 'tertiary-green'
    | 'primary-alert'
    | 'secondary-alert'
    | 'tertiary-alert'
    | 'primary-gray'
    | 'secondary-gray'
    | 'tertiary-gray'
    | 'primary-purple'
    | 'secondary-purple'
    | 'tertiary-purple'
    | 'primary-pink'
    | 'secondary-pink'
    | 'tertiary-pink'
    | 'primary-yellow'
    | 'secondary-yellow'
    | 'tertiary-yellow'
    | 'primary-orange'
    | 'secondary-orange'
    | 'tertiary-orange'
    | 'primary-alice-blue'
    | 'secondary-alice-blue'
    | 'tertiary-alice-blue'
    | 'primary-yellow-soft'
    | 'secondary-yellow-soft'
    | 'tertiary-yellow-soft'
    | 'primary-yellow-bright'
    | 'secondary-yellow-bright'
    | 'tertiary-yellow-bright'
    | 'primary-charcoal'
    | 'secondary-charcoal'
    | 'tertiary-charcoal'
    | 'primary-slate'
    | 'secondary-slate'
    | 'tertiary-slate'
    | 'primary-onyx'
    | 'secondary-onyx'
    | 'tertiary-onyx'
    ;

    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    AliClick?: () => void;
};

export const AliButton: React.FC<AliButtonProps> = ({
    type = 'button',
    actionLevel = 'primary-blue',
    size = 'md',
    children,
    className,
    AliClick,
}) => {
    return (
        <AliButtonContainer type={type} actionLevel={actionLevel} size={size} className-={className} onClick={AliClick}>
            {children}
        </AliButtonContainer>
    );
};



export default AliButton;
