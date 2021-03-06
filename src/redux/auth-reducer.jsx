const SET_AUTH_INFO = 'SET_AUTH_INFO';

let stateInit = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
}

const authReducer = (state = stateInit, action) => {
  switch (action.type) {
    case SET_AUTH_INFO: return {
      ...state, ...action.data, isAuth:true,
    }
    default: return state;
  }
}

export const setAuthData = (userId, login, email) => ({ type: SET_AUTH_INFO, data: { userId, login, email } });

export default authReducer;