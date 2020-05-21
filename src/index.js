import React from 'react';
import ReactDOM from 'react-dom';

import FlippedOff from './FlippedOff';

ReactDOM.render(<FlippedOff />, document.querySelector('#render'));

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('SW registered');
    }).catch(error => {
      console.log('SW registration failed: ', error);
    });
  });
}
