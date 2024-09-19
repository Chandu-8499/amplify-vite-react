// src/types/custom.d.ts
import { AmplifyOutputs } from "./amplifyOutputs"; // Adjust the path as necessary

declare module "*.json" {
  const value: AmplifyOutputs;
  export default value;
}
