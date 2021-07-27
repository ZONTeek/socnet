import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from "react-router-dom";


const Sidebar = (props) => {
    let navProfileItem = props.sidebar.map(p =>
        <div className='123' key={p.id}>
            <NavLink
                to='/'
                className={s.friends}>
                {p.name}
            </NavLink>
        </div>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={props.authInfo.isAuth?`/profile/${props.authInfo.userId}`:"/login"} activeClassName={s.active}>Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs/" activeClassName={s.active}>Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/audio' activeClassName={s.active}>Audio </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users </NavLink>
            </div>
            <div>
                <h3>My friends</h3>
                <div className={s.friends}>
                    {navProfileItem}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;