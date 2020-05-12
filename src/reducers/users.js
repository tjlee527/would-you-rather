import { RECEIVE_USERS, UPDATE_ANSWER_USER, ADD_QUESTION_USER } from '../actions/users.js'

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
    case ADD_QUESTION_USER :
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.id])
        }
      }
    default :
      return state
  }
}

