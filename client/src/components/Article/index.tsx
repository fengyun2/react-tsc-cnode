import * as React from 'react'
import ArticleItem from './item';

class ArtcileList extends React.Component<any, any> {
  constructor (props) {
    super (props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getTopics()
  }

  render () {
    const {topics, getTopics} = this.props
    let articleItem = '';
    if (!!topics && !!topics.items && topics.items.length > 0) {
     articleItem = topics.items.map((item) => {
        return <ArticleItem item={item} key={item.id}/>
      })
    }

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