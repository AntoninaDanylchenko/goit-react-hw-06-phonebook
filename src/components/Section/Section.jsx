import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={css.feedbackSection}>
    <h2 className={css.feedbackSectionTitle}>{title}</h2>
    {children}
  </div>
);

Section.prototype = {
  title: PropTypes.string,
};

export default Section;
