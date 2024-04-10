import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss';

const Pagination = ({info, pageNumber, updatePageNumber}) => {
    const pageCount = info?.pages ? parseInt(info.pages, 10) : 0;
    return <ReactPaginate 
            className="pagination justify-content-center gap-4 my-4" 
            forcePage={pageNumber===1? 0: pageNumber-1}
            nextLabel="Next"
            previousLabel="Prev"
            nextClassName={`${styles.custom_btn} btn btn-primary`}
            previousClassName={`${styles.custom_btn} btn btn-primary`}
            pageClassName="page-item"
            pageLinkClassName={`${styles.page_link_btn} page-link`}
            activeClassName="active"
            onPageChange={(data)=>{
                updatePageNumber(data.selected+1);
            }}
            pageCount={info?.pages}/>
}; 

export default Pagination;