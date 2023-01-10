function CalculatorInput (props) {
    return (
        <div>
        <label for={props.id}>
            {props.label}
        </label>
        <input type="text" id={props.id} onChange={props.onChange}></input>
        </div>
    )
}

export default CalculatorInput