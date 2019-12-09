import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const 123MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (action) => {
                        store.dispatch(updateNewPostTextActionCreator(action));
                    };
                    return <MyPosts state={state.profilePage}
                                    updateNewPostText={onPostChange}
                                    addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (action) => {
            dispatch(updateNewPostTextActionCreator(action));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;