import { RECEIVE_QS } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QS :
      return {
        ...state,
        ...action.questions
      }
    default :
      return state
  }
}