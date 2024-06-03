import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://travel-backend-3glj.onrender.com/'
  // baseURL: 'http://localhost:3000/'
})
