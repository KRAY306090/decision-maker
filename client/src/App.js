import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Background from './assets/background.jpg';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Home from './pages/Home';
import EightBall from './pages/EightBall'
import Fortune from './pages/Fortune'

// import { StoreProvider } from "./utils/GlobalState"


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
       <div className="chess" >
         {/* <StoreProvider> */}
          <Nav/>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/magic8ball" component={EightBall} />
                <Route exact path="/fortune" component={Fortune} />
              </Switch>
            </main>
        {/* </StoreProvider> */}
        <Footer/>
       </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
