import React, { useState } from 'react';

const EventDemo = () => {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleWelcomeClick = () => {
    alert('Welcome to React!');
  };

  const handleCounterClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You typed: ${message}`);
    setMessage('');
  };

  return (
    <div className="component-section">
      <h2>Events in React</h2>
      
      <div className="event-demo">
        <h3>1. Simple Button Click</h3>
        <button onClick={handleWelcomeClick} className="demo-btn">
          Click for Welcome Alert
        </button>

        <h3>2. Counter with State</h3>
        <button onClick={handleCounterClick} className="demo-btn">
          Click Count: {clickCount}
        </button>

        <h3>3. Form Handling</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="demo-input"
          />
          <button type="submit" className="demo-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDemo;
