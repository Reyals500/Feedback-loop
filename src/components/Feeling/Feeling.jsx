import { useState } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from "../Understanding/Understanding";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";


const Feeling = (event) => {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch()
    //put a history.push('')
    const history = useHistory()
    const handleClick = () => {
        
        dispatch({type: "SET_FEELING", payload: feeling})
        history.push('/understanding')
        setFeeling('')
    }
    // const changeFeeling = (event) => {
    //     setFeeling({
    //         ...feeling,
    //         feeling: event.target.value
    //     })
    // }

    return (
        <>
        <h3>1 of 4 pages</h3>
        <h3>Feeling</h3>
            <input
                data-testid="input"
                required
                type="text"
                placeholder="Feeling"
                value={feeling}
                onChange={(event) =>
                setFeeling(event.target.value)}
            />
            <button data-testid="next" onClick={() => handleClick(feeling.id)}>NEXT</button> 
          
        </>
    )
}
export default Feeling