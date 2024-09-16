import styled from 'styled-components';

// Definir as cores possíveis para o themeColor
type ThemeColorOptions =
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

// Container das abas
export const AliTabsContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors['base-sideBar']}; /* Fundo branco */
  border-radius: 5px;
  overflow: hidden;
`;

// Estilo das abas (tab) individuais - Primary
export const PrimaryTabButton = styled.button<{ isActive: boolean; themeColor: ThemeColorOptions }>`
  padding: 10px 15px; /* Padding ajustado para o texto */
  min-width: 100px; /* Define uma largura mínima */
  background-color: ${({ isActive, theme, themeColor }) =>
    isActive ? theme.colors[`brand-${themeColor}` as keyof typeof theme.colors] : theme.colors['base-sideBar']};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors['base-white'] : theme.colors['base-text']};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, border-radius 0.3s;

  /* Aplica o border-radius ao clicar e no hover */
  border-radius: ${({ isActive }) => (isActive ? '5px' : '0')};

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}` as keyof typeof theme.colors]};
    color: white;
    border-radius: 5px; /* Aplica o border-radius no hover */
  }

  &:not(:last-child) {
    margin-right: 5px;
  }

  /* Faz com que a largura se adapte ao conteúdo */
  white-space: nowrap;
`;

// Estilo das abas (tab) individuais - Secondary
export const SecondaryTabButton = styled.button<{ isActive: boolean; themeColor: ThemeColorOptions }>`
  padding: 10px 15px;
  min-width: 100px;
  background-color: transparent;
  color: ${({ isActive, theme, themeColor }) =>
    isActive ? theme.colors[`brand-${themeColor}` as keyof typeof theme.colors] : theme.colors['base-text']};
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-tab-hover-secondary']}; /* Hover cinza claro */
    border-radius: 5px;
  }

  /* Aplica o estilo quando a aba está ativa */
  ${({ isActive, themeColor, theme }) =>
    isActive &&
    `
    color: ${theme.colors[`brand-${themeColor}` as keyof typeof theme.colors]};
    border-bottom: 2px solid ${theme.colors[`brand-${themeColor}` as keyof typeof theme.colors]};
  `}

  &:not(:last-child) {
    margin-right: 5px;
  }

  /* Faz com que a largura se adapte ao conteúdo */
  white-space: nowrap;
`;

// Estilo do conteúdo das abas
export const TabContent = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors['base-sideBar']};
  border-top: 1px solid ${(props) => props.theme.colors['base-tab']};
  flex: 1;
`;
