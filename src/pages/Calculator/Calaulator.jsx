import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [lastOperator, setLastOperator] = useState('');
  const [lastValue, setLastValue] = useState('');

  const clearDisplay = () => {
      setCurrentValue('');
      setPreviousValue('');
      setOperator('');
      setLastOperator('');
      setLastValue('');
  };

  const clearLastEntry = () => {
      setCurrentValue('');
  };

  const appendToDisplay = (value) => {
      setCurrentValue((prev) => prev + value);
  };

  const handleSetOperator = (op) => {
      if (currentValue === '') return;
      setPreviousValue(currentValue.replace(/,/g, ''));
      setOperator(op);
      setCurrentValue('');
  };

  const calculateResult = () => {
      if (operator === '' && lastOperator !== '' && currentValue === '') {
          let prev = parseFloat(previousValue);
          let last = parseFloat(lastValue);
          switch (lastOperator) {
              case '+':
                  prev += last;
                  break;
              case '-':
                  prev -= last;
                  break;
              case '*':
                  prev *= last;
                  break;
              case '/':
                  prev /= last;
                  break;
              default:
                  return;
          }
          setCurrentValue(formatNumberWithCommas(prev.toString()));
          setPreviousValue(prev.toString());
          setLastValue('');
          setLastOperator(lastOperator);
      } else if (operator !== '' && currentValue !== '') {
          let result;
          let prev = parseFloat(previousValue);
          let curr = parseFloat(currentValue.replace(/,/g, ''));
          switch (operator) {
              case '+':
                  result = prev + curr;
                  break;
              case '-':
                  result = prev - curr;
                  break;
              case '*':
                  result = prev * curr;
                  break;
              case '/':
                  result = prev / curr;
                  break;
              default:
                  return;
          }
          setCurrentValue(formatNumberWithCommas(result.toString()));
          setPreviousValue(result.toString());
          setLastValue(curr.toString());
          setLastOperator(operator);
          setOperator('');
      }
  };

  const formatNumberWithCommas = (number) => {
      return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          calculateResult();
      } else if (event.key === 'Escape') {
          clearDisplay();
      } else if (['+', '-', '*', '/'].includes(event.key)) {
          handleSetOperator(event.key);
      } else if (event.key >= '0' && event.key <= '9') {
          appendToDisplay(event.key);
      }
  };

  React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [currentValue, operator, previousValue]);

  return (
      <div className="calculator">
          <input type="text" id="display" value={currentValue} disabled /> {/* หน้าจอแสดงผล */}
          <div className="buttons">
              {/* แถวที่ 1 */}
              <button className="clear" onClick={clearDisplay}>C</button>
              <button className="clear" onClick={clearLastEntry}>CE</button>
              <div className="spacer"></div>
              <button id="divide" className="operator" onClick={() => handleSetOperator('/')}>÷</button>

              {/* แถวที่ 2 */}
              <button onClick={() => appendToDisplay('7')}>7</button>
              <button onClick={() => appendToDisplay('8')}>8</button>
              <button onClick={() => appendToDisplay('9')}>9</button>
              <button id="plusx" className="operator" onClick={() => handleSetOperator('*')}>*</button>

              {/* แถวที่ 3 */}
              <button onClick={() => appendToDisplay('4')}>4</button>
              <button onClick={() => appendToDisplay('5')}>5</button>
              <button onClick={() => appendToDisplay('6')}>6</button>
              <button id="minus" className="operator" onClick={() => handleSetOperator('-')}>-</button>

              {/* แถวที่ 4 */}
              <button onClick={() => appendToDisplay('1')}>1</button>
              <button onClick={() => appendToDisplay('2')}>2</button>
              <button onClick={() => appendToDisplay('3')}>3</button>
              <button id="plus" className="operator" onClick={() => handleSetOperator('+')}>+</button>

              {/* แถวที่ 5 */}
              <button onClick={() => appendToDisplay('0')} className="zero">0</button>
              <button onClick={() => appendToDisplay('.')}>.</button>
              <button id="result" className="operator" onClick={calculateResult}>=</button>
          </div>
      </div>
  );
};

export default Calculator;
