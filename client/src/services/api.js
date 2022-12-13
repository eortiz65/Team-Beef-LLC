import Axios from 'axios'

const HEROKU_URL = 'localhost:3000/beef'
const LOCAL_URL = 'localhost:3000/beef'
export const BASE_URL =
  process.env.NODE_ENV === 'teambeef_development' ? LOCAL_URL : HEROKU_URL

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
