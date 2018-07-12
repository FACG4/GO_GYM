import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Head = props => (
  <div className={props.bg_color}>
  <h1><a onClick={props.handleClick}  href="#"><span className={props.color1}>{props.text2}</span> <span className={props.color2}>{props.text6}</span></a></h1>
  <a onClick={props.backHandleClick} href="#">{props.text3}</a>
  </div>
)
Head.propTypes = {

text2: PropTypes.string.isRequired,
text6: PropTypes.string.isRequired,
text3: PropTypes.string.isRequired,
bg_color: PropTypes.string.isRequired,
color1: PropTypes.string.isRequired,
color2: PropTypes.string.isRequired,

};

export default Head;
