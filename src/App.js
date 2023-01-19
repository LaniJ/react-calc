import './calculator.css';

const calc = () => {
  return ( 
    <div className="calculator-container">
      <div className='output'>
        <div className='prev_operand'>124,895 *</div>
        <div className='curr_operand'>124,895</div>
      </div>
      {/* <div className='buttons'> */}
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='equal_sign'>=</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button>.</button>
        <button>AC</button>
      {/* </div> */}
    </div>
   );
}
 
export default calc;