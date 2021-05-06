import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'
import {fetchQuestions} from './api'
import {QuestionState, Difficulty} from './api'
import {GlobalStyle} from './app.styles' 

export type Answer = {
  question:string;
  answer:string;
  correct: boolean;
  correctAnswer: string;
}

 export default function App() {

  const[loading, setLoading] = useState(false)
  const[questions, setQuestions] = useState<QuestionState[]>([])
  const[number, setNumber] = useState(10)
  const[userAnswers, setUserAnswers] = useState<Answer[]>([])
  const[score, setScore] = useState(0)
  const[gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(10, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
}

  const verifyAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value
      // Check answer agains correct answer
      const correct = questions[number].correct_answer === answer
      // Add score if answer is correct
      if (correct) setScore(prev =>prev + 1)
      // Save answer in the array UserAnswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) =>[...prev, answerObject])
    }
  }

  const nextQuestion =() =>{
  // Move to the next question if this one is not the last
  const nextQuestion = number +1

  if (nextQuestion === 10) {
    setGameOver(true)
  }
  else{
    setNumber(nextQuestion)
  }
  }

  return (
    <>
    <GlobalStyle />
    <div className="App">
     <h1>Start Quiz</h1>

     {gameOver || userAnswers.length=== 10 ? (
       <button className="btn__start" onClick={startQuiz}>Start Quiz</button>
     ) : null}

     {!gameOver ?  <p className="score">Score:{score}</p> : null}
    
     {loading && <h4>Loading questions...</h4> }

     {!loading && !gameOver && 
      <Card 
        questionNumber={number+1}
        totalQuestions={10}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={verifyAnswer}
      />
     }

     {!gameOver && !loading && userAnswers.length === number +1 && number !==9 ?
       <button className="btn__next" onClick={nextQuestion}>Next Question</button>
      : null
     }
    </div>
    </>
  );
}



