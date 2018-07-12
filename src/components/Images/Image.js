import React from 'react';
import PropTypes from 'prop-types';

const Image = props => <img src={props.url} />;

Image.propTypes = {
  url: PropTypes.string.isRequired
};

export default Image;
