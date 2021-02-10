import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12141.327279440799!2d-3.6179202!3d40.4679236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x801ce4be7e7a5eec!2sIFEMA%20Feria%20de%20Madrid!5e0!3m2!1sro!2sro!4v1612819283538!5m2!1sro!2sro" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        allowFullScreen=""></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
    </div>
  );
};

export default Location;