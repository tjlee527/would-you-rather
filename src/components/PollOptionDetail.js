import React from 'react'

const PollOptionDetail = ({ text, option, optionCount, totalCount }) => {
  return (
    <div className='poll-detail'>
      <h4>{`${option}: ${text}`}</h4>
          <p>
            {Math.floor(100 * (optionCount/totalCount))}%
            <br></br>
            {optionCount} out of {totalCount} votes
          </p>
    </div>
  )
}

export default PollOptionDetail