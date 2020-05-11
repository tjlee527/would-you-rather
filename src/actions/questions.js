import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js'
export const RECEIVE_QS = 'RECEIVE_QS'
export const ANSWER_QS = 'ANSWER_QS'


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

