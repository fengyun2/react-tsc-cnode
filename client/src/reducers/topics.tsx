import {
  GET_TOPICS_BEFORE,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_FAIL,
  GET_TOPIC_BYID_BEFORE,
  GET_TOPIC_BYID_SUCCESS,
  GET_TOPIC_BYID_FAIL
} from '../constants/actionTypes';

import * as _ from 'lodash'

const initialTopics = {
  isFetching: true,
  didInvalidate: false,
  lastUpdated: Date.now(),
  items: []
}

// isFetching 来显示进度条， didInvalidate 来标记数据是否过期， lastUpdated 来存放数据最后更新时间， items
// 存放列表信息本身 fetchedPageCount 页数 nextPageUrl 话题首页
export function topics(state: any = initialTopics, action) {
  switch (action.type) {
    case GET_TOPICS_BEFORE:
      {
        console.log('GET_TOPICS_BEFORE')
        return state
      }
    case GET_TOPICS_SUCCESS:
      {
        // 注意这里不能用 数组的 contact方法合并, 要返回一个新的对象, 否则会导致state错乱, UI页面不会刷新， 而且这个2.0版本的typescript不支持es6的 Object.assign,所以这里引入了 Object.assign
        console.log('GET_TOPICS_SUCCESS')
        // console.log(action.payload.data)
        state = _.assign({}, state, {items: action.payload.data})

        return state
      }
    case GET_TOPICS_FAIL:
      {
        return state
      }
    default:
      {
        return state
      }
  }
}

const initialTopic = {
  isFetching: true,
  didInvalidate: false,
  lastUpdated: Date.now(),
  item: {}
}
// 话题详情
export function topic(state = {}, action) {
  // state = state || initialTopic
  switch (action.type) {
    case GET_TOPIC_BYID_BEFORE:
      {
        return state || initialTopic
      }
    case GET_TOPIC_BYID_SUCCESS:
      {
        return action.payload || initialTopic
      }
    case GET_TOPIC_BYID_FAIL:
      {
        return state || initialTopic
      }
    default:
      {
        return state || initialTopic
      }
  }
}
