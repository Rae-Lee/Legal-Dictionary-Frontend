import { apiHelper } from './../utils/helpers.js'
export default {
  getUsers () {
    return apiHelper.get('/admin/users')
  },
  suspendUser ({ id }) {
    return apiHelper.delete(`/admin/users/${id}`)
  },
  unsuspendUser ({ id }) {
    return apiHelper.put(`/admin/users/${id}`)
  }
}
