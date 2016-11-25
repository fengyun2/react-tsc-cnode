"use strict"
import * as React from 'react'
import { connect } from 'react-redux'
// import * as ItemsActions from '../../actions'
import { bindActionCreators } from 'redux'
import ArtcileList from '../../components/Article'
import { getTopics } from '../../actions/index';

class Home extends React.Component<any, any> {
  componentDidMount() {

  }
  render () {
    const {topics, actions} = this.props
    console.log('topics')
    console.log(topics)
    console.log(actions)
    return (
      <div>
        <ArtcileList topics={topics} getTopics={actions.getTopics} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    topics: state.topics
  }
}
const ItemsActions = {getTopics}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemsActions, dispatch)
  }
}
// export default Home
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)