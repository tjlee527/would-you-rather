import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js'
import { answerQuestion, saveQuestion } from './questions'
import { handleUserAnswer, addQuestionUsers } from './users'


export function handleAnswerQuestion (info) {
  return (dispatch) => {
    return _saveQuestionAnswer(info)
      .then((event) => {
            dispatch(answerQuestion(info))
            dispatch(handleUserAnswer(info))
      })
      .catch((e) => {
        console.warn('error in answering question: ', e)
      })
  }
}

export function handleNewQuestion(newQuestion) {
  return (dispatch) => {
    return (_saveQuestion(newQuestion))
      .then((data) => {
        dispatch(saveQuestion(data))
        dispatch(addQuestionUsers(data))
      })
      .catch((e) => {
        console.warn('error in creating new question: ', e)
      })
  }
}
