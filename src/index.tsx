import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';
import { createUploadLink } from 'apollo-upload-client';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
//@ts-ignore
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createUploadLink({
  uri: 'https://apidev.universitesi.io/graphql',
});

const client = new ApolloClient({
  uri: 'https://apidev.universitesi.io/graphql',
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <ApolloProvider client={client}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
