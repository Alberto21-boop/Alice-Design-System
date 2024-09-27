import React, { useState } from 'react';
import { CarouselContainer, CarouselSlides, CarouselSlide, CarouselArrow } from './styles';

interface AliCarouselProps {
    themeColor: 'blue' | 'green' | 'alert-red' | 'gray-dark' | 'purple' | 'pink' | 'yellow' | 'orange' | 'alice-blue' | 'yellow-soft' | 'yellow-bright' | 'charcoal' | 'slate' | 'onyx';
    images: string[];
}

const AliCarousel: React.FC<AliCarouselProps> = ({ themeColor, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <CarouselContainer themeColor={themeColor}>
            <CarouselSlides style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <CarouselSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </CarouselSlide>
                ))}
            </CarouselSlides>
            <CarouselArrow className="left" themeColor={themeColor} onClick={handlePrev}>‹</CarouselArrow>
            <CarouselArrow className="right" themeColor={themeColor} onClick={handleNext}>›</CarouselArrow>
        </CarouselContainer>
    );
};

export default AliCarousel;
