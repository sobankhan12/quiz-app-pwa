
import {Difficulty,Question,QuestionState} from './../Types/QuizTypes'
const ShuffledArray=(array:any[])=>
[...array].sort(()=>Math.random()-0.5)
export const fetchQuestion=async(amount:number,difficulty:Difficulty):Promise<QuestionState[]>=>{
    const endpoint= `https://opentdb.com/api.php?amount=${amount}&category=20&difficulty=${difficulty}&type=multiple`
    const {results}=await(await fetch(endpoint)).json();
    const quiz:QuestionState[]=results.map((question:Question)=>({
            //  return{
            //     ...question,
            //      answers:ShuffledArray([...question.incorrect_answers,question.correct_answer])
            //  }
    // })
    //  data.
    // results.map((question:Question)=>({
         ...question,
         answers:ShuffledArray([...question.incorrect_answers,question.correct_answer])
    }))
    return quiz
     
}