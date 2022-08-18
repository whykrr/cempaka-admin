import { authConstant } from 'src/utils/constants'

function login(username, password) {
  return { type: authConstant.LOGIN_REQUEST, payload: { email: username, password } }
}
function logout() {
  return {
    type: authConstant.LOGOUT,
    payload: {},
  }
}

export const authAction = { login, logout }
