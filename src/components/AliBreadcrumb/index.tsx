import React from 'react';
import { BreadcrumbContainer, BreadcrumbItem, Separator } from './styles';

interface AliBreadcrumbItemProps {
    name: string;
    url?: string;
    className?: string;
}

interface AliBreadcrumbProps {
    items: AliBreadcrumbItemProps[];
    separator?: string;
    className?: string;
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

const AliBreadcrumb: React.FC<AliBreadcrumbProps> = ({
    items,
    className,
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
        <BreadcrumbContainer className={className} aria-label="breadcrumb">
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

export default AliBreadcrumb;
