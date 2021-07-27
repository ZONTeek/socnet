import { authAPI } from "../api/API";

const SET_AUTH_INFO = "SET_AUTH_INFO";
const SET_ERROR = "SET_ERROR";

let stateInit = {
  userId: 14110,
  login: undefined,
  email: undefined,
  isAuth: false,
  _error: "",
};

const authReducer = (state = stateInit, action) => {
  switch (action.type) {
    case SET_AUTH_INFO:
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth,
      };
    case SET_ERROR:
      return {
        ...state,
        _error: action.error,
      };
    default:
      return state;
  }
};
export const setError = (error) => ({ type: SET_ERROR, error });
export const setAuthData = (userId, login, email, isAuth) => ({
  type: SET_AUTH_INFO,
  data: { userId, login, email, isAuth },
});

export const loginTC =
  (email, password, rememberMe = false) =>
  (dispatch) => {
    authAPI
      .login(email, password, rememberMe)
      .then((response) => {
        debugger;
        if (response.resultCode === 0) dispatch(getAuthDataTC());
        else if(response.resultCode === 1){
          dispatch(setError(response.messages[0]));
        } else if(response.resultCode === 10) 
        console.log("надо капчу добавить");
      })
      .catch((err) => console.log(err));
  };
export const logOutTC = () => (dispatch) => {
  dispatch(setAuthData(null, null, null, false));
  authAPI.logout().then((res) => {
    //if(res.resultCode===0)
  });
};
export const getAuthDataTC = () => (dispatch) => {
  authAPI.me().then((res) => {
    let response = res;
    if (response.resultCode === 0) {
      let { id, login, email } = response.data;
      dispatch(setAuthData(id, login, email, true));
    } else console.log(response.messages);
  });
  return "OK";
};

export default authReducer;
