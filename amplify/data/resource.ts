import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  

  Product: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(), // Optional field
      price: a.float(),
      image: a.string(), // Optional field
      createdAt: a.timestamp(), 
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.owner()]),

  // Order now links to users via userId and has an array of OrderProduct (many-to-many relationship)
  Order: a
    .model({
      id: a.id(),
      userId: a.string(), // One-to-Many: A user can have multiple orders
      status: a.enum(['PENDING', 'IN_CART', 'PLACED', 'IN_TRANSIT', 'DELIVERED', 'RETURNED', 'REPLACED']),
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.owner()]),

  // New OrderProduct model for many-to-many relationship between Order and Product
  OrderProduct: a
    .model({
      orderId: a.string(), // Links to Order
      productId: a.string(), // Links to Product
      quantity: a.integer(),
      price: a.float(),
    }).authorization(allow => [allow.owner()]),

  User: a
    .model({
      id: a.id(),
      email: a.string(),
      password: a.string(), // Consider hashing passwords in production
      name: a.string(), // Optional field
      createdAt: a.timestamp(),
      updatedAt: a.timestamp(),
    }).authorization(allow => [allow.owner()]),

  // Wishlist now has a many-to-many relationship with Product
  // Wishlist: a
  //   .model({
  //     id: a.id(),
  //     userId: a.string(), // One-to-Many: A user can have multiple wishlists
  //     createdAt: a.timestamp(),
  //     updatedAt: a.timestamp(),
  //   }).authorization(allow => [allow.owner()]),

  // // New WishlistProduct model for many-to-many relationship between Wishlist and Product
  // WishlistProduct: a
  //   .model({
  //     wishlistId: a.string(), // Links to Wishlist
  //     productId: a.string(), // Links to Product
  //     addedAt: a.timestamp(),
  //   }).authorization(allow => [allow.owner()]),

  // Revenue: a
  //   .model({
  //     id: a.id(),
  //     amount: a.float(),
  //     createdAt: a.timestamp(),
  //     updatedAt: a.timestamp(),
  //   }).authorization(allow => [allow.owner()]),
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
