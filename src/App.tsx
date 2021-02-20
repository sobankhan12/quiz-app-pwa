import React,{useState,useEffect} from 'react'
import {initNotification} from "./Services/firebaseService";
import QuestionCard from './Components/QuestionCard'
import {fetchQuestion} from "./API/fetchQuestion";
// import {fetchQuestion} from "./API/fetchQuestion"
import {GlobalStyle,Wrapper} from "./App.styles"
import {Difficulty,QuestionState,answerObject} from './Types/QuizTypes'
const TOTAL_QUESTION=10
const App = () => {
  useEffect(() => {
      initNotification()
  }, [])
  const [loading, setLoading] = useState(false)
  const [gameOver, setGameOver] = useState(true)
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([])
  const startQuiz=async()=>{
    setLoading(true)
    // const check:QuestionState[]=fetchQuestion(10,Difficulty.EASY)
    const newQuestion=await fetchQuestion(TOTAL_QUESTION,Difficulty.EASY)
    setQuestions(newQuestion)
    setLoading(false)
    setGameOver(false)
    setNumber(0)
    setScore(0)
    setUserAnswers([])
    console.log(userAnswers.length,number);
    

  }
  const checkAnswer=(e:React.MouseEvent<HTMLButtonElement>)=>{
    // setNumber((val)=>val+1)
    if(!gameOver){
      const answer=e.currentTarget.value;
      const correct=questions[number].correct_answer===answer
      if(correct){
        setScore((prev)=>prev+1)
      }
      const AnswerObject={
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      }
      setUserAnswers((prev)=>[...prev,AnswerObject])
      console.log(userAnswers.length,number);
      
    }
  }
  const nextQuestion=()=>{
    
      const nextQuestion=number+1
      if(nextQuestion===TOTAL_QUESTION){
        setGameOver(true)
      }else{
        setNumber(nextQuestion)
      }

  }
  
  return (
    <>
    {/* <button onClick={initNotification}>configure</button> */}
    <GlobalStyle/>
    
    <Wrapper>
      <h1 className="heading">React quiz</h1>
      {gameOver || userAnswers.length===TOTAL_QUESTION?(
      <button className="start" onClick={startQuiz}>Start Quiz</button>):null}
      {!gameOver?(<p>Score {score}</p>):null}
      {loading &&
      <p className="loading">Loading....</p>
      }
      {!loading && !gameOver?(
      <QuestionCard
        question={questions[number].question}
        questionNumber={number+1}
        callback={checkAnswer}
        userAnswer={userAnswers?userAnswers[number]:undefined}
        totalQuestion={10}
        answers={questions[number].answers}
      />):null}
      
      {!gameOver && !loading && userAnswers.length===number+1 && number!==TOTAL_QUESTION-1 ?(
      <button className="next" onClick={nextQuestion}>next Question</button>
      ):null}
    </Wrapper>
    </>
  )
}

export default App
