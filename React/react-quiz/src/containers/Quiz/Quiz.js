import React, {Component} from "react"
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz"
class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What year was the very first model of the iPhone released?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: '2008', id:1},
                    {text: '2007', id:2},
                    {text: '2005', id:3},
                    {text: '2003', id:4},
                ]
            },
            {
                question: 'What’s the shortcut for the “copy” function on most computers?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'ctrl c', id:1},
                    {text: 'ctrl f', id:2},
                    {text: 'ctrl v', id:3},
                    {text: 'alt c', id:4},
                ]
            },
            {
                question: 'Is Java a type of OS?',
                rightAnswerId: 1,
                id: 3,
                answers: [
                    {text: 'No', id:1},
                    {text: 'Yes', id:2},                
                ]
            },
            {
                question: 'What is meteorology the study of?',
                rightAnswerId: 3,
                id: 4,
                answers: [
                    {text: 'The nature', id:1},
                    {text: 'The mountains', id:2},                
                    {text: 'The weather', id:3},                
                    {text: 'The metals', id:4},                
                ]
            },
            {
                question: 'Which planet is the hottest in the solar system?',
                rightAnswerId: 4,
                id: 4,
                answers: [
                    {text: 'Earth', id:1},
                    {text: 'Jupiter', id:2},                
                    {text: 'Mars', id:3},                
                    {text: 'Venus', id:4},                
                ]
            },
        ]
    }

    onAnswerClickHandler = answerId=> {
        if (this.state.answerState) {
          const key = Object.keys(this.state.answerState)[0] 
            if (this.state.answerState[key]==='succes') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results
         if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'succes'
            }

            this.setState ({
                answerState: {[answerId]: 'succes'}, 
                results         
            })

            const timeout = window.setTimeout(()=>{
                if (this.isQuizFinished()){
                    this.setState({isFinished:true})
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion +1,
                        answerState: null,
                    })
                }  

                window.clearTimeout(timeout)
            },1000)

            
         } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'}, 
                results
            })
         }        
    }

    isQuizFinished() {
        return this.state.activeQuestion +1 === this.state.quiz.length
    }

    RetryHandler =()=> {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            results: {},
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Technology & Science Trivia Questions</h1>
                {
                this.state.isFinished
                ? <FinishedQuiz
                results = {this.state.results}
                quiz = {this.state.quiz}
                onRetry = {this.RetryHandler}              
                /> :

                <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick = {this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
                    />
                }
                    
                </div>
            </div>
        )
    }
}

export default Quiz