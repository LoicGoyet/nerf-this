import { configure } from '@storybook/react';
import '../src/style/font.scss';
import '../src/style/base.scss';

const req = require.context('../src/', true, /\**\/stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
