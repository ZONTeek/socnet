import { getAuthDataTC } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const setInitialized = () => ({ type: SET_INITIALIZED });

export const initialize = () => (dispatch) => {
  let promise = dispatch(getAuthDataTC());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;
