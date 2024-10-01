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
      cartItems: a.hasMany('CartItem', 'productId'), // Refers to CartItem.productId
    }).authorization(allow => [allow.publicApiKey()]),

  User: a
    .model({
      id: a.id(),
      name: a.string(),
      email: a.string(),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // One-to-Many relationship with Cart
      carts: a.hasMany('Cart', 'userId'), // Refers to Cart.userId
    }).authorization(allow => [allow.publicApiKey()]),

  Cart: a
    .model({
      id: a.id(),
      // Foreign key linking Cart to User
      userId: a.belongsTo('User', 'id'),  // Refers to User.id
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
      // One-to-Many relationship with CartItem
      cartItems: a.hasMany('CartItem', 'cartId'), // Refers to CartItem.cartId
    }).authorization(allow => [allow.publicApiKey()]),

  CartItem: a
    .model({
      id: a.id(),
      // Foreign key linking CartItem to Cart
      cartId: a.belongsTo('Cart', 'id'),  // Refers to Cart.id
      // Foreign key linking CartItem to Product
      productId: a.belongsTo('Product', 'id'),  // Refers to Product.id
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
