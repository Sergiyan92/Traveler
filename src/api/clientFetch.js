import axios from 'axios'

export const clientFetch = axios.create({
  // baseURL: 'https://connections-api.herokuapp.com/'
  // baseURL: 'https://back-for-vue-js.onrender.com/'
  baseURL: 'http://localhost:3000/'
})
