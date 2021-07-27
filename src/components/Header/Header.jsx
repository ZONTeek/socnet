import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css'
import logo from "./logo.png"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="logo" src={logo}></img>
      <div className={s.authInfo}>
        {props.authInfo.email?props.authInfo.email+" ":""} 
      <span>
      {props.authInfo.isAuth?<Link to={"/login"} onClick={()=> props.logOutTC() }>Logout</Link>:<NavLink to={"/login"}>Login</NavLink>}
      </span>
      </div>
    </header>)
}

export default Header;