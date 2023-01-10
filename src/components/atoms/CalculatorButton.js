function CalculatorButton (props) {
    return (
        <button onClick={props.onClick} id={props.id}>{props.textButton}</button>
    )
}

export default CalculatorButton