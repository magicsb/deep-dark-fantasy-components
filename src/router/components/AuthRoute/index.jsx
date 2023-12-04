import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = (props) => {
  const { children } = props;

  const [isLogin, setIsLogin] = useState(true);

  return (
    isLogin ? children : <Navigate to='/login' />
  )
}

export default AuthRoute;