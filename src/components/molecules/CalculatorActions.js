import CalculatorButton from "../atoms/CalculatorButton"

function CalculatorActions (props) {
    return <>
    <CalculatorButton 
        onClick={props.onClickSum} 
        id="somar"
        textButton="Somar (+)"
    />
    <CalculatorButton 
        onClick={props.onClickSubtraction} 
        id="subtrair"
        textButton="Subtrair (-)"
    />
    <CalculatorButton 
        onClick={props.onClickMultiplication} 
        id="multiplicar"
        textButton="Multiplicar (X)"
    />
    <CalculatorButton 
        onClick={props.onClickDivision} 
        id="dividir"
        textButton="Dividir (:)"
    />
    </>
}

export default CalculatorActions