import * as React from 'react'
import * as classNames from 'classnames'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTopics} from '../../actions/index';
import './style.scss'

const tabData = {}

  class BarTab extends React.Component < any,
  any > {
    constructor(props : any) {
      super(props)
      this.state = {
        tab: 0,
        tabs: [
          {
            id: 0,
            title: 'all',
            value: '全部',
            page: {
              total_count: 0, // 总数目
              page_size: 2, // 每页准备显示的数目
              page_count: 2, // 总页数
              cur_page: 1 // 当前页数
            }
          }, {
            id: 1,
            title: 'good',
            value: '精华',
            page: {
              total_count: 0, // 总数目
              page_size: 2, // 每页准备显示的数目
              page_count: 2, // 总页数
              cur_page: 1 // 当前页数
            }
          }, {
            id: 2,
            title: 'share',
            value: '分享',
            page: {
              total_count: 0, // 总数目
              page_size: 2, // 每页准备显示的数目
              page_count: 2, // 总页数
              cur_page: 1 // 当前页数
            }
          }, {
            id: 3,
            title: 'ask',
            value: '问答',
            page: {
              total_count: 0, // 总数目
              page_size: 2, // 每页准备显示的数目
              page_count: 2, // 总页数
              cur_page: 1 // 当前页数
            }
          }, {
            id: 4,
            title: 'job',
            value: '招聘',
            page: {
              total_count: 0, // 总数目
              page_size: 2, // 每页准备显示的数目
              page_count: 2, // 总页数
              cur_page: 1 // 当前页数
            }
          }
        ]
      }
      this.changeSelect = this
        .changeSelect
        .bind(this)
    }
    componentDidMount() {
      console.log(this.props)
    }
    changeSelect(item) {
      this.setState({tab: item.id})
      const {topics, actions} = this.props
      actions.getTopics(item)
    }
    render() {
      const tabs = this.state.tabs
      const cur_tab = this.state.tab
      const tabItem = tabs.map(item => {
        return <NavItem
          item={item}
          key={item.id}
          cur_tab={cur_tab}
          changeSelect={this.changeSelect}/>
      })
      return (
        <header className='header'>
          <nav className="header-nav">
            <ul className="header-nav-ul">
              {tabItem}
            </ul>
          </nav>
        </header>
      )
    }
  }

  const NavItem = (props : any) => {
    const {cur_tab, item, changeSelect} = props

    return (
      <li className="header-nav__item">
        <a
          href="javascript:void(0)"
          className={classNames('header-nav__item__title', {
          active: cur_tab == item.id
        })}
          onClick={e => {
          changeSelect(item)
        }}>{item.value}</a>
      </li>
    )
  }

  function mapStateToProps(state) {
    return {topics: state.topics}
  }
  const ItemsActions = {
    getTopics
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ItemsActions, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(BarTab)