import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  return (
    <div className="component-section">
      <h2>Student List Demo</h2>
      <p>This demonstrates rendering lists using .map() in React:</p>
      
      <div className="students-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
          />
        ))}
      </div>
      
      <div className="code-example">
        <h4>Code Example:</h4>
        <pre>
{`students.map((student) => (
  <StudentCard
    key={student.id}
    name={student.name}
    course={student.course}
  />
))`}
        </pre>
      </div>
    </div>
  );
};

export default StudentList;
