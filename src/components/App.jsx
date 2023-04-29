import React, { useState } from 'react';
import { Section } from './Feedback-form/Section/Section';
import { Statistics } from './Feedback-form/Statistics/Statistics';
import { FeedbackOptions } from './Feedback-form/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback-form/Notification/Notification';
const message = 'There is no feedback';
const feedbaclTitle = 'Please leave feedback';
const statisticsTitle = 'Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((good / countTotalFeedback()) * 100)}%`;
  };

  return (
    <>
      <Section title={feedbaclTitle}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />{' '}
      </Section>
      {countTotalFeedback() ? (
        <Section title={statisticsTitle}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message={message} />
      )}
    </>
  );
}
