import * as React from 'react'
import './item.scss'

import {getDateDiff} from '../../utils/util'
// import styles from './item.scss'

function formatDate (date) {
  return getDateDiff(new Date(date).getTime())
}

class ArticleItem extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const {item} = this.props
    const avatarStyle = {
      backgroundImage: `url(${item.author.avatar_url})`
    }
    return (
      <li className="article-item">
        <a href="javascript:void(0)" className="article-item-link">
          <div className="article-item-content">
            <div className="article-item-header">
            <div className="article-item-tip">
              <i></i>
            </div>
            <div className="article-item-title">
              <h3>{item.title}</h3>
            </div>

            </div>
            <div className="article-item-body">
              <div className="article-item-body-header">
                <div className="article-item-avatar" style={avatarStyle}></div>
              </div>
              <div className="article-item-body-content">
                <div className="article-item-body-content-header">
                  <span className="article-item-author">{item.author.loginname}</span>
                  <span className="article-item-read-count">{item.reply_count}/{item.visit_count}</span>
                </div>
                <div className="article-item-body-content-footer">
                  <span className="article-item-created-at">{formatDate(item.create_at)}</span>
                  <span className="article-item-last-read">{formatDate(item.last_reply_at)}</span>
                </div>
              </div>
              {/*<div className="item-body-footer"></div>*/}
            </div>
          </div>
        </a>
      </li>
    )
  }
}

export default ArticleItem