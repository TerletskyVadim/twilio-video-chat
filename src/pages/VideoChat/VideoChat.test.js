import React from 'react';
import { render, screen, cleanup } from '../../test-utils';

import { initialState } from './videoChatSlice';

import VideoChat from './index';

jest.mock('../Room/hooks/useVideo.js', () => () => [null, []]);

afterEach(cleanup);

it('should render Lobby if there are no token', () => {
  render(<VideoChat />);

  expect(screen.getByTestId('lobby-title')).toBeDefined();
});

it('should render Room if there is a token', () => {
  render(<VideoChat />, { initialState: { videoChat: { ...initialState, token: 'test-token' } } });

  expect(screen.getByTestId('room-title'));
});
