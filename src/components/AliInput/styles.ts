import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 16px;
  position: relative;  // Necessário para posicionar corretamente os ícones dentro do input
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 40px;  // Deixe espaço para o ícone, se necessário
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;  // Para permitir que o usuário ajuste a altura do TextArea
  box-sizing: border-box;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;  // Remove a seta padrão do select
  padding-right: 40px;  // Deixe espaço para o ícone personalizado
  box-sizing: border-box;
`;

export const StyledSlider = styled.input`
  width: 100%;
  margin-top: 8px;
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  &:hover {
    color: #333;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

