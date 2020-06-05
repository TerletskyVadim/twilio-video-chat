import React from 'react';
import { render, cleanup, screen } from './test-utils';

import App from './App';

afterEach(cleanup);

it('should render without crashing', () => {
  render(<App />);

  expect(screen.getByText('Twilio Video Chat')).toBeDefined();
});
