import { apiHelper } from './../utils/helpers.js'
const token = () => { return localStorage.getItem('token') }
export default {
  getUsers () {
    return apiHelper.get('/admin/users', {
      headers: { Authorization: `Bearer${token}` }
    })
  }
}
