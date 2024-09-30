import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  ToDo: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(), // Optional field
      price: a.float(),
      image: a.string(), // Optional field
      createdAt: a.timestamp(), 
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.publicApiKey()]),

  Product: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(), // Optional field
      price: a.float(),
      image: a.string(), // Optional field
      createdAt: a.timestamp(), 
      updatedAt: a.timestamp(),
      stock: a.float(),
    }).authorization(allow => [allow.publicApiKey()]),


  User: a
    .model({
      id: a.id(),
      email: a.string(),
      password: a.string(), // Consider hashing passwords
      name: a.string(), // Optional field
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      userId: a.string(), // Links to User
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.publicApiKey()]),

  CartItem: a
    .model({
      cartId: a.string(), // Links to Cart
      productId: a.string(), // Links to Product
      quantity: a.integer(),
    }).authorization(allow => [allow.publicApiKey()]),

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
