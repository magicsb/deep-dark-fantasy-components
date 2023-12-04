import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routerConfigs } from './router.config'


const Router = (props) => {

  const router = createHashRouter(routerConfigs);

  return (
    <RouterProvider router={router}/>
  )
}

export default Router;