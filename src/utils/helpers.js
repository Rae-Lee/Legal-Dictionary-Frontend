import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api/v1'
const axiosInstance = axios.create({ baseURL })
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'
  }
  return config
},
err => Promise.reject(err)
)

export const apiHelper = axiosInstance
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000
})
export const errHandler = (data, router, errMessage) => {
  const code = data.status
  if (code === 400) {
    console.log(data.message)
    for (let message of data.message) {
      Toast.fire({
        icon: 'warning',
        title: message
      })
    }
  } else if (code === 401) {
    Toast.fire({
      icon: 'warning',
      title: data.message
    })
    router.push('/login')
  } else if (code === 403) {
    Swal.fire({
      icon: 'error',
      title: data.message
    })
  } else if (code === 500) {
    Swal.fire({
      icon: 'error',
      title: '無法取得資料，請稍後再試！'
    })
  }
}
export const successHandler = (data) => {
  const code = data.status
  if (code === 200) {
    Toast.fire({
      icon: 'success',
      title: data.message
    })
  }
}
