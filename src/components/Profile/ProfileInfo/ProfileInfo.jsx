import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
    <textarea></textarea>
    <button>Add post</button>
    <div className={s.MyPosts}>
    My posts: 
      <Post massage='Huy' likesCount='5' />
      <Post massage='Huy2' likesCount='1' />
    </div>
    </div>
  )
}

export default MyPosts;