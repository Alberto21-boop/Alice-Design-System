import styled from 'styled-components';

export const AvatarContainer = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  width: ${({ size }) => (size === 'small' ? '40px' : size === 'medium' ? '60px' : '100px')};
  height: ${({ size }) => (size === 'small' ? '40px' : size === 'medium' ? '60px' : '100px')};
  border-radius: 50%; /* Deixa o avatar circular */
  background-color: ${({ theme }) => theme.colors['base-hover']}; /* Cor de fundo padrão */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => (size === 'small' ? '16px' : size === 'medium' ? '24px' : '36px')};
  color: ${({ theme }) => theme.colors['base-title']}; /* Cor do texto ou iniciais */
  overflow: hidden; /* Esconde o conteúdo que ultrapassar o limite */
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém a proporção da imagem */
  border-radius: 50%; /* Garante que a imagem fique circular */
`;
