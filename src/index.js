import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './utils/theme';
import GlobalStyles from './utils/global';

// Component imports
import Loader from './components/UI/Loader/Loader';

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById('root');

// Renders when the store hasn't received a promise
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);

// Renders when the store receives a promise
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
