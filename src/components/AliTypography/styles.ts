import styled, { css } from 'styled-components';

type AliTypographyContainerProps = {
  component?: 'title' | 'subtitle' | 'text';
  size?: 'display' | 'large' | 'medium' | 'small';
};

export const AliTypographyContainer = styled.div<AliTypographyContainerProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-text']};

  ${({ component }) =>
    component === 'title' &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors['base-title']};
    `}

  ${({ size }) =>
    size === 'display' &&
    css`
      font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    `}
`;
