import Axios from 'axios'

const HEROKU_URL = 'https://radiant-earth-48941.herokuapp.com/blog'
const LOCAL_URL = 'http://localhost:3001/'
export const BASE_URL =
  process.env.NODE_ENV === 'blog_development' ? LOCAL_URL : HEROKU_URL

const Client = Axios.create({ baseURL: BASE_URL })
