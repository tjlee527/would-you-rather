import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollOptionDetail from './PollOptionDetail'

class PollResult extends Component {
  render() {
    const { id, questions, users, authedUser } = this.props
    const question = questions[id]
    const totalCount = question.optionOne.votes.length + question.optionTwo.votes.length
    const answer = users[authedUser].answers[id] === 'optionOne' ? 'Option One' : 'Option Two'

    return (
      <div>
        <p>Your Answer: {answer}</p>
        <div>
          <PollOptionDetail
            option='Option One'
            text={question.optionOne.text}
            totalCount={totalCount}
            optionCount={question.optionOne.votes.length}
          />
        </div>
        <div>
          <PollOptionDetail
              option='Option Two'
              text={question.optionTwo.text}
              totalCount={totalCount}
              optionCount={question.optionTwo.votes.length}
            />
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