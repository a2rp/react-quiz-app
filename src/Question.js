import React, { Component } from "react";
import Options from "./Option";

class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit, totalQuestions } = this.props;
    return (
      <div>
        <div className="questionMeta"><span>Question {question.id} of {totalQuestions}</span><span>{Math.round((question.id / totalQuestions) * 100)}%</span></div>
        <div className="progressTrack"><span style={{ width: `${(question.id / totalQuestions) * 100}%` }} /></div>
        <h2 className="questionText">{question.question}</h2>
        <form onSubmit={onSubmit}>
          <Options options={question.options} selectedOption={selectedOption} onOptionChange={onOptionChange} questionId={question.id} />
          <button type="submit" className="primaryButton" disabled={!selectedOption}>Submit answer <span aria-hidden="true">↗</span></button>
        </form>
      </div>
    );
  }
}

export default Question;