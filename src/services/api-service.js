import { authHeader } from 'src/utils/helpers/auth-header'
import axios from 'axios'

const APIBaseURL = 'http://cempaka-foundation-cms.test/api'

export const APIService = {
  openAPIRequest,
  privateAPIRequest,
}

function openAPIRequest(method, url, data) {
  return axios({
    method,
    url: `${APIBaseURL}${url}`,
    data,
  })
}

function privateAPIRequest(method, url, data) {
  return axios({
    method,
    headers: authHeader(),
    url: `${APIBaseURL}${url}`,
    data,
  })
}
