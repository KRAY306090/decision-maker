import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import { Container, Image, Dropdown } from 'semantic-ui-react';

const Nav = () => {
  if (Auth.loggedIn()) {
    return (
      <Menu fixed='top' size="massive" style={{backgroundColor: '#c68c27'}}>
        <Container>
          <Menu.Item as='a' href="/" header>
            Decidr
        </Menu.Item>
          <Menu.Item as='a' href="/" >Home</Menu.Item>
          <Menu.Item as='a' href="/dashboard">My Decisions</Menu.Item>
          <Menu.Item as='a' href="/" onClick={() => Auth.logout()}>Logout</Menu.Item>

          <Dropdown item simple text='Tools'>
            <Dropdown.Menu>
              <Dropdown.Item href="/magic8ball">Eight Ball</Dropdown.Item>
              <Dropdown.Item href="/fortune">Fortune Teller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    );
  } else {
    return (

      <Menu fixed='top' size="massive" style={{backgroundColor: '#c68c27'}}>
        <Container>
          <Menu.Item as='a' href="/" header>
            Decidr
        </Menu.Item>
          <Menu.Item as='a' href="/login" >Login</Menu.Item>
          <Menu.Item as='a' href="/signup">Signup</Menu.Item>
        </Container>
      </Menu>


    );
  }
}

export default Nav;