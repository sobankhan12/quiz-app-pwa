export type Question={
    question:string
    correct_answer:string
    incorrect_answers:string[]
    difficulty:string
    type:string
}
export type QuestionCardTypes={
    question:string
    // correct_answer:string
    answers:string[]
   questionNumber:number
   totalQuestion:number
   callback:(e:React.MouseEvent<HTMLButtonElement>)=>void
   userAnswer:answerObject | undefined
}
export type answerObject={
    correct:boolean
    correctAnswer:string
    question:string;
    answer:string;
}
export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD='hard'

}
export type QuestionState=Question & {answers:string[]}