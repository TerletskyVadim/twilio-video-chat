import React from 'react';
import styled from 'styled-components';

import useMediaTracks from './hooks/useMediaTracks';

const Container = styled.div`
  background: #333e5a;
  padding: 10px;
  border-radius: 6px;
  display: inline-block;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
const ParticipantName = styled.h3`
  text-align: center;
  padding-bottom: 0.5em;
  color: #fff;
`;
const Video = styled.video`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto;
  border-radius: 6px;
`;

const Participant = ({ participant }) => {
  const [videoRef, audioRef] = useMediaTracks(participant);

  return (
    <Container>
      <ParticipantName data-testid="participant-name">{participant.identity}</ParticipantName>
      <Video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} />
    </Container>
  );
};

export default Participant;
