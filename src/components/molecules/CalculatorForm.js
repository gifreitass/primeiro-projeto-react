import CalculatorInput from "../atoms/CalculatorInput"

function CalculatorForm (props) {
    return (
        <>
        <CalculatorInput 
            id="firstNumber" 
            label="Insira o primeiro número:"
            onChange={props.onChangeFirstNumber}
        />
        <CalculatorInput 
            id="secondNumber" 
            label="Insira o segundo número:"
            onChange={props.onChangeSecondNumber}
        />
        </>
    )
}

export default CalculatorForm