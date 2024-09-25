import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';
import outputs from "../amplify_outputs.json";
// Rest of the code remains the same
// Create the Apollo Client configuration
const createApolloClient = () => {
  
  const httpLink = createHttpLink({
    uri: outputs.data.url,
  });

  const authLink = createAuthLink({
    url: outputs.data.url,
    region: outputs.data.aws_region,
    auth: {
      type: 'API_KEY',
      apiKey: outputs.data.api_key,
    },
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient()