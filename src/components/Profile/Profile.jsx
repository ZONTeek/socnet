import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo 
      profile={props.profile} 
      status={props.status} 
      isMyPage={props.isMyPage}
      updateStatus={props.updateStatus}
      />
      <MyPostsContainer isAuth={props.isAuth}/>
    </div>
  )
}

export default Profile;

