import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialQs } from '../actions/questions'
import { handleInitialUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import Dashboard from './Dashboard'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'

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
          <Nav />
          <Route path='/' exact component={Dashboard}/>
          <Route path='/question/:id' component={Poll}/>
          <Route path='/add' component={NewQuestion}/>
          <Route path='/leaderboard' component={Leaderboard}/>
        </div>
      </Router>


    )
  }
}


export default connect()(App)