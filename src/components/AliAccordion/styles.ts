import styled from 'styled-components';

interface AccordionIconProps {
  isOpen: boolean;
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

export const AccordionContainer = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-border']};
  margin-bottom: 8px;
`;

export const AccordionTitle = styled.div<AccordionIconProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`] || themeColor};
  color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`] || themeColor}; /* Cor aplicada antes do clique */
  font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-title']};

    span {
      color: ${({ theme }) => theme.colors['base-title']};
    }

    & > span:last-child {
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }
`;

export const AccordionContent = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1rem;
`;

export const AccordionIcon = styled.span<AccordionIconProps>`
  transition: transform 0.3s ease, color 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${({ theme, themeColor, isOpen }) => {
    const hoverColor = theme.colors[`brand-${themeColor}` as keyof typeof theme.colors];
    const defaultColor = theme.colors[`brand-${themeColor}` as keyof typeof theme.colors];

    return isOpen ? hoverColor ?? themeColor : defaultColor ?? themeColor;
  }};
`;
