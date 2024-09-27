import styled from 'styled-components';

interface SliderTrackProps {
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
    value: number;
}

interface SliderThumbProps {
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
    value: number;
}

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  position: relative;
`;

export const SliderTrack = styled.div<SliderTrackProps>`
  width: 100%;
  height: 6px; /* Aumentei um pouco a altura para centralizar melhor o thumb */
  background-color: #ddd;
  position: relative;
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: ${({ value }) => `${value}%`};
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
    border-radius: 4px;
  }
`;

export const SliderThumb = styled.div<SliderThumbProps>`
  width: 20px;
  height: 20px;
  background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  border-radius: 50%;
  position: absolute;
  left: ${({ value }) => (value > 99 ? 'calc(100% - 10px)' : `${value}%`)}; 
  top: 50%; /* Centralizando verticalmente */
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const SliderValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors['base-tab']};
`;
