import React, { useState } from 'react';
import { LikeContainer, StyledLike, LikeLabel } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface AliLikeProps {
    label?: string;
    liked?: boolean;
    onLikeChange?: (liked: boolean) => void;
    themeColor?:
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

const AliLike: React.FC<AliLikeProps> = ({
    label = 'Like',
    liked = false,
    onLikeChange,
    themeColor = 'blue'
}) => {
    const [isLiked, setIsLiked] = useState(liked);

    const handleLikeChange = () => {
        setIsLiked(!isLiked);
        if (onLikeChange) {
            onLikeChange(!isLiked);
        }
    };

    return (
        <LikeContainer onClick={handleLikeChange}>
            <StyledLike liked={isLiked} themeColor={themeColor}>
                <FontAwesomeIcon icon={faThumbsUp} />
            </StyledLike>
            {label && <LikeLabel>{label}</LikeLabel>}
        </LikeContainer>
    );
};

export default AliLike;
