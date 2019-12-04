import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
      <img src='https://sun9-62.userapi.com/c854220/v854220140/c9519/wTbO9fTVI_k.jpg' />
        {props.massage}
      </div>
      <div>
        <span>
          {props.likesCount} Likes
        </span>
      </div>
    </div>
  )
}

export default Post;