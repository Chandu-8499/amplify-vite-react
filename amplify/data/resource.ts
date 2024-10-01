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
      // One-to-Many relationship with CartItem
      cartItems: a.hasMany('CartItem', 'productId'), 
    }).authorization(allow => [allow.publicApiKey()]),

  User: a
    .model({
      id: a.id(),
      name: a.string(),
      email: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // One-to-Many relationship with Cart
      carts: a.hasMany('Cart', 'userId'), 
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      // Foreign key linking Cart to User
      userId: a.belongsTo('User', 'id'),  // Updated to use the correct foreign key
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // One-to-Many relationship with CartItem
      cartItems: a.hasMany('CartItem', 'cartId'), 
    }).authorization(allow => [allow.publicApiKey()]),

  CartItem: a
    .model({
      id: a.id(),
      // Foreign key linking CartItem to Cart
      cartId: a.belongsTo('Cart', 'id'),  // Ensuring proper foreign key reference
      // Foreign key linking CartItem to Product
      productId: a.belongsTo('Product', 'id'),  // Ensuring proper foreign key reference
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
