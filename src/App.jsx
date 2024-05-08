import React, { useState, useEffect } from 'react';
import './App.css'; 

const Square = () => {
  const [size, setSize] = useState(100); 

 
  const increaseSize = () => {
     if(size < 120){
      setSize(size + 10);
    }
  };

  const decreaseSize = () => {
     if(size > 60){
      setSize(size - 10); 
    }
  };

 
  useEffect(() => {
    
    document.documentElement.style.setProperty('--square-size', `${size}px`);

  }, [size]);

  return (
    <div className="container">
      <div style={{width:size, height:size, backgroundColor:'blue'}}></div>
      <div className="buttons">
        <button onClick={increaseSize}>Increase</button>
        <button onClick={decreaseSize}>Decrease</button>
      </div>
    </div>
  );
}

export default Square;
