import { profileAPI } from "../api/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const CLEAR_PROFILE = "CLEAR_PROFILE";
const SET_STATUS = "SET_STATUS";

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
      large: "",
    },
  },
  postData: [],
  newPostContent: "123",
  status: ""
};

const profileReducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length + 1,
            post: state.newPostContent,
            likes: 0,
          },
        ],
        newPostContent: "",
      };
    case UPDATE_NEW_POST_TEXT:
      console.log(action.newText)
      return { ...state, newPostContent: action.newText };
    case SET_USER_PROFILE:
      return { ...state, UserProfile: action.userInfo };
      case SET_STATUS:
      return { ...state, status: action.status };
    case CLEAR_PROFILE:
      return stateInit;
    default:
      return state;
  }
};

export const clearProfileData = () => ({ type: CLEAR_PROFILE });
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (userInfo) => ({
  type: SET_USER_PROFILE,
  userInfo,
});

//thunk action creators
export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    let data = response;
    dispatch(setUserProfile(data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus( response ));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if(response.resultCode===0) dispatch(setStatus( status ));
  })
  .catch(err=> console.log(err));
};
export default profileReducer;
