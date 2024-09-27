import styled from 'styled-components';

interface StepProps {
    isActive: boolean;
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

export const StepperContainer = styled.div<{ themeColor: string }>`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Step = styled.div<StepProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: relative;

    .step-number {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme, themeColor, isActive }) =>
        isActive ? theme.colors[`brand-${themeColor}-hover` as keyof typeof theme.colors]
            : theme.colors[`brand-${themeColor}` as keyof typeof theme.colors]};
        color: #fff;
    }

    .step-label {
        margin-top: 8px;
        font-size: 14px;
        color: ${({ isActive }) => (isActive ? '#000' : '#999')};
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 15px;
        left: 100%;
        width: 50px;
        height: 2px;
        background-color: ${({ theme, themeColor, isActive }) =>
        isActive ? theme.colors[`brand-${themeColor}-hover` as keyof typeof theme.colors]
            : '#ccc'};
    }
`;
