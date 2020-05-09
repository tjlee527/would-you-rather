import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialQs } from '../actions/questions'
import { handleInitialUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import Dashboard from './Dashboard'

const user = 'sarahedo'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialQs())
    this.props.dispatch(handleInitialUsers())
    this.props.dispatch(setAuthedUser(user))
  }

  render() {
    return (
    <div className='container'>
       <Dashboard />
    </div>

    )
  }
}


export default connect()(App)