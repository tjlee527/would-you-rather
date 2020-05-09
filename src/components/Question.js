import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Question extends Component {
  onClick = (e, id) => {
    e.preventDefault()
    // add reroute to view poll
    console.log(id)
  }
  render() {
    const { display, id, questions } = this.props
    return (
      <div>
        <h4>Would you rather...</h4>
          {questions[id].optionOne.text}
          <h5>
          OR ...
          </h5>
          <button onClick={(e) => this.onClick(e, id)}>
            View Poll
          </button>
          <Poll
            id={id}
            display={display}
          />
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    users,
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Question)