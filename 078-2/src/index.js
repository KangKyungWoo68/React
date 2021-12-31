import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

const store = createStore((state, action) => ({str:state.str+((action.type==='ADD')?200:"")}), {str: "react"});

const listener = ()=> {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
};

store.subscribe(listener);
listener();