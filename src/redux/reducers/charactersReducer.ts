import { SET_CHARACTERS } from '../types'
const initialState = {
  info: {},
  results: [],
  loading: true
}
export default function charactersReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
