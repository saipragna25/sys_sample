import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Replace this URL with the correct back-end API endpoint
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data.message);
    } else {
      setMessage("Login failed");
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="login-card">
          <h2 className="card-title">Health Club Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
          <p id="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
