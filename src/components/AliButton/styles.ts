import styled, { css } from 'styled-components';

type ButtonProps = {
    actionLevel?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
};

const sizes = {
    sm: '8px 16px',
    md: '12px 24px',
    lg: '16px 32px',
};

export const AliButtonContainer = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  border-radius: 4px;
  cursor: pointer;
  padding: ${({ size }) => (size ? sizes[size] : sizes.md)};
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ actionLevel, theme }) =>
        actionLevel === 'primary' &&
        css`
      background-color: ${(props) => props.theme.colors['brand-blue']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;
      

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}

  ${({ actionLevel, theme }) =>
        actionLevel === 'secondary' &&
        css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-blue']};
      border: 2px solid ${(props) => props.theme.colors['brand-blue']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}

  ${({ actionLevel, theme }) =>
        actionLevel === 'tertiary' &&
        css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-blue']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}
`;
