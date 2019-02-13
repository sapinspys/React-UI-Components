import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render () {
        return <button 
            onClick={this.props.onClick} 
            className={this.props.buttonStyle}
            data-size={this.props.size}
            data-value={this.props.value}>
            {this.props.text}
        </button>
    }
}

export default NumberButton;