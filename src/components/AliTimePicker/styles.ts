import styled from 'styled-components';

interface TimePickerInputProps {
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
}

export const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TimePickerInput = styled.input<TimePickerInputProps>`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};

  &:focus {
    border-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`]};
    outline: none;
  }
`;
