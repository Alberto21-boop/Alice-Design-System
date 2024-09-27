import React from 'react';
import { StepperContainer, Step } from './styles';

export interface AliStepperProps {
    steps: string[];
    currentStep: number;
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
}

const AliStepper: React.FC<AliStepperProps> = ({ steps, currentStep, themeColor }) => {
    return (
        <StepperContainer themeColor={themeColor}>
            {steps.map((step, index) => (
                <Step key={index} isActive={index <= currentStep} themeColor={themeColor}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-label">{step}</div>
                </Step>
            ))}
        </StepperContainer>
    );
};

export default AliStepper;
