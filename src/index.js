import React from 'react';
import ReactDOM from 'react-dom';

import FlippedOff from './FlippedOff';

ReactDOM.render(<FlippedOff />, document.querySelector('#render'));

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const path = __DEV__ ? '/service-worker.js' : '/flipped-off/service-worker.js';

    navigator.serviceWorker.register(path).then(() => {
      console.log('SW registered');
    }).catch(error => {
      console.log('SW registration failed: ', error);
    });
  });
}
