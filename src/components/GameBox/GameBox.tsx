import React from 'react';

interface IProps {
    key: number;
    hasItem: boolean;
    clicked: boolean;
    openBox: React.MouseEventHandler;
}

const GameBox: React.FC<IProps> = ({openBox, clicked, hasItem}) => {
    const boxClasses = ['Box'];

    if (clicked) {
        boxClasses.push('Box-clicked');
    }
    if (clicked && hasItem) {
        boxClasses.push('Box-clicked-find');
    }

    return (
        <div onClick={openBox} className={boxClasses.join(' ')}></div>
    );
};

export default GameBox;