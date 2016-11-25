import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

class BarTab extends React.Component < any,
any > {
  constructor(props : any) {
    super(props)
    this.state = {
      tab: 0
    }
  }

  render() {
    return (
      <header className='header'>
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li className="header-nav__item">
              <a
                href="javascript:void(0)"
                className={classNames('header-nav__item__title', {
                active: this.state.tab == 0
              })}
                onClick={e => {
                this.setState({tab: 0})
              }}>全部</a>
            </li>
            <li className="header-nav__item">
              <a
                href="javascript:void(0)"
                className={classNames('header-nav__item__title', {
                active: this.state.tab == 1
              })}
                onClick={e => {
                this.setState({tab: 1})
              }}>精华</a>
            </li>
            <li className="header-nav__item">
              <a
                href="javascript:void(0)"
                className={classNames('header-nav__item__title', {
                active: this.state.tab == 2
              })}
                onClick={e => {
                this.setState({tab: 2})
              }}>分享</a>
            </li>
            <li className="header-nav__item">
              <a
                href="javascript:void(0)"
                className={classNames('header-nav__item__title', {
                active: this.state.tab == 3
              })}
                onClick={e => {
                this.setState({tab: 3})
              }}>问答</a>
            </li>
            <li className="header-nav__item">
              <a
                href="javascript:void(0)"
                className={classNames('header-nav__item__title', {
                active: this.state.tab == 4
              })}
                onClick={e => {
                this.setState({tab: 4})
              }}>招聘</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default BarTab