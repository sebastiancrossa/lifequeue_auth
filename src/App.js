import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Component imports
import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' component={Home} />
          <Route exact path='/todos' component={Todos} />

          {/* Every route that doesn't match any of the above will redirect to home */}
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
