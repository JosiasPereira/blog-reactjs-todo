import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

export function App() {
  let routes;

  routes=(
    <Switch>
      <Route exact path="/sair" component={()=><h1>Olá mundo</h1>}  />
      <Route exact path="/login" component={Login}  />
      <Route exact path="/" component={Home}  />
    </Switch>
  )


  return (
    
    <Layout>
      {routes}
    </Layout>

    
    
  );
}

