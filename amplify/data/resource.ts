import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// User Model
const User = a
  .model({
    id: a.id(),
    name: a.string().required(),
    email: a.string().required(),
    createdAt: a.timestamp(),
    updatedAt: a.timestamp(),
    // One-to-Many relationship with Cart
    carts: a.hasMany('Cart', 'userId'), // Refers to Cart.userId
  }).authorization(allow => [allow.publicApiKey()]);

// Product Model
const Product = a
  .model({
    id: a.id(),
    name: a.string().required(),
    description: a.string().required(),
    price: a.float().required(),
    image: a.string(),
    createdAt: a.timestamp(),
    updatedAt: a.timestamp(),
    // One-to-Many relationship with CartItem
    cartItems: a.hasMany('CartItem', 'productId'), // Refers to CartItem.productId
  }).authorization(allow => [allow.publicApiKey()]);

// Cart Model
const Cart = a
  .model({
    id: a.id(),
    // Foreign key linking Cart to User
    userId: a.belongsTo('User', 'id'),  // Refers to User.id
    createdAt: a.timestamp(),
    updatedAt: a.timestamp(),
    // One-to-Many relationship with CartItem
    cartItems: a.hasMany('CartItem', 'cartId'), // Refers to CartItem.cartId
  }).authorization(allow => [allow.publicApiKey()]);

// CartItem Model
const CartItem = a
  .model({
    id: a.id(),
    // Foreign key linking CartItem to Cart
    cartId: a.belongsTo('Cart', 'id'),  // Refers to Cart.id
    // Foreign key linking CartItem to Product
    productId: a.belongsTo('Product', 'id'),  // Refers to Product.id
    quantity: a.integer().required(),
    createdAt: a.timestamp(),
    updatedAt: a.timestamp(),
  }).authorization(allow => [allow.publicApiKey()]);

// Combined Schema Definition
const schema = a.schema({
  User,
  Product,
  Cart,
  CartItem,
});

// Export the schema type for TypeScript usage
export type Schema = ClientSchema<typeof schema>;

// Define data configuration with authorization modes
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});