import React, { useState } from 'react';
import { SliderContainer, SliderTrack, SliderThumb, SliderValue } from './styles';

interface AliSliderProps {
    min: number;
    max: number;
    step: number;
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

const AliSlider: React.FC<AliSliderProps> = ({ min, max, step, themeColor }) => {
    const [value, setValue] = useState((min + max) / 2); // Valor inicial do slider

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <SliderContainer>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleSliderChange}
                style={{ width: '100%', position: 'absolute', opacity: 0, zIndex: 1 }} // Invisível mas interativo
            />
            <SliderTrack themeColor={themeColor} value={(value - min) / (max - min) * 100} />
            <SliderThumb themeColor={themeColor} value={(value - min) / (max - min) * 100} />
            <SliderValue>{value}</SliderValue>
        </SliderContainer>
    );
};

export default AliSlider;
