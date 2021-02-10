import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={50}>
        <div className="font_righteous footer_logo_venue">
          Big Events
        </div>
        <div className="footer_copyright">
          Big Events 2021. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;