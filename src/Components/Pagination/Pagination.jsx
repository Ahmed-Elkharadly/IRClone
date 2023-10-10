import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(setCurrentItems, items) {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    console.log(items);
    useEffect(() => {
        const endOffset = itemOffset + 10;
        console.log(`${items}Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items?.length / 10));
    }, [itemOffset, items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * 10 % data.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
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