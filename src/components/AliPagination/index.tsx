import React, { useState } from 'react';
import { PaginationContainer, PageButton, NavigationButton } from './styles';

interface AliPaginationProps {
    totalPages: number;
    currentPage: number;
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
    onPageChange: (page: number) => void;
}

const AliPagination: React.FC<AliPaginationProps> = ({
    totalPages,
    currentPage,
    themeColor,
    onPageChange,
}) => {
    const [page, setPage] = useState(currentPage);

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
        onPageChange(pageNumber);
    };

    const handleNext = () => {
        if (page < totalPages) {
            handlePageClick(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            handlePageClick(page - 1);
        }
    };

    return (
        <PaginationContainer themeColor={themeColor}>
            <NavigationButton themeColor={themeColor} onClick={handlePrevious}>
                {'<'}
            </NavigationButton>

            {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                    key={i + 1}
                    themeColor={themeColor}
                    isActive={page === i + 1}
                    onClick={() => handlePageClick(i + 1)}
                >
                    {i + 1}
                </PageButton>
            ))}

            <NavigationButton themeColor={themeColor} onClick={handleNext}>
                {'>'}
            </NavigationButton>
        </PaginationContainer>
    );
};

export default AliPagination;
