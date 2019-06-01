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
import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail';
import RecoverPassword from './containers/Auth/RecoverPassword/RecoverPassword';
import { AUTH_END } from './store/actions/actionTypes';

const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path='/verify-email' component={withRouter(VerifyEmail)} />
        <Route exact path='/logout' component={withRouter(Logout)} />

        {/* Every route that doesn't match any of the above will redirect to verify email */}
        <Redirect to='/verify-email' />
      </Switch>
    );
  } else if (loggedIn) {
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
        <Route exact path='/recover' component={withRouter(RecoverPassword)} />

        {/* Every route that doesn't match any of the above will redirect to login */}
        <Redirect to='/login' />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
