import React from "react";
import './pagination.css'

const Pagination = ({ carsPerPage, totalCars, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return (

        <ul className="pagination">
            {
                pageNumbers.map(number => {
                    return (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="">
                                {number}
                            </a>
                        </li>)
                })
            }
        </ul>

    )
}

export default Pagination;