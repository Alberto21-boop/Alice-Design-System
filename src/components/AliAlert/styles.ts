import styled from 'styled-components';

export const AlertContainer = styled.div<{
    type: 'info' | 'warning' | 'error' | 'success';
    position: 'top' | 'bottom' | 'left' | 'right';
    width: string;
    height: string;
}>`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  max-width: ${({ width }) => width}; // Largura recebida por props
  height: ${({ height }) => height}; // Altura recebida por props
  position: fixed;
  
  ${({ position }) =>
        position === 'top' ? 'top: 20px;' :
            position === 'bottom' ? 'bottom: 20px;' :
                position === 'left' ? 'left: 20px;' : 'right: 20px;'}

  ${({ type, theme }) =>
        type === 'info' && `
    background-color: ${theme.colors['brand-gray-light']};
    color: ${theme.colors['base-text']};
  `}
  ${({ type, theme }) =>
        type === 'warning' && `
    background-color: ${theme.colors['brand-yellow-bright']};
    color: ${theme.colors['base-title']};
  `}
  ${({ type, theme }) =>
        type === 'error' && `
    background-color: ${theme.colors['brand-alert-red']};
    color: ${theme.colors['base-white']};
  `}
  ${({ type, theme }) =>
        type === 'success' && `
    background-color: ${theme.colors['brand-green']};
    color: ${theme.colors['base-white']};
  `}
`;

export const AlertIcon = styled.span`
  margin-right: 12px;
  font-size: 24px;
`;

export const AlertMessage = styled.div`
  flex-grow: 1;
`;
