import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Gbutton = props => (
  <div onClick={props.handleClick}>
  <input type={props.type1} value={props.value1} className={props.b_class} />
  <p>{props.p1}</p>
  </div>
)
Gbutton.propTypes = {

  type1: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  b_class: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
};

export default Gbutton;
