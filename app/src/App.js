import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [journeyId, setJourneyId] = useState('');
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [journeys, setJourneys] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/journeys')
      .then(res => {
        setJourneys(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      journeyId,
      userId,
      startAt: new Date(`${date} ${time}`).toISOString()
    }

    axios.post('http://localhost:3001/api/journey/schedule', data)
      .then(res => {
        alert('submitted');
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div className="App">
      <div className="scheduler">
        <div>
          <h1>Scheduler</h1>
        </div>

        <div className="scheduler__select">
          <select onChange={(e) => setJourneyId(e.target.value)} defaultValue="">
            <option value="" disabled>Select Journey</option>
            {journeys.map(journey => (
              <option value={journey._id}>{journey.name}</option>
            ))}
          </select>

          <select onChange={(e) => setUserId(e.target.value)} defaultValue="">
            <option value="" disabled>Select User</option>
            {users.map(user => (
              <option value={user._id}>{user.name}</option>
            ))}
          </select>
        </div>

        <div>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <input type="time" onChange={(e) => setTime(e.target.value)} />
        </div>
        
        <div>
          <button onClick={handleSubmit}>
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
