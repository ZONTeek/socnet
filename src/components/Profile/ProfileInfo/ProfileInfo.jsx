import React from 'react';
import pic from "../profilebackpic.png";
import s from './ProfileInfo.module.css';
import default_ava from '../../common/default_avatar.png';

const showPhoto = (photo) => {
    return photo ? photo : default_ava;
}

const ProfileInfo = ({ profile }) => {
    console.log(profile);
    return (<>
        <img alt="background avatar" src={pic} />
        <div className={s.profile}>
            <img className={s.userAva} alt="profile avatar" src={showPhoto(profile.photos.large)} />
            <div className={s.description}>
                <p>{profile.fullName}</p>
                <p>{profile.aboutMe}</p>
                <p>{profile.lookingForAJob ? 'Ищет работу с: ' + profile.lookingForAJobDescription : 'Не ищет работу'}</p>
            </div>
        </div>
    </>
    )
}


export default ProfileInfo;