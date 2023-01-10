import { useState } from "react"
import CalculatorActions from "../molecules/CalculatorActions"
import CalculatorForm from "../molecules/CalculatorForm"

function CalculatorInteractions(props) {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)

    const firstConvertedNumber = parseInt(firstNumber)
    const secondConvertedNumber = parseInt(secondNumber)

    const handleChangeFirstNumber = (evt) => {
        setFirstNumber(evt.target.value)
    }

    const handleChangeSecondNumber = (evt) => {
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
        props.setFinalResult(operationResult)
        const arrayHistoric = props.historic
        arrayHistoric.push(operationResult)
        props.setHistoric(arrayHistoric)
    }

    return <>
        <CalculatorForm
            onChangeFirstNumber={handleChangeFirstNumber}
            onChangeSecondNumber={handleChangeSecondNumber}
        />
        <CalculatorActions 
            onClickSum={handleOperation}
            onClickSubtraction={handleOperation}
            onClickMultiplication={handleOperation}
            onClickDivision={handleOperation}
        />
    </>
}

export default CalculatorInteractions