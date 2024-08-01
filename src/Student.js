import React from 'react';

const Student = ({ name, backgroundColor, picture }) => {
  const studentStyle = {
    backgroundColor: backgroundColor,
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff'
  };

  return (
    <div style={studentStyle}>
      <h1>{name}</h1>
      <img src={picture} alt={`${name}`} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
    </div>
  );
}

export default Student;
