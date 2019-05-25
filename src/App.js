import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';

// Component imports
import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import Login from './containers/Auth/Login/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={withRouter(Home)} />
        <Route exact path='/todos' component={withRouter(Todos)} />
        <Route exact path='/login' component={withRouter(Login)} />

        {/* Every route that doesn't match any of the above will redirect to home */}
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
}

export default App;
