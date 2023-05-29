import React from 'react';

interface IProps {
    tries: number;
}

const TriesCounts: React.FC<IProps> = ({tries}) =>
    <p className='tries'>Tries: <span
        className='tries-counts'>{tries}</span>
    </p>;

export default TriesCounts;