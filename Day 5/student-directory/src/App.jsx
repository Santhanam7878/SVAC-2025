import React, { useState } from 'react';
import './App.css';
import HelloReact from './components/HelloReact';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';
import EventDemo from './components/EventDemo';
import StudentDirectory from './components/StudentDirectory';

function App() {
  const [currentSection, setCurrentSection] = useState('hello');

  const students = [
    { id: 1, name: 'Alice Johnson', course: 'Computer Science' },
    { id: 2, name: 'Bob Smith', course: 'Mathematics' },
    { id: 3, name: 'Carol Davis', course: 'Physics' },
    { id: 4, name: 'David Wilson', course: 'Engineering' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Learning Journey</h1>
        <nav>
          <button onClick={() => setCurrentSection('hello')}>Hello React</button>
          <button onClick={() => setCurrentSection('studentCard')}>Student Card</button>
          <button onClick={() => setCurrentSection('studentList')}>Student List</button>
          <button onClick={() => setCurrentSection('events')}>Events Demo</button>
          <button onClick={() => setCurrentSection('directory')}>Student Directory</button>
        </nav>
      </header>

      <main>
        {currentSection === 'hello' && <HelloReact />}
        {currentSection === 'studentCard' && <StudentCard name="John Doe" course="React Basics" />}
        {currentSection === 'studentList' && <StudentList students={students} />}
        {currentSection === 'events' && <EventDemo />}
        {currentSection === 'directory' && <StudentDirectory />}
      </main>
    </div>
  );
}

export default App;
