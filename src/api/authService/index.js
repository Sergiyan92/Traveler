import { router } from '@/router'
import { clientFetch } from '../clientFetch'

export const TOKEN_KEY = 'token'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  getToken() {
    return this.#token
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    this.#token = token
  }

  clearToken() {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
    clientFetch.defaults.headers.common = {}
  }

  async login(body) {
    // const { data } = await clientFetch.post('/users/login', body)
    const { data } = await clientFetch.post('/user/login', body)
    //   /user/login
    const { token } = data
    this.setToken(token)
  }

  async registerUser(body) {
    // const { data } = await clientFetch.post('/users/signup', body)
    const { data } = await clientFetch.post('/user/register', body)
    //   /user/register
    const { accessToken } = data
    this.setToken(accessToken)
  }

  async logout() {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh() {
    const { data } = await clientFetch.get('/user/refresh')
    const { token } = data
    this.setToken(token)
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken()

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return request
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error.response.statusCode

    if (errorCode === 401) {
      try {
        return await authService.refresh()
      } catch (err) {
        router.push('/auth/login')
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)
