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
      <div className='background'>
        <div className='calculator'>
          <CalculatorDisplay data={this.state.operations}/>
          <ActionButton onClick={this.handleClick} text='clear' value='clear'/>
          <NumberButton onClick={this.handleClick} text='/' value='/' buttonStyle='function-btn'/>
          <NumberButton onClick={this.handleClick} text='7' value='7' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='8' value='8' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='9' value='9' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='x' value='*' buttonStyle='function-btn'/>
          <NumberButton onClick={this.handleClick} text='4' value='4' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='5' value='5' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='6' value='6' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='-' value='-' buttonStyle='function-btn'/>
          <NumberButton onClick={this.handleClick} text='1' value='1' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='2' value='2' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='3' value='3' buttonStyle='number-btn'/>
          <NumberButton onClick={this.handleClick} text='+' value='+' buttonStyle='function-btn'/>
          <ActionButton onClick={this.handleClick} text='0' value='0'/>
          <NumberButton onClick={this.handleClick} text='=' value='equal' buttonStyle='function-btn'/>
        </div>
      </div>  
    )
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        this.setState({operations: [...this.state.operations, value]})
        break
    }
  }

  calculateOperations = () => {
    let result = Array.from(this.state.operations).join('')
    if (result) {
      result = this.round(eval(result),2)
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }

  round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
};

export default App;
