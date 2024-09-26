import styled, { css, keyframes } from 'styled-components';

interface RatingItemProps {
    filled: boolean;
}

const jumpAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const commonStyles = css<RatingItemProps>`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  animation: ${({ filled }) => filled && jumpAnimation} 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Star = styled.span<RatingItemProps>`
  ${commonStyles}
  color: ${({ theme, filled }) => (filled ? theme.colors['brand-yellow-bright'] : theme.colors['brand-gray-light'])};
  &::before {
    content: '★';
  }
`;

export const Heart = styled.span<RatingItemProps>`
  ${commonStyles}
  color: ${({ theme, filled }) => (filled ? theme.colors['brand-pink-dark'] : theme.colors['brand-gray-light'])};
  &::before {
    content: '❤';
  }
`;


export const RatingItem = styled.span<RatingItemProps>`
  font-size: 2rem;
`;
