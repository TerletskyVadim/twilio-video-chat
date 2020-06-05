import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../../common/styled';

const LobbyForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
`;
const FormField = styled.div`
  width: 100%;
  margin-bottom: 1em;
  & > label {
    display: block;
    margin-bottom: 0.3em;
  }
  & > input {
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 0.4em;
    border-radius: 6px;
    border: 1px solid #333e5a;
  }
`;

const Lobby = ({ handleSubmit }) => {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleUserNameChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);
  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  return (
    <LobbyForm data-testid="lobby-form" onSubmit={handleSubmit}>
      <h2 data-testid="lobby-title">Enter a room</h2>
      <FormField>
        <label htmlFor="name">Name:</label>
        <input
          data-testid="name-input"
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserNameChange}
          required
        />
      </FormField>

      <FormField>
        <label htmlFor="room">Room name:</label>
        <input
          data-testid="room-input"
          type="text"
          name="roomName"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </FormField>

      <Button type="submit">Submit</Button>
    </LobbyForm>
  );
};

export default Lobby;
