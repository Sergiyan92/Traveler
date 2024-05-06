import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/users/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/users/signup', body)
}

export const logout = () => {
  return clientFetch.get('/user/logout')
}

export const refresh = () => {
  return clientFetch.get('/user/refresh')
}
