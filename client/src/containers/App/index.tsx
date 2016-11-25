import * as React from 'react'
import * as classNames from 'classnames'
// import BarNav from 'COMPONENTS/BarNav'
// import BarTab from 'COMPONENTS/BarTab'
// import NavLink from 'COMPONENTS/NavLink'

// import './style.scss';
import './style.scss'

// const pageClassNames = classNames(styles.page, styles.pageCurrent)

// 无状态(stateless) 组件, 一个简单的容器,react-router会根据 route规则匹配到的组件作为 `props.children` 传入
// const App = (props: any) => {
//   return (
//     // <div className={pageClassNames}>
//     <div>
//       <div className="content">
//         {props.children}
//       </div>
//     </div>
//   )
// }

class App extends React.Component<{children: any}, any> {
  render () {
    return (
      <div>
        <header>
          <h1>我是App</h1>
        </header>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
