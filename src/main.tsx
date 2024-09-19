import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { AmplifyOutputs } from "./types/amplifyOutputs";

// Ensure the type matches the imported JSON
const amplifyOutputs: AmplifyOutputs = outputs;

Amplify.configure(amplifyOutputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
