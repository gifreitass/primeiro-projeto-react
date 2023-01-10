import React, { useState } from "react"
import CalculatorResult from "../atoms/CalculatorResult"
import CalculatorHistoric from "../molecules/CalculatorHistoric"
import CalculatorInteractions from "../organisms/CalculatorInteractions"

function CalculatorTemplate() {
    const [finalResult, setFinalResult] = useState(0)
    const [historic, setHistoric] = useState([])

    return <>
        <CalculatorInteractions setFinalResult={setFinalResult} historic={historic} setHistoric={setHistoric}/>
        <CalculatorResult textResult={finalResult}/>
        <CalculatorHistoric historic={historic}/>
    </>
}

export default CalculatorTemplate 