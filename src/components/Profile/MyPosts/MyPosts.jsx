import React from "react";
import AddPostForm from "./AddPostForm";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((p) => (
    <Post key={p.id} post={p.post} likesCount={p.likes} />
  ));

  return (
    <div className={s.postsBlock}>
      <div className={s.MyPosts}>
        <h3>Posts: </h3>{" "}
        {props.isAuth?<AddPostForm
          myOnPostChange={props.updateNewPostText}
          addPost={props.addPost}
        />:""}
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
