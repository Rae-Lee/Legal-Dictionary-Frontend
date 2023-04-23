import { apiHelper } from './../utils/helpers.js'

export default {
  getTopKeyword () {
    return apiHelper.get('/keywords/top')
  },
  getKeywordArticles ({ page, id }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${id}/articles?${searchParams.toString()}`)
  },
  getKeywordReferences ({ page, id }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${id}/references?${searchParams.toString()}`)
  },
  getKeywordNotes ({ page, id }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${id}/notes?${searchParams.toString()}`)
  },
  addKeyword ({ name }) {
    return apiHelper.post('/keywords', { name })
  },
  getKeyword ({ id }) {
    return apiHelper.get(`/keywords/${id}`)
  },
  getFavorite ({ id }) {
    return apiHelper.get(`keywords/${id}/likes`)
  }
}
