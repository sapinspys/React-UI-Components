import React from 'react';
import './Display.css';

// const CalculatorDisplay = props => {
//     return <div className='calc-display'>{props.text}</div>
// }

class CalculatorDisplay extends React.Component {
    render () {
        const string = this.props.data.join('');
        return <div 
            className='calc-display'>
            {string}
        </div>
    }
}

export default CalculatorDisplay;
