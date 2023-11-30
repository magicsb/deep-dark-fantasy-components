import React from 'react';
import * as ReactDom from 'react-dom/client'
import Img14kb from '@/assets/imgs/14kb.jpg'
import Img24kb from '@/assets/imgs/24kb.png'
import './index.less'

const env = process.env.BASE_ENV

const App = () => {
  return (
    <div className='root'> 
      root {env}
      <div>
        <img src={Img14kb} />
        <img src={Img24kb} />
        456
      </div>
    </div>
  )
}

ReactDom
.createRoot(document.getElementById('root'))
.render(<App />)

