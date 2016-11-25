"use strict"
import * as React from 'react'
import ArtcileList from '../../components/Article'

class Home extends React.Component<any, any> {
  // componentDidMount() {

  // }
  render () {
    return (
      <div>
        <ArtcileList />
      </div>
    )
  }
}
export default Home