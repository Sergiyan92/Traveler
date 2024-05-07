import { clientFetch } from '../clientFetch'

export const TOKEN_KEY = 'token'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    clientFetch.defaults.headers.common = { Authorization: `Bearer ${token}` }
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
    await clientFetch.get('/user/refresh')
  }
}

export const authService = new AuthService()
