import axios from 'axios'
import { APIService } from 'src/services'
import { authConstant, contentConstant } from 'src/utils/constants'

const CMS_URL = 'http://cempaka-foundation-cms.test/api'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)
    switch (action.type) {
      case authConstant.LOGIN_REQUEST:
        APIService.openAPIRequest('POST', '/auth/login', action.payload)
          .then((response) => {
            dispatch({ type: authConstant.LOGIN_SUCCESS, payload: response.data })
          })
          .catch((error) => {
            dispatch({ type: authConstant.LOGIN_ERROR, payload: error })
          })
        break
      case contentConstant.REQUEST_CONTENT:
        APIService.privateAPIRequest('GET', '/content', {}).then((response) => {
          dispatch({ type: contentConstant.REQUEST_CONTENT_SUCCESS, payload: response.data })
        })
      default:
        break
    }
  }
