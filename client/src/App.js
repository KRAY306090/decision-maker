import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';


import Home from './pages/Home';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
       <div>
         <Nav/>
         <div>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/dashboard" component={Dashboard} />
             <Route exact path="/create" component={Create} />
           </Switch>
         </div>
        <Footer/>
       </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
