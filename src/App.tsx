import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'
import {fetchQuestions} from './api'
import {Difficulty} from './api'

function App() {

  const[loading, isLoading] = useState(false)
  const[questions, setQuestions] = useState([])
  const[number, setNumber] = useState(10)
  const[userAnswers, setUserAnswers] = useState([])
  const[score, setScore] = useState(0)
  const[gameOver, setGameOver] = useState(true)

  console.log(fetchQuestions(number, Difficulty.EASY))

  const startQuiz = async () =>{
}

  const verifyAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion =() =>{

  }

  return (
    <div className="App">
     <h1>Start Quiz</h1>
     <button className="btn__start" onClick={startQuiz}>Start Quiz</button>
     <p className="score">Score:</p>
     {/* <Card 
      questionNumber={number+1}
      totalQuestions={5}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={verifyAnswer}
     /> */}
     <button className="btn__next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
function fe(fe: any) {
  throw new Error('Function not implemented.');
}

