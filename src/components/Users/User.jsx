import React from 'react';
import s from './Users.module.css';
import default_ava from './default_avatar.png'

const showPhoto = (photo) => {
  return photo ? photo : default_ava;
}

const User = ({ userInfo, toggleFollow, photo, ...props }) => {
  return <>
    <span className={s.user}>
      <img alt="user avatar" src={showPhoto(userInfo.photos.small)} />
      <p>{userInfo.name}</p>
      <button onClick={() => toggleFollow(userInfo.id)}>{userInfo.followed ? "Unfollow" : "Follow"}</button>
    </span>
  </>
}

export default User;