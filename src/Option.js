import React, { Component } from "react";

class Options extends Component {
  render() {
    const { options, selectedOption, onOptionChange, questionId } = this.props;
    return (
      <fieldset className="options">
        <legend className="srOnly">Choose an answer</legend>
        {options.map((option, index) => {
          const optionId = `question-${questionId}-option-${index}`;
          return <label className={`option ${selectedOption === option ? "selected" : ""}`} htmlFor={optionId} key={optionId}><input id={optionId} type="radio" name={`question-${questionId}`} value={option} checked={selectedOption === option} onChange={onOptionChange} /><span>{option}</span></label>;
        })}
      </fieldset>
    );
  }
}

export default Options;