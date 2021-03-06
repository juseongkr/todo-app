import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import MenuBar from './components/MenuBar';
import Board from './components/Board';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AlertBar from './components/AlertBar';
import PostButton from './components/PostButton';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Todo App</title>
      </Helmet>
      <AlertBar />
      <Router>
        <MenuBar />
        <Switch>
          <Route path="/signin" render={ () => <SignIn /> } />
          <Route path="/signup" render={ () => <SignUp /> } />
          <Route path="/" render={ () => <Board /> } exact />
        </Switch>
      </Router>
      <PostButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;