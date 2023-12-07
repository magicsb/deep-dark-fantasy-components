import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { get, post } from '@/services/axios.config'
import { getUserData } from '@/store/userSlice'

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(getUserData({ user: '333' }))
  }

  const Upload = () => {
    post('/upload', {
      id: 123
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  const updateUserName = (value) => {
    dispatch({
      type: 'user/update',
      payload: value
    })
    
    console.log('update');
  }

  return (
    <div>
      Home
      <div>
        userName: {user.name}
      </div>
      <div>
        <Button type='primary' onClick={() => { navigate('/test') }}>jump to</Button>
      </div>
      <div>
        <Button type='primary' onClick={getData}>get</Button>
      </div>
      <div>
        <Button type='primary' onClick={Upload}>上传</Button>
      </div>
      <div>
        <Input onChange={e => updateUserName(e.target.value)} />
      </div>
    </div>
  )
}

export default Home;