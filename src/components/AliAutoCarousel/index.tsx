import React, { useEffect, useState } from 'react';
import { CarouselContainer, CarouselSlide, CarouselImage } from './styles';

interface AliAutoCarouselProps {
    images: string[];
    interval?: number;
    bgColor?: string;
    className?: string;
}

const AliAutoCarousel: React.FC<AliAutoCarouselProps> = ({ images, className, interval = 3000, bgColor }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, [images.length, interval]);

    return (
        <CarouselContainer>
            {images.map((image, index) => (
                <CarouselSlide
                    key={index}
                    bgColor={bgColor}
                    className={className}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <CarouselImage src={image} alt={`Slide ${index}`} />
                </CarouselSlide>
            ))}
        </CarouselContainer>
    );
};

export default AliAutoCarousel;
