import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { get, post } from '@/services/axios.config'

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const getData = () => {
    get('/query', {
      id: 123
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  const Upload = () => {
    post('/upload', {
      id: 123
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      Home
      <div>
        <Button type='primary' onClick={() => { navigate('/test') }}>jump to</Button>
      </div>
      <div>
        <Button type='primary' onClick={getData}>下载</Button>
      </div>
      <div>
        <Button type='primary' onClick={Upload}>上传</Button>
      </div>
    </div>
  )
}

export default Home;