import { defineFunction } from '@aws-amplify/backend';

export const addUserToDB = defineFunction({
  name: 'add-user-to-db',
  entry: './handler.ts', // Pointing to the handler file
});
