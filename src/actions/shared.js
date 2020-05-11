import { _saveQuestionAnswer } from '../utils/_DATA.js'
import { answerQuestion } from './questions'
import { handleUserAnswer } from './users'


export function handleAnswerQuestion (info) {
  console.log(info)
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