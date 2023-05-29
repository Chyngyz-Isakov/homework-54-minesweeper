import React, {useState} from 'react';
import {Sell} from "./types";
import ResetButton from "./components/ResetButton/ResetButton";
import TriesCounts from "./components/TriesCounts/TriesCounts";
import BoxesDesk from "./components/BoxesDesk/BoxesDesk";
import './App.css';

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

    const reset = () => {
        setItems(createItems());
        setTries(0);
    }

    const [items, setItems] = useState(createItems());

    const [tries, setTries] = useState(0);

    const openBox = (id: number) => {
        const itemsCopy = [...items];
        const boxCopy = {...itemsCopy[id]};
        boxCopy.clicked = true;
        itemsCopy[id] = boxCopy;

        setItems(itemsCopy);

        if (!items[id].clicked) {
            setTries(tries + 1);
        }

    };

    return (
        <div className="App">
            <h2>Try to find a Medal!</h2>
            <BoxesDesk items={items} openBox={openBox}/>
            <ResetButton reset={reset}/>
            <TriesCounts tries={tries}/>
        </div>
    );
};

export default App;
