import React from 'react';
import { DOTS, usePagination } from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

type PaginationType = {
    onPageChange: (pageIndex: number) => void,
    totalCounts: number,
    pageIndex: number,
    pageSize: number,
    className?: string,
    siblingCount?: number,
};

const Pagination: React.FC<PaginationType> = ({
    onPageChange,
    totalCounts,
    pageIndex,
    pageSize,
    className = '',
    siblingCount = 1,
}) => {
    const [t] = useTranslation();

    const paginationRange = usePagination({
        totalCounts,
        pageIndex,
        pageSize,
        siblingCount
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (pageIndex === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(pageIndex + 1);
    };

    const onPrevious = () => {
        onPageChange(pageIndex - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={classNames("pagination pagination-sm mb-0", { [className]: className })}>
            <li className={classNames("page-item", { disabled: pageIndex === 1 })}>
                <button
                    className="page-link"
                    onClick={onPrevious}
                    tabIndex={-1}
                >
                    {t('user.previous')}
                </button>
            </li>
            {paginationRange.map(pageNumber => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li className="page-item">
                            <button className="page-link">
                                &#8230;
                            </button>
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li className={classNames('page-item', { active: pageNumber === pageIndex })}>
                        <button className="page-link"
                            onClick={() => onPageChange(Number(pageNumber))}>
                            {pageNumber}
                        </button>
                    </li>
                );
            })}
            <li className={classNames("page-item", { disabled: pageIndex === lastPage })}>
                <button className="page-link"
                    onClick={onNext}>
                    {t('user.next')}
                </button>
            </li>
        </ul>
    );
}

export default Pagination;