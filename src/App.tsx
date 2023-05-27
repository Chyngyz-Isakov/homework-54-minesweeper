import React, {useState} from 'react';
import './App.css';
import GameBox from "./components/GameBox/GameBox";

const App = () => {

    const createItems = () => {
        const items = [];
        for (let i = 0; i < 36; i++) {
            const box = {hasItem: false, clicked: false};
            items.push(box);
        }

        const randomBox = Math.floor(Math.random() * items.length);
        items[randomBox].hasItem = true;

        return items;
    }
    console.log(createItems());

    const [items, setItems] = useState(createItems());

    console.log(items);



    return (
        <div className="App">
            <h2>Try to find a ring!</h2>
            <div className='box-wrap'>
                {items.map((box, index) => (
                    <GameBox key={index}
                             hasItem={box.hasItem}
                             clicked={box.clicked}

                    />
                ))}
            </div>
            <button onClick={createItems}>Reset</button>
            <p>Tries: {items.length}</p>
            <p>Boxes: {items.length}</p>
        </div>
    );
}


export default App;
