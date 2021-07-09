const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const CLEAR_PROFILE = "CLEAR_PROFILE"

let stateInit = {
  UserProfile: {
    aboutMe: "",
    contacts: {},
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 2,
    photos: {
      small: "",
      large: ""
    }
  },
  postData: [
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
    case SET_USER_PROFILE: return { ...state, UserProfile: action.userInfo }
    case CLEAR_PROFILE: return stateInit;
    default: return state;
  }
}
export const clearProfileData = () => ({type: CLEAR_PROFILE})
export const setUserProfile = (userInfo) => ({ type: SET_USER_PROFILE, userInfo });
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;