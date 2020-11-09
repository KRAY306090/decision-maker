import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Form, Container, Grid, Image, Divider } from 'semantic-ui-react';
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
    <main>
      <Container>
        <h2>Sign Up</h2>
        <Form onSubmit={handleFormSubmit}>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field>
                  <label>Username</label>
                  <input
                    className="form-input"
                    placeholder='Your username'
                    name='username'
                    id='username'
                    value={formState.username}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <label>Email</label>
                  <input
                    className='form-input'
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Form.Field>
                  <label>Password</label>
                  <input
                    className='form-input'
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row >
            <h3>Choose an Avatar</h3>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src={placeholder} size='tiny' />
                <Divider hidden />
              </Grid.Column>
              <Grid.Column>
                <Image src={placeholder} size='tiny' />
                <Divider hidden />
              </Grid.Column>
              <Grid.Column>
                <Image src={placeholder} size='tiny' />
                <Divider hidden />
              </Grid.Column>
            </Grid.Row>
            <Button type='submit'>
              Submit
              </Button>
          </Grid>
        </Form>
        {error && <div>Sign up failed</div>}
      </Container>
    </main>
  );
};

export default Signup;