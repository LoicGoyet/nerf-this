import { useState } from 'react';
import domtoimage from 'dom-to-image';

export const useImage = () => {
  const [src, setSrc] = useState();

  const onImageInputChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    setSrc(url);
  };

  const onImageStringChange = e => setSrc(e.target.value);

  return [src, onImageInputChange, onImageStringChange];
};

export const useImageGeneration = (ref, title, options = {}) => {
  const generateImage = e => {
    e.preventDefault();

    domtoimage.toJpeg(ref.current, options).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `${title}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  return [generateImage];
};
