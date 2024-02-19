import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//!Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbacks = (state = [], action) => {
    if(action.type === 'SET_FEEDBACK')
        return [...state, ...action.payload]
    return state
}
const feelings = (state = [], action) => {
    if(action.type === "SET_FEELING")
        return parseFloat(action.payload)
    console.log(state);
    return state
}
const understanding = (state = [], action) => {
    if(action.type === "SET_UNDERSTANDING")
        return parseFloat(action.payload)
    console.log(state);
    return state
}
const support = (state = [], action) => {
    if(action.type === "SET_SUPPORT")
        return parseFloat(action.payload)
    console.log(state);
    return state
}
const comments = (state = [], action) => {
    if(action.type === "SET_COMMENTS")
        return action.payload
    console.log(state);
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbacks,
        feelings,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
