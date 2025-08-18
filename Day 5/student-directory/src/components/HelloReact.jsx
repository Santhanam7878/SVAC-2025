import React from 'react';

const HelloReact = () => {
  return (
    <div className="component-section">
      <h1>Hello, React!</h1>
      <p>This is our first JSX component demonstrating the basics of React.</p>
      <div className="jsx-demo">
        <h3>JSX Features Demonstrated:</h3>
        <ul>
          <li>HTML-like syntax in JavaScript</li>
          <li>className instead of class</li>
          <li>Self-closing tags</li>
          <li>Single root element</li>
        </ul>
      </div>
    </div>
  );
};

export default HelloReact;
