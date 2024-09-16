import styled from 'styled-components';

// ModalWrapper mantém o fundo escuro e centraliza o modal
export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro com opacidade */
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: opacity 0.3s ease; /* Transição suave de visibilidade */
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Transição suave de opacidade */
`;

// ModalContent define o tamanho do modal e as melhorias visuais
export const ModalContent = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  background: white;
  border-radius: 12px; /* Bordas arredondadas maiores para um visual mais suave */
  padding: 20px;
  width: ${({ size }) =>
        size === 'small' ? '500px' : size === 'medium' ? '600px' : '800px'};
  max-width: 90vw; /* Responsividade */
  max-height: 90vh; /* Evitar overflow */
  height: ${({ size }) =>
        size === 'small' ? '300px' : size === 'medium' ? '500px' : '800px'}; /* Altura ajustada */
  overflow-y: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada */
  transition: transform 0.3s ease; /* Suaviza a entrada */
  transform: ${({ size }) => (size ? 'scale(1)' : 'scale(0.95)')}; /* Animação de entrada */

  /* Adicionando uma transição mais suave para quando o modal aparecer */
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95); /* Escala um pouco menor no início */
    }
    to {
      opacity: 1;
      transform: scale(1); /* Escala normal ao final */
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333; /* Cor do X (pode ser ajustada conforme o tema) */

  &:hover {
    color: #000; /* Mudança de cor ao passar o mouse */
  }
`;