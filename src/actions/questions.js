import { _getQuestions } from '../utils/_DATA.js'
export const RECEIVE_QS = 'RECEIVE_QS'
export const ANSWER_QS = 'ANSWER_QS'
export const SAVE_QUESTION = 'SAVE_QUESTION'


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

export function answerQuestion({ qid, answer, authedUser }) {
  return {
    type: ANSWER_QS,
    id: qid,
    answer,
    authedUser
  }
}

export function saveQuestion(data) {
  return ({
    type: SAVE_QUESTION,
    data
  })
}


