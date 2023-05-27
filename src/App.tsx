import React from 'react';
import './App.css';

const App = () => {

    const createItems = () => {
        const items = [];
        for (let i = 1; i <= 36; i++) {
            items.push({hasItem: false, clicked: false});
        }

        const randomBox = Math.floor(Math.random() * items.length);
        items[randomBox].hasItem = true;
        return items;
    }
    console.log(createItems());


    return (
        <div className="App">
            <h2>Try to find a ring!</h2>
            <div className='box-wrap'>

            </div>
        </div>
    );
}

export default App;
