import React from 'react'

const UserProfile = (props) => {
  const { name, avatarURL, answers, questions } = props.user

  const answeredQs = Object.keys(answers).length
  const askedQs = questions.length
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