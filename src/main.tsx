// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { Authenticator } from "@aws-amplify/ui-react";
// import {client} from './apolloClient';
// import { ApolloProvider } from '@apollo/client';

// // import { Amplify } from "aws-amplify";
// // import outputs from '../amplify_outputs.json'; // JSON file containing Amplify outputs
// // import { AmplifyOutputs } from './types/amplifyOutputs'; // Adjust the path to import from the types directory

// // Ensure the type matches the imported JSON
// // const amplifyOut: AmplifyOutputs = outputs;

// // // Configure Amplify with the outputs
// // Amplify.configure(amplifyOut);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <Authenticator.Provider>
//       <App />
//       </Authenticator.Provider>
//   </ApolloProvider>
//   </React.StrictMode>
// );

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client';


// // Removed Authenticator import
// // import { Authenticator } from "@aws-amplify/ui-react"; 



Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://cjiaohomsbbmvf5h6opbvp5dra.appsync-api.ap-south-1.amazonaws.com/graphql',
      region: 'ap-south-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-f4ay6e4ztujcfjdqwlpxjgtm3oq'
    }
  }
});

// // src/index.tsx or src/index.js
// // import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './aws-config'; // Import the configuration file

// // ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App /> {/* Removed Authenticator.Provider */}
//     </ApolloProvider>
//   </React.StrictMode>
// );

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { client } from './apolloClient';
// import { ApolloProvider } from '@apollo/client';
// Removed Authenticator import
// import { Authenticator } from "@aws-amplify/ui-react"; 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App /> {/* Removed Authenticator.Provider */}
    </ApolloProvider>
  </React.StrictMode>
);