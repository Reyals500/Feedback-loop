import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import React from "react"


const ThankYou = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <>
        <h1>THANK YOU FOR COMING!</h1>
        <button data-testid="next" onClick={handleClick}>BACK HOME</button>
        </>
        
    )
}
export default ThankYou