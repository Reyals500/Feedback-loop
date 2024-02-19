import { useSelector } from 'react-redux';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Review({fetchfeedback}) {
    const feedback = useSelector(store => store.feedbacks)
    const feeling = useSelector(store => store.feelings)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    // const [feeling, setFeeling] = useState('');
    // const [understanding, setUnderstanding] = useState('');
    // const [support, setSupport] = useState('');
    // const [comments, setComments] = useState('');
    const history = useHistory()
    const handleSubmit = () => {
        
        const newFeedback = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        console.log("Adding feedback", newFeedback);
        axios.post('/api/feedback', newFeedback)
        .then((response) => {

        })
        .catch(error => {
            console.log('Error in POST',error)
        })
    }
    const handleClick = () => {
        history.push('/thankyou')
    }
    const handleAll = () => {
        handleClick()
        handleSubmit()
    }


    
    return (
        <>
        <div>
            <h3>Review</h3>
            <ul>
               <li>Feeling: {feeling}</li>
               <li>Understanding: {understanding}</li>
               <li>Support: {support}</li>
               <li>Comments: {comments}</li>
               <button data-testid="next" onClick={handleAll}>Submit</button>
            </ul>
            
        </div>
        </>
    )
}
export default Review