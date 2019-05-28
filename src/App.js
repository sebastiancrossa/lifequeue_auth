import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// Component imports
import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';
import Signup from './containers/Auth/Signup/Signup';
import { AUTH_END } from './store/actions/actionTypes';

const App = ({ loggedIn }) => {
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path='/' component={withRouter(Todos)} />
        <Route exact path='/logout' component={withRouter(Logout)} />

        {/* Every route that doesn't match any of the above will redirect to home */}
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/login' component={withRouter(Login)} />
        <Route exact path='/signup' component={withRouter(Signup)} />

        {/* Every route that doesn't match any of the above will redirect to login */}
        <Redirect to='/login' />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null
});

export default connect(mapStateToProps)(App);
