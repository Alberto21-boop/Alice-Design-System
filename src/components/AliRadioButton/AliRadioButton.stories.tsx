import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AliRadioButton from './index';

export default {
    title: 'Componentes/AliRadioButton',
    component: AliRadioButton,
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: [
                    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
                ],
            },
        },
    },
} as Meta;

const Template: StoryFn<typeof AliRadioButton> = (args) => {
    const [selected, setSelected] = useState(args.value); // Controla o valor selecionado

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value); // Atualiza o valor selecionado
    };

    return <AliRadioButton {...args} checked={selected === args.value} onChange={handleChange} />;
};



// Exemplo para Default RadioButton
export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    name: 'radio-group',
    value: 'option1',
    checked: true,
    themeColor: 'blue',
};

// Exemplo para um RadioButton secundário
export const SecondaryOption = Template.bind({});
SecondaryOption.args = {
    label: 'Option 2',
    name: 'radio-group',
    value: 'option2',
    checked: false,
    themeColor: 'green',
};

// Renderizar todas as cores como exemplos separados
const colorOptions = [
    'blue', 'green', 'alert-red', 'gray-dark', 'purple', 'pink', 'yellow', 'orange', 'alice-blue', 'yellow-soft', 'yellow-bright', 'charcoal', 'slate', 'onyx'
] as const;

export const AllColors = () => {
    const [selected, setSelected] = useState<typeof colorOptions[number]>('blue');

    const handleRadioChange = (color: typeof colorOptions[number]) => {
        setSelected(color); // Atualiza o estado com a cor selecionada
    };

    return (
        <>
            {colorOptions.map((color) => (
                <div key={color} style={{ marginBottom: '10px' }}>
                    <AliRadioButton
                        label={`Option - ${color}`}
                        name="radio-group-colors" // Grupo único
                        value={color}
                        checked={selected === color} // Apenas um botão pode estar selecionado
                        themeColor={color}
                        onChange={() => handleRadioChange(color)} // Controla a seleção
                    />
                </div>
            ))}
        </>
    );
};

