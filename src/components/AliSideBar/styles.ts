import styled from 'styled-components';

// Definir as cores possíveis para o themeColor
export type ThemeColorOptions =
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

// Estilos do container do Sidebar com fundo branco
export const SidebarContainer = styled.div<{ isHidden: boolean }>`
  width: ${({ isHidden }) => (isHidden ? '60px' : '280px')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ isHidden }) => (isHidden ? 'center' : 'flex-start')};
  background-color: ${(props) => props.theme.colors['base-sideBar']};
  padding: ${({ isHidden }) => (isHidden ? '10px' : '20px')};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
`;

// Estilos dos botões dentro do Sidebar
export const SidebarButton = styled.button<{ isHidden: boolean; themeColor: ThemeColorOptions }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isHidden }) => (isHidden ? 'center' : 'flex-start')};
  width: 100%;
  height: 60px;
  padding-left: ${({ isHidden }) => (isHidden ? '0' : '20px')};
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.colors['base-sideBar']};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`] || theme.colors['base-sideBar']};
    color: white;
  }

  svg {
    font-size: 24px;
  }

  span {
    margin-left: 10px;
  }
`;

// Linha separadora (hr)
export const Separator = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: ${(props) => props.theme.colors['base-separator']};
  margin: 1px 0;
`;

// Estilos do botão "Esconder"
export const HideButton = styled.button<{ themeColor: ThemeColorOptions }>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors['base-sideBar']};
  padding: 0 20px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`] || theme.colors['base-sideBar']};
    color: white;
  }

  svg {
    font-size: 18px;
    margin-left: 5px;
  }
`;
