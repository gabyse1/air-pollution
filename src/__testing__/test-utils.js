import React from 'react';
import { PropTypes } from 'prop-types';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import citiesReducer from '../redux/cities/citiesReducer';
import forecastReducer from '../redux/forecast/forecastReducer';

const customRender = (ui, {
  preloadedState,
  store = configureStore({
    reducer: { citiesReducer, forecastReducer },
    preloadedState,
  }),
  ...renderOptions
} = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
