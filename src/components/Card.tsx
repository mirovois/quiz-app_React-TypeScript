import React from 'react'
import {Answer} from '../App'

type Props = {
    question:string;
    answers: string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: Answer | undefined;
    questionNumber: number;
    totalQuestions: number;
}


// Specify component to be functional

const Card: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => 
    (<div>
        <p className='number'>
            Qustion: {questionNumber}/{totalQuestions}
        </p>
        {/* Renders stuff from API that we don't  */}
        <p dangerouslySetInnerHTML={{__html:question}}/>
        <div>
            {answers.map(answer =>(
                <div key={answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                    </button>
                </div>
            ))}
        </div>

        
    </div>
    )

export default Card