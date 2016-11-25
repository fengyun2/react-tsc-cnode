import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
// import items from './items'
import filter from './filter'
import category from './category'
import { topic, topics } from './topics';

const rootReducer = combineReducers({
  routing,
  // items,
  filter,
  category,
  topic,
  topics
})

// console.log(`rootReducer: `, rootReducer)
export default rootReducer
