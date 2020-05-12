import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
  state = {
    value: 'none'
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e, type) => {
    e.preventDefault()
    const { dispatch } = this.props
    const user = this.state.value
    dispatch(setAuthedUser(user))
    this.setState({
      value: 'none',
      toHome: true
    })
  }

  render() {
    const { toHome } = this.state
    const { users } = this.props

    if (toHome) {
      return <Redirect to='/'/>
    }

    return (
      <div className='form login'>
        <h3 className='center'>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select User:
            <select value={this.state.value} onChange={this.handleChange}>
              <option></option>
              {Object.keys(users).map((userID) => (
                <option key={userID} value={userID}>
                  {users[userID].name}
                </option>
              ))}
            </select>
          </label>
          {this.state.value !== 'none' &&
          <button
            className='form-btn'>
            Submit
          </button>
          }
        </form>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser}) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Login)