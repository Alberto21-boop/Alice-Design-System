import styled from 'styled-components';

export const TagFilterContainer = styled.span<{
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
    isActive: boolean;
}>`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme, themeColor, isActive }) =>
        isActive
            ? theme.colors[`brand-${themeColor}-hover`] // Tom mais forte ao clicar (hover)
            : theme.colors[`brand-${themeColor}`]}; // Cor padrão
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, themeColor }) =>
        theme.colors[`brand-${themeColor}-hover`]}; // Cor ao hover
  }

  svg {
    margin-left: 8px;
    cursor: pointer;
  }
`;
