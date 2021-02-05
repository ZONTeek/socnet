import React from 'react';
import s from './Header.module.css'
import logo from "./logo.png"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="logo" src={logo}></img>
      <div className={s.authInfo}>
        {props.authInfo.email}
      </div>
    </header>)
}

export default Header;