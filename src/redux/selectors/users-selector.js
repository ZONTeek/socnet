import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsersReselect = createSelector(getUsersSelector, (users) => {
    return users;
});

export const getIsFetching= (state) => {
    return state.usersPage.isFetching;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getUserPerPage = (state) => {
    return state.usersPage.userPerPage;
}
export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount;
}