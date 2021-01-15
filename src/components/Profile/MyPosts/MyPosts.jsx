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
            <form>
                <input onChange={onPostChange}
                    value={props.state.newPostContent}
                    onSubmit={(e) => { e.preventDefault(); addPost() }}
                />
                <button onClick={(e) => { e.preventDefault(); addPost() }} type="submit">Add post</button>
            </form>
            <div className={s.MyPosts}>
                <h3>Posts: </h3>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;