import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class List extends Component {
  render() {
    const { display, list } = this.props
    console.log(display)

    return (
      <div>
        <ul>
        {list.map((id) => {
          return (
            <Question
              display={display}
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