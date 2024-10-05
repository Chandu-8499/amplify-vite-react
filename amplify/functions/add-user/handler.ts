import type { Handler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

const dynamoDB = new DynamoDB.DocumentClient();

export const handler: Handler = async (event) => {
  // Extract the user's attributes from the event
  const { userName, request: { userAttributes } } = event;

  const params = {
    TableName: 'Users',  // Specify your DynamoDB table name here
    Item: {
      userId: userName,   // Cognito user ID or userName
      email: userAttributes.email, // User's email from Cognito attributes
      name: userAttributes.name,  // Additional attributes
      // Add any other attributes you want to store
    },
  };

  try {
    // Put the new user into DynamoDB
    await dynamoDB.put(params).promise();
    console.log(`User ${userName} added successfully.`);
  } catch (error) {
    console.error('Error adding user:', error);
    throw new Error('Error adding user to DynamoDB');
  }

  return event;
};

