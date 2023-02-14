import { useEffect } from 'react';
import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [ prevOperand, setPrevOperand ] = useState('')
  const [ currOperand, setCurrOperand ] = useState('')
  const [ displayVal, setDisplayVal ] = useState(0)
  const [ operation, setOperation ] = useState(null)
  const [ total, setTotal ] = useState(0)
  const [multiCalculation, setMultiCalculation] = useState(false)

  const handleClick = (value) => {
    operation ? rightOperand(value) : leftOperand(value)
  }
  const clearPrevCalculation = (val) => {
    if (val) {
      setTotal(0)
    }
    setPrevOperand('');
    setCurrOperand('');
    setOperation(null)
   
  }
  const updateCalculation = (operation) => {
    setMultiCalculation(true)
    // setPrevOperand(total);
    setCurrOperand('');
    setOperation(operation)
  }

  const rightOperand = (value) => {
    setTotal(0)
    setCurrOperand((prev) => {
      if (value === 0 && prev === '') return prev
      if (value === "." && prev.includes(".")) return prev
      return prev + value
    })
  }
  const leftOperand = (value) => {
    setTotal(0)
    setPrevOperand((prev) => {
      if (value === 0 && prev === '') return prev
      if (value === "." && prev.includes(".")) return prev
      return prev + value
    })
  }

  const calculate = (newOperation) => {
    switch(operation) {
      case '+' :
        setTotal(Number(prevOperand) + Number(currOperand))
        break;
      case '*' :
        setTotal(Number(prevOperand) * Number(currOperand))
        break;
      case '/' :
        setTotal(Number(prevOperand) / Number(currOperand))
        break;
      default:
        setTotal(Number(prevOperand) - Number(currOperand))
    }
    newOperation ? updateCalculation(newOperation) : clearPrevCalculation()
  }
  const handleOperation = (operationVal) => {
    if (operation) {
      calculate(operationVal)
    } else if (prevOperand) {
      setMultiCalculation(false)
      setOperation(operationVal)
    }
  }

  useEffect(() => {
    if (multiCalculation && total) {
      setPrevOperand(total);
    }
  }, [multiCalculation, total])

  useEffect(() => {
    if (total) {
      setDisplayVal(total)
      return
    }  else if (currOperand) {
      setDisplayVal(currOperand)
      return
    } else {
      setDisplayVal(prevOperand || 0)
      return
    }
  }, [total, currOperand, prevOperand])


  return ( 
    <div className="calculator-container">
      <div className='output'>
        {/* <div className='prev_operand'>{prevOperand}</div> */}
        <div className='curr_operand'>{displayVal}</div>
      </div>
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
    </div>
   );
}
 
export default Calculator;