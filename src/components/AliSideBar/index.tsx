import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SidebarContainer, SidebarButton, HideButton, Separator } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoffee,
    faCheckCircle,
    faTimesCircle,
    faUser,
    faHome,
    faSearch,
    faBell,
    faEnvelope,
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons';

// Tipo para definir as cores permitidas
export type ThemeColorOptions =
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

// Definindo os botões padrão do Sidebar
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
    buttons: { icon: any; text: string }[]; // Removendo a possibilidade de undefined para buttons
    themeColor: ThemeColorOptions;
}

const AliSidebar: React.FC<AliSidebarProps> = ({ buttons = defaultButtons, themeColor }) => {
    const [isHidden, setIsHidden] = useState(false);

    // Função para alternar a visibilidade do Sidebar
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

// Define PropTypes usando uma validação customizada para themeColor
AliSidebar.propTypes = {
    themeColor: PropTypes.oneOf([
        'blue',
        'green',
        'alert-red',
        'gray-dark',
        'purple',
        'pink',
        'yellow',
        'orange',
        'alice-blue',
        'yellow-soft',
        'yellow-bright',
        'charcoal',
        'slate',
        'onyx',
    ]).isRequired as PropTypes.Validator<ThemeColorOptions>,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
        }) as PropTypes.Validator<{ icon: any; text: string }>
    ).isRequired, // Define buttons como array obrigatório
};

export default AliSidebar;
