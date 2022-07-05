import React  from "react"
import classes from './ActiveQuiz.module.css'
import AnswerList from "./AnswerList/AnswerList"

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
        <span>
            <strong>{props.answerNumber}.&nbsp;
            {props.question}</strong>
        </span>
        <small>{props.answerNumber} of {props.quizLength}</small>
    </p>
       <AnswerList
       state={props.state}
       answers={props.answers}
       onAnswerClick={props.onAnswerClick}
       />
    </div>
)

export default ActiveQuiz