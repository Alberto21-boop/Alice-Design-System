import styled, { keyframes } from 'styled-components';

// Animação para a barra de progresso
const shrinkProgress = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

interface ToastContainerProps {
    duration: number;
}

// Container principal do Toast
export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors['brand-green']};
  color: ${({ theme }) => theme.colors['base-white']};
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// Barra de progresso no rodapé do Toast
export const ProgressBar = styled.div<ToastContainerProps>`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors['base-title']}; /* Cor preta */
  margin-top: 8px;
  animation: ${shrinkProgress} ${({ duration }) => duration}ms linear;
`;
