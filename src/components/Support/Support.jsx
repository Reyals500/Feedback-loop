import { useState } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from "../Comments/Comments";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

const Support = () => {
    const dispatch = useDispatch()
    const [support, setSupport] = useState('');
    const history = useHistory()
    const handleClick = () => {
        dispatch({type: "SET_SUPPORT", payload: support})
        history.push('/comments')
    }

    return (
        <>
        <h3>3 of 4 pages</h3>
        <h3>Support</h3>
            <input
                data-testid="input"
                required
                type="text"
                placeholder="Support"
                value={support}
                onChange={(event) =>
                setSupport(event.target.value)}
            />
            <button data-testid="next" type="submit" onClick={handleClick}>NEXT</button>
            </>
    )
}
export default Support