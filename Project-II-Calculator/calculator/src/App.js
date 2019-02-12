import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {operations:[]}
  }

  render() {
    return (
      <div className='calculator'>
        <CalculatorDisplay data={this.state.operations}/>
        <ActionButton onClick={this.handleClick} text='clear'/>
        <NumberButton onClick={this.handleClick} text='/' buttonStyle='function-btn'/>
        <NumberButton onClick={this.handleClick} text='7' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='8' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='9' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='x' buttonStyle='function-btn'/>
        <NumberButton onClick={this.handleClick} text='4' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='5' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='6' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='-' buttonStyle='function-btn'/>
        <NumberButton onClick={this.handleClick} text='1' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='2' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='3' buttonStyle='number-btn'/>
        <NumberButton onClick={this.handleClick} text='+' buttonStyle='function-btn'/>
        <ActionButton onClick={this.handleClick} text='0'/>
        <NumberButton onClick={this.handleClick} text='=' buttonStyle='function-btn'/>
      </div>
    )
  };
};

export default App;
