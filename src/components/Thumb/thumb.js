import React from 'react';
import './thumb.scss';


function Thumb({ text, onClick }) {
    return (
      <div className="thumb" onClick={onClick}>
        <div className="thumb-text">
          <h2>{text}</h2>
        </div>
      </div>
    );
  };
  
  export default Thumb;
  