import React from 'react';


const Footer = () => {
  const footerStyles = {
    backgroundColor: 'DodgerBlue',
    padding: '20px',
    fontFamily: 'Arial',
    height: '50px',
    marginTop: '-50px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%'
  }

  return (
    <footer style={footerStyles}>
      <div >&copy;2020 by Team Avatar</div>
    </footer>
  );
};

export default Footer;
