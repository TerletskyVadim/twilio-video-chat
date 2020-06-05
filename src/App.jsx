import React from 'react';
import styled from 'styled-components';

import VideoChat from './pages/VideoChat';

import './global.css';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  background: #45afd3;
  color: #fff;
  text-align: center;
  flex-grow: 0;
  margin-bottom: 2em;
`;
const VideoChatContainer = styled.main`
  background: #ffffff;
  flex-grow: 1;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <h1>Twilio Video Chat</h1>
      </Header>
      <VideoChatContainer>
        <VideoChat />
      </VideoChatContainer>
    </Container>
  );
};

export default App;
