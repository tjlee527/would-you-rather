import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialQs } from '../actions/questions'
import { handleInitialUsers } from '../actions/users'
import Dashboard from './Dashboard'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialQs())
    this.props.dispatch(handleInitialUsers())
  }

  render() {
    const { authedUser, users } = this.props

    return (
      <Router>
          <div className='container'>
          <Nav authedUser={users[authedUser]}/>
          <Route path='/' exact component={authedUser ? Dashboard : Login}/>
          <Route path='/question/:id' component={authedUser ? Poll : Login}/>
          <Route path='/add' component={authedUser ?NewQuestion : Login}/>
          <Route path='/leaderboard' component={authedUser ? Leaderboard: Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route path='/404'  component={authedUser ? PageNotFound : Login}/>
        </div>
      </Router>
    )

    // return (
    //   <Router>
    //       <div className='container'>
    //       <Nav authedUser={users[authedUser]}/>
    //       {authedUser
    //         ? <div>
    //             <Route path='/' exact component={Dashboard}/>
    //             <Route path='/question/:id' component={Poll}/>
    //             <Route path='/add' component={NewQuestion}/>
    //             <Route path='/leaderboard' component={Leaderboard}/>
    //             <Route exact path='/logout' component={Logout}/>
    //             <Route path='/404'  component={PageNotFound}/>
    //           </div>
    //         : <Route path='/' component={Login}/>
    //       }
    //     </div>
    //   </Router>
    // )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App)