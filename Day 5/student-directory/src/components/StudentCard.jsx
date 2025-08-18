import React from 'react';
import './StudentCard.css';

const StudentCard = ({ name, course, onDelete, id }) => {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      {onDelete && (
        <button 
          className="delete-btn" 
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default StudentCard;
