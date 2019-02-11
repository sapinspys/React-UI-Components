import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content">
            <p><strong>Get started with React</strong></p>
            <p>React makes it painless to reate interactive UIs. Design simple views for each state in your application.</p>
            <p><span className='soft'>reactjs.org</span></p>
        </div>
    )
};

export default CardContent;