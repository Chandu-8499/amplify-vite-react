import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';
import outputs from '../amplify_outputs.json';

// If the API details are missing, you'll need to add them manually or retrieve them from AWS Amplify
const GRAPHQL_API_URL = 'https://your-appsync-api-url/graphql'; // Replace this with your actual AppSync API URL
const API_KEY = 'your-appsync-api-key'; // Replace with your actual API key
const AWS_REGION = outputs.auth.aws_region; // Using region from auth section in amplify_outputs.json

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_API_URL,
  });

  const authLink = createAuthLink({
    url: GRAPHQL_API_URL,
    region: AWS_REGION,
    auth: {
      type: 'API_KEY',
      apiKey: API_KEY,
    },
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
