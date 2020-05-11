import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResult extends Component {
  render() {
    const { id, questions, users, authedUser } = this.props
    const question = questions[id]
    const totalAnswers = question.optionOne.votes.length + question.optionTwo.votes.length
    const answer = users[authedUser].answers[id] === 'optionOne' ? 'Option One' : 'Option Two'
    return (
      <div>
        <p>Your Answer: {answer}</p>
        <div>
          <h4>Option One:</h4>
          <p>
            {question.optionOne.text} - {Math.floor(100 * (question.optionOne.votes.length/totalAnswers))}%
          </p>
        </div>
        <div>
          <h4>Option Two:</h4>
          <p>
            {question.optionTwo.text} - {Math.floor(100 * (question.optionTwo.votes.length/totalAnswers))}%
          </p>
        </div>
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

export default connect(mapStateToProps)(PollResult)