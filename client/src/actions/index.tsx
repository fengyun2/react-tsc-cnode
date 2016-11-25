import * as fetch from 'isomorphic-fetch'

import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  FILTER_ITEM,
  ADD_CATE,
  REQUEST_ADD_CATE,
  RECEIVE_ADD_CATE,
  GET_TOPICS,
  GET_TOPICS_BEFORE,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_FAIL,
  GET_TOPIC_BYID,
  GET_TOPIC_BYID_BEFORE,
  GET_TOPIC_BYID_SUCCESS,
  GET_TOPIC_BYID_FAIL
} from '../constants/actionTypes'

/**
 * cnode topics
 */
export const getTopics = () => {
  return (dispatch) => {
    dispatch(getTopicsBefore())
    fetch(`https://cnodejs.org/api/v1/topics`).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      const error = new Error(response.statusText)
      throw error
    })
      .then(response => response.json())
      .then(json => {
        console.log('获取话题首页列表成功', json)
        // console.log(getTopicsSuccess(json))
        dispatch(getTopicsSuccess(json))
      })
      .catch(err => {
        console.log(`获取话题首页列表失败`, err)
        dispatch(getTopicsFail())
      })
  }
}

const getTopicsBefore = (data
  ?) => {
  return {type: 'GET_TOPICS_BEFORE', payload: {}}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPICS_BEFORE', payload: {}})
  // }
}

const getTopicsSuccess = (data) => {
  return {type: 'GET_TOPICS_SUCCESS', payload: data}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPICS_SUCCESS', payload: data})
  // }
}
const getTopicsFail = (data?) => {
  return {type: 'GET_TOPICS_FAIL'}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPICS_FAIL'})
  // }
}
/**
 * cnode topic/:id
 */
export const getTopicById = () => {
  return (dispatch) => {
    dispatch(getTopicByIdBefore())
    fetch(`https://cnodejs.org/api/v1/topics`).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      const error = new Error(response.statusText)
      throw error
    })
      .then(response => response.json())
      .then(json => {
        console.log('获取话题首页列表成功', json)
        dispatch(getTopicByIdSuccess(json))
      })
      .catch(err => {
        console.log(`获取话题首页列表失败`, err)
        dispatch(getTopicByIdFail())
      })
  }
}
const getTopicByIdBefore = (data
  ?) => {
    return {type: 'GET_TOPIC_BYID_BEFORE', payload: {}}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPIC_BYID_BEFORE', payload: {}})
  // }
}
const getTopicByIdSuccess = (data) => {
  return {type: 'GET_TOPIC_BYID_SUCCESS', payload: data}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPIC_BYID_SUCCESS', payload: data})
  // }
}
const getTopicByIdFail = (data?) => {
  return {type: 'GET_TOPIC_BYID_FAIL'}
  // return dispatch => {
  //   dispatch({type: 'GET_TOPIC_BYID_FAIL'})
  // }
}

// Item

/**
 * addItem
 */
export const addItem = () => {
  return dispatch => {
    setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
  }
}

/**
 * deleteItem
 */
export const deleteItem = (item) => {
  return dispatch => {
    console.log(`deleteItem: `, item)
    dispatch({type: DELETE_ITEM, payload: item})
  }
  // return { type: DELETE_ITEM, item }
}

/**
 * deleteAll
 */
export const deleteAll = () => {
  return dispatch => {
    dispatch({type: DELETE_ALL, payload: null})
  }
  // return { type: DELETE_ALL }
}

// filter

export const filterItem = e => {
  let item = e.target.value
  // console.log(`filter item: `, item)
  return dispatch => {
    dispatch({type: FILTER_ITEM, payload: item})
  }
  // return {type: FILTER_ITEM, filterItem}
}

/**
 * cate
 *
 *
 */

function requestAddCategory(data) {
  return dispatch => {
    dispatch({type: REQUEST_ADD_CATE, payload: data})
  }
  // return {type: REQUEST_ADD_CATE, data}
}

function receiveAddCategory(json) {
  return dispatch => {
    dispatch({type: RECEIVE_ADD_CATE, payload: json})
  }
  // return {type: RECEIVE_ADD_CATE, json}
}

export const addCategory = data => {
  return (dispatch) => {
    console.log(`actions: ${data}`)
    dispatch(requestAddCategory(data))

    return fetch(`https://api.github.com/repos/typecho-fans/plugins/contents/`)
      .then(response => response.json())
      .then(json => {
        console.log('receive json', json)
        return dispatch(receiveAddCategory(json))
      })
  }

  // return new Promise((resolve, reject) => {   setTimeout(() => {
  // console.log('add category successfull')     resolve()   }, 500) })
}

export const showCategory = data => {
  // return new Promise((resolve, reject) => {   setTimeout(() => {
  // console.log('get category successfull')     resolve()   }, 500) })
}