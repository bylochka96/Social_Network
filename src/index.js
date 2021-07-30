import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 0, message: 'Hi, my name is...', likesCount: 1},
    {id: 1, message: 'Keep silience!', likesCount: 5}
];

let contactsData = [
    {id: 0, name: 'Efim'},
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Alina'},
    {id: 3, name: 'Vita'},
    {id: 4, name: 'Vlad'}
];

let messagesDara = [
    {id: 0, message: 'LOL its work!'},
    {id: 0, message: 'Samurai way'},
    {id: 0, message: 'How are u doing?'}
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={postData} contacts={contactsData} messages={messagesDara}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
