import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialQs } from '../actions/questions'
import { handleInitialUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import Dashboard from './Dashboard'
import Poll from './Poll'

const user = 'sarahedo'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialQs())
    this.props.dispatch(handleInitialUsers())
    this.props.dispatch(setAuthedUser(user))
  }

  render() {
    return (
      <Router>
          <div className='container'>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/question/:id' component={Poll}/>
        </div>
      </Router>


    )
  }
}


export default connect()(App)