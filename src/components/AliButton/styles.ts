import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  actionLevel?:
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
  | 'tertiary-onyx'
  ;
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
    actionLevel === 'primary-blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-blue']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'secondary-blue' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-blue']};
      border: 2px solid ${(props) => props.theme.colors['brand-blue']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-blue' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-blue']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-hover-blue']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'primary-green' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-green']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-green']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'secondary-green' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-green']};
      border: 2px solid ${(props) => props.theme.colors['brand-green']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-green']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-green' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-green']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-hover-green']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'primary-alert' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-alert-red']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-alert-red']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'secondary-alert' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-alert-red']};
      border: 2px solid ${(props) => props.theme.colors['brand-alert-red']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-alert-red']};
      }
    `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-alert' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-alert-red']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-hover-alert-red']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-gray' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-gray-dark']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-gray-darker']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-gray' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-gray-dark']};
      border: 2px solid ${(props) => props.theme.colors['brand-gray-dark']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-gray-darker']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-gray' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-gray-dark']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-gray-darker']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-purple' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-purple']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-purple-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-purple' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-purple']};
      border: 2px solid ${(props) => props.theme.colors['brand-purple']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-purple-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-purple' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-purple']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-purple-dark']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-pink' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-pink']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-pink-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-pink' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-pink']};
      border: 2px solid ${(props) => props.theme.colors['brand-pink']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-pink-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-pink' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-pink']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-pink-dark']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-yellow' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-yellow']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-yellow' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-yellow']};
      border: 2px solid ${(props) => props.theme.colors['brand-yellow']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-yellow' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-yellow']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-yellow-light']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-orange']};
      color: ${(props) => props.theme.colors['base-white']};
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-orange-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-orange' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-orange']};
      border: 2px solid ${(props) => props.theme.colors['brand-orange']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-orange-dark']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-orange' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-orange']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-orange-light']};
      }
    `}

    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-alice-blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-alice-blue']};
      color: ${(props) => props.theme.colors['base-text']}; 
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-alice-blue']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-alice-blue' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-alice-blue-strong']};
      border: 2px solid ${(props) => props.theme.colors['brand-alice-blue']};

      &:hover {
        background-color: ${(props) => props.theme.colors['brand-hover-alice-blue']};
      }
    `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-alice-blue' &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors['brand-alice-blue-strong']};
      border: none;

      &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.colors['brand-hover-alice-blue']};
      }
    `}
  
    ${({ actionLevel, theme }) =>
    actionLevel === 'primary-yellow-soft' &&
    css`
    background-color: ${(props) => props.theme.colors['brand-yellow-soft']};
    color: ${(props) => props.theme.colors['base-text']};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-yellow-standard']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-yellow-soft' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-yellow-soft']};
    border: 2px solid ${(props) => props.theme.colors['brand-yellow-soft']};

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-yellow-standard']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-yellow-soft' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-yellow-soft']};
    border: none;

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors['brand-yellow-standard']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'primary-yellow-bright' &&
    css`
    background-color: ${(props) => props.theme.colors['brand-yellow-bright']};
    color: ${(props) => props.theme.colors['base-text']};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-yellow-intense']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-yellow-bright' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-yellow-bright']};
    border: 2px solid ${(props) => props.theme.colors['brand-yellow-bright']};

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-yellow-intense']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-yellow-bright' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-yellow-bright']};
    border: none;

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors['brand-yellow-intense']};
    }
  `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'primary-charcoal' &&
    css`
    background-color: ${(props) => props.theme.colors['brand-charcoal']};
    color: ${(props) => props.theme.colors['base-white']};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-ebony']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-charcoal' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-charcoal']};
    border: 2px solid ${(props) => props.theme.colors['brand-charcoal']};

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-ebony']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-charcoal' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-charcoal']};
    border: none;

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors['brand-graphite']};
    }
  `}
  ${({ actionLevel, theme }) =>
    actionLevel === 'primary-slate' &&
    css`
    background-color: ${(props) => props.theme.colors['brand-slate']};
    color: ${(props) => props.theme.colors['base-white']};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-steel']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-slate' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-slate']};
    border: 2px solid ${(props) => props.theme.colors['brand-slate']};

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-steel']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-slate' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-slate']};
    border: none;

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors['brand-iron']};
    }
  `}

  ${({ actionLevel, theme }) =>
    actionLevel === 'primary-onyx' &&
    css`
    background-color: ${(props) => props.theme.colors['brand-onyx']};
    color: ${(props) => props.theme.colors['base-white']};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-smoke']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'secondary-onyx' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-onyx']};
    border: 2px solid ${(props) => props.theme.colors['brand-onyx']};

    &:hover {
      background-color: ${(props) => props.theme.colors['brand-smoke']};
    }
  `}

${({ actionLevel, theme }) =>
    actionLevel === 'tertiary-onyx' &&
    css`
    background-color: transparent;
    color: ${(props) => props.theme.colors['brand-onyx']};
    border: none;

    &:hover {
      text-decoration: underline;
      background-color: ${(props) => props.theme.colors['brand-pebble']};
    }
  `}



`;
