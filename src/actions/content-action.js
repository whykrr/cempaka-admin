import { contentConstant } from 'src/utils/constants'

function getList() {
  return { type: contentConstant.REQUEST_CONTENT, payload: {} }
}

export const contentAction = { getList }
