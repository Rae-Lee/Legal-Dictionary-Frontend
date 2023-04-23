import { apiHelper } from './../utils/helpers.js'
export default {
  getReferences ({ id }) {
    return apiHelper.get(`/references/${id}`)
  }
}
