import { a, defineData, type ClientSchema } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';

// Define the combined schema
const schema = a.schema({
  // Product model
  Product: a.model({
    name: a.string().required(),          // Product name (required)
    description: a.string().required(),   // Product description (required)
    price: a.float().required(),          // Product price (required, floating-point number)
    stock: a.integer().required(),        // Stock count (required, integer)
    image: a.string()                     // URL for product image (optional)
  }).authorization(allow => [
    allow.publicApiKey()                  // Authorization: public API key
  ]),

  // User model (attributes managed by Cognito)
  User: a.model({
    email: a.string(),                    // User's email (optional)
    profileOwner: a.string(),             // Owner of the profile
  }).authorization(allow => [
    allow.ownerDefinedIn('profileOwner'), // Authorization: Owner-based on 'profileOwner'
  ]),
})
.authorization(allow => [
  allow.resource(postConfirmation)        // Resource-based authorization for 'UserProfile'
]);

// Type definition for frontend requests
export type Schema = ClientSchema<typeof schema>;

// Define the data resource for deployment
export const data = defineData({
  schema,  // Attach the combined schema
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',  // Default authorization mode: API key
    apiKeyAuthorizationMode: { expiresInDays: 30 }  // API key expiration set to 30 days
  }
});
