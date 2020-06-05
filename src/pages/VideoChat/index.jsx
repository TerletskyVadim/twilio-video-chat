import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUserName, setRoomName, setToken, getToken } from './videoChatSlice';

import Lobby from '../Lobby';
import Room from '../Room';

const VideoChat = () => {
  const dispatch = useDispatch();

  const token = useSelector(({ videoChat: { token } }) => token);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const userName = event.target.userName.value;
      const roomName = event.target.roomName.value;

      dispatch(
        getToken({
          identity: userName,
          room: roomName,
        })
      );

      dispatch(setUserName(userName));
      dispatch(setRoomName(roomName));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(setToken(null));
  }, [dispatch]);

  return token ? (
    <Room token={token} handleLogout={handleLogout} />
  ) : (
    <Lobby handleSubmit={handleSubmit} />
  );
};

export default VideoChat;
