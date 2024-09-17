import styled, { keyframes } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';  // Importe o tema aqui

// Animações existentes (como rotate, bounce, pulse)
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Wrapper para centralizar o componente
export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// Spinner (círculo giratório)
export const Spinner = styled.div<{ size: 'small' | 'medium' | 'large'; themeColor: keyof typeof defaultTheme.colors }>`
  border: 4px solid ${({ theme, themeColor }) => `${theme.colors[themeColor]}33`};
  border-top: 4px solid ${({ theme, themeColor }) => theme.colors[themeColor]};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;

  width: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px')};
  height: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px')};
`;

// Barra de progresso
export const Bar = styled.div<{ themeColor: keyof typeof defaultTheme.colors }>`
  width: 100px;
  height: 6px;
  background-color: ${({ theme, themeColor }) => `${theme.colors[themeColor]}33`};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, themeColor }) => theme.colors[themeColor]};
    animation: progress 1.5s infinite linear;
  }

  @keyframes progress {
    0% { left: 0; width: 0; }
    50% { width: 100%; }
    100% { left: 100%; width: 0; }
  }
`;

// Pulse
export const Pulse = styled.div<{ size: 'small' | 'medium' | 'large'; themeColor: keyof typeof defaultTheme.colors }>`
  background-color: ${({ theme, themeColor }) => theme.colors[themeColor]};
  border-radius: 50%;
  width: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px')};
  height: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px')};
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

// Dots (três pontos)
export const Dots = styled.div<{ themeColor: keyof typeof defaultTheme.colors }>`
  display: flex;
  justify-content: space-between;
  width: 40px;

  div {
    width: 8px;
    height: 8px;
    background-color: ${({ theme, themeColor }) => theme.colors[themeColor]};
    border-radius: 50%;
    animation: ${bounce} 1.5s infinite ease-in-out;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;
