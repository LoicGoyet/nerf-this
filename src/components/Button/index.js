import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const Button = ({ className, children, type, ...props }) => (
  <button
    className={cn({
      button: true,
      [className]: !!className,
    })}
    type={type}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: undefined,
};

export default Button;
