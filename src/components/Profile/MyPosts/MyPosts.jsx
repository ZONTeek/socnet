import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {
    let postElements = props.state.postData.map(p =>
        <Post key={p.id} post={p.post} likesCount={p.likes} />)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange}
                    value={props.state.newPostContent} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.MyPosts}>
                <h3>My posts: </h3>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;