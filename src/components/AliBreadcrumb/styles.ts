import styled from 'styled-components';

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

interface BreadcrumbItemProps {
  isCurrent?: boolean;
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

export const BreadcrumbItem = styled.span<BreadcrumbItemProps>`
  display: inline;
  color: ${({ theme, isCurrent, themeColor }) =>
    isCurrent ? 'base-separator' : theme.colors[`brand-${themeColor}`]};
  text-decoration: ${({ isCurrent }) => (isCurrent ? 'none' : 'underline')};
  cursor: ${({ isCurrent }) => (isCurrent ? 'default' : 'pointer')};

  &:hover {
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'none' : 'underline')};
    color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`]}; // Cor de hover
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: ${(porps => porps.theme.colors['base-breadCrumb'])};
`;
