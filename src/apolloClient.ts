import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { createAuthLink } from 'aws-appsync-auth-link';

// Use the AppSync details you retrieved
const GRAPHQL_API_URL = 'https://cjiaohomsbbmvf5h6opbvp5dra.appsync-api.ap-south-1.amazonaws.com/graphql';
const API_KEY = 'da2-f4ay6e4ztujcfjdqwlpxjgtm3oq';
const AWS_REGION = 'ap-south-1';

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
