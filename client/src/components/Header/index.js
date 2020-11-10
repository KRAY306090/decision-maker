import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Nav from '../Nav'

const Header = () => {
    const logout = event => {
      event.preventDefault();
      Auth.logout();
    }
    return (
      <header>
        <div >
          <Link to="/">
            <h1>Decidr</h1>
          </Link>
  
          <Nav />

        </div>
      </header>
    );
  };
  
  export default Header;