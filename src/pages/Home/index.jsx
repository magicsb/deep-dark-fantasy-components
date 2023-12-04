import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Home = (props) => {

  const navigate = useNavigate();

  return (
    <div>
      Home
      <div>
        <Button type='primary' onClick={() => { navigate('/test') }}>jump to</Button>
      </div>
    </div>
  )
}

export default Home;