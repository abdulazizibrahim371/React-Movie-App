import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';
const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange}=props;
    console.log(currentPage);
    const pagesCount= Math.ceil(itemsCount/ pageSize);
    if(pagesCount===1) return null;
    const pages=_.range(1, pagesCount+1);

        return (
            <div>
        <nav>
            <ul className="Pagination">
            {pages.map(page=>(
                <li key={page} className={page===currentPage? 'page-item active' : 'page-item'}>
                    <a  onClick={()=>onPageChange(page)} className="page-link">{page}</a>
                </li>
            ))}
            </ul>
        </nav>
        </div>
     );
     Pagination.propTypes={
        itemsCount:propTypes.number.isRequired,
         pageSize:propTypes.number.isRequired,
         currentPage:propTypes.number.isRequired,
         onPageChange: propTypes.func.isRequired
     }
};
 
export default Pagination;