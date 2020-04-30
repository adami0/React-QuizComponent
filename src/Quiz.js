import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }

    render() {
        const isQuizEnd = Boolean(this.state.quiz_position-1 === quizData.quiz_questions.length);
        console.log(isQuizEnd);
        return (
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>}
            </div>
        )
    }

    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position+1
        })
    }
}

export default Quiz;
