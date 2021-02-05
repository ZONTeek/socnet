import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "b9b7da72-358c-41c6-bce8-b75c9ffd97c2" },
  withCredentials: true,
})

export let getUsers = (page, userPerPage) => {
  return instance.get(`users/?page=${page}&count=${userPerPage}`)
    .then(response => {
      return response.data
    })
}
export let followUser = (userId) => {
  return instance.post(`follow/${userId}`)
    .then(response => { return response.data })
}

export let unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`)
    .then(response => { return response.data })
}