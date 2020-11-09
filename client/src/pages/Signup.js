import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import placeholder from '../images/placeholder.jpg';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', avatar: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log("Success!!!!!!");
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e)
    }
  };

  return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' style={{color: 'dodgerblue'}} textAlign='center'>
          Sign Up!
      </Header>
        <Form size='large' onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              className="form-input"
              placeholder='Your username'
              name='username'
              id='username'
              fluid icon='user'
              iconPosition='left'
              value={formState.username}
              onChange={handleChange}
              />
            <Form.Input
              className='form-input'
              name='email'
              type='email'
              id='email'
              fluid icon='envelope'
              iconPosition='left'
              placeholder='E-mail address'
              value={formState.email}
              onChange={handleChange} />
            <Form.Input
              className='form-input'
              name='password'
              id='password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />

            <Button type="submit" style={{color: 'dodgerblue'}} fluid size='large'>
              Sign Up
          </Button>
          </Segment>
        </Form>
        {error && <div>Sign Up failed</div>}
        <Message>
          Already a Member? <a href='/login'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;