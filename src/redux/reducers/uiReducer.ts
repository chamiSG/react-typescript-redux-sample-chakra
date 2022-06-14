import { SET_ERRORS, CLEAR_ERRORS } from '../types'
const initialState = {
  loading: false,
  errors: {}
}
export default function uiReducer(state = initialState, action: any) {
  switch (action.type) {

    case SET_ERRORS:
      return {
        loading: false,
        ...action.payload
      };
    case CLEAR_ERRORS:
      return {
        loading: false,
        errors: null
      };
    default:
      return state;
  }
}
