import React from 'react';
import * as ReactDom from 'react-dom/client'
import Img14kb from '@/assets/imgs/14kb.jpg'
import Img24kb from '@/assets/imgs/24kb.png'
import { Button } from 'antd';
import Router from './router'
import '@/assets/style/global.css'
import styles from './index.less'

const env = process.env.BASE_ENV

const App = () => {
  return (
    <div className={styles.root}>
      <Router />
    </div>
  )
}

ReactDom
.createRoot(document.getElementById('root'))
.render(<App />)

