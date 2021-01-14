import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost());
        },
        updateNewPostText: (action) => {
            dispatch(updateNewPostText(action));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;