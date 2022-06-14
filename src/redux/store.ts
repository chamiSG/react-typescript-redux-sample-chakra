import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import charactersReducer from './reducers/charactersReducer'
import characterReducer from './reducers/characterReducer'
import uiReducer from './reducers/uiReducer'
import episodesReducer from './reducers/episodesReducer'
import paginationReducer from './reducers/paginationReducer'
import filterOptionReducer from './reducers/filterOptionReducer'

const initialState = {}
const middleware = [thunk]
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}
const reducer = combineReducers({
  ui: uiReducer,
  characters: charactersReducer,
  character: characterReducer,
  episodes: episodesReducer,
  pagination: paginationReducer,
  filterOption: filterOptionReducer
})
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
  )
)
export default store
