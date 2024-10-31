import React, { useState } from 'react';
import { InputContainer, StyledInput, StyledSelect, StyledTextArea, StyledSlider, InputLabel, IconWrapper, HiddenFileInput } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSearch, faTrash, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AliButton from '../AliButton';

interface AliInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    options?: string[];  // Para o select
}

const AliInput: React.FC<AliInputProps> = ({
    label = 'Label',
    type = 'text',
    placeholder = 'Enter text',
    value,
    onChange,
    options = [],
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);  // Atualiza o nome do arquivo selecionado
        }
        if (onChange) {
            onChange(e);
        }
    };

    const handleFileDelete = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';  // Reseta o input de arquivo
            setFileName(null);  // Limpa o nome do arquivo
        }
    };

    return (
        <InputContainer>
            {label && <InputLabel>{label}</InputLabel>}
            <div style={{ position: 'relative' }}>
                {/* Input Password */}
                {type === 'password' && (
                    <>
                        <StyledInput
                            type={showPassword ? 'text' : 'password'}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                        <IconWrapper onClick={handleTogglePassword}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </IconWrapper>
                    </>
                )}

                {/* Input Search */}
                {type === 'search' && (
                    <>
                        <StyledInput
                            type="search"
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                        />
                        <IconWrapper>
                            <FontAwesomeIcon icon={faSearch} />
                        </IconWrapper>
                    </>
                )}

                {/* Input File com AliButton e Lixeira */}
                {type === 'file' && (
                    <>
                        <HiddenFileInput
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <AliButton
                            actionLevel="primary-blue"
                            size="md"
                            AliClick={handleFileClick}
                        >
                            Escolher Ficheiro
                        </AliButton>
                        {fileName && (
                            <>
                                <span style={{ marginLeft: '10px' }}>{fileName}</span>
                                <IconWrapper onClick={handleFileDelete}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </IconWrapper>
                            </>
                        )}
                    </>
                )}

                {/* Input Select com Chevron Down */}
                {type === 'select' && (
                    <>
                        <StyledSelect value={value} onChange={onChange} style={{ appearance: 'none' }}>
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </StyledSelect>
                        <IconWrapper>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </IconWrapper>
                    </>
                )}

                {/* Text Area */}
                {type === 'textarea' && (
                    <StyledTextArea placeholder={placeholder} value={value} onChange={onChange} />
                )}

                {/* Slider */}
                {type === 'range' && (
                    <StyledSlider type="range" value={value} onChange={onChange} />
                )}
            </div>
        </InputContainer>
    );
};

export default AliInput;
