import * as Immutable from 'immutable'
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL
} from '../constants/actionTypes'

const initialItems = Immutable.List(['item1', 'item2', 'item3'])

export default function items (state = initialItems, action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.push(state.size !== 0
      ? '2'
      : '1')
    case DELETE_ITEM:
      console.log(`payload-item: `, action.payload)
      return state.delete(state.indexOf(action.payload))
    case DELETE_ALL:
      return state.clear()
    default:
      return state
  }
}
