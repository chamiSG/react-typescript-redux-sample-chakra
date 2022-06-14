import { SET_CHARACTER } from '../types'
const initialState = {
  data: {},
  loading: true
}
export default function characterReducer(state = initialState, action: any) {
  switch (action.type) {

    case SET_CHARACTER:
      return {
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
