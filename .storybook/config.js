import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import pkg from '../package.json';

const req = require.context('../stories', true, /\.tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

setOptions({
    name: `React Redux Components v${pkg.version} ${__COMMIT_HASH__}`
});

configure(loadStories, module);
