import React from 'react';
import s from '../Users/Users.module.css'


const ManyPages = (currentPage, pageCount, onPageChanged, pages) => {
  if (currentPage > 9 && currentPage < pageCount) return <div className={s.pages}>
    <span onClick={() => onPageChanged(1)}>1</span>
    <span>...</span>
    <span onClick={() => onPageChanged(currentPage - 1)}>{currentPage - 1} </span>
    <span onClick={() => onPageChanged(currentPage)} className={s.activePage}>{currentPage} </span>
    <span onClick={() => onPageChanged(currentPage + 1)}>{currentPage + 1}</span>
    <span>...</span>
    <span onClick={() => onPageChanged(pageCount)}>{pageCount}</span>
  </div>
  if (currentPage < 10) return <div className={s.pages}>
    {
      pages.map(p => {
        return p < 11 ? <span
          key={p}
          onClick={() => onPageChanged(p)}
          className={currentPage === p ? s.activePage : null}>
          {p + ' '}
        </span> : null
      }
      )}
  </div>
  if (currentPage === pageCount) return <div className={s.pages}>
    <span onClick={() => onPageChanged(1)}>1</span>
    <span>...</span>
    <span onClick={() => onPageChanged(currentPage - 1)}>{currentPage - 1} </span>
    <span onClick={() => onPageChanged(currentPage)} className={s.activePage}>{currentPage} </span>
  </div>
}


export default ManyPages;