import React from 'react';
import { TooltipWrapper, TooltipBox } from './styles';

interface TooltipProps {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', children }) => {
    return (
        <TooltipWrapper>
            {children}
            <TooltipBox position={position}>{content}</TooltipBox>
        </TooltipWrapper>
    );
};

export default Tooltip;
