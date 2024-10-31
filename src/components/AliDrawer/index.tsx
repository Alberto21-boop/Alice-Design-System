import React, { useState } from 'react';
import { DrawerContainer, Overlay } from './styles';

interface AliDrawerProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const AliDrawer: React.FC<AliDrawerProps> = ({ className, children, isOpen, onClose }) => {
    return (
        <>
            <Overlay isOpen={isOpen} onClick={onClose} />
            <DrawerContainer className={className} isOpen={isOpen}>
                {children}
            </DrawerContainer>
        </>
    );
};

export const AliDrawerExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDrawer}>Open Drawer</button>
            <AliDrawer isOpen={isOpen} onClose={toggleDrawer}>
                <h2>Drawer Content</h2>
                <p>This is your drawer.</p>
            </AliDrawer>
        </div>
    );
};

export default AliDrawer;
