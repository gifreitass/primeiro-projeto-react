import RecentOperations from "../atoms/RecentOperations"

function CalculatorHistoric (props) {
    return props.historic.map((value) => {
        return <RecentOperations operation={value}/>
      })
}

export default CalculatorHistoric