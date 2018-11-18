import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './style.scss';

const Image = ({ src, wrapperSize, ...props }) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(
    () => {
      if (!src) return null;

      const imageDom = document.createElement('img');
      imageDom.setAttribute('src', src);

      imageDom.onload = () => {
        const { naturalWidth, naturalHeight } = imageDom;

        setSize({
          width: naturalWidth,
          height: naturalHeight,
        });
      };
    },
    [src]
  );

  const { width, height } = size;

  if (!src || width === 0 || height === 0) return null;

  const ratio = height / width;
  const orientation = ratio > 1 ? 'portrait' : 'landscape';

  // used if the orientation is 'landscape'
  const innerWidth = (width * wrapperSize.height) / height;

  // used if the orientation is 'portrait'
  const innerHeight = (height * wrapperSize.width) / width;

  return (
    <Draggable
      axis={ratio > 1 ? 'y' : 'x'}
      bounds={{
        left: wrapperSize.width - innerWidth,
        right: 0,
        top: wrapperSize.height - innerHeight,
        bottom: 0,
      }}
      {...props}
    >
      <span
        className={`image image--${orientation}`}
        style={{
          width: orientation === 'landscape' ? innerWidth : 'inherit',
          height: orientation === 'portrait' ? innerHeight : 'inherit',
        }}
      >
        <img src={src} className="image__source" alt="cover illustration" />
      </span>
    </Draggable>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  wrapperSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

Image.defaultProps = {
  src: undefined,
};

export default Image;
