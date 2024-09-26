import styled from 'styled-components';

export const AccordionContainer = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-border']};
  margin-bottom: 8px;
`;

export const AccordionHeader = styled.div<{
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
    isOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  color: ${({ theme, themeColor, isOpen }) =>
        isOpen ? theme.colors['base-title'] : theme.colors[`brand-${themeColor}`]};
  font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-title']}; /* Texto fica preto */

    span {
      color: ${({ theme }) => theme.colors['base-title']}; /* Texto no hover */
    }

    & > span:last-child {
      color: ${({ theme }) => theme.colors['base-title']}; /* Ícone no hover */
    }
  }
`;

export const AccordionContent = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1rem;
`;

export const AccordionIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.3s ease, color 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${({ theme, isOpen }) => (isOpen ? theme.colors['base-title'] : theme.colors['base-title'])};
`;
