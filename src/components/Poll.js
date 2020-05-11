import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'


class Poll extends Component {

  handleClick = (e) => {
    const { dispatch, id, authedUser } = this.props
    e.preventDefault()
    const answer = e.target.value;
    dispatch(handleAnswerQuestion({
      qid: id,
      authedUser,
      answer
    }))
  }

  render() {
    const { display, questions, id } = this.props

    return (
      <div>
        {display === 'unanswered'
        ? <div>
          Would you rather ...
          <button onClick={this.handleClick} value={'optionOne'}>
            {questions[id].optionOne.text}
          </button>
          or
          <button onClick={this.handleClick} value={'optionTwo'}>
            {questions[id].optionTwo.text}
          </button>
        </div>
      : <div>Result</div>}
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    users,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(Poll)