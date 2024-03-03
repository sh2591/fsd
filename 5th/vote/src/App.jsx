import  { useState } from 'react';
import './App.css'; 

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const checkEligibility = () => {
    if (age >= 18) {
      setMessage(`you are eligible to vote!`);
    } else {
      setMessage(`you are not eligible to vote yet.`);
    }
  };

  return (
    <div className="container">
      <h1>Check Your Voting Eligibility</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={checkEligibility}
        >
          Check Eligibility
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
