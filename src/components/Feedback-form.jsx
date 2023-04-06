import React, { Component } from 'react';

export class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: this.state[e.target.name] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.round((good / this.countTotalFeedback()) * 100)}%`;
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <ul>
          <li>
            <button name="good" type="button" onClick={this.handleClick}>
              Good
            </button>
          </li>
          <li>
            <button name="neutral" type="button" onClick={this.handleClick}>
              Neutral
            </button>
          </li>
          <li>
            <button name="bad" type="button" onClick={this.handleClick}>
              Bad
            </button>
          </li>
        </ul>
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            Positive feedback:{' '}
            {this.countTotalFeedback() === 0
              ? 0
              : this.countPositiveFeedbackPercentage()}
          </li>
        </ul>
      </div>
    );
  }
}
