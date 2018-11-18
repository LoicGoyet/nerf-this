import React, {useState, useRef} from 'react';

import {useImageGeneration, useImage} from '../../hooks/image';
import Icon from './icon';
import Image from '../Image';
import FormGroup from '../FormGroup';
import './index.scss';


const Cover = () => {
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState(0);
    const [guest, setGuest] = useState('');
    const [imageSrc, onImageInputChange] = useImage();
    const coverRef = useRef();
    const [generateImage] = useImageGeneration(coverRef, `nerf-this-episode-${number}`, {width: 500, height: 500});

    return (
        <div className="widget-layout">
            <div className="widget-layout__preview">
                <div className='cover' ref={coverRef}>
                    <div className="cover__content">
                        <h1 className="cover__heading">
                            Nerf This #
                            <span className="cover__number-wrapper">
                                <span className="cover__number">{number}</span>
                                <Icon className="cover__icon" width="127" height="109"/>
                            </span>
                        </h1>

                        {!!guest && <h3 className="cover__guest">Avec <span className="cover__guest-name">{guest}</span></h3>}
                        {!!title && <h2 className="cover__title">{title}</h2>}
                    </div>

                    <Image
                        src={imageSrc}
                        wrapperSize={{
                            width: 500,
                            height: 500,
                        }}
                    />
                </div>
            </div>

            <div className="widget-layout__form">
                <form onSubmit={generateImage}>
                    <FormGroup
                        value={title}
                        label="Titre"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <FormGroup
                        value={number}
                        label="Numéro d'épisode"
                        type="number"
                        onChange={e => setNumber(e.target.value)}
                    />

                    <FormGroup
                        value={guest}
                        label="Invité"
                        onChange={e => setGuest(e.target.value)}
                    />

                    <FormGroup
                        label="Image de couverture"
                        type="file"
                        onChange={onImageInputChange}
                    />

                    <div>
                        <button type="submit">Generate Image</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cover;