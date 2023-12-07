import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get } from '@/services/axios.config'

export const getUserData = createAsyncThunk('user/getUserData', async (params) => {
  console.log('params', params)
  const res = await get('/query', {
    id: 123
  });
  return res
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '123'
  },
  reducers: {
    'update': (state, action = {}) => {
      const { payload } = action;
      state.name = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default userSlice.reducer;