import React from 'react';

interface IProps {
    key: number;
    hasItem: boolean;
    clicked: boolean;
}

const GameBox: React.FC<IProps> = ({key}) => {
    return (
        <div className='box' key={key}></div>
    );
};

export default GameBox;