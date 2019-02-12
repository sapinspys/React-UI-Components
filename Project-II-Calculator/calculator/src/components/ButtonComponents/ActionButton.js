import React from 'react';
import './Button.css';

// const ActionButton = props => {
//     return <button className='action-btn'>{props.text}</button>
// }

class ActionButton extends React.Component {
    render () {
        return <button 
            onClick={this.props.onClick} 
            className='action-btn'
            data-size={this.props.size}
            data-value={this.props.value}>
            {this.props.text}
        </button>
    }
}

export default ActionButton;