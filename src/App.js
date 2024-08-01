import React from 'react';
import Student from './Student';
import download from './download.jpg'; // Import your image

const App = () => {
  return (
    <div>
      <Student 
        name="John Doe" 
        backgroundColor="green" 
        picture="https://via.placeholder.com/150" 
      />
      <Student 
        name="Max V" 
        backgroundColor="blue" 
        picture={download} // Use your imported image
      />
      <Student 
        name="Agam Li" 
        backgroundColor="red" 
        picture="https://via.placeholder.com/150" 
      />
    </div>
  )
}

export default App;
