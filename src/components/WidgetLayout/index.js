import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// Wrapper
const WidgetLayout = ({ children }) => <div className="widget-layout">{children}</div>;

WidgetLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default WidgetLayout;

// Preview
export const WidgetLayoutPreview = ({ children }) => <div className="widget-layout__preview">{children}</div>;

WidgetLayoutPreview.propTypes = {
  children: PropTypes.any.isRequired,
};

// Form
export const WidgetLayoutForm = ({ onSubmit, children }) => (
  <form className="widget-layout__form" onSubmit={onSubmit}>
    {children}

    <div>
      <button type="submit">Generate Image</button>
    </div>
  </form>
);

WidgetLayoutForm.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
