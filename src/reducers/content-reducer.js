const { contentConstant } = require('src/utils/constants')

const initialState = {
  content: [],
  contentDetail: {},
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case contentConstant.REQUEST_CONTENT:
      return { ...state, content: [] }
    case contentConstant.REQUEST_CONTENT_SUCCESS:
      return { ...state, content: action.payload.data }
    case contentConstant.REQUEST_CONTENT_DETAIL:
      return { ...state, contentDetail: {} }
    case contentConstant.REQUEST_CONTENT_DETAIL_SUCCESS:
      return { ...state, contentDetail: action.payload.data }
    default:
      return state
  }
}

export default contentReducer
