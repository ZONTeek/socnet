const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let stateInit = {
  postData: [
    { id: 1, post: 'Post1', likes: 5 },
    { id: 2, post: 'Post2', likes: 1 },
    { id: 3, post: 'Post3', likes: 2 },
  ],
  newPostContent: '',
}

const profileReducer = (state = stateInit, action) => {

  switch (action.type) {
    case ADD_POST: return {
      ...state,
      postData: [...state.postData, { id: state.postData.length + 1, post: state.newPostContent, likes: 0 }],
      newPostContent: '',
    };
    case UPDATE_NEW_POST_TEXT: return { ...state, newPostContent: action.newText };
    default: return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;