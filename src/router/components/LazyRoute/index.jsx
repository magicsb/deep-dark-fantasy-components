import React from 'react';
import { Spin } from 'antd'

const LazyRoute = (props) => {
  const { children } = props;

  return (
    <React.Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      }
    >
      {children}
    </React.Suspense>
  )
}

export default LazyRoute;