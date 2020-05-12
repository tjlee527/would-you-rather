import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'

class Leaderboard extends Component {

  render() {
    const { orderedUsers, users } = this.props
    console.log(orderedUsers)
    return (
      <div>
         <h3 className='center'>Leaderboard</h3>
         <ul className='dashboard-list'>
          {orderedUsers.map((id) => (
            <UserProfile
              key={id}
              user={users[id]}
            />
          ))}
         </ul>
      </div>
    )
  }
}


function mapStateToProps({ users }) {
  return {
    users,
    orderedUsers: Object.keys(users)
      .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(Leaderboard)

