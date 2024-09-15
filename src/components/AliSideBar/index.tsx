import React, { useState } from 'react';
import { SidebarContainer, SidebarButton, HideButton, Separator } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckCircle, faTimesCircle, faUser, faHome, faSearch, faBell, faEnvelope, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// Defina o tipo ThemeColorOptions, conforme o que foi usado nos estilos
type ThemeColorOptions =
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
    | 'onyx';

const defaultButtons = [
    { icon: faCoffee, text: 'Coffee' },
    { icon: faCheckCircle, text: 'CheckCircle' },
    { icon: faTimesCircle, text: 'TimesCircle' },
    { icon: faUser, text: 'User' },
    { icon: faHome, text: 'Home' },
    { icon: faSearch, text: 'Search' },
    { icon: faBell, text: 'Bell' },
    { icon: faEnvelope, text: 'Envelope' },
];

interface AliSidebarProps {
    buttons?: { icon: any; text: string }[];
    themeColor: ThemeColorOptions;
}

const AliSidebar: React.FC<AliSidebarProps> = ({ buttons = defaultButtons, themeColor }) => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleSidebar = () => {
        setIsHidden(!isHidden);
    };

    return (
        <SidebarContainer isHidden={isHidden}>
            <HideButton onClick={toggleSidebar} themeColor={themeColor}>
                {!isHidden && 'Esconder'}
                <FontAwesomeIcon icon={isHidden ? faAngleRight : faAngleLeft} />
            </HideButton>

            <Separator />

            {buttons.map((button, index) => (
                <SidebarButton key={index} isHidden={isHidden} themeColor={themeColor}>
                    <FontAwesomeIcon icon={button.icon} />
                    {!isHidden && <span>{button.text}</span>}
                </SidebarButton>
            ))}
        </SidebarContainer>
    );
};

export default AliSidebar;
