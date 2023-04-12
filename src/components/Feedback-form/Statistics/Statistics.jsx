import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.statsList}>
      {' '}
      <li className={css.statItem}>
        <span className={css.statSpan}>Good</span> : {good}
      </li>
      <li className={css.statItem}>
        <span className={css.statSpan}>Neutral</span>: {neutral}
      </li>
      <li className={css.statItem}>
        {' '}
        <span className={css.statSpan}>Bad</span>: {bad}
      </li>
      <li className={css.statItem}>
        <span className={css.statSpan}>Total</span>: {total()}
      </li>
      <li className={css.statItem}>
        <span className={css.statSpan}>Positive feedback</span> :{' '}
        {positivePercentage()}
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
