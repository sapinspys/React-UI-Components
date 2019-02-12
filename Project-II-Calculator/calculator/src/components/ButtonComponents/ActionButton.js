import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className='action-btn'>{props.text}</button>
}

export default ActionButton;