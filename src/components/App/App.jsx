import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Review from '../Review/Review';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';


function App() {
  // const dispatch = useDispatch()
  
  // const fetchFeedback = () => {
  //   axios.get('/api/feedback')
  //   .then(response => {
  //     console.log('Feedbacks', response.data);
  //     dispatch({type: 'SET_FEEDBACK', payload:response.data})
  //   })
  //   .catch(error => {
  //     console.log("Errorin GET",error)
  //   })
  // }
  // useEffect(fetchFeedback, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path='/' exact>
          <Feeling />
        </Route>
        <Route path='/understanding'> 
          <Understanding />
        </Route>
        <Route path='/support'> 
          <Support />
        </Route>
        <Route path='/comments'> 
          <Comments />
        </Route>
        <Route path='/review'> 
          <Review />
        </Route>
        <Route path='/thankyou'> 
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
