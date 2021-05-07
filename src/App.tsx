import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'
import {fetchQuestions} from './api'
import {QuestionState, Difficulty} from './api'
import {GlobalStyle, Home} from './app.styles' 

export type Answer = {
  question:string;
  answer:string;
  correct: boolean;
  correctAnswer: string;
}

 export default function App() {

  const[loading, setLoading] = useState(false)
  const[questions, setQuestions] = useState<QuestionState[]>([])
  const[currentQuestion, setCurrentQuestion] = useState(10)
  const[userAnswers, setUserAnswers] = useState<Answer[]>([])
  const[score, setScore] = useState(0)
  const[gameOver, setGameOver] = useState(true)

  console.log(questions)

  const total_Questions = 2

  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(total_Questions, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0)
    setUserAnswers([])
    setCurrentQuestion(0)
    setLoading(false)
}

  const verifyAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value
      // Check answer agains correct answer
      const correct = questions[currentQuestion].correct_answer === answer
      // Add score if answer is correct
      if (correct) {
        setScore(prev =>prev + 1)
      }
      // Save answer in the array UserAnswers
      const answerObject = {
        question: questions[currentQuestion].question,
        answer,
        correct,
        correctAnswer: questions[currentQuestion].correct_answer
      }
      setUserAnswers((prev) =>[...prev, answerObject])
    }
  }

  const nextQuestion =() =>{
  // Move to the next question if this one is not the last
  const nextQuestion = currentQuestion +1

  if (nextQuestion < total_Questions) {
    setCurrentQuestion(nextQuestion)
  }
  else{
    setGameOver(true)
  }
  }

  return (
    <>
    <GlobalStyle />
    <Home>
     <h1>Quiz</h1>

     {gameOver || userAnswers.length=== total_Questions ? (
       <button className="btn__start" onClick={startQuiz}>Start Quiz</button>
     ) : null}

     {!gameOver ?  <strong className="score">Score:{score}</strong> : null}
    
     {loading && <h4>Loading questions...</h4> }

     {!loading && !gameOver && 
      <Card 
        questionNumber={currentQuestion+1}
        totalQuestions={total_Questions}
        question={questions[currentQuestion].question}
        answers={questions[currentQuestion].answers}
        userAnswer={userAnswers ? userAnswers[currentQuestion] : undefined}
        callback={verifyAnswer}
      />
     }

     {!gameOver && !loading && userAnswers.length === currentQuestion +1 && currentQuestion !==total_Questions-1 ?
       <button className="btn__next" onClick={nextQuestion}>Next Question</button>
      : null
     }
     {!gameOver && currentQuestion > total_Questions-1 &&
      <div>
        You scored {score} out of {questions.length}
     </div>
     
     }
    </Home>
    </>
  );
}



