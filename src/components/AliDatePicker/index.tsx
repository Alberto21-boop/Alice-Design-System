import React, { useState } from 'react';
import { DatePickerContainer, DatePickerInput } from './styles';

interface AliDatePickerProps {
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
    onChange: (date: Date | null) => void;
}

const AliDatePicker: React.FC<AliDatePickerProps> = ({ themeColor, onChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(event.target.value);
        setSelectedDate(date);
        onChange(date);
    };

    return (
        <DatePickerContainer>
            <DatePickerInput
                type="date"
                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                onChange={handleDateChange}
                themeColor={themeColor}
            />
        </DatePickerContainer>
    );
};

export default AliDatePicker;
