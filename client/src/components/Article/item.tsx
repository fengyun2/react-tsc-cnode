import * as React from 'react'
import './item.scss'

class ArticleItem extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <li className="article-item">
        <a href="javascript:void(0)" className="article-item-link">
          <div className="article-item-content">
            <div className="article-item-header">
            <div className="article-item-tip">
              <i></i>
            </div>
            <div className="article-item-title">
              <h3>这，就是技术人的江湖</h3>
            </div>

            </div>
            <div className="article-item-body">
              <div className="article-item-body-header">
                <div className="article-item-avatar"></div>
              </div>
              <div className="article-item-body-content">
                <div className="article-item-body-content-header">
                  <span className="article-item-author">ly</span>
                  <span className="article-item-read-count">100/1000</span>
                </div>
                <div className="article-item-body-content-footer">
                  <span className="article-item-created-at">今天</span>
                  <span className="article-item-last-read">今天</span>
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