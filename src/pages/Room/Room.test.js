import React from 'react';
import { render, userEvent, cleanup, screen } from '../../test-utils';

import Room from './index';

const mockRoom = {
  localParticipant: {
    sid: 'test-user',
    identity: 'Local Test',
  },
};
const mockParticipants = [{ sid: 'test-participant', identity: 'Remote Test' }];

jest.mock('../Room/hooks/useVideo.js', () => () => [mockRoom, mockParticipants]);
jest.mock('../Room/components/Participant/hooks/useMediaTracks.js', () => () => [null, null]);

afterEach(cleanup);

const renderUsage = (props = {}) => ({
  ...render(<Room {...props} />, { videoChat: { roomName: 'test-room' } }),
});

it('should render room with participants', () => {
  renderUsage();

  expect(screen.queryAllByTestId('participant-name').length).toEqual(2);
});

it('should display participants correctly', () => {
  renderUsage();

  expect(screen.queryAllByTestId('participant-name')[0]).toHaveTextContent('Local Test');
  expect(screen.queryAllByTestId('participant-name')[1]).toHaveTextContent('Remote Test');
});

it('should perform logout action', () => {
  const handleLogout = jest.fn();

  renderUsage({ handleLogout });

  userEvent.click(screen.getByTestId('logout-button'));

  expect(handleLogout).toHaveBeenCalled();
});
