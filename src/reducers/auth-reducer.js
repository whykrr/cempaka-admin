const { authConstant } = require('src/utils/constants')

const token = localStorage.getItem('token')
const initialState = token ? { isAuthUser: true, token } : { isAuthUser: false, token: '' }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return { ...state, isAuthUser: false, token: '' }
    case authConstant.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.access_token)
      return { ...state, isAuthUser: true, token: action.payload.access_token }
    case authConstant.LOGOUT:
      localStorage.removeItem('token')
      return { ...state, isAuthUser: false, token: '' }
    default:
      return state
  }
}

export default authReducer
