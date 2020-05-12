import React from 'react'

const UserProfile = (props) => {
  const { name, avatarURL, answers, questions } = props.user
  console.log(props.user)
  const answeredQs = Object.keys(answers).length || 0
  const askedQs = questions.length || 0
  return (
    <div className='question'>
      <img
        src={avatarURL}
        alt={`Avatar of ${name}`}
        className='avatar'
      />
      <div className='question-info'>
        <h3>{name}</h3>
          <span>Questions asked: {askedQs}</span>
          <span>Questions answered: {answeredQs}</span>
      </div>
    </div>
  )
}


export default UserProfile