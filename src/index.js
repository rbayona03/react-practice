// Import React and React Dom
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = ()=>{
    const buttonText = "clickMe!";

    return <div>
    <label for="name">What is your Name:</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
    </div>;
};
//Take React Component and show on screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);