import React, { useState, useEffect } from 'react'
import * as math from 'mathjs'
import './App.css'
import  GithubRibbon from './components/GithubRibbon'


function App() {
  const [number, setNumber] = useState('0')

  function addToDisplay(n) {
    console.log(number);
    number === '0' ? setNumber(n) : setNumber(number + n)
  }

  function handleKeydown (e) {
    if (e.key === 'c'){
      setNumber("")
    } 
    else if (e.keyCode === 13){ // Enter keypress
      handleEqual(e.target.value || number)
    }
}

  // Checks to make sure only numbers and '.+-/*' are allowed.
  function validateAndUpdate (value) {
    if (!value.match(/[^0-9.+-/*]/g)){
      setNumber(value)
      console.log('match');
    } else {
      console.log(value)
    }
  }

  function handleEqual(n) {
    setNumber(math.evaluate(n))
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  return (
    <div className="App">
      <h1>Calculator</h1>
      <p>A simple calculator built with ReactJS</p>
      <ul>
        <li>Use the keypad or click</li>
        <li>Use C to clear</li>
        <li>Use Enter to calculate</li>
      </ul>
      <div id="calculator">
        <input
          type="text"
          name="display"
          id="display"
          value={number}
          onClick={() => number === '0' && setNumber('')}
          onChange={(e) => validateAndUpdate(e.target.value)}
          onKeyPress={(e) => validateAndUpdate(e.target.value)}
        ></input>
        {/* Row 1 */}
        <div className="row">
          <div className="key" onClick={() => addToDisplay('7')}>
            7
          </div>
          <div className="key" onClick={() => addToDisplay('8')}>
            8
          </div>
          <div className="key" onClick={() => addToDisplay('9')}>
            9
          </div>
          <div
            className="key"
            id="divide"
            onClick={() => addToDisplay('/')}
          >
            ÷
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="key" onClick={() => addToDisplay('4')}>
            4
          </div>
          <div className="key" onClick={() => addToDisplay('5')}>
            5
          </div>
          <div className="key" onClick={() => addToDisplay('6')}>
            6
          </div>
          <div
            className="key"
            id="multiply"
            onClick={() => addToDisplay('*')}
          >
            x
          </div>
        </div>
        {/* Row 3 */}
        <div className="row">
          <div className="key" onClick={() => addToDisplay('1')}>
            1
          </div>
          <div className="key" onClick={() => addToDisplay('2')}>
            2
          </div>
          <div className="key" onClick={() => addToDisplay('3')}>
            3
          </div>
          <div className="key" id="add" onClick={() => addToDisplay('+')}>
            +
          </div>
        </div>
        {/* Row 4 */}
        <div className="row">
          <div className="key" onClick={() => addToDisplay('.')}>
            .
          </div>
          <div className="key" onClick={() => addToDisplay('0')}>
            0
          </div>
          <div className="key" onClick={() => handleEqual(number)}>
            =
          </div>
          <div
            className="key"
            id="subtract"
            onClick={() => addToDisplay('-')}
          >
            -
          </div>
        </div>
        {/* Row 5 */}
        <div id='clear' onClick={() => setNumber("0")}>
          Clear
        </div>
      </div>
      <GithubRibbon />
    </div>
  )
}

export default App
