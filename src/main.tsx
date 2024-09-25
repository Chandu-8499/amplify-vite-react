import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {client} from './apolloClient';
import { ApolloProvider } from '@apollo/client';

// import { Amplify } from "aws-amplify";
// import outputs from '../amplify_outputs.json'; // JSON file containing Amplify outputs
// import { AmplifyOutputs } from './types/amplifyOutputs'; // Adjust the path to import from the types directory

// Ensure the type matches the imported JSON
// const amplifyOut: AmplifyOutputs = outputs;

// // Configure Amplify with the outputs
// Amplify.configure(amplifyOut);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>
);
