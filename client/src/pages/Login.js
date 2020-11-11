import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid textAlign='center' className="html" style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Login to your account
      </Header>
        <Form size='large' onSubmit={handleFormSubmit} className="credentials">
          <Segment stacked>
            <Form.Input
              className='form-input'
              name='email'
              type='email'
              id='email'
              fluid icon='user'
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

            <Button type="submit" fluid size='large'>
              Login
          </Button>
          </Segment>
        </Form>
        {error && <div>Login failed</div>}
        <Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
