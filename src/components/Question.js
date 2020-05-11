import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Question extends Component {
  // change from state to new route later
  state = {
    view: false
  }
  onClick = (e, id) => {
    e.preventDefault()
    // add reroute to view poll
    this.setState((prevState) => ({
      view: !prevState.view
    }))
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
          {this.state.view &&
          <Poll
            id={id}
            display={display}
          />}
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