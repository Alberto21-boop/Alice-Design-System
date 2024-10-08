import styled from 'styled-components';

// Container que alinha o checkbox e o label
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Checkbox real (escondido), garantindo acessibilidade
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// Função para garantir que a chave exista no tema (ajustada para evitar "any")
const getColor = (theme: any, colorKey: string): string => {
  return theme.colors[colorKey] || theme.colors['base-sideBar'];
};

// Checkbox customizado, exibido no lugar do HiddenCheckbox
export const StyledCheckbox = styled.div<{
  themeColor: string;
  checked: boolean;
  variant: 'primary' | 'secondary';
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme, themeColor, checked }) => {
    const colorKey = `brand-${themeColor}`;
    return checked ? getColor(theme, colorKey) : theme.colors['base-sideBar'];
  }};
  border: 2px solid ${({ theme, themeColor }) => {
    const colorKey = `brand-${themeColor}`;
    return getColor(theme, colorKey);
  }};
  border-radius: ${({ variant }) => (variant === 'secondary' ? '50%' : '3px')};
  transition: all 150ms;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Controla a visibilidade do ícone dentro do checkbox */
  svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

// Estilo do label do checkbox, com espaçamento para separar do checkbox
export const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
`;
