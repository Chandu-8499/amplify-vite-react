import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Product: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      price: a.float(),
      image: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // Establishing a one-to-many relationship with CartItem
      cartItems: a.hasMany('CartItem', 'productId'), 
    }).authorization(allow => [allow.publicApiKey()]),

  User: a
    .model({
      id: a.id(),
      name: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // Establishing a one-to-many relationship with Cart
      carts: a.hasMany('Cart', 'userId'), 
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      // Each Cart is linked to a User
      userId: a.belongsTo('User', 'id'),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // Each Cart has many CartItems
      cartItems: a.hasMany('CartItem', 'cartId'),
    }).authorization(allow => [allow.publicApiKey()]),

  CartItem: a
    .model({
      id: a.id(),
      // Each CartItem is linked to a Cart
      cartId: a.belongsTo('Cart', 'id'),
      // Each CartItem is linked to a Product
      productId: a.belongsTo('Product', 'id'),
      quantity: a.integer(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
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
