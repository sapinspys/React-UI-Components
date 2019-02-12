import React from 'react';
import './Display.css';

// const CalculatorDisplay = props => {
//     return <div className='calc-display'>{props.text}</div>
// }

class CalculatorDisplay extends React.Component {
    render () {
        return <div 
            className='calc-display'>
            {Array.from(this.props.data).join('')}
        </div>
    }
}

export default CalculatorDisplay;
