import React from 'react';
import * as ReactDom from 'react-dom/client'
import Img14kb from '@/assets/imgs/14kb.jpg'
import Img24kb from '@/assets/imgs/24kb.png'
import { Button } from 'antd';
import { Provider } from 'react-redux';
import Router from './router'
import Store from './store/store'
import '@/assets/style/global.css'
import styles from './index.less'

const env = process.env.BASE_ENV

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  )
}

ReactDom
.createRoot(document.getElementById('root'))
.render(<App />)

