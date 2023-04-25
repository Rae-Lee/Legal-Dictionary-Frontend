import { apiHelper } from './../utils/helpers.js'
export default {
  editNotes ({ id, content }) {
    return apiHelper.put(`/notes/${id}`, { content })
  },
  deleteNotes ({ id }) {
    return apiHelper.delete(`/notes/${id}`)
  }
}
