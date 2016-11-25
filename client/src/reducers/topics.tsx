import { GET_TOPICS_SUCCESS, GET_TOPICS_FAIL, GET_TOPIC_BYID } from '../constants/actionTypes';

const initialItems = []

export default function topics (state = initialItems, action) {
  switch (action.type) {
    case GET_TOPICS_SUCCESS: {
      return state.concat(action.payload.data)
    }
    case GET_TOPICS_FAIL: {
      return state
    }
    case GET_TOPIC_BYID:
      console.log(`action: `, action)
      return state
    default:
      return state
  }
}
