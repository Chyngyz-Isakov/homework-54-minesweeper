import React, {MouseEventHandler} from 'react';

interface IProps {
    reset:MouseEventHandler;
}

const ResetButton:React.FC<IProps> = ({reset}) => <button className='reset-btn' onClick={reset}>Reset</button>;



export default ResetButton;