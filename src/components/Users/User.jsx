import React from 'react';
import s from './Users.module.css';
import default_ava from '../common/default_avatar.png'
import { NavLink } from 'react-router-dom';

const showPhoto = (photo) => {
  return photo ? photo : default_ava;
}

const User = ({ userInfo, toggleFollow, photo, ...props }) => {
  return <>
    <span className={s.user}>
      <NavLink to={'/profile/' + userInfo.id}>
        <img alt="user avatar" src={showPhoto(userInfo.photos.small)} />
      </NavLink>
      <p>{userInfo.name}</p>
      <button onClick={() => toggleFollow(userInfo.id)}>{userInfo.followed ? "Unfollow" : "Follow"}</button>
    </span>
  </>
}

export default User;