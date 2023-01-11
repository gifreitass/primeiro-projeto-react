import { useState } from "react"

const withHover = (Component) => {
    // as props abaixo são do componente passado acima
    const WithHover = (props) => {
        const [status, setStatus] = useState(false)

        const handleHover = () => {
            setStatus(!status)
        }

        return <Component {...props} status={status} onHover={handleHover} onMouseLeave={handleHover}/>
    }
    return WithHover
}

export default withHover