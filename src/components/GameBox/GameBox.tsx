import React from 'react';

interface IProps {
    key: number;
    hasItem: boolean;
    clicked: boolean;
    openBox: React.MouseEventHandler;
    // className: string;
}

const GameBox: React.FC<IProps> = ({ openBox,clicked}) => {
    const boxClasses = ['Box'];

    if (clicked) {
        boxClasses.push('Box-clicked');
    }

    return (
        <div onClick={openBox} className={boxClasses.join(' ')}></div>
    );
};

export default GameBox;