import { useState } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Support from "../Support/Support";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";


const Understanding = () => {
    const dispatch = useDispatch()
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory()
    const handleClick = () => {
        dispatch({type: "SET_UNDERSTANDING", payload: understanding})
        history.push('/support')
    }
    return (
        <>
        <h3>2 of 4 pages</h3>
        <h3>Understanding</h3>
            <input
                required
                data-testid="input"
                type="text"
                placeholder="Understanding"
                value={understanding}
                onChange={(event) =>
                setUnderstanding(event.target.value)}
            />
            <button data-testid="next" type="submit" onClick={handleClick}>NEXT</button>        
            </>
    )
}
export default Understanding