import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rootReducer } from './store';

const render = (
  component,
  { initialState = {}, store = createStore(rootReducer, initialState), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render, userEvent };
