import React from 'react';
import ReactPaginate from 'react-paginate';
export default function Searchpagination({pagination,setter}){
    function onChange(current){
        console.log(current)
    }
    console.log(pagination)
    return(<div>
        <ReactPaginate pageCount={pagination.pages} onClick={onChange}/>
    </div>)
}