import { apiHelper } from './../utils/helpers.js'
export default {
  login ({ account, password }) {
    return apiHelper.post('/users/login', { account, password })
  },
  register ({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/users/register', { account, name, email, password, checkPassword })
  },
  adminLogin ({ account, password }) {
    return apiHelper.post('/admin/login', { account, password })
  }
}
