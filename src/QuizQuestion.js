import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((el) => (
              <QuizQuestionButton
                key={this.props.quiz_question.answer_options.indexOf(el)}
                button_text={el}
                clickHandler={this.handleClick.bind(this)}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }

  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
    return;
  }
}

export default QuizQuestion;
