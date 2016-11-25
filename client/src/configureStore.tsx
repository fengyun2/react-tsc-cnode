import {compose, createStore, applyMiddleware} from 'redux'
// 注意了, 这里不能写成 import * as thunk from 'redux-thunk'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// thunk 允许我们 dispatch() 函数
const buildStore = compose(applyMiddleware(thunk))(createStore)

export default function configureStore(initialState?) {
  const store = buildStore(rootReducer, initialState)
  return store
}
