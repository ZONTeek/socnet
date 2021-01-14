const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let stateInit = {
  users: [],
  currentPage: 1,
  usersTotalCount: 0,
  userPerPage: 30,
  isFetching: true,
}

const usersReducer = (state = stateInit, action) => {
  switch (action.type) {
    case SET_USERS: return ({ ...state, users: action.users, usersTotalCount: action.totalCount });
    case SET_CURRENT_PAGE: return ({ ...state, currentPage: action.page });
    case TOGGLE_FOLLOW: return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.id) {
          u.followed = !u.followed;
          return u;
        } else return u;
      })
    }
    case TOGGLE_FETCHING: return { ...state, isFetching: false }
    default: return state;
  }
}

export const setUsers = (users, totalCount) => ({ type: SET_USERS, users: users, totalCount: totalCount });
export const setCurrentPage = (pageNum) => ({ type: SET_CURRENT_PAGE, page: pageNum });
export const toggleFollow = (id) => ({ type: TOGGLE_FOLLOW, id });
export const toggleFetching = () => ({ type: TOGGLE_FETCHING });

export default usersReducer;