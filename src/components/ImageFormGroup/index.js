import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { isStringAImageURL } from '../../utils/image';

import './style.scss';

const ImageFormGroup = ({ onChange }) => {
  const [image, setImage] = useState('');
  const fileInput = useRef();

  // useEffect(() => setImage(value), [value]);
  useEffect(
    async () => {
      const isImage = await isStringAImageURL(image);
      if (!isImage) return false;
      return onChange(image);
    },
    [image]
  );

  const onTextInputPaste = e => setImage(e.clipboardData.getData('text'));

  const onFileInputChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };

  const onButtonClick = () => fileInput.current.click();

  return (
    <div>
      <button type="button" onClick={onButtonClick}>
        Upload
      </button>
      <input className="image-input__file-input" type="file" onChange={onFileInputChange} ref={fileInput} />
      <input onPaste={onTextInputPaste} onChange={() => null} value={image} type="text" />
    </div>
  );
};

ImageFormGroup.propTypes = {
  onChange: PropTypes.func,
};

ImageFormGroup.defaultProps = {
  onChange: () => undefined,
};

export default ImageFormGroup;
