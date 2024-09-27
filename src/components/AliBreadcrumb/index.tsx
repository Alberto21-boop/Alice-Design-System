import React from 'react';
import { BreadcrumbContainer, BreadcrumbItem, Separator } from './styles';

interface BreadcrumbItemProps {
    name: string;
    url?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItemProps[];
    separator?: string;
    onNavigate?: (url: string) => void;
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

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = '>',
    onNavigate,
    themeColor,
}) => {
    const handleClick = (url?: string) => {
        if (url && onNavigate) {
            onNavigate(url);
        }
    };

    return (
        <BreadcrumbContainer aria-label="breadcrumb">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem
                        themeColor={themeColor}
                        onClick={() => handleClick(item.url)}
                        isCurrent={!item.url}
                    >
                        {item.name}
                    </BreadcrumbItem>
                    {index < items.length - 1 && <Separator>{separator}</Separator>}
                </React.Fragment>
            ))}
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;
