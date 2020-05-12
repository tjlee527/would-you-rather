import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResult from './PollResult'
import { Redirect } from 'react-router-dom'
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
      if (!questions[id]) {
        return <Redirect to='/404' />
      }

      const optionOne = questions[id].optionOne
      const optionTwo = questions[id].optionTwo
      return (
        <div className='form'>
         {didAnswer
        ? < PollResult
            id={id}
          />
        : <div className='center'>
            Would you rather ...
            <button
            className='btn'
            onClick={this.handleClick}
            value={'optionOne'}>
              {optionOne.text}
            </button>
            <p>
              OR
            </p>
            <button
            className='btn'
            onClick={this.handleClick}
            value={'optionTwo'}>
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