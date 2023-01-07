import './App.css';
import { useState } from "react"
import RecentOperations from './RecentOperations';

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [finalResult, setFinalResult] = useState(0)
  const [historic, setHistoric] = useState([])

  const firstConvertedNumber = parseInt(firstNumber)
  const secondConvertedNumber = parseInt(secondNumber)

  const valueFirstNumber = (evt) => {
    setFirstNumber(evt.target.value)
  }

  const valueSecondNumber = (evt) => {
    setSecondNumber(evt.target.value)
  }

  const handleOperation = (evt) => {
    let operationResult = 0
    if (evt.target.id === 'somar') {
      operationResult = firstConvertedNumber + secondConvertedNumber
    }
    if (evt.target.id === 'subtrair') {
      operationResult = firstConvertedNumber - secondConvertedNumber
    }
    if (evt.target.id === 'multiplicar') {
      operationResult = firstConvertedNumber * secondConvertedNumber
    }
    if (evt.target.id === 'dividir') {
      operationResult = firstConvertedNumber / secondConvertedNumber
    }
    setFinalResult(operationResult)
    const arrayHistoric = historic
    arrayHistoric.push(operationResult)
    setHistoric(arrayHistoric)
    console.log(arrayHistoric)
  }

  return (
    <div className="App">
      <header className="App-header">
        <label for="firstNumber">Insira o primeiro número:</label>
        <input type="text" id="firstNumber" onChange={valueFirstNumber}></input>
        <label for="secondNumber">Insira o segundo número:</label>
        <input type="text" id="secondNumber" onChange={valueSecondNumber}></input>
        <button onClick={handleOperation} id="somar">Somar (+)</button>
        <button onClick={handleOperation} id="subtrair">Subtrair (-)</button>
        <button onClick={handleOperation} id="multiplicar">Multiplicar (X)</button>
        <button onClick={handleOperation} id="dividir">Dividir (:)</button>
        <p>
          O resultado da operação é: {finalResult}
        </p>
        <div>
          {historic.map((value) => {
            return <RecentOperations operation={value}/>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
