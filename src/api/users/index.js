import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/api/auth/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/api/auth/signup', body)
}

export const logout = () => {
  return clientFetch.post('/api/auth/logout')
}

export const refresh = () => {
  return clientFetch.get('/api/auth/refresh')
}

export const getUserInfo = () => {
  return clientFetch.get('/api/auth/refresh')
}

export const updateAvatar = (formData) => {
  return clientFetch.patch('/api/auth/avatars', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
