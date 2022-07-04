import React  from "react"
import classes from './FinishedQuiz.module.css'
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const succesCount = Object.keys (props.results).reduce((total, key)=>{
        if (props.results[key] === 'succes') {
            total++
        }
        return total
    }, 0) 

    return(
        <div className={classes.FinishedQuiz}>
        <ul>
            {props.quiz.map((quizItem, index) => {
            const icon = [
                  props.results[quizItem.id] === 'error' ? <i className={classes.error}><BsFillEmojiFrownFill /></i>:<i className={classes.succes}><BsFillEmojiSmileFill /></i>
            ]

               return (
                <li key={index}>
                    <strong>{index + 1}</strong>.&nbsp;
                    {quizItem.question}                     
                    {icon}
                </li>
               ) 
            })}          
        </ul>
        <p>RIght {succesCount} of {props.quiz.length}</p>

        <div>
            <Button onClick={props.onRetry} type='primary'>Retry </Button>
            <Button type='success'>To all tests</Button>
            {/* <button onClick={props.onRetry}>Retry</button> */}
        </div>
        </div>
    )
}
 
 

export default FinishedQuiz