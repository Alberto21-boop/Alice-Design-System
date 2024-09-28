import styled from 'styled-components';

interface BadgeProps {
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

export const BadgeContainer = styled.span<BadgeProps>`
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 12px;
  color: ${(props) => props.theme.colors['base-sideBar']};
  background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`]};
  }
`;
