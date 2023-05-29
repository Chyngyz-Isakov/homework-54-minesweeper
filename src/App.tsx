import React, {useState} from 'react';
import './App.css';
import GameBox from "./components/GameBox/GameBox";
import {Sell} from "./components/types";


const App = () => {

    const createItems = (): Sell[] => {

        const items: Sell[] = [];
        for (let i = 0; i < 36; i++) {
            const box = {hasItem: false, clicked: false};
            items.push(box);
        }

        const randomBox = Math.floor(Math.random() * items.length);
        items[randomBox].hasItem = true;

        return items;
    }

    const reset = () =>{
        setItems(createItems());
        setTries(0)
    }

    const [items, setItems] = useState(createItems());


    const [tries, setTries] = useState(0);


    const openBox = (id: number) => {
        const itemsCopy = [...items];
        const boxCopy = {...itemsCopy[id]};
        boxCopy.clicked = true;
        itemsCopy[id] = boxCopy;


        setItems(itemsCopy);
        if (!items[id].clicked){
            setTries(tries + 1)
        }

    };


    return (
        <div className="App">
            <h2>Try to find a Medal!</h2>
            <div className='box-wrap'>
                {items.map((box, index) => (
                    <GameBox
                        key={index}
                        hasItem={box.hasItem}
                        clicked={box.clicked}
                        openBox={() => openBox(index)}
                    />
                ))}
            </div>
            <button onClick={reset}>Reset</button>
            <p>Tries: {tries}</p>
        </div>
    );
}


export default App;
