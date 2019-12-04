import React from 'react';
import pic from './profilebackpic.png';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={pic} />
        ava+descr
        </div>
      <MyPosts />
    </div>
  )
}

export default Profile;