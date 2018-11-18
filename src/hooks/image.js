import {useState} from 'react';
import domtoimage from 'dom-to-image';

export const useImage = () => {
    const [src, setSrc] = useState();

    const onImageInputChange = e => {
        const url = URL.createObjectURL(e.target.files[0])
        setSrc(url);
    }

    return [src, onImageInputChange];
}

export const useImageGeneration = (ref, title, options = {}) => {
    const generateImage = e => {
        e.preventDefault();

        domtoimage.toJpeg(ref.current, options)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${title}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }

    return [generateImage];
}