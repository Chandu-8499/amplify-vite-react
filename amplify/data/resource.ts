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

  // Product: a
  //   .model({
  //     id: a.id(),
  //     name: a.string(),
  //     description: a.string(), // Optional field
  //     price: a.float(),
  //     image: a.string(), // Optional field
  //     createdAt: a.timestamp(), 
  //     updatedAt: a.timestamp(),
  //     stock: a.float(),
  //     cartItems: a.hasMany('CartItem', 'productId'), // Linking to CartItem
  //   }).authorization(allow => [allow.publicApiKey()]),

  User: a
    .model({
      id: a.id(),
      email: a.string(),
      password: a.string(), // Consider hashing passwords
      name: a.string(), // Optional field
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      carts: a.hasMany('Cart', 'userId'), // Linking to the Cart
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      userId: a.string(), // Links to User
      // userId: a.belongsTo('User', 'id'), // Links to User
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      cartItems: a.hasMany('CartItem', 'cartId'), // Linking to CartItem
    }).authorization(allow => [allow.publicApiKey()]),

  // CartItem: a
  //   .model({
  //     cartId: a.string(), // Links to Cart
  //     productId: a.string(), // Links to Product
  //     // cartId: a.belongsTo('Cart', 'id'), // Links to Cart
  //     // productId: a.belongsTo('Product', 'id'), // Links to Product
  //     quantity: a.integer(),
  //   }).authorization(allow => [allow.publicApiKey()]),
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