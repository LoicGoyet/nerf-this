import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '.';

const stories = storiesOf('Image', module);

stories.add('Landscape', () => (
  <Image
    src="https://images2.minutemediacdn.com/image/upload/c_scale,w_912,h_516,c_fill,g_auto/shape/cover/sport/5b2165ed7134f695ba000002.jpeg"
    wrapperSize={{ width: 400, height: 400 }}
  />
));

stories.add('Portrait', () => (
  <Image
    src="https://66.media.tumblr.com/5c40e80011135c94752a1d0f7bcb5b63/tumblr_p3nklendGC1rhn8j0o1_500.jpg"
    wrapperSize={{ width: 400, height: 400 }}
  />
));
