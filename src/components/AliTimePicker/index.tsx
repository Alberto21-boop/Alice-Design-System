import React, { useState } from 'react';
import { TimePickerContainer, TimePickerInput } from './styles';

interface AliTimePickerProps {
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
    onChange: (time: string) => void;
}

const AliTimePicker: React.FC<AliTimePickerProps> = ({ themeColor, onChange }) => {
    const [selectedTime, setSelectedTime] = useState<string>('');

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const time = event.target.value;
        setSelectedTime(time);
        onChange(time);
    };

    return (
        <TimePickerContainer>
            <TimePickerInput
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                themeColor={themeColor}
            />
        </TimePickerContainer>
    );
};

export default AliTimePicker;
