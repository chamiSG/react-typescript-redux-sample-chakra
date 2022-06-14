import { SET_FILTER_OPTION } from '../types'
const initialState = {
  name: '',
  status: '',
  gender: '',
}
export default function filterOptionReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FILTER_OPTION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
