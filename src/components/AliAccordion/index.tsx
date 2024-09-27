import React, { useState } from 'react';
import { AccordionContainer, AccordionContent, AccordionIcon, AccordionTitle } from './styles';

interface AliAccordionProps {
    themeColor:
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
    title: string;
    className?: string;
    children: React.ReactNode;
}

const AliAccordion: React.FC<AliAccordionProps> = ({ themeColor, title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer className={className}>
            <AccordionTitle themeColor={themeColor} isOpen={isOpen} onClick={toggleAccordion}>
                <span>{title}</span>
                <AccordionIcon isOpen={isOpen} themeColor={themeColor}>▼</AccordionIcon> {/* Agora passando themeColor */}
            </AccordionTitle>
            {isOpen && <AccordionContent>{children}</AccordionContent>}
        </AccordionContainer>
    );
};

export default AliAccordion;
