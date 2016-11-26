import * as React from 'react'
import { refresh } from '../../utils/refresh';
import './style.scss'

class NotFound extends React.Component<any, any> {
  componentDidMount() {
    refresh('.notFound', 'y')
  }

  render () {
    return (
      <div className="notFound">
        404
        NotFound
        <div className="row">
          <div className="col-sm-12">item1</div>
          <div className="col-sm-12">item2</div>
          <div className="col-sm-12">item3</div>
          <div className="col-sm-12">item4</div>
          <div className="col-sm-12">item5</div>
          <div className="col-sm-12">item6</div>
          <div className="col-sm-12">item7</div>
          <div className="col-sm-12">item8</div>
          <div className="col-sm-12">item9</div>
          <div className="col-sm-12">item10</div>
          <div className="col-sm-12">item11</div>
          <div className="col-sm-12">item12</div>
        </div>
      </div>
    )
  }
}

export default NotFound
