import { legacy_createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'src/middlewares/api'
import reducer from '../../reducers'

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(legacy_createStore)
const store = createStoreWithMiddleware(reducer)

// const store = legacy_createStore(reducer)

export default store
