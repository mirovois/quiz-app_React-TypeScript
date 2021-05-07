import React from 'react'
import {Answer} from '../App'
import styled from 'styled-components'

const StyledCard = styled.div`
    background: #00d2ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00d2ff, #928dab); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00d2ff, #928dab); 
    border:2px solid whitesmoke;
    padding:10px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2rem;
    width:40rem;
    box-shadow:0px 6px 10px rgba(0,0,0,0.3);
    border-radius:14px;

    h3{
        font-family: 'Staatliches', cursive;
        letter-spacing:2px
    }
    >div{
        text-align:center

    }
    >div:last-of-type{
        margin:1rem 0;
        width:60%;
        div{
            margin:0.5rem 0;
        }
    }
`
type ButtonProps = {
    clicked:boolean;
    correct: boolean;
}

const StyledButton = styled.button<ButtonProps>`
        cursor: pointer;
        background: ${({correct,clicked}) =>
            correct ? '#417985' : !correct && clicked ? '#a55151' : '#61a1af'
        } ;
        outline:none;
        border:2px solid #000;
        border: ${({correct, clicked}) =>
        correct ? ' 3px solid white' : '2px solid #000'
        };
        color: ${({correct, clicked}) =>
        correct ? 'white' : !correct && clicked ? '#554f4f'  : 'black'
        };
        width:100%;
        padding:6px 12px;
        border-radius:10px;
    &:hover{
        opacity:0.7;
        border-color:whitesmoke;
        color:whitesmoke;
    }
    span{
        font-weight:bold
    }
`


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
    <StyledCard>
        <h3>
            Question: {questionNumber}/{totalQuestions}
        </h3>
        <div>
            {/* Renders stuff from API that we don't know orign */}
            <p dangerouslySetInnerHTML={{__html:question}}/>
        </div>
        <div>
            {answers.map(answer =>(
                <div key={answer}>
                    <StyledButton 
                    correct={userAnswer?.correctAnswer === answer}
                    clicked={userAnswer?.answer === answer}
                    disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                    </StyledButton>
                </div>
            ))}
        </div>

        
    </StyledCard>
    

export default Card