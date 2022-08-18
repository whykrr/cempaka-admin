import { combineReducers } from 'redux'
import sidebarReducer from './sidebar-reducer'
import authReducer from './auth-reducer'
import contentReducer from './content-reducer'

export default combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  content: contentReducer,
})
