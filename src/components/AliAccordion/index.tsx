import React, { useState } from 'react';
import { AccordionContainer, AccordionHeader, AccordionContent, AccordionIcon } from './styles';

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
    children: React.ReactNode;
}

const AliAccordion: React.FC<AliAccordionProps> = ({ themeColor, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer>
            <AccordionHeader themeColor={themeColor} isOpen={isOpen} onClick={toggleAccordion}>
                <span>{title}</span>
                <AccordionIcon isOpen={isOpen}>▼</AccordionIcon> {/* Ícone de dropdown */}
            </AccordionHeader>
            {isOpen && <AccordionContent>{children}</AccordionContent>}
        </AccordionContainer>
    );
};

export default AliAccordion;
