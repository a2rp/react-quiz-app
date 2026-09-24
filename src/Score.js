import React, { Component } from "react";

class Score extends Component {
  render() {
    const { score, total, onRestart } = this.props;
    return <div className="scorePanel"><p className="eyebrow">Quiz complete</p><h2>Nice work.</h2><p className="scoreValue"><strong>{score}</strong> / {total}</p><p className="scoreCopy">You answered {score === total ? "every question correctly" : `${score} question${score === 1 ? "" : "s"} correctly`}.</p><button type="button" className="primaryButton" onClick={onRestart}>Try again <span aria-hidden="true">↻</span></button></div>;
  }
}

export default Score;