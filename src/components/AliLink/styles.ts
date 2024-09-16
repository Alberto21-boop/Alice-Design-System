import styled, { keyframes, css } from 'styled-components';

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

// Animação de piscar
const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

// Estilo do link
export const StyledLink = styled.a<{ themeColor: ThemeColorOptions; isSecondary?: boolean }>`
  text-decoration: none;
  color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  font-weight: bold;
  transition: color 0.3s ease;

  /* Aplica animação se o link for secundário */
  ${({ isSecondary }) =>
        isSecondary &&
        css`
      animation: ${blink} 1s infinite;
    `}

  &:hover {
    /* Verifica se existe a cor de hover, caso contrário, usa a cor principal */
    color: ${({ theme, themeColor }) =>
        theme.colors[`brand-${themeColor}-hover`] || theme.colors[`brand-${themeColor}`]};
    text-decoration: underline;
  }
`;
