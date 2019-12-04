import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const sidebar = (props) => {
    let urlPath = '/dialogs/' + props.navState.PicName;
    let PicPath = '../redux/img'+props.navState.PicName;
    let navProfileName = props.navState.Name.map
    ( p => <NavLink to={urlPath}><img src={PicPath} /> {props.navState.Name}</NavLink>)
debugger;
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.active}>Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.active}>Massages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.active}>News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Audio' activeClassName={s.active}>Audio </NavLink>
            </div>
            <div>
                <h3>My friends</h3>
                <div className={s.friends}>
                    {navProfileName}
                </div>
            </div>
        </nav>
    )
}

export default sidebar;