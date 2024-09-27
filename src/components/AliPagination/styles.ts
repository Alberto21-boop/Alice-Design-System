import styled from 'styled-components';

interface PaginationContainerProps {
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

export const PaginationContainer = styled.div<PaginationContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const PageButton = styled.button<PaginationContainerProps & { isActive: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${({ themeColor }) => themeColor};
  background-color: ${({ isActive, themeColor }) => (isActive ? themeColor : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ themeColor }) => themeColor};
    color: #fff;
  }
`;

export const NavigationButton = styled.button<PaginationContainerProps>`
  padding: 8px 12px;
  border: 1px solid ${({ themeColor }) => themeColor};
  background-color: transparent;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ themeColor }) => themeColor};
    color: #fff;
  }
`;
