import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Score = props => (

  <div className={`${props.a_class} ${props.bg_class} ${props.s_class}`}>
    <input onChange={props.handleChange} type="number" name={props.name} placeholder={props.placeholder} required />
    <img src={props.url} alt="" />
  </div>
)
Score.propTypes = {
  url: PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  name: PropTypes.string,
  bg_class: PropTypes.string.isRequired,
  s_class: PropTypes.string.isRequired,
  a_class: PropTypes.string.isRequired,
};

export default Score;
