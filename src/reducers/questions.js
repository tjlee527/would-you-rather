import { RECEIVE_QS, ANSWER_QS } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QS :
      return {
        ...state,
        ...action.questions
      }

    case ANSWER_QS :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          optionOne: action.answer === 'optionOne'
            ? {
              ...state[action.id].optionOne,
              votes: state[action.id].optionOne.votes.concat([action.authedUser])
            }
           : state[action.id].optionOne,
           optionTwo: action.answer === 'optionTwo'
            ? ({
              ...state[action.id].optionTwo,
              votes: state[action.id].optionTwo.votes.concat([action.authedUser])
            })
           : state[action.id].optionTwo,
        }
      }
    default :
      return state
  }
}