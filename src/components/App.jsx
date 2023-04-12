import React, { Component } from 'react';
import { Section } from './Feedback-form/Section/Section';
import { Statistics } from './Feedback-form/Statistics/Statistics';
import { FeedbackOptions } from './Feedback-form/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback-form/Notification/Notification';
const message = 'There is no feedback';
const feedbaclTitle = 'Please leave feedback';
const statisticsTitle = 'Statistics';

// import { FeedbackForm } from './Feedback-form/Feedback-form';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
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
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={feedbaclTitle}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />{' '}
        </Section>
        {this.countTotalFeedback() ? (
          <Section title={statisticsTitle}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={message} />
        )}
      </>
    );
  }
}
