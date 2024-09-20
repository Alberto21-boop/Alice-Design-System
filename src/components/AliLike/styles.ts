import styled from 'styled-components';

// Container do botão de Like
export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// Estilização do ícone de Like
export const StyledLike = styled.div<{
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
    liked: boolean;
}>`
  font-size: 24px;
  color: ${({ theme, themeColor, liked }) =>
        liked ? theme.colors[`brand-${themeColor}`] : '#ccc'};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  }
`;

// Estilização do label ao lado do Like
export const LikeLabel = styled.span`
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
`;
