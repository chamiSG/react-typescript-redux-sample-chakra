import { SET_PAGINATION } from '../types'
const initialState = {
  currentPage: 1,
  pageCount: 1,
}
export default function paginationReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
