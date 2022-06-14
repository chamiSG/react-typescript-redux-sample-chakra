import { SET_EPISODES } from '../types'
const initialState = {
  data: [],
  loading: true
}
export default function episodesReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_EPISODES:
      return {
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
