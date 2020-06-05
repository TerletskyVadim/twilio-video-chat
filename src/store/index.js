import { configureStore, combineReducers } from '@reduxjs/toolkit';

import videoChatReducer from '../pages/VideoChat/videoChatSlice';

export const rootReducer = combineReducers({
  videoChat: videoChatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
