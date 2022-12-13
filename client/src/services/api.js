import Axios from 'axios'

const LOCAL_URL = 'http://localhost:3001/'
export const BASE_URL =
  process.env.NODE_ENV === 'teambeef_development' ? LOCAL_URL : HEROKU_URL

const Client = Axios.create({ baseURL: BASE_URL })
