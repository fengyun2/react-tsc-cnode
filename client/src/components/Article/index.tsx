import * as React from 'react'
import ArticleItem from './item';

class ArtcileList extends React.Component<any, any> {
  constructor (props) {
    super (props)

    this.state = {}
  }

  componentDidMount() {
    const {topics, getTopics} = this.props
    getTopics()
    this.forceUpdate()
  }

  render () {
    const {topics, getTopics} = this.props
    // const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    const articleItem = topics.map((item) => {
        return <ArticleItem item={item} key={item.id}/>
    })
    return (
      <div>
        <ul className="atilce-list">
          {articleItem}
        </ul>
      </div>
    )
  }
}

export default ArtcileList