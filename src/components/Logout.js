import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class Logout extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser } = this.props

    if (authedUser) {
      return (
        <div className='center'>
          <button
            className='center form-button btn'
            onClick={(e) => this.handleSubmit(e)}>
            Logout
          </button>
        </div>
      )
    }

    return <Redirect to='/'/>
  }
}
function mapStateToProps({ authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Logout)