import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchLabel = styled.span`
  margin-right: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-title']};
`;

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const SwitchToggle = styled.span<{
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
    checked: boolean;
}>`
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme, themeColor, checked }) =>
        checked ? theme.colors[`brand-${themeColor}`] : theme.colors['brand-gray-light']};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ checked }) => (checked ? '20px' : '2px')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors['base-white']};
    transition: left 0.3s ease;
  }
`;
