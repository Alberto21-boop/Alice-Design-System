import styled from 'styled-components';

interface CarouselSlideProps {
    bgColor?: string;
}

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 300px;
  position: relative;
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme, bgColor }) =>
        theme.colors[bgColor as keyof typeof theme.colors] || bgColor || '#ccc'}; 
  /* Usando fallback para #ccc caso a cor não seja encontrada */
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
