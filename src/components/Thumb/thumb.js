import React from 'react';
import './thumb.scss';


function Thumb({ logement, onClick }) {
  const backgroundImage = logement.cover;

  const thumbStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', // Adjust as needed
  };

    return (
      <div className="thumb" onClick={onClick} style={thumbStyle}>
        <div className="thumb-text">
          <h2>{logement.title}</h2>
        </div>
      </div>
    );
  };
  
  export default Thumb;
  
  