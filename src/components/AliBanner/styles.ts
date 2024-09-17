import styled from 'styled-components';

export const BannerContainer = styled.div<{
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
    | 'onyx'
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 80px;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BannerImage = styled.img`
  width: 48px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;

export const BannerText = styled.div`
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: 16px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 0px; /* Desci o botão apenas 1 pixel */
  right: 5px; /* Movei o botão um pouquinho mais para a direita */
`;

