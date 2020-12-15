import React from 'react';
import { Route } from 'react-router-dom';
import { useAppContext } from '../../store';


function LoginRequiredRoute({component:Component, kwargs}) {
  cosnt {store:{isAuthenticated}} = useAppContext();

  console.log("isAuthenticated:", isAuthenticated);

  if (isAuthenticated) {

  }else {

  }
  return (
    <Route {...kwargs} render={props => {
      if (isAuthenticated) {
        return <Component {...props}/>;
      }else {
        return (
          <Redirect to={{
            pathname:"./accounts/login",
            state: {from: props.location}
          }}/>
        );
      }
    }}/>
  );
}

export default LoginRequiredRoute;