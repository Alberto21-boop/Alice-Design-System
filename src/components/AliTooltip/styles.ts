import styled from 'styled-components';

// Container para o elemento que vai disparar o tooltip
export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

// Estilo do tooltip em si
export const TooltipBox = styled.div<{ position: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  background-color: ${(props) => props.theme.colors['brand-gray-dark']};
  color: ${(props) => props.theme.colors['base-white']};
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  /* Posicionamento baseado na prop 'position' */
  ${({ position }) =>
        position === 'top' &&
        `
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 8px;
    `}
  ${({ position }) =>
        position === 'bottom' &&
        `
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 8px;
    `}
  ${({ position }) =>
        position === 'left' &&
        `
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 8px;
    `}
  ${({ position }) =>
        position === 'right' &&
        `
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 8px;
    `}

  /* Mostra o tooltip quando ativo */
  ${TooltipWrapper}:hover &,
  ${TooltipWrapper}:focus-within & {
    opacity: 1;
    visibility: visible;
  }
`;
