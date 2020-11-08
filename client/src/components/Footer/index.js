import React from 'react';


const Footer = () => {
  const footerStyles = {
    backgroundColor: 'DodgerBlue',
    padding: '20px',
    fontFamily: 'Arial'
    
  }

  return (
    <footer style={footerStyles}>
      <div >&copy;2020 by Team Avatar</div>
    </footer>
  );
};

export default Footer;
