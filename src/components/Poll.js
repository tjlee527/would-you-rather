import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResult from './PollResult'
import { handleAnswerQuestion } from '../actions/shared'


class Poll extends Component {

  handleClick = (e) => {
    const { dispatch, authedUser } = this.props
    const { id } = this.props.match.params

    e.preventDefault()
    const answer = e.target.value;
    dispatch(handleAnswerQuestion({
      qid: id,
      authedUser,
      answer
    }))
  }

  render() {
    const { questions, users, authedUser, answers } = this.props
    const { id } = this.props.match.params
    const didAnswer = answers[id] ? true : false

    if (users && questions && users[authedUser]) {
      const optionOne = questions[id].optionOne
      const optionTwo = questions[id].optionTwo
      return (
        <div>
         {didAnswer
        ? < PollResult
            id={id}
          />
        : <div>
            Would you rather ...
            <button onClick={this.handleClick} value={'optionOne'}>
              {optionOne.text}
            </button>
            or
            <button onClick={this.handleClick} value={'optionTwo'}>
              {optionTwo.text}
            </button>
          </div>}
        </div>
     )
    } else {
      return (
        <div>
          Rendering
        </div>
      )
    }
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    users,
    authedUser,
    questions,
    answers: users[authedUser] ? users[authedUser].answers : {}
  }
}

export default connect(mapStateToProps)(Poll)