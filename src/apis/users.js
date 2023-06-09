import { apiHelper } from './../utils/helpers.js'
export default {
  getProfile ({ id }) {
    return apiHelper.get(`/users/${id}`)
  },
  getNotes ({ page, id }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/users/${id}/notes?${searchParams.toString()}`)
  },
  getFavorites ({ page, id }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/users/${id}/likes?${searchParams.toString()}`)
  },
  addFavorite ({ id }) {
    return apiHelper.post(`/keywords/${id}/likes`, null)
  },
  deleteFavorite ({ id }) {
    return apiHelper.delete(`/keywords/${id}/likes`, null)
  },
  editProfile ({ id, account, name, email, password, checkPassword }) {
    return apiHelper.put(`/users/${id}`, { account, name, email, password, checkPassword })
  },
  getCurrentUser () {
    return apiHelper.get('/users/current_user')
  }
}
