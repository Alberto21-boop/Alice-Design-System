import styled from 'styled-components';

export const AliHeaderContainer = styled.header<{
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
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
    color: ${({ theme }) => theme.colors['base-white']};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme, themeColor }) => {
        return theme.colors[`brand-${themeColor}`];
    }};
`;
