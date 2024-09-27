import React from 'react';
import { ProgressBarContainer, Progress } from './styles';

interface AliProgressBarProps {
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
    progress: number; // Valor da progressão de 0 a 100
}

const AliProgressBar: React.FC<AliProgressBarProps> = ({ themeColor, progress }) => {
    return (
        <ProgressBarContainer>
            <Progress themeColor={themeColor} progress={progress}>
                {progress}%
            </Progress>
        </ProgressBarContainer>
    );
};

export default AliProgressBar;
