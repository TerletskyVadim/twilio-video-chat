import React from 'react';
import { render, cleanup, userEvent, fireEvent, screen } from '../../test-utils';

import Lobby from './index';

afterEach(cleanup);

it('should update the form fields and submit the form', async () => {
  const onSubmit = jest.fn();

  render(<Lobby handleSubmit={onSubmit} />);

  const nameInput = screen.getByTestId('name-input');
  const roomInput = screen.getByTestId('room-input');

  await userEvent.type(nameInput, 'Test Name');
  await userEvent.type(roomInput, 'Test Room');

  expect(nameInput).toHaveAttribute('value', 'Test Name');
  expect(roomInput).toHaveAttribute('value', 'Test Room');

  fireEvent.submit(screen.getByTestId('lobby-form'));

  expect(onSubmit).toHaveBeenCalled();
});
