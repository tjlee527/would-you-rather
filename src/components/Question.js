import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

  render() {
    const { id, questions, users } = this.props
    const author = users[questions[id].author]
    return (
      <div className='question'>
        <img
          className='avatar'
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
        />
        <div className='question-info'>
          <span>{author.name} asks</span>
          <h4>Would you rather</h4>
          <p>{questions[id].optionOne.text} or...</p>
        </div>
        <Link to={`/question/${id}`}>
          <button className='btn'>
              View Poll
          </button>
        </Link>
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