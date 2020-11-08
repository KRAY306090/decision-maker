import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyles = {
    backgroundColor: 'DodgerBlue',
    padding: '20px',
    fontFamily: 'Arial',
    height: '50px',
  }

  const linkStyles = {
    listStyleType: 'none',
    position: 'relative',
    left: '30px',
    display: 'flex',
    flexPosition: '1',
    justifyContent: 'center',
  }
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul style={{listStyleType: 'none'}}>
            
          <li>
            <Link to="/decisionHistory">
              Decision History
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul style={linkStyles}>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }




  return (
        <nav style={navStyles}>
      {showNavigation()}
    </nav>
  );
};

export default Nav;