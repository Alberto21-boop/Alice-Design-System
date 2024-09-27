import styled from 'styled-components';

interface ProgressBarContainerProps {
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
    progress: number;
}

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-border']}; /* Cor da base */
  border-radius: 8px;
  overflow: hidden;
  height: 20px;
`;

export const Progress = styled.div<ProgressBarContainerProps>`
  width: ${({ progress }) => progress}%;
  background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  height: 100%;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
