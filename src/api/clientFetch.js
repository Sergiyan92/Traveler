import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/'
})
