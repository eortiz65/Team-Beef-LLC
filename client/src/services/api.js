import Axios from 'axios'

const HEROKU_URL = 'https://git.heroku.com/team-beef-llc.git'
const LOCAL_URL = 'http://localhost:3001/beef'
export const BASE_URL =
  process.env.NODE_ENV === 'teambeef_development' ? LOCAL_URL : HEROKU_URL

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
