import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo:'',
  }

  handleChange = (e, option) => {
    const text = e.target.value
    this.setState({
      [option]: text
    })
  }

  handleSubmit = (e) => {
    const { dispatch, authedUser } = this.props
    e.preventDefault()
    dispatch(handleNewQuestion({
      author: authedUser,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    }))
    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    })

  }
  render() {
    const { toHome, optionOne, optionTwo } = this.state

    if (toHome) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <h3 className='center'>Add A New Question</h3>
        <form className='new-question'>
          <h4>Complete the question</h4>
          <h5>Would you rather...</h5>
          <input
            placeholder='Option One'
            value={optionOne}
            onChange={(e) => this.handleChange(e, 'optionOne')}
          />
          <h5 className='center'>OR</h5>
          <input
            placeholder='Option Two'
            value={optionTwo}
            onChange={(e) => this.handleChange(e, 'optionTwo')}
          />
          {optionOne && optionTwo &&
            <button onClick={this.handleSubmit}>
              Submit
            </button>
          }
        </form>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)