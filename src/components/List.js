import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class List extends Component {
  render() {
    const { list } = this.props

    return (
      <div >
        <ul>
        {list.map((id) => {
          return (
            <Question
              id={id}
              key={id}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}

export default connect()(List)