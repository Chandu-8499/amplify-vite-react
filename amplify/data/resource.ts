import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

// Define schema for Product model
const schema = a.schema({
  Product: a.model({
    name: a.string().required(),          // Product name (required)
    description: a.string().required(),   // Product description (required)
    price: a.float().required(),          // Product price (required, floating-point number)
    stock: a.integer().required(),            // Stock count (required, integer)
    image: a.string()                     // URL for product image (optional)
  })
  .authorization(allow => [allow.publicApiKey()]) // Authorization: public API key
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// Define data resource to be deployed
export const data = defineData({
  schema,  // Attach the schema
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',  // Set default authorization mode to API key
    apiKeyAuthorizationMode: { expiresInDays: 30 }  // API key expiration set to 30 days
  }
});
