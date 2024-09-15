import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { iconsMap } from '../../assets/IconMap';
import { IconButton, IconButtonProps } from './styles';

interface AliIconButtonProps {
    iconName: keyof typeof iconsMap;
    size: 'small' | 'medium' | 'large';
    actionLevel: IconButtonProps['actionLevel'];
    isRound: boolean;
    ariaLabel: string;
    className?: string;
    AliClick: () => void;
}

const AliIconButton: React.FC<AliIconButtonProps> = ({ iconName, size, actionLevel, isRound, ariaLabel, className, AliClick }) => {
    const icon: IconDefinition = iconsMap[iconName];

    return (
        <IconButton onClick={AliClick} size={size} actionLevel={actionLevel} isRound={isRound} aria-label={ariaLabel} className={className}>
            <FontAwesomeIcon icon={icon} />
        </IconButton>
    );
};

export default AliIconButton;
