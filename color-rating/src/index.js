import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeFactory from './redux/store'

const store = storeFactory();

const render = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};

render();

