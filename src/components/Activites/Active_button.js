import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Abutton = props => (
  <div onClick={props.handleClick}>
    <button  id={props.text1} className={props.button_style}>
    <span className={props.span_style}>
    {props.text1}
    </span>
    <div className={`${props.img_style} ${props.bg_color}`}>
    <img src={props.url} alt="" />
    </div>

    </button>
  </div>
)
Abutton.propTypes = {

url: PropTypes.string.isRequired,
text1: PropTypes.string.isRequired,
button_style: PropTypes.string.isRequired,
span_style: PropTypes.string.isRequired,
img_style: PropTypes.string.isRequired,
bg_color: PropTypes.string.isRequired,

};

export default Abutton;
