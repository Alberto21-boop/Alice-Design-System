import styled from 'styled-components';

interface CustomRadioProps {
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
  checked?: boolean; // checked opcional para evitar o erro de tipagem
}

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CustomRadio = styled.span<CustomRadioProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  display: inline-block;
  position: relative;

  ${HiddenRadioInput}:checked + & {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  }

  ${HiddenRadioInput}:hover + & {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`] || theme.colors[`brand-${themeColor}`]};
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${HiddenRadioInput}:checked + &::after {
    display: block;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors['base-white']};
  }
`;

export const Label = styled.label`
  margin-left: 8px;
  font-size: 16px;
`;
