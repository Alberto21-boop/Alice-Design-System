import styled from 'styled-components';

interface CarouselProps {
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

export const CarouselContainer = styled.div<CarouselProps>`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const CarouselSlides = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease;
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const CarouselArrow = styled.button<CarouselProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  border: none;
  color: ${(props => props.theme.colors['base-sideBar'])};
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`]};
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;
