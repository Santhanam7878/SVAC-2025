import React, { useState } from 'react';
import StudentCard from './StudentCard';
import './StudentDirectory.css';

const StudentDirectory = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleAddStudent = (e) => {
    e.preventDefault();
    
    if (name.trim() && course.trim()) {
      const newStudent = {
        id: nextId,
        name: name.trim(),
        course: course.trim()
      };
      
      setStudents([...students, newStudent]);
      setName('');
      setCourse('');
      setNextId(nextId + 1);
    }
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="student-directory">
      <h2>Student Directory</h2>
      
      <form onSubmit={handleAddStudent} className="add-student-form">
        <div className="form-group">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course name"
            required
          />
        </div>
        
        <button type="submit" className="add-btn">
          Add Student
        </button>
      </form>

      <div className="students-container">
        <h3>Registered Students ({students.length})</h3>
        
        {students.length === 0 ? (
          <p className="no-students">No students registered yet. Add your first student above!</p>
        ) : (
          <div className="students-grid">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                course={student.course}
                onDelete={handleDeleteStudent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDirectory;
