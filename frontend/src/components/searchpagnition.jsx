import {React,useState} from 'react';
import ReactPaginate from 'react-paginate';
export default function SearchPagination({ pagination, setter }) {
    const [currentPage, setCurrentPage] = useState(pagination.page);

    function handlePageChange(selectedPage) {
        // 更新页码值
        setCurrentPage(selectedPage + 1);

        // 将父组件值更新
        const updatedPagination = {
            ...pagination,
            page: selectedPage + 1,
        };
        setter(updatedPagination);
        console.log(pagination.pages)
    }

    return (
        <div className='mt-4'>
            <ReactPaginate
                pageCount={Math.ceil(pagination.total/pagination.size)}
                onPageChange={({ selected }) => handlePageChange(selected)}
                pageRangeDisplayed={pagination.size}
                forcePage={currentPage - 1} 
                containerClassName='pagination pagination-light d-inline-block d-md-flex justify-content-center'
                pageClassName='page-item'
                activeClassName='page-item active'
            />
        </div>
    );
}