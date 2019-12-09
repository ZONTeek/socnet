import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src='https://sun9-62.userapi.com/c854220/v854220140/c9519/wTbO9fTVI_k.jpg'/>
                {props.post}
            </div>
            <span className={s.likes}>
                {props.likesCount} Likes
            </span>
        </div>
    )
}

export default Post;