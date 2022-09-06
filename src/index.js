import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const postData = [
    {
        id: 1,
        postMessage: "Hey everyone, that is my first try of working with props",
        love: "21 ",
        hate: "3 "
    },
    {
        id: 2,
        postMessage: "Search for the keywords to learn more about each warning.",
        love: "1 ",
        hate: "15 "
    },
    {
        id: 3,
        postMessage: "Who am I?",
        love: "4 ",
        hate: "0 "
    },
    {
        id: 4,
        postMessage: "Am i afraid for learning smth new? Nope.",
        love: "5 ",
        hate: "1 "
    }
];

let dialogsData = [
    {id: 1, name: "Roma"},
    {id: 2, name: "Artem"},
    {id: 3, name: "Iqos"},
    {id: 4, name: "Eva"},
    {id: 5, name: "Zheton"}
];

let messageData = [
    {id: 1, message: "Старіна, пора пити пиво."},
    {id: 2, message: "Яке ставлю пиво, у мене на баліку 20 грн."},
    {id: 3, message: "А чому я пишу сам до себе, це шиза?"},
    {id: 4, message: "Базару ноль."},
    {id: 5, message: "Коли я вже нарешті приїду в цю Венецію?!"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
    </>
);

reportWebVitals();
