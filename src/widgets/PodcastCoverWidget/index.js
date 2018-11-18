import React, { useState, useRef } from 'react';

import { useImageGeneration, useImage } from '../../hooks/image';
import FormGroup from '../../components/FormGroup';
import PodcastCover from '../../components/PodcastCover';
import WidgetLayout, { WidgetLayoutPreview, WidgetLayoutForm } from '../../components/WidgetLayout';
import './index.scss';

const PodcastCoverWidget = () => {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('0');
  const [guest, setGuest] = useState('');
  const [imageSrc, onImageInputChange] = useImage();
  const coverRef = useRef();
  const [generateImage] = useImageGeneration(coverRef, `nerf-this-episode-${number}`, { width: 500, height: 500 });

  return (
    <WidgetLayout>
      <WidgetLayoutPreview>
        <PodcastCover innerRef={coverRef} number={number} guest={guest} title={title} image={imageSrc} />
      </WidgetLayoutPreview>

      <WidgetLayoutForm onSubmit={generateImage}>
        <FormGroup value={title} label="Titre" onChange={e => setTitle(e.target.value)} />
        <FormGroup value={number} label="Numéro d'épisode" type="number" onChange={e => setNumber(e.target.value)} />
        <FormGroup value={guest} label="Invité" onChange={e => setGuest(e.target.value)} />
        <FormGroup label="Image de couverture" type="file" onChange={onImageInputChange} />
      </WidgetLayoutForm>
    </WidgetLayout>
  );
};

export default PodcastCoverWidget;
