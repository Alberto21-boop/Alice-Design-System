import styled, { css } from 'styled-components';

export type IconButtonProps = {
  size: 'small' | 'medium' | 'large';
  actionLevel:
  | 'primary-blue'
  | 'secondary-blue'
  | 'tertiary-blue'
  | 'primary-green'
  | 'secondary-green'
  | 'tertiary-green'
  | 'primary-alert'
  | 'secondary-alert'
  | 'tertiary-alert'
  | 'primary-gray'
  | 'secondary-gray'
  | 'tertiary-gray'
  | 'primary-purple'
  | 'secondary-purple'
  | 'tertiary-purple'
  | 'primary-pink'
  | 'secondary-pink'
  | 'tertiary-pink'
  | 'primary-yellow'
  | 'secondary-yellow'
  | 'tertiary-yellow'
  | 'primary-orange'
  | 'secondary-orange'
  | 'tertiary-orange'
  | 'primary-alice-blue'
  | 'secondary-alice-blue'
  | 'tertiary-alice-blue'
  | 'primary-yellow-soft'
  | 'secondary-yellow-soft'
  | 'tertiary-yellow-soft'
  | 'primary-yellow-bright'
  | 'secondary-yellow-bright'
  | 'tertiary-yellow-bright'
  | 'primary-charcoal'
  | 'secondary-charcoal'
  | 'tertiary-charcoal'
  | 'primary-slate'
  | 'secondary-slate'
  | 'tertiary-slate'
  | 'primary-onyx'
  | 'secondary-onyx'
  | 'tertiary-onyx';
  isRound: boolean;
};

// Mapa de cores para combinar com as cores do tema
const colorMap: { [key in IconButtonProps['actionLevel']]: string } = {
  'primary-blue': 'brand-blue',
  'secondary-blue': 'brand-blue',
  'tertiary-blue': 'brand-blue',
  'primary-green': 'brand-green',
  'secondary-green': 'brand-green',
  'tertiary-green': 'brand-green',
  'primary-alert': 'brand-alert-red',
  'secondary-alert': 'brand-alert-red',
  'tertiary-alert': 'brand-alert-red',
  'primary-gray': 'brand-gray-dark',
  'secondary-gray': 'brand-gray-dark',
  'tertiary-gray': 'brand-gray-dark',
  'primary-purple': 'brand-purple',
  'secondary-purple': 'brand-purple',
  'tertiary-purple': 'brand-purple',
  'primary-pink': 'brand-pink',
  'secondary-pink': 'brand-pink',
  'tertiary-pink': 'brand-pink',
  'primary-yellow': 'brand-yellow',
  'secondary-yellow': 'brand-yellow',
  'tertiary-yellow': 'brand-yellow',
  'primary-orange': 'brand-orange',
  'secondary-orange': 'brand-orange',
  'tertiary-orange': 'brand-orange',
  'primary-alice-blue': 'brand-alice-blue',
  'secondary-alice-blue': 'brand-alice-blue',
  'tertiary-alice-blue': 'brand-alice-blue',
  'primary-yellow-soft': 'brand-yellow-soft',
  'secondary-yellow-soft': 'brand-yellow-soft',
  'tertiary-yellow-soft': 'brand-yellow-soft',
  'primary-yellow-bright': 'brand-yellow-bright',
  'secondary-yellow-bright': 'brand-yellow-bright',
  'tertiary-yellow-bright': 'brand-yellow-bright',
  'primary-charcoal': 'brand-charcoal',
  'secondary-charcoal': 'brand-charcoal',
  'tertiary-charcoal': 'brand-charcoal',
  'primary-slate': 'brand-slate',
  'secondary-slate': 'brand-slate',
  'tertiary-slate': 'brand-slate',
  'primary-onyx': 'brand-onyx',
  'secondary-onyx': 'brand-onyx',
  'tertiary-onyx': 'brand-onyx',
};

export const IconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) =>
    size === 'large' ? '12px' :
      size === 'small' ? '4px' :
        '8px'};
  font-size: ${({ size }) =>
    size === 'large' ? '24px' :
      size === 'small' ? '16px' :
        '20px'};
  border: none;
  cursor: pointer;
  border-radius: ${({ isRound }) => (isRound ? '50%' : '4px')};
  transition: background-color 0.3s ease, opacity 0.3s ease;

  ${({ actionLevel, theme }) =>
    actionLevel.startsWith('primary-') &&
    css`
      background-color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};
      color: ${theme.colors['base-white']};

      svg {
        color: ${theme.colors['base-white']}; // Forçando a cor do ícone no botão primário
      }

      &:hover {
        background-color: ${theme.colors[`brand-hover-${colorMap[actionLevel].split('-')[1]}` as keyof typeof theme.colors]};
      }
    `}
  
  ${({ actionLevel, theme }) =>
    actionLevel.startsWith('secondary-') &&
    css`
      background-color: transparent;
      color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};
      border: 2px solid ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};

      svg {
        color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]}; // Forçando a cor do ícone no botão secundário
      }

      &:hover {
        background-color: ${theme.colors[`brand-hover-${colorMap[actionLevel].split('-')[1]}` as keyof typeof theme.colors]};
        color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel.startsWith('tertiary-') &&
    css`
      background-color: transparent;
      color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};
      border: none;

      svg {
        color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]}; // Forçando a cor do ícone no botão terciário
      }

      &:hover {
        background-color: ${theme.colors[`brand-hover-${colorMap[actionLevel].split('-')[1]}` as keyof typeof theme.colors]};
        text-decoration: underline;
        color: ${theme.colors[colorMap[actionLevel] as keyof typeof theme.colors]};
      }
    `}

  &:focus {
    outline: none;
  }
`;
