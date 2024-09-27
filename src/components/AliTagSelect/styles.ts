import styled from 'styled-components';

interface TagSelectContainerProps {
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
    isSelected: boolean;
}

export const TagSelectContainer = styled.span<TagSelectContainerProps>`
  display: inline-block;  /* Faz a tag ficar no tamanho do conteúdo */
  padding: 4px 10px;  /* Espaçamento interno da tag */
  border-radius: 20px;  /* Bordas arredondadas para parecer uma tag */
  font-size: 14px;  /* Tamanho do texto menor */
  cursor: pointer;  /* Mostra que é clicável */
  background-color: ${({ theme, themeColor, isSelected }) =>
        isSelected ? theme.colors[`brand-${themeColor}`] : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  border: 1px solid ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};  /* Adiciona borda com a cor do tema */
  transition: background-color 0.3s ease, color 0.3s ease;  /* Transição suave entre estados */

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`]};  /* Define a cor de fundo no hover */
    color: #fff;  /* Muda a cor do texto no hover */
  }
`;
