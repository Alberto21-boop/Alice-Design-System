import styled from 'styled-components';

export const TagContainer = styled.span<{
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
}>`
    background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}`]};
    color: ${({ theme }) => theme.colors['base-white']};
    padding: 8px 12px;
    border-radius: 16px;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme, themeColor }) => theme.colors[`brand-${themeColor}-hover`] || theme.colors[`brand-${themeColor}`]};
        opacity: 0.9;
        cursor: pointer;
    }
`;
