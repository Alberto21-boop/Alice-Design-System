import React, { useState } from 'react';
import { Container, Star, Heart, RatingItem } from './styles';

interface AliRankingProps {
    type: 'star' | 'heart';
    maxRating?: number;
}

const AliRanking: React.FC<AliRankingProps> = ({ type, maxRating = 5 }) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [rating, setRating] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => setHovered(index);
    const handleMouseLeave = () => setHovered(null);
    const handleClick = (index: number) => setRating(index);

    const renderRatingItem = (index: number) => {
        let Component;
        if (type === 'star') Component = Star;
        else Component = Heart;

        return (
            <RatingItem
                as={Component}
                key={index}
                filled={index <= (hovered ?? rating ?? -1)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
            />
        );
    };

    return (
        <Container>
            {Array.from({ length: maxRating }, (_, i) => renderRatingItem(i + 1))}
        </Container>
    );
};

export default AliRanking;
