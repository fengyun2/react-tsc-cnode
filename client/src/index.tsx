// 在应用中其它任何代码执行前调用一次
import 'babel-polyfill'
import * as FastClick from 'fastclick'
// import 'weui'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

// import * as configureStore from './configureStore'
// import * as routes from './routes'

// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    // FastClick.attach(document.body)
    FastClick['attach'](document.body)
  }, false)
}

// const App = require('./containers/App').default
// const Home = require('./containers/Home').default
// const NotFound = require('./containers/NotFound').default

import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/NotFound'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='*' component={NotFound}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('app')
  )


// render(
//   <div>
//     Index.yyy
//   </div>,
//   document.getElementById('app')
// )
