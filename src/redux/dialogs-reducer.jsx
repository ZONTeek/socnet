const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.newPostContent,
                likes: 0,
            };
            state.postData.push(newPost);
            state.newPostContent = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostContent = action.newText;
        default: return state;
    }
}
export default profileReducer;