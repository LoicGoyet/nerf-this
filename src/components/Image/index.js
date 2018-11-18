import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './style.scss';

const Image = ({ src, size, ...props }) => {
  const [srcSize, setSrcSize] = useState({
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

        setSrcSize({
          width: naturalWidth,
          height: naturalHeight,
        });
      };
    },
    [src]
  );

  const { width, height } = srcSize;

  if (!src || width === 0 || height === 0) return null;

  const ratio = height / width;
  const orientation = ratio > 1 ? 'portrait' : 'landscape';

  // used if the orientation is 'landscape'
  const innerWidth = (width * size.height) / height;

  // used if the orientation is 'portrait'
  const innerHeight = (height * size.width) / width;

  return (
    <div className="image-wrapper" style={{ ...size }}>
      <Draggable
        axis={ratio > 1 ? 'y' : 'x'}
        bounds={{
          left: size.width - innerWidth,
          right: 0,
          top: size.height - innerHeight,
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
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

Image.defaultProps = {
  src: undefined,
};

export default Image;
