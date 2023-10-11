import { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ setCurrentItems, items, itemsCount }) {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + itemsCount;
        console.log(`${'ss'}Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items?.length / itemsCount));
    }, [itemOffset, items]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsCount % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
            nextLabel={t("next >")}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={t("< prev")}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />


    )
}

export default Pagination