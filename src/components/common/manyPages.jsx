import React from 'react';
import s from '../Users/Users.module.css'

let ManyPages = (currentPage, pageCount, onPageChanged) => {
  return <div>
    <span onClick={() => onPageChanged(1)}>1</span>
    <span>...</span>
    <span onClick={() => onPageChanged(currentPage - 1)}>{currentPage - 1} </span>
    <span onClick={() => onPageChanged(currentPage)} className={s.selectedPage}>{currentPage} </span>
    <span onClick={() => onPageChanged(currentPage + 1)}>{currentPage + 1}</span>
    <span>...</span>
    <span onClick={() => onPageChanged(pageCount - 1)}>{pageCount - 1}</span>
  </div>
}
export default ManyPages;