import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const FormGroup = ({ label, ...props }) => (
  <label className="form-group">
    {!!label && <span className="form-group__label">{label}</span>}

    <input
      className="form-group__input"
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
    />
  </label>
);

FormGroup.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'file']),
  onChange: PropTypes.func,
};

FormGroup.defaultValues = {
  value: '',
  placeholder: void 0,
  label: void 0,
  type: 'text',
  onChange: () => void 0,
};

export default FormGroup;
