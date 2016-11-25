"use strict"
import * as React from 'react'
import { connect } from 'react-redux'
// import * as ItemsActions from '../../actions'
import { bindActionCreators } from 'redux'
import ArtcileList from '../../components/Article'
import { addItem, deleteItem, deleteAll } from '../../actions/index';

class Home extends React.Component<any, any> {
  componentDidMount() {

  }
  render () {
    return (
      <div>
        <ArtcileList />
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    items: state.items,
    filter: state.filter
  }
}
const ItemsActions = {addItem, deleteItem, deleteAll}
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