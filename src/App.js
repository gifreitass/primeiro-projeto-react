import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [finalResult, setFinalResult] = useState(0)

  const firstConvertedNumber = parseInt(firstNumber)
  const secondConvertedNumber = parseInt(secondNumber)

  const valueFirstNumber = (evt) => {
    setFirstNumber(evt.target.value)
  }

  const valueSecondNumber = (evt) => {
    setSecondNumber(evt.target.value)
  }

  const sum = () => {
    setFinalResult(firstConvertedNumber + secondConvertedNumber)
  }

  const subtraction = () => {
    setFinalResult(firstConvertedNumber - secondConvertedNumber)
  }

  const multiplication = () => {
    setFinalResult(firstConvertedNumber * secondConvertedNumber)
  }

  const division = () => {
    setFinalResult(firstConvertedNumber / secondConvertedNumber)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label for="firstNumber">Insira o primeiro número:</label>
        <input type="text" id="firstNumber" onChange={valueFirstNumber}></input>
        <label for="secondNumber">Insira o segundo número:</label>
        <input type="text" id="secondNumber" onChange={valueSecondNumber}></input>
        <button onClick={sum}>Somar (+)</button>
        <button onClick={subtraction}>Subtrair (-)</button> 
        <button onClick={multiplication}>Multiplicar (X)</button>
        <button onClick={division}>Dividir (:)</button>
        <p>
          O resultado da operação é: {finalResult}
        </p>
      </header>
    </div>
  );
}

export default App;
