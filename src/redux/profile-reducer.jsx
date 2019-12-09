const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let stateInit = {
    postData: [
        {id: 1, post: 'huy1', likes: 5},
        {id: 2, post: 'huy2', likes: 1},
        {id: 3, post: "huy3", likes: 2},
    ],
    newPostContent: "text content123"
}

const profileReducer = (state = stateInit, action) => {

    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostContent,
                likes: 0,
            };
            stateCopy.postData.push(newPost);
            stateCopy.newPostContent = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostContent = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;