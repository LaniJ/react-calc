import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [ prevOperand, setPrevOperand ] = useState('')
  const [ currOperand, setCurrOperand ] = useState('')
  const [ operation, setOperation ] = useState(null)
  const [ total, setTotal ] = useState(0)

  const handleClick = (value) => {
    console.log('operation', operation)
    operation ? rightOperand(value) : leftOperand(value)
  }
  const clearPrevCalculation = (val) => {
    if (val) {
      setTotal(0)
    }
    setOperation(null)
    setPrevOperand('');
    setCurrOperand('');
  }

  const rightOperand = (value) => {
    setCurrOperand((prev) => prev + value)
  }
  const leftOperand = (value) => {
    setPrevOperand((prev) => prev + value)
  }

  const calculate = () => {
    switch(operation) {
      case '+' :
        setTotal(Number(prevOperand) + Number(currOperand))
        console.log('addition')
        break;
      case '*' :
        setTotal(Number(prevOperand) * Number(currOperand))
        console.log('multi')
        break;
      case '/' :
        setTotal(Number(prevOperand) / Number(currOperand))
        console.log('division')
        break;
      default:
        setTotal(Number(prevOperand) - Number(currOperand))
        console.log('sub')
    }
    clearPrevCalculation()
  }
  const handleOperation = (operation) => {
    setOperation(operation)
  }


  return ( 
    <div className="calculator-container">
      <div className='output'>
        <div className='prev_operand'>{prevOperand}</div>
        <div className='curr_operand'>{total}</div>
      </div>
      {/* <div className='buttons'> */}
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>x</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button className='equal_sign' onClick={() => calculate()}>=</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => clearPrevCalculation('AC')}>AC</button>
      {/* </div> */}
    </div>
   );
}
 
export default Calculator;