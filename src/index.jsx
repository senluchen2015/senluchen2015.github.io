import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('HMR not updated because of error: ', err);
        }
    });
}
