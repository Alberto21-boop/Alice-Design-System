import styled from 'styled-components';

// Mapeamento das cores para as do tema
const backgroundColorsMap = {
  blue: 'brand-blue',
  green: 'brand-green',
  'alert-red': 'brand-alert-red',
  'gray-dark': 'brand-gray-dark',
  purple: 'brand-purple',
  pink: 'brand-pink',
  yellow: 'brand-yellow',
  orange: 'brand-orange',
  'alice-blue': 'brand-alice-blue',
  'yellow-soft': 'brand-yellow-soft',
  'yellow-bright': 'brand-yellow-bright',
  charcoal: 'brand-charcoal',
  slate: 'brand-slate',
  onyx: 'brand-onyx',
  white: 'base-white', // Adicionando a cor branca ao mapeamento
} as const;

// Estilo para o CardContainer
export const CardContainer = styled.div<{ backgroundColor: keyof typeof backgroundColorsMap; fontColor: 'white' | 'black' }>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColorsMap[backgroundColor]]}; /* Cor de fundo dinâmica */
  color: ${({ fontColor }) => (fontColor === 'white' ? '#FFFFFF' : '#000000')}; /* Cor da fonte (branca ou preta) */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors["brand-gray-light"]}33; /* Sombra suave */
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors["brand-gray-dark"]}33; /* Sombra ao passar o mouse */
  }
`;

// Estilo para o título do Card
export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.textSizes["title-title-m"]}; /* Tamanho da fonte do título */
  color: inherit; /* Cor herdada */
  margin-bottom: 12px;
`;

// Estilo para o conteúdo do Card
export const CardContent = styled.p`
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]}; /* Tamanho da fonte do conteúdo */
  color: inherit; /* Cor herdada */
  line-height: 1.6; /* Espaçamento entre linhas */
`;

// Estilo para o rodapé do Card (opcional)
export const CardFooter = styled.div<{ showFooterLine: boolean }>`
  margin-top: auto;
  padding-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  /* Exibir ou esconder a linha de acordo com a prop */
  border-top: ${({ showFooterLine, theme }) => (showFooterLine ? `1px solid ${theme.colors["base-hover"]}` : 'none')};
`;
