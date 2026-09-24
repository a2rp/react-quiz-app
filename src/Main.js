import React, { Component } from "react";
import Question from "./Question";
import qBank from "./QuestionBank";
import Score from "./Score";

class Main extends Component {
  state = { currentQuestion: 0, selectedOption: "", score: 0, quizEnd: false };

  handleOptionChange = (event) => this.setState({ selectedOption: event.target.value });

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { currentQuestion, selectedOption, score } = this.state;
    const isCorrect = selectedOption === qBank[currentQuestion].answer;
    const nextScore = score + (isCorrect ? 1 : 0);
    const isLastQuestion = currentQuestion + 1 >= qBank.length;

    this.setState({
      score: nextScore,
      currentQuestion: isLastQuestion ? currentQuestion : currentQuestion + 1,
      selectedOption: "",
      quizEnd: isLastQuestion,
    });
  };

  handleRestart = () => this.setState({ currentQuestion: 0, selectedOption: "", score: 0, quizEnd: false });

  render() {
    const { currentQuestion, selectedOption, score, quizEnd } = this.state;
    return (
      <main className="quizContent">
        <section className="quizIntro">
          <p className="eyebrow">Quick knowledge check</p>
          <h1>How well do you know Indian capitals?</h1>
          <p>Choose one answer for each question. You can restart the quiz whenever you want.</p>
        </section>
        <section className="quizCard" aria-live="polite">
          {!quizEnd ? <Question question={qBank[currentQuestion]} selectedOption={selectedOption} onOptionChange={this.handleOptionChange} onSubmit={this.handleFormSubmit} totalQuestions={qBank.length} /> : <Score score={score} total={qBank.length} onRestart={this.handleRestart} />}
        </section>
      </main>
    );
  }
}

export default Main;