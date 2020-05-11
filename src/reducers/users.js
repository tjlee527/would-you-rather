import { RECEIVE_USERS, UPDATE_ANSWER_USER } from '../actions/users.js'

export function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_ANSWER_USER :
      const newAnswers = {
        ...state[action.authedUser].answers,
        [action.qid]: action.answer
      }
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: newAnswers
        }
      }
    default :
      return state
  }
}

