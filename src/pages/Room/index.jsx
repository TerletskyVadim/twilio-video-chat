import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Participant from './components/Participant';
import { Button } from '../../common/styled';

import useVideo from './hooks/useVideo';

const Container = styled.div`
  position: relative;

  & > h3 {
    text-align: center;
    font-weight: 300;
    margin-bottom: 1em;
  }
`;
const LogOutButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 20px;
`;
const LocalParticipantContainer = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;
const RemoteParticipantsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 2em 2em;
`;

const Room = ({ handleLogout }) => {
  const roomName = useSelector(({ videoChat: { roomName } }) => roomName);
  const token = useSelector(({ videoChat: { token } }) => token);

  const [room, participants] = useVideo(token, roomName);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <Container>
      <h3 data-testid="room-title">Room: {roomName}</h3>
      <LogOutButton data-testid="logout-button" onClick={handleLogout}>
        Log out
      </LogOutButton>
      <LocalParticipantContainer>
        {room ? (
          <Participant key={room.localParticipant.sid} participant={room.localParticipant} />
        ) : (
          ''
        )}
      </LocalParticipantContainer>
      <h3>Remote Participants</h3>
      <RemoteParticipantsContainer>{remoteParticipants}</RemoteParticipantsContainer>
    </Container>
  );
};

export default Room;
