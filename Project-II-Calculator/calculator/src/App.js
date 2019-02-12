import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>

      <div className='calculator'>
        <CalculatorDisplay text='0'/>
        <ActionButton text='clear'/>
        <NumberButton text='/' buttonStyle='function-btn'/>
        <NumberButton text='7' buttonStyle='number-btn'/>
        <NumberButton text='8' buttonStyle='number-btn'/>
        <NumberButton text='9' buttonStyle='number-btn'/>
        <NumberButton text='x' buttonStyle='function-btn'/>
        <NumberButton text='4' buttonStyle='number-btn'/>
        <NumberButton text='5' buttonStyle='number-btn'/>
        <NumberButton text='6' buttonStyle='number-btn'/>
        <NumberButton text='-' buttonStyle='function-btn'/>
        <NumberButton text='1' buttonStyle='number-btn'/>
        <NumberButton text='2' buttonStyle='number-btn'/>
        <NumberButton text='3' buttonStyle='number-btn'/>
        <NumberButton text='+' buttonStyle='function-btn'/>
        <ActionButton text='0'/>
        <NumberButton text='=' buttonStyle='function-btn'/>
      </div>
    </div>
  );
};

export default App;
