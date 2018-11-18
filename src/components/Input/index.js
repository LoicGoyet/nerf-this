import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = props => <input className="input" {...props} />;

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'file']),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
