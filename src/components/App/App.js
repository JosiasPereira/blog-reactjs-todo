import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../Layout';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import LogOut from '../../pages/LogOut';
import Profile from '../../pages/Profile';
import CreateTodo from '../../pages/Todo/Create';
import ListTodo from '../../pages/Todo/List';

const App = ({loggedIn}) =>{
  let routes;

  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
/*
  if(loggedIn){
    routes=(
      <Switch>
        
        <PrivateRoute exact path="/sair" component={LogOut}  /> 
        <PrivateRoute exact path="/profile" component={Profile}  /> 
        <PrivateRoute path="/todos" component={()=><h1>todos</h1>}  />  
        <Route exact path="/" component={Home}  />                          
      </Switch>
    )
  }
  else{
    routes=(
      <Switch>
        <Route exact path="/" component={Home}  />        
        <Route exact path="/login" component={Login}  />
        <Route exact path="/signup" component={SignUp}  />  
        <PrivateRoute exact path="/sair" component={LogOut}  /> 
        <PrivateRoute exact path="/profile" component={Profile}  /> 
        <PrivateRoute path="/todos" component={()=><h1>todos</h1>}  />      
      </Switch>
    )
  };
  */

  routes=(
    <Switch>
      <Route path="/login" component={Login}  />
      <Route exact path="/" component={Home}  />              
      <Route exact path="/signup" component={SignUp}  />  
      <PrivateRoute exact path="/logout" component={LogOut}  /> 
      <PrivateRoute exact path="/profile" component={Profile}  /> 
      <PrivateRoute path="/todos" component={ListTodo}  />      
    </Switch>
  )


  return (
    
    <Layout>      
      {routes}
    </Layout>

    
    
  );
}


const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export  default connect(mapStateToProps)(App);
