import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './List'

class Dashboard extends Component {
  state = {
    displayAnswered: false
  }

  handleButtonClick = (e) => {
    e.preventDefault()
    const newDisplay = e.target.value === 'answered'
    this.setState({
      displayAnswered: newDisplay
    })
  }

  render() {
    const { answered, unanswered } = this.props

    return (
      <div className='dashboard-list'>
        <div className='question-tabs'>
          <button value='unanswered'onClick={this.handleButtonClick}>Unanswered Questions</button>
          <button value='answered' onClick={this.handleButtonClick}>Answered Questions</button>
        </div>
        {this.state.displayAnswered
        ? <List
            display={'answered'}
            list={answered} />
        : <List
            display={'unanswered'}
            list={unanswered} />
        }
      </div>
    )
  }
}


function mapStateToProps({ questions, authedUser, users }) {
  return {
    users,
    authedUser,
    questions,
    answered: users[authedUser]
      ? Object.keys(users[authedUser].answers)
          .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      : [],
    unanswered: users[authedUser]
    ? Object.keys(questions)
        .filter((questionId) => !users[authedUser].answers[questionId])
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    : [],
  }
}

export default connect(mapStateToProps)(Dashboard)