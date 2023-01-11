import withHover from "../../hoc/withHover"

function CalculatorInput (props) {
    return (
        <div>
        <label for={props.id}>
            {props.label}
        </label>
        <input
            type="text"
            id={props.id}
            onChange={props.onChange}
            onMouseEnter={props.onHover}
            onMouseLeave={props.onMouseLeave}
        />
        {/* código abaixo: se props.status for true, vai criar o parágrafo, usado entre {} porque eu quero renderizar todo o resto do código */}
        {
            props.status &&
            <p>Você está com o mouse no input</p>
        }
        </div>
    )
}

export default withHover(CalculatorInput)