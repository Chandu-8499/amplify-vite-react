
import { Authenticator } from "@aws-amplify/ui-react";


import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

import React from "react";

import "./index.css";
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client';



import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Authenticator.Provider>
      <App /> 
      </Authenticator.Provider>
    </ApolloProvider>
  </React.StrictMode>
);