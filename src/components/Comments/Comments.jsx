import { useState } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Review from "../Review/Review";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";


const Comments = () => {
    const dispatch = useDispatch()
    const [comments, setComments] = useState('');
    const history = useHistory()
    const handleClick = () => {
        dispatch({type: "SET_COMMENTS", payload: comments})
        history.push('/review')
    }

    return (
        <>
        <h3>4 of 4 pages</h3>
        <h3>Comments</h3>
            <input
                data-testid="input"
                required
                type="text"
                placeholder="Comments"
                value={comments}
                onChange={(event) =>
                setComments(event.target.value)}
            />
            <button data-testid="next" type="submit" onClick={handleClick}>NEXT</button>
            </>
    )
}
export default Comments