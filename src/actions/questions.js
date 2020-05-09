import { _getQuestions } from '../utils/_DATA.js'
export const RECEIVE_QS = 'RECEIVE_QS'


export function receiveQs (questions) {
  return {
    type: RECEIVE_QS,
    questions
  }
}

export function handleInitialQs () {
  return (dispatch) => {
    return (_getQuestions()
      .then((questions) => {
        dispatch(receiveQs(questions))
      }))
  }
}