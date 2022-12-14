import Axios from 'axios'

const HEROKU_URL = 'https://team-beef-llc.herokuapp.com/beef'
const LOCAL_URL = 'http://localhost:3001/beef'
export const BASE_URL =
  process.env.NODE_ENV === 'production' ? HEROKU_URL : LOCAL_URL
console.log(BASE_URL)

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
