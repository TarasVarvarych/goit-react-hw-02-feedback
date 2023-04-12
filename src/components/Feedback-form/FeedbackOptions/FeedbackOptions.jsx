import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  const btnNames = Object.keys(options);
  return (
    <ul className={css.btnList}>
      {btnNames.map(btnName => (
        <li key={btnName}>
          <button
            name={btnName}
            type="button"
            onClick={onLeaveFeedback}
            className={css.btn}
          >
            {btnName}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
