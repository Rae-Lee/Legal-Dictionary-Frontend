import { apiHelper } from './../utils/helpers.js'
const token = () => { return localStorage.getItem('token') }
export default {
  getTopKeyword () {
    return apiHelper.get('/keywords/top')
  },
  getKeywordArticles ({ page, keywordId }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${keywordId}/articles?${searchParams.toString()}`)
  },
  getKeywordReferences ({ page, keywordId }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${keywordId}/references?${searchParams.toString()}`)
  },
  getKeywordNotes ({ page, keywordId }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/keywords/${keywordId}/notes?${searchParams.toString()}`, { header: { Authorization: `Bearer${token()}` } })
  },
  addKeyword ({keyword}){
    return apiHelper.post()
  }
}
