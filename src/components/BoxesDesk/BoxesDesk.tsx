import React from 'react';
import GameBox from "../GameBox/GameBox";
import {Sell} from "../../types";

interface IProps {
    items: Sell[];
    openBox: (index: number) => void;
}

const BoxesDesk: React.FC<IProps> = ({items, openBox}) => {
    return (
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
    );
};

export default BoxesDesk;