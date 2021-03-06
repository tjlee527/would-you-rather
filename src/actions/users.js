import { _getUsers } from '../utils/_DATA.js'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_ANSWER_USER = 'UPDATE_ANSWER_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleInitialUsers () {
  return (dispatch) => {
    return (_getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      }))
  }
}

export function handleUserAnswer ({ authedUser, qid, answer}) {
  return {
    type: UPDATE_ANSWER_USER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionUsers({id, author}) {
  return {
    type: ADD_QUESTION_USER,
    id,
    author
  }
}