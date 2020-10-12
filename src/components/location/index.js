import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.9563956791533!2d28.05142598571169!3d45.43301718325491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6deff999e7767%3A0x9c9d064fdadd9f38!2sPlace!5e0!3m2!1sen!2sro!4v1602528718347!5m2!1sen!2sro" 
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