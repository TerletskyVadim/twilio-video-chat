import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToken } from '../../api';

export const initialState = {
  token: '',
  userName: '',
  roomName: '',
};

export const getToken = createAsyncThunk('videoChat/getToken', async (connectData) => {
  const { token } = await fetchToken(connectData);

  return token;
});

const videoChatSlice = createSlice({
  name: 'videoChat',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setRoomName: (state, action) => {
      state.roomName = action.payload;
    },
  },
  extraReducers: {
    [getToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, setUserName, setRoomName } = videoChatSlice.actions;

export default videoChatSlice.reducer;
