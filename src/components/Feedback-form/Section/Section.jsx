import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={css.section}>
      <p className={css.sectionTitle}>{title}</p>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
