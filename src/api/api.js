import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "b9b7da72-358c-41c6-bce8-b75c9ffd97c2" },
  withCredentials: true,
});

export let usersAPI = {
  getUsers(page, userPerPage) {
    return instance
      .get(`users/?page=${page}&count=${userPerPage}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export let profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(newStatus) {
    return instance
      .put("profile/status", { status: newStatus })
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },
};

export let authAPI = {
  me() {
    return instance
      .get("auth/me")
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },
  login(email, password, rememberMe) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((res) => {
        return res.data;
      });
  },
  logout() {
    return instance.delete("auth/login").then((res) => {
      return res.data;
    });
  },
};
