import React from 'react';
import { Segment, Container } from 'semantic-ui-react';


const Footer = () => {
  return (
    <Segment size="huge" style={{backgroundColor: '#c68c27'}}>
      <Container>
        <div >&copy;2020 by Team Avatar</div>
      </Container>
    </Segment>
  );
};

export default Footer;
