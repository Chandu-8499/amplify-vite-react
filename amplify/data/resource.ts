import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  ToDo: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      price: a.float(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.publicApiKey()]),

  Product: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      price: a.float(),
      image: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      stock: a.float(),
      cartItems: a.hasMany('CartItem', 'productId'), // Reference to productId in CartItem
    }).authorization(allow => [allow.publicApiKey()]),

  User: a
    .model({
      id: a.id(),
      name: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      carts: a.hasMany('Cart', 'userId'), // Reference to userId in Cart
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      userId: a.belongsTo('User', 'id'), // Reference to User
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      cartItems: a.hasMany('CartItem', 'cartId'), // Reference to cartId in CartItem
    }).authorization(allow => [allow.publicApiKey()]),

  CartItem: a
    .model({
      id: a.id(),
      cartId: a.belongsTo('Cart', 'id'), // Belongs to Cart
      productId: a.belongsTo('Product', 'id'), // Belongs to Product
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
