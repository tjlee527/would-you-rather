import React, { Component } from 'react'
import { connect } from 'react-redux'
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
      return (
        <div>
         {didAnswer
         ? <div>Result</div>
       : <div>
           Would you rather ...
           <button onClick={this.handleClick} value={'optionOne'}>
             {questions[id].optionOne.text}
           </button>
           or
           <button onClick={this.handleClick} value={'optionTwo'}>
             {questions[id].optionTwo.text}
           </button>
         </div>}
       </div>
     )
    }
    return (
      <div>
        Rendering
      </div>
    )

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